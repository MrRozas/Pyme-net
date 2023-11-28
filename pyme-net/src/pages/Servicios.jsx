import React from 'react';
import ServiceTable from '../components/ServiciosComponents.jsx/ServiceTable';
import ServiceList from '../components/ServiciosComponents.jsx/ServiceList';

export const Servicios = () =>{ // Página de Servicios que muestra la tabla de precios de los servicios y la lista de servicios con sus respectivas imagenes.
    return(
        <div>
            <ServiceTable></ServiceTable> {/* Componente de la tabla de precios de los servicios. */}
            <ServiceList></ServiceList> {/* Componente de la lista de servicios con sus respectivas imagenes. */}
        </div>
    )
}
export default Servicios;