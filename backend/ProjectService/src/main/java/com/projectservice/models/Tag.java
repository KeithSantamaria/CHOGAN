package com.projectservice.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * project tag pojo;
 * map example: Map<"Frontend", ["React", "Redux", "Bootstrap"]>;
 */
@Data
@Document(collection = "tags")
public class Tag {
    @Id
    private String tagId;
    private String projectId;
    private String tagName;
    private String tagDescription;
}