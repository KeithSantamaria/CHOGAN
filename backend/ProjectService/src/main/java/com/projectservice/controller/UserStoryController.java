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
     * Gets a userstory based on userstory Id
     * @param userStoryId The userstory Id to get
     * @return The response entity
     */
    @GetMapping("/read/project/userstory")
    public ResponseEntity<UserStory> readUserStory(@RequestParam String userStoryId){
        UserStory foundUserStory = userStoryService.findByUserStoryId(userStoryId);
        if (foundUserStory == null){
            log.error("No such user story exists of userStoryId : {}",userStoryId);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Successfully found userstory of userStoryId : {}",userStoryId);
        return new ResponseEntity<>(foundUserStory,HttpStatus.OK);
    }

    /**
     * Gets a list of user stories from a projectId
     * @param projectId The project id of the field to grab
     * @return The response entity
     */
    @GetMapping("/read/project/userstories")
    public ResponseEntity<List<UserStory>> readUserStories(@RequestParam String projectId){
        List<UserStory> userStoryList = userStoryService.findByProjectId(projectId);
        log.info("Successfully retrieved all user stories associated with projectId : {}",projectId);
        return new ResponseEntity<>(userStoryList,HttpStatus.OK);
    }

    /*
    *
    * Update
    *
    * */

    /**
     * Takes a user story and updates it, then returns all
     * @param userStory The updated userstory
     * @return The response entity
     */
    @PutMapping("/update/project/userstory")
    public ResponseEntity<List<UserStory>> updateUserStory(@RequestBody UserStory userStory){
        UserStory updatedUserStory = userStoryService.updateUserStory(userStory);
        if (updatedUserStory == null){
            log.error("Failed to update userstory of userStoryId : {}",userStory.getUserStoryId());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Successfully updated userstory of userStoryId : {}",userStory.getUserStoryId());
        return new ResponseEntity<>(userStoryService.findByProjectId(userStory.getProjectId()),HttpStatus.OK);
    }

    /*
    *
    * Delete
    *
    * */
}
