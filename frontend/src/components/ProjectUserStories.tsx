import axios from "axios";
import React, { useMemo } from "react";
import { Button, Modal, Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectProjectApp, setUserStories } from "../redux/projectAppSlice";
import ProjectSideNav from "./ProjectSideNav";
import UserStoryCard from "./userstory/UserStoryCard";
import UserStoryForm from "./userstory/UserStoryForm";

function ProjectUserStories() {
  const projectAppState = useAppSelector(selectProjectApp);
  const [modalShow, setModalShow] = React.useState(false);
  const handleOpen = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
  const dispatch = useAppDispatch();

  const getUserStories = () => {
    const queryString = `http://localhost:42069/api/read/project/userstories`;
    const body = {
      params: {
        projectId: "60bc36b65d2b0da1deb9ada2",
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
      <ProjectSideNav active={"user-story"}/>
      <Container id="pg-content">
        {projectAppState.userStories.map((userStory: any) => {
          return <UserStoryCard userStory={userStory} />;
        })}
        <Button variant="primary" onClick={handleOpen}>
          New User Story
        </Button>
        {userStoryModal()}
      </Container>
    </>
  );
}

export default ProjectUserStories;
