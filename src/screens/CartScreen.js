import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import Message from '../components/Message';
import Checkout from '../components/CheckOut';
import { addToCart, removeFromCart } from '../actions/cartActions';

const CartScreen = ({ match, location }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  cart.qtyItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
  cart.subTotal = cartItems
    .reduce((acc, item) => acc + item.qty * item.price, 0)
    .toFixed(2);
  cart.totalPrice = cartItems
    .reduce((acc, item) => acc + item.qty * item.price, 10.99)
    .toFixed(2);
  // console.log(
  //   `This is cart${cartItems} QUANTITY${cart.qtyItems}, SUBTOTAL${cart.subTotal}, TOTAL${cart.totalPrice}`
  // );

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  // const checkoutHandler = () => {
  //   // history.push('/login?redirect=shipping');
  // };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to='/'>Go back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {/* These data come from the action */}
            {cartItems.map((item) => (
              <ListGroup.Item key={item.name}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>{item.price}</Col>
                  <Col md={2}>
                    {/* Qty {item.qty} */}
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }>
                      <option key='1' value='1'>
                        1
                      </option>
                      <option key='2' value='2'>
                        2
                      </option>
                      <option key='3' value='3'>
                        3
                      </option>
                      <option key='4' value='4'>
                        4
                      </option>
                      <option key='5' value='5'>
                        5
                      </option>
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => {
                        removeFromCartHandler(item.product);
                      }}>
                      <i className='fa fa-trash' aria-hidden='true'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup.Item>
            <h2>Subtotal ({cart.qtyItems}) Items</h2>${cart.subTotal} + $10.99
            for delivery
          </ListGroup.Item>
          <ListGroup.Item>Total: ${cart.totalPrice}</ListGroup.Item>
          <ListGroup.Item>
            {/* <Button
              type='button'
              className='btn-block'
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}>
              Proceed to Checkout
            </Button> */}
            <Checkout />
          </ListGroup.Item>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
