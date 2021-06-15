import React from 'react'
import { Card } from 'react-bootstrap'

const ModelCard = ({model}:any) => {
  console.log(model);
    return (
        <Card>
        <Card.Body>
          <Card.Title>{model.modelName}</Card.Title>
          {model.modelMetadata.map((Object.keys) => {
            <Card.Text>{}</Card.Text>
          })}
        </Card.Body>
      </Card>
    )
}

export default ModelCard
