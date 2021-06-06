package com.projectservice.services;

import com.projectservice.services.IProjectService;
import com.projectservice.models.Project;
import com.projectservice.repository.ProjectRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProjectService implements IProjectService {

    private final ProjectRepo projectRepo;

    /*
    *
    * Create
    *
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

    @Override
    public List<Project> findAllByUserId(String userId) {
        return null;
    }


    /*
     *
     * Read
     *
     */
    @Override
    public Project findByProjectId(String projectId) {
        return projectRepo.findByProjectId(projectId);
    }


    /*
     *
     * Update
     *
     */

    @Override
    public void update(Project project) {

    }

    /*
     *
     * Delete
     *
     */

    @Override
    public void delete(String projectId) {

    }
}
