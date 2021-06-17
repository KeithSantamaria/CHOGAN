import React, { useMemo } from "react";
import ProjectSideNav from "./ProjectSideNav";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectProjectApp, getAllTags, deleteTag } from "../redux/projectAppSlice";
import { Button, Modal, Container, Col, Row, ListGroup } from "react-bootstrap";
import TagForm from "./tag/TagForm";
import UpdateTag from "./UpdateTag";
import TopNavbar from "../components/TopNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash} from "@fortawesome/free-solid-svg-icons";

function ProjectTags() {
  const projectAppState = useAppSelector(selectProjectApp);
  const [propertyId, setPropertyId] = React.useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const [updateShow, setUpdateShow] = React.useState(false);
  const handleOpen = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  const projectId = projectAppState.project.projectId;

  const handleUpdateOpen = () => setUpdateShow(true);
  const handleUpdateClose = () => setUpdateShow(false);
  const dispatch = useAppDispatch();
  const names = ProjectTags.name;

  const getTags = () => {
    const body = { params: { projectId: projectId } };
    dispatch(getAllTags(body));
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

  const tagUpdate = () => {
    return (
      <Modal
        className="modal-create-wrapper"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={updateShow}
        onHide={handleUpdateClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateTag id={propertyId} funcName={names} />
        </Modal.Body>
      </Modal>
    );
  };

  function removeTags(id: string) {
    const body = { params: { tagId: id }};
    dispatch(deleteTag(body));
  }

  function callUpdate(tid: string) {
    setPropertyId(tid);
    handleUpdateOpen();
  }
  return (
    <>
      <TopNavbar />
      <ProjectSideNav active={"tag"} />

      <Container id="pg-content">
        <Row style={{ paddingBottom: "5px" }}>
          <Col>
            <span style={{ color: "gray" }}>
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

        <Row style={{ paddingBottom: "1em", fontWeight: "bold" }}>
          <Col>Tags</Col>
          <Col>Description</Col>
          <Col>
            <span style={{ paddingRight: "4em" }} className="float-right">
              {" "}
              Action{" "}
            </span>
          </Col>
        </Row>

        {projectAppState.tags.map((tag: any) => (
          <div style={{ paddingBottom: "2vh" }}>
            <ListGroup.Item
              key={tag.tagId}
              className="project-list-item"
              style={{ borderRadius: "10px" }}
            >
              <Row>
                <Col className="project-name">{tag.tagName}</Col>

                <Col className="project-description">{tag.tagDescription}</Col>

                <Col>
                  <span className="float-right">
                    <Button
                      value={tag.tagId}
                      onClick={(a) => removeTags(tag.tagId)}
                      variant="outline-dark"
                    >
                      <FontAwesomeIcon
                        style={{ height: "100%" }}
                        className="fa-1x"
                        icon={faTrash}
                      />
                    </Button>

                    <span style={{ paddingRight: "1em" }}></span>
                  </span>
                </Col>
              </Row>
            </ListGroup.Item>
          </div>
        ))}
        <br></br>

        {tagModal()}
        {tagUpdate()}
      </Container>
    </>
  );
}

export default ProjectTags;
