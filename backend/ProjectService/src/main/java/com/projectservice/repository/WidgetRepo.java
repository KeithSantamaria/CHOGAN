package com.projectservice.repository;

import com.projectservice.models.Widget;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface WidgetRepo extends MongoRepository<Widget, String> {
    List<Widget> findByProjectId(String projectId);
    Widget findByWidgetId(String widgetId);
}
