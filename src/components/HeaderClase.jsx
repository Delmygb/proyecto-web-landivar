export default function HeaderClase() {
  return (
    <div style={{ background: '#411c75', color: '#ffffff', padding: '1.75rem', borderRadius: '12px', marginBottom: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '1rem', borderBottom: '2px solid #eab308', paddingBottom: '0.75rem' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: '600', background: '#eab308', color: '#1e293b', padding: '4px 10px', borderRadius: '4px' }}>
          Universidad Rafael Landívar
        </span>
        <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
          Tecnología del Aprendizaje — Nivel Medio
        </span>
      </div>

      <h1 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0', fontWeight: '700' }}>
        Ciudadanía Digital y Seguridad en Internet
      </h1>
      
      <p style={{ margin: 0, fontSize: '0.95rem', color: '#e2e8f0' }}>
        <strong>Profesor(a):</strong> Delmy Bajxac Cos &nbsp;|&nbsp; <strong>Grado:</strong> Segundo Básico A-B-C
      </p>
    </div>
  );
}