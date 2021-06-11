package com.projectservice.controller;

import com.projectservice.services.IWidgetService;
import com.projectservice.services.WidgetService;
import org.mockito.Mockito;

public class WidgetControllerTest {

    private final IWidgetService widgetService = Mockito.mock(WidgetService.class);

    private final WidgetController widgetController = new WidgetController(widgetService);

    /*
    *
    * Create
    *
    * */

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
