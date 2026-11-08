import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ListaActividades from './components/ListaActividades';

export default function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif', background: '#f8fafc', minHeight: '100vh' }}>
      <HeaderClase />
      
      {/* Debe ir primero obligatoriamente */}
      <ObjetivosCard />
      
      <ListaActividades />
    </div>
  );
}