import React from "react";
import { ListGroup, Row, Col, Button, Container, Modal } from "react-bootstrap";
import { useAppDispatch } from "../../redux/hooks";
import { deleteERD } from "../../redux/projectAppSlice";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import '../../css/project-service/erd-card.css';

const ERDCard = ({ erd }: any) => {
  const dispatch = useAppDispatch();
  const [erdName] = React.useState(erd.erdName);
  const [erdImg] = React.useState(erd.erdImageUrl);
  const [erdDescription] = React.useState(erd.erdDescription);

  const [modalShow, setModalShow] = React.useState(false);
  const handleOpen = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  const [modalImg, setModalImg] = React.useState(false);
  const handleOpenImg = () => setModalImg(true);
  const handleCloseImg = () => setModalImg(false);

  const removeERD = (id: string) => {
    const body = { params: { erdId: erd.erdId } };
    dispatch(deleteERD(body));
  };

  const detailModal = () => {
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

        </Modal.Header>
        <Modal.Body>
          <h5>{erdName}</h5>
          <h6>{erdDescription}</h6>
          <img onClick={handleOpenImg} src={erdImg} alt={erdImg} style={{maxHeight: '20rem', maxWidth: '20rem'}}/>
        </Modal.Body>
      </Modal>
    );
  };

  const viewImg = () => {
    return (
      <Modal
        className="modal-create-wrapper"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalImg}
        onHide={handleCloseImg}
      >
        <Modal.Header closeButton>
        </Modal.Header>

        <Modal.Body>
          <img onClick={handleOpenImg} src={erdImg} alt={erdImg} style={{maxHeight: '40rem', maxWidth: '50rem'}}/>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <>
      <ListGroup.Item className="project-list-item erd-wrapper-container" onClick={handleOpen}>
        <Row >
          <Col className="project-description">
            <img src={erdImg} alt={erdImg} style={{maxHeight: '10rem', maxWidth: '10rem'}}/>
          </Col>

          <Col className="project-name">
            {erdName}
          </Col>

          <Col className="project-description">
            <Container className="des-container">
              {erdDescription}
            </Container>
          </Col>

          <Col >
            <span className="float-right">  
              <Button
                variant="danger"
                value={erd.ERDiagramId}
                onClick={(e) => removeERD(erd.ERDiagramId)}
              >
                <FontAwesomeIcon
                  style={{height: '100%'}}
                  className="fa-1x"
                  icon={faTrash}
                /> 
              </Button>

              <span style={{paddingRight: '1em'}}></span>
            </span>
          </Col>
        </Row>
      </ListGroup.Item>
      <br></br>
      {detailModal()}
      {viewImg()}
    </>
  );
};

export default ERDCard;
