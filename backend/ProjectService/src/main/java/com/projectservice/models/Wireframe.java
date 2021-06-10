package com.projectservice.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Wireframe pojo for handling wireframes and images
 */
@Data
@Document(collection="wireframes")
public class Wireframe {
    @Id
    private String wireframeId;
    private String projectId;
    private String wireframeName;
    private String wireframeDescription;
    private String wireframeImageUrl;
}
