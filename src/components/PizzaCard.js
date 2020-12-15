import React from 'react';
import { Link } from 'react-router-dom';

import { Card, ListGroup, Row, Col } from 'react-bootstrap';

const PizzaCard = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product.id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product.id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'></Card.Text>
        <Card.Text as='span'>{product.ingredients}</Card.Text>
      </Card.Body>

      <ListGroup>
        <ListGroup.Item>
          <Row>
            <Col>Price:</Col>
            <Col>
              <strong>${product.price}</strong>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default PizzaCard;
