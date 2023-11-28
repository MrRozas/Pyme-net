import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { BsInstagram, BsFillPersonFill } from 'react-icons/bs';

import {Link} from 'react-router-dom';

const navLinkStyle = {
  fontFamily: 'Oswald',
  fontSize: '1.2em',
  fontWeight: 'bold',
  /* otros estilos personalizados a agregar */
};

export const NavBar = () => { // Componente de la NavBar que se muestra en todas las páginas.
  return (
    <Navbar className="NavigationBar" collapseOnSelect expand="lg" fixed='top' bg="dark" variant="dark" style= {{ zIndex:2 , boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)"}}> {/* Se usa el atributo fixed para que la barra de navegación se mantenga en la parte superior de la página. */}
        <Container> {/* Se usa el atributo Container para que la barra de navegación se mantenga centrada en la página. */}

            {/* Se usa react router para redirigir a las diferentes páginas. */ }

            <Navbar.Brand as={Link} to='/'> {/* Se usa el atributo as={Link} to='/Ruta' para que al hacer click en el elemento de la barra de navegación, se redirija a la ruta especificada. */}
                <img // Se utiliza una imagen del logo de la pyme
                  alt=""    // Se utiliza un texto alternativo vacío
                  src= "https://shorturl.at/zDQV5" // Se utiliza la imagen de la página
                  width="75" // Se utiliza un ancho de 75
                  height="75" // Se utiliza un alto de 75
                  className="d-inline-block rounded-circle" // Se utiliza la clase d-inline-block para que la imagen se muestre como un elemento en línea y la clase rounded-circle para que la imagen se muestre con bordes redondeados.
                />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" /> {/* Muestra el menú de navegación de una barra de navegación responsiva. */} 
            <Navbar.Collapse id="basic-navbar-nav"> {/* Se utiliza el atributo id="basic-navbar-nav" para que el menú de navegación se muestre en la parte derecha de la barra de navegación. */}
                <Nav className="mx-auto"> {/* Se utiliza el atributo mx-auto para que los elementos de la barra de navegación se muestren centrados. */}

                <Nav.Link as={Link} to='/' style={navLinkStyle}>Home</Nav.Link> {/* Página de Home. Se usa el atributo as={Link} to='/Ruta' para que al hacer click en el elemento de la barra de navegación, se redirija a la ruta especificada. */}

                <Nav.Link as={Link} to='/Nosotros' style={navLinkStyle}>Nosotros</Nav.Link> {/* Página de nosotros */}

                <NavDropdown title="Productos" id="basic-nav-dropdown" style={navLinkStyle}> {/* Página de productos. Se utiliza el atributo id="basic-nav-dropdown" para que el menú de navegación se muestre en la parte derecha de la barra de navegación. */}
                    <NavDropdown.Item as={Link} to='/Productos/1' style={navLinkStyle}>Productos 1</NavDropdown.Item> {/*Diferentes productos dividos por caracteristicas */}
                    <NavDropdown.Item as={Link} to='/Productos/2' style={navLinkStyle}>Productos 2</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/Productos/3' style={navLinkStyle}>Productos 3</NavDropdown.Item>
                    <NavDropdown.Divider/> {/* Se utiliza el atributo Divider para separar los elementos del menú de navegación. */}
                    <NavDropdown.Item as={Link} to='/Productos' style={navLinkStyle}>Todos los Productos</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} to='/Servicios' style={navLinkStyle}>Servicios</Nav.Link> {/* Página de servicios. Se usa el atributo as={Link} to='/Ruta' para que al hacer click en el elemento de la barra de navegación, se redirija a la ruta especificada. */}

                <Nav.Link as={Link} to='/Contacto' style={navLinkStyle}>Contacto</Nav.Link> {/* Página de contacto. Se usa el atributo as={Link} to='/Ruta' para que al hacer click en el elemento de la barra de navegación, se redirija a la ruta especificada. */}

                <Nav.Link as={Link} to='/Agenda' style={navLinkStyle}>Agenda</Nav.Link> {/* Página de agenda. Se usa el atributo as={Link} to='/Ruta' para que al hacer click en el elemento de la barra de navegación, se redirija a la ruta especificada. */}

                <Nav.Link as={Link} to='/Barberos' style={navLinkStyle}>Barberos</Nav.Link> {/* Página de barberos. Se usa el atributo as={Link} to='/Ruta' para que al hacer click en el elemento de la barra de navegación, se redirija a la ruta especificada. */}

                </Nav>

                <Nav> {/* Se utiliza el atributo Nav para que los elementos de la barra de navegación se muestren en la parte derecha de la barra de navegación. */}
                    <Nav.Link as={Link} to='https://communitybs7.site.agendapro.com/cl' target="_blank"><BsFillPersonFill size={'1.5em'}></BsFillPersonFill></Nav.Link>  {/* Página de inicio de sesión. Se usa el atributo as={Link} to='/Ruta' para que al hacer click en el elemento de la barra de navegación, se redirija a la ruta especificada. */}
                </Nav>

                <Nav>
                    <Nav.Link as={Link} to='https://www.instagram.com/communitybarber7/' target="_blank"> <BsInstagram size={'1.5em'}></BsInstagram> </Nav.Link> {/* Página de Instagram. Se usa el atributo as={Link} to='/Ruta' para que al hacer click en el elemento de la barra de navegación, se redirija a la ruta especificada. */}
                </Nav>

            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavBar;