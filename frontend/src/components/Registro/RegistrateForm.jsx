import React, { useState } from 'react';

export const RegistrateForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    primerApellido: '',
    segundoApellido: '',
    fechaNacimiento: '',
    sexo: '',
    telefono: '',
    correoElectronico: '',
    direccion: '',
    ciudad: '',
    estado: '',
    codigoPostal: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Perfil del paciente</h1>
      <p>Recuerda que los datos deben coincidir con tu identificación oficial, ya que para ciertos estudios se requiere presentarla.</p>
      <h2 className="text-2xl font-bold mb-4">Datos personales</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
        </div>
        <div>
          <label>Primer Apellido:</label>
          <input type="text" name="primerApellido" value={formData.primerApellido} onChange={handleChange} />
        </div>
        <div>
          <label>Segundo Apellido:</label>
          <input type="text" name="segundoApellido" value={formData.segundoApellido} onChange={handleChange} />
        </div>
        <div>
          <label>Fecha de Nacimiento:</label>
          <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} />
        </div>
        <div>
          <label>Sexo:</label>
          <select name="sexo" value={formData.sexo} onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div>
          <label>Teléfono:</label>
          <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} />
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input type="email" name="correoElectronico" value={formData.correoElectronico} onChange={handleChange} />
        </div>
        <div>
          <label>Dirección:</label>
          <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} />
        </div>
        <div>
          <label>Ciudad:</label>
          <input type="text" name="ciudad" value={formData.ciudad} onChange={handleChange} />
        </div>
        <div>
          <label>Estado:</label>
          <input type="text" name="estado" value={formData.estado} onChange={handleChange} />
        </div>
        <div>
          <label>Código Postal:</label>
          <input type="text" name="codigoPostal" value={formData.codigoPostal} onChange={handleChange} />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};