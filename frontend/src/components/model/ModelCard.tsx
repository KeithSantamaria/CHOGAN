import React from "react";
import { Card } from "react-bootstrap";

const ModelCard = ({ model }: any) => {
  const [metadata] = React.useState(model.modelMetadata);
  return (
    <Card>
      <Card.Body>
        <Card.Title>{model.modelName}</Card.Title>
        {/* {Object.values(metadata).forEach( (value:any) => {
          <Card.Text>{value}</Card.Text>
        })} */}
        {Object.keys(metadata).forEach( (key:any) => {
          <Card.Text>{metadata[key]}</Card.Text>
        })}
        {/* {Object.keys(metadata).forEach( key => {
          return <Card.Text>{metadata[key]}</Card.Text>
        })} */}
        {/* {Object.entries(metadata).forEach((entry:any) => {
          return <Card.Text>{entry}</Card.Text>;
        })} */}
      </Card.Body>
    </Card>
  );
};

export default ModelCard;
