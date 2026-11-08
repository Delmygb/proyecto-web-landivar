import { motion } from 'framer-motion';

export default function ObjetivosCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ 
        background: '#2b0f54', // Morado intenso
        borderRadius: '12px', 
        overflow: 'hidden', // Para que la línea superior respete los bordes redondeados
        boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
        marginBottom: '1.5rem',
        border: '1px solid #3b146e'
      }}
    >
      {/* Línea superior decorativa en color amarillo mostaza / beige */}
      <div style={{ height: '6px', background: '#e6c547', width: '100%' }} />

      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ 
          color: '#ffffff', 
          marginTop: 0, 
          marginBottom: '1rem', 
          fontSize: '1.35rem', 
          fontWeight: '700',
          textAlign: 'center',
          letterSpacing: '0.5px'
        }}>
          Metas de Aprendizaje
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#f8fafc', fontSize: '0.95rem', lineHeight: '1.5' }}>
          <div>
            <strong style={{ color: '#fde047', display: 'block', marginBottom: '2px' }}>Indicador de Logro:</strong>
            <span style={{ color: '#e2e8f0' }}>
              Analiza de forma crítica los riesgos y responsabilidades asociados al uso de la tecnología y redes sociales en su entorno digital.
            </span>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '10px' }}>
            <strong style={{ color: '#fde047', display: 'block', marginBottom: '2px' }}>Competencia:</strong>
            <span style={{ color: '#e2e8f0' }}>
              Promueve prácticas seguras, éticas y responsables de ciudadanía digital en el manejo de información y herramientas tecnológicas.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}