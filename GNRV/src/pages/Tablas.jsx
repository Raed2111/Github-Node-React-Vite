import { useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import '../App.css'

// MUI
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Container
} from '@mui/material'

function Tablas() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count > 10) {
      alert("El valor máximo es 10")
      setCount(10)
    }
    if (count < 0) {
      setCount(0)
    }
  }, [count])

  const personas = [
    { nombre: "Juan", apellido: "Pérez", edad: 25 },
    { nombre: "Ana", apellido: "López", edad: 16 },
    { nombre: "Carlos", apellido: "García", edad: 30 },
    { nombre: "María", apellido: "Rodríguez", edad: 17 },
    { nombre: "Luis", apellido: "Hernández", edad: 22 },
    { nombre: "Sofía", apellido: "Martínez", edad: 28 },
  ]

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <h1>Get started</h1>

        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <button
          className="counter"
          onClick={() => setCount((count) => count - 1)}
        >
          Decrementar
        </button>
      </section>

      <Container maxWidth="md" style={{ marginTop: "40px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Lista de Personas
        </Typography>

        <TableContainer
          component={Paper}
          elevation={6}
          style={{ borderRadius: "12px", overflow: "hidden" }}
        >
          <Table>
            <TableHead style={{ backgroundColor: "#1976d2" }}>
              <TableRow>
                <TableCell style={{ color: "white", fontWeight: "bold" }}>
                  Nombre
                </TableCell>
                <TableCell style={{ color: "white", fontWeight: "bold" }}>
                  Apellido
                </TableCell>
                <TableCell style={{ color: "white", fontWeight: "bold" }}>
                  Edad
                </TableCell>
                <TableCell style={{ color: "white", fontWeight: "bold" }}>
                  Estado
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {personas.map((persona) => (
                <TableRow
                  key={`${persona.nombre}-${persona.apellido}`}
                  hover
                  style={{
                    backgroundColor:
                      persona.edad <= 17 ? "#ffebee" : "white"
                  }}
                >
                  <TableCell>{persona.nombre}</TableCell>
                  <TableCell>{persona.apellido}</TableCell>
                  <TableCell>{persona.edad}</TableCell>
                  <TableCell>
                    {persona.edad <= 17
                      ? "Menor de edad"
                      : "Mayor de edad"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <section id="spacer"></section>
    </>
  )
}

export default Tablas
