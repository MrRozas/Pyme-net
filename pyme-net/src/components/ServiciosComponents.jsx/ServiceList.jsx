import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
} from "@material-ui/core";
import jsondata from "../../images/servicios y productos.json"


const filteredData = jsondata.filter(function(item) { // Filtra los elementos de jsondata cuya propiedad "categoria" es igual a "Servicio" y los guarda en filteredData
  return item.categoria === "Servicio";
});

filteredData.forEach(function(item, index) {// Asigna a cada elemento de filteredData un nuevo valor para la propiedad "id" basado en su posición en el array
  item.id = index + 1;
});


const useStyles = makeStyles((theme) => ({ // Se crean los estilos para la sección de servicios.
  
  root: { // Se crean los estilos para el contenedor de la sección de servicios.
    flexGrow: 1, // Se utiliza un crecimiento flexible de 1.
    paddingTop: "64px", // Se utiliza un relleno superior de 64px.
    paddingBottom: "64px", // Se utiliza un relleno inferior de 64px.
    backgroundColor: "#f5f5f5", // Se utiliza un color de fondo de #f5f5f5.
    backgroundImage: `url(${"https://shorturl.at/ikmIU"})`,// Se utiliza una imagen de fondo.
  },
  title: { // Se crean los estilos para el título de la sección de servicios.
    paddingBottom: "32px", /* Se utiliza un relleno inferior de 32px */
    fontWeight: "bold", /* Se utiliza un peso de fuente en negrita */
    fontFamily: 'Oswald',
  },
  card: { // Se crean los estilos para la tarjeta de servicios.
    maxWidth: "100%", // Se utiliza un ancho máximo de 100%.
    position: "relative", // Se utiliza una posición relativa.
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', // Se utiliza una sombra de caja de 0.
  },
  media: { // Se crean los estilos para la imagen de la tarjeta de servicios.
    height: 0, // Se utiliza una altura de 0.
    paddingTop: "56.25%", // Se utiliza un relleno superior de 56.25%.
    backgroundSize: "cover", // Se utiliza un tamaño de fondo de cubierta.
    backgroundPosition: "center", // Se utiliza una posición de fondo centrada.
    "&:hover": { // Se crean los estilos para cuando el cursor se posicione sobre la imagen de la tarjeta de servicios.
      opacity: "0.7", // Se utiliza una opacidad de 0.7.
    },
    fontFamily: 'Oswald',
    
  },
  content: { // Se crean los estilos para el contenido de la tarjeta de servicios.
    backgroundColor: "#fff", // Se utiliza un color de fondo de #fff.
    position: "absolute", // Se utiliza una posición absoluta.
    bottom: "0", // Se utiliza un borde inferior de 0.
    left: "0", // Se utiliza un borde izquierdo de 0.
    width: "100%", // Se utiliza un ancho de 100%.
    padding: "16px", // Se utiliza un relleno de 16px.
    fontFamily: 'Oswald',
  },
  servicio: { // Se crean los estilos para el nombre del servicio de la tarjeta de servicios.
    fontWeight: "bold", // Se utiliza un peso de fuente en negrita.
    marginBottom: "8px", // Se utiliza un margen inferior de 8px.
    fontFamily: 'Oswald',
  },
  descripcion: { // Se crean los estilos para la descripción del servicio de la tarjeta de servicios.
    fontSize: "15px", // Se utiliza un tamaño de fuente de 14px.
    fontFamily: 'Oswald',
  },
}));

  const ServiceList = () => {
    const classes = useStyles(); // Se asignan los estilos a la constante classes.
    return ( // Se retorna el contenido de la sección de servicios.
      <Box className={classes.root}> {/* Se utiliza un contenedor con los estilos asignados */}
        <Typography variant="h3" align="center" className={classes.title}> {/* Se utiliza un texto con un tamaño h4, centrado y con los estilos asignados */}
          <span style={{color: 'white', textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black'}}>
           Servicios 
          </span>
        </Typography>
        <Grid container spacing={4}> {/* Se utiliza un grid con un espaciado de 4 */}
          {filteredData.map((servicio) => ( // Se utiliza un map para recorrer los servicios y mostrarlos en la sección de servicios.
            <Grid item xs={12} sm={6} md={4} key={servicio.id}> {/* Se utiliza un grid item con un ancho de 12 en dispositivos extra pequeños, 6 en dispositivos pequeños y medianos y 4 en dispositivos grandes y se asigna una key */}
                <Container maxWidth="md"> {/* Se utiliza un contenedor con un ancho máximo de 100% */}
              <Card className={classes.card}> {/* Se utiliza una tarjeta con los estilos asignados */}
                <CardMedia
                  className={classes.media} // Se asignan los estilos de la imagen de la tarjeta de servicios
                  image={servicio.Link} // Se asigna la imagen de la tarjeta de servicios
                  title={servicio.name} // Se asigna el nombre de la tarjeta de servicios
                />
                <CardContent className={classes.content}> {/* Se utiliza un contenido de tarjeta con los estilos asignados */}
                  <Typography // Se utiliza un texto con los estilos asignados
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.servicio}
                  >
                    {servicio.name} {/* Se utiliza el nombre del servicio */} 
                  </Typography>
                  <Typography // Se utiliza un texto con los estilos asignados
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.descripcion}
                  >
                    {servicio["Descripcion "]} {/* Se utiliza la descripción del servicio */}
                  </Typography>
                </CardContent>
              </Card>
              </Container>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

export default ServiceList;