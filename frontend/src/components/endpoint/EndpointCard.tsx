import React from "react";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import { useAppDispatch } from "../../redux/hooks";
import { deleteEndpoint } from "../../redux/projectAppSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import "../../css/project-service/end-point.css";

const EndpointCard = ({ endpoint }: any) => {
  const dispatch = useAppDispatch();
  const [endpointName] = React.useState(endpoint.endpointName);
  const [endpointDescription] = React.useState(endpoint.endpointDescription);
  const [endpointUrlPattern] = React.useState(endpoint.endpointUrlPattern);

  const removeEndpoint = (id: string) => {
    const body = { params: { endpointId: endpoint.endpointId } };
    dispatch(deleteEndpoint(body));
  };

  return (
    <>
      <ListGroup.Item className="project-list-item">
        <Row>
          <Col className="project-name">{endpointName}</Col>

          <Col className="project-description">{endpointUrlPattern}</Col>

          <Col className="project-description">{endpointDescription}</Col>

          <Col>
            <span className="float-right">
              <Button
                value={endpoint.endpointId}
                onClick={(e) =>
                  removeEndpoint((e.target as HTMLButtonElement).value)
                }
                variant="outline-dark"
              >
                <FontAwesomeIcon
                  style={{ height: "100%" }}
                  className="fa-1x"
                  icon={faTrash}
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
