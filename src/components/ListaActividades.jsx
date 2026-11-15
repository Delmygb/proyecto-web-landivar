import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ListaActividades() {
  const actividadesPorDefecto = [
    { id: 1, Titulo: 'Fase 1: Analice su identidad digital y su huella en la red', Duracion: 15, Categoria: 'Identidad Digital', Completo: false },
    { id: 2, Titulo: 'Fase 2: Identifique amenazas, ciberacoso y riesgos de navegación', Duracion: 25, Categoria: 'Ciberseguridad', Completo: false },
    { id: 3, Titulo: 'Fase 3: Complete el taller práctico de contraseñas seguras y verificación', Duracion: 30, Categoria: 'Privacidad', Completo: false },
    { id: 4, Titulo: 'Fase 4: Valide sus conclusiones sobre buenas prácticas de convivencia digital', Duracion: 20, Categoria: 'Convivencia Digital', Completo: false }
  ];

  const [actividades, setActividades] = useState(actividadesPorDefecto);

  const NOCODB_URL = 'https://app.nocodb.com/api/v1/db/data/v1/parhbek53utr4u1/Actividades';
  const API_TOKEN = 'nc_pat_FasrCh7bSAjBltkCwHilDiDyQGVB09LtLPGnY6SE';

  useEffect(() => {
    fetch(NOCODB_URL, {
      method: 'GET',
      headers: {
        'xc-token': API_TOKEN,
        'Content-Type': 'application/json'
      }
    })
      .then(respuesta => {
        if (!respuesta.ok) throw new Error('Error en la ruta de NocoDB');
        return respuesta.json();
      })
      .then(datos => {
        const registros = datos.list || datos.rows || (Array.isArray(datos) ? datos : []);
        if (registros.length > 0) {
          const formateados = registros.map((item, idx) => ({
            id: item.Id || item.id || idx + 1,
            Titulo: item.Titulo || item.titulo || item.Title || 'Actividad de Clase',
            Duracion: item.Duracion || item.duracion || 15,
            Categoria: item.Categoria || item.categoria || 'General',
            Completo: false
          }));
          setActividades(formateados);
        }
      })
      .catch(error => {
        console.log('Usando respaldo local ante restricción de nube:', error);
      });
  }, []);

  const toggleCompletado = (id) => {
    setActividades(actividades.map(act => 
      act.id === id ? { ...act, Completo: !act.Completo } : act
    ));
  };

  return (
    <div style={{ padding: '1.5rem', background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '1.5rem' }}>
      <h3 style={{ color: '#411c75', marginTop: 0, marginBottom: '1.25rem', fontSize: '1.25rem', fontWeight: '700', textAlign: 'center' }}>
        Secuencia de Clase
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
                  marginBottom: '4px',
                  textDecoration: completado ? 'line-through' : 'none'
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
                  background: completado ? '#16a34a' : '#411c75',
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