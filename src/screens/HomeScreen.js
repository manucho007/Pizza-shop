import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PizzaCard from '../components/PizzaCard';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Col, Row } from 'react-bootstrap';
import { listProducts } from '../actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  // Grab the data from state
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // Firing the action
  // useEffect triggers as soon as the component loads
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <PizzaCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
