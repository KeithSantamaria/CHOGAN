package com.projectservice.controller;

import com.projectservice.models.Model;
import com.projectservice.services.IModelService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ModelController {

    private final IModelService modelService;

    /*
    *
    * Create
    *
    * */

    /**
     * Creates and adds a model to the db
     * @param model The model to add
     * @return The created model
     */
    @PostMapping("/create/project/model")
    public ResponseEntity<Model> createNewModel(@RequestBody Model model){
        try{
            Model savedModel = modelService.insert(model);
            log.info("Successfully added new model to the DB.");
            return new ResponseEntity<>(savedModel,HttpStatus.CREATED);
        }catch (Exception e){
            log.error("Failed to add model to the DB.");
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
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
