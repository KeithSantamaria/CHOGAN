package com.projectservice.controller;

import com.projectservice.models.Widget;
import com.projectservice.services.IWidgetService;
import com.projectservice.services.WidgetService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

public class WidgetControllerTest {

    private final IWidgetService widgetService = Mockito.mock(WidgetService.class);

    private final WidgetController widgetController = new WidgetController(widgetService);

    /*
    *
    * Create
    *
    * */

    @Test
    void createNewWidgetSuccessTest(){
        Widget widget = new Widget();

        ResponseEntity<List<Widget>> response = widgetController.createNewWidget(widget);

        Assertions.assertEquals(response.getStatusCode(), HttpStatus.CREATED);
    }

    @Test
    void createNewWidgetFailureTest(){
        Widget widget = new Widget();

        Mockito.doThrow(new Exception());

        ResponseEntity<List<Widget>> response = widgetController.createNewWidget(widget);

        Assertions.assertEquals(response.getStatusCode(),HttpStatus.INTERNAL_SERVER_ERROR);
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
