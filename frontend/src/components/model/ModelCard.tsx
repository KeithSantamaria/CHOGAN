import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useAppDispatch } from "../../redux/hooks";
import { setModels } from "../../redux/projectAppSlice";

const ModelCard = ({ model }: any) => {
  const [metadata] = React.useState(model.modelMetadata);
  const [modelId] = React.useState(model.modelId);
  const dispatch = useAppDispatch();

  const removeModel = (id: string) => {
    const queryDeleteString = `http://localhost:42069/api/delete/project/model`;
    const body = {
      params: {
        modelId: modelId,
      },
    };
    console.log(body);

    axios
      .delete(queryDeleteString, body)
      .then((response) => {
        console.log("response", response);
        const modelData = response.data;
        dispatch(setModels(modelData));
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
        {Object.keys(metadata).forEach((key: any) => {
          <Card.Text>{metadata[key]}</Card.Text>;
        })}
        {/* {Object.keys(metadata).forEach( key => {
          return <Card.Text>{metadata[key]}</Card.Text>
        })} */}
        {/* {Object.entries(metadata).forEach((entry:any) => {
          return <Card.Text>{entry}</Card.Text>;
        })} */}
        <Button
          value={model.modelId}
          onClick={(e) => removeModel((e.target as HTMLButtonElement).value)}
          variant="outline-dark"
        >
          <FontAwesomeIcon
            style={{ height: "100%" }}
            className="fa-1x"
            icon={faTrash}
          />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ModelCard;
