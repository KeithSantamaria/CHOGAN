package com.example.userservice.repository;

import com.example.userservice.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepo extends MongoRepository<User, String > {

    /*Queries*/

    /**
     *
     * @param email The email of the of the user
     * @return User after calling the query to find the user by their email
     */
    User findByEmail(String email);
}
