package com.example.projectservice.services;

import com.example.projectservice.models.Project;
import com.example.projectservice.repository.ProjectRepo;
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
