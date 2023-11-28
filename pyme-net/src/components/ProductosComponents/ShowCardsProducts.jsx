import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { ButtonGroup } from "react-bootstrap";
import jsondata from "../../images/servicios y productos.json"

function CardComponentProducts({ imageSource,precio,title, id}) {
 const[count,setCount]=useState(0);  {/*Usa el hook useState para crear un estado local en el componente llamado "count" y lo inicializa en 0. */}
  return (
    <Card style={{ marginTop:"10%"}}> {/* Componente Card con margen superior del 10%*/}
      <Card.Img variant="top" src={imageSource} /> {/* Card.Img se utiliza para mostrar la imagen del producto , con un prop llamado imageSource*/}
      <Card.Body> {/*Componente Card.Body es donde se encuentra todo el contenido debajo de la imagen */}
          <Container> {/*Componente Container es utilizado para agrupar el contenido en filas y columnas */}

              <Row className="align-left" sx={1}> {/* La primera fila contiene dos columnas utilizando el componente Col de Bootstrap, una para la categoría y la otra para una separación de guiones. */}
                <Col sx={12}> 
                  <p>Categoria</p> {/* Categoria de los productos */}
                </Col>
                 
              </Row>
              <Row>
                <Col sm={8}>  {/*Contiene dos columnas: una para el título del producto y otra para mostrar su precio. */}
                    <Card.Title className="nombre-producto">{title}</Card.Title> {/* Nombre del producto */}
                  </Col>
                  <Col className="col-button" sm={4}>   
                      <p className="precio-text">${precio}</p> {/* Precio del producto */}
                </Col>
              </Row>
        </Container>
    </Card.Body>
    </Card>
  );
}

const filteredData = jsondata.filter(function(item) {// Filtra los elementos de jsondata cuya propiedad "categoria" es igual a "productos" y los guarda en filteredData
  return item.categoria === "productos";
});


filteredData.forEach(function(item, index) {// Asigna a cada elemento de filteredData un nuevo valor para la propiedad "id" basado en su posición en el array
  item.id = index + 1;
});








function Showproductos() {
  return (
    <Row xs={2} md={1} className="g-4"> {/*Componente de fila */}

      {Array.from({ length: 5}).map((_, idx) => ( /* Crea un array con tres elementos y usa el método map para crear un elemento para cada elemento del array*/
        <Col>
          <div>
            <div className="container d-flex justify-content-center align-items-center h-100"> {/*Clase "container" y establece el estilo de la pantalla en flexbox para centrar el contenido vertical y horizontalmente. También establece la altura en 100%  */}
              <div className="row"> {/*Clase "row" para contener las tarjetas de productos. */}
                {filteredData.map(({ name, Link, Precio, id }) => ( /*Crea una tarjeta para cada objeto en el array "cards". Para cada objeto, extrae los valores de "title", "image", "precio" e "id"  */
                  <div className="col-md-4" key={id}>
                    <CardComponentProducts imageSource={Link} title={name} precio={Precio} /> {/* Llama a un componente "CardComponentProducts" y pasa las propiedades "image", "title" y "precio". */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Showproductos;
