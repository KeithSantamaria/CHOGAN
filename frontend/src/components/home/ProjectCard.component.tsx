import React from 'react';
import {Col, Row} from 'react-bootstrap';

export default function ProjectCard(props:any) {
  return (
    <>
         {props.projects.map((project:any) => (
           <span className="outer-proj-card-wrapper">
             <span key={project.id} className="proj-card-wrapper">
                <Row>
                  <span>{project.name}</span>
                </Row>

                <Row>
                  <span>{project.des}</span>
                </Row> 

                <Row>
                  {project.tags.map((t:any) => (
                      <span>{t}</span>
                  ))}
                </Row>
              </span>
           </span>
            
            
        ))}
    </>
  );
}
