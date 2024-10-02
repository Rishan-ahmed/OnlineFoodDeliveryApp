package com.project.ofd.Response;

import lombok.Data;

@Data
public class AuthResponse {
    private String Jwt;
    private String messege;
    private String role;
}
