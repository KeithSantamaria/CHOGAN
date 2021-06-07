package com.projectservice.services;

import com.projectservice.models.*;
import com.projectservice.models.Project;

import java.util.List;

/**
 * TODO: update void or return project;
 */
public interface IProjectService {

    void insert(Project project);
    void delete(String projectId);
    void update(Project project);
    Project findByProjectId(String projectId);
    List<Project> findAllByUserId(String userId);

}
