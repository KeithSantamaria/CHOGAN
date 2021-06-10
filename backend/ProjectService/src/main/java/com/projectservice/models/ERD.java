package com.projectservice.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * ERD for a project
 */
@Data
@Document(collection = "erds")
public class ERD {
    @Id
    private String erdID;
    private String projectId;
    private String erdName;
    private String erdDescription;
    private String erdImageUrl;
}
