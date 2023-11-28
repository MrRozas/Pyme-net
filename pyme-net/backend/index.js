import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express()

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'cmbarberdb'
})

app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
    res.json('Hello this is the BackEnd')
})

app.get('/agenda', (req, res)=>{
    const q = 'SELECT * FROM agenda'
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/createtables', (req,res)=>{
    const q = 'CREATE TABLE agenda (ID int PRIMARY KEY AUTO_INCREMENT, Fecha VARCHAR(255), Nombre VARCHAR(255), Apellido VARCHAR(255), Email VARCHAR(255), Celular VARCHAR(255), Profesional VARCHAR(255), Servicio VARCHAR(255));'
    db.query(q, (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/droptables', (req,res)=>{
    const q = 'DROP TABLE agenda;'
    db.query(q, (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/bookings", (req,res)=>{
    const q = "INSERT INTO agenda (`Fecha`, `Nombre`, `Apellido`, `Email`, `Celular`, `Profesional`, `Servicio`) VALUES (?)";
    const values = [
        req.body.fecha,
        req.body.nombre,
        req.body.apellido,
        req.body.email,
        req.body.celular,
        req.body.profesional,
        req.body.servicio,
    ];

    db.query(q, [values], (err,data) => {
        if (err) return res.json(err);
        return res.json("Se ha realizado la reserva satisfactoriamente.");
    });
});

app.post('/insert', (req,res)=>{
    const q = 'INSERT INTO agenda VALUES (Default, "2023-05-02 14:30:00", "Mario", "Rozas", "dragonballrozas@gmail.com", "+56981310705", "Brayan Carrasco", "Corte de Pelo")';
    db.query(q, (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, ()=>{
    console.log('Connected to BackEnd')
})