import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';

export default function App() {
    return (
        <main style={{ 
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif', 
            padding: '2.5rem 1.5rem', 
            maxWidth: '850px', 
            margin: '0 auto',
            backgroundColor: '#f8fafc',
            minHeight: '100vh'
        }}>
            <HeaderClase 
                tituloTema="Ciudadanía Digital y Seguridad en Internet" 
                horario="07:30 - 09:00 hrs" 
            />

            <ObjetivosCard 
                indicador="Analice los riesgos asociados al uso de redes sociales y aplique medidas formales para la protección de sus datos personales y ciberseguridad." 
                competencia="Utilice herramientas tecnológicas de manera segura, responsable y ética, respetando la privacidad propia y ajena en entornos digitales educativos." 
            />

            <h2 style={{ color: '#1A237E', fontSize: '1.2rem', margin: '2rem 0 1rem 0', fontWeight: '700' }}>
                Secuencia Didáctica para el Alumno
            </h2>

            <ActividadItem 
                titulo="Fase 1: Analice su identidad digital y su huella en la red" 
                tiempo="15 minutos" 
            />
            <ActividadItem 
                titulo="Fase 2: Identifique amenazas, ciberacoso y riesgos de navegación" 
                tiempo="25 minutos" 
            />
            <ActividadItem 
                titulo="Fase 3: Complete el taller práctico de contraseñas seguras y verificación" 
                tiempo="30 minutos" 
            />
            <ActividadItem 
                titulo="Fase 4: Valide sus conclusiones sobre buenas prácticas de convivencia digital" 
                tiempo="20 minutos" 
            />
        </main>
    );
}