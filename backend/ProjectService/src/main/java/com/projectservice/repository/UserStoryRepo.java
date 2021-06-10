package com.projectservice.repository;

import com.projectservice.models.UserStory;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserStoryRepo extends MongoRepository<UserStory, String> {
    List<UserStory> findByProjectId(String userStoryId);
    UserStory findUserStoryById(String userStoryId);
}
