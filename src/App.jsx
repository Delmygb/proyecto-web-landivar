import React from 'react';
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';

export default function App() {
    return (
        <div style={{ 
            fontFamily: 'system-ui, -apple-system, sans-serif', 
            padding: '2.5rem 1.5rem', 
            maxWidth: '900px', 
            margin: '0 auto',
            backgroundColor: '#F8F9FA',
            minHeight: '100vh'
        }}>
            <HeaderClase 
                tituloTema="Desarrollo de Componentes y Estado Local en React" 
                nombreDocente="Delmy Gabriela Bajxac Cos" 
                horario="07:30 - 09:00 hrs" 
            />

            <ObjetivosCard 
                competencia="Construye aplicaciones web modulares aplicando buenas prácticas de desarrollo frontend, componentes reutilizables y gestión de estado local." 
                indicadorLogro="Estructura componentes en React con props y useState para integrar interactividad en interfaces educativas digitales." 
            />

            <h3 style={{ color: '#1A237E', margin: '2rem 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                📋 Secuencia Didáctica de la Clase
            </h3>

            <ActividadItem 
                tituloActividad="Paso 1.1: Lectura reflexiva sobre Componentes Funcionales" 
                duracion="15 min" 
            />
            <ActividadItem 
                tituloActividad="Paso 1.2: Auditoría y Prompting con Inteligencia Artificial" 
                duracion="20 min" 
            />
            <ActividadItem 
                tituloActividad="Paso 1.3: Configuración de carpeta components/ y componentes JSX" 
                duracion="35 min" 
            />
            <ActividadItem 
                tituloActividad="Paso 1.4: Integración del Hook useState para dinamismo" 
                duracion="20 min" 
            />
        </div>
    );
}