import React, {useEffect, useState} from 'react';
import {Col, Row, Card, CardDeck} from 'react-bootstrap';
import ProjectElipsisBtn from './modal/ProjectElipsisBtn';

export default function ProjectCard(props:any) {
  const [renderCard, setRenderCard] = useState([]);

  useEffect(() => {
    setRenderCard(props.projects)
  }, [props.projects]);

  return (
    <>
      {renderCard.map((project:any) => (
        <span key={project.id}  className="card-container-wrapper" >
          <CardDeck className="card-project-wrapper" style={{display: 'inline-flex', flexDirection: 'row' }}>
            <Card style={{ width: '18rem', flex: 1}} className="card-project">
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>
                  <span className="proj-card-des">{project.des}</span>
                </Card.Text >
                
              </Card.Body>
              <Card.Footer className="text-right">
                <div className="text-left">
                  {project.tags.slice(0,4).map((t:any, index: number) => (
                      <span key={index} className="proj-card-wrapper-tags">
                        <span className="proj-card-tags">
                          {t}
                        </span>
                      </span>
                    ))}
                </div>
                <span><ProjectElipsisBtn/></span>
              </Card.Footer>
            </Card>
          </CardDeck>
        </span>
      ))}
    </>
  );
}

