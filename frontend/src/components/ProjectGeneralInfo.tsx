import React, { useMemo } from 'react'
import axios from 'axios';
import ProjectSideNav from './ProjectSideNav'
import { useAppDispatch } from "../redux/hooks"
import { Jumbotron, Card, Button } from 'react-bootstrap';

// For production, project will be passed as a prop from Project Card (built by Home group)

// const ProjectGeneralInfo = ({project} : any ) => {
const ProjectGeneralInfo = () => {

    const [project, setProject] = React.useState("");
    const [projectId, setProjectId] = React.useState("");
    const [projectName, setProjectName] = React.useState("");
    const [projectDescription, setProjectDescription] = React.useState("");
    const [projectStatus, setProjectStatus] = React.useState("");

    const [endpoints, setEndpoints] = React.useState("");
    const [models, setModels] = React.useState("");
    const [tags, setTags] = React.useState("");
    const [userStories, setUserStories] = React.useState("");

    // const dispatch = useAppDispatch();
  
    // Code for grabbing user from User Slice


    const getProject = () => {
        // Test query string works; comment when ready to test prod
        const queryString = `http://localhost:42069/api/read/project?projectId=60bc36b65d2b0da1deb9ada2`;

        // Production query string; uncomment when ready to test prod
        // const queryString = `http://localhost:42069/api/read/project?projectId=${projectId}`; 

        axios
          .get(queryString)
          .then((response) => {
            console.log("response", response);
            setProject(response.data);
            setProjectId(response.data.projectId);
            setProjectName(response.data.projectName);
            setProjectDescription(response.data.projectDescription);
          })
          .catch((error) => {
            console.log("There was an error: ", error);
          });
      };

      

      // const updateProjectStatus = (event: any, project: any) => {
      //   const queryString = `http://localhost:42069/api/update/project/status`;
      //   const body = {
      //     params: {
      //       projectId: project.projectId,
      //       projectStatus: event.target.value,
      //     },
      //   };
      //   console.log(body);
      //   axios
      //     .put(queryString, body)
      //     .then((response) => {
      //       console.log("response", response);
      //       if(response.status === 200){
      //         console.log(response.data);
      //         setProject(response.data);
      //         setProjectId(response.data.projectId);
      //         setProjectName(response.data.projectName);
      //         setProjectDescription(response.data.projectDescription);
      //       }
      //     })
      //     .catch((error) => {
      //       console.log("There was an error: ", error);
      //     })
      // };

      useMemo(() => {
        getProject();
      }, []);

    
    return (
        <div>

            <ProjectSideNav />
            <Card>
              <Card.Body>
                {/* <Card.Title>{userAppState.user.userName} - {projectName}</Card.Title> */}
                <Card.Title>{projectName}</Card.Title>

                <Card.Text>
                  {projectDescription}
                </Card.Text>
              </Card.Body>
            </Card>


        </div>
    )
}

export default ProjectGeneralInfo
