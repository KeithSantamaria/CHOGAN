import React, { useMemo } from "react";
import axios from "axios";
import ProjectSideNav from "./ProjectSideNav";
import WidgetForm from "./WidgetForm";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Card, Button, Modal } from "react-bootstrap";
import {
  selectProjectApp,
  setProject,
  setWidgets,
} from "../redux/projectAppSlice";
import WidgetComponent from "./WidgetComponent";

// For production, project will be passed as a prop from Project Card (built by Home group)
// const ProjectGeneralInfo = ({project} : any ) => {
const ProjectGeneralInfo = () => {
  const dispatch = useAppDispatch();
  const projectAppState = useAppSelector(selectProjectApp);
  const [modalShow, setModalShow] = React.useState(false);

  // Code for grabbing user from User Slice

  const handleOpen = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  const getProject = () => {
    // Production
    // const queryString = `http://localhost:42069/api/read/project?projectId=${projectId}`;

    // Test
    const queryString = `http://localhost:42069/api/read/project`;
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

  const newWidgetModal = () => {
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
            Create New Widget
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WidgetForm project={projectAppState.project} />
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <div>
      <ProjectSideNav />
      <Card>
        <Card.Body>
          {/* <Card.Title>{userAppState.user.userName} - {projectName}</Card.Title> */}
          <Card.Title>{projectAppState.project.projectName}</Card.Title>

          <Card.Text>{projectAppState.project.projectDescription}</Card.Text>
        </Card.Body>
      </Card>
        {/*Production*/}
        {/* <WidgetComponent projectId={userAppState.user.userId}/> */}
        
        
        {/*Test*/}
        <WidgetComponent projectId={"60bc36b65d2b0da1deb9ada2"} />
      <Button variant="primary" onClick={handleOpen}>
        New Widget
      </Button>
      {newWidgetModal()}
    </div>
  );
};

export default ProjectGeneralInfo;
