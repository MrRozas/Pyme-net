import React from 'react'
import HomeServiceGrid from '../components/HomeComponents/HomeServiceGrid';
import HomeProductGrid from '../components/HomeComponents/HomeProductGrid';
import CarouselComponent from '../components/MultifunctionalComponents/CarouselComponent';

export const Home = () => { // Se incluyen componentes para mostrar el carousel principal y las redes de productos y servicios.
  return (
    <div>
      <CarouselComponent></CarouselComponent>
      <div style={{backgroundImage: "url('https://shorturl.at/mqBR5')", backgroundSize: 'cover'}}>
          <HomeServiceGrid></HomeServiceGrid>
      </div>
      <div style={{backgroundImage: "url('https://shorturl.at/npJTZ')", backgroundSize: 'cover', marginTop:'-1.5rem'}}>
        <HomeProductGrid></HomeProductGrid>
      </div>
      <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
      <div class="elfsight-app-bb2d07d5-cefe-443a-83b2-ec22fa564787"></div>
    </div>
  )
}

export default Home;