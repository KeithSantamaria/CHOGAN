package com.projectservice.repository;

import com.projectservice.models.Widget;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Interface for handling the widget repo
 */
@Repository
public interface WidgetRepo extends MongoRepository<Widget, String> {
    List<Widget> findByProjectId(String projectId);
    Widget findByWidgetId(String widgetId);
}
