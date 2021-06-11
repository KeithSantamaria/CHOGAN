package com.projectservice.repository;

import com.projectservice.models.UserStory;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Interface for handling the userstory repo
 */
@Repository
public interface UserStoryRepo extends MongoRepository<UserStory, String> {
    List<UserStory> findByProjectId(String projectId);
    UserStory findUserStoryById(String userStoryId);
}
