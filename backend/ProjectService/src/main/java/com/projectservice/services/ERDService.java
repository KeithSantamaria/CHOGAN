package com.projectservice.services;

import com.projectservice.models.ERD;
import com.projectservice.repository.ERDRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Class for handling all service layer methods for ERDs
 */
@Service
@AllArgsConstructor
public class ERDService implements IErdService{
    private final ERDRepo erdRepo;

    /*
    *
    * Create
    *
    * */

    /**
     * Inserts an ERD into the DB
     * @param erd The ERD to add
     */
    @Override
    public void insert(ERD erd) {
        erdRepo.save(erd);
    }

    /*
    *
    * Read
    *
    * */

    /**
     * Finds an ERD by ERDId
     * @param erdId The erdID
     * @return The ERD found
     */
    @Override
    public ERD findByERDId(String erdId) {
        return erdRepo.findByERDId(erdId);
    }

    /**
     * Finds a list of ERD associated with a given projectId
     * @param projectId The projectId
     * @return The list of ERDs
     */
    @Override
    public List<ERD> findByProjectId(String projectId) {
        return erdRepo.findByProjectId(projectId);
    }

    /*
    *
    * Update
    *
    * */

    /**
     * Updates an ERD
     * @param erd the updated ERD
     * @return the updated ERD
     */
    @Override
    public ERD updateERD(ERD erd) {
        return erdRepo.save(erd);
    }

    /*
    *
    * Delete
    *
    * */

    /**
     * Deletes an ERD from the db
     * @param erdID the erd to delete
     * @return The remaining erds
     */
    @Override
    public List<ERD> deleteERD(String erdID) {
        ERD foundERD = erdRepo.findByERDId(erdID);
        if (foundERD == null){
            return null;
        }
        String projectId = foundERD.getProjectId();
        erdRepo.deleteById(erdID);
        return erdRepo.findByProjectId(projectId);
    }
}
