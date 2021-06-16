package com.example.userservice.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


/**
 * Enables Spring's Authentication and Access-Control FrameWork
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    PasswordEncoder passwordEncoder;

    /**
     *
     * @return A new encoder that uses a BCyrpt function to encrypt raw text
     */
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    /***
     *
     * @param http enables HTTP Security in Spring
     *             URL Strings of "/user/*" and "/login" are allowed to be accessed by everyone
     *             CSRF protection is disabled 
     * @throws Exception
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
          .antMatchers("/user/*","/user", "/login").permitAll()
          .anyRequest().authenticated()
          .and()
          .csrf().disable();
    }


}


//        http.authorizeRequests()
//          .antMatchers("/user").permitAll()
//          .anyRequest().authenticated();