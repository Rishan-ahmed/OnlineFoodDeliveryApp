package com.project.ofd.serviceimp;

import com.project.ofd.config.Jwt_Provider;
import com.project.ofd.model.User;
import com.project.ofd.repository.UserRepository;
import com.project.ofd.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImp implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private Jwt_Provider jwtProvider;

    @Override
    public User findUserByJwtToken(String Jwt) throws Exception {
        String Email = jwtProvider.getEmailFromJwtToken(Jwt);
        User user = findUserByEmail(Email);
        return user;
    }

    @Override
    public User findUserByEmail(String email) throws Exception {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new Exception();
        }

        return user;
    }
}
