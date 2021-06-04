package com.example.projectservice.services;

import com.example.projectservice.models.*;

import java.util.List;

/**
 * TODO: update void or return project;
 */
public interface IProjectService {

    void insert(Project project);
    void delete(String projectId);
    void update(Project project);
    List<Project> findAllByUserId(String userId);

}
