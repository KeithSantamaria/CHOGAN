import React, { useMemo } from "react";
import ProjectSideNav from "./ProjectSideNav";
import WidgetForm from "./general/WidgetForm";
import TopNavbar from '../components/TopNavbar';
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Card, Button, Modal, Col, Row, CardDeck, Container} from "react-bootstrap";
import {
  selectProjectApp,
  getProject
} from "../redux/projectAppSlice";
import WidgetComponent from "./general/WidgetComponent";

import '../css/project-service/general-info.css';

const ProjectGeneralInfo = () => {
  const dispatch = useAppDispatch();
  const projectAppState = useAppSelector(selectProjectApp);
  const project = projectAppState.project;
  const [modalShow, setModalShow] = React.useState(false);
  
  const handleOpen = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  const setProject = () => {
    const body = { params: { projectId: project.projectId }};
    dispatch(getProject(body));
  };

  useMemo(() => {
    setProject();
  }, []);

  const newWidgetModal = () => {
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
    <>
      <TopNavbar/>
      <ProjectSideNav active={"general"}/>
      
      <Container id="pg-content">
        <Row style={{paddingBottom: '5px'}}>
          <Col>
            <span style={{color: 'gray'}}>
              <h4>General Information - {projectAppState.project.projectName}</h4>
            </span>
          </Col>
          
          <Col >
            <span className="float-right">
              <Button variant="outline-warning" onClick={handleOpen}>
                New Widget
              </Button>
            </span>
           
          </Col>
        </Row>

        <hr></hr>
       
      
        <CardDeck style={{paddingBottom: '25px'}}>
          <Card>
            <Card.Body>
              <Card.Title><h4>Project Description</h4></Card.Title>

              <Card.Text>{projectAppState.project.projectDescription}</Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <WidgetComponent />
        
        {newWidgetModal()}
      </Container>
    </>
  );
};

export default ProjectGeneralInfo;
