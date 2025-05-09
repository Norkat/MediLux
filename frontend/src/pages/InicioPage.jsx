import React from 'react'
import { NavBar } from '../components/NavBar/NavBar'
import { Inicio } from '../components/Inicio/Inicio'
import { Conocenos } from '../components/Conocenos/Conocenos'

export const InicioPage = () => {
  return (
    <>
        <NavBar />
        <Inicio />
        <Conocenos />
    </>
  )
}
