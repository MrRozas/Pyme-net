import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Test1 = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
       const fetchAllBookings = async () => {
        try {
            const res = await axios.get("http://localhost:8800/agenda");
            console.log(res);
            setBookings(res.data);
        } catch(err) {
            console.log(err);
        }
       };
       fetchAllBookings();
    }, []);


  return (
    <div>
        <h1>Agenda</h1>
        <div className="books">
            {bookings.map((booking) => (
                <div className="booking" key={booking.ID}>
                    <h2>{booking.Nombre}</h2>
                    <h2>{booking.Apellido}</h2>
                    <h2>{booking.Fecha}</h2>
                    <h2>{booking.Email}</h2>
                    <h2>{booking.Celular}</h2>
                    <h2>{booking.Profesional}</h2>
                    <h2>{booking.Servicio}</h2>
                </div>
            ))}
        </div>
    </div>
  )
};

export default Test1;