package com.projectservice.models;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

/**
* Pojo for Widgets
* */
@Data
@Document
public class Widget {
    private String widgetName;
    private String widgetDescription;
}
