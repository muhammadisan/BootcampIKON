package com.example.latihanhexagon.adapter.controller;

import com.example.latihanhexagon.entity.AuthRequest;
import com.example.latihanhexagon.entity.UserEntity;
import com.example.latihanhexagon.service.in.GetAllUserUseCase;
import com.example.latihanhexagon.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class GetAllUserController {
    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    private final GetAllUserUseCase getAllUserUseCase;

    @GetMapping("/users")
    public List<UserEntity> getAllUser() {
        return getAllUserUseCase.getAllUser();
    }

    @PostMapping("/authenticate")
    public String generateToken(@RequestBody AuthRequest authRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword())
            );
        } catch (Exception ex) {
            throw new Exception("invalid email/password");
        }
        return jwtUtil.generateToken(authRequest.getEmail());
    }
}
