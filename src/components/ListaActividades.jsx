import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ListaActividades() {
  const [actividades, setActividades] = useState([
    { id: 1, Titulo: 'Fase 1: Analice su identidad digital y su huella en la red', Duracion: 15, Categoria: 'Identidad Digital', Completo: false },
    { id: 2, Titulo: 'Fase 2: Identifique amenazas, ciberacoso y riesgos de navegación', Duracion: 25, Categoria: 'Ciberseguridad', Completo: false },
    { id: 3, Titulo: 'Fase 3: Complete el taller práctico de contraseñas seguras y verificación', Duracion: 30, Categoria: 'Privacidad', Completo: false },
    { id: 4, Titulo: 'Fase 4: Valide sus conclusiones sobre buenas prácticas de convivencia digital', Duracion: 20, Categoria: 'Convivencia Digital', Completo: false }
  ]);

  const toggleCompletado = (id) => {
    setActividades(actividades.map(act => 
      act.id === id ? { ...act, Completo: !act.Completo } : act
    ));
  };

  return (
    <div style={{ padding: '1.5rem', background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
      <h3 style={{ color: '#31105c', marginTop: 0, marginBottom: '1.25rem', fontSize: '1.25rem', fontWeight: '700', textAlign: 'center' }}>
        Secuencia Didáctica para el Alumno
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {actividades.map((item) => {
          const completado = item.Completo;

          return (
            <motion.div 
              key={item.id}
              whileHover={{ scale: 1.01 }}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 20px',
                background: completado ? '#f0fdf4' : '#ffffff',
                border: completado ? '1px solid #bbf7d0' : '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ paddingRight: '15px' }}>
                <span style={{ 
                  display: 'block', 
                  fontWeight: '600', 
                  color: completado ? '#166534' : '#1e293b',
                  fontSize: '1rem',
                  marginBottom: '4px'
                  // Quitamos el textDecoration aquí para que no se cruce feo el texto
                }}>
                  {item.Titulo}
                </span>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
                  Tiempo estimado: {item.Duracion} minutos — <span style={{ color: '#3b82f6', fontWeight: '500' }}>[{item.Categoria}]</span>
                </span>
              </div>

              <button
                onClick={() => toggleCompletado(item.id)}
                style={{
                  background: completado ? '#16a34a' : '#31105c', // Usamos el morado original para el botón pendiente
                  color: '#ffffff',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  transition: 'background 0.2s'
                }}
              >
                {completado ? 'Completado ✓' : 'Marcar su avance'}
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}