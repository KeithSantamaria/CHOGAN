package com.projectservice.services;

import com.projectservice.models.Wireframe;
import com.projectservice.repository.WireframeRepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.ArrayList;
import java.util.List;

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
        Wireframe wireframe = new Wireframe();
        wireframeService.insert(wireframe);
    }

    /*
    *
    * Read
    *
    * */

    @Test
    void findByWireframeIdTest(){
        String wireframeId = "Id";
        Wireframe wireframe = new Wireframe();

        Mockito.when(wireframeRepo.findByWireframeId(wireframeId)).thenReturn(wireframe);

        Wireframe foundWireframe = wireframeService.findByWireframeId(wireframeId);

        Assertions.assertEquals(foundWireframe,wireframe);
    }

    @Test
    void findByProjectIdTest(){
        String projectId = "Id";
        List<Wireframe> list = new ArrayList<>();

        Mockito.when(wireframeRepo.findByProjectId(projectId)).thenReturn(list);

        List<Wireframe> foundList = wireframeService.findByProjectId(projectId);

        Assertions.assertEquals(foundList,list);
    }

    /*
    *
    * Update
    *
    * */

    @Test
    void updateWireframeTest(){
        Wireframe wireframe = new Wireframe();

        Mockito.when(wireframeRepo.save(wireframe)).thenReturn(wireframe);

        Wireframe foundWireframe = wireframeService.updateWireframe(wireframe);

        Assertions.assertEquals(foundWireframe,wireframe);
    }

    /*
    *
    * Delete
    *
    * */

    @Test
    void deleteWireframeSuccessTest(){
        String wireframeId = "Id";
        Wireframe wireframe = new Wireframe();
        wireframe.setProjectId("pId");
        List<Wireframe> list = new ArrayList<>();

        Mockito.when(wireframeRepo.findByWireframeId(wireframeId)).thenReturn(wireframe);
        Mockito.when(wireframeRepo.findByProjectId("pId")).thenReturn(list);

        List<Wireframe> foundList = wireframeService.deleteWireframe(wireframeId);

        Assertions.assertEquals(foundList,list);
    }

    @Test
    void deleteWireframeFailureTest(){
        String wireframeId = "Id";

        Mockito.when(wireframeRepo.findByWireframeId(wireframeId)).thenReturn(null);

        List<Wireframe> foundList = wireframeService.deleteWireframe(wireframeId);

        Assertions.assertNull(foundList);
    }
}
