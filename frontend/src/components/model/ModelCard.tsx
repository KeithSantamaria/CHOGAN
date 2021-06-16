import React from "react";
import { Card } from "react-bootstrap";

const ModelCard = ({ model }: any) => {
  const [metadata] = React.useState(model.modelMetadata);
  return (
    <Card>
      <Card.Body>
        <Card.Title>{model.modelName}</Card.Title>
        {Object.entries(metadata).forEach((entry:any) => {
          return <Card.Text>{entry}</Card.Text>;
        })}
      </Card.Body>
    </Card>
  );
};

export default ModelCard;
