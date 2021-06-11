import axios from "axios";
import React, { useMemo } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectProjectApp, setProject, setWidgets } from "../redux/projectAppSlice";
import ProjectSideNav from "./ProjectSideNav";
import WidgetForm from "./WidgetForm";

function ProjectEndpoints() {
  const projectAppState = useAppSelector(selectProjectApp);
  const [modalShow, setModalShow] = React.useState(false);
  const handleOpen = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
  const dispatch = useAppDispatch();

  const getProject = () => {
    // Test query string works; comment when ready to test prod
    const queryString = `http://localhost:42069/api/read/project/endpoints`;

    // Production query string; uncomment when ready to test prod
    // const queryString = `http://localhost:42069/api/read/project?projectId=${projectId}`;
    axios
      .get(queryString)
      .then((response) => {
        console.log("response", response);
        const projectData = response.data;
        dispatch(setProject(projectData));
      })
      .catch((error) => {
        console.log("There was an error: ", error);
      });
  };

  useMemo(() => {
    getProject();
  }, []);

  return (
    <div>
      <ProjectSideNav />

      {projectAppState.endpoints.map((endpoint: any) => {
        return (
          <Card>
            <Card.Body>
              <Card.Title>{endpoint.endpointName}</Card.Title>
              <Card.Text>{endpoint.endpointDescription}</Card.Text>
              <Card.Text>{endpoint.endpointUrlPattern}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
      <Button variant="primary" onClick={handleOpen}>
        New Endpoint
      </Button>
    </div>
  );
}

export default ProjectEndpoints;
