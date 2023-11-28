import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';
import '../../styles/MainStyle.css';

const servicio1 = 'https://shorturl.at/xGSTW';
const servicio2 = 'https://shorturl.at/eKS28';
const servicio3 = 'https://shorturl.at/izS69';

export const HomeServiceGrid = () => {
  return (
    <CardGroup
      style={{
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '50px',
        marginBottom: '50px',
      }}
      className="service-card-group"
    >
      {/* Primera Card */}
      <Card bg="white" text="dark" className="card">
        {/* Imagen de la Card */}
        <Card.Img variant="top" src={servicio3} className="card-image" />
        <Card.Body>
          {/* Título de la Card */}
          <Card.Title className="card-title">Corte de Cabello</Card.Title>
          {/* Descripción de la Card */}
          <Card.Text className="card-text">
            Corte de cabello sencillo para todas las edades. Incluye uso de tijeras, máquina o incluso navaja dependiendo del nivel de detalle y gustos del cliente.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          {/* Botón en el pie de la Card */}
          <Button variant="dark" className="card-button" href="/Servicios">
            Ver Servicio
          </Button>
        </Card.Footer>
      </Card>

      {/* Espacio entre las cards */}
      <div style={{ marginLeft: '20px', marginRight: '20px' }}></div>

      {/* Segunda Card */}
      <Card bg="white" text="dark" className="card">
        {/* Imagen de la Card */}
        <Card.Img variant="top" src={servicio1} className="card-image" />
        <Card.Body>
          {/* Título de la Card */}
          <Card.Title className="card-title">Corte de Barba</Card.Title>
          {/* Descripción de la Card */}
          <Card.Text className="card-text">
            Tratamiento de la barba, rebajando largo y densidad de cabello mediante tijeras, máquina o navaja. Incluye uso de productos y masaje.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          {/* Botón en el pie de la Card */}
          <Button variant="dark" className="card-button" href="/Servicios">
            Ver Servicio
          </Button>
        </Card.Footer>
      </Card>

      {/* Espacio entre las cards */}
      <div style={{ marginLeft: '20px', marginRight: '20px' }}></div>

      {/* Tercera Card */}
      <Card bg="white" text="dark" className="card">
        {/* Imagen de la Card */}
        <Card.Img variant="top" src={servicio2} className="card-image" />
        <Card.Body>
          {/* Título de la Card */}
          <Card.Title className="card-title">Tinte de Cabello</Card.Title>
          {/* Descripción de la Card */}
          <Card.Text className="card-text">
            Tinte de cabello, mediante decoloración y tratamiento exhaustivo cuidando detalles y tonalidades.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          {/* Botón en el pie de la Card */}
          <Button variant="dark" className="card-button" href="/Servicios">
            Ver Servicio
          </Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default HomeServiceGrid;
