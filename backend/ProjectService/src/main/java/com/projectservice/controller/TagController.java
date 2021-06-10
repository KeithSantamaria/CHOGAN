package com.projectservice.controller;

import com.projectservice.models.Tag;
import com.projectservice.services.ITagService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TagController {
    private final ITagService tagService;

    @PostMapping("/create/project/tag")
    public ResponseEntity<Tag> createNewTag(@RequestBody Tag tag){
        try{
            tagService.insert(tag);
        } catch (Exception e){
            log.error("Failed to create new tag object in MongoDB");
        }
    }
}
