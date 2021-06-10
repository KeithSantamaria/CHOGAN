package com.example.userservice;

import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.Assert;

public class PasswordEncodingTests {


    public final String PASSWORD = "testPassword";


    @Test
    public void BCryptTest(){
        PasswordEncoder bcrypt = new BCryptPasswordEncoder();
        Assert.isTrue(bcrypt.matches(PASSWORD,
                        bcrypt.encode(PASSWORD)), "Password");
    }


}
