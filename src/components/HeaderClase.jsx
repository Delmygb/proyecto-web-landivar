import { motion } from 'framer-motion';

export default function HeaderClase() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ 
        backgroundColor: '#411c75', 
        color: '#ffffff', 
        padding: '2rem', 
        borderRadius: '12px', 
        marginBottom: '1.5rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        border: '1px solid #522594'
      }}
    >
      {/* Título principal en color amarillo destacado */}
      <h1 style={{ 
        margin: '0 0 1.25rem 0', 
        fontSize: '1.65rem', 
        fontWeight: '700', 
        textAlign: 'center',
        color: '#fde047',
        letterSpacing: '0.5px'
      }}>
        Ciudadanía Digital y Seguridad en Internet
      </h1>

      {/* Datos del docente alineados */}
      <div style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '0.95rem' }}>
        <span><strong>Docente:</strong> Prof.ª Delmy Bajxac</span>
      </div>

      {/* Horario y sección estructurados en formato tipo tabla formal */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '10px', 
        maxWidth: '450px', 
        margin: '0 auto',
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        padding: '10px 15px',
        borderRadius: '8px',
        fontSize: '0.9rem',
        border: '1px solid rgba(255, 255, 255, 0.15)'
      }}>
        <div style={{ textAlign: 'right', paddingRight: '10px', borderRight: '1px solid rgba(255,255,255,0.2)' }}>
          <strong>Horario:</strong> Sábados 07:00 AM
        </div>
        <div style={{ paddingLeft: '10px' }}>
          <strong>Sección:</strong> Segundo Básico A-B-C
        </div>
      </div>
    </motion.header>
  );
}