package com.example.latihanhexagon.adapter.controller;

import com.example.latihanhexagon.entity.UserEntity;
import com.example.latihanhexagon.service.in.CreateUserUseCase;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class CreateUserController {
    private final CreateUserUseCase createUserUseCase;

    @PostMapping("/users")
    public UserEntity createUser(@RequestBody UserEntity userEntity) {
        return createUserUseCase.createUser(userEntity);
    }
}
