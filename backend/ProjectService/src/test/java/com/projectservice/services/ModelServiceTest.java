package com.projectservice.services;

import com.projectservice.models.Model;
import com.projectservice.repository.ModelRepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class ModelServiceTest {

    private final ModelRepo modelRepo = Mockito.mock(ModelRepo.class);

    private final ModelService modelService = new ModelService(modelRepo);

    /*
    *
    * Create
    *
    * */

    @Test
    void insertTest(){
        Model model = new Model();

        Mockito.when(modelRepo.save(model)).thenReturn(model);

        Model foundModel = modelService.insert(model);

        Assertions.assertEquals(foundModel,model);
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
