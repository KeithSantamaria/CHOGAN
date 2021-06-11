import React from "react";
import { Card } from "react-bootstrap";

const EndpointCard = ({ endpoint }: any) => {
  const [endpointName] = React.useState(endpoint.endpointName);
  const [endpointDescription] = React.useState(endpoint.endpointDescription);
  const [endpointUrlPattern] = React.useState(endpoint.endpointUrlPattern);

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{endpointName}</Card.Title>
          <Card.Text>{endpointDescription}</Card.Text>
          <Card.Text>{endpointUrlPattern}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EndpointCard;
