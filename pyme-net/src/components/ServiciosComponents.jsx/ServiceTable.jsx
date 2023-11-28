import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from "@material-ui/core";
import { Check } from "@material-ui/icons";
import jsondata from "../../images/servicios y productos.json"

const filteredData = jsondata.filter(function(item) {
  return item.categoria === "Servicio";
});
filteredData.forEach(function(item, index) {
  item.id = index + 1;
});

const useStyles = makeStyles({ // Se crean los estilos para la tabla de precios de los servicios.
  table: { // Se crean los estilos para la tabla de precios de los servicios.
    margin: "0 auto", // Se utiliza un margen de 0 en los lados y automático en la parte superior e inferior.
    maxWidth: "80vw", // Limite de ancho de la tabla
    fontFamily: 'Oswald'
  },
  servicio: { // Se crean los estilos para el nombre del servicio de la tabla de precios de los servicios.
    fontWeight: "bold", // Se utiliza un peso de fuente en negrita.
    fontFamily: 'Oswald'
  },
  precio: { // Se crean los estilos para el precio del servicio de la tabla de precios de los servicios.
    color: "#999", // Se utiliza un color de fuente de #999.
    fontFamily: 'Oswald'
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    padding: "0 16px",
    backgroundImage: `url(${"https://shorturl.at/ckU56"})`,
    fontFamily: 'Oswald',
    marginTop: "120px", // Agrega un margen superior de 120px
  },
  title: { // Se crean los estilos para el título de la tabla de precios de los servicios.
    marginBottom: "16px", // Se utiliza un margen inferior de 16px.
    textAlign: "center", // Se utiliza una alineación centrada.
    color: "white", // Se utiliza un color de fuente de color blanco.
    textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black', 
    fontFamily: 'Oswald'
  },
});

const ServiceTable = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}> {/* Se utiliza un contenedor con los estilos asignados */}
      <Box maxWidth="800px" width="100%"> {/* Se utiliza un contenedor con un ancho máximo de 800px y un ancho de 100% */}
        <Typography variant="h4" component="h1" className={classes.title}> {/* Se utiliza un texto con un tamaño h4, centrado y con los estilos asignados */}
          <p style={{fontFamily: 'Oswald'}}>Nuestros servicios</p>
        </Typography>
        <TableContainer component={Paper}> {/* Se utiliza un contenedor de tabla con el componente Paper */}
          <Table className={classes.table} aria-label="Tabla de servicios"> {/* Se utiliza una tabla con los estilos asignados */}
            <TableHead> {/* Se utiliza una cabecera de tabla */}
              <TableRow>
                <TableCell><p style={{fontFamily: 'Oswald'}}>Servicio</p> </TableCell>
                <TableCell align="right"><p style={{fontFamily: 'Oswald'}}>Precio</p></TableCell>
                <TableCell align="right"><p style={{fontFamily: 'Oswald'}}>Incluye barba</p></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((servicio) => ( // Se utiliza un mapeo para mostrar los servicios en la tabla de precios de los servicios.
                <TableRow key={servicio.id}> {/* Se utiliza una fila de tabla con el nombre del servicio */}
                  <TableCell className={classes.servicio} component="th" scope="row"> {/* Se utiliza una celda de tabla con los estilos asignados */}
                    <p style={{fontFamily: 'Oswald'}}></p>{servicio.name} {/* Se muestra el nombre del servicio */}
                  </TableCell>
                  <TableCell align="right" className={classes.precio}> {/* Se utiliza una celda de tabla con los estilos asignados al precio */}
                    {servicio["Precio"]} {/* Se muestra el precio del servicio */}
                  </TableCell>
                  <TableCell align="left">
                    {/* Se utiliza una fila para alinear el checkbox y el texto "Sí" */}
                    <TableRow>
                      {servicio["incluye Barba"] ? (
                        // Si el servicio incluye barba
                        <>
                          {/* Celda del checkbox */}
                          <TableCell>
                            <Check color="primary" />
                          </TableCell>
                          {/* Celda del texto "Sí" */}
                          <TableCell>
                            <Typography variant="body2" style={{ fontFamily: 'Oswald' }}>
                              Sí
                            </Typography>
                          </TableCell>
                        </>
                      ) : (
                        // Si el servicio no incluye barba
                        <TableCell>No</TableCell>
                      )}
                    </TableRow>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default ServiceTable;
