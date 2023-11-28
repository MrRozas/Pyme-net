import React from 'react';
import Showproductos from '../../components/ProductosComponents/ShowCardsProducts';

export const Productos = () =>{
    return(
        <div style={{backgroundImage: "url('https://shorturl.at/myNQ1')", marginTop:'5rem'}}>
            <Showproductos></Showproductos> {/* Se la funcion de show productos */}
        </div>
    )
}
export default Productos;