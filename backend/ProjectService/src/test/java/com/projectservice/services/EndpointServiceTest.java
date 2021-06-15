package com.projectservice.services;

import com.projectservice.models.Endpoint;
import com.projectservice.repository.EndpointRepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.ArrayList;
import java.util.List;

public class EndpointServiceTest {

    private final EndpointRepo endpointRepo = Mockito.mock(EndpointRepo.class);

    private final EndPointService endPointService = new EndPointService(endpointRepo);

    /*
    *
    * Create
    *
    * */

    @Test
    void insertTest(){
        Endpoint endpoint = new Endpoint();
        endPointService.insert(endpoint);
    }

    /*
    *
    * Read
    *
    * */

    @Test
    void findByEndpointIdTest(){
        String endpointId = "Id";
        Endpoint endpoint = new Endpoint();
        Mockito.when(endpointRepo.findByEndpointId(endpointId)).thenReturn(endpoint);

        Endpoint foundEndpoint = endPointService.findByEndpointId(endpointId);

        Assertions.assertEquals(foundEndpoint,endpoint);
    }

    @Test
    void findAllByProjectIdTest(){
        String projectId = "Id";
        List<Endpoint> list = new ArrayList<>();


        Mockito.when(endpointRepo.findByProjectId(projectId)).thenReturn(list);

        List<Endpoint> foundList = endPointService.findAllByProjectId(projectId);

        Assertions.assertEquals(foundList,list);
    }

    /*
    *
    * Update
    *
    * */

    @Test
    void updateTest(){
        Endpoint endpoint = new Endpoint();

        Mockito.when(endpointRepo.save(endpoint)).thenReturn(endpoint);

        Endpoint foundEndpoint = endPointService.update(endpoint);

        Assertions.assertEquals(foundEndpoint,endpoint);
    }

    /*
    *
    * Delete
    *
    * */

    @Test
    void deleteSuccessTest(){
        String endpointId = "Id";
        Endpoint endpoint = new Endpoint();
        endpoint.setProjectId("pId");
        List<Endpoint> list = new ArrayList<>();

        Mockito.when(endpointRepo.findByEndpointId(endpointId)).thenReturn(endpoint);
        Mockito.when(endpointRepo.findByProjectId("pId")).thenReturn(list);

        List<Endpoint> foundList = endPointService.delete(endpointId);

        Assertions.assertEquals(foundList,list);
    }

    @Test
    void deleteFailureTest(){
        String endpointId = "Id";

        Mockito.when(endpointRepo.findByEndpointId(endpointId)).thenReturn(null);

        List<Endpoint> foundList = endPointService.delete(endpointId);

        Assertions.assertNull(foundList);
    }

}
