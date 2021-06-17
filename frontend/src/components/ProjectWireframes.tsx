import React, { useMemo } from "react";
import { Button, Modal, Container, Col, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectProjectApp, getAllWireframes } from "../redux/projectAppSlice";
import ProjectSideNav from "./ProjectSideNav";
import WireframeCard from "./wireframe/WireframeCard";
import WireframeForm from "./wireframe/WireframeForm";
import TopNavbar from '../components/TopNavbar';

function ProjectWireframes() {
  const projectAppState = useAppSelector(selectProjectApp);
  const [modalShow, setModalShow] = React.useState(false);
  const handleOpen = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
  const dispatch = useAppDispatch();
  const projectId = projectAppState.project.projectId;
  
  const getWireframes = () => {
    const body = { params: { projectId: projectId }};
    dispatch(getAllWireframes(body));
  };

  useMemo(() => {
    getWireframes();
  }, []);


  const wireframeModal = () => {
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
            Create New Wireframe
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WireframeForm />
        </Modal.Body>
      </Modal>
      )
    }

  return (
    <>
      <TopNavbar/>
      <ProjectSideNav active={"wire-frame"}/>
        
        <Container id="pg-content">
          <Row style={{paddingBottom: '5px'}}>
            <Col>
              <span style={{color: 'gray'}}>
                <h4>Wireframe - {projectAppState.project.projectName}</h4>
              </span>
            </Col>
            
            <Col >
              <span className="float-right">
                <Button variant="outline-warning" onClick={handleOpen}>
                  New Wireframe
                </Button>
              </span>
            
            </Col>
          </Row>
          <hr></hr>
          {projectAppState.wireframes.map((wireframe: any) => {
            return <WireframeCard wireframe={wireframe} />;
          })}
          
          {wireframeModal()}
        </Container>
    </>
  );
};

export default ProjectWireframes;
