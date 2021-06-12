import React from 'react'
import Modal from 'react-bootstrap/esm/Modal';


const EndpointModal = (endpoint:any) => {

    const [modalShow, setModalShow] = React.useState(false);
    const handleOpen = () => setModalShow(true);
    const handleClose = () => setModalShow(false);

    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {endpoint.endpointName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    
        </Modal.Body>
      </Modal>
    );
  }

export default EndpointModal
