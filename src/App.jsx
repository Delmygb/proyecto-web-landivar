import React from 'react';
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ListaActividades from './components/ListaActividades';

export default function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', fontFamily: 'Segoe UI, sans-serif' }}>
      <HeaderClase 
        tituloTema="Plan de Clase Digital Interactivo" 
        nombreDocente="Delmy Bajxac" 
        horario="Sábados 07:00 AM" 
      />
      <ObjetivosCard 
        competencia="Interactúa socialmente en línea, respetando y aceptando las normas grupales." 
        indicadorLogro="Interactúa en la web de forma ética con personas de otras culturas..." 
      />
      
      {/* Renderizamos el componente conectado a NocoDB */}
      <ListaActividades />
    </div>
  );
}