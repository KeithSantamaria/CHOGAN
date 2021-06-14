package com.projectservice.controller;

import com.projectservice.models.Wireframe;
import com.projectservice.services.IWireframeService;
import net.bytebuddy.matcher.FilterableList;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

public class WireframeControllerTest {

    private final IWireframeService wireframeService = Mockito.mock(IWireframeService.class);

    private final WireframeController  wireframeController = new WireframeController(wireframeService);

    /*
    *
    * Create
    *
    * */

    @Test
    void createNewWireframeSuccessTest(){
        Wireframe wireframe = new Wireframe();

        ResponseEntity<List<Wireframe>> response = wireframeController.createNewWireframe(wireframe);

        Assertions.assertEquals(response.getStatusCode(), HttpStatus.CREATED);
    }

    @Test
    void createNewWireframeFailureTest(){
        Wireframe wireframe = new Wireframe();

        Mockito.doThrow(new Exception());

        ResponseEntity<List<Wireframe>> response = wireframeController.createNewWireframe(wireframe);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /*
    *
    * Read
    *
    * */

    @Test
    void readWireframeSuccessTest(){
        String wireframeId = "Id";
        Wireframe wireframe = new Wireframe();

        Mockito.when(wireframeService.findByWireframeId(wireframeId)).thenReturn(wireframe);

        ResponseEntity<Wireframe> response = wireframeController.readWireframe(wireframeId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    @Test
    void readWireframeFailureTest(){
        String wireframeId = "Id";

        Mockito.when(wireframeService.findByWireframeId(wireframeId)).thenReturn(null);

        ResponseEntity<Wireframe> response = wireframeController.readWireframe(wireframeId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Test
    void readWireframesTest(){
        String projectId = "Id";
        List<Wireframe> list = new ArrayList<>();

        Mockito.when(wireframeService.findByProjectId(projectId)).thenReturn(list);

        ResponseEntity<List<Wireframe>> response = wireframeController.readWireframes(projectId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    /*
    *
    * Update
    *
    * */

    @Test
    void updateWireframeSuccessTest(){
        Wireframe wireframe = new Wireframe();

        Mockito.when(wireframeService.updateWireframe(wireframe)).thenReturn(wireframe);

        ResponseEntity<List<Wireframe>> response = wireframeController.updateWireframe(wireframe);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    @Test
    void updateWireframeFailureTest(){
        Wireframe wireframe = new Wireframe();

        Mockito.when(wireframeService.updateWireframe(wireframe)).thenReturn(null);

        ResponseEntity<List<Wireframe>> response = wireframeController.updateWireframe(wireframe);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /*
    *
    * Delete
    *
    * */

    @Test
    void deleteWireframeSuccessTest(){
        String wireframeId = "Id";
        List<Wireframe> list = new ArrayList<>();

        Mockito.when(wireframeService.deleteWireframe(wireframeId)).thenReturn(list);

        ResponseEntity<List<Wireframe>> response = wireframeController.deleteWireframe(wireframeId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    @Test
    void deleteWireframeFailureTest(){
        String wireframeId = "Id";

        Mockito.when(wireframeService.deleteWireframe(wireframeId)).thenReturn(null);

        ResponseEntity<List<Wireframe>> response = wireframeController.deleteWireframe(wireframeId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
