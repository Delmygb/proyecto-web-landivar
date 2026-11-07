import { motion } from "framer-motion";

export default function ObjetivosCard({ indicador, competencia }) {
    return (
        <motion.div 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            style={{ 
                background: '#ffffff', 
                borderLeft: '5px solid #4A148C', 
                border: '1px solid #e2e8f0',
                padding: '1.5rem', 
                borderRadius: '8px', 
                marginBottom: '1.5rem', 
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
            }}
        >
            <h3 style={{ color: '#1A237E', margin: '0 0 8px 0', fontSize: '1.15rem', fontWeight: '600' }}>
                Metas de Aprendizaje
            </h3>
            <p style={{ margin: '0 0 10px 0', color: '#1e293b', fontSize: '0.95rem', lineHeight: '1.5' }}>
                <strong>Indicador de Logro:</strong> {indicador}
            </p>
            <p style={{ margin: 0, color: '#475569', fontSize: '0.9rem', lineHeight: '1.5' }}>
                <strong>Competencia:</strong> {competencia}
            </p>
        </motion.div>
    );
}