import React from 'react';
import { Carousel, Card, CardGroup, Stack } from 'react-bootstrap';

export const HomeProductGrid = () => { // Componente que incorpora una red de productos dentro de un carousel para la página Home.
  return (
    <Carousel variant="dark" indicators={false} className='product-carousel'> {/* Se define el carousel, ocultando los indicadores de página. */}
      <Carousel.Item> {/* Se define primer item del carousel, el cual contendrá a 6 Cards para mostrar por cada uno. */}
        <Stack
            direction="horizontal" // Distribución horizontal.
            className="h-100 justify-content-center align-items-center" // Se le asigna un tipo de clase predefinido para aplicar estilos.
            gap={6} // Se asigna espacio.
        >
            <CardGroup style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '30px', marginBottom: '30px'}}> {/* Se define el primer CardGroup, junto con algunos estilos. */}
                <Card bg="dark"> {/* Se define primera Card, con imagen asociada. */}
                    <img
                        className="d-block w-100"
                        src="https://shorturl.at/HRZ23"
                        alt="First slide"
                    />
                </Card>
                <Card style={{ marginRight:'30px', marginLeft:'30px'}} bg="dark"> {/* Se define segunda Card, con imagen asociada y estilos para mantener espacio entre Card anterior y siguiente. */}
                    <img
                        className="d-block w-100"
                        src="https://shorturl.at/jkEV4"
                        alt="First slide"
                    />
                </Card>
                <Card bg="dark"> {/* Se define tercera Card, con imagen asociada y estilos. */}
                    <img
                        className="d-block w-100"
                        src="https://shorturl.at/vELS8"
                        alt="First slide"
                    />
                </Card>
                <Card style={{ marginLeft:'30px'}} bg="dark"> {/* Se define cuarta Card, con imagen asociada y estilos. */}
                    <img
                        className="d-block w-100"
                        src="https://shorturl.at/EOY79"
                        alt="First slide"
                    />
                </Card>
                <Card style={{ marginRight:'30px', marginLeft:'30px'}} bg="dark"> {/* Se define quinta Card, con imagen asociada y estilos. */}
                    <img
                        className="d-block w-100"
                        src="https://shorturl.at/knJV9"
                        alt="First slide"
                    />
                </Card>
                <Card bg="dark"> {/* Se define sexta Card, con imagen asociada y estilos. */}
                    <img
                        className="d-block w-100"
                        src="https://shorturl.at/nsxSY"
                        alt="First slide"
                    />
                </Card>
            </CardGroup>
        </Stack>
      </Carousel.Item> 

      <Carousel.Item> {/* Se define segundo item del carousel, con las mismas especificaciones que el anterior. */}
        <Stack
            direction="horizontal"
            className="h-100 justify-content-center align-items-center"
            gap={6}
        >
            <CardGroup style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '30px', marginBottom: '30px'}} >
                <Card bg="dark">
                    <img
                        className="d-block w-100"
                        src="https://shorturl.at/HRZ23"
                        alt="First slide"
                    />
                </Card>
                <Card style={{ marginRight:'30px', marginLeft:'30px'}} bg="dark">
                    <img
                        className="d-block w-100"
                        src="https://shorturl.at/jkEV4"
                        alt="First slide"
                    />
                </Card>
                <Card bg="dark">
                    <img
                        className="d-block w-100"
                        src="https://shorturl.at/vELS8"
                        alt="First slide"
                    />
                </Card>
                <Card style={{ marginLeft:'30px'}} bg="dark">
                    <img
                        className="d-block w-100"
                        src="https://shorturl.at/EOY79"
                        alt="First slide"
                    />
                </Card>
                <Card style={{ marginRight:'30px', marginLeft:'30px'}} bg="dark">
                    <img
                        className="d-block w-100"
                        src="https://shorturl.at/knJV9"
                        alt="First slide"
                    />
                </Card>
                <Card bg="dark">
                    <img
                        className="d-block w-100"
                        src="https://shorturl.at/nsxSY"
                        alt="First slide"
                    />
                </Card>
            </CardGroup>
        </Stack>
      </Carousel.Item>

      <Carousel.Item> {/* Se define segundo item del carousel, con las mismas especificaciones que el anterior. */}
        <Stack
            direction="horizontal"
            className="h-100 justify-content-center align-items-center"
            gap={6}
        >
            <CardGroup style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '30px', marginBottom: '30px'}} >
                <Card bg="dark">
                    <img
                        className="d-block w-100"
                        src="https://shorturl.at/HRZ23"
                        alt="First slide"
                    />
                </Card>
                <Card style={{ marginRight:'30px', marginLeft:'30px'}} bg="dark">
                    <img
                        className="d-block w-100"
                        src="https://shorturl.at/jkEV4"
                        alt="First slide"
                    />
                </Card>
                <Card bg="dark">
                    <img
                        className="d-block w-100"
                        src="https://shorturl.at/vELS8"
                        alt="First slide"
                    />
                </Card>
                <Card style={{ marginLeft:'30px'}} bg="dark">
                    <img
                        className="d-block w-100"
                        src="https://shorturl.at/EOY79"
                        alt="First slide"
                    />
                </Card>
                <Card style={{ marginRight:'30px', marginLeft:'30px'}} bg="dark">
                    <img
                        className="d-block w-100"
                        src="https://shorturl.at/knJV9"
                        alt="First slide"
                    />
                </Card>
                <Card bg="dark">
                    <img
                        className="d-block w-100"
                        src="https://shorturl.at/nsxSY"
                        alt="First slide"
                    />
                </Card>
            </CardGroup>
        </Stack>
      </Carousel.Item>
    </Carousel>
  )
}

export default HomeProductGrid;