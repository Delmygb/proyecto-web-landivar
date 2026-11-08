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
        const registros = datos.records || datos.list || [];
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
            const campos = item.fields || item;
            const titulo = campos.Titulo || campos.titulo || campos.Title || campos.title || 'Sin título';
            const duracion = campos.Duracion || campos.duracion || campos.Duration || campos.duration || 0;
            const categoria = campos.Categoria || campos.categoria || campos.Category || campos.category || 'General';
            const completado = campos.Completo !== undefined ? campos.Completo : (campos.completo || false);

            return (
              <motion.div 
                key={item.id || index}
                whileHover={{ scale: 1.01 }}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 16px',
                  background: completado ? '#f0fdf4' : '#f8fafc',
                  border: completado ? '1px solid #bbf7d0' : '1px solid #e2e8f0',
                  borderRadius: '6px'
                }}
              >
                <div>
                  <span style={{ 
                    display: 'block', 
                    fontWeight: '600', 
                    color: completado ? '#166534' : '#1e293b',
                    fontSize: '0.95rem',
                    textDecoration: completado ? 'line-through' : 'none'
                  }}>
                    {titulo}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
                    Duración: {duracion} min — [{categoria}]
                  </span>
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: '600', color: completado ? '#166534' : '#475569' }}>
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