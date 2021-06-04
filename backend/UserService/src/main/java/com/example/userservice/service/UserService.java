package com.example.userservice.service;

import org.springframework.stereotype.Service;
import com.example.userservice.model.User;
import com.example.userservice.repository.UserRepo;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;

@Log4j2
@Service
public class UserService {

    @Autowired
    private UserRepo dao;

//    public void clear() { dao.clear(); }

    public boolean newUser(String username, String password, String email, int securityQuestionId, String securityAnswer) {
        return true;
    }

    public boolean setFullName(String firstName, String lastName) {
        return true;
    }

    public User getUserByUsername(String username) {
        return new User();
    }

    public User getUserById(String Id) {
        return new User();
    }

    public User userLogIn(String username, String password) {
        return new User();
    }

    public void changePassword(String Id, String newPassword) {

    }

    public boolean checkSecurityQuestion(String Id, String response) {
        return true;
    }


}
