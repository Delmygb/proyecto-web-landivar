import { useState } from 'react';
import { motion } from 'framer-motion';

export default function EvaluacionForm() {
  const [respuestas, setRespuestas] = useState({
    p1: '',
    p2: '',
    p3: ''
  });

  const [resultado, setResultado] = useState(null);

  const manejarCambio = (pregunta, valor) => {
    setRespuestas({
      ...respuestas,
      [pregunta]: valor
    });
  };

  const calificarQuiz = (e) => {
    e.preventDefault();
    
    let puntajeObtenido = 0;

    // Respuestas correctas oficiales
    if (respuestas.p1 === 'b') puntajeObtenido += 33.3;
    if (respuestas.p2 === 'a') puntajeObtenido += 33.3;
    if (respuestas.p3 === 'c') puntajeObtenido += 33.4;

    setResultado(Math.round(puntajeObtenido));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        marginTop: '2rem',
        padding: '1.5rem',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
      }}
    >
      <h3 style={{ color: '#31105c', marginTop: 0, marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: '700' }}>
        Evaluación Formativa Final (Quiz Interactivo)
      </h3>
      <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        Responda correctamente cada una de las interrogantes sobre ciudadanía digital para comprobar su aprendizaje:
      </p>

      <form onSubmit={calificarQuiz} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Pregunta 1: Huella Digital */}
        <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <p style={{ fontWeight: '600', color: '#1e293b', marginBottom: '10px', fontSize: '0.95rem' }}>
            1. ¿A qué se le denomina "Huella Digital" en internet?
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: '#475569' }}>
            <label style={{ cursor: 'pointer' }}>
              <input 
                type="radio" 
                name="p1" 
                value="a" 
                checked={respuestas.p1 === 'a'} 
                onChange={() => manejarCambio('p1', 'a')} 
                required 
              /> {' '}
              A) A los virus informáticos que se instalan al navegar.
            </label>
            <label style={{ cursor: 'pointer' }}>
              <input 
                type="radio" 
                name="p1" 
                value="b" 
                checked={respuestas.p1 === 'b'} 
                onChange={() => manejarCambio('p1', 'b')} 
              /> {' '}
              B) El rastro de datos, publicaciones e historiales que dejamos al navegar en la red.
            </label>
            <label style={{ cursor: 'pointer' }}>
              <input 
                type="radio" 
                name="p1" 
                value="c" 
                checked={respuestas.p1 === 'c'} 
                onChange={() => manejarCambio('p1', 'c')} 
              /> {' '}
              C) Una contraseña secreta para entrar al correo electrónico.
            </label>
          </div>
        </div>

        {/* Pregunta 2: Relevancia de la Ciudadanía Digital */}
        <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <p style={{ fontWeight: '600', color: '#1e293b', marginBottom: '10px', fontSize: '0.95rem' }}>
            2. ¿Cuál es la principal relevancia de practicar una adecuada Ciudadanía Digital?
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: '#475569' }}>
            <label style={{ cursor: 'pointer' }}>
              <input 
                type="radio" 
                name="p2" 
                value="a" 
                checked={respuestas.p2 === 'a'} 
                onChange={() => manejarCambio('p2', 'a')} 
                required 
              /> {' '}
              A) Promover un comportamiento ético, seguro y responsable en el uso de la tecnología.
            </label>
            <label style={{ cursor: 'pointer' }}>
              <input 
                type="radio" 
                name="p2" 
                value="b" 
                checked={respuestas.p2 === 'b'} 
                onChange={() => manejarCambio('p2', 'b')} 
              /> {' '}
              B) Aprender a programar videojuegos avanzados en formato web.
            </label>
            <label style={{ cursor: 'pointer' }}>
              <input 
                type="radio" 
                name="p2" 
                value="c" 
                checked={respuestas.p2 === 'c'} 
                onChange={() => manejarCambio('p2', 'c')} 
              /> {' '}
              C) Navegar más rápido por redes sociales sin consumir datos móviles.
            </label>
          </div>
        </div>

        {/* Pregunta 3: Prevención del Ciberbullying */}
        <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <p style={{ fontWeight: '600', color: '#1e293b', marginBottom: '10px', fontSize: '0.95rem' }}>
            3. ¿Qué acción debe realizar principalmente ante una situación de ciberacoso (ciberbullying)?
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: '#475569' }}>
            <label style={{ cursor: 'pointer' }}>
              <input 
                type="radio" 
                name="p3" 
                value="a" 
                checked={respuestas.p3 === 'a'} 
                onChange={() => manejarCambio('p3', 'a')} 
                required 
              /> {' '}
              A) Responder con insultos en la misma publicación para defenderse.
            </label>
            <label style={{ cursor: 'pointer' }}>
              <input 
                type="radio" 
                name="p3" 
                value="b" 
                checked={respuestas.p3 === 'b'} 
                onChange={() => manejarCambio('p3', 'b')} 
              /> {' '}
              B) Borrar todas mis cuentas de redes sociales y no volver a usar internet.
            </label>
            <label style={{ cursor: 'pointer' }}>
              <input 
                type="radio" 
                name="p3" 
                value="c" 
                checked={respuestas.p3 === 'c'} 
                onChange={() => manejarCambio('p3', 'c')} 
              /> {' '}
              C) Bloquear al agresor, guardar evidencias y comunicarlo a un docente o adulto responsable.
            </label>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          style={{
            background: '#31105c',
            color: '#ffffff',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '0.95rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          Enviar Evaluación y Calcular Punteo
        </motion.button>
      </form>

      {resultado !== null && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            marginTop: '1.25rem',
            padding: '1rem',
            borderRadius: '8px',
            backgroundColor: resultado >= 70 ? '#f0fdf4' : '#fef2f2',
            border: resultado >= 70 ? '1px solid #bbf7d0' : '1px solid #fecaca',
            textAlign: 'center'
          }}
        >
          <h4 style={{ margin: '0 0 5px 0', color: resultado >= 70 ? '#166534' : '#991b1b', fontSize: '1.1rem' }}>
            {resultado >= 70 ? '¡Felicitaciones, ha aprobado el quiz!' : 'Debe repasar los conceptos de ciudadanía digital.'}
          </h4>
          <p style={{ margin: 0, fontSize: '1rem', fontWeight: '700', color: '#1e293b' }}>
            Punteo obtenido: {resultado} / 100 puntos
          </p>
        </motion.div>
      )}
    </motion.section>
  );
}