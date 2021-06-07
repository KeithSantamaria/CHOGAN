package com.projectservice.services;

import com.projectservice.models.Project;

import java.util.List;

/**
 * Functional interface for the project service
 */
public interface IProjectService {

    void insert(Project project);
    void delete(String projectId);
    Project update(Project project);
    Project findByProjectId(String projectId);
    List<Project> findAllByUserId(String userId);

}
