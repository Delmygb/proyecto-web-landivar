import { useState } from 'react';

export default function ListaActividades() {
  const [faseDesbloqueada, setFaseDesbloqueada] = useState(1);
  
  // Estados para Fase 1
  const [respuesta1, setRespuesta1] = useState('');
  const [mensaje1, setMensaje1] = useState(null);
  const [ejemplosF1, setEjemplosF1] = useState(['']);

  // Estados para Fase 2
  const [respuesta2, setRespuesta2] = useState('');
  const [mensaje2, setMensaje2] = useState(null);

  // Estados para Fase 3
  const [respuesta3, setRespuesta3] = useState('');
  const [mensaje3, setMensaje3] = useState(null);
  const [nuevaPassword, setNuevaPassword] = useState('');
  const [evaluacionPw, setEvaluacionPw] = useState(null);

  // Estados para Fase 4
  const [match1, setMatch1] = useState('');
  const [match2, setMatch2] = useState('');
  const [match3, setMatch3] = useState('');
  const [resultadoMatch, setResultadoMatch] = useState(null);
  const [reflexionPrivacidad, setReflexionPrivacidad] = useState('');
  const [reflexionCiberacoso, setReflexionCiberacoso] = useState('');
  const [buenasPracticas, setBuenasPracticas] = useState(['']);
  const [mensaje4, setMensaje4] = useState(null);

  // Funciones Fase 1
  const agregarCampoF1 = () => setEjemplosF1([...ejemplosF1, '']);
  const actualizarEjemploF1 = (index, valor) => {
    const nuevos = [...ejemplosF1];
    nuevos[index] = valor;
    setEjemplosF1(nuevos);
  };

  const validarFase1 = (e) => {
    e.preventDefault();
    if (respuesta1 === 'b') {
      setMensaje1({ ok: true, text: 'Excelente análisis. Ha comprendido la persistencia de la huella digital.' });
      setFaseDesbloqueada(2);
    } else {
      setMensaje1({ ok: false, text: 'Revise la analogía anterior: los rastros en la red perduran a pesar de intentar eliminarlos (UNESCO, 2021).' });
    }
  };

  // Funciones Fase 2
  const validarFase2 = (e) => {
    e.preventDefault();
    if (respuesta2 === 'c') {
      setMensaje2({ ok: true, text: 'Excelente decisión ética. Ha identificado el protocolo adecuado ante situaciones de ciberacoso.' });
      setFaseDesbloqueada(3);
    } else {
      setMensaje2({ ok: false, text: 'Incorrecto. Según las directrices de UNICEF (2020), se debe evitar replicar la agresión y reportar formalmente el caso.' });
    }
  };

  // Funciones Fase 3
  const verificarFuerzaPw = (e) => {
    e.preventDefault();
    const pw = nuevaPassword;
    const tieneLongitud = pw.length >= 10;
    const tieneMayus = /[A-Z]/.test(pw);
    const tieneMinus = /[a-z]/.test(pw);
    const tieneNum = /[0-9]/.test(pw);
    const tieneSimbolo = /[^A-Za-z0-9]/.test(pw);

    if (tieneLongitud && tieneMayus && tieneMinus && tieneNum && tieneSimbolo) {
      setEvaluacionPw({ ok: true, text: 'Contraseña robusta validada correctamente según los estándares de seguridad.' });
      setFaseDesbloqueada(4);
    } else {
      setEvaluacionPw({ ok: false, text: 'La contraseña es débil. Asegúrese de incluir mínimo 10 caracteres, mayúsculas, minúsculas, números y símbolos.' });
    }
  };

  const validarFase3Reto = (e) => {
    e.preventDefault();
    if (respuesta3 === 'c') {
      setMensaje3({ ok: true, text: 'Taller de contraseñas superado con éxito.' });
      setFaseDesbloqueada(4);
    } else {
      setMensaje3({ ok: false, text: 'Incorrecto. Revise los criterios de ciberseguridad (García & Martínez, 2022).' });
    }
  };

  // Funciones Fase 4
  const validarMatch = (e) => {
    e.preventDefault();
    if (match1 === 'huella' && match2 === 'ciberacoso' && match3 === 'password') {
      setResultadoMatch({ ok: true, text: 'Excelente asociación de conceptos. Relación correcta.' });
    } else {
      setResultadoMatch({ ok: false, text: 'Hay asociaciones incorrectas. Vuelva a intentar relacionar los conceptos.' });
    }
  };

  const agregarPractica = () => setBuenasPracticas([...buenasPracticas, '']);
  const actualizarPractica = (index, valor) => {
    const nuevos = [...buenasPracticas];
    nuevos[index] = valor;
    setBuenasPracticas(nuevos);
  };

  const finalizarFase4 = (e) => {
    e.preventDefault();
    if (reflexionPrivacidad.trim() !== '' && reflexionCiberacoso.trim() !== '') {
      setMensaje4({ ok: true, text: 'Conclusiones y buenas prácticas consolidadas satisfactoriamente. Escape Room completado.' });
    } else {
      setMensaje4({ ok: false, text: 'Por favor complete las reflexiones solicitadas antes de consolidar el documento común.' });
    }
  };

  return (
    <div style={{ padding: '2rem', background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)', marginBottom: '1.5rem', fontFamily: 'Arial, Helvetica, sans-serif', textAlign: 'justify' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h3 style={{ color: '#411c75', margin: '0 0 0.5rem 0', fontSize: '1.4rem', fontWeight: 'bold', letterSpacing: '-0.025em' }}>
          Secuencia Didáctica: Ciudadanía Digital
        </h3>
        <p style={{ color: '#475569', fontSize: '0.9rem', margin: 0, fontWeight: 'normal' }}>
          Escape Room Educativo — Recorrido Metodológico por Fases
        </p>
      </div>

      {/* ================================================================= */}
      {/* FASE 1: IDENTIDAD DIGITAL (CELESTE)                               */}
      {/* ================================================================= */}
      <div style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid #7dd3fc', borderRadius: '12px', background: '#ecfeff' }}>
        <h4 style={{ color: '#0891b2', marginTop: 0, fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
          Fase 1: Identidad Digital y Huella en la Red
        </h4>

        {/* Banco de Material de Apoyo */}
        <div style={{ background: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid #7dd3fc', marginBottom: '1.25rem' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#0891b2', margin: '0 0 8px 0' }}>Banco de material de apoyo para el estudiante:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
            <span style={{ display: 'block', padding: '8px 12px', background: '#f0fdfa', border: '1px solid #7dd3fc', borderRadius: '6px', fontSize: '0.8rem', color: '#0891b2', fontWeight: 'bold' }}>
              Guía de Convivencia (Págs. 16-57)
            </span>
            <a href="https://youtu.be/CUxxV-v0rYg" target="_blank" rel="noreferrer" style={{ display: 'block', padding: '8px 12px', background: '#f0fdfa', border: '1px solid #7dd3fc', borderRadius: '6px', fontSize: '0.8rem', color: '#0891b2', textDecoration: 'none', fontWeight: 'bold' }}>
              Video Explicativo en YouTube
            </a>
            <span style={{ display: 'block', padding: '8px 12px', background: '#f0fdfa', border: '1px solid #7dd3fc', borderRadius: '6px', fontSize: '0.8rem', color: '#0891b2', fontWeight: 'bold' }}>
              Guía de Convivencia en Adolescencia
            </span>
          </div>
        </div>
        
        <blockquote style={{ margin: '0 0 1rem 0', padding: '12px 16px', borderLeft: '3px solid #0891b2', background: '#ffffff', borderRadius: '4px', fontSize: '0.9rem', color: '#334155', lineHeight: '1.6', textAlign: 'justify' }}>
          &ldquo;Imagina que caminas por la playa y dejas huellas en la arena. Aunque sigas caminando, esas huellas quedan visibles para otros. Así es tu identidad digital: todo lo que haces en internet deja una huella que otros pueden ver y seguir.&rdquo;
        </blockquote>

        <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: '1.6', margin: '0 0 0.75rem 0', textAlign: 'justify' }}>
          La identidad digital se construye a partir de cada interacción, fotografía, comentario o perfil que un usuario genera en los entornos virtuales a lo largo del tiempo. Este constructo no solo define la percepción pública de la persona en la red, sino que también determina su reputación digital ante instituciones educativas, laborales y sociales. Por esta razón, el análisis crítico de la información compartida resulta indispensable para salvaguardar la privacidad y la integridad personal (UNESCO, 2021).
        </p>

        <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: '1.6', margin: '0 0 1.25rem 0', textAlign: 'justify' }}>
          Asimismo, comprender la persistencia de los datos en internet permite a los jóvenes asumir una postura preventiva frente al almacenamiento masivo que realizan las plataformas tecnológicas. Ninguna acción en la red carece de consecuencias, y educar en ciudadanía digital implica reconocer que la huella virtual acompaña al individuo de manera permanente, moldeando oportunidades futuras y relaciones interpersonales (UNESCO, 2021).
        </p>

        <div style={{ borderTop: '1px solid #7dd3fc', paddingTop: '1.25rem', marginBottom: '1.25rem', background: '#ffffff', padding: '1rem', borderRadius: '8px' }}>
          <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 'bold', color: '#0891b2', marginBottom: '0.5rem' }}>
            Desglose las acciones o elementos que conforman su propia identidad digital (publicaciones, comentarios, fotografías o interacciones):
          </label>
          
          {ejemplosF1.map((ej, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Ejemplo ${index + 1} (ej. Fotografías compartidas en perfiles públicos)`}
              value={ej}
              onChange={(e) => actualizarEjemploF1(index, e.target.value)}
              style={{ width: '100%', padding: '10px 12px', marginBottom: '10px', borderRadius: '6px', border: '1px solid #7dd3fc', fontSize: '0.85rem', outline: 'none', background: '#ffffff', fontFamily: 'Arial, sans-serif' }}
            />
          ))}

          <button type="button" onClick={agregarCampoF1} style={{ background: 'transparent', color: '#0891b2', border: '1px solid #0891b2', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold', marginTop: '4px', fontFamily: 'Arial, sans-serif' }}>
            + Añadir otro elemento
          </button>
        </div>

        <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: '8px', border: '1px solid #7dd3fc' }}>
          <p style={{ fontSize: '0.9rem', color: '#334155', marginBottom: '1rem', lineHeight: '1.5', textAlign: 'justify', fontWeight: 'normal' }}>
            <strong>Reto de verificación:</strong> A partir del análisis anterior, indique cuál de los siguientes enunciados describe con precisión el impacto de la huella digital:
          </p>
          
          <form onSubmit={validarFase1} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#334155', cursor: 'pointer', lineHeight: '1.5', textAlign: 'justify' }}>
              <input type="radio" name="f1" value="a" onChange={e => setRespuesta1(e.target.value)} style={{ marginTop: '2px' }} /> 
              <span>A) Toda publicación o comentario eliminado en redes sociales desaparece por completo y de forma inmediata de la red.</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#334155', cursor: 'pointer', lineHeight: '1.5', textAlign: 'justify' }}>
              <input type="radio" name="f1" value="b" onChange={e => setRespuesta1(e.target.value)} style={{ marginTop: '2px' }} /> 
              <span>B) Los rastros digitales pueden ser recuperados, almacenados o compartidos por terceros, integrándose de forma permanente a la reputación en línea.</span>
            </label>

            <button type="submit" style={{ marginTop: '12px', background: '#0891b2', color: '#ffffff', border: 'none', padding: '10px 18px', borderRadius: '6px', cursor: 'pointer', alignSelf: 'flex-start', fontSize: '0.85rem', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
              Validar Fase 1
            </button>
          </form>

          {mensaje1 && (
            <div style={{ marginTop: '12px', padding: '12px', borderRadius: '6px', fontSize: '0.85rem', background: mensaje1.ok ? '#f0fdf4' : '#fef2f2', color: mensaje1.ok ? '#166534' : '#991b1b', border: mensaje1.ok ? '1px solid #bbf7d0' : '1px solid #fecaca', textAlign: 'justify' }}>
              {mensaje1.text}
            </div>
          )}
        </div>
      </div>


      {/* ================================================================= */}
      {/* FASE 2: AMENAZAS Y CIBERACOSO (AMARILLO)                          */}
      {/* ================================================================= */}
      <div style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid #fde047', borderRadius: '12px', background: '#fef9c3', opacity: faseDesbloqueada >= 2 ? 1 : 0.6 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <h4 style={{ color: '#ca8a04', margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>
            Fase 2: Identifique amenazas, ciberacoso y riesgos de navegación
          </h4>
          {faseDesbloqueada < 2 && (
            <span style={{ fontSize: '0.8rem', background: '#fef08a', color: '#ca8a04', padding: '3px 8px', borderRadius: '4px', fontWeight: 'bold' }}>Bloqueado</span>
          )}
        </div>

        {/* Banco de Material de Apoyo */}
        <div style={{ background: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid #fde047', marginBottom: '1.25rem' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#ca8a04', margin: '0 0 8px 0' }}>Banco de material de apoyo para el estudiante:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
            <span style={{ display: 'block', padding: '8px 12px', background: '#fefce8', border: '1px solid #fde047', borderRadius: '6px', fontSize: '0.8rem', color: '#ca8a04', fontWeight: 'bold' }}>
              Guía de Convivencia (Págs. 16-57)
            </span>
            <a href="https://youtu.be/CUxxV-v0rYg" target="_blank" rel="noreferrer" style={{ display: 'block', padding: '8px 12px', background: '#fefce8', border: '1px solid #fde047', borderRadius: '6px', fontSize: '0.8rem', color: '#ca8a04', textDecoration: 'none', fontWeight: 'bold' }}>
              Video Explicativo en YouTube
            </a>
            <span style={{ display: 'block', padding: '8px 12px', background: '#fefce8', border: '1px solid #fde047', borderRadius: '6px', fontSize: '0.8rem', color: '#ca8a04', fontWeight: 'bold' }}>
              Guía de Convivencia en Adolescencia
            </span>
          </div>
        </div>

        <blockquote style={{ margin: '0 0 1rem 0', padding: '12px 16px', borderLeft: '3px solid #ca8a04', background: '#ffffff', borderRadius: '4px', fontSize: '0.9rem', color: '#334155', lineHeight: '1.6', textAlign: 'justify' }}>
          &ldquo;Navegar por internet es como caminar por una ciudad: algunas calles son seguras y otras pueden tener peligros. Por eso, debemos aprender a reconocer señales y evitar lugares peligrosos.&rdquo;
        </blockquote>

        <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: '1.6', margin: '0 0 0.75rem 0', textAlign: 'justify' }}>
          Las amenazas digitales y el ciberacoso constituyen problemáticas complejas que impactan de manera directa la estabilidad emocional y psicológica de los adolescentes. La exposición a contenidos nocivos, el hostigamiento sistemático y la suplantación de identidad deterioran la convivencia pacífica en los centros educativos y reducen la confianza en los entornos en línea (UNICEF, 2020).
        </p>

        <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: '1.6', margin: '0 0 1.25rem 0', textAlign: 'justify' }}>
          Frente a esta realidad, la intervención pedagógica promueve el desarrollo de competencias de prevención y el fortalecimiento del rol del espectador activo. Los estudiantes aprenden que permanecer indiferentes ante la agresión digital valida la conducta nociva, por lo que adoptar prácticas de denuncia responsable y apoyo solidario a las víctimas se convierte en un pilar ético fundamental (UNICEF, 2020).
        </p>

        <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: '8px', border: '1px solid #fde047', marginBottom: '1.25rem' }}>
          <p style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#ca8a04', marginTop: '0', marginBottom: '0.5rem' }}>Análisis de caso hipotético:</p>
          <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: '1.6', margin: 0, fontStyle: 'italic', textAlign: 'justify' }}>
            &ldquo;Un estudiante recibe mensajes ofensivos constantes en un grupo público de la red social de su centro educativo, donde se burlan de su aspecto físico. Varios compañeros observan la situación pero deciden no intervenir para evitar problemas.&rdquo;
          </p>
        </div>

        <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: '8px', border: '1px solid #fde047' }}>
          <p style={{ fontSize: '0.9rem', color: '#334155', marginBottom: '1rem', lineHeight: '1.5', textAlign: 'justify', fontWeight: 'normal' }}>
            <strong>Reto de verificación:</strong> Identificando el riesgo y sus consecuencias según los protocolos de protección digital, ¿cuál debe ser la actuación correcta ante esta amenaza?
          </p>
          
          <form onSubmit={validarFase2} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#334155', cursor: faseDesbloqueada >= 2 ? 'pointer' : 'not-allowed', lineHeight: '1.5', textAlign: 'justify' }}>
              <input type="radio" name="f2" value="a" disabled={faseDesbloqueada < 2} onChange={e => setRespuesta2(e.target.value)} style={{ marginTop: '2px' }} /> 
              <span>A) Unirse a las burlas de forma anónima para evitar convertirse en la siguiente víctima del grupo.</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#334155', cursor: faseDesbloqueada >= 2 ? 'pointer' : 'not-allowed', lineHeight: '1.5', textAlign: 'justify' }}>
              <input type="radio" name="f2" value="b" disabled={faseDesbloqueada < 2} onChange={e => setRespuesta2(e.target.value)} style={{ marginTop: '2px' }} /> 
              <span>B) Ignorar por completo la situación argumentando que lo que ocurre en internet no afecta la vida real.</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#334155', cursor: faseDesbloqueada >= 2 ? 'pointer' : 'not-allowed', lineHeight: '1.5', textAlign: 'justify' }}>
              <input type="radio" name="f2" value="c" disabled={faseDesbloqueada < 2} onChange={e => setRespuesta2(e.target.value)} style={{ marginTop: '2px' }} /> 
              <span>C) No compartir el contenido, reportar la cuenta agresora ante la plataforma y respaldar a la víctima notificando a una autoridad o docente.</span>
            </label>

            <button type="submit" disabled={faseDesbloqueada < 2} style={{ marginTop: '12px', background: faseDesbloqueada >= 2 ? '#ca8a04' : '#cbd5e1', color: '#ffffff', border: 'none', padding: '10px 18px', borderRadius: '6px', cursor: faseDesbloqueada >= 2 ? 'pointer' : 'not-allowed', alignSelf: 'flex-start', fontSize: '0.85rem', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
              Validar Fase 2
            </button>
          </form>

          {mensaje2 && (
            <div style={{ marginTop: '12px', padding: '12px', borderRadius: '6px', fontSize: '0.85rem', background: mensaje2.ok ? '#f0fdf4' : '#fef2f2', color: mensaje2.ok ? '#166534' : '#991b1b', border: mensaje2.ok ? '1px solid #bbf7d0' : '1px solid #fecaca', textAlign: 'justify' }}>
              {mensaje2.text}
            </div>
          )}
        </div>
      </div>


      {/* ================================================================= */}
      {/* FASE 3: CONTRASEÑAS SEGURAS (MORADO)                             */}
      {/* ================================================================= */}
      <div style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid #d8b4fe', borderRadius: '12px', background: '#f3e8ff', opacity: faseDesbloqueada >= 3 ? 1 : 0.6 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <h4 style={{ color: '#411c75', margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>
            Fase 3: Complete el taller práctico de contraseñas seguras y verificación
          </h4>
          {faseDesbloqueada < 3 && (
            <span style={{ fontSize: '0.8rem', background: '#e9d5ff', color: '#411c75', padding: '3px 8px', borderRadius: '4px', fontWeight: 'bold' }}>Bloqueado</span>
          )}
        </div>

        {/* Banco de Material de Apoyo */}
        <div style={{ background: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid #d8b4fe', marginBottom: '1.25rem' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#411c75', margin: '0 0 8px 0' }}>Banco de material de apoyo para el estudiante:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
            <span style={{ display: 'block', padding: '8px 12px', background: '#faf5ff', border: '1px solid #d8b4fe', borderRadius: '6px', fontSize: '0.8rem', color: '#411c75', fontWeight: 'bold' }}>
              Guía de Convivencia (Págs. 16-57)
            </span>
            <a href="https://youtu.be/CUxxV-v0rYg" target="_blank" rel="noreferrer" style={{ display: 'block', padding: '8px 12px', background: '#faf5ff', border: '1px solid #d8b4fe', borderRadius: '6px', fontSize: '0.8rem', color: '#411c75', textDecoration: 'none', fontWeight: 'bold' }}>
              Video Explicativo en YouTube
            </a>
            <span style={{ display: 'block', padding: '8px 12px', background: '#faf5ff', border: '1px solid #d8b4fe', borderRadius: '6px', fontSize: '0.8rem', color: '#411c75', fontWeight: 'bold' }}>
              Guía de Convivencia en Adolescencia
            </span>
          </div>
        </div>

        <blockquote style={{ margin: '0 0 1rem 0', padding: '12px 16px', borderLeft: '3px solid #411c75', background: '#ffffff', borderRadius: '4px', fontSize: '0.9rem', color: '#334155', lineHeight: '1.6', textAlign: 'justify' }}>
          &ldquo;Las contraseñas se pueden comparar con las llaves de una casa: si usamos una llave sencilla, cualquiera puede entrar; una llave compleja protege mejor la casa, lo mismo ocurre en los entornos digitales.&rdquo;
        </blockquote>

        <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: '1.6', margin: '0 0 0.75rem 0', textAlign: 'justify' }}>
          La seguridad de la información en los sistemas tecnológicos depende en gran medida de las credenciales de acceso utilizadas por los usuarios. En el ámbito educativo de nivel medio, se observa frecuentemente el empleo de combinaciones predecibles, fechas conmemorativas o nombres propios, lo cual facilita ataques informáticos automatizados como la fuerza bruta o la adivinación de claves (García & Martínez, 2022).
        </p>

        <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: '1.6', margin: '0 0 1.25rem 0', textAlign: 'justify' }}>
          Para mitigar estas vulnerabilidades, resulta indispensable instruir a los estudiantes en la creación de frases de paso robustas que integren caracteres alfanuméricos y símbolos especiales. La adopción de estas medidas técnicas previene la usurpación de identidad y garantiza un control adecuado sobre los espacios virtuales personales e institucionales (García & Martínez, 2022).
        </p>

        {/* Lista de 10 ejemplos SIN color verde de fondo, solo contorno amarillo en los cuadritos */}
        <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: '8px', border: '1px solid #d8b4fe', marginBottom: '1.25rem' }}>
          <p style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#411c75', marginTop: 0, marginBottom: '0.5rem' }}>
            Criterios clave para una contraseña segura:
          </p>
          <ul style={{ fontSize: '0.85rem', color: '#475569', paddingLeft: '20px', margin: '0 0 1rem 0', lineHeight: '1.6', textAlign: 'justify' }}>
            <li>Longitud mínima de 10 a 12 caracteres.</li>
            <li>Combinación obligatoria de letras mayúsculas y minúsculas.</li>
            <li>Inclusión de números y símbolos especiales (ej. #, $, %, &).</li>
            <li>Evitar datos personales obvios (fechas de nacimiento, nombres de mascotas o secuencias numéricas).</li>
          </ul>

          <p style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#411c75', marginBottom: '0.5rem' }}>
            Banco de referencia: 10 estructuras de contraseñas seguras:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px', background: '#faf5ff', padding: '12px', borderRadius: '6px', border: '1px solid #d8b4fe' }}>
            <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: '#411c75', background: 'transparent', border: '1px solid #eab308', padding: '6px 8px', borderRadius: '4px', textAlign: 'center' }}>1. C#mpr@2026#Secure</span>
            <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: '#411c75', background: 'transparent', border: '1px solid #eab308', padding: '6px 8px', borderRadius: '4px', textAlign: 'center' }}>2. L!berty&98Key*</span>
            <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: '#411c75', background: 'transparent', border: '1px solid #eab308', padding: '6px 8px', borderRadius: '4px', textAlign: 'center' }}>3. T$chNet$45#Ed</span>
            <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: '#411c75', background: 'transparent', border: '1px solid #eab308', padding: '6px 8px', borderRadius: '4px', textAlign: 'center' }}>4. V@lent!a#2026%</span>
            <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: '#411c75', background: 'transparent', border: '1px solid #eab308', padding: '6px 8px', borderRadius: '4px', textAlign: 'center' }}>5. Pl@nCl@se*99Land</span>
            <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: '#411c75', background: 'transparent', border: '1px solid #eab308', padding: '6px 8px', borderRadius: '4px', textAlign: 'center' }}>6. M#ndial$87Pass</span>
            <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: '#411c75', background: 'transparent', border: '1px solid #eab308', padding: '6px 8px', borderRadius: '4px', textAlign: 'center' }}>7. D!gital*Safe#21</span>
            <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: '#411c75', background: 'transparent', border: '1px solid #eab308', padding: '6px 8px', borderRadius: '4px', textAlign: 'center' }}>8. Soluc!on$#05Key</span>
            <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: '#411c75', background: 'transparent', border: '1px solid #eab308', padding: '6px 8px', borderRadius: '4px', textAlign: 'center' }}>9. R#dInformatica!3</span>
            <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: '#411c75', background: 'transparent', border: '1px solid #eab308', padding: '6px 8px', borderRadius: '4px', textAlign: 'center' }}>10. Edu#Tecnologia*77</span>
          </div>
        </div>

        <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: '8px', border: '1px solid #d8b4fe', marginBottom: '1.25rem' }}>
          <p style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#411c75', marginTop: 0, marginBottom: '0.5rem' }}>
            Simulador interactivo de verificación de fuerza de contraseña:
          </p>
          <form onSubmit={verificarFuerzaPw} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <input 
              type="text" 
              disabled={faseDesbloqueada < 3}
              placeholder="Escriba una contraseña robusta..."
              value={nuevaPassword}
              onChange={(e) => setNuevaPassword(e.target.value)}
              style={{ flex: 1, minWidth: '200px', padding: '10px 12px', borderRadius: '6px', border: '1px solid #d8b4fe', fontSize: '0.85rem', outline: 'none', fontFamily: 'Arial, sans-serif' }}
            />
            <button 
              type="submit"
              disabled={faseDesbloqueada < 3}
              style={{ background: faseDesbloqueada >= 3 ? '#411c75' : '#cbd5e1', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '6px', fontWeight: 'bold', cursor: faseDesbloqueada >= 3 ? 'pointer' : 'not-allowed', fontSize: '0.85rem', fontFamily: 'Arial, sans-serif' }}
            >
              Evaluar Fortaleza
            </button>
          </form>

          {evaluacionPw && (
            <div style={{ marginTop: '10px', padding: '10px', borderRadius: '6px', fontSize: '0.85rem', background: evaluacionPw.ok ? '#f0fdf4' : '#fef2f2', color: evaluacionPw.ok ? '#166534' : '#991b1b', border: evaluacionPw.ok ? '1px solid #bbf7d0' : '1px solid #fecaca', textAlign: 'justify' }}>
              {evaluacionPw.text}
            </div>
          )}
        </div>

        <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: '8px', border: '1px solid #d8b4fe' }}>
          <p style={{ fontSize: '0.9rem', color: '#334155', marginBottom: '1rem', lineHeight: '1.5', textAlign: 'justify', fontWeight: 'normal' }}>
            <strong>Reto de verificación teórica:</strong> ¿Por qué se desaconseja utilizar fechas de nacimiento o nombres sencillos como contraseñas en cuentas institucionales o personales?
          </p>
          
          <form onSubmit={validarFase3Reto} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#334155', cursor: faseDesbloqueada >= 3 ? 'pointer' : 'not-allowed', lineHeight: '1.5', textAlign: 'justify' }}>
              <input type="radio" name="f3" value="a" disabled={faseDesbloqueada < 3} onChange={e => setRespuesta3(e.target.value)} style={{ marginTop: '2px' }} /> 
              <span>A) Porque los sistemas modernos impiden el acceso a cualquier usuario menor de edad.</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#334155', cursor: faseDesbloqueada >= 3 ? 'pointer' : 'not-allowed', lineHeight: '1.5', textAlign: 'justify' }}>
              <input type="radio" name="f3" value="b" disabled={faseDesbloqueada < 3} onChange={e => setRespuesta3(e.target.value)} style={{ marginTop: '2px' }} /> 
              <span>B) Porque consumen más memoria RAM en los navegadores web tradicionales.</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#334155', cursor: faseDesbloqueada >= 3 ? 'pointer' : 'not-allowed', lineHeight: '1.5', textAlign: 'justify' }}>
              <input type="radio" name="f3" value="c" disabled={faseDesbloqueada < 3} onChange={e => setRespuesta3(e.target.value)} style={{ marginTop: '2px' }} /> 
              <span>C) Porque son sumamente predecibles y fáciles de descifrar mediante ataques informáticos automatizados (Google Académico: García & Martínez, 2022).</span>
            </label>

            <button type="submit" disabled={faseDesbloqueada < 3} style={{ marginTop: '12px', background: faseDesbloqueada >= 3 ? '#411c75' : '#cbd5e1', color: '#ffffff', border: 'none', padding: '10px 18px', borderRadius: '6px', cursor: faseDesbloqueada >= 3 ? 'pointer' : 'not-allowed', alignSelf: 'flex-start', fontSize: '0.85rem', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
              Validar Fase 3
            </button>
          </form>

          {mensaje3 && (
            <div style={{ marginTop: '12px', padding: '12px', borderRadius: '6px', fontSize: '0.85rem', background: mensaje3.ok ? '#f0fdf4' : '#fef2f2', color: mensaje3.ok ? '#166534' : '#991b1b', border: mensaje3.ok ? '1px solid #bbf7d0' : '1px solid #fecaca', textAlign: 'justify' }}>
              {mensaje3.text}
            </div>
          )}
        </div>
      </div>


      {/* ================================================================= */}
      {/* FASE 4: CONVIVENCIA DIGITAL (NARANJA)                             */}
      {/* ================================================================= */}
      <div style={{ marginBottom: '1.5rem', padding: '1.5rem', border: '1px solid #fdba74', borderRadius: '12px', background: '#fff7ed', opacity: faseDesbloqueada >= 4 ? 1 : 0.6 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <h4 style={{ color: '#c2410c', margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>
            Fase 4: Valide sus conclusiones sobre buenas prácticas de convivencia digital
          </h4>
          {faseDesbloqueada < 4 && (
            <span style={{ fontSize: '0.8rem', background: '#ffedd5', color: '#c2410c', padding: '3px 8px', borderRadius: '4px', fontWeight: 'bold' }}>Bloqueado</span>
          )}
        </div>

        {/* Banco de Material de Apoyo */}
        <div style={{ background: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid #fdba74', marginBottom: '1.25rem' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#c2410c', margin: '0 0 8px 0' }}>Banco de material de apoyo para el estudiante:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
            <span style={{ display: 'block', padding: '8px 12px', background: '#fffbeb', border: '1px solid #fdba74', borderRadius: '6px', fontSize: '0.8rem', color: '#c2410c', fontWeight: 'bold' }}>
              Guía de Convivencia (Págs. 16-57)
            </span>
            <a href="https://youtu.be/CUxxV-v0rYg" target="_blank" rel="noreferrer" style={{ display: 'block', padding: '8px 12px', background: '#fffbeb', border: '1px solid #fdba74', borderRadius: '6px', fontSize: '0.8rem', color: '#c2410c', textDecoration: 'none', fontWeight: 'bold' }}>
              Video Explicativo en YouTube
            </a>
            <span style={{ display: 'block', padding: '8px 12px', background: '#fffbeb', border: '1px solid #fdba74', borderRadius: '6px', fontSize: '0.8rem', color: '#c2410c', fontWeight: 'bold' }}>
              Guía de Convivencia en Adolescencia
            </span>
          </div>
        </div>

        <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: '1.6', margin: '0 0 0.75rem 0', textAlign: 'justify' }}>
          La convivencia digital armónica se sustenta en el ejercicio responsable de la libertad de expresión, el respeto a la intimidad y la construcción colectiva de normas de respeto mutuo en los espacios virtuales. Las comunidades escolares actuales requieren marcos normativos claros que fomenten la empatía y la resolución pacífica de conflictos tanto en el espacio físico como en las plataformas telemáticas (UNESCO, 2022).
        </p>

        <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: '1.6', margin: '0 0 1.25rem 0', textAlign: 'justify' }}>
          Promover buenas prácticas digitales previene conductas de riesgo y consolida una ciudadanía informada capaz de discernir entre la confrontación y el diálogo constructivo. La corresponsabilidad entre docentes, estudiantes y familias garantiza un ecosistema digital seguro e inclusivo (UNESCO, 2022).
        </p>

        {/* Ejercicio interactivo de relacionar conceptos */}
        <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: '8px', border: '1px solid #fdba74', marginBottom: '1.25rem' }}>
          <p style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#c2410c', marginTop: 0, marginBottom: '0.5rem' }}>
            Ejercicio interactivo — Relacione cada concepto con su definición correcta:
          </p>
          <form onSubmit={validarMatch} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.85rem', color: '#334155', flex: 1 }}>1. Rastro digital permanente en la red:</span>
              <select value={match1} onChange={(e) => setMatch1(e.target.value)} disabled={faseDesbloqueada < 4} style={{ padding: '6px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.85rem', fontFamily: 'Arial, sans-serif' }}>
                <option value="">Seleccione concepto...</option>
                <option value="huella">Huella Digital</option>
                <option value="ciberacoso">Ciberacoso</option>
                <option value="password">Contraseña Segura</option>
              </select>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.85rem', color: '#334155', flex: 1 }}>2. Acoso u hostigamiento reiterado a través de medios digitales:</span>
              <select value={match2} onChange={(e) => setMatch2(e.target.value)} disabled={faseDesbloqueada < 4} style={{ padding: '6px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.85rem', fontFamily: 'Arial, sans-serif' }}>
                <option value="">Seleccione concepto...</option>
                <option value="huella">Huella Digital</option>
                <option value="ciberacoso">Ciberacoso</option>
                <option value="password">Contraseña Segura</option>
              </select>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.85rem', color: '#334155', flex: 1 }}>3. Combinación robusta para evitar accesos no autorizados:</span>
              <select value={match3} onChange={(e) => setMatch3(e.target.value)} disabled={faseDesbloqueada < 4} style={{ padding: '6px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.85rem', fontFamily: 'Arial, sans-serif' }}>
                <option value="">Seleccione concepto...</option>
                <option value="huella">Huella Digital</option>
                <option value="ciberacoso">Ciberacoso</option>
                <option value="password">Contraseña Segura</option>
              </select>
            </div>

            <button type="submit" disabled={faseDesbloqueada < 4} style={{ background: faseDesbloqueada >= 4 ? '#f97316' : '#cbd5e1', color: '#fff', border: 'none', padding: '6px 14px', borderRadius: '4px', fontWeight: 'bold', cursor: faseDesbloqueada >= 4 ? 'pointer' : 'not-allowed', fontSize: '0.85rem', alignSelf: 'flex-start', marginTop: '4px', fontFamily: 'Arial, sans-serif' }}>
              Comprobar Relaciones
            </button>
          </form>

          {resultadoMatch && (
            <div style={{ marginTop: '10px', padding: '8px', borderRadius: '4px', fontSize: '0.85rem', background: resultadoMatch.ok ? '#f0fdf4' : '#fef2f2', color: resultadoMatch.ok ? '#166534' : '#991b1b', textAlign: 'justify' }}>
              {resultadoMatch.text}
            </div>
          )}
        </div>

        {/* Bloque de preguntas reflexivas solicitadas */}
        <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: '8px', border: '1px solid #fdba74', marginBottom: '1.25rem' }}>
          <p style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#c2410c', marginTop: 0, marginBottom: '0.75rem' }}>
            Preguntas orientadoras para la reflexión grupal:
          </p>
          <ul style={{ fontSize: '0.85rem', color: '#334155', paddingLeft: '20px', margin: '0 0 1rem 0', lineHeight: '1.6', textAlign: 'justify' }}>
            <li>¿Por qué es importante respetar la privacidad ajena en internet?</li>
            <li>¿Cómo podemos prevenir activamente el ciberacoso en nuestra comunidad educativa?</li>
            <li>¿Qué acciones concretas se deben tomar al presenciar una conducta inapropiada o violenta en la red?</li>
          </ul>

          <form onSubmit={finalizarFase4} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: '#334155', marginBottom: '4px' }}>
                Reflexión sobre la privacidad ajena:
              </label>
              <textarea 
                disabled={faseDesbloqueada < 4}
                rows="2"
                placeholder="Escriba su argumento reflexivo..."
                value={reflexionPrivacidad}
                onChange={(e) => setReflexionPrivacidad(e.target.value)}
                style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', outline: 'none', fontFamily: 'Arial, sans-serif' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: '#334155', marginBottom: '4px' }}>
                Estrategia para prevenir el ciberacoso y actuar ante conductas inapropiadas:
              </label>
              <textarea 
                disabled={faseDesbloqueada < 4}
                rows="2"
                placeholder="Escriba sus conclusiones de prevención..."
                value={reflexionCiberacoso}
                onChange={(e) => setReflexionCiberacoso(e.target.value)}
                style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', outline: 'none', fontFamily: 'Arial, sans-serif' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: '#334155', marginBottom: '4px' }}>
                Listado de buenas prácticas para el documento común de convivencia:
              </label>
              {buenasPracticas.map((bp, index) => (
                <input
                  key={index}
                  type="text"
                  disabled={faseDesbloqueada < 4}
                  placeholder={`Buena práctica ${index + 1} (ej. Fomentar el respeto y la empatía en foros grupales)`}
                  value={bp}
                  onChange={(e) => actualizarPractica(index, e.target.value)}
                  style={{ width: '100%', padding: '8px 12px', marginBottom: '8px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', outline: 'none', background: '#ffffff', fontFamily: 'Arial, sans-serif' }}
                />
              ))}
              <button 
                type="button" 
                disabled={faseDesbloqueada < 4}
                onClick={() => setBuenasPracticas([...buenasPracticas, ''])}
                style={{ background: 'transparent', color: '#f97316', border: '1px solid #f97316', padding: '5px 10px', borderRadius: '4px', cursor: faseDesbloqueada >= 4 ? 'pointer' : 'not-allowed', fontSize: '0.8rem', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}
              >
                + Agregar otra buena práctica
              </button>
            </div>

            <button 
              type="submit"
              disabled={faseDesbloqueada < 4}
              style={{ marginTop: '8px', background: faseDesbloqueada >= 4 ? '#f97316' : '#cbd5e1', color: '#fff', border: 'none', padding: '10px 18px', borderRadius: '6px', fontWeight: 'bold', cursor: faseDesbloqueada >= 4 ? 'pointer' : 'not-allowed', fontSize: '0.85rem', alignSelf: 'flex-start', fontFamily: 'Arial, sans-serif' }}
            >
              Consolidar Documento Común
            </button>
          </form>

          {mensaje4 && (
            <div style={{ marginTop: '12px', padding: '12px', borderRadius: '6px', fontSize: '0.85rem', background: mensaje4.ok ? '#f0fdf4' : '#fef2f2', color: mensaje4.ok ? '#166534' : '#991b1b', border: mensaje4.ok ? '1px solid #bbf7d0' : '1px solid #fecaca', textAlign: 'justify' }}>
              {mensaje4.text}
            </div>
          )}
        </div>
      </div>

      {/* Bloque final de instrucción solicitado */}
      <div style={{ marginTop: '1.5rem', padding: '1.25rem', borderRadius: '8px', textAlign: 'center', background: '#f8fafc', border: '1px solid #cbd5e1' }}>
        <p style={{ color: '#411c75', fontWeight: 'bold', fontSize: '0.95rem', margin: 0, fontFamily: 'Arial, sans-serif' }}>
          Realiza la siguiente evaluación al finalizar todas las fases de la secuencia.
        </p>
      </div>

      {/* Indicador Global Final de Estado */}
      <div style={{ marginTop: '1rem', padding: '1rem', borderRadius: '8px', textAlign: 'center', background: faseDesbloqueada >= 4 ? '#f0fdf4' : '#f8fafc', border: faseDesbloqueada >= 4 ? '1px solid #bbf7d0' : '1px solid #e2e8f0' }}>
        {faseDesbloqueada >= 4 ? (
          <span style={{ color: '#166534', fontWeight: 'bold', fontSize: '0.9rem' }}>
            Secuencia didáctica completada en su totalidad. Todas las fases del Escape Room han sido validadas.
          </span>
        ) : (
          <span style={{ color: '#475569', fontSize: '0.9rem', fontWeight: 'normal' }}>
            Complete las fases anteriores en orden secuencial para desbloquear el módulo final de convivencia digital.
          </span>
        )}
      </div>

    </div>
  );
}