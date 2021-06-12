import axios from "axios";
import React, { useMemo } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectProjectApp, setEndpoints } from "../redux/projectAppSlice";
import ProjectSideNav from "./ProjectSideNav";
import EndpointForm from "./EndpointForm";
import EndpointCard from "./EndpointCard";

function ProjectEndpoints() {
  const projectAppState = useAppSelector(selectProjectApp);
  const [modalShow, setModalShow] = React.useState(false);
  const handleOpen = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
  const dispatch = useAppDispatch();

  const getEndpoints= () => {
    // Test query string works; comment when ready to test prod
    const queryString = `http://localhost:42069/api/read/project/endpoints`;
    const body = {
      params: {
        projectId: "60bc36b65d2b0da1deb9ada2"
      }
    }
    // Production query string; uncomment when ready to test prod
    // const queryString = `http://localhost:42069/api/read/project?projectId=${projectId}`;
    axios
      .get(queryString, body)
      .then((response) => {
        console.log("response", response);
        const endpointData = response.data;
        dispatch(setEndpoints(endpointData));
      })
      .catch((error) => {
        console.log("There was an error: ", error);
      });
  };

  useMemo(() => {
    getEndpoints();
  }, []);

  const endpointModal = () => {
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={modalShow}
            onHide={handleClose}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create New Endpoint
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Production */}
                {/* <EndpointForm projectId={projectAppState.project.projectId} /> */}

              {/* Test */}
              <EndpointForm />
            </Modal.Body>
        </Modal>
    );
};
  return (
    <div>
      <ProjectSideNav />

      {projectAppState.endpoints.map((endpoint: any) => {
        return (
          <EndpointCard endpoint={endpoint} />
        );
      })}
      <Button variant="primary" onClick={handleOpen}>
        New Endpoint
      </Button>
      {endpointModal()}
    </div>
  );
}

export default ProjectEndpoints;
