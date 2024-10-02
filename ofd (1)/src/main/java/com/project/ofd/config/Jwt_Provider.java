package com.project.ofd.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
@Service
public class Jwt_Provider {
    private SecretKey secretKey = Keys.hmacShaKeyFor(Jwt_Constent.SECRET_KEY.getBytes());

    public String generateToken(Authentication token) {
        Collection<? extends GrantedAuthority> authorities = token.getAuthorities();
        String roles = populateAuthorities(authorities);
        String Jwt = Jwts.builder().setIssuedAt(new Date()).setExpiration((new Date(new Date().getTime()+8560000))).claim("email", token.getName()).claim("authorities", roles).signWith(secretKey).compact();
        return Jwt;

    }
    public String getEmailFromJwtToken(String Jwt) {
        Jwt = Jwt.substring(7);
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(secretKey)
                .build()
                .parseClaimsJws(Jwt)
                .getBody();
        String Email = String.valueOf(claims.get("email"));

        return Email;
    }
    private String populateAuthorities(Collection<? extends GrantedAuthority> authorities) {
        Set<String> authoritiesSet = new HashSet<>();
        for (GrantedAuthority authority : authorities) {
            authoritiesSet.add(authority.getAuthority());
        }
        return String.join(",", authoritiesSet);
    }
}

