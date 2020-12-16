import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselImg = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='images/slide1.jpeg'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>Dodo 2077</h3>
          <p>Participate buying our pizza</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='images/slide2.jpeg'
          alt='Second slide'
        />
        <Carousel.Caption>
          <h3>Coca Cola Gifts</h3>
          <p>Get a free Soda on purchases over 699 Rub</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='images/slide3.jpeg'
          alt='Third slide'
        />

        <Carousel.Caption>
          <h3>Try our new Flavor</h3>
          <p>More meat than ever!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselImg;
