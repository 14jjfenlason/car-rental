import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function ReservationForm({data}) {
  
    return (
     <>
      
      <CardGroup>
      <Card key={data._id }>
        <Card.Body>
          <Card.Title>{data.car} {data.reservationId}</Card.Title>
        </Card.Body>
    
        <Card.Body>
          <Card.Title>{data.startDate} {data.startTime}</Card.Title>
        </Card.Body>
     
        <Card.Body>
          <Card.Title>{data.endDate} {data.endTime}</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
     </>
    );
  };
  