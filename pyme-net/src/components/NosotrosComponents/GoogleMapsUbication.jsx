import React from "react";
import { Container } from "@material-ui/core";
{/* Se deja comentado porque no se pudo hacer funcionar el mapa de google maps con la libreria directa de esta
import { withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps"; 

const GoogleMapsUbication = (props) => {
  return (
    <GoogleMap 
        defaultZoom={10}
        defaultCenter={{ lat: -33.478861, lng: -70.541606 }}
    />
  );
};

export default withScriptjs(
    withGoogleMap(
        GoogleMapsUbication
    )
    );*/}

export const GoogleMapsUbication = () => {
    return (
        /* Para lograr mostrar el mapa, se obtiene un iframe con link en el mapa.*/
        <div style={{backgroundImage: 'url(https://shorturl.at/pzGTW)'}}>
        <Container maxWidth="lg">
            <div style={{position: 'relative', width: '100%'  }}>
            <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d831.9664929160679!2d-70.54226733034056!3d-33.47884007973448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d1e4576b5f2d%3A0xfb156240710ea731!2sHenriquez%20Miranda%20Maria%20Isabel!5e0!3m2!1ses!2scl!4v1683174629584!5m2!1ses!2scl" 
                    width="100%" /* Ancho del Iframe que se mostrará */
                    height="800rem" /* Alto del Iframe que se mostrará*/
                    style={{border:0, boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)', marginBottom: '1rem', marginTop:'1rem'}} /* Se le quita el borde al Iframe */
                    allowfullscreen="" /* Se le permite al Iframe que se pueda ver en pantalla completa */
                    loading="lazy" /* Se le agrega lazy loading para que se cargue solo cuando se necesite */
                    referrerpolicy="no-referrer-when-downgrade"> /* Se le agrega la politica de referer para que no se envie el header de referer cuando se haga downgrade */
            </iframe>
            </div>
        </Container>
        </div>
        )
}

export default GoogleMapsUbication;