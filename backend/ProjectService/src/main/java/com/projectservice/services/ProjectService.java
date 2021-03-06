package com.projectservice.services;

import com.projectservice.models.Project;
import com.projectservice.repository.ProjectRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Class for creating project services.
 */
@Service
@AllArgsConstructor
public class ProjectService implements IProjectService {

    private final ProjectRepo projectRepo;

    /*
    *
    * Create
    *
     */

    /**
     * Inserts a project into the repository
     * @param project The project to add
     */
    @Override
    public void insert(Project project) {
         projectRepo.insert(project);
    }

    /*
     *
     * Read
     *
     */

    /*
     *
     * Read
     *
     */

    /**
     * Finds a single project with the given project Id
     * @param projectId The id of the project to find
     * @return The project found, null if not
     */
    @Override
    public Project findByProjectId(String projectId) {
        return projectRepo.findByProjectId(projectId);
    }

    /**
     * Reads all projects by a given userId
     * @param userId the userId to read by
     * @return The list of projects
     */
    @Override
    public List<Project> findByUserId(String userId) { return projectRepo.findByUserId(userId); }
    /*
     *
     * Update
     *
     */

    /**
     * Updates a project with the given project
     * @param project The project to update and the updated version
     */
    @Override
    public Project update(Project project) {
        return projectRepo.save(project);
    }

    /*
     *
     * Delete
     *
     */

    /**
     * Deletes a given project based on project Id
     * @param projectId The project Id of the project to delete
     */
    @Override
    public void delete(String projectId) {
        projectRepo.deleteById(projectId);
    }
}
