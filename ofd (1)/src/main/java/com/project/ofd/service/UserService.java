package com.project.ofd.service;

import com.project.ofd.model.User;
import org.springframework.stereotype.Service;
@Service
public interface UserService {

    public  User findUserByJwtToken(String Jwt) throws Exception;
    public User findUserByEmail(String email) throws Exception;
}
