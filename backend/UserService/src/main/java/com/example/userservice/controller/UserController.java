package com.example.userservice.controller;

import com.example.userservice.model.User;
import com.example.userservice.repository.UserRepo;
import com.example.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(value="http://localhost:6969")
public class UserController {
    @Autowired
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    //vars
    UserRepo repo;
    UserService service;
    //Methods

}
