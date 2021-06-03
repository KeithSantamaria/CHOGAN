package com.example.projectservice.services;

import com.example.projectservice.models.Project;
import com.example.projectservice.repository.ProjectRepo;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ProjectServiceTest {

    private ProjectRepo projectRepo = Mockito.mock(ProjectRepo.class);

    private ProjectService projectService = new ProjectService(projectRepo);

    @Test
    public void insertTest(){
        Project project = new Project();

        projectService.insert(project);
    }

}