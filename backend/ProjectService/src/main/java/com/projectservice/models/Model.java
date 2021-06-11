package com.projectservice.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Map;

/**
 * Project model pojo;
 * Map<key:pojo name, value:pojo types>
 */
@Data
@Document
public class Model {
//    @Id
    private String modelId;
    private String modelName;
    private Map<String, String> modelMetadata;
}
