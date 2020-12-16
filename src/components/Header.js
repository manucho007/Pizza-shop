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
            <Navbar.Brand>
              {/* <img
                src='/logoManu.png'
                width='90'
                height='35'
                className='d-inline-block align-top'
                alt='React Bootstrap logo'
              />{' '} */}
              Manu's Pizza
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Button variant='info'>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Button>
              </LinkContainer>
              {currentUser && currentUser ? (
                <>
                  <Nav.Link>
                    <Button variant='danger' onClick={() => auth.signOut()}>
                      <i className='fas fa-user' aria-hidden='true'></i> Sign
                      out
                    </Button>
                  </Nav.Link>
                  <LinkContainer to='/history'>
                    <Button variant='info'>
                      <i className='fa fa-history' aria-hidden='true'></i>
                      History
                    </Button>
                  </LinkContainer>
                </>
              ) : (
                <>
                  <LinkContainer to='/sign-up'>
                    <Button variant='dark'>
                      <i className='fas fa-user'></i> Sign Up
                    </Button>
                  </LinkContainer>
                  <LinkContainer to='/sign-in'>
                    <Button variant='dark'>
                      <i className='fas fa-user'></i> Sign In
                    </Button>
                  </LinkContainer>
                </>
              )}
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
