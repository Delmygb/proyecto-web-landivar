import React, { useState } from 'react';

export default function ActividadItem({ tituloActividad, duracion }) {
    const [completada, setCompletada] = useState(false);

    return (
        <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: completada ? '1px solid #2E7D32' : '1px solid #e0e0e0', 
            padding: '1.2rem 1.5rem', 
            margin: '0.8rem 0', 
            borderRadius: '10px',
            backgroundColor: completada ? '#F1F8E9' : '#ffffff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
            transition: 'all 0.3s ease'
        }}>
            <div>
                <h4 style={{ 
                    margin: '0 0 0.4rem 0', 
                    fontSize: '1.05rem',
                    color: completada ? '#2E7D32' : '#1A237E',
                    textDecoration: completada ? 'line-through' : 'none'
                }}>
                    {tituloActividad}
                </h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>
                    ⏱️ {duracion}
                </p>
            </div>
            <button 
                onClick={() => setCompletada(!completada)}
                style={{
                    backgroundColor: completada ? '#2E7D32' : '#0288D1', // Verde éxito o Azul dinámico
                    color: '#fff',
                    border: 'none',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    whiteSpace: 'nowrap'
                }}
            >
                {completada ? 'Completada' : 'Pendiente'}
            </button>
        </div>
    );
}