import React from 'react';
import NosotrosSection from '../components/NosotrosComponents/NosotrosSection';
import GoogleMapsUbication from '../components/NosotrosComponents/GoogleMapsUbication';
import LocalSection from '../components/NosotrosComponents/LocalSection';

export const Nosotros = () =>{ //Página de Nosotros, donde se explica que es la empresa, que ofrece y se muestra la ubicación del local junto con más información.
    return(
        <div>
            <NosotrosSection></NosotrosSection> {/*Componente de la sección de Nosotros */}
           
            <LocalSection></LocalSection> {/*Componente de la sección de Local */}

            <GoogleMapsUbication></GoogleMapsUbication> {/*Componente de la sección de GoogleMaps*/}

             {/*<GoogleMapsUbication Componente de directamente de la librería de google maps. Se deja comentado por si se quiere usar en un futuro.
                googleMapURL= {`https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyB430PKdKaPSaFjBQUJmeSgmolbns3N9_4`}
                containerElement= {<div style={{ height: "400px" }} />}
                mapElement= {<div style={{ height: "100%" }} />}
                loadingElement= {<p>Cargando...</p>}
            />*/}
        </div>
    )
}
export default Nosotros;