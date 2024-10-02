package com.project.ofd.controllers;

import com.project.ofd.model.User;
import com.project.ofd.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    UserService userService;
    @GetMapping("/profile")
    public ResponseEntity<User> findUserByJwtToken(@RequestHeader("Authorization") String Jwt) throws Exception{

        System.out.println(" THE REQUEST FOR USER HAS COME THROUGH@@@@@@@@@@@@" +Jwt);
        User user = userService.findUserByJwtToken(Jwt);
        return new ResponseEntity<>(user, HttpStatus.OK);

    }
}
