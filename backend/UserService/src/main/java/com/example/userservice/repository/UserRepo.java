package com.example.userservice.repository;

import com.example.userservice.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends MongoRepository<User, String > {

    /*Queries*/
    User findByEmail(String email);
}
