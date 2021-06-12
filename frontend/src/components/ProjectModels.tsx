import axios from "axios";
import React, { useMemo } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectProjectApp, setModels } from "../redux/projectAppSlice";
import ModelForm from "./ModelForm";
import ProjectSideNav from "./ProjectSideNav";
import WidgetForm from "./WidgetForm";

function ProjectModels() {
  const projectAppState = useAppSelector(selectProjectApp);
  const [modalShow, setModalShow] = React.useState(false);
  const handleOpen = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
  const dispatch = useAppDispatch();

  const getModels = () => {
    // Production
    // const queryString = `http://localhost:42069/api/read/project?projectId=${projectId}`;

    // Test
    const queryString = `http://localhost:42069/api/read/models`;
    const projectId = "60bc36b65d2b0da1deb9ada2";
    const body = {
      params: {
        projectId: projectId,
      },
    };
    axios
      .get(queryString, body)
      .then((response) => {
        console.log("response", response);
        const modelData = response.data;
        dispatch(setModels(modelData));
      })
      .catch((error) => {
        console.log("There was an error: ", error);
      });
  };

  useMemo(() => {
    getModels();
  }, []);

  const projectModal = () => {
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
            Create New Model
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModelForm />
        </Modal.Body>
      </Modal>
    );
  };
  return (
    <div>
      <ProjectSideNav />

      {projectAppState.models.map((model: any) => {
        return (
          <Card>
            <Card.Body>
              <Card.Title>{model.modelName}</Card.Title>
            </Card.Body>
          </Card>
        );
      })}
      <Button variant="primary" onClick={handleOpen}>
        New Model
      </Button>
      {projectModal()}
    </div>
  );
}

export default ProjectModels;
