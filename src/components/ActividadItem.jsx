import { motion } from 'framer-motion';

export default function ActividadItem({ item, onToggle }) {
  const completado = item.Completo;

  return (
    <motion.div 
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
        transition: 'all 0.2s ease',
        marginBottom: '10px'
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
        onClick={() => onToggle(item.id)}
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
}