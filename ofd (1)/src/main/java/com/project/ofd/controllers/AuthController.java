package com.project.ofd.controllers;

import com.project.ofd.Requests.loginRequest;
import com.project.ofd.Response.AuthResponse;
import com.project.ofd.Response.emailExist;
import com.project.ofd.config.Jwt_Provider;
import com.project.ofd.model.Cart;
import com.project.ofd.model.USER_ROLE;
import com.project.ofd.model.User;
import com.project.ofd.repository.CartRepository;
import com.project.ofd.repository.UserRepository;
import com.project.ofd.service.CustomerUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private Jwt_Provider jwtProvider;
    @Autowired
    private CustomerUserDetailsService customerUserDetailsService;
    @Autowired
    CartRepository cartRepository;
    
    @PostMapping("/signUp")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user){
        System.out.println("Received user registration: " + user);
        User isEmailExist = userRepository.findByEmail(user.getEmail());
        if(isEmailExist != null){
            AuthResponse authResponse =  new AuthResponse();
            authResponse.setMessege("User with this email already exists");
            return new ResponseEntity<>(authResponse, HttpStatus.FORBIDDEN);
        }
        User CreateUser = new User();
        CreateUser.setEmail(user.getEmail());
        CreateUser.setPassword(passwordEncoder.encode(user.getPassword()));
        CreateUser.setUsername(user.getUsername());
        CreateUser.setRole(user.getRole());
        User savedUser = userRepository.save(CreateUser);
        Cart cart = new Cart();
        cart.setCustomer(savedUser);
        cartRepository.save(cart);
        Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail(),user.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String Jwt = jwtProvider.generateToken(authentication);

        AuthResponse authResponse =  new AuthResponse();
        authResponse.setJwt(Jwt);
        authResponse.setRole(String.valueOf(savedUser.getRole()));
        authResponse.setMessege("Registration successful");

        return new ResponseEntity<>(authResponse, HttpStatus.CREATED);

    }
    @PostMapping("/signing")
    public ResponseEntity<AuthResponse> loginHandler(@RequestBody loginRequest req){

        String username = req.getEmail();
        String password = req.getPassword();
        Authentication authentication = authenticate(username,password);
        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        String role = authorities.isEmpty()?null:authorities.iterator().next().getAuthority();
        String Jwt = jwtProvider.generateToken(authentication);

        AuthResponse authResponse =  new AuthResponse();
        authResponse.setJwt(Jwt);
        authResponse.setRole(String.valueOf(USER_ROLE.valueOf(role)));
        authResponse.setMessege("Login successful");

        return new ResponseEntity<>(authResponse, HttpStatus.OK);

    }

    private Authentication authenticate(String username, String password){
        UserDetails userDetails = customerUserDetailsService.loadUserByUsername(username);
        if(userDetails == null){
            throw new UsernameNotFoundException("Username not found");
        }
        if(!passwordEncoder.matches(password,userDetails.getPassword())){
            throw new BadCredentialsException("Wrong password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}
