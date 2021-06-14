import React, { useMemo } from 'react'
import axios from 'axios';
import ProjectSideNav from './ProjectSideNav'
import WidgetForm from './WidgetForm';
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { Jumbotron, Card, Button, Modal } from 'react-bootstrap';
import { selectProjectApp, setProject } from '../redux/projectAppSlice';

// For production, project will be passed as a prop from Project Card (built by Home group)
// const ProjectGeneralInfo = ({project} : any ) => {
const ProjectGeneralInfo = () => {

  const dispatch = useAppDispatch();
  const projectAppState = useAppSelector(selectProjectApp);
  const [modalShow, setModalShow] = React.useState(false);
    

    // Code for grabbing user from User Slice

    const handleOpen = () => setModalShow(true);
    const handleClose = () => setModalShow(false);

    const getProject = () => {
        // Test query string works; comment when ready to test prod
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
                    Create New Widget
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
          <Card>
            <Card.Body>
              {/* <Card.Title>{userAppState.user.userName} - {projectName}</Card.Title> */}
              <Card.Title>{projectAppState.project.projectName}</Card.Title>

              <Card.Text>
              {projectAppState.project.projectDescription}
              </Card.Text>
            </Card.Body>
          </Card>
          {projectAppState.project.widgets.map( (widget: any) => {
            return(
              <Card>
                <Card.Body>
                  <Card.Title>{widget.widgetName}</Card.Title>
                  <Card.Text>
                    {widget.widgetDescription}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
          <Button variant="primary" onClick={handleOpen}>
            New Widget
          </Button>
          {widgetModal()}
        </div>
    )
}

export default ProjectGeneralInfo
