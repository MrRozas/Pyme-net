import './App.css';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/MultifunctionalComponents/NavBar';
import Footer from './components/MultifunctionalComponents/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Se importan las página que se van a mostrar
import Agenda from './pages/Agenda';
import Barberos from './pages/Barberos';
import Contacto from './pages/Contacto';
import Home from './pages/Home';
import InstagramView from './pages/InstagramView';
import LogIn from './pages/LogIn';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Productos from './pages/Productos/Productos';
import Productos1 from './pages/Productos/Productos1';
import Productos2 from './pages/Productos/Productos2';
import Productos3 from './pages/Productos/Productos3';

import Test1 from './pages/Test1';
import Test2 from './pages/Test2';
import Test3 from './pages/Test3';

function App() {
  return (
    <div className="App">
      <Router> {/* Se define el router, todo lo contenido dentro de esto es para que se redirija correctamente a las página solo cambiando los valores del link*/}
        <NavBar></NavBar> {/* Se llama al componente de la barra de navegación*/}
        <Routes> {/* Se definen las rutas de las páginas*/}

          <Route path='/' element={<Home />} ></Route> {/* Se define la ruta de la página principal*/}
          <Route path='/Barberos' element={<Barberos />} ></Route> {/* Se define la ruta de la página de los barberos*/}
          <Route path='/Contacto' element={<Contacto />} ></Route> {/* Se define la ruta de la página de contacto*/}
          <Route path='/Agenda' element={<Agenda />} ></Route> {/* Se define la ruta de la página de agenda*/}
          <Route path='/Instragram' element={<InstagramView />} ></Route> {/* Se define la ruta de la página de instagram*/}
          <Route path='/LogIn' element={<LogIn />} ></Route> {/* Se define la ruta de la página de inicio de sesión*/}
          <Route path='/Nosotros' element={<Nosotros />} ></Route> {/* Se define la ruta de la página de nosotros*/}
          <Route path='/Servicios' element={<Servicios />} ></Route> {/* Se define la ruta de la página de servicios*/}

          <Route path='/Productos' element={<Productos />} ></Route> {/* Se define la ruta de la página de productos*/}
          <Route path='/Productos/1' element={<Productos1 />} ></Route> {/* Se define la ruta de la página de productos 1*/}
          <Route path='/Productos/2' element={<Productos2 />} ></Route> {/* Se define la ruta de la página de productos 2 */}
          <Route path='/Productos/3' element={<Productos3 />} ></Route>   {/* Se define la ruta de la página de productos 3*/}

          <Route path='/Test1' element={<Test1 />} ></Route>
          <Route path='/Test2' element={<Test2 />} ></Route>
          <Route path='/Test3' element={<Test3 />} ></Route>

        </Routes>
      </Router>

      <Footer></Footer> {/* Se llama al componente del footer*/}
    </div>
  );
}

export default App;
