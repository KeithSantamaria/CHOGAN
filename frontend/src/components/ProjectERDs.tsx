import axios from "axios";
import React, { useMemo } from "react";
import { Button, Modal } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectProjectApp, setERDiagrams } from "../redux/projectAppSlice";
import ERDCard from "./ERDCard";
import ERDForm from "./ERDForm";
import ProjectSideNav from "./ProjectSideNav";

const ProjectERDs = () => {
  const projectAppState = useAppSelector(selectProjectApp);
  const [modalShow, setModalShow] = React.useState(false);
  const handleOpen = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
  const dispatch = useAppDispatch();

  const getERDs = () => {
    //Test
    const projectId = "60bc36b65d2b0da1deb9ada2";

    //Production
    //const projectId = projectAppState.project.projectId;
    const queryString = `http://localhost:42069/api/read/project/ERDs`;

    const body = {
      params: {
        projectId: projectId,
      },
    };

    axios
      .get(queryString, body)
      .then((response) => {
        const ERDdata = response.data;
        dispatch(setERDiagrams(ERDdata));
      })
      .catch((error) => {
        console.log("There was an error: ", error);
      });
  };

  useMemo(() => {
    getERDs();
  }, []);

  const ERDModal = () => {
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
            Create New ERD
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Production */}
          {/* <EndpointForm projectId={projectAppState.project.projectId} /> */}

          {/* Test */}
          <ERDForm />
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <div>
      <ProjectSideNav />
      {projectAppState.ERDiagrams.map((erd: any) => {
        return <ERDCard erd={erd} />;
      })}
      <Button variant="primary" onClick={handleOpen}>
        New ERD
      </Button>
      {ERDModal()}
    </div>
  );
};

export default ProjectERDs;
