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

    /**
     * Inserts a userstory into the collcetion
     * @param userStory inserted userstory
     */
    @Override
    public void insert(UserStory userStory) {
        userStoryRepo.save(userStory);
    }

    /*
    *
    * Read
    *
    * */

    /**
     * Finds a single user story with the given id
     * @param userStoryId The given Id
     * @return The user story found
     */
    @Override
    public UserStory findByUserStoryId(String userStoryId) {
        return userStoryRepo.findUserStoryById(userStoryId);
    }

    /**
     * Finds all user stories associated with a given projectId
     * @param projectId The given projectId
     * @return The list of user stories
     */
    @Override
    public List<UserStory> findByProjectId(String projectId) {
        return userStoryRepo.findByProjectId(projectId);
    }

    /*
    *
    * Update
    *
    * */

    /**
     * Updates a user story
     * @param userStory the updated story
     * @return The updated story
     */
    @Override
    public UserStory updateUserStory(UserStory userStory) {
        return userStoryRepo.save(userStory);
    }

    /*
    *
    * Delete
    *
    * */

    /**
     * Deletes a user story from the collection
     * @param userStoryId The user story to delete
     * @return The list of user stories left
     */
    @Override
    public List<UserStory> deleteUserStory(String userStoryId) {
        UserStory foundUserStory = userStoryRepo.findUserStoryById(userStoryId);
        if (foundUserStory == null){
            return null;
        }
        String projectId = foundUserStory.getProjectId();
        userStoryRepo.deleteById(userStoryId);
        return userStoryRepo.findByProjectId(projectId);
    }
}
