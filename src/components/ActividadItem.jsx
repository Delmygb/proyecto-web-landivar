import { useState } from "react";
import { motion } from "framer-motion";

export default function ActividadItem({ titulo, tiempo }) {
    const [completada, setCompletada] = useState(false);

    return (
        <motion.div 
            layout
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ 
                background: completada ? '#f0fdf4' : '#ffffff', 
                border: completada ? '1px solid #bbf7d0' : '1px solid #e2e8f0', 
                padding: '1rem 1.25rem', 
                borderRadius: '8px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '12px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
            }}
        >
            <div>
                <span style={{ 
                    display: 'block',
                    textDecoration: completada ? 'line-through' : 'none',
                    color: completada ? '#166534' : '#1e293b',
                    fontWeight: completada ? '400' : '600',
                    fontSize: '0.95rem',
                    marginBottom: '4px'
                }}>
                    {titulo}
                </span>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
                    Tiempo estimado: {tiempo}
                </span>
            </div>

            <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setCompletada(!completada)}
                style={{
                    background: completada ? '#166534' : '#1A237E',
                    color: '#ffffff',
                    border: 'none',
                    padding: '8px 14px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    transition: 'background 0.2s ease'
                }}
            >
                {completada ? "Completado" : "Marcar su avance"}
            </motion.button>
        </motion.div>
    );
}