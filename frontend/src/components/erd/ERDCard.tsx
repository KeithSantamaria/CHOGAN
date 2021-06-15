import axios from "axios";
import React from "react";
import { ListGroup, Row, Col, Button, Container, Modal } from "react-bootstrap";
import { useAppDispatch } from "../../redux/hooks";
import { setERDiagrams } from "../../redux/projectAppSlice";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faEdit} from "@fortawesome/free-solid-svg-icons";
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

  const removeERD = (id: String) => {
    const queryString = `http://localhost:42069/api/delete/project/ERD`;
    const body = {
      params: {
        erdId: id,
      },
    };
    axios
      .delete(queryString, body)
      .then((response) => {
        const erdData = response.data;
        dispatch(setERDiagrams(erdData));
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
          <img onClick={handleOpenImg} src={erdImg} alt={erdImg} style={{maxHeight: '80rem', maxWidth: '60rem'}}/>
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
              value={erd.erdId}
              onClick={(e) => removeERD((e.target as HTMLButtonElement).value)}
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
