package com.example.userservice.controller;

import com.example.userservice.repository.UserRepo;
import com.example.userservice.service.UserService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    //vars
    UserRepo repo;
    UserService service;

    //Methods
}
