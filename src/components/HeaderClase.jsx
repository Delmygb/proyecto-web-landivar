import { motion } from "framer-motion";

export default function HeaderClase({ tituloTema, horario }) {
    return (
        <motion.header 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
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
            <h1 style={{ margin: '12px 0 6px 0', fontSize: '1.7rem', fontWeight: '700' }}>{tituloTema}</h1>
            <p style={{ margin: 0, opacity: 0.9, fontSize: '0.95rem' }}>Horario de la Sesión: {horario}</p>
        </motion.header>
    );
}