import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
        <div className="">
            <div className="">
                <Link to='/'>Inicio</Link>
                <Link to='/conocenos'> Conocenos</Link>
                <Link to='/servicios'> Servicios</Link>
                <Link to='/citas'> Citas</Link>
                <Link to='/login'> Iniciar Sesion</Link>
                <Link to='/registrate'> Registrate</Link>
            </div>
        </div>
    </>
  )
}
