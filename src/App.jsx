import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ListaActividades from './components/ListaActividades';
import EvaluacionForm from './components/EvaluacionForm';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', padding: '2rem 1rem', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <HeaderClase />
        <ObjetivosCard />
        <ListaActividades />
        <EvaluacionForm />
      </div>
    </div>
  );
}