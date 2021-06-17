import {useEffect, useState} from 'react';
import {Col, ListGroup, Row} from "react-bootstrap";
import ProjectElipsisBtn from './modal/ProjectElipsisBtn';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClipboardList} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';


export default function ProjectList(props:any) {
  const [renderCard, setRenderCard] = useState([]);
  const history = useHistory();
  
  useEffect(() => {
    setRenderCard(props.projects)
  }, [props.projects]);

  const goToProject = () => {
    history.push("/user/project/general");    
  }; 

  return (
    <div className='component'>
      {renderCard.map((project:any) => (
        <div className="test">
         <ListGroup.Item className="project-list-item">
            <Row>
              <Col title='test' className="project-name" onClick={goToProject}>
                  <FontAwesomeIcon style={{height: '40%', marginRight: '10px'}}className="fa-1x" icon={faClipboardList}/> 
                  {project.projectName}
              </Col>
              <Col className="project-description">
                  {project.projectDescription}
              </Col>
              <span><ProjectElipsisBtn/></span>
            </Row>
        </ListGroup.Item>
        </div>
      ))}
    </div>
  );
}

