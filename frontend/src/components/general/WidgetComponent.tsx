import React, { useMemo } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectProjectApp, setWidgets } from "../../redux/projectAppSlice";
import { Card, CardDeck } from "react-bootstrap";

const WidgetComponent = () => {
  const dispatch = useAppDispatch();
  const projectAppState = useAppSelector(selectProjectApp);
  const projectId = projectAppState.project.projectId;

  const getWidgets = () => {
    const queryString = `http://localhost:42069/api/read/project/widgets`;
    const body = {
      params: {
        projectId: projectId,
      },
    };

    axios
      .get(queryString, body)
      .then((response) => {
        console.log("response", response);
        const widgetData = response.data;
        dispatch(setWidgets(widgetData));
      })
      .catch((error) => {
        console.log("There was an error: ", error);
      });
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
