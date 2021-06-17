import React, { useMemo } from "react";
import { Button, Modal, Container, Col, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectProjectApp, getAllERDs } from "../redux/projectAppSlice";
import ERDCard from "./erd/ERDCard";
import ERDForm from "./erd/ERDForm";
import ProjectSideNav from "./ProjectSideNav";
import TopNavbar from "../components/TopNavbar";

const ProjectERDs = () => {
  const projectAppState = useAppSelector(selectProjectApp);
  const [modalShow, setModalShow] = React.useState(false);
  const handleOpen = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
  const dispatch = useAppDispatch();
  const projectId = projectAppState.project.projectId;

  const getERDs = () => {
    const body = { params: { projectId: projectId } };
    dispatch(getAllERDs(body));
  };

  useMemo(() => {
    getERDs();
  }, []);

  const ERDModal = () => {
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
            Create New ERD
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ERDForm />
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <>
      <TopNavbar />
      <ProjectSideNav active={"erd"} style={{ paddingRight: "1000px" }} />
      <Container id="pg-content">
        <Row style={{ paddingBottom: "5px" }}>
          <Col>
            <span style={{ color: "gray" }}>
              <h4>ER Diagram - {projectAppState.project.projectName}</h4>
            </span>
          </Col>

          <Col>
            <span className="float-right">
              <Button variant="outline-warning" onClick={handleOpen}>
                New ERD
              </Button>
            </span>
          </Col>
        </Row>
        <hr></hr>
        {projectAppState.erds.map((erd: any) => {
          return <ERDCard key={erd.ERDiagramId} erd={erd} />;
        })}

        {ERDModal()}
      </Container>
    </>
  );
};

export default ProjectERDs;
