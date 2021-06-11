import {useEffect, useState} from 'react';
import {Col, ListGroup, Row} from "react-bootstrap";
import ProjectElipsisBtn from './modal/ProjectElipsisBtn';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClipboardList} from "@fortawesome/free-solid-svg-icons";


export default function ProjectList(props:any) {
  const [renderCard, setRenderCard] = useState([]);

  useEffect(() => {
    setRenderCard(props.projects)
  }, [props.projects]);

  return (
    <>
      {renderCard.map((project:any) => (
         <ListGroup.Item className="project-list-item">
            <Row>
                <Col className="project-name">
                    <FontAwesomeIcon style={{height: '40%', marginRight: '10px'}}className="fa-1x" icon={faClipboardList}/> 
                    {project.projectName}
                </Col>
                <Col className="project-description">
                    {project.projectDescription}
                </Col>
            <span><ProjectElipsisBtn/></span>
            </Row>
        </ListGroup.Item>
      ))}
    </>
  );
}

