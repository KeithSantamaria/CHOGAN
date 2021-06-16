import axios from "axios";
import React, { useMemo } from "react";
import { Button, Modal, Container, Col, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectProjectApp, setUserStories } from "../redux/projectAppSlice";
import ProjectSideNav from "./ProjectSideNav";
import UserStoryCard from "./userstory/UserStoryCard";
import UserStoryForm from "./userstory/UserStoryForm";
import TopNavbar from '../components/TopNavbar';

function ProjectUserStories() {
  const projectAppState = useAppSelector(selectProjectApp);
  const [modalShow, setModalShow] = React.useState(false);
  const handleOpen = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
  const dispatch = useAppDispatch();
  const projectId = projectAppState.project.projectId;
  
  const getUserStories = () => {
    const queryString = `http://localhost:42069/api/read/project/userstories`;
    const body = {
      params: {
        projectId: projectId
      },
    };

    axios
      .get(queryString, body)
      .then((response) => {
        console.log("response", response);
        const userStoryData = response.data;
        dispatch(setUserStories(userStoryData));
      })
      .catch((error) => {
        console.log("There was an error: ", error);
      });
  };

  const userStoryModal = () => {
    return (
      <Modal
        className="modal-create-wrapper"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create New User Story
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Production */}
          {/* <EndpointForm projectId={projectAppState.project.projectId} /> */}

          {/* Test */}
          <UserStoryForm />
        </Modal.Body>
      </Modal>
    );
  };

  useMemo(() => {
    getUserStories();
  }, []);

  return (
    <>
      <TopNavbar/>
      <ProjectSideNav active={"user-story"}/>

      <Container id="pg-content">
        <Row style={{paddingBottom: '5px'}}>
          <Col>
            <span style={{color: 'gray'}}>
              <h4>User Story - {projectAppState.project.projectName}</h4>
            </span>
          </Col>

          <Col>
            <span className="float-right">
              <Button variant="outline-warning" onClick={handleOpen}>
                New User Story
              </Button>
            </span>
          </Col>
        </Row>
        <hr></hr>

        <Row style={{paddingBottom: '1em', fontWeight: 'bold'}}>
          <Col>Features</Col>
          <Col><span style={{paddingRight: '4em'}} className="float-right"> Action </span></Col>
        </Row>

        {projectAppState.userStories.map((userStory: any) => {
          return <UserStoryCard key={userStory.userStoryId} userStory={userStory} />;
        })}
        
        {userStoryModal()}
      </Container>

    </>
  );
}

export default ProjectUserStories;
