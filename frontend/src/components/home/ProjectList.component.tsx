import {useEffect, useState} from 'react';
import {Col, ListGroup, Row} from "react-bootstrap";
import ProjectElipsisBtn from './modal/ProjectElipsisBtn';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClipboardList} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { setProject } from '../../redux/projectAppSlice';


export default function ProjectList(props:any) {
  const [renderCard, setRenderCard] = useState([]);
  const history = useHistory();
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    setRenderCard(props.projects)
  }, [props.projects]);

  const goToProject = (project: any) => {
    dispatch(setProject(project));
    history.push("/user/project/general");    
  }; 

  return (
    <>
      {renderCard.map((project:any) => (
         <ListGroup.Item className="project-list-item">
            <Row>
              <Col className="project-name" onClick={() => goToProject(project)}>
                  <FontAwesomeIcon style={{height: '40%', marginRight: '10px'}}className="fa-1x" icon={faClipboardList}/> 
                  {project.projectName}
              </Col>
              <Col className="project-description">
                  {project.projectDescription}
              </Col>
              {/* <span><ProjectElipsisBtn/></span> */}
            </Row>
        </ListGroup.Item>
      ))}
    </>
  );
}

