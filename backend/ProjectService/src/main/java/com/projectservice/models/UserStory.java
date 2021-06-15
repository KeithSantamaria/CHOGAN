package com.projectservice.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Pojo for user stories
 */
@Data
@Document(collection = "userstories")
public class UserStory {
//    @Id
    private String userStoryId;
    private String projectId;
    private String userStoryDescription;
}
