import { motion } from 'framer-motion';
import ListaActividades from './components/ListaActividades';

export default function App() {
  return (
    <main style={{ 
      maxWidth: '850px', 
      margin: '2.5rem auto', 
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      padding: '0 1rem',
      color: '#1e293b'
    }}>
      {/* Encabezado formal */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ 
          background: 'linear-gradient(135deg, #4A148C, #1A237E)', 
          color: '#ffffff', 
          padding: '2rem', 
          borderRadius: '8px', 
          textAlign: 'center',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          marginBottom: '1.5rem'
        }}
      >
        <span style={{ 
          textTransform: 'uppercase', 
          letterSpacing: '1.5px', 
          fontSize: '0.75rem', 
          background: 'rgba(255, 255, 255, 0.15)', 
          padding: '4px 10px', 
          borderRadius: '4px',
          fontWeight: '600'
        }}>
          Tecnología | Segundo Grado Básico | CNB MINEDUC
        </span>
        <h1 style={{ margin: '12px 0 6px 0', fontSize: '1.7rem', fontWeight: '700' }}>
          Ciudadanía Digital y Seguridad en Internet
        </h1>
        <p style={{ margin: 0, opacity: 0.9, fontSize: '0.95rem' }}>
          Plan de Clase Digital Interactivo con Persistencia en la Nube
        </p>
      </motion.header>

      {/* Tarjeta de Metas */}
      <section style={{ 
        background: '#ffffff', 
        borderLeft: '5px solid #4A148C', 
        border: '1px solid #e2e8f0',
        padding: '1.5rem', 
        borderRadius: '8px', 
        marginBottom: '1.5rem', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
      }}>
        <h3 style={{ color: '#1A237E', margin: '0 0 8px 0', fontSize: '1.15rem', fontWeight: '600' }}>
          Metas de Aprendizaje
        </h3>
        <p style={{ margin: '0 0 10px 0', fontSize: '0.95rem', lineHeight: '1.5' }}>
          <strong>Indicador de Logro:</strong> Analice los riesgos asociados al uso de redes sociales y aplique medidas formales para la protección de sus datos personales y ciberseguridad.
        </p>
        <p style={{ margin: 0, color: '#475569', fontSize: '0.9rem', lineHeight: '1.5' }}>
          <strong>Competencia:</strong> Utilice herramientas tecnológicas de manera segura, responsable y ética, respetando la privacidad propia y ajena en entornos digitales educativos.
        </p>
      </section>

      {/* Componente Dinámico Conectado a NocoDB */}
      <ListaActividades />
    </main>
  );
}