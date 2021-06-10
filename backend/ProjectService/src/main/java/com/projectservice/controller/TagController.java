package com.projectservice.controller;

import com.projectservice.models.Tag;
import com.projectservice.services.ITagService;
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
public class TagController {
    private final ITagService tagService;

    /*
    *
    * Create
    *
    * */

    /**
     * Adds a tag to the tag collection
     * @param tag The tag to add
     * @return The response of the attempt
     */
    @PostMapping("/create/project/tag")
    public ResponseEntity<List<Tag>> createNewTag(@RequestBody Tag tag){
        try{
            tagService.insert(tag);
        } catch (Exception e){
            log.error("Failed to create new tag object in MongoDB.");
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Successfully added a tag object to the DB.");
        return new ResponseEntity<>(tagService.findAllByProjectId(tag.getProjectId()),HttpStatus.OK);
    }

    /*
    *
    * Read
    *
    * */

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
