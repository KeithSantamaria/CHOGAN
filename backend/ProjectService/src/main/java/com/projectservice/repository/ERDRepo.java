package com.projectservice.repository;

import com.projectservice.models.ERD;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Interface for handling the ERD repo
 */
@Repository
public interface ERDRepo extends MongoRepository<ERD,String> {
}
