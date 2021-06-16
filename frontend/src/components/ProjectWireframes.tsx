import axios from "axios";
import React, { useMemo } from "react";
import { Button, Modal, Container, Col, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectProjectApp, setWireframes } from "../redux/projectAppSlice";
import ProjectSideNav from "./ProjectSideNav";
import WireframeCard from "./wireframe/WireframeCard";
import WireframeForm from "./wireframe/WireframeForm";

function ProjectWireframes() {
  const projectAppState = useAppSelector(selectProjectApp);
  const [modalShow, setModalShow] = React.useState(false);
  const handleOpen = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
  const dispatch = useAppDispatch();

  const getWireframes = () => {
    //Test
    const projectId = "60bc36b65d2b0da1deb9ada2";

    //Production
    //const projectId = projectAppState.project.projectId;
    const queryString = `http://localhost:42069/api/read/project/wireframes`;
        
    const body = {
      params: {
        projectId: projectId,
      },
    };

    axios
      .get(queryString, body)
      .then((response) => {
        console.log("response", response);
        const wireframeData = response.data;
        dispatch(setWireframes(wireframeData));
      })
      .catch((error) => {
        console.log("There was an error: ", error);
      });
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
          {/* Production */}
          {/* <EndpointForm projectId={projectAppState.project.projectId} /> */}

          {/* Test */}
          <WireframeForm />
        </Modal.Body>
      </Modal>
      )
    }

  return (
    <>
      {/* <ProjectSideNav active={"wire-frame"}/>

      {projectAppState.wireframes.map((wireframe: any) => {
        return <WireframeCard wireframe={wireframe} />;
      })}

      <Button variant="primary" onClick={handleOpen}>
        New Wireframe
      </Button>
      {wireframeModal()} */}

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

          {/*Test*/}
          {projectAppState.wireframes.map((wireframe: any) => {
            return <WireframeCard key={wireframe.wireframeId} wireframe={wireframe} />;
          })}
          
          {wireframeModal()}
        </Container>
    </>
  );
};

export default ProjectWireframes;
