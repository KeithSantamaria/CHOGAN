package com.projectservice.services;

import com.projectservice.models.Endpoint;
import com.projectservice.repository.EndpointRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Class for handling all service layer methods for endpoints
 */
@Service
@AllArgsConstructor
public class EndPointService implements IEndpointService{

    private final EndpointRepo endpointRepo;

    /*
    *
    * Create
    *
    * */

    /**
     * Inserts an endpoint into the db
     * @param endpoint The endpoint to add
     */
    @Override
    public void insert(Endpoint endpoint) { endpointRepo.insert(endpoint); }

    /*
    *
    * Read
    *
    * */

    /**
     * Reads an endpoint based on ID
     * @param endpointId The id of the endpoint to read
     * @return The endpoint found
     */
    @Override
    public Endpoint findByEndpointId(String endpointId) { return endpointRepo.findByEndpointId(endpointId); }


    /**
     * Finds all endpoints with a specific projectID
     * @param projectId The id to find
     * @return A list of endpoints with the projectId
     */
    @Override
    public List<Endpoint> findAllByProjectId(String projectId) { return endpointRepo.findByProjectId(projectId); }

    /*
    *
    * Update
    *
    * */

    /**
     * Updates an endpoint
     * @param endpoint the updated endpoint
     * @return The updated endpoint
     */
    @Override
    public Endpoint update(Endpoint endpoint) { return endpointRepo.save(endpoint); }

    /*
    *
    * Delete
    *
    * */

    /**
     * Deletes an endpoint from the db
     * @param endpointId The endpoint to delete
     */
    @Override
    public void delete(String endpointId) { endpointRepo.deleteById(endpointId); }
}
