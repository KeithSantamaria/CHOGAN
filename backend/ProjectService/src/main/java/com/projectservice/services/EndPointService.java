package com.projectservice.services;

import com.projectservice.models.Endpoint;
import com.projectservice.repository.EndpointRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class EndPointService implements IEndpointService{

    private final EndpointRepo endpointRepo;

    /**
     *
     * @param endpoint
     */
    @Override
    public void insert(Endpoint endpoint) { endpointRepo.insert(endpoint); }

    /**
     *
     * @param endpointId
     */
    @Override
    public void delete(String endpointId) { endpointRepo.deleteById(endpointId); }

    /**
     *
     * @param endpoint
     * @return
     */
    @Override
    public Endpoint update(Endpoint endpoint) { return endpointRepo.save(endpoint); }

    /**
     *
     * @param projectId
     * @return
     */
    @Override
    public List<Endpoint> findAllByProjectId(String projectId) { return endpointRepo.findByProjectId(projectId); }

    /**
     *
     * @param endpointId
     * @return
     */
    @Override
    public Endpoint findByEndpointId(String endpointId) { return endpointRepo.findByEndPointId(endpointId); }


}
