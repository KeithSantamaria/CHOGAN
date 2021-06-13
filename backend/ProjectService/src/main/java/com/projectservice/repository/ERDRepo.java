package com.projectservice.repository;

import com.projectservice.models.ERD;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Interface for handling the ERD repo
 */
@Repository
public interface ERDRepo extends MongoRepository<ERD,String> {
    List<ERD> findByProjectId(String projectId);
    ERD findByErdId(String erdId);
}
