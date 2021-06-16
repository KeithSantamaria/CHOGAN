package com.projectservice.services;

import com.projectservice.models.Project;

import java.util.List;

/**
 * Functional interface for the project service
 */
public interface IProjectService {

    void insert(Project project);

    Project findByProjectId(String projectId);

    List<Project> findByUserId(String userId);

    Project update(Project project);

    void delete(String projectId);


}
