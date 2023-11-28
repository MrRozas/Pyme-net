import React from 'react';
import '../../styles/ContactForm.css';
import { CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

export const ContactForm = () =>{ // Componente del formulario de contacto que se muestra en la página de Contáctano.s
    return( 
        <div className="page-container" style={{backgroundImage: 'url(https://shorturl.at/kwBJ6)'}}> {/* Se define un contenedor para todo el contenido de la página. */}
            <div className="contact-page" style={{backgroundImage: 'url(https://shorturl.at/afowP)'}}> {/* Se define un segundo contenedor para encapsular la sección del formulario y de redes sociales. */}
                <div className="contact-form"> {/* Se define un contenedor para el formulario. */}
                <h2 >Contáctanos</h2>
                <form>
                    <label htmlFor="name">Nombre:</label> {/* Input para recibir un nombre. */}
                    <input type="text" id="name" name="name" required />
        
                    <label htmlFor="email">Correo:</label> {/* Input para recibir un correo. */}
                    <input type="email" id="email" name="email" required />
        
                    <label htmlFor="message">Déjanos un mensaje:</label> {/* TextBox para recibir un mensaje. */}
                    <textarea id="message" name="message" required></textarea>
        
                    <button type="submit"style={{ backgroundColor:"#212529"}}>Enviar</button>
                </form>
                </div>
        
                <div className="other-contacts"> {/* Se define un contenedor para redes sociales. */}
                    <h3 className="other-contacts-title" style={{ fontSize:"2vw"}} >Nuestras redes sociales</h3>
                    <ul className="other-contacts-list"> {/* Se define una lista para incorporar botones. */}
                        <CDBBox display="flex"> {/* Se define Box que contendrá botones para las redes sociales. */}
                            <CDBBtn flat color="light" className="my-2 p-4">
                                <CDBIcon fab icon="whatsapp" style={{ fontSize:"1vw"}}/>
                            </CDBBtn>
                            <CDBBtn flat color="light" className="my-2 mx-2 p-4">
                                <CDBIcon fab icon="facebook" style={{ fontSize:"1vw"}}/>
                            </CDBBtn>
                            <CDBBtn flat color="light" className="my-2 p-4">
                                <CDBIcon fab icon="instagram" style={{ fontSize:"1vw"}}/>
                            </CDBBtn>
                        </CDBBox>
                    </ul>
                    <body style={{ fontSize:"1vw"}}> {/* Se define un body para incorporar una descripción. */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </body>
                </div>
            </div>
        </div>
    )
}
export default ContactForm;