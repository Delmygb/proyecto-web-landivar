import { motion } from 'framer-motion';

export default function ObjetivosCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ 
        background: '#ffffff', 
        borderRadius: '12px', 
        border: '1px solid #e2e8f0', 
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
        padding: '1.5rem',
        marginBottom: '1.5rem'
      }}
    >
      <h3 style={{ 
        color: '#31105c', // Morado original de la cabecera
        marginTop: 0, 
        marginBottom: '1rem', 
        fontSize: '1.25rem', 
        fontWeight: '700',
        textAlign: 'center' 
      }}>
        Metas de Aprendizaje
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#1e293b', fontSize: '0.95rem' }}>
        <div>
          <span style={{ fontWeight: '600', color: '#475569' }}>Indicador de Logro:</span>{' '}
          <span style={{ color: '#334155' }}>
            Analiza de forma crítica los riesgos y responsabilidades asociados al uso de la tecnología y redes sociales en su entorno digital.
          </span>
        </div>

        <div>
          <span style={{ fontWeight: '600', color: '#475569' }}>Competencia:</span>{' '}
          <span style={{ color: '#334155' }}>
            Promueve prácticas seguras, éticas y responsables de ciudadanía digital en el manejo de información y herramientas tecnológicas.
          </span>
        </div>
      </div>
    </motion.div>
  );
}