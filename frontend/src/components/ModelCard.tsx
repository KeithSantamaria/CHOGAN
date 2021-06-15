import React from 'react'
import { Card } from 'react-bootstrap'

const ModelCard = ({model}:any) => {
    return (
        <Card>
        <Card.Body>
          <Card.Title>{model.modelName}</Card.Title>
        </Card.Body>
      </Card>
    )
}

export default ModelCard
