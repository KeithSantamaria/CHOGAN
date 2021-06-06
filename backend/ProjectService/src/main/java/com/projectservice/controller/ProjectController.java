package com.projectservice.controller;

import com.projectservice.models.Project;
import com.projectservice.services.IProjectService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    @PutMapping("CreateNewProject")
    public ResponseEntity<Project> createNewProject(@RequestBody Project project){
        // two possible solutions, either a successful creation or a failed creation
        try{
            projectService.insert(project);
            return new ResponseEntity<>(project,HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /*
    *
    * Read
    *
    * */
    @GetMapping("/read/project")
    public ResponseEntity<Project> readProject(@RequestParam String projectId){
        Project project = projectService.findByProjectId(projectId);
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
