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
        return new ResponseEntity<>(tagService.findAllByProjectId(tag.getProjectId()),HttpStatus.CREATED);
    }

    /*
    *
    * Read
    *
    * */

    /**
     * Reads a single tag by tag Id
     * @param tagId The tag to read
     * @return The response entity
     */
    @GetMapping("/read/project/tag")
    public ResponseEntity<Tag> readTag(@RequestParam String tagId){
        Tag foundTag = tagService.findByTagId(tagId);
        if (foundTag == null){
            log.error("Failed to find tag with tagId : {}",tagId);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Successfully found tag with tagId : {}",tagId);
        return new ResponseEntity<>(foundTag,HttpStatus.OK);
    }

    /**
     * Returns a list of all tags associated with a specific projectId
     * @param projectId The id of the project
     * @return A response entity
     */
    @GetMapping("/read/project/tags")
    public ResponseEntity<List<Tag>> readTags(@RequestParam String projectId){
        List<Tag> tags = tagService.findAllByProjectId(projectId);
        log.info("Successfully found tags for projectId : {}",projectId);
        return new ResponseEntity<>(tags,HttpStatus.OK);
    }

    /*
    *
    * Update
    *
    * */

    /**
     * Updates a tag and returns all the tags
     * @param tag The tag to update
     * @return The response entity
     */
    @PutMapping("/update/project/tag")
    public ResponseEntity<List<Tag>> updateTags(@RequestBody Tag tag){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /*
    *
    * Delete
    *
    * */
}
