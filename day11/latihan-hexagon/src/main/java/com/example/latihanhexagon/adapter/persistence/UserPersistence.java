package com.example.latihanhexagon.adapter.persistence;

import com.example.latihanhexagon.entity.UserEntity;
import com.example.latihanhexagon.service.out.CreateUserPort;
import com.example.latihanhexagon.service.out.GetAllUserPort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class UserPersistence implements GetAllUserPort, CreateUserPort {
    private final UserRepository userRepository;

    @Override
    public List<UserEntity> getAllUser() {
        return userRepository.findAll();
    }


    @Override
    public UserEntity createUser(UserEntity userEntity) {
        return userRepository.save(userEntity);
    }
}
