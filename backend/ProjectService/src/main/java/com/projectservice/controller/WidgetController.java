package com.projectservice.controller;

import com.projectservice.models.Widget;
import com.projectservice.services.IWidgetService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class WidgetController {

    private final IWidgetService widgetService;

    /*
    *
    * Create
    *
    * */

    /**
     * Creates a new widget and adds it to the db
     * @param widget The widget to add
     * @return The response entity
     */
    @GetMapping("/create/project/widget")
    public ResponseEntity<List<Widget>> createNewWidget(@RequestParam Widget widget){
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
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
