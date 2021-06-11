package com.projectservice.services;

import com.projectservice.models.Widget;
import com.projectservice.repository.WidgetRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Class for handling all service layer methods for widgets
 */
@Service
@AllArgsConstructor
public class WidgetService implements IWidgetService {

    private final WidgetRepo widgetRepo;

    /*
    *
    * Create
    *
    * */

    /**
     * Adds a widget to the db
     * @param widget The widget to add
     */
    @Override
    public void insertWidget(Widget widget){
        widgetRepo.insert(widget);
    }

    /*
    *
    * Read
    *
    * */

    /**
     * Finds a widget based on widget Id
     * @param widgetId The id of the widget to find
     * @return The widget found
     */
    @Override
    public Widget findByWidgetId(String widgetId){
        return widgetRepo.findByWidgetId(widgetId);
    }

    /**
     * Finds a list of widgets based on project Id
     * @param projectId The projectId
     * @return The list of widgets
     */
    @Override
    public List<Widget> findByProjectId(String projectId){
        return widgetRepo.findByProjectId(projectId);
    }

    /*
    *
    * Update
    *
    * */

    /**
     * Updates a widget
     * @param widget The updated widget
     * @return The updated widget
     */
    @Override
    public Widget updateWidget(Widget widget){
        return null;
    }

    /*
    *
    * Delete
    *
    * */

    /**
     * Deletes a widget from the db
     * @param widgetId The widget to delete
     * @return The remaining widgets
     */
    @Override
    public List<Widget> deleteWidget(String widgetId){
        return null;
    }
}
