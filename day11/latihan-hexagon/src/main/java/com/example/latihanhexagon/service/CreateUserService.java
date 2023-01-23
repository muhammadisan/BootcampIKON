package com.example.latihanhexagon.service;

import com.example.latihanhexagon.entity.UserEntity;
import com.example.latihanhexagon.service.in.CreateUserUseCase;
import com.example.latihanhexagon.service.out.CreateUserPort;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CreateUserService implements CreateUserUseCase {
    @Autowired
    private final CreateUserPort createUserPort;

    @Override
    public UserEntity createUser(UserEntity userEntity) {
        return createUserPort.createUser(userEntity);
    }
}
