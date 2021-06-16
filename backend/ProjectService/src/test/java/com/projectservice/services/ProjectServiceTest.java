package com.projectservice.services;

import com.projectservice.models.Project;
import com.projectservice.repository.ProjectRepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.SpringBootConfiguration;

import java.util.ArrayList;
import java.util.List;

@SpringBootConfiguration
class ProjectServiceTest {

    private final ProjectRepo projectRepo = Mockito.mock(ProjectRepo.class);

    private final ProjectService projectService = new ProjectService(projectRepo);

    /*
    *
    * Create
    *
    * */

    @Test
    public void insertTest(){
        Project project = new Project();

        projectService.insert(project);
    }

    /*
    *
    * Read
    *
    * */
    @Test
    public void findByProjectIdTest(){
        Project project = new Project();
        String projectId = "id";

        Mockito.when(projectRepo.findByProjectId(projectId)).thenReturn(project);

        Project foundProject = projectService.findByProjectId(projectId);

        Assertions.assertEquals(foundProject,project);
    }

    @Test
    void findByUserIdTest(){
        List<Project> list = new ArrayList<>();
        String userId = "Id";

        Mockito.when(projectRepo.findByUserId(userId)).thenReturn(list);

        List<Project> foundList = projectService.findByUserId(userId);

        Assertions.assertEquals(foundList,list);
    }

    /*
    *
    * Update
    *
    * */

    @Test
    public void updateProjectTest(){
        Project project = new Project();

        Mockito.when(projectRepo.save(project)).thenReturn(project);

        Project updatedProject = projectService.update(project);

        Assertions.assertEquals(updatedProject,project);
    }


    /*
    *
    * Delete
    *
    * */

    @Test
    public void deleteProjectTest(){
        String projectId = "Id";

        projectService.delete(projectId);
    }

}