import React from "react";
import { Card } from "react-bootstrap";
import { useAppDispatch } from "../../redux/hooks";

const ModelCard = ({ model }: any) => {
  const [metadata] = React.useState(model.modelMetadata);
  const dispatch = useAppDispatch();

  const removeEndpoint = (id: string) => {
    const queryDeleteString = `http://localhost:42069/api/delete/project/endpoint`;
    const body = {
      params: {
        endpointId: endpoint.endpointId,
      },
    };
    console.log("request body: ", queryDeleteString, body);

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
