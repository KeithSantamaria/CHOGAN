import axios from "axios";
import React from "react";
import { ListGroup, Row, Col, Button, Container, Modal } from "react-bootstrap";
import { useAppDispatch } from "../../redux/hooks";
import { setWireframes } from "../../redux/projectAppSlice";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import '../../css/project-service/wire-frame.css';

const WireframeCard = ({ wireframe }: any) => {
  const dispatch = useAppDispatch();
  const [wireframeName] = React.useState(wireframe.wireframeName);
  const [wireframeImg] = React.useState(wireframe.wireframeImageUrl);
  const [wireframeDescription] = React.useState(wireframe.wireframeDescription);

  const [modalShow, setModalShow] = React.useState(false);
  const handleOpen = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  const [modalImg, setModalImg] = React.useState(false);
  const handleOpenImg = () => setModalImg(true);
  const handleCloseImg = () => setModalImg(false);

  const removeWireframe = (id: String) => {
    const queryString = `http://localhost:42069/api/delete/project/wireframe`;
    const body = {
      params: {
        wireframeId: wireframe.wireframeId,
      },
    };
    axios
      .delete(queryString, body)
      .then((response) => {
        const wireframeData = response.data;
        dispatch(setWireframes(wireframeData));
      })
      .catch((error) => {
        console.log("There was an error on deleting: ", error);
      });
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
          <h5>{wireframeName}</h5>
          <h6>{wireframeDescription}</h6>
          <img onClick={handleOpenImg} src={wireframeImg} alt={wireframeImg} style={{maxHeight: '20rem', maxWidth: '20rem'}}/>
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
          <img onClick={handleOpenImg} src={wireframeImg} alt={wireframeImg} style={{maxHeight: '40rem', maxWidth: '50rem'}}/>
        </Modal.Body>
      </Modal>
    );
  };



  return (
    <>
      <ListGroup.Item className="project-list-item erd-wrapper-container" onClick={handleOpen}>
        <Row >
          <Col className="project-description">
            <img src={wireframeImg} alt={wireframeImg} style={{maxHeight: '10rem', maxWidth: '10rem'}}/>
          </Col>

          <Col className="project-name">
            {wireframeName}
          </Col>

          <Col className="project-description">
            <Container className="des-container">
              {wireframeDescription}
            </Container>
              
          </Col>

          <Col >
            <span className="float-right">  
              <Button
                variant="danger"
                value={wireframe.wireframeId}
                onClick={(e) => removeWireframe(wireframe.wireframeId)}
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

export default WireframeCard;
