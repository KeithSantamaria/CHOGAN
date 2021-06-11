package com.projectservice.services;

import com.projectservice.repository.WireframeRepo;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class WireframeServiceTest {

    private final WireframeRepo wireframeRepo = Mockito.mock(WireframeRepo.class);

    private final WireframeService wireframeService = new WireframeService(wireframeRepo);

    /*
    *
    * Create
    *
    * */

    @Test
    void insertTest(){

    }

    /*
    *
    * Read
    *
    * */

    @Test
    void findByWireframeIdTest(){

    }

    @Test
    void findByProjectIdTest(){

    }

    /*
    *
    * Update
    *
    * */

    @Test
    void updateWireframeTest(){

    }

    /*
    *
    * Delete
    *
    * */

    @Test
    void deleteWireframeSuccessTest(){

    }

    @Test
    void deleteWireframeFailureTest(){

    }
}
