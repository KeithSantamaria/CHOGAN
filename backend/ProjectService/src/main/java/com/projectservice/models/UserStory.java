package com.projectservice.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class UserStory {
//    @Id
    private String userStoryId;
    private String userStoryDescription;
}
