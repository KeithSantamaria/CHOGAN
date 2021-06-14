import axios from "axios";
import React from "react";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import { useAppDispatch } from "../../redux/hooks";
import { setEndpoints } from "../../redux/projectAppSlice";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faEdit} from "@fortawesome/free-solid-svg-icons";
import '../../css/project-service/end-point.css';

const EndpointCard = ({ endpoint }: any) => {
  const dispatch = useAppDispatch();
  const [endpointName] = React.useState(endpoint.endpointName);
  const [endpointDescription] = React.useState(endpoint.endpointDescription);
  const [endpointUrlPattern] = React.useState(endpoint.endpointUrlPattern);

  const removeEndpoint = (id:String) => {
      const queryDeleteString = `http://localhost:42069/api/delete/project/endpoint`;
      const body = {
          params: {
              endpointId: id
          }
      }
      console.log("request body: ", queryDeleteString, body)

      axios
          .delete(queryDeleteString, body)
          .then((response) => {
              console.log("response", response);
              const tagData = response.data;
              dispatch(setEndpoints(tagData));
          })
          .catch((error) => {
              console.log("There was an error on deleting: ", error);
          });
  };

  return (
    <>
      {/* <CardDeck>
      <Card>
        <Card.Body>
          <Card.Title>{endpointName}</Card.Title>
          <Card.Text>{endpointDescription}</Card.Text>
          <Card.Text>{endpointUrlPattern}</Card.Text>
        </Card.Body>
        <Button
          variant="danger"
          value={endpoint.endpointId}
          onClick={(e) => removeEndpoint((e.target as HTMLButtonElement).value)}
        >
          Delete
        </Button>
        <Button variant="info">Modify</Button>
      </Card>
      </CardDeck> */}
      <ListGroup.Item className="project-list-item">
            <Row>
                <Col className="project-name">
                    {endpointName}
                </Col>

                <Col className="project-description">
                    {endpointUrlPattern}
                </Col>

                <Col className="project-description">
                    {endpointDescription}
                </Col>

                <Col>
                  <span className="float-right">  
                    <Button
                      value={endpoint.endpointId}
                      onClick={(e) => removeEndpoint((e.target as HTMLButtonElement).value)}
                      variant="outline-dark"
                    >
                      <FontAwesomeIcon
                        style={{height: '100%'}}
                        className="fa-1x"
                        icon={faTrash}
                      /> 
                    </Button>

                    <span style={{paddingRight: '1em'}}></span>

                    <Button
                      value={endpoint.endpointId}
                      // onClick={(e) => editEndpoint((e.target as HTMLButtonElement).value)}
                      variant="outline-warning"
                    >
                      <FontAwesomeIcon
                        style={{height: '100%'}}
                        className="fa-1x"
                        icon={faEdit}
                      /> 
                    </Button>
                  </span>
                </Col>
            </Row>
        </ListGroup.Item>
        <br></br>
    </>
  );
};

export default EndpointCard;