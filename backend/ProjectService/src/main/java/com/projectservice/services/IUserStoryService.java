package com.projectservice.services;

import com.projectservice.models.UserStory;

import java.util.List;

/**
 * Functional interface for user stories
 */
public interface IUserStoryService{

    void insert(UserStory userStory);
}
