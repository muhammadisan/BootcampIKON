package com.example.latihanhexagon;

import com.example.latihanhexagon.adapter.persistence.UserRepository;
import com.example.latihanhexagon.entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootApplication
public class LatihanHexagonApplication {
	@Autowired
	private UserRepository repository;

	@PostConstruct
	public void initUsers() {
		List<UserEntity> users = Stream.of(
				new UserEntity(101, "javatechie@gmail.com", "password"),
				new UserEntity(102, "user1@gmail.com", "pwd1"),
				new UserEntity(103, "user2@gmail.com", "pwd2"),
				new UserEntity(104, "user3@gmail.com", "pwd3")).collect(Collectors.toList());
		repository.saveAll(users);
	}
	public static void main(String[] args) {
		SpringApplication.run(LatihanHexagonApplication.class, args);
	}
}
