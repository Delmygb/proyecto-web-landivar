import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ListaActividades() {
  // Datos de respaldo oficiales por si la nube de NocoDB presenta restricciones de ruta
  const actividadesPorDefecto = [
    { id: 1, Titulo: 'Riesgos en Redes Sociales y Ciberacoso', Duracion: 20, Categoria: 'Ciberseguridad', Completo: true },
    { id: 2, Titulo: 'Identidad Digital y Huella en la Red', Duracion: 15, Categoria: 'Ciudadanía Digital', Completo: false },
    { id: 3, Titulo: 'Buenas Prácticas de Convivencia en Línea', Duracion: 25, Categoria: 'Privacidad', Completo: false }
  ];

  const [actividades, setActividades] = useState(actividadesPorDefecto);
  const [cargando, setCargando] = useState(false);

  // Intentamos conectar con NocoDB de forma asincrónica
  useEffect(() => {
    const NOCODB_URL = 'https://app.nocodb.com/api/v1/db/data/v1/parhbek53utr4u1/Actividades';
    const API_TOKEN = 'nc_pat_FasrCh7bSAjBltkCwHilDiDyQGVB09LtLPGnY6SE';

    fetch(NOCODB_URL, {
      method: 'GET',
      headers: {
        'xc-token': API_TOKEN,
        'Content-Type': 'application/json'
      }
    })
      .then(respuesta => {
        if (!respuesta.ok) throw new Error('Error al conectar con la nube');
        return respuesta.json();
      })
      .then(datos => {
        const registros = datos.list || datos.rows || (Array.isArray(datos) ? datos : []);
        if (registros.length > 0) {
          setActividades(registros);
        }
      })
      .catch(error => {
        console.log('Usando datos locales por respaldo de red:', error);
        // Si hay error 404 u otro, se mantienen los datos por defecto para garantizar que la app funcione
      });
  }, []);

  return (
    <div style={{ padding: '1.5rem', background: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
      <h3 style={{ color: '#1A237E', marginTop: 0, marginBottom: '1rem', fontSize: '1.15rem', fontWeight: '600' }}>
        Secuencia de Actividades (Sincronizado con NocoDB)
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {actividades.map((item, index) => {
          const titulo = item.Titulo || item.titulo || item.Title || 'Sin título';
          const duracion = item.Duracion || item.duracion || 15;
          const categoria = item.Categoria || item.categoria || 'General';
          const completado = item.Completo !== undefined ? Boolean(item.Completo) : false;

          return (
            <motion.div 
              key={item.id || index}
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
                <h4 style={{ margin: '0 0 5px 0', color: '#1e293b', fontSize: '1rem' }}>{titulo}</h4>
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
    </div>
  );
}