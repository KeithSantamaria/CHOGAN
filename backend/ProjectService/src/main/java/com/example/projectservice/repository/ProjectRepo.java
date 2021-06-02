package com.example.projectservice.repository;

import com.example.projectservice.models.*;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

@Repository
public interface ProjectRepo extends MongoRepository<Project, String>{
    public List<Project> findByUserId(String userId);
}
