package com.projectservice.controller;

import com.projectservice.models.Project;
import com.projectservice.services.IProjectService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller for handling all project related endpoints
 */
@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProjectController {

    private final IProjectService projectService;

    /*
    *
    * Create
    *
    * */

    /**
     * Creates a project in the database
     * @param project The project to add
     * @return A response entity containing the success of the creation
     */
    @PutMapping("create/project")
    public ResponseEntity<Project> createNewProject(@RequestBody Project project){
        // two possible solutions, either a successful creation or a failed creation
        try{
            projectService.insert(project);
            log.info("Successfully created project with id: {}.",project.getProjectId());
            return new ResponseEntity<>(project,HttpStatus.CREATED);
        }catch (Exception e){
            log.error("Failed to create new project.");
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /*
    *
    * Read
    *
    * */

    /**
     * Reads a project based off of a projects Id
     * @param projectId The Id of the project to read
     * @return The status of the project
     */
    @GetMapping("/read/project")
    public ResponseEntity<Project> readProject(@RequestParam String projectId){
        Project project = projectService.findByProjectId(projectId);
        if (project == null){
            log.error("Cannot retrieve project with id: {}. Project does not exist.",projectId);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Retrieved project with id: {}.",projectId);
        return new ResponseEntity<>(project,HttpStatus.OK);
    }
    /*
    *
    * Update
    *
    * */

    /*
    *
    * Delete
    *
    * */

}
