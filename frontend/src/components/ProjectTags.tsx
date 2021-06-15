import React, { useCallback, useMemo, FormEvent } from "react";
import ProjectSideNav from "./ProjectSideNav";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectProjectApp, setTags } from "../redux/projectAppSlice";
import axios from "axios";
import { Button, Modal, Container, Col, Row, ListGroup, Card } from "react-bootstrap";
import TagForm from "./tag/TagForm";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faEdit} from "@fortawesome/free-solid-svg-icons";

function ProjectTags() {
  const projectAppState = useAppSelector(selectProjectApp);
  const [modalShow, setModalShow] = React.useState(false);
  const handleOpen = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
  const [modalShowUpdate, setModalShowUpdate] = React.useState(false);
  const handleOpenUpdate = () => setModalShowUpdate(true);
  const handleCloseUpdate = () => setModalShowUpdate(false);
  const [tagID, setTag] = React.useState("");
  const dispatch = useAppDispatch();
  const projectId = projectAppState.project.projectId;

  const getTags = () => {
    const queryString = `http://localhost:42069/api/read/project/tags`;
    const body = {
      params: {
        projectId: projectId,
      },
    };
    axios
      .get(queryString, body)
      .then((response) => {
        console.log("response", response);
        const tagData = response.data;
        dispatch(setTags(tagData));
      })
      .catch((error) => {
        console.log("There was an error: ", error);
      });
  };

  useMemo(() => {
    getTags();
  }, []);

  const tagModal = () => {
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
            Create New Tag
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TagForm project={projectAppState.project} />
        </Modal.Body>
      </Modal>
    );
  };

  const removeTags = (id: String) => {
    const queryDeleteString = `http://localhost:42069/api/delete/project/tag`;
    const body = {
      params: {
        tagId: id,
      },
    };
    console.log("request body: ", queryDeleteString, body);

    axios
      .delete(queryDeleteString, body)
      .then((response) => {
        console.log("response", response);
        const tagData = response.data;
        dispatch(setTags(tagData));
      })
      .catch((error) => {
        console.log("There was an error on deleting: ", error);
      });
  }

  const editTag = (e: any) => {
    console.log(e.target.value);
  }

  const tagModalUpdate = () => {
    return (
      <Modal
        className="modal-create-wrapper"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShowUpdate}
        onHide={handleCloseUpdate}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Tag
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {tagID}
          {/* <TagForm project={projectAppState.project} /> */}
        </Modal.Body>
      </Modal>
    );
  };
  return (
    <>
      <ProjectSideNav active={"tag"}/>

      {/* <Container id="pg-content">
        {projectAppState.tags.map((tag: any) => {
          return (
            <Card>
              <Card.Body>
                <Card.Title>{tag.tagName}</Card.Title>
                <Card.Text>{tag.tagDescription}</Card.Text>
                <Button
                  variant="danger"
                  value={tag.tagId}
                  onClick={(e) =>
                    removeTags((e.target as HTMLButtonElement).value)
                  }
                >
                  Delete
                </Button>
                <Button variant="info">Modify</Button>
              </Card.Body>
            </Card>
          );
        })}
        <Button variant="primary" onClick={handleOpen}>
          New Tag
        </Button>
        {tagModal()}
      </Container> */}

      <Container id="pg-content">
        <Row style={{paddingBottom: '5px'}}>
          <Col>
            <span style={{color: 'gray'}}>
              <h4>Technology Tags - {projectAppState.project.projectName}</h4>
            </span>
          </Col>

          <Col>
            <span className="float-right">
              <Button variant="outline-warning" onClick={handleOpen}>
                New Tag
              </Button>
            </span>
          </Col>
        </Row>
        <hr></hr>

        <Row style={{paddingBottom: '1em', fontWeight: 'bold'}}>
          <Col>Tags</Col>
          <Col>Description</Col>
          <Col><span style={{paddingRight: '4em'}} className="float-right"> Action </span></Col>
        </Row>

        {projectAppState.tags.map((tag: any) => (
          
          <div style={{paddingBottom: '2vh'}}>
          <ListGroup.Item key={tag.tagId} className="project-list-item" style={{borderRadius: '10px'}}>
            <Row>
                <Col className="project-name">
                    {tag.tagName}
                </Col>

                <Col className="project-description">
                    {tag.tagDescription}
                </Col>

                <Col>
                  <span className="float-right">  
                    <Button
                      value={tag.tagId}
                      onClick={(e) =>
                        removeTags(tag.tagId)
                      }
                      variant="outline-dark"
                    >
                      <FontAwesomeIcon
                        style={{height: '100%'}}
                        className="fa-1x"
                        icon={faTrash}
                      /> 
                    </Button>

                    <span style={{paddingRight: '1em'}}></span>

                    <Button
                      value={tag.tagId}
                      onClick={editTag}
                      variant="outline-warning"
                    >
                      <FontAwesomeIcon
                        style={{height: '100%'}}
                        className="fa-1x"
                        icon={faEdit}
                      /> 
                    </Button>
                  </span>
                </Col>
            </Row>
        </ListGroup.Item>
        </div>
  ))}
        <br></br>
        
        {tagModal()}
        {tagModalUpdate()}
      </Container>
    </>
  );
}

export default ProjectTags;
