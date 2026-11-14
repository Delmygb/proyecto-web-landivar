import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ListaActividades() {
  const [actividades, setActividades] = useState([]);
  const [cargando, setCargando] = useState(true);

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
      .then(respuesta => respuesta.json())
      .then(datos => {
        const registros = Array.isArray(datos) ? datos : (datos.list || datos.records || []);
        setActividades(registros);
        setCargando(false);
      })
      .catch(error => {
        console.error('Error al conectar con NocoDB:', error);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: '#1A237E', fontWeight: '600' }}>
        Cargando datos desde el servidor en la nube...
      </div>
    );
  }

  return (
    <div style={{ padding: '1.5rem', background: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
      <h3 style={{ color: '#1A237E', marginTop: 0, marginBottom: '1rem', fontSize: '1.15rem', fontWeight: '600' }}>
        Secuencia de Actividades (Sincronizado con NocoDB)
      </h3>
      {actividades.length === 0 ? (
        <p style={{ color: '#64748b', fontSize: '0.9rem' }}>No se encontraron registros o la tabla está vacía.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {actividades.map((item, index) => {
            const titulo = item.Titulo || item.titulo || item.Title || 'Sin título';
            const duracion = item.Duracion || item.duracion || 0;
            const categoria = item.Categoria || item.categoria || 'General';
            const completado = item.Completo !== undefined ? Boolean(item.Completo) : false;

            return (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.01 }}
                style={{ 
                  padding: '1rem', 
                  borderRadius: '6px', 
                  border: '1px solid #e2e8f0',
                  backgroundColor: completado ? '#f0fdf4' : '#f8fafc',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <h4 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>{titulo}</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>
                    Categoría: {categoria} | Duración: {duracion} min
                  </p>
                </div>
                <span style={{ 
                  padding: '0.25rem 0.75rem', 
                  borderRadius: '9999px', 
                  fontSize: '0.75rem', 
                  fontWeight: '600',
                  backgroundColor: completado ? '#dcfce7' : '#fef3c7',
                  color: completado ? '#166534' : '#92400e'
                }}>
                  {completado ? 'Completado' : 'Pendiente'}
                </span>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}