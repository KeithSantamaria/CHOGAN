package com.projectservice.controller;

import com.projectservice.models.Model;
import com.projectservice.models.Project;
import com.projectservice.services.IModelService;
import com.projectservice.services.ModelService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

public class ModelControllerTest {

    private final IModelService modelService = Mockito.mock(ModelService.class);

    private final ModelController modelController = new ModelController(modelService);

    /*
    *
    * Create
    *
    * */

    @Test
    void createNewModelSuccessTest(){
        Model model = new Model();

        ResponseEntity<Model> response = modelController.createNewModel(model);

        Assertions.assertEquals(response.getStatusCode(), HttpStatus.CREATED);
    }

    @Test
    void createNewModelFailureTest(){
        Model model = new Model();

        Mockito.doThrow(new Exception());

        ResponseEntity<Model> response = modelController.createNewModel(model);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /*
    *
    * Read
    *
    * */

    @Test
    void readModelSuccessTest(){
        String modelId = "Id";
        Model model = new Model();

        Mockito.when(modelService.findByModelId(modelId)).thenReturn(model);

        ResponseEntity<Model> response = modelController.readModel(modelId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    @Test
    void readModelFailureTest(){
        String modelId = "Id";

        Mockito.when(modelService.findByModelId(modelId)).thenReturn(null);

        ResponseEntity<Model> response = modelController.readModel(modelId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Test
    void readModelsSuccessTest(){
        String projectId = "Id";
        List<Model> list = new ArrayList<>();
        list.add(new Model());

        Mockito.when(modelService.findByProjectId(projectId)).thenReturn(list);

        ResponseEntity<List<Model>> response = modelController.readModels(projectId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    @Test
    void readModelsFailureTest(){
        String projectId = "Id";
        List<Model> list = new ArrayList<>();

        Mockito.when(modelService.findByProjectId(projectId)).thenReturn(list);

        ResponseEntity<List<Model>> response = modelController.readModels(projectId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /*
    *
    * Update
    *
    * */

    @Test
    void updateModelSuccessTest(){
        Model model = new Model();

        Mockito.when(modelService.updateModel(model)).thenReturn(model);

        ResponseEntity<Model> response = modelController.updateModel(model);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    @Test
    void updateModelFailureTest(){
        Model model = new Model();

        Mockito.when(modelService.updateModel(model)).thenReturn(null);

        ResponseEntity<Model> response = modelController.updateModel(model);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /*
    *
    * Delete
    *
    * */
}
