package com.projectservice.services;

import com.projectservice.models.ERD;
import com.projectservice.repository.ERDRepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.ArrayList;
import java.util.List;

public class ERDServiceTest {

    private final ERDRepo erdRepo = Mockito.mock(ERDRepo.class);

    private final ERDService erdService = new ERDService(erdRepo);

    /*
    *
    * Create
    *
    * */

    @Test
    void insertTest(){
        ERD erd = new ERD();
        erdService.insert(erd);
    }

    /*
    *
    * Read
    *
    * */

    @Test
    void findByERDIdTest(){
        String erdID = "Id";
        ERD erd = new ERD();

        Mockito.when(erdRepo.findByErdId(erdID)).thenReturn(erd);

        ERD foundERD = erdService.findByErdId(erdID);

        Assertions.assertEquals(foundERD,erd);
    }

    @Test
    void findByProjectIdTest(){
        String projectId = "Id";
        List<ERD> list = new ArrayList<>();

        Mockito.when(erdRepo.findByProjectId(projectId)).thenReturn(list);

        List<ERD> foundList = erdService.findByProjectId(projectId);

        Assertions.assertEquals(foundList,list);
    }

    /*
    *
    * Update
    *
    * */

    @Test
    void updateERDTest(){
        ERD erd = new ERD();

        Mockito.when(erdRepo.save(erd)).thenReturn(erd);

        ERD foundERD = erdService.updateERD(erd);

        Assertions.assertEquals(foundERD,erd);
    }

    /*
    *
    * Delete
    *
    * */

    @Test
    void deleteERDSuccessTest(){
        String erdId = "Id";
        ERD erd = new ERD();
        erd.setProjectId("pId");
        List<ERD> list = new ArrayList<>();

        Mockito.when(erdRepo.findByErdId(erdId)).thenReturn(erd);
        Mockito.when(erdRepo.findByProjectId("pId")).thenReturn(list);

        List<ERD> foundList = erdService.deleteERD(erdId);

        Assertions.assertEquals(foundList,list);
    }

    @Test
    void deleteERDFailureTest(){
        String erdId = "Id";

        Mockito.when(erdRepo.findByErdId(erdId)).thenReturn(null);

        List<ERD> foundList = erdService.deleteERD(erdId);

        Assertions.assertNull(foundList);
    }
}
