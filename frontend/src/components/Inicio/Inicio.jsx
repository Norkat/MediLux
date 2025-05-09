import React, { useState, useEffect } from 'react';

export const Inicio = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lista de imágenes para el banner
  const images = [
    'https://www.shutterstock.com/image-photo/social-media-doctors-man-on-600nw-1790876972.jpg',
    'https://www.shutterstock.com/image-photo/best-doctor-dedicated-banner-600nw-2462760609.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLfR25NL7chYwUs8SkWczpHI6op4U3AhksBEly4UvC91rn8eDyqUQ9rWO21mfKkkTxm3Q&usqp=CAU',
  ];

  // Cambiar la imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [images.length]);

  return (
    <div>
      {/* Banner con imágenes y título */}
      <div className="banner" style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
        <img
          src={images[currentImageIndex]}
          alt={`Banner ${currentImageIndex + 1}`}
          style={{ width: '100%', height: '400px', objectFit: 'cover' }}
        />
        <h1
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '3rem',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '10px 20px',
            borderRadius: '10px',
          }}
        >
          Bienvenido a MediLux
        </h1>
      </div>

      {/* Sección de enlaces con iconos */}
      <div className="links-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <a
          href="/servicios"
          style={{
            textDecoration: 'none',
            margin: '0 20px',
            textAlign: 'center',
            color: '#333',
          }}
        >
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4003/4003791.png"
              alt="Servicios"
              style={{ width: '100px', height: '100px', marginBottom: '10px' }}
            />
            <p style={{ color: 'white' }}>Servicios</p>
          </div>
        </a>

        <a
          href="/contacto"
          style={{
            textDecoration: 'none',
            margin: '0 20px',
            textAlign: 'center',
            color: '#333',
          }}
        >
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4233/4233834.png"
              alt="Contacto"
              style={{ width: '100px', height: '100px', marginBottom: '10px' }}
            />
            <p style={{ color: 'white' }}>Contactanos</p>
          </div>
        </a>

        <a
          href="/nosotros"
          style={{
            textDecoration: 'none',
            margin: '0 20px',
            textAlign: 'center',
            color: '#333',
          }}
        >
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/11210/11210017.png"
              alt="Nosotros"
              style={{ width: '100px', height: '100px', marginBottom: '10px' }}
            />
            <p style={{ color: 'white' }}>Nosotros</p>
          </div>
        </a>
      </div>
    </div>
  );
};