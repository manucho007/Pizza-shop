import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { auth } from '../configs/firebase.config';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' collapseOnSelect expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Manu's Pizza</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              {!currentUser && (
                <LinkContainer to='/sign-in'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {!currentUser && (
                <LinkContainer to='/sign-up'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign Up
                  </Nav.Link>
                </LinkContainer>
              )}
              {currentUser && currentUser ? (
                <Nav.Link>
                  <Button variant='danger' onClick={() => auth.signOut()}>
                    {' '}
                    <i className='fas fa-user' aria-hidden='true'></i> Sign out
                  </Button>
                </Nav.Link>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps, null)(Header);
