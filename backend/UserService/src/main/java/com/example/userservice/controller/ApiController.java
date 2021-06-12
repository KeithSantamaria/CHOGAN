package com.example.userservice.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api")
public class ApiController {
    @GetMapping()
    public ResponseEntity<String> stringReturn(){
        return new ResponseEntity<>("Testing user service", HttpStatus.OK);
    }

    @GetMapping("/test")
    public ResponseEntity<String> stringReturnString(){
        return new ResponseEntity<>("Testing user service redirection /test", HttpStatus.OK);
    }
}
