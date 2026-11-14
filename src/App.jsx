import React from 'react';
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ListaActividades from './components/ListaActividades';
import EvaluacionForm from './components/EvaluacionForm';

export default function App() {
  return (
    <main style={{ 
      maxWidth: '850px', 
      margin: '2.5rem auto', 
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      padding: '0 1rem',
      color: '#1e293b'
    }}>
      {/* 1. Encabezado institucional */}
      <HeaderClase 
        tituloTema="Ciudadanía Digital y Seguridad en Internet" 
        nombreDocente="Prof.ª Delmy Bajxac" 
        horario="Segundo Básico (Secciones A, B y C)" 
      />

      {/* 2. Metas de Aprendizaje ubicadas estrictamente ARRIBA */}
      <ObjetivosCard 
        competencia="Utilice herramientas tecnológicas de manera segura, responsable y ética, respetando la privacidad propia y ajena en entornos digitales educativos." 
        indicadorLogro="Analice los riesgos asociados al uso de redes sociales y aplique medidas formales para la protección de sus datos personales y ciberseguridad." 
      />

      {/* 3. Secuencia Didáctica interactiva */}
      <ListaActividades />

      {/* 4. Quiz Final interactivo */}
      <EvaluacionForm />
    </main>
  );
}