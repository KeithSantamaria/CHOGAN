package com.projectservice.services;

import com.projectservice.models.Widget;

import java.util.List;

/**
 * functional interface for widgets
 */
public interface IWidgetService {

    void insertWidget(Widget widget);

    Widget findByWidgetId(String widgetId);
    List<Widget> findByProjectId(String projectId);

    Widget updateWidget(Widget widget);

    List<Widget> deleteWidget(String widgetId);
}
