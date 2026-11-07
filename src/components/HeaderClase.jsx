import React from 'react';

export default function HeaderClase({ tituloTema, nombreDocente, horario }) {
    return (
        <header style={{ 
            backgroundColor: '#8E24AA', // Morado elegante
            color: '#ffffff', 
            padding: '2rem', 
            borderRadius: '12px', 
            marginBottom: '2rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
            <span style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                padding: '0.3rem 0.8rem', 
                borderRadius: '20px', 
                fontSize: '0.85rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '1px'
            }}>
                Plan de Clase Digital
            </span>
            <h1 style={{ margin: '1rem 0 0.5rem 0', fontSize: '1.8rem', fontWeight: '700' }}>
                {tituloTema}
            </h1>
            <hr style={{ border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.3)', margin: '1rem 0' }} />
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', fontSize: '0.95rem' }}>
                <p style={{ margin: 0 }}><strong>Docente:</strong> {nombreDocente}</p>
                <p style={{ margin: 0 }}><strong>Horario:</strong> {horario}</p>
            </div>
        </header>
    );
}