package com.example.latihanhexagon.service;

import com.example.latihanhexagon.entity.UserEntity;
import com.example.latihanhexagon.service.in.GetAllUserUseCase;
import com.example.latihanhexagon.service.out.GetAllUserPort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetAllUserService implements GetAllUserUseCase {
    private final GetAllUserPort getAllUserPort;

    @Override
    public List<UserEntity> getAllUser() {
        return getAllUserPort.getAllUser();
    }
}
