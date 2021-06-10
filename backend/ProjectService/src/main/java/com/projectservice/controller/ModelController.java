package com.projectservice.controller;

import com.projectservice.models.Model;
import com.projectservice.services.IModelService;
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

    /**
     * Gets a single model from its id
     * @param modelId The id of the model to find
     * @return The response entity containing the model
     */
    @GetMapping("/read/project/model")
    public ResponseEntity<Model> readModel(@RequestParam String modelId){
        Model foundModel = modelService.findByModelId(modelId);
        if (foundModel == null){
            log.error("No such model exists of modelId : {}",modelId);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("Successfully found model of modelId : {}",modelId);
        return new ResponseEntity<>(foundModel,HttpStatus.OK);
    }

    /**
     * Finds a list of all models with a shared projectId
      * @param projectId The projectId to find models by
     * @return A response entity containing the models if successful
     */
    @GetMapping("/read/project/models")
    public ResponseEntity<List<Model>> readModels(@RequestParam String projectId){
        return new ResponseEntity<>(HttpStatus.OK);
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
