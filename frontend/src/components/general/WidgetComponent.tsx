import React, { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectProjectApp, getAllWidgets } from "../../redux/projectAppSlice";
import { Card, CardDeck } from "react-bootstrap";

const WidgetComponent = () => {
  const dispatch = useAppDispatch();
  const projectAppState = useAppSelector(selectProjectApp);
  const projectId = projectAppState.project.projectId;

  const getWidgets = () => {
    const body = {
      params: {
        projectId: projectId,
      },
    };
    dispatch(getAllWidgets(body));
  };

  useMemo(() => {
    getWidgets();
  }, []);
  
  return (
    <div>
      {projectAppState.widgets.map((widget: any) => {
        return (
          <CardDeck key={widget.widgetId} style={{ paddingBottom: "25px" }}>
            <Card className="card-wrapper">
              <Card.Body>
                <Card.Title>{widget.widgetName}</Card.Title>
                <Card.Text>{widget.widgetDescription}</Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        );
      })}
    </div>
  );
};

export default WidgetComponent;
