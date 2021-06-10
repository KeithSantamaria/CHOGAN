package com.projectservice.controller;

import com.projectservice.models.UserStory;
import com.projectservice.services.IUserStoryService;
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
public class UserStoryController {

    private final IUserStoryService userStoryService;

    /*
    *
    * Create
    *
    * */

    /**
     * Creates a new userstory and adds it to the repo
     * @param userStory The userstory to add
     * @return The response entity
     */
    @PostMapping("/create/project/userstory")
    public ResponseEntity<List<UserStory>> createNewUserStory(@RequestBody UserStory userStory){
       try{
           userStoryService.insert(userStory);
       }catch (Exception e){
            log.error("Failed to add userstory to the db.");
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
       log.info("Successfully added userstory object the db.");
       return new ResponseEntity<>(userStoryService.findByProjectId(userStory.getProjectId()),HttpStatus.OK);
    }

    /*
    *
    * Read
    *
    * */

    /**
     * Getss a userstory based on userstory Id
     * @param userStoryId The userstory Id to get
     * @return The response entity
     */
    @GetMapping("/read/project/userstory")
    public ResponseEntity<UserStory> readUserStory(@RequestParam String userStoryId){
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
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
