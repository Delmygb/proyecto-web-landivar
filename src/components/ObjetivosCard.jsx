import React from 'react';

export default function ObjetivosCard({ competencia, indicadorLogro }) {
    return (
        <section style={{ 
            backgroundColor: '#ffffff', 
            padding: '1.5rem', 
            borderRadius: '12px', 
            marginBottom: '2rem',
            border: '1px solid #e0e0e0',
            borderLeft: '6px solid #1A237E', // Azul marino profundo en el borde izquierdo
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
            <h3 style={{ color: '#1A237E', marginTop: 0, marginBottom: '1rem', fontSize: '1.25rem' }}>
                Metas de la Sesión
            </h3>
            <p style={{ margin: '0.5rem 0', color: '#333' }}>
                <strong style={{ color: '#1A237E' }}>Competencia:</strong> {competencia}
            </p>
            <p style={{ margin: '0.5rem 0 0 0', color: '#333' }}>
                <strong style={{ color: '#1A237E' }}>Indicador de Logro:</strong> {indicadorLogro}
            </p>
        </section>
    );
}