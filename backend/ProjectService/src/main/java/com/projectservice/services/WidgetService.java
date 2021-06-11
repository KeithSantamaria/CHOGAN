package com.projectservice.services;

import com.projectservice.models.Widget;
import com.projectservice.repository.WidgetRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

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
    public void insertWidget(Widget widget){

    }

    /*
    *
    * Read
    *
    * */

    /*
    *
    * Update
    *
    * */

    /*
    *
    * Delete
    *
    * */
}
