package com.projectservice.controller;

import com.projectservice.models.Endpoint;
import com.projectservice.services.EndPointService;
import com.projectservice.services.IEndpointService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

public class EndpointControllerTest {

    private final IEndpointService endpointService = Mockito.mock(EndPointService.class);

    private final EndpointController endpointController = new EndpointController(endpointService);

    /*
    *
    * Create
    *
    * */

    @Test
    void createNewEndpointSuccessTest(){
        Endpoint endpoint = new Endpoint();

        ResponseEntity<List<Endpoint>> response = endpointController.createNewEndpoint(endpoint);

        Assertions.assertEquals(response.getStatusCode(), HttpStatus.CREATED);

    }

    @Test
    void createNewEndpointFailureTest(){
        Endpoint endpoint = new Endpoint();

        Mockito.doThrow(new Exception());

        ResponseEntity<List<Endpoint>> response = endpointController.createNewEndpoint(endpoint);
        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /*
    *
    * Read
    *
    * */

    @Test
    void readEndpointSuccessTest(){
        String endpointId = "Id";
        Endpoint endpoint = new Endpoint();

        Mockito.when(endpointService.findByEndpointId(endpointId)).thenReturn(endpoint);

        ResponseEntity<Endpoint> response = endpointController.readEndpoint(endpointId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    @Test
    void readEndpointFailureTest(){
        String endpointId = "Id";

        Mockito.when(endpointService.findByEndpointId(endpointId)).thenReturn(null);

        ResponseEntity<Endpoint> response = endpointController.readEndpoint(endpointId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Test
    void readEndpointsSuccessTest(){
        String projectId = "Id";
        List<Endpoint> list = new ArrayList<>();
        list.add(new Endpoint());

        Mockito.when(endpointService.findAllByProjectId(projectId)).thenReturn(list);

        ResponseEntity<List<Endpoint>> response = endpointController.readEndpoints(projectId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    @Test
    void readEndpointsFailureTest(){
        String projectId = "Id";
        List<Endpoint> list = new ArrayList<>();

        Mockito.when(endpointService.findAllByProjectId(projectId)).thenReturn(list);

        ResponseEntity<List<Endpoint>> response = endpointController.readEndpoints(projectId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /*
    *
    * Update
    *
    * */

    @Test
    void updateEndpointSuccessTest(){
        Endpoint endpoint = new Endpoint();

        Mockito.when(endpointService.update(endpoint)).thenReturn(endpoint);

        ResponseEntity<Endpoint> response = endpointController.updateEndpoint(endpoint);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    @Test
    void updateEndpointFailureTest(){
        Endpoint endpoint = new Endpoint();

        Mockito.when(endpointService.update(endpoint)).thenReturn(null);

        ResponseEntity<Endpoint> response = endpointController.updateEndpoint(endpoint);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /*
    *
    * Delete
    *
    * */

    @Test
    void deleteEndpointSuccessTest(){
        String endpointId = "Id";
        List<Endpoint> list = new ArrayList<>();
        list.add(new Endpoint());

        Mockito.when(endpointService.delete(endpointId)).thenReturn(list);

        ResponseEntity<List<Endpoint>> response = endpointController.deleteEndpoint(endpointId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.OK);
    }

    @Test
    void deleteEndpointFailureTest(){
        String endpointId = "Id";

        Mockito.when(endpointService.delete(endpointId)).thenReturn(null);

        ResponseEntity<List<Endpoint>> response = endpointController.deleteEndpoint(endpointId);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
