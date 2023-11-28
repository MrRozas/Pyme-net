import React from 'react';

import { makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles({ /* Se utilizan estilos para componentes que serán utilizados */
  container: { /*Estilos del contendor que se utiliza*/
    height: '100%', /*Altura del contenedor. Viewport height (utilizado para el dispositivo que se está usando)*/
    display: 'flex', /*Se utiliza flexbox para el contenedor*/
    flexDirection: 'column', /*Los elementos se distribuirán en una sola columna*/
    justifyContent: 'center', /*Los elementos se distribuirán en el centro*/
    alignItems: 'center', /*Los elementos se centrarán horizontalmente en el contenedor*/
    backgroundImage: `url(${"https://shorturl.at/vxDO5"})`, /*Se utiliza una imagen de fondo*/
    backgroundRepeat: 'no-repeat', /*La imagen de fondo no se repetirá*/
    backgroundSize: 'cover', /*La imagen de fondo cubrirá todo el contenedor*/
    marginTop: '-1rem', /*Margen superior del contenedor*/
    fontfamily: 'Oswald',
  },
  image: { /*Estilos de la imagen que se utiliza*/
    maxWidth: '100%', /*Ancho máximo de la imagen*/
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)", /*Sombra de la imagen*/
  },
  text: { /*Estilos del texto que se utiliza*/
    marginTop: '1rem', /*Margen superior del texto*/
    textAlign: 'center', /*El texto se centrará horizontalmente*/
    fontStyle: 'italic', /* Agregamos la cursiva */
    textDecoration: 'underline' /* Agregamos el subrayado */,
    color: 'white', /*Color del texto*/
    fontfamily: 'Oswald',
    
  },
});

const LocalSection = () => {
  const classes = useStyles(); /*Se asignan los estilos a la constante classes*/

  return (
    <div className={classes.container}> {/*Se utiliza el contenedor con los estilos asignados*/}
      <Container maxWidth='lg'>
          <img /*Se utiliza una imagen*/
            src='https://shorturl.at/jsA01' /*Se utiliza la imagen de la página*/
            alt="Barber shop" /*Se utiliza un texto alternativo para la imagen*/
            className={classes.image} /*Se asignan los estilos de la imagen*/
          />
      </Container>
    </div>
  );
};

export default LocalSection;
