import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import Button from 'react-bootstrap/Button';

import '../../styles/MyStyle.css';

const reserva = "Reserva con Nosotros";


export const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="https://shorturl.at/aenF7" alt="First slide" />
        <Carousel.Caption className="carousel-caption">
          <h3 className='texto-Reserva'>{reserva}</h3> {/* Título con el valor de la variable reserva */}
          <Button className='Button-reserva'>Reserva aquí</Button> {/* Botón de reserva */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://shorturl.at/ahiIM" alt="Second slide" />
        <Carousel.Caption className="carousel-caption">
          <h3 className='texto-Reserva'>{reserva}</h3> {/* Título con el valor de la variable reserva */}
          <Button className='Button-reserva'>Reserva aquí</Button> {/* Botón de reserva */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://shorturl.at/wDOV2" alt="Third slide" />
        <Carousel.Caption className="carousel-caption">
          <h3 className='texto-Reserva'>{reserva}</h3> {/* Título con el valor de la variable reserva */}
          <Button className='Button-reserva'>Reserva aquí</Button> {/* Botón de reserva */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselComponent;
