package com.projectservice.services;

import com.projectservice.models.ERD;

import java.util.List;

/**
 *  Functional interface for ERDS
 */
public interface IErdService {

    void insert(ERD erd);

    ERD findByERDId(String erdId);
    List<ERD> findByProjectId(String projectId);

    ERD updateERD(ERD erd);

    List<ERD> deleteERD(String erdID);
}
