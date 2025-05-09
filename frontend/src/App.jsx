import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegistratePage } from './pages/RegistratePage';
import { ConocenosPage } from './pages/ConocenosPage';
import { InicioPage } from './pages/InicioPage'

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<InicioPage />}
                />

                <Route 
                    path='/inicio'
                    element={<InicioPage />}
                />

                <Route
                    path='/login'
                    element={<LoginPage />}
                />

                <Route
                    path='/registrate'
                    element={<RegistratePage/>}
                />

                <Route
                    path='/conocenos'
                    element={<ConocenosPage/>}
                />


            </Routes>
        </Router>
    );
}

export default App