import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { auth } from '../configs/firebase.config';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password === passwordConfirmation) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .catch((err) => console.error(err));
    } else {
      alert('Password do not match');
    }
  };

  return (
    <div className='sign-up'>
      <h1>Sign Up page</h1>
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password Confirmation'
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </Form.Group>
        <Button variant='primary' onClick={handleSignUp}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
