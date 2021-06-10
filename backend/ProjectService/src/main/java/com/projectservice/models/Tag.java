package com.projectservice.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Map;

/**
 * project tag pojo;
 * map example: Map<"Frontend", ["React", "Redux", "Bootstrap"]>;
 */
@Data
@Document
public class Tag {
//    @Id
    private String tagId;
    private String tagName;
    private Map<String, List<String>> techs;
    /*
    frontend

    react/redux/boostrap

    frontend: ["react/redux/bootstrap"]

    frontend: ["react","redux","bootstrap"]
    */
}