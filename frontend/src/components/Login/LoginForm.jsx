import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginForm = () => {
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        setError('')

        try {
            // LLAMADA A API
            /*
            const response = await axiosClient.post('/login', { correo, password })
            console.log('Iniciaste Sesion', response.data)
            */

            navigate('/conocenos')
        } catch (err) {
            console.error('Error al Iniciar Sesion', err)
            setError(err.response?.data?.error || 'Error al iniciar sesion')
        }
    }


  return (
    <div className='wrapper'>
        <form onSubmit={handleSubmit}>
            <h1>Iniciar Sesion</h1>

            <div className="input-box">
                <input type='email'
                    placeholder='Correo'
                    value={correo}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="input-box">
                <input type='password'
                    placeholder='Contraseña'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div className="register-link">
                <p>¿No tienes una cuenta? <Link to="/registrate">Registrate</Link></p>
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox" />Recuerdame</label>
                <a href='#'>¿Olvidaste tu contraseña?</a>
            </div>

            <button type='submit'>Iniciar Sesion</button>

        </form>
        {error && <p style={{color: 'red', textAlign: 'center' }}>{error}</p>}
    </div>
  )
}