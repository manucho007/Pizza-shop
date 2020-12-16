import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  submitOrderAuth,
  submitOrderUnAuth,
} from '../actions/firestoreActions';

const CheckOut = ({
  currentUser,
  cartItems,
  totalPrice,
  submitOrderAuth,
  submitOrderUnAuth,
}) => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = () => {
    const contactInfo = {
      name,
      address,
      phone,
    };

    currentUser
      ? submitOrderAuth({ currentUser, cartItems, totalPrice, contactInfo })
      : submitOrderUnAuth();

    history.push('/history');
  };

  return (
    <>
      <Button variant='primary' onClick={handleShow} block>
        Proceed
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter the information for the delivery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='formBasicName'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='formBasicAddress'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type='text'
                placeholder='What is your address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='formBasicPhone'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type='text'
                placeholder='Phone Number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='success' onClick={handleSubmit}>
            Place Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
const mapStateToProps = ({ cart, auth }) => ({
  cartItems: cart.cartItems,
  totalPrice: cart.totalPrice,
  currentUser: auth.currentUser,
});
const CheckoutConnected = connect(mapStateToProps, {
  submitOrderAuth,
  submitOrderUnAuth,
})(CheckOut);
export default CheckoutConnected;
