import React from "react";
import { Container, Grid, Typography, Card } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ // Se crean los estilos utilizados en la sección Nosotros
    container: { // Se crean los estilos del contenedor
      padding: "0",
      maxWidth: "100%",
      marginTop: "7rem",
    },
    typography: { // Se crean los estilos del texto
      [theme.breakpoints.down('sm')]: { // Se crean los estilos del texto en dispositivos extra pequeños y pequeños
        fontSize: "1.5rem",
        fontFamily: 'Oswald'
      },
      [theme.breakpoints.up('sm')]: { // Se crean los estilos del texto en dispositivos medianos
        fontSize: "2rem",
      },
      [theme.breakpoints.up('md')]: { // Se crean los estilos del texto en dispositivos grandes
        fontSize: "2rem",
      },
      [theme.breakpoints.up('lg')]: { // Se crean los estilos del texto en dispositivos extra grandes
        fontSize: "2rem",
      },
    },
  }));

const NosotrosSection = () => { // Se crea una constante que contendrá el contenido de la sección Nosotros, donde se muestran titulos, información e imagenes. 
    const classes = useStyles(); // Se asignan los estilos, se utiliza la constante classes para asignar los estilos
  return (
    <div>
        <div className="section bg-light" > {/* Se utiliza una sección con un color de fondo claro */}
        <Container maxWidth="md"  className={classes.container}> {/* Se utiliza un contenedor con un ancho máximo de 100% y un margen superior de 6rem */}
            <Grid container spacing={2} justify="center"> {/* Se utiliza un grid con un espaciado de 2 y se justifica al centro */}
            <Grid item xs={12}> {/* Se utiliza un grid item con un ancho de 12 */}
                <Typography variant="h4" align="center" gutterBottom className={classes.typography}>
                <p style={{fontFamily: 'Oswald'}}> 
                        Vive la excelencia y tradición de la barbería clásica con una atención enfocada a satisfacer 100% a nuestros clientes.
                </p>
                    
                </Typography> {/* Se utiliza un texto con un tamaño h4, centrado y con un margen inferior */}
            </Grid>
            </Grid>
        </Container> {/* Se cierra el contenedor */}
        </div>

        <Grid container justify="center" style={{ backgroundImage: `url(${"https://shorturl.at/fqDRS"})`}}> {/* Se utiliza un grid con un espaciado de 2 y se justifica al centro */}
        <Grid item xs={12} md={10} lg={8}> {/* Se utiliza un grid item con un ancho de 12 en dispositivos extra pequeños, 10 en dispositivos pequeños y medianos y 8 en dispositivos grandes */}
            <Container style={{ padding: "0", maxWidth: "100%", marginTop: "1rem", marginBottom: '1rem'}}> {/* Se utiliza un contenedor con un ancho máximo de 100% y un margen superior de 1rem */}
            <Grid container spacing={3}> {/* Se utiliza un grid con un espaciado de 3 */}
                <Grid item xs={12} md={6}> {/* Se utiliza un grid item con un ancho de 12 en dispositivos extra pequeños y 6 en dispositivos medianos */}
                <img // Se utiliza una imagen
                    src="https://shorturl.at/esBI3" // Se utiliza la imagen de la página
                    alt="La Barbería - Sobre Nosotros" // Se utiliza un texto alternativo para la imagen
                    style={{ maxWidth: "100%", height: "auto", boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.4)" }} // Se asignan los estilos de la imagen
                    
                />
                </Grid>
                <Grid item xs={12} md={6}> {/* Se utiliza un grid item con un ancho de 12 en dispositivos extra pequeños y 6 en dispositivos medianos */}
                <Card style={{ height: "100%", padding: "2rem", textAlign: "center", boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.4)", fontFamily: 'Oswald' }}>
                    <Typography variant="h5" style={{ marginBottom: "1rem" }}> {/* Se utiliza un texto con un tamaño h5 y un margen inferior */}
                    <p style={{fontFamily: 'Oswald'}}> 
                    Sobre nosotros
                        </p>
                        
                    </Typography>
                    <Typography variant="body1" align="justify" style={{ marginBottom: "1rem" }}>{/* Se utiliza un texto con un margen inferior */}
                        <p style={{fontFamily: 'Oswald'}}> 
                        Somos una barbería moderna y vanguardista ubicada en el corazón de Santiago. Nuestro objetivo es brindarte la mejor experiencia de barbería posible, donde puedas disfrutar de un buen corte, una buena conversación y una cerveza bien fría.
                        </p>
                    </Typography>
                    <Typography variant="body1" align="justify" style={{ marginBottom: "1rem" }}>{/* Se utiliza un texto con un margen inferior */}
                        <p style={{fontFamily: 'Oswald'}}> 
                            Contamos con un equipo de profesionales altamente capacitados y apasionados por lo que hacen. Nos enorgullece ofrecer un servicio excepcional y una atención personalizada a cada uno de nuestros clientes.
                        </p>
                    </Typography>
                    <Typography variant="body1" align="justify" style={{ marginBottom: "1rem" }}>{/* Se utiliza un texto con un margen inferior */}
                        <p style={{fontFamily: 'Oswald'}}>
                        ¡Ven a visitarnos y vive la experiencia La Barbería!
                        </p>
                    </Typography>
                    </Card>
                </Grid>
            </Grid>
            </Container>
        </Grid>
        </Grid>
    </div>
  );
};

export default NosotrosSection;