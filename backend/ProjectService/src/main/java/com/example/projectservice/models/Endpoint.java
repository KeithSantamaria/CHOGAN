package com.example.projectservice.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * project endpoint pojo
 */
@Data
@Document
public class Endpoint {
    @Id
    private String endpointId;
    private String endpointName;
    private String endpointUrlPattern;
    private String endpointDescription;
}