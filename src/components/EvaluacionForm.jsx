import { useState } from 'react';

export default function EvaluacionForm() {
  const [respuestas, setRespuestas] = useState({ p1: '', p2: '', p3: '' });
  const [resultadoFinal, setResultadoFinal] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validamos las respuestas correctas de la evaluación formativa final
    let aciertos = 0;
    if (respuestas.p1 === 'b') aciertos++;
    if (respuestas.p2 === 'a') aciertos++;
    // Agrega más validaciones si tienes más preguntas

    if (aciertos >= 2) {
      setResultadoFinal({ 
        ok: true, 
        mensaje: '¡Felicitaciones! Ha aprobado la evaluación formativa final demostrando un dominio excelente de la ciudadanía digital.' 
      });
    } else {
      setResultadoFinal({ 
        ok: false, 
        mensaje: 'Evaluación no aprobada. Le sugerimos revisar nuevamente los conceptos teóricos de las fases de la secuencia.' 
      });
    }
  };

  return (
    <div style={{ padding: '2rem', background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)', marginTop: '2rem', fontFamily: 'Arial, Helvetica, sans-serif' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h3 style={{ color: '#411c75', margin: '0 0 0.5rem 0', fontSize: '1.4rem', fontWeight: 'bold' }}>
          Evaluación Formativa Final (Quiz Interactivo)
        </h3>
        <p style={{ color: '#475569', fontSize: '0.9rem', margin: 0, textAlign: 'justify', textAlignLast: 'center' }}>
          Responda correctamente cada una de las interrogantes sobre ciudadanía digital para comprobar su aprendizaje:
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        {/* Pregunta 1 */}
        <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <p style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#1e293b', marginTop: 0, marginBottom: '0.75rem', textAlign: 'justify' }}>
            1. ¿A qué se le denomina "Huella Digital" en internet?
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.85rem', color: '#334155', cursor: 'pointer', textAlign: 'justify', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <input type="radio" name="p1" value="a" onChange={(e) => setRespuestas({...respuestas, p1: e.target.value})} style={{ marginTop: '2px' }} />
              <span>A) A los virus informáticos que se instalan al navegar en equipos públicos o personales.</span>
            </label>
            <label style={{ fontSize: '0.85rem', color: '#334155', cursor: 'pointer', textAlign: 'justify', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <input type="radio" name="p1" value="b" onChange={(e) => setRespuestas({...respuestas, p1: e.target.value})} style={{ marginTop: '2px' }} />
              <span>B) El rastro de datos, publicaciones y historiales que dejamos al navegar en la red de forma permanente.</span>
            </label>
            <label style={{ fontSize: '0.85rem', color: '#334155', cursor: 'pointer', textAlign: 'justify', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <input type="radio" name="p1" value="c" onChange={(e) => setRespuestas({...respuestas, p1: e.target.value})} style={{ marginTop: '2px' }} />
              <span>C) Una contraseña secreta para entrar al correo electrónico institucional.</span>
            </label>
          </div>
        </div>

        {/* Pregunta 2 */}
        <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <p style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#1e293b', marginTop: 0, marginBottom: '0.75rem', textAlign: 'justify' }}>
            2. ¿Cuál es la principal relevancia de practicar una adecuada Ciudadanía Digital?
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.85rem', color: '#334155', cursor: 'pointer', textAlign: 'justify', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <input type="radio" name="p2" value="a" onChange={(e) => setRespuestas({...respuestas, p2: e.target.value})} style={{ marginTop: '2px' }} />
              <span>A) Promover un comportamiento ético, seguro y responsable en el uso de la tecnología y convivencia virtual.</span>
            </label>
            <label style={{ fontSize: '0.85rem', color: '#334155', cursor: 'pointer', textAlign: 'justify', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <input type="radio" name="p2" value="b" onChange={(e) => setRespuestas({...respuestas, p2: e.target.value})} style={{ marginTop: '2px' }} />
              <span>B) Aprender a programar videojuegos avanzados en formato web multiplataforma.</span>
            </label>
            <label style={{ fontSize: '0.85rem', color: '#334155', cursor: 'pointer', textAlign: 'justify', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <input type="radio" name="p2" value="c" onChange={(e) => setRespuestas({...respuestas, p2: e.target.value})} style={{ marginTop: '2px' }} />
              <span>C) Navegar más rápido por redes sociales sin consumir datos móviles del plan contratado.</span>
            </label>
          </div>
        </div>

        <button 
          type="submit"
          style={{
            background: '#411c75',
            color: '#ffffff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '0.9rem',
            alignSelf: 'flex-start',
            fontFamily: 'Arial, sans-serif'
          }}
        >
          Enviar Evaluaciones Finales
        </button>
      </form>

      {resultadoFinal && (
        <div style={{
          marginTop: '1.25rem',
          padding: '12px',
          borderRadius: '6px',
          background: resultadoFinal.ok ? '#f0fdf4' : '#fef2f2',
          border: resultadoFinal.ok ? '1px solid #bbf7d0' : '1px solid #fecaca',
          color: resultadoFinal.ok ? '#166534' : '#991b1b',
          fontSize: '0.85rem',
          textAlign: 'justify'
        }}>
          {resultadoFinal.mensaje}
        </div>
      )}

    </div>
  );
}