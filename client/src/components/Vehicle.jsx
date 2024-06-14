import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button  from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup';


const styles = {
  image: {
    height: '25%',
    width: '25%'
  }
}

export default function Vehicle({ data, handleShow }) {
  
  return (
    <Row >
      <Col key={data._id}>
        <Card >
          <Card.Body>
            <Card.Title>
              {data.make} {data.model}
            </Card.Title>
          </Card.Body>
          <Card.Img style={styles.image} variant="top" src={data.image}  />
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{data.year}</ListGroup.Item>
            <ListGroup.Item>{data.type}</ListGroup.Item>
            <ListGroup.Item>{data.mileage}</ListGroup.Item>
            <ListGroup.Item>{data.stock}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
          <Button onClick={() =>handleShow(data)}>Reserve</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

