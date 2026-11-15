export default function ObjetivosCard() {
  return (
    <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '1.5rem' }}>
      <h3 style={{ color: '#411c75', marginTop: 0, marginBottom: '0.75rem', fontSize: '1.2rem', fontWeight: '700' }}>
        Metas de Aprendizaje
      </h3>
      <p style={{ color: '#334155', lineHeight: '1.6', margin: '0 0 1rem 0', fontSize: '0.95rem' }}>
        <strong>Competencia:</strong> Interactúa socialmente en línea, respetando y aceptando las normas grupales para fomentar una sana convivencia digital.
      </p>
      <div style={{ background: '#f8fafc', padding: '10px 14px', borderRadius: '6px', borderLeft: '4px solid #411c75' }}>
        <span style={{ fontSize: '0.9rem', color: '#475569' }}>
          <strong>Pregunta guía:</strong> ¿Cómo se puede navegar, consumir y compartir información en internet de forma segura ante los riesgos digitales?
        </span>
      </div>
    </div>
  );
}