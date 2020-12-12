import React from 'react';
import PizzaCard from '../components/PizzaCard';
import { Row, Col } from 'react-bootstrap';
import pizzas from '../pizzas';
const HomeScreen = () => {
  return (
    <Row>
      {pizzas.map((pizza) => (
        <Col sm={12} md={6} lg={4} xl={3}>
          <PizzaCard pizza={pizza} />
        </Col>
      ))}
    </Row>
  );
};

export default HomeScreen;
