import React, { useState } from 'react';
import { Card, ListGroup, ListGroupItem, Form, Button } from 'react-bootstrap';

const PizzaCard = ({ pizza }) => {
  const [size, setSize] = useState('small');
  const [qty, setQty] = useState(1);
  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Img src={pizza.image} variant='top' />

      <Card.Body>
        <Card.Title as='div'>
          <strong>{pizza.name}</strong>
        </Card.Title>

        <Card.Text as='div'></Card.Text>
        <Card.Text as='span'>{pizza.ingredients}</Card.Text>
      </Card.Body>
      <ListGroup>
        <ListGroupItem>
          <Form.Control
            as='select'
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}>
            <option value={pizza.price.small} key='small'>
              Small ${pizza.price.small}
            </option>
            <option value={pizza.price.medium} key='medium'>
              Medium ${pizza.price.medium}
            </option>
            <option value={pizza.price.big} key='big'>
              Big ${pizza.price.big}
            </option>
          </Form.Control>
        </ListGroupItem>
        <ListGroup.Item>
          <Button variant='success'>Add to Cart</Button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default PizzaCard;
