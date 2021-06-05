import React from 'react';
import {Col, Row, Card, CardDeck} from 'react-bootstrap';
import ProjectElipsisBtn from './modal/ProjectElipsisBtn';

export default function ProjectCard(props:any) {
  return (
    <>
      {props.projects.map((project:any) => (
        <span key={project.id}  className="card-container-wrapper" >
          <CardDeck className="card-project-wrapper" style={{display: 'inline-flex', flexDirection: 'row' }}>
            <Card style={{ width: '18rem', flex: 1}} className="card-project">
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>
                  <span className="proj-card-des">{project.des}</span>
                </Card.Text >
                {project.tags.slice(0,4).map((t:any) => (
                  <span className="proj-card-wrapper-tags">
                    <span className="proj-card-tags">
                      {t}
                    </span>
                  </span>
                    
                ))}
              </Card.Body>
              <Card.Footer className="text-right">
                <span><ProjectElipsisBtn/></span>
              </Card.Footer>
            </Card>
          </CardDeck>
        </span>
        
      ))}
         {/* {props.projects.map((project:any) => (
           <span className="outer-proj-card-wrapper">
             <span key={project.id} className="proj-card-wrapper">
                <Row>
                  <span className="proj-card-name">{project.name}</span>
                </Row>

                <Row>
                  <span className="proj-card-des">{project.des}</span>
                </Row> 

                <Row>
                  {project.tags.slice(0,4).map((t:any) => (
                    <span className="proj-card-wrapper-tags">
                      <span className="proj-card-tags">
                        {t}
                      </span>
                    </span>
                     
                  ))}
                </Row>

                <Row className="elipsis-btn-wrapper">
                  <Col></Col><Col></Col><Col></Col>
                  <Col>
                    <span className="elipsis-btn align-bottom">
                      <ProjectElipsisBtn/>
                    </span>
                  </Col>
                    
                </Row>
              </span>
           </span>
            
            
        ))} */}
    </>
  );
}

