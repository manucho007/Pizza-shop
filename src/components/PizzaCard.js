import React from 'react';
import { Card } from 'react-bootstrap';

const PizzaCard = ({ pizza }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Img src={pizza.image} variant='top' />

      <Card.Body>
        <Card.Title as='div'>
          <strong>{pizza.name}</strong>
        </Card.Title>

        <Card.Text as='div'></Card.Text>
        <Card.Text as='h3'>${pizza.price.small}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PizzaCard;
