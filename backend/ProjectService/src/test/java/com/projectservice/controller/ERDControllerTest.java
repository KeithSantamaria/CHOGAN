package com.projectservice.controller;

import com.projectservice.models.ERD;
import com.projectservice.services.ERDService;
import com.projectservice.services.IErdService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

public class ERDControllerTest {

    private final IErdService erdService = Mockito.mock(ERDService.class);

    private final ERDController erdController = new ERDController(erdService);

    /*
    *
    * Create
    *
    * */

    @Test
    void createNewERDSuccessTest(){
        ERD erd = new ERD();

        ResponseEntity<List<ERD>> response = erdController.createNewErd(erd);

        Assertions.assertEquals(response.getStatusCode(), HttpStatus.CREATED);
    }

    @Test
    void createNewERDFailureTest(){
        ERD erd = new ERD();

        Mockito.doThrow(new Exception());

        ResponseEntity<List<ERD>> response = erdController.createNewErd(erd);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /*
    *
    * Read
    *
    * */

    @Test
    void readERDSuccessTest(){
        String erdId = "Id";
        ERD erd = new ERD();

        Mockito.when(erdService.findByERDId(erdId)).thenReturn(erd);

        ResponseEntity<ERD> response = erdController.readERD(erdId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    @Test
    void readERDFailureTest(){
        String erdId = "Id";

        Mockito.when(erdService.findByERDId(erdId)).thenReturn(null);

        ResponseEntity<ERD> response = erdController.readERD(erdId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Test
    void readERDsTest(){
        String projectId = "Id";
        List<ERD> list = new ArrayList<>();

        Mockito.when(erdService.findByProjectId(projectId)).thenReturn(list);

        ResponseEntity<List<ERD>> response = erdController.readERDs(projectId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    /*
    *
    * Update
    *
    * */

    @Test
    void updateERDSuccessTest(){
        ERD erd = new ERD();

        Mockito.when(erdService.updateERD(erd)).thenReturn(erd);

        ResponseEntity<List<ERD>> response = erdController.updateERD(erd);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    @Test
    void updateERDFailureTest(){
        ERD erd = new ERD();

        Mockito.when(erdService.updateERD(erd)).thenReturn(null);

        ResponseEntity<List<ERD>> response = erdController.updateERD(erd);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /*
    *
    * Delete
    *
    * */

    @Test
    void deleteERDSuccessTest(){
        String erdId = "Id";
        List<ERD> list = new ArrayList<>();

        Mockito.when(erdService.deleteERD(erdId)).thenReturn(list);

        ResponseEntity<List<ERD>> response = erdController.deleteERD(erdId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    @Test
    void deleteERDFailureTest(){
        String erdId = "Id";

        Mockito.when(erdService.deleteERD(erdId)).thenReturn(null);

        ResponseEntity<List<ERD>> response = erdController.deleteERD(erdId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
