import React, { useMemo } from "react";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectProjectApp, getAllEndpoints } from "../redux/projectAppSlice";
import ProjectSideNav from "./ProjectSideNav";
import EndpointForm from "./endpoint/EndpointForm";
import EndpointCard from "./endpoint/EndpointCard";
import TopNavbar from '../components/TopNavbar';

function ProjectEndpoints() {
  const projectAppState = useAppSelector(selectProjectApp);
  const [modalShow, setModalShow] = React.useState(false);
  const handleOpen = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
  const dispatch = useAppDispatch();
  const projectId = projectAppState.project.projectId;

  const getEndpoints = () => {
    const body = { params: { projectId: projectId }};
    dispatch(getAllEndpoints(body));
  };

  useMemo(() => {
    getEndpoints();
  }, []);

  const endpointModal = () => {
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
            Create New Endpoint
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EndpointForm />
        </Modal.Body>
      </Modal>
    );
  };
  return (
    <>
      <TopNavbar/>
      <ProjectSideNav active={"endpoint"}/>

      <Container id="pg-content">
        <Row style={{paddingBottom: '5px'}}>
          <Col>
            <span style={{color: 'gray'}}>
              <h4>Endpoints - {projectAppState.project.projectName}</h4>
            </span>
          </Col>

          <Col>
            <span className="float-right">
              <Button variant="outline-warning" onClick={handleOpen}>
                New Endpoint
              </Button>
            </span>
          </Col>
        </Row>
        <hr></hr>

        <Row style={{paddingBottom: '1em', fontWeight: 'bold'}}>
          <Col>Name</Col>
          <Col>URL</Col>
          <Col>Description</Col>
          <Col><span style={{paddingRight: '4em'}} className="float-right"> Action </span></Col>
        </Row>

        {projectAppState.endpoints.map((endpoint: any) => {
          return <EndpointCard key={endpoint.endpointId} endpoint={endpoint} />;
        })}
        
        {endpointModal()}
      </Container>
    </>
  );
}

export default ProjectEndpoints;
