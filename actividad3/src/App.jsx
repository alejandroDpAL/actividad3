import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

 function Registrar() {
  const [identificacion, set_identificacion] = useState('');
  const [telefono, set_telefono] = useState('');
  const [nombre, set_nombre] = useState('');
  const [correo_electronico, set_correo_electronico] = useState('');
  const [tipo_usuario, set_tipo_usuario] = useState('');


  const registrar = async () => {
    try {
        const response = await axios.post('http://localhost:3000/usuario/registrar', {
        identificacion,
        telefono,
        nombre,
        correo_electronico,
        tipo_usuario,
      });
      console.log(response.data);
      alert('Usuario registrado exitosamente');
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        alert('Error al registrar usuario' + error);
    }
  };

  return (


    <div>
      <h1>Registrar usuario. </h1>
      <form onSubmit={(e) => { e.preventDefault(); registrar(); }}>
        <label>identificacion</label>
        <input type="text" value={identificacion} onChange={(e) => set_identificacion(e.target.value)} />

        <label>Telefono:</label>
        <input type="text" value={telefono} onChange={(e) => set_telefono(e.target.value)} />

        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => set_nombre(e.target.value)} />

        <label>Correo electronico</label>
        <input type="email" value={correo_electronico} onChange={(e) => set_correo_electronico(e.target.value)} />

        <label>Tipo de usuario</label>
        <select value={tipo_usuario} onChange={(e) => set_tipo_usuario(e.target.value)}>
          <option value="vendedor">catador</option>
          <option value="comprador">caficultor</option>
        </select>

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
export default Registrar;