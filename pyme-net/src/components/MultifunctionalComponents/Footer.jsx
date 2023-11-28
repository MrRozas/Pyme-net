import React from 'react';
import { CDBBox, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';
import {Link} from 'react-router-dom';

export const Footer = () => { // Componente del Footer que será incorporado en todas las páginas.
  return (
    <CDBBox // Contenedor principal, el cual maneja todos los estilos para la distribución correcta de los objetos.
    display="flex"
    justifyContent="between"
    alignItems="center"
    className="mx-auto py-3 flex-wrap"
    style={{ width: '100%', marginBottom: '0px', boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.3)', backgroundColor:"#212529"}}
    > 
        <CDBContainer className="d-flex justify-content-between"> {/* Se define primer contenedor. */}
            <CDBBox display="flex" alignItems="center" objectFit="fill"> {/* Se define Box que contendrá el logo de la empresa y su nombre. */}
                <a href="/" className="d-flex align-items-center p-0 text-dark">
                <img
                    alt="logo"
                    src="https://shorturl.at/zDQV5"
                    style={{ width: "60px", height: "undefined", aspectRatio: "1"}}
                />
                <span className="ms-4 h5 mb-0 font-weight-bold" style={{ color:"white"}}>Community Barber 7</span>
                </a>
            </CDBBox>
            <CDBBox> {/* Se define Box que contendrá oración de derechos reservados. */}
                <small className="ms-2" style={{ color:"white"}} >&copy; Community Barber 7, 2023. Todos los derechos reservados.</small>
            </CDBBox>
            <CDBBox display="flex"> {/* Se define Box que contendrá botones para las redes sociales. */}
                <CDBBtn flat color="light" className="my-2 p-2">
                    <a href="https://api.whatsapp.com/send/?phone=56994410943&text=%C2%A1Hola%21+vi+tu+p%C3%A1gina+de+AgendaPro+y+me+gustar%C3%ADa+resolver+algunas+dudas&type=phone_number&app_absent=0" target="_blank" style={{color: 'black'}}>
                        <CDBIcon fab icon="whatsapp" />
                    </a>
                </CDBBtn>
                <CDBBtn flat color="light" className="my-2 mx-2 p-2">
                    <a href="https://communitybs7.site.agendapro.com/cl" target="_blank" style={{color: 'black'}}>
                        <CDBIcon fas icon="home" />
                    </a>
                </CDBBtn>
                <CDBBtn flat color="light" className="my-2 p-2">
                    <a href="https://www.instagram.com/communitybarber7/" target="_blank" style={{color: 'black'}}>
                        <CDBIcon fab icon="instagram" />
                    </a>
                </CDBBtn>
            </CDBBox>
        </CDBContainer>
    </CDBBox>
  );
};

export default Footer;