import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../styles/Test2.css'

export const Test2 = () => {
  const [booking, setBooking] = useState({
    fecha:'',
    nombre:'',
    apellido:'',
    email:'',
    celular:'',
    profesional:'',
    servicio:'',
  });

  const navigate = useNavigate();

  const handleChange = (e) =>{
    setBooking((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleClick = async e =>{
    e.preventDefault()
    try{
      console.log(booking)
      await axios.post('http://localhost:8800/bookings', booking)
      navigate('/')
    }catch(err){
      console.log(err)
    }
  };

  return (
    <div className="formulario-wrapper">
      <div className="formulario-container">
        <h2>Reservas</h2>
        <div className="formulario-row">
          <div className="formulario-column">
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" onChange={handleChange} name="nombre" />
            </div>

            <div className="form-group">
              <label htmlFor="apellido">Apellido:</label>
              <input type="text" id="apellido" onChange={handleChange} name="apellido" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" onChange={handleChange} name="email" />
            </div>
          </div>

          <div className="formulario-column">
            <div className="form-group">
              <label htmlFor="celular">Celular (+569):</label>
              <input type="tel" id="celular" onChange={handleChange} name="celular" />
            </div>

            <div className="form-group">
              <label htmlFor="profesional">Profesional:</label>
              <input type="text" id="profesional" onChange={handleChange} name="profesional" />
            </div>

            <div className="form-group">
              <label htmlFor="servicio">Servicio:</label>
              <input type="text" id="servicio" onChange={handleChange} name="servicio" />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="fecha">Fecha:</label>
          <input type="datetime-local" id="fecha" onChange={handleChange} name="fecha" />
        </div>

        <button type="submit" onClick={handleClick}>Enviar</button>
      </div>
    </div>
  )
}

export default Test2;