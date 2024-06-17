import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import './vehicleStyles.css';
import Trasformrwrapper from './Trasformrwrapper';

const styles = {
  image: {
    height: '200px',
    width: '400px',
    margin: 'auto',
    borderRadius: '15px',
  },
  card: {
    border: 'none',
    textDecoration: 'none',
  },
  listGroupItem: {
    border: 'none',
    borderBottom: 'none',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

export default function Vehicle({ data, handleShow }) {
  return (
    <Trasformrwrapper size={1.1}>
      <Row>
        <Col key={data._id}>
          <Card className="content" style={styles.card}>
            <Card.Body>
              <Card.Title className="text-center">
                {data.make} {data.model}
              </Card.Title>
            </Card.Body>
            <Card.Img style={styles.image} variant="top" src={data.image} />
            <ListGroup className="content">
              <ListGroup.Item style={styles.listGroupItem} className="content">
                {data.year}
              </ListGroup.Item>
              <ListGroup.Item className="content" style={styles.listGroupItem}>
                {data.type}
              </ListGroup.Item>
              <ListGroup.Item className="content" style={styles.listGroupItem}>
                {data.mileage}
              </ListGroup.Item>
              <ListGroup.Item className="content" style={styles.listGroupItem}>
                {data.stock}
                <Card.Body className="text-center">
                  <Button onClick={() => handleShow(data)}>Reserve</Button>
                </Card.Body>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Trasformrwrapper>
  );
}
