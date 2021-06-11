package com.example.userservice.controller;

import com.example.userservice.model.User;
import com.example.userservice.service.UserService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Log4j2
@RestController
@RequestMapping("/user")
//CHANGE THAT ONCE WE GET FRONTEND STABLE
@CrossOrigin(origins = "http://localhost:3000", maxAge = 8000)
public class UserController {
    //vars
    @Autowired
    UserService service;

    //Methods
    @PostMapping()
    public ResponseEntity<User> create(@RequestBody User request){
        User userCreated = service.newUser(request);
        log.info("Created user: " + userCreated);
        return userCreated == null ? ResponseEntity.badRequest().build() : ResponseEntity.ok(userCreated);
    }

    @PutMapping()
    public ResponseEntity<User> updateUser(@RequestBody User request){
        User userUpdated= service.updateUser(request);
        log.info("attempting to update user");
        log.info("user updated: " + userUpdated);
        return userUpdated == null ? ResponseEntity.badRequest().build() : ResponseEntity.ok(userUpdated);
    }

    @GetMapping()
    public ResponseEntity<User> loginInUser(@RequestBody User request){
        String email = request.getEmail();
        String password = request.getPassword();
        User loggedInUser = service.userLogIn(email,password);
        log.info("attempting to log in user");
        log.info("log in updated: " + loggedInUser);
        return loggedInUser == null ? ResponseEntity.badRequest().build() : ResponseEntity.ok(loggedInUser);
    }
}
