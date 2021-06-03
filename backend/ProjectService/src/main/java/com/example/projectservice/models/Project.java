package com.example.projectservice.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document
public class Project {
    @Id
    private String projectId;
    private String userId;
    //private String userEmail;
    private String projectName;
    private List<Model> models;
    private List<Endpoint> endpoints;
    private List<Tag> tags;
    private List<UserStory> userStories;


    //will recieve user ID
}
