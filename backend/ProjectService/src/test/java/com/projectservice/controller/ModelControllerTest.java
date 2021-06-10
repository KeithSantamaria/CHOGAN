package com.projectservice.controller;

import com.projectservice.services.IModelService;
import com.projectservice.services.ModelService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class ModelControllerTest {

    private final IModelService modelService = Mockito.mock(ModelService.class);

    private final ModelController modelController = new ModelController(modelService);

    /*
    *
    * Create
    *
    * */

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
