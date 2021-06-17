import React, { useMemo } from "react";
import { Button, Modal, Container, Col, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectProjectApp, getAllModels } from "../redux/projectAppSlice";
import ModelForm from "./model/ModelForm";
import ProjectSideNav from "./ProjectSideNav";
import ModelCard from "./model/ModelCard";
import TopNavbar from "../components/TopNavbar";

function ProjectModels() {
  const projectAppState = useAppSelector(selectProjectApp);
  const [modalShow, setModalShow] = React.useState(false);
  const handleOpen = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
  const dispatch = useAppDispatch();
  const projectId = projectAppState.project.projectId;

  const getModels = () => {
    const body = { params: { projectId: projectId } };
    dispatch(getAllModels(body));
  };

  useMemo(() => {
    getModels();
  }, []);

  const projectModal = () => {
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
    <>
      <TopNavbar />
      <ProjectSideNav active={"model"} />

      <Container id="pg-content">
        <Row style={{ paddingBottom: "5px" }}>
          <Col>
            <span style={{ color: "gray" }}>
              <h4>Models - {projectAppState.project.projectName}</h4>
            </span>
          </Col>

          <Col>
            <span className="float-right">
              <Button variant="outline-warning" onClick={handleOpen}>
                New Model
              </Button>
            </span>
          </Col>
        </Row>
        <hr></hr>

        <Row style={{ paddingBottom: "1em", fontWeight: "bold" }}>
          <Col>Model</Col>
          <Col>
            <span style={{ paddingRight: "4em" }} className="float-right">
              {" "}
              Action{" "}
            </span>
          </Col>
        </Row>

        {projectAppState.models.map((model: any) => {
          return <ModelCard model={model} />;
        })}
        {projectModal()}
      </Container>
    </>
  );
}

export default ProjectModels;
