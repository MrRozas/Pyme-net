import React from 'react';
import ShowCardBarber from '../components/BarberosComponents/ShowCardbarber';

export const Barberos = () =>{
    return( /* Se incluye el componente para mostrar a los barberos */
        <div style={{ marginTop:'8rem', marginBottom:'2rem'}}>
            <ShowCardBarber></ShowCardBarber>
        </div>
    )
}
export default Barberos;