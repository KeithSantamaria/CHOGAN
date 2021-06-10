import axios from 'axios';
import React, { useMemo } from 'react'
import { Button, Card, Modal } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { selectProjectApp, setProject } from '../redux/projectAppSlice';
import ProjectSideNav from './ProjectSideNav'
import WidgetForm from './WidgetForm';

function ProjectModels() {
    const projectAppState= useAppSelector(selectProjectApp);
    const [modalShow, setModalShow] = React.useState(false);
    const handleOpen = () => setModalShow(true);
    const handleClose = () => setModalShow(false);
    const dispatch = useAppDispatch();
    
    const getProject = () => {
        const formdata = projectAppState.createNewPojoForm;
        // Test query string works; comment when ready to test prod;
        const queryString = `http://localhost:42069/api/read/project?projectId=60bc36b65d2b0da1deb9ada2`;

        // Production query string; uncomment when ready to test prod
        // const queryString = `http://localhost:42069/api/read/project?projectId=${projectId}`; 
        axios
          .get(queryString)
          .then((response) => {
            console.log("response", response);
            const projectData = response.data;
            dispatch(setProject(projectData));
          })
          .catch((error) => {
            console.log("There was an error: ", error);
          });
      };

      useMemo(() => {
        getProject();
      }, []);

    const widgetModal = () => {        
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
                    Create New Model
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <WidgetForm project={projectAppState.project}/>
                </Modal.Body>
          </Modal>
        )
    }
    return (
        <div>
          <ProjectSideNav />

          {projectAppState.models.map( (model:any) => {
          return(
            <Card>
              <Card.Body>
              <Card.Title>{model.modelName}</Card.Title>
            </Card.Body>
          </Card>
          );
          })}
          <Button variant="primary" onClick={handleOpen}>
            New Model
          </Button>
          {widgetModal()}
        </div>
    )
}

export default ProjectModels
