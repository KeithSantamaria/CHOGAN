package com.projectservice.services;

import com.projectservice.models.UserStory;
import com.projectservice.repository.UserStoryRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Class for handling all service layer methods for user stories
 */
@Service
@AllArgsConstructor
public class UserStoryService implements IUserStoryService{

    private final UserStoryRepo userStoryRepo;

    /*
    *
    * Create
    *
    * */

    @Override
    public void insert(UserStory userStory) {
    }

    /*
    *
    * Read
    *
    * */

    @Override
    public UserStory findByUserStoryId(String userStoryId) {
        return userStoryRepo.findUserStoryById(userStoryId);
    }

    @Override
    public List<UserStory> findByProjectId(String projectId) {
        return userStoryRepo.findByProjectId(projectId);
    }

    /*
    *
    * Update
    *
    * */

    @Override
    public UserStory updateUserStory(UserStory userStory) {
        return userStoryRepo.save(userStory);
    }

    /*
    *
    * Delete
    *
    * */

    @Override
    public List<UserStory> deleteUserStory(String userStoryId) {
        return null;
    }
}
