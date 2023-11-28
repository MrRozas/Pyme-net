import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../../styles/MyStyle.css'
import Box from '@material-ui/core/Box';

const HoverCard = ({title, imageSrc, text }) => {
    const [showText, setShowText] = useState(false);  {/* Usa  variable de estado showText es falso y la funcion setShowText */ }

    const handleMouseEnter = () => { 
      setShowText(true); 
    };                                {/* Evento de entrada de mouse , el showText pasa a verdadero si el mouse entra*/}
  
    const handleMouseLeave = () => {
      setShowText(false);
    };                                  {/* Evento de salida de mouse , el showText pasa a falso si el mouse sale*/}
  
    return (
      <Card className="my-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> {/* Las props onMouseEnter y onMouseLeave se establecen en handleMouseEnter y handleMouseLeave*/}

        <Card.Img variant="top" src={imageSrc} className="card-barber-img" />  {/*Imagen se renderiza dentro de la Card usando el componente Card.Img. La prop src se establece en el valor de la prop image que se pasó.*/}
            <div className={`card-barber-overlay ${showText ? "show" : ""}`}> {/*La clase card-barber-overlay se renderiza en la Card si showText es verdadero.*/}
                <Card.Title className="card-barber-title">{title}</Card.Title> {/* Utilizan las props title ,para el nombre del barbero */}
                <Card.Text className="card-barber-text">{text}</Card.Text> {/*Utilizan las props text para agrergar una descricion del barbero*/}
            </div>
      </Card>
    );
  };
{/* Elementos que se usaran de ejemplo para los card de los trabajadores */}
const name="Nombre Barbero";
{/* const imgSrc="https://img.freepik.com/foto-gratis/retrato-barbero-barbudo-masculino-mediados-adulto-brazos-cruzados_23-2147839798.jpg"; */}
const presentacion="Presentación Barbero ";

{/**Lista vacio ya que se usan fotos y descripcion de una api-base de datos */}
const workers = [
    {
      id: 1,
      image: "https://shorturl.at/oCDFY",
    },
    {
      id: 2,
      image: "https://shorturl.at/jRW69",
    },
    {
      id: 3,
      image: "https://shorturl.at/hqAU4",
    },
    
  ];

function ShowCardBarber() {
    const total=workers.length;
    return (
      <Box
      style={{
        backgroundImage: "url('https://shorturl.at/djtx5')",
        backgroundSize: 'cover',
        marginBottom:'-2rem',
      }}
    >
        <Row xs={2} md={1} className="g-4"> 
          {Array.from({ length: 1}).map((_, idx) => (       /* Dentro del componente Row, se utiliza el método Array.from para crear un arreglo de 6 elementos vacíos. */   
            <Col> 
              <div>
                <div className="container d-flex justify-content-center align-items-center "> {/* Se usa para ordenar las cards grid de forma responsiva */}
                  <div className="row">
                    {workers.map(({  id, image }) => (  /* Utiliza el método map para iterar sobre los elementos del arreglo y generar un componente de Col.*/
                      <div className="col-md-4" key={id} style={{marginBottom:'3rem'}}> 
                        <HoverCard title={name} imageSrc={image} text={presentacion} />  {/*Cada componente HoverCard recibe un objeto con las propiedades title, image y text, que se utilizan para definir el contenido de la tarjeta.*/}
                      </div>
                    ))}     {/*Se utiliza el método map para generar un componente de HoverCard por cada trabajador en la lista de workers*/}
                  </div>
                </div>
              </div>
            </Col>
          ))} 
              
        </Row>
      </Box>
    );
  }
export default ShowCardBarber;