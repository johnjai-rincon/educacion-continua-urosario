
(function(){
  var $=function(s){return document.querySelector(s)}, $$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
  var VIEWS=['inicio','cursos','empresas','consultoria','simulacion','informacion','docentes','programa'];
  var ACC={'Negocios':'#ff9944','Derecho':'#54bae2','Tecnología':'#3a8cef','Salud':'#209b89','Innovación':'#9897d3','Bienestar':'#85d3c6','Finanzas':'#ff9944','Ciencias sociales':'#b8ad2e','Educación':'#b8ad2e'};

  var PATHS=[
    ['Oferta académica','Diplomados, cursos, seminarios y talleres avalados por nuestras facultades.','Ver la oferta','cursos'],
    ['Empresas','Formación corporativa a la medida con reporte de impacto y respaldo institucional.','Soluciones B2B','empresas'],
        ['Centro Avanzado de Simulación','Entrenamiento clínico con simuladores de alta fidelidad y cursos certificados AHA.','Conócelo','simulacion'],
    ['UR Kids & Teens','Experiencias universitarias que despiertan la curiosidad de niños y adolescentes.','Programas','cursos'],
    ['UR Senior','Formación para mayores de 60 años: aprendizaje continuo y participación activa.','Conócelo','cursos'],
    ['Executive Education','Programas ejecutivos de la GSB para la alta dirección.','Explorar','cursos'],
    ['Learning Hub','Rutas ágiles de actualización en negocios con metodologías activas.','Explorar','cursos']
  ];
  var TRENDS=[['Áreas de la Salud y Ciencias de la Vida',2,'#209b89','heart'],['Aspectos Legales y Gobernabilidad',2,'#ff9944','bank'],['Transformación Digital, Ingeniería de Datos y TIC´S',2,'#3a8cef','chip'],['Ciencias Humanas',2,'#54bae2','book'],['Creatividad, Innovación y Emprendimiento',5,'#9897d3','spark']];
  var NEXT=[
    {t:'Body Mindfulness - Cuerpo Consciente',tipo:'Seminario',area:'Bienestar',cat:'Crecimiento Personal y Tiempo Libre',fac:'Escuela de Medicina y Ciencias de la Salud',mod:'Remoto',ini:'19 de septiembre',dur:'5 semanas',p:'330.000',d:'Prácticas de atención plena para conectar cuerpo y mente.'},
    {t:'Diplomado en Finanzas para no Financieros',tipo:'Diplomado',area:'Finanzas',cat:'Área Financiera y Economía',fac:'Facultad de Economía',mod:'Remoto',ini:'21 de septiembre',dur:'13 semanas',p:'2.900.000',d:'Lee estados financieros y decide con criterio.'},
    {t:'Práctico de Microsoft Power BI: tableros de gestión y visualización',tipo:'Taller',area:'Tecnología',cat:'Transformación Digital, Ingeniería de Datos y TIC',fac:'Facultad de Economía',mod:'Remoto',ini:'29 de septiembre',dur:'4 semanas',p:'1.610.000',d:'Construye tableros de gestión desde tus propios datos.'}
  ];
  var PREMIUM=[['Diplomado en Liderazgo Ejecutivo','120 horas · 4 meses','4.500.000'],['Programa Ejecutivo en Derecho Corporativo','160 horas · 6 meses','6.200.000'],['Diplomado en Transformación Digital','100 horas · 3 meses','3.800.000']];
  var CAT=[
    {t:'Liderazgo ejecutivo y gestión estratégica',fac:'Escuela de Administración',area:'Negocios',d:'Lidera equipos de alto rendimiento con visión estratégica.',r:'4.9',n:'1.240',h:48,tipo:'Diplomado',p:'1.850.000',nivel:'Ejecutivo',mod:'En vivo',prem:true},
    {t:'Derecho corporativo y contratación pública',fac:'Facultad de Jurisprudencia',area:'Derecho',d:'Domina el marco legal de los negocios en Colombia y la región.',r:'4.8',n:'890',h:36,tipo:'Diplomado',p:'1.450.000',nivel:'Avanzado',mod:'Híbrido'},
    {t:'Transformación digital para líderes',fac:'Escuela de Ingeniería',area:'Tecnología',d:'Conduce la digitalización de tu organización con criterio estratégico.',r:'4.7',n:'2.100',h:32,tipo:'Curso',p:'1.290.000',nivel:'Intermedio',mod:'On-demand'},
    {t:'Gestión y actualización en ciencias de la salud',fac:'Escuela de Medicina y Ciencias de la Salud',area:'Salud',d:'Para profesionales de la salud que lideran servicios y equipos.',r:'4.9',n:'680',h:40,tipo:'Diplomado',p:'1.620.000',nivel:'Avanzado',mod:'Híbrido'},
    {t:'Finanzas para no financieros',fac:'Escuela de Administración',area:'Negocios',d:'Lee estados financieros y toma decisiones con seguridad.',r:'4.8',n:'3.450',h:18,tipo:'Curso',p:'690.000',nivel:'Introductorio',mod:'On-demand'},
    {t:'Innovación y emprendimiento corporativo',fac:'Escuela de Administración',area:'Innovación',d:'Metodologías ágiles para crear valor desde dentro de la empresa.',r:'4.7',n:'1.580',h:24,tipo:'Curso',p:'890.000',nivel:'Intermedio',mod:'En vivo'}
  ];
  CAT.forEach(function(c,i){c.id='c'+i});NEXT.forEach(function(c,i){c.id='n'+i});
  var FILTERS={area:['Negocios','Derecho','Tecnología','Salud','Educación','Innovación','Ciencias sociales'],nivel:['Introductorio','Intermedio','Avanzado','Ejecutivo'],mod:['On-demand','En vivo','Híbrido']};
  var FLABEL={area:'Área',nivel:'Nivel',mod:'Modalidad'};
  var PEOPLE=[
    {n:'Lina María Echeverri Cañas',f:'Economía y Negocios',c:'PhD · Top Voice LATAM en marketing y branding',b:'Estratega y profesora de marketing y branding con más de 27 años como líder académica y consultora. PhD de la Universidad de León y MBA del Tecnológico de Monterrey.',d:'Marketing para empresas de servicios de salud — GSB Learning Hub'},
    {n:'Erick Rincón Cárdenas',f:'Jurisprudencia',c:'Doctor en Derecho · Experto en Fintech y Legaltech',b:'Abogado rosarista y Doctor en Derecho de la Universidad Europea de Madrid. Dirige la Maestría en Negocios y Derecho del GSB y el TicTank de la Universidad.',d:'Seminario Legal Project Management — Jurisprudencia'},
    {n:'Gloria Amparo Rodríguez',f:'Jurisprudencia',c:'Magistrada JEP · Doctora en Sociología Jurídica',b:'Profesora titular e investigadora de la Facultad de Jurisprudencia. Ha sido conjuez de la Corte Constitucional y es magistrada de la Jurisdicción Especial para la Paz.',d:'MasterURclass — Dirección de Educación Digital'},
    {n:'Diana Carolina Páez Rubiano',f:'Salud',c:'Mg. en Salud Pública · Coach de salud y bienestar',b:'Fisioterapeuta rosarista y Magíster en Salud Pública de la Universidad de Washington en St. Louis. Coach certificada por la Federación Internacional de Coaching.',d:'Seminario Coaching y liderazgo colaborativo — Escuela de Medicina y Cs. de la Salud'},
    {n:'Rafael Bisquerra Alzina',f:'Bienestar',c:'Catedrático emérito U. de Barcelona · Educación emocional',b:'Presidente de la Red Internacional de Educación Emocional y Bienestar y catedrático emérito de la Universidad de Barcelona.',d:'Competencias emocionales en las organizaciones — Decanatura del Medio Universitario'},
    {n:'Andrés Roa',f:'Ciencias e Ingeniería',c:'Mg. en Gerencia de la Información · Consultor SAP',b:'Cofundador del primer centro de innovación SAP Next Gen Chapter Lab de la región. Consultor e instructor certificado por SAP con más de 13 años de experiencia académica.',d:'Gestión ágil de proyectos — Escuela de Ciencias e Ingeniería'},
    {n:'José Hernán Castro Leguízamo',f:'Ciencias e Ingeniería',c:'Analítica y visualización de datos · Power BI',b:'Administrador de empresas y auditor interno ISO 42001, con trayectoria financiera, académica y de consultoría. Fue asistente de auditoría en EY.',d:'Análisis y visualización de datos con Power BI — Escuela de Ingeniería, Ciencia y Tecnología'},
    {n:'Sergio Andrés Pulgarín Molina',f:'Economía y Negocios',c:'Doctor en Ciencias de la Dirección',b:'Profesor distinguido de la Universidad y profesor visitante en la Universidad de Leipzig. Lideró el Plan Integral de Desarrollo como Director de Planeación y Efectividad Institucional.',d:'MasterURclass — Dirección de Educación Digital'},
    {n:'Gladys Galvis López',f:'Salud',c:'Doctora en Educación · Medicina alternativa',b:'Terapeuta ocupacional de la Universidad Nacional y Doctora en Educación. Coordina la academia de educación continua en Medicina Alternativa.',d:'Terapia neural y odontología neurofocal — Escuela de Medicina y Cs. de la Salud'},
    {n:'Héctor Daniel Tovar Lasso',f:'Creación',c:'Artista integral de Teatro Musical UR–MISI',b:'Egresado del pregrado en Teatro Musical del Rosario en convenio con MISI. Ha trabajado como bailarín, cantante y actor con MISI Producciones.',d:'Tap infantil — Facultad de Creación · MISI'}
  ];
  var FULLB=[
    'Estratega, speaker y profesora reconocida en América Latina por transformar el marketing y el branding en experiencias humanas de impacto real. PhD en Integración y Desarrollo Económico y Territorial (Universidad de León) y MBA del Tecnológico de Monterrey, con más de 27 años de trayectoria como líder académica y consultora. Ha recibido más de 25 premios nacionales e internacionales, entre ellos el Premio Portafolio a Mejor Profesora Universitaria en Colombia y el reconocimiento de LinkedIn como una de las 10 voces más influyentes de América Latina (Top Voice LATAM).',
    'Experto en Fintech, derecho financiero, comercio electrónico y legaltech. Abogado de la Universidad del Rosario, con posgrados en Derecho Financiero y Derecho Contractual, y Doctor en Derecho de la Universidad Europea de Madrid. Es Director de la Maestría en Negocios y Derecho del GSB de la Universidad del Rosario, Director del TicTank de la misma Universidad y Profesor Asociado.',
    'Profesora titular e investigadora de la Facultad de Jurisprudencia. Abogada y Doctora (Ph.D.) en Sociología Jurídica e Instituciones Políticas (Universidad Externado), Magíster en Medio Ambiente y Desarrollo (Universidad Nacional). Ha sido conjuez de la Corte Constitucional y actualmente es magistrada de la Jurisdicción Especial para la Paz. Ganadora del premio internacional «Environmental Peacebuilding in Practice» por su trabajo en derecho ambiental, consulta previa y derechos étnicos.',
    'Fisioterapeuta especialista en ejercicio físico para la salud de la Universidad del Rosario y Magíster en Salud Pública de la Universidad de Washington en St. Louis (EE. UU.). Coach Ontológico y de Salud y Bienestar certificada por la Federación Internacional de Coaching. Profesora de cátedra de la Universidad del Rosario, apasionada por integrar la evidencia científica a la práctica a través de la investigación.',
    'Presidente de la RIEEB (Red Internacional de Educación Emocional y Bienestar), catedrático emérito de la Universidad de Barcelona y Doctor Honoris Causa por el CELEI de Chile. Doctor en Ciencias de la Educación, fundó y dirigió el GROP, grupo de investigación en orientación psicopedagógica con el que se ha posicionado como uno de los mayores expertos internacionales en educación emocional.',
    'Cofundador del primer Centro de Innovación SAP Next Gen Chapter Lab de la región. Magíster en Gerencia de la Información e Innovación, Administrador de Empresas y docente de la Universidad del Rosario en Transformación Digital e Industria 4.0. Consultor e instructor certificado internacionalmente por SAP SE, con más de 13 años de experiencia académica en la enseñanza de soluciones SAP.',
    'Administrador de Empresas, Especialista en Pedagogía y Docencia y Auditor Interno en ISO 42001:2023, con trayectoria en los campos financiero, administrativo, académico y de consultoría. Experiencia como Asistente de Auditoría en Ernst & Young (EY) con enfoque en el sector financiero, y sólida práctica en talento humano, formación para el trabajo, emprendimiento, innovación social y estrategias de transformación digital.',
    'Doctor en Ciencias de la Dirección y Magíster en Dirección y Gerencia de Empresas de la Universidad del Rosario. Profesor distinguido de la Universidad e International Visiting Professor del SEPT Program de la Universidad de Leipzig (Alemania). Como Director de Planeación y Efectividad Institucional lideró la construcción y despliegue del Plan Integral de Desarrollo de la Universidad en el marco de la Ruta 2025.',
    'Investigadora y Doctora en Educación (Universidad La Salle de Costa Rica), Magíster en Educación, en Psicología Holista y en Coaching Personal. Terapeuta Ocupacional de la Universidad Nacional de Colombia, con especialización en Neurorrehabilitación Multifactorial Intensiva (CIREN, La Habana) y certificaciones en Medicina Tradicional China y Terapia Floral. Coordina la academia de educación continua en Medicina Alternativa de la Universidad del Rosario.',
    'Artista integral del Teatro Musical, egresado del pregrado de la Universidad del Rosario en convenio con MISI, con énfasis en danza (ballet, jazz, tap) y canto. Becario del «Broadway Boot Camp» del Institute for American Musical Theatre (Nueva York). Ha trabajado con la compañía profesional de MISI Producciones como bailarín, cantante y actor en musicales como «Annie», «Godspell» y «La Bella y la Bestia» de Disney.'];
  var URLS=['https://educacioncontinua.urosario.edu.co/gsb-learning-hub/curso/marketing-para-empresas-servicios-salud','https://educacioncontinua.urosario.edu.co/jurisprudencia/seminario/legal-project-management','https://educacioncontinua.urosario.edu.co/direccion-educacion-digital/seminario/masterurclass','https://educacioncontinua.urosario.edu.co/escuela-medicina-ciencias-salud/seminario/coaching-liderazgo-colaborativo','https://educacioncontinua.urosario.edu.co/decanatura-medio-universitario/curso/competencias-emocionales-organizaciones','https://educacioncontinua.urosario.edu.co/escuela-ciencias-e-ingenieria/curso/gestion-agil-proyectos','https://educacioncontinua.urosario.edu.co/escuela-ingenieria-ciencias-tecnologia/curso/analisis-visualizacion-datos-con-power-bi-informacion-decision','https://educacioncontinua.urosario.edu.co/direccion-educacion-digital/seminario/masterurclass','https://educacioncontinua.urosario.edu.co/escuela-medicina-ciencias-salud/curso/terapia-neural-odontologia-neurofocal-una-vision-holista-ser-humano','https://educacioncontinua.urosario.edu.co/facultad-creacion/misi/curso/tap-infantil'];
  PEOPLE.forEach(function(p,i){p.b=FULLB[i];p.u=URLS[i]});
  var HOME_P=[0,1,2,3,4], CONS=[0,5,6,1,7], CONS_P=[2,3,4,8,9];
  var QUOTES=[['Heber García','Administrador de Empresas','Testimonio sobre su formación en Mindfulness y el aporte a su vida personal y profesional.'],['Laura Ximena Villate','Fisioterapeuta','Testimonio sobre el Diplomado Virtual en Calificación de la Pérdida de Capacidad Laboral.'],['Laura Alejandra Castaño','Administradora de Negocios Internacionales','Testimonio sobre el Diplomado de Marketing Digital y su metodología práctica.']];
  var I={
    heart:'<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
    bank:'<path d="M4 10h16L12 4zM6 10v7M10 10v7M14 10v7M18 10v7M4 20h16"/>',
    book:'<path d="M12 6c-2-1.5-5-2-8-1.5v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5v-13c-3-.5-6 0-8 1.5zM12 6v13"/>',
    spark:'<path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4"/>',
    target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.3c2.2.8 3.5 2.8 3.5 5.7"/>',
    chart:'<path d="M4 20V4M4 20h16"/><path d="M8 16v-5M12 16V8M16 16v-8"/>',
    badge:'<circle cx="12" cy="9" r="6"/><path d="M8.5 14l-1.5 7 5-3 5 3-1.5-7"/>',
    search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    compass:'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    building:'<path d="M4 21V9l8-5 8 5v12"/><path d="M9 21v-6h6v6M4 21h16"/>',
    chip:'<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>',
    shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>'
  };
  var EMP=[['target','Programas a la medida','Diseñamos contenidos para tu industria y nivel de los equipos.'],['users','Licencias y cohortes','Asignación flexible, cohortes cerradas y mentorías grupales.'],['chart','Reporte de impacto','Dashboards de progreso, completitud y aplicación al trabajo.'],['badge','Respaldo institucional','Certificación con la marca rosarista, valorada por el mercado.']];
  var SERV=[['search','Diagnóstico organizacional','Levantamos el estado de procesos, estructura y capacidades, y priorizamos brechas.'],['compass','Estrategia y transformación','Planeación estratégica, modelo operativo y gestión del cambio.'],['building','Gestión pública y políticas','Diseño y evaluación de políticas, programas y proyectos para entidades públicas y de cooperación.'],['chip','Analítica y transformación digital','Gobierno de datos, tableros de gestión y adopción de inteligencia artificial.'],['users','Talento y cultura','Modelos de competencias, liderazgo y medición de clima.'],['shield','Cumplimiento y riesgos','Marco legal, gestión integral de riesgos y gobierno corporativo.']];

  function ini(n){var w=n.split(' ');return (w[0][0]+(w[1]?w[1][0]:'')).toUpperCase()}
  function ico(k){return '<span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true">'+I[k]+'</svg></span>'}
  var DATA={};
  function SRC(n){return DATA[n]||('advance-img/'+n)}
  var IMG='advance-img/';
  ['mindfulness','finanzas-no-financieros','power-bi'].forEach(function(n,i){NEXT[i].img=n});
  ['liderazgo','derecho','digital','salud','finanzas','innovacion'].forEach(function(n,i){CAT[i].img=n});
  var PH={0:'lina-echeverri',2:'gloria-amparo-rodriguez',4:'rafael-bisquerra',1:'erick-rincon',3:'diana-paez',5:'andres-roa',6:'jose-castro',7:'sergio-pulgarin',8:'gladys-galvis',9:'daniel-tovar'};
  function av(i){return '<span class="avatar" aria-hidden="true">'+(PH[i]?'<img src="'+SRC('docente-'+PH[i]+'.jpg')+'" alt="">':ini(PEOPLE[i].n))+'</span>'}
  function cover(area,tags,img){return '<div class="cover'+(img?' has-img':'')+'" data-w="'+area+'" style="--acc:'+(ACC[area]||'#432e66')+'">'+(img?'<img src="'+SRC('curso-'+img+'.jpg')+'" alt="">':'')+tags+'</div>'}

  var PACC=['#e45765','#ff9944','#209b89','#9897d3','#b8ad2e','#54bae2','#3a8cef'];
  $('#paths').innerHTML=PATHS.map(function(p,i){return '<a class="path" href="#'+p[3]+'" data-go="'+p[3]+'" title="'+p[1]+'" style="--acc:'+PACC[i]+'"><span class="n">0'+(i+1)+'</span><h3>'+p[0]+'</h3><p>'+p[1]+'</p><span class="go">'+p[2]+' →</span></a>'}).join('');
  /* Programas en tendencia: tarjetas con imagen que giran solas */
  var TIMG=['curso-salud.jpg','curso-derecho.jpg','curso-digital.jpg','curso-mindfulness.jpg','curso-innovacion.jpg'];
  var TAREA=['Salud','Derecho','Tecnología','Ciencias sociales','Innovación'];
  (function(){
    var pista=$('#trends');
    function card(t,i,clon){return '<a class="tcard" href="#cursos" data-ta="'+TAREA[i]+'" style="--acc:'+t[2]+'"'+(clon?' aria-hidden="true" tabindex="-1"':'')+'><img src="'+SRC(TIMG[i])+'" alt="" loading="lazy"><span class="rk" aria-hidden="true"><span>'+(i+1)+'</span></span><span class="tag" aria-hidden="true"><svg viewBox="0 0 24 24">'+I[t[3]]+'</svg></span><span class="pie"><b>'+t[0]+'</b><span class="meta"><span class="n">'+t[1]+' programas</span><span class="ver">Ver →</span></span></span></a>'}
    var set=TRENDS.map(function(t,i){return card(t,i,false)}).join('');
    var clon=TRENDS.map(function(t,i){return card(t,i,true)}).join('');
    pista.innerHTML=set+clon+clon+clon;
    function ancho(){var c=pista.children;return c[TRENDS.length].offsetLeft-c[0].offsetLeft}
    var quieto=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var pausa=false,visible=true,pos=0,prev=0,VEL=0.035; /* píxeles por milisegundo */
    function tick(ts){
      var dt=prev?Math.min(ts-prev,50):0;prev=ts;
      if(!pausa&&visible&&!quieto&&!$('#v-inicio').hidden){
        var w=ancho();pos+=VEL*dt;if(pos>=w)pos-=w;pista.scrollLeft=pos;
      }
      requestAnimationFrame(tick);
    }
    function parar(){pausa=true}
    function seguir(){var w=ancho();pos=pista.scrollLeft%w;pista.scrollLeft=pos;pausa=false}
    pista.addEventListener('mouseenter',parar);pista.addEventListener('mouseleave',seguir);
    pista.addEventListener('focusin',parar);pista.addEventListener('focusout',seguir);
    pista.addEventListener('touchstart',parar,{passive:true});
    pista.addEventListener('touchend',function(){setTimeout(seguir,2500)});
    if('IntersectionObserver' in window)new IntersectionObserver(function(e){visible=e[0].isIntersecting}).observe(pista);
    function mover(d){
      pausa=true;var w=ancho(),paso=pista.children[1].offsetLeft-pista.children[0].offsetLeft;
      if(d<0&&pista.scrollLeft<paso){pista.scrollLeft+=w}
      pista.scrollTo({left:pista.scrollLeft+d*paso,behavior:'smooth'});
      clearTimeout(mover._t);mover._t=setTimeout(seguir,700);
    }
    $('.tr10 .izq').addEventListener('click',function(){mover(-1)});
    $('.tr10 .der').addEventListener('click',function(){mover(1)});
    pista.addEventListener('click',function(e){
      var a=e.target.closest('.tcard');if(!a)return;e.preventDefault();
      state={q:'',area:[a.dataset.ta],nivel:[],mod:[]};draw();go('cursos');
    });
    requestAnimationFrame(tick);
  })();

  /* Lupa de búsqueda: siempre visible (en el encabezado y, en celular, flotante) */
  (function(){
    var bsc=$('#bsc'),q=$('#bsc-q'),lst=$('#bsc-l'),flota=$('.lupa.flota'),ult=null;
    function norm(x){return x.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase()}
    $('#bsc-a').innerHTML=FILTERS.area.map(function(a){return '<button type="button" data-a="'+a+'">'+a+'</button>'}).join('');
    function pintar(){
      var t=norm(q.value.trim());
      var r=CAT.filter(function(c){return !t||norm(c.t+' '+c.fac+' '+c.area+' '+c.tipo+' '+c.d).indexOf(t)>-1});
      lst.innerHTML=r.length?r.map(function(c){return '<li><a href="#cursos" data-t="'+c.t+'"><span>'+c.t+'</span><small>'+c.tipo+' · '+c.area+'</small></a></li>'}).join(''):'<li class="vacio">No encontramos programas con «'+q.value+'». Presiona Enter para buscar en todo el catálogo.</li>';
    }
    function abrir(){ult=document.activeElement;bsc.classList.add('on');document.body.style.overflow='hidden';pintar();setTimeout(function(){q.focus()},30)}
    function cerrar(){bsc.classList.remove('on');document.body.style.overflow='';if(ult&&ult.focus)ult.focus()}
    function buscar(txt,area){state={q:txt||'',area:area?[area]:[],nivel:[],mod:[]};draw();cerrar();go('cursos')}
    $$('[data-buscar]').forEach(function(b){b.addEventListener('click',abrir)});
    bsc.addEventListener('click',function(e){
      if(e.target===bsc){cerrar();return}
      var a=e.target.closest('[data-t]');if(a){e.preventDefault();buscar(a.dataset.t);return}
      var b=e.target.closest('[data-a]');if(b){buscar('',b.dataset.a)}
    });
    q.addEventListener('input',pintar);
    $('#bsc-f').addEventListener('submit',function(e){e.preventDefault();buscar(q.value)});
    document.addEventListener('keydown',function(e){
      var esc=/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
      if(e.key==='Escape'&&bsc.classList.contains('on'))cerrar();
      else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();abrir()}
      else if(e.key==='/'&&!esc){e.preventDefault();abrir()}
    });
    /* si el encabezado sale de la pantalla (celular), aparece la lupa flotante */
    if('IntersectionObserver' in window)new IntersectionObserver(function(e){flota.classList.toggle('on',!e[0].isIntersecting)}).observe($('.top .lupa'));
  })();
  $('#featured').innerHTML=CAT.map(function(c){return ccard(c,false)}).join('');
  var FACC={'Economía y Negocios':'#ff9944','Jurisprudencia':'#54bae2','Salud':'#209b89','Bienestar':'#85d3c6','Ciencias e Ingeniería':'#3a8cef','Creación':'#9897d3'};
  function pcard(i){var p=PEOPLE[i];return '<button class="doc" data-p="'+i+'" style="--acc:'+FACC[p.f]+'" aria-label="Ver perfil de '+p.n+'">'+(PH[i]?'<img src="'+SRC('docente-'+PH[i]+'-card.jpg')+'" alt="">':'<span class="ph" aria-hidden="true">'+ini(p.n)+'</span>')+'<span class="badge">'+p.f+'</span><span class="info"><h3>'+p.n+'</h3><span class="cred">'+p.c+'</span></span></button>'}
  $('#people-home').innerHTML=HOME_P.map(pcard).join('');
  var EMP_ALL=CONS.concat(PEOPLE.map(function(_,i){return i}).filter(function(i){return CONS.indexOf(i)<0})),empOpen=false;
  function empDraw(){var L=empOpen?EMP_ALL:EMP_ALL.slice(0,5),b=$('#emp-more');$('#people-emp').innerHTML=L.map(pcard).join('');b.hidden=EMP_ALL.length<=5;b.textContent=empOpen?'Ver menos ↑':'Ver todos los conferencistas ('+EMP_ALL.length+') ↓';b.setAttribute('aria-expanded',empOpen)}
  empDraw();
  $('#emp-more').addEventListener('click',function(){empOpen=!empOpen;empDraw();if(!empOpen)$('#emp-docentes').scrollIntoView({block:'start'})});
  $('#quotes').innerHTML=QUOTES.map(function(q){return '<article class="quote"><p>'+q[2]+' <em>(Se conserva el texto actual de Jerre.)</em></p><div class="who"><span class="avatar" aria-hidden="true">'+ini(q[0])+'</span><div><b>'+q[0]+'</b><small>'+q[1]+'</small></div></div></article>'}).join('');
  $('#emp-cards').innerHTML=EMP.map(function(e){return '<article class="lcard">'+ico(e[0])+'<h3>'+e[1]+'</h3><p>'+e[2]+'</p></article>'}).join('');

  /* tarjeta Lovable */
  function ccard(c,next){
    var tags=(c.prem?'<span class="tag l">✦ Premium</span>':'')+'<span class="tag r">'+c.area+'</span>';
    var FI={star:'<path d="M12 3l2.7 5.6 6.1.8-4.5 4.3 1.1 6.1L12 17l-5.4 2.8 1.1-6.1L3.2 9.4l6.1-.8z"/>',users:I.users,clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',cal:'<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M8 3v4M16 3v4"/>'};
    var sv=function(k){return '<svg viewBox="0 0 24 24" aria-hidden="true"'+(k==='star'?' class="star"':'')+'>'+FI[k]+'</svg>'};
    var facts=next?'<span>'+sv('cal')+'Inicia '+c.ini+'</span><span>'+sv('clock')+c.dur+'</span><span>'+c.mod+'</span>':'<span>'+sv('star')+c.r+'</span><span>'+sv('users')+c.n+'</span><span>'+sv('clock')+c.h+' h</span>';
    return '<article class="ccard">'+cover(c.area,tags,c.img)+'<div class="body"><p class="kicker">'+c.fac+'</p><h3><a class="plink" href="programa.html">'+c.t+'</a></h3><p class="desc">'+c.d+'</p><div class="facts">'+facts+'</div><div class="foot"><div><small>'+c.tipo+' | '+c.mod+'</small><b>$'+c.p+'</b></div><span class="lvl">'+(c.nivel||'COP')+'</span></div></div></article>';
  }
  $('#next-cursos').innerHTML=NEXT.map(function(c){return ccard(c,true)}).join('');

  /* catálogo con filtros */
  var state={q:'',area:[],nivel:[],mod:[]};
  $('#filters').innerHTML=Object.keys(FILTERS).map(function(k){return '<div><h3>'+FLABEL[k]+'</h3><div class="opts">'+FILTERS[k].map(function(o){return '<button class="opt" data-k="'+k+'" data-v="'+o+'" aria-pressed="false">'+o+'</button>'}).join('')+'</div></div>'}).join('')+'<button class="clear" id="clear">Limpiar filtros</button>';
  function draw(){
    var q=state.q.trim().toLowerCase();
    var r=CAT.filter(function(c){
      return (!state.area.length||state.area.indexOf(c.area)>-1)&&(!state.nivel.length||state.nivel.indexOf(c.nivel)>-1)&&(!state.mod.length||state.mod.indexOf(c.mod)>-1)&&(!q||(c.t+' '+c.fac+' '+c.d+' '+c.area).toLowerCase().indexOf(q)>-1);
    });
    $('#count').textContent=r.length+(r.length===1?' resultado':' resultados');
    $('#cat').innerHTML=r.length?r.map(function(c){return ccard(c,false)}).join(''):'<p class="empty" style="grid-column:1/-1">Ningún programa coincide con la búsqueda. Limpia los filtros para ver todo el catálogo.</p>';
    $$('.opt').forEach(function(b){b.setAttribute('aria-pressed',state[b.dataset.k].indexOf(b.dataset.v)>-1?'true':'false')});
    if($('#cat-q').value!==state.q)$('#cat-q').value=state.q;
  }
  $('#filters').addEventListener('click',function(e){
    var b=e.target.closest('.opt');
    if(b){var a=state[b.dataset.k],i=a.indexOf(b.dataset.v);if(i>-1)a.splice(i,1);else a.push(b.dataset.v);draw();return}
    if(e.target.id==='clear'){state={q:'',area:[],nivel:[],mod:[]};draw()}
  });
  $('#cat-q').addEventListener('input',function(e){state.q=e.target.value;draw()});
  draw();

  /* navegación entre vistas */
  function show(v,keep){
    if(VIEWS.indexOf(v)<0)v='inicio';
    VIEWS.forEach(function(n){$('#v-'+n).hidden=n!==v});
    $$('.nav>a').forEach(function(a){if(a.dataset.go===v||(v==='programa'&&a.dataset.go==='cursos'))a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
    $$('.dd').forEach(function(d){d.classList.toggle('cur',d.dataset.dd===v)});
    revApply();
    if(!keep)window.scrollTo(0,0);curV=v;fabSync();
  }
  var REV={};
  function revApply(){var R=REV||{};['emp-docentes','con-perfiles'].forEach(function(id){var el=document.getElementById(id);if(el)el.hidden=!R[id]})}
  function navClose(){var tp=$('.top'),bg=$('.burger');if(tp)tp.classList.remove('navopen');if(bg){bg.setAttribute('aria-expanded','false');bg.setAttribute('aria-label','Abrir menú')}}
  function ddClose(){$$('.dd').forEach(function(d){d.classList.remove('open');d.querySelector('button').setAttribute('aria-expanded','false')})}
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){ddClose();navClose()}});
  function go(v){try{if(location.hash!=='#'+v)location.hash=v}catch(e){}show(v)}
  document.addEventListener('click',function(e){
    var np=e.target.closest('[data-nopage]');
    if(np){e.preventDefault();var t=$('#toast');t.textContent='«'+np.dataset.nopage+'» no tiene página en este prototipo.';t.hidden=false;clearTimeout(t._h);t._h=setTimeout(function(){t.hidden=true},3200);return}
    var bg=e.target.closest('.burger');
    if(bg){var tp=$('.top'),on=!tp.classList.contains('navopen');tp.classList.toggle('navopen',on);bg.setAttribute('aria-expanded',on);bg.setAttribute('aria-label',on?'Cerrar menú':'Abrir menú');return}
    var rv=e.target.closest('[data-reveal]');
    if(rv){REV[rv.dataset.reveal]=true;revApply();var tr=document.getElementById(rv.dataset.to||rv.dataset.reveal);if(tr)tr.scrollIntoView({block:'start'});return}
    var db=e.target.closest('.dd>button');
    if(db){var dd=db.parentNode,op=!dd.classList.contains('open');ddClose();dd.classList.toggle('open',op);db.setAttribute('aria-expanded',op);return}
    if(!e.target.closest('.dd'))ddClose();
    var a=e.target.closest('[data-go]');
    if(a){e.preventDefault();ddClose();navClose();REV={};if(a.dataset.rev)REV[a.dataset.rev]=true;go(a.dataset.go);if(a.dataset.to){var tg=document.getElementById(a.dataset.to);if(tg)setTimeout(function(){tg.scrollIntoView({block:'start'})},40)}return}
    var ch=e.target.closest('.chip');
    if(ch){state={q:'',area:ch.dataset.area?[ch.dataset.area]:[],nivel:[],mod:[]};draw();go('cursos');return}
    var f=e.target.closest('[data-focus]');
    if(f){var el=document.getElementById(f.dataset.focus);el.scrollIntoView({block:'center'});el.focus();return}
    var s=e.target.closest('[data-scroll]');
    if(s){document.getElementById(s.dataset.scroll).scrollIntoView({block:'start'});return}
    var m=e.target.closest('[data-msg]');
    if(m){document.getElementById(m.dataset.msg).hidden=false;return}
    var ag=e.target.closest('[data-agenda]');
    if(ag){if(window.spkAgenda)spkAgenda(ag.dataset.agenda);return}
    var p=e.target.closest('[data-p]');
    if(p){open(+p.dataset.p)}
  });
  function route(h,keep){if(h.indexOf('programa-')===0){if(pgRender(h.slice(9))){show('programa',false);return}h='cursos'}show(h,keep)}
  window.addEventListener('hashchange',function(){var h=location.hash.slice(1),cv=h.indexOf('programa-')===0?'programa':(VIEWS.indexOf(h)<0?'inicio':h);route(h,cv!=='programa'&&!$('#v-'+cv).hidden)});
  $('#hero-search').addEventListener('submit',function(e){e.preventDefault();state={q:$('#hero-q').value,area:[],nivel:[],mod:[]};draw();go('cursos')});
  ['emp-form','con-form','sim-form','spk-form'].forEach(function(id){document.getElementById(id).addEventListener('submit',function(e){e.preventDefault();e.target.querySelector('.ok').hidden=false})});

  /* perfil */
  var dlg=$('#dlg');
  function open(i){
    var p=PEOPLE[i];
    $('#dlg-body').innerHTML='<button class="x" id="dlg-x" aria-label="Cerrar perfil">✕</button><header>'+av(i)+'<div><h3 id="dlg-name">'+p.n+'</h3><p class="muted" style="font-size:.86rem">'+p.c+' · '+p.f+'</p></div></header><hr><p>'+p.b+'</p><h4>Dicta actualmente</h4><p class="muted">'+p.d+'</p>'+'<p class="btns" style="display:flex;flex-wrap:wrap;gap:10px"><button class="btn red sm" type="button" data-agenda="'+i+'">Agendar a '+p.n.split(' ')[0]+'</button>'+(p.u?'<a class="btn ghost sm" href="'+p.u+'" target="_blank" rel="noopener">Ver programa en el sitio actual</a>':'')+'</p>';
    if(dlg.showModal)dlg.showModal();else dlg.setAttribute('open','');
  }
  dlg.addEventListener('click',function(e){if(e.target===dlg||e.target.id==='dlg-x'){if(dlg.close)dlg.close();else dlg.removeAttribute('open')}});

  /* encabezado en una sola línea: reduce la escala hasta que quepa; si aún no cabe, el menú pasa a su propia fila */
  var hd=$('.top'),hw=$('.top .wrap'),hn=$('.nav'),ft;
  function over(el){return el.scrollWidth>el.clientWidth+1}
  function fit(){
    if(matchMedia('(max-width:900px)').matches){hd.classList.remove('tier','wrapnav');hd.style.setProperty('--hs','1');return}
    hd.classList.remove('tier','wrapnav');var s=1;hd.style.setProperty('--hs','1');
    while(over(hw)&&s>0.87){s-=0.02;hd.style.setProperty('--hs',s.toFixed(2))}
    if(!over(hw))return;
    hd.classList.add('tier');s=1;hd.style.setProperty('--hs','1');
    while(over(hn)&&s>0.87){s-=0.02;hd.style.setProperty('--hs',s.toFixed(2))}
    if(over(hn)){hd.style.setProperty('--hs','1');hd.classList.add('wrapnav')}
  }
  fit();
  window.addEventListener('resize',function(){clearTimeout(ft);ft=setTimeout(fit,80)});
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);

  /* Centro de Simulación: programación del sitio actual, instalaciones y botón flotante */
  function pic(n){return SRC(n)}
  var SIMBASE='https://educacioncontinua.urosario.edu.co/';
  var SIM=[{"c":"Programas AHA","t":"Curso","n":"HeartCode® Soporte Vital Básico (BLS) - AHA","m":"Semipresencial","d":"1 día","f":"24 de octubre","u":"escuela-medicina-ciencias-salud/curso/curso-heartcoder-soporte-vital-basico-bls-aha"},{"c":"Programas AHA","t":"Curso","n":"Soporte Vital Cardiovascular Avanzado (ACLS) - AHA","m":"Semipresencial","d":"2 días","f":"24 de octubre","u":"escuela-medicina-ciencias-salud/curso/curso-soporte-vital-cardiovascular-avanzado-acls-aha"},{"c":"Ultrasonido","t":"Curso","n":"PoCUS (Point of Care Ultrasound) Pediátrico","m":"Presencial","d":"","f":"","u":"escuela-medicina-ciencias-salud/curso/pocus-point-care-ultrasound-pediatrico"},{"c":"Ultrasonido","t":"Curso","n":"Ultrasonido en Accesos Vasculares Seguros","m":"Presencial","d":"1 día","f":"13 de diciembre","u":"escuela-medicina-ciencias-salud/curso/ultrasonido-accesos-vasculares-seguros"},{"c":"Ultrasonido","t":"Curso","n":"Ultrasonido en Emergencias y Cuidado Crítico","m":"Presencial","d":"1 día","f":"21 de noviembre","u":"escuela-medicina-ciencias-salud/curso/ultrasonido-emergencias-cuidado-critico"},{"c":"Ventilación mecánica","t":"Curso","n":"Ventilación Mecánica en Pediatría","m":"Presencial","d":"1 día","f":"","u":"escuela-medicina-ciencias-salud/curso/curso-ventilacion-mecanica-pediatria"},{"c":"Ventilación mecánica","t":"Curso","n":"Soporte Mecánico Ventilatorio Inicial del Paciente Crítico","m":"Presencial","d":"","f":"","u":"escuela-medicina-ciencias-salud/curso/soporte-mecanico-ventilatorio-inicial-paciente-critico"},{"c":"Vía aérea","t":"Diplomado","n":"Cuidado Respiratorio en el Paciente Crítico con Certificación Internacional HEARTCODE BLS","m":"Presencial y remoto","d":"7 semanas","f":"15 de octubre","u":"medicina/diplomado/cuidado-respiratorio-paciente-critico-con-certificacion-bls"},{"c":"Neurología","t":"Curso","n":"Atención Hospitalaria Integral del Código ACV","m":"Presencial","d":"1 día","f":"05 de octubre","u":"escuela-medicina-ciencias-salud/curso/atencion-hospitalaria-integral-codigo-acv"},{"c":"Neurología","t":"Curso","n":"Fundamentos de NEUROPOCUS","m":"Presencial","d":"1 día","f":"","u":"escuela-medicina-ciencias-salud/curso/fundamentos-neuropocus"},{"c":"Cuidadores legos","t":"Curso","n":"Respuesta Rápida en Urgencias Escolares","m":"Presencial","d":"8 horas","f":"12 de julio","u":"escuela-medicina-ciencias-salud/curso/respuesta-rapida-urgencias-escolares"},{"c":"Cuidadores legos","t":"Curso","n":"Abordaje Integral para el Cuidado del Adulto Mayor","m":"Presencial","d":"","f":"02 de agosto","u":"escuela-medicina-ciencias-salud/curso/abordaje-integral-para-cuidado-adulto-mayor"},{"c":"Ginecología y Obstetricia","t":"Diplomado","n":"Código Rojo Obstétrico","m":"Presencial","d":"1 día","f":"","u":"escuela-medicina-ciencias-salud/diplomado/codigo-rojo-obstetrico"},{"c":"Ginecología y Obstetricia","t":"Diplomado","n":"Cirugía Laparoscópica Ginecológica","m":"Blended","d":"25 semanas","f":"11 de noviembre","u":"escuela-medicina-ciencias-salud/diplomado/cirugia-laparoscopica-ginecologica"},{"c":"Enfermería","t":"Curso","n":"Manejo integral del paciente adulto en hemodinamia","m":"Blended","d":"4 días","f":"28 de agosto","u":"medicina/curso/manejo-integral-paciente-adulto-hemodinamia"},{"c":"Enfermería","t":"Diplomado","n":"Cuidado Crítico Adulto para Profesionales de Enfermería","m":"Remoto","d":"9 semanas","f":"10 de septiembre","u":"escuela-medicina-ciencias-salud/diplomado/cuidado-critico-adulto-para-profesionales-de-enfermeria"}];
  var SIMCATS=["Programas AHA","Ultrasonido","Ventilación mecánica","Vía aérea","Neurología","Cuidadores legos","Ginecología y Obstetricia","Enfermería"],simCat='';
  function simWhen(c){return c.f?'Inicia '+c.f:'Fecha por definir'}
  $('#sim-next').innerHTML=[7,0,1].map(function(ix,k){var c=SIM[ix];return '<article class="ccard"><div class="cover has-img" data-w="Salud" style="--acc:#209b89"><img src="'+pic('sim-prox-'+k+'.jpg')+'" alt=""><span class="tag l">'+c.t+'</span><span class="tag r">Simulación</span></div><div class="body"><p class="kicker">Escuela de Medicina y Ciencias de la Salud</p><h3><a class="plink" href="programa.html">'+c.n+'</a></h3><div class="facts"><span>'+simWhen(c)+'</span><span>'+c.d+'</span><span>'+c.m+'</span></div><div class="foot"><a class="more" href="programa.html">Quiero saber más →</a></div></div></article>'}).join('');
  function simDraw(){
    $('#sim-cats').innerHTML=['Todos'].concat(SIMCATS).map(function(c){var v=c==='Todos'?'':c;return '<button class="fchip" type="button" data-simcat="'+v+'" aria-pressed="'+(simCat===v)+'">'+c+'</button>'}).join('');
    $('#sim-list').innerHTML=SIM.map(function(c,i){return (!simCat||c.c===simCat)?'<a class="prog" href="programa.html"><img src="'+pic('sim-p'+(i<10?'0':'')+i+'.jpg')+'" alt=""><div class="pb"><span class="pk">'+c.t+' · '+c.c+'</span><h3>'+c.n+'</h3><span class="pm">'+[c.m,c.d,simWhen(c)].filter(Boolean).join(' · ')+'</span></div><span class="go" aria-hidden="true">→</span></a>':''}).join('');
  }
  simDraw();
  $('#sim-cats').addEventListener('click',function(e){var b=e.target.closest('[data-simcat]');if(b){simCat=b.dataset.simcat;simDraw()}});
  var SI={pulse:'<path d="M3 12h4l2-6 4 12 2-6h6"/>',bed:'<path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11" r="2"/>',heart:I.heart,monitor:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M7 11h2l1.5-3 2 6 1.5-3H17M9 20h6M12 16v4"/>',cross:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8v8M8 12h8"/>'};
  $('#sim-rooms').innerHTML=[['Triage y urgencias','pulse','#e45765'],['Hospitalización','bed','#3a8cef'],['Sala de partos','heart','#9897d3'],['UCI adultos y pediátrica','monitor','#209b89'],['Área quirúrgica','cross','#ff9944']].map(function(r){return '<div class="trend" style="--acc:'+r[2]+';cursor:default"><span class="tico"><svg viewBox="0 0 24 24" aria-hidden="true">'+SI[r[1]]+'</svg></span><span class="ttxt"><b>'+r[0]+'</b></span></div>'}).join('');
  var curV='inicio',fabHide={};
  var FABS={simulacion:['Formación para empresas e instituciones','sim-org'],consultoria:['Solicita una consultoría','con-nombre'],empresas:['Hablemos de tu equipo','emp-nombre']};
  function fabSync(){var f=$('#fab');if(!f)return;var c=FABS[curV];if(c){$('#fab-t').textContent=c[0];f.dataset.focus=c[1]}f.hidden=!c||!!(fabHide.m||fabHide.f||fabHide.c);ffSync()}
  if('IntersectionObserver' in window){
    var fo=new IntersectionObserver(function(es){es.forEach(function(en){fabHide[en.target.tagName==='FOOTER'?'f':(en.target.id==='con-form'?'c':'m')]=en.isIntersecting});fabSync()},{threshold:.12});
    fo.observe($('#sim-medida'));fo.observe($('footer'));fo.observe($('#con-form'));
  }

  /* Consultoría: portafolio, sectores y consultores reales del HUB-UR (research-hub.urosario.edu.co/extension) */
  var HUB='https://research-hub.urosario.edu.co/individual?uri=http%3A%2F%2Fresearch-hub.urosario.edu.co%2Findividual%2F';
  var LINES=[{"n":"Inteligencia artificial y transformación digital","d":"Aplicamos analítica avanzada, IA, Big Data y ciberseguridad para que empresas y entidades públicas tomen decisiones basadas en evidencia, no en intuición.","s":["Estado","Empresa privada"],"c":"#3a8cef","p":["alejandro-jose-useche-arevalo","julio-cesar-gaitan-bohorquez","luis-hernando-gutierrez-ramirez"]},{"n":"Salud humana, sistemas de salud y políticas sanitarias","d":"Combinamos investigación clínica y biomédica con economía de la salud para evaluar tecnologías sanitarias y fortalecer la organización y financiamiento de sistemas de salud.","s":["Estado","Cooperación internacional","Empresa privada"],"c":"#209b89","p":["alberto-francisco-velez-van-meerbeke","amparo-susana-mogollon-perez","ana-maria-barragan-gonzalez","carlos-martin-restrepo-fernandez","catalina-latorre-santos","daniel-alejandro-buitrago-medina","diana-marcela-ramos-caballero","eliana-isabel-rodriguez-grande","fernando-antonio-portilla-vicuna","jose-ricardo-alvarado-sanchez","juan-miguel-gallego-acevedo","karen-aguia-rojas","paul-andres-rodriguez-lesmes","yenny-marcela-barreto-zorza"]},{"n":"Trabajo, salud ocupacional, ergonomía y factores humanos","d":"Evaluamos riesgo biomecánico y psicosocial, vigilancia epidemiológica ocupacional y diseño de puestos, para proteger a las personas sin sacrificar productividad.","s":["Estado","Empresa privada"],"c":"#ff9944","p":["juan-alberto-castillo-martinez","leonardo-briceno-ayala"]},{"n":"Cambio climático y transición energética","d":"Acompañamos procesos de descarbonización, energía renovable, finanzas climáticas y reportes ESG (GRI, SASB), para empresas, gobiernos y organizaciones que necesitan cumplir y competir.","s":["Estado","Cooperación internacional","Empresa privada"],"c":"#b8ad2e","p":["fernando-carriazo-osorio","lina-marcela-munoz-avila"]},{"n":"Innovación y transformación empresarial","d":"Diseñamos procesos de aceleración, co-creación e innovación abierta, e impulsamos la internacionalización y el comercio exterior de empresas y territorios.","s":["Cooperación internacional","Empresa privada"],"c":"#9897d3","p":["alejandro-jose-useche-arevalo","andres-felipe-garcia-suaza","daniel-ricardo-torralba-barreto","jesus-gilberto-otero-cardona","juan-miguel-gallego-acevedo","luis-hernando-gutierrez-ramirez"]},{"n":"Transformaciones democráticas, estado, DDHH, justicia y paz","d":"Aportamos investigación rigurosa en democracia, Estado de derecho, justicia transicional y construcción de paz, para gobiernos, la JEP, organismos como la ONU y cooperación internacional.","s":["Estado","Cooperación internacional"],"c":"#e45765","p":["ana-lucia-casallas-murillo","enrique-alberto-prieto-rios","juan-esteban-ugarriza-uribe","julio-cesar-gaitan-bohorquez","lina-marcela-munoz-avila","lina-maria-cespedes-baez","maria-elena-botero-ospina","maria-lucia-torres-villarreal","maria-teresa-palacios-sanabria","ricardo-abello-galvis","rocio-del-pilar-pena-huertas","wilson-alejandro-martinez-sanchez"]},{"n":"Demografía, migraciones y desigualdades","d":"Analizamos envejecimiento, migración, movilidad social y empleabilidad, para diseñar formación técnica e inclusión laboral junto al SENA, el Ministerio de Trabajo y empresas.","s":["Estado","Cooperación internacional","Empresa privada"],"c":"#85d3c6","p":["andres-felipe-garcia-suaza","carlos-eduardo-sepulveda-rico","catalina-latorre-santos","darwin-cortes-cortes","juan-miguel-gallego-acevedo","karen-aguia-rojas","lina-maria-cespedes-baez","luisa-fernanda-ramirez-rueda","maria-lucia-torres-villarreal","maria-teresa-palacios-sanabria","nathalia-urbano-canal","paul-andres-rodriguez-lesmes","rocio-del-pilar-pena-huertas"]},{"n":"Educación, aprendizaje y formación de talento","d":"Diseñamos y evaluamos currículos, políticas educativas e innovación pedagógica, con énfasis en educación superior y ciencias de la salud, para formar el talento que las organizaciones necesitan.","s":["Estado","Cooperación internacional","Empresa privada"],"c":"#54bae2","p":["darwin-cortes-cortes","john-alexander-vergel-guerrero","karim-del-rocio-garzon-diaz","martha-rocio-torres-narvaez","nathalia-urbano-canal","angela-fernanda-espinosa-aranzales"]},{"n":"Ciudad, territorio y desarrollo regional","d":"Apoyamos planificación urbana, formulación de POT y estrategias de competitividad territorial, para alcaldías, gobernaciones y constructoras","s":["Estado","Empresa privada"],"c":"#9897d3","p":["carlos-eduardo-sepulveda-rico","fernando-carriazo-osorio","maria-elena-botero-ospina"]}];
  var HUBP={"alejandro-jose-useche-arevalo":"Alejandro José Useche Arévalo","julio-cesar-gaitan-bohorquez":"Julio César Gaitán Bohórquez","luis-hernando-gutierrez-ramirez":"Luis Hernando Gutiérrez Ramírez","alberto-francisco-velez-van-meerbeke":"Alberto Francisco Velez Van Meerbeke","amparo-susana-mogollon-perez":"Amparo Susana Mogollón Pérez","ana-maria-barragan-gonzalez":"Ana María Barragán González","carlos-martin-restrepo-fernandez":"Carlos Martin Restrepo Fernández","catalina-latorre-santos":"Catalina Latorre Santos","daniel-alejandro-buitrago-medina":"Daniel Alejandro Buitrago Medina","diana-marcela-ramos-caballero":"Diana Marcela Ramos Caballero","eliana-isabel-rodriguez-grande":"Eliana Isabel Rodríguez Grande","fernando-antonio-portilla-vicuna":"Fernando Antonio Portilla Vicuna","jose-ricardo-alvarado-sanchez":"José Ricardo Alvarado Sánchez","juan-miguel-gallego-acevedo":"Juan Miguel Gallego Acevedo","karen-aguia-rojas":"Karen Aguía Rojas","paul-andres-rodriguez-lesmes":"Paul Andrés Rodríguez Lesmes","yenny-marcela-barreto-zorza":"Yenny Marcela Barreto Zorza","juan-alberto-castillo-martinez":"Juan Alberto Castillo Martínez","leonardo-briceno-ayala":"Leonardo Briceño Ayala","fernando-carriazo-osorio":"Fernando Carriazo Osorio","lina-marcela-munoz-avila":"Lina Marcela Muñoz Ávila","andres-felipe-garcia-suaza":"Andrés Felipe García Suaza","daniel-ricardo-torralba-barreto":"Daniel Ricardo Torralba Barreto","jesus-gilberto-otero-cardona":"Jesús Gilberto Otero Cardona","ana-lucia-casallas-murillo":"Ana Lucía Casallas Murillo","enrique-alberto-prieto-rios":"Enrique Alberto Prieto Ríos","juan-esteban-ugarriza-uribe":"Juan Esteban Ugarriza Uribe","lina-maria-cespedes-baez":"Lina María Céspedes Baez","maria-elena-botero-ospina":"María Elena Botero Ospina","maria-lucia-torres-villarreal":"María Lucía Torres Villarreal","maria-teresa-palacios-sanabria":"María Teresa Palacios Sanabria","ricardo-abello-galvis":"Ricardo Abello Galvis","rocio-del-pilar-pena-huertas":"Rocío del Pilar Peña Huertas","wilson-alejandro-martinez-sanchez":"Wilson Alejandro Martínez Sánchez","carlos-eduardo-sepulveda-rico":"Carlos Eduardo Sepúlveda Rico","darwin-cortes-cortes":"Darwin Cortés Cortés","luisa-fernanda-ramirez-rueda":"Luisa Fernanda Ramírez Rueda","nathalia-urbano-canal":"Nathalia Urbano Canal","john-alexander-vergel-guerrero":"John Alexander Vergel Guerrero","karim-del-rocio-garzon-diaz":"Karim Del Rocio Garzón Díaz","martha-rocio-torres-narvaez":"Martha Rocío Torres Narváez","angela-fernanda-espinosa-aranzales":"Ángela Fernanda Espinosa Aranzales"};
  var pSec='',cLine=-1,cOpen=false,C_MAX=10;
  function portDraw(){
    $('#port-secs').innerHTML=[['Ver todos','']].concat(['Estado','Cooperación internacional','Empresa privada'].map(function(x){return [x,x]})).map(function(x){return '<button class="fchip" type="button" data-psec="'+x[1]+'" aria-pressed="'+(pSec===x[1])+'">'+x[0]+'</button>'}).join('');
    $('#port').innerHTML=LINES.map(function(l,i){return (!pSec||l.s.indexOf(pSec)>-1)?'<button class="pline ph" type="button" data-pline="'+i+'" style="--acc:'+l.c+'"><img src="'+pic('linea-'+i+'.jpg')+'" alt=""><h3>'+l.n+'</h3><span class="ptags">'+l.s.join(' · ')+'</span><span class="go">Ver consultores →</span></button>':''}).join('');
  }
  function consDraw(){
    var opts=LINES.map(function(l,i){return [l.n,i,l.p.length,l.c]}).concat([['Todos los consultores',-1,Object.keys(HUBP).length,'#d80f23']]);
    $('#cons-lines').innerHTML=opts.map(function(x){return '<button class="lineitem" type="button" data-cline="'+x[1]+'" aria-pressed="'+(cLine===x[1])+'" style="--acc:'+x[3]+'"><i></i><span>'+x[0]+'</span><b>'+x[2]+'</b></button>'}).join('');
    $('#cons-sel').innerHTML=opts.map(function(x){return '<option value="'+x[1]+'"'+(cLine===x[1]?' selected':'')+'>'+x[0]+' ('+x[2]+')</option>'}).join('');
    var l=LINES[cLine],ids=l?l.p:Object.keys(HUBP).sort(function(a,b){return HUBP[a].localeCompare(HUBP[b],'es')}),acc=l?l.c:'#d80f23';
    $('#cons-desc').innerHTML=l?'<div class="cdesc" style="--acc:'+acc+'"><h3>'+l.n+'</h3><p>'+l.d+'</p></div>':'<div class="cdesc"><h3>Todos los consultores</h3><p>'+ids.length+' investigadores y profesores de la Universidad del Rosario.</p></div>';
    var mb=$('#cons-more'),tot=ids.length;mb.hidden=tot<=C_MAX;mb.textContent=cOpen?'Ver menos ↑':'Ver todos los consultores ('+tot+') ↓';mb.setAttribute('aria-expanded',cOpen);if(!cOpen)ids=ids.slice(0,C_MAX);
    $('#consultants').innerHTML=ids.map(function(s,k){return '<a class="cons" href="'+HUB+s+'" style="--acc:'+acc+';--i:'+Math.min(k,14)+'"><span class="cph"><img src="'+pic('hub-'+s+'.jpg')+'" alt=""></span><b>'+HUBP[s]+'</b><span class="go">Ver perfil →</span></a>'}).join('');
  }
  portDraw();consDraw();
  $('#cons-sel').addEventListener('change',function(e){cLine=+e.target.value;cOpen=false;consDraw()});
  $('#cons-more').addEventListener('click',function(){cOpen=!cOpen;consDraw();if(!cOpen)$('#con-consultores').scrollIntoView({block:'start'})});
  $('#v-consultoria').addEventListener('click',function(e){
    var a=e.target.closest('[data-psec]');if(a){pSec=a.dataset.psec;portDraw();return}
    var b=e.target.closest('[data-cline]');if(b){cLine=+b.dataset.cline;cOpen=false;consDraw();return}
    var c=e.target.closest('[data-pline]');if(c){cLine=+c.dataset.pline;cOpen=false;consDraw();REV['con-perfiles']=true;revApply();$('#con-consultores').scrollIntoView({block:'start'})}
  });

  /* Consultoría: carrusel de aliados estratégicos */
  var CAL=[['Banco Mundial','banco-mundial'],['Bancolombia','bancolombia'],['Belcorp','belcorp'],['Davivienda','davivienda'],['OIT (ILO)',''],['OIM (IOM)','oim'],['Ministerio de Salud','minsalud'],['Porvenir','porvenir'],['Samsung','samsung'],['Unión Europea',''],['USAID','usaid']];
  $('#con-marq .track').innerHTML=[0,1,2,3].map(function(k){return CAL.map(function(a){return '<span class="mchip"'+(k?' aria-hidden="true"':'')+'>'+(a[1]?'<img src="'+pic('ali-'+a[1]+'.png')+'" alt="'+(k?'':a[0])+'">':'<b>'+a[0]+'</b>')+'</span>'}).join('')}).join('');

  /* Empresas: cifras, aliados y diferenciales (contenido del Portafolio ADVANCE Corporativos) */
  var ART={"community":"<circle cx=\"22\" cy=\"22\" r=\"7\"/><circle cx=\"44\" cy=\"24\" r=\"6\"/><path d=\"M9 51c0-7 6-11 13-11s13 4 13 11\"/><path d=\"M34 47c1-5 5-8 10-8s9 3 10 8\"/>","family":"<circle cx=\"24\" cy=\"20\" r=\"7\"/><circle cx=\"45\" cy=\"27\" r=\"5\"/><path d=\"M11 52c0-8 6-13 13-13s13 5 13 13\"/><path d=\"M38 52c0-5 3.5-8 7-8s7 3 7 8\"/>","grad":"<path d=\"M6 26 32 14 58 26 32 38z\"/><path d=\"M18 31v12c0 3 28 3 28 0V31\"/><path d=\"M58 26v13\"/>","book":"<path d=\"M32 18C26 14 16 14 10 16v32c6-2 16-2 22 2 6-4 16-4 22-2V16c-6-2-16-2-22 2z\"/><path d=\"M32 20v30\"/>","city":"<path d=\"M8 54V28l12-7 12 7v26\"/><path d=\"M32 54V20l14 8v26\"/><path d=\"M14 33h4M14 41h4M24 33h4M24 41h4M38 35h4M38 43h4\"/><path d=\"M6 54h52\"/>","anchor":"<circle cx=\"32\" cy=\"14\" r=\"4\"/><path d=\"M32 18v34M20 30h24M16 40c0 9 7 14 16 14s16-5 16-14\"/><path d=\"M16 40l-5 4M48 40l5 4\"/>","shield":"<path d=\"M32 8 52 16v14c0 12-8 20-20 26-12-6-20-14-20-26V16z\"/><path d=\"M32 22l3 6 6 .5-4.5 4 1.4 6L32 41l-5.9 3.5 1.4-6L24 28.5l6-.5z\"/>","chevron":"<path d=\"M14 30l18-12 18 12M14 40l18-12 18 12M14 50l18-12 18 12\"/>","wings":"<path d=\"M32 22v20\"/><path d=\"M32 27c-6-6-16-8-28-7 6 5 8 10 8 14 8-2 14-1 20 3\"/><path d=\"M32 27c6-6 16-8 28-7-6 5-8 10-8 14-8-2-14-1-20 3\"/>","justice":"<path d=\"M32 12v40M18 52h28M14 22h36M32 14l-18 8M32 14l18 8\"/><path d=\"M8 34c0 4 12 4 12 0L14 22z\"/><path d=\"M44 34c0 4 12 4 12 0L50 22z\"/>","infra":"<path d=\"M6 25c14 0 14 14 26 14s12-14 26-14\"/><path d=\"M6 25v19M58 25v19M6 44h52M18 38v6M32 38v6M46 38v6\"/>","health":"<rect x=\"20\" y=\"11\" width=\"24\" height=\"24\" rx=\"4\"/><path d=\"M32 17v12M26 23h12\"/><path d=\"M7 47h13l4-9 5 16 4-7h24\"/>","energy":"<path d=\"M32 10c8 10 14 18 14 26a14 14 0 0 1-28 0c0-8 6-16 14-26z\"/><path d=\"M33 27l-7 9h6l-2 9 9-11h-6z\"/>","umbrella":"<path d=\"M32 11v6M9 35a23 23 0 0 1 46 0c-4-3.5-8.5-3.5-11.5 0-3-3.5-8-3.5-11.5 0-3-3.5-8-3.5-11.5 0C18 31.5 13 31.5 9 35z\"/><path d=\"M32 35v13a6 6 0 0 0 12 0\"/>","globe":"<circle cx=\"32\" cy=\"32\" r=\"22\"/><path d=\"M10 32h44M32 10v44\"/><path d=\"M14 21c10 6 26 6 36 0M14 43c10-6 26-6 36 0\"/>","aid":"<path d=\"M32 25c-3-5-11-5-13 1-2 6 4 11 13 17 9-6 15-11 13-17-2-6-10-6-13-1z\"/><path d=\"M10 51c5-6 13-6 17-2M54 51c-5-6-13-6-17-2\"/>"};
  var ALLIES=[{"h":"Sector Público","b":"11 entidades","max":14206,"items":[{"n":"Colsubsidio","s":"Caja de Compensación / Privado Social","v":14206,"a":"community","f":"colsubsidio","k":""},{"n":"ICBF","s":"Inst. Col. de Bienestar Familiar · Estado","v":3932,"a":"family","f":"icbf","k":"lg"},{"n":"URosario","s":"Programas internos · Educación","v":1703,"a":"grad","f":"urosario","k":""},{"n":"Secretaría de Educación del Distrito","s":"Gobierno Distrital","v":903,"a":"book","f":"sed","k":""},{"n":"Bogotá Distrito Capital","s":"Gobierno Distrital","v":783,"a":"city","f":"bogota","k":""},{"n":"Armada Nacional de Colombia","s":"Fuerzas Militares","v":771,"a":"anchor","f":"armada","k":"chip lg"},{"n":"MINDEFENSA","s":"Gobierno Nacional","v":719,"a":"shield","f":"mindefensa","k":"chip"},{"n":"CENAC – Ejército Nacional","s":"Fuerzas Militares","v":579,"a":"chevron","f":"","k":"text"},{"n":"Fuerza Aérea Colombiana","s":"Fuerzas Militares","v":465,"a":"wings","f":"fac","k":"lg"},{"n":"UBPD","s":"Justicia Transicional – JEP / Paz","v":197,"a":"justice","f":"ubpd","k":"lg"},{"n":"Enterritorio","s":"Empresa del Estado","v":164,"a":"infra","f":"enterritorio","k":"chip"}]},{"h":"Sector Privado","b":"4 empresas","max":643,"items":[{"n":"Infectoweb","s":"Salud Digital","v":643,"a":"health","f":"infectoweb","k":"chip"},{"n":"AXA Colpatria S.A.","s":"Seguros y Banca","v":305,"a":"shield","f":"axa-colpatria","k":""},{"n":"Ecopetrol","s":"Energía / Petróleo (mixto)","v":291,"a":"energy","f":"ecopetrol","k":"xl"},{"n":"Seguros de Vida Suramericana","s":"Seguros","v":105,"a":"umbrella","f":"sura","k":""}]},{"h":"Organismos Internacionales y Cooperación","b":"2 organizaciones","max":95,"items":[{"n":"PNUD","s":"Programa de las Naciones Unidas para el Desarrollo · Agencia ONU","v":95,"a":"globe","f":"pnud","k":""},{"n":"SWISSAID","s":"Cooperación Suiza para el Desarrollo · Internacional","v":41,"a":"aid","f":"swissaid","k":"chip"}]}];
  var WHY=[["Aval de 8 facultades especializadas","Cada ruta de aprendizaje es diseñada y avalada por la unidad académica experta. No es currículo genérico comprado a un tercero: es conocimiento de punta, generado internamente y validado por docentes con doctorado y experiencia real en el sector."],["Proyectos finales con impacto real","El participante no cierra con un examen teórico, sino con un entregable aplicable a su contexto laboral: un modelo funcional, un dashboard ejecutivo, una estrategia ESG o un producto digital. Su empresa recibe valor tangible desde el módulo 1."],["Certificación con insignia digital verificable","Sus colaboradores obtienen credenciales competitivas, verificables en LinkedIn y plataformas de RRHH. No son certificados de papel: son evidencia digital encriptada de competencias adquiridas."],["Homologación hacia posgrados UR","El talento formado puede continuar hacia especializaciones y maestrías de la Universidad del Rosario sin repetir contenidos. Convierte la inversión en formación en una palanca real de retención y desarrollo de carrera."],["Mentoría y red de 370 años de egresados","Sus equipos acceden a la misma red que han construido presidentes de Colombia, magistrados de la Corte Suprema y líderes empresariales de las principales organizaciones del país."],["Formatos flexibles y totalmente a medida","Presencial, remoto, mixto, semi-presencial o virtual. Adaptamos el formato, la intensidad horaria, los casos de estudio y los indicadores de impacto a la realidad operacional de su organización."]];
  $('#allies').innerHTML=ALLIES.map(function(g){return '<div class="ally-group"><div class="ally-head" data-rv><h3>'+g.h+'</h3><span class="badge">'+g.b+'</span></div><div class="allygrid" data-rv="stagger">'+g.items.map(function(a){
    var img=a.f?'<img'+(a.k==='lg'||a.k==='xl'?' class="'+a.k+'"':'')+' src="'+SRC('aliado-'+a.f+'.png')+'" alt="'+a.n+'">':'';
    var an=!a.f?a.n:(a.k.indexOf('chip')===0?'<span class="chip'+(a.k==='chip lg'?' lg':'')+'">'+img+'</span>':img);
    return '<article class="ally"><span class="art" aria-hidden="true"><svg viewBox="0 0 64 64">'+ART[a.a]+'</svg></span><div class="an">'+an+'</div><p class="as">'+a.s+'</p><p class="ap"><b data-count="'+a.v+'">'+fmt(a.v)+'</b><span>participantes</span></p><div class="meter"><i style="--w:'+Math.max(4,a.v/g.max*100).toFixed(1)+'%"></i></div></article>'}).join('')+'</div></div>'}).join('');
  $('#diffs').innerHTML=WHY.map(function(w,i){return '<article class="diff"><span class="no" aria-hidden="true">0'+(i+1)+'</span><div><h3>'+w[0]+'</h3><p>'+w[1]+'</p></div></article>'}).join('');
  var figs=[],pt=[];
  (function(){var h='';for(var i=0;i<51;i++)h+='<svg class="fig'+(i<50?' on':'')+'" viewBox="0 0 12 16"><use href="#figPerson"/></svg>';$('#picto').innerHTML=h;figs=$$('#picto .fig')})();
  function runPicto(){pt.forEach(clearTimeout);pt=[];figs.forEach(function(f){f.classList.remove('on')});figs.forEach(function(f,i){if(i<50)pt.push(setTimeout(function(){f.classList.add('on')},300+i*28))})}
  function stopPicto(){pt.forEach(clearTimeout);pt=[];figs.forEach(function(f,i){f.classList.toggle('on',i<50)})}
  function countTo(el){var to=+el.dataset.count,pre=el.dataset.prefix||'',run=(el._run=(el._run||0)+1),t0=null;el.textContent=pre+'0';
    requestAnimationFrame(function step(t){if(el._run!==run)return;if(t0===null)t0=t;var p=Math.min(1,(t-t0)/1500),e=1-Math.pow(1-p,3);el.textContent=pre+fmt(to*e);if(p<1)requestAnimationFrame(step)})}
  function countEnd(el){el._run=(el._run||0)+1;el.textContent=(el.dataset.prefix||'')+fmt(+el.dataset.count)}
  function each(list,fn){Array.prototype.forEach.call(list,fn)}
  $$('[data-rv="stagger"]').forEach(function(el){each(el.children,function(c,i){c.style.setProperty('--i',i)})});
  if('IntersectionObserver' in window&&!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)){
    var ro=new IntersectionObserver(function(es){es.forEach(function(en){var el=en.target;
      if(en.isIntersecting&&!el._in){el._in=true;el.classList.add('in');
        each(el.querySelectorAll('[data-count]'),countTo);
        var ms=el.querySelectorAll('.meter');
        if(ms.length){each(ms,function(m){m.classList.add('zero')});setTimeout(function(){each(ms,function(m){m.classList.remove('zero')})},150)}
        if(el.querySelector('#picto'))runPicto();
      }else if(!en.isIntersecting&&el._in){el._in=false;el.classList.remove('in');
        each(el.querySelectorAll('[data-count]'),countEnd);
        if(el.querySelector('#picto'))stopPicto();
      }
    })},{threshold:0,rootMargin:'0px 0px -10% 0px'});
    $$('[data-rv]').forEach(function(el){ro.observe(el)});
  }

  /* Formulario flotante: al pasar la portada de Empresas o Consultoría, el formulario se despega y queda fijo abajo a la derecha; se puede minimizar */
  var FF={empresas:{f:$('#emp-form')},consultoria:{f:$('#con-form')}},ffMin={};
  function ffSync(){
    if(!FF)return;
    Object.keys(FF).forEach(function(k){var o=FF[k],fl=curV===k&&!!o.out;
      if(ffMin[k]===undefined)ffMin[k]=window.innerWidth<1100;
      if(!o.slot)return;
      if(fl&&!o.f.classList.contains('floating')&&!o.f.classList.contains('fhide'))o.slot.style.minHeight=o.f.offsetHeight+'px';
      if(!fl)o.slot.style.minHeight='';
      o.f.classList.toggle('floating',fl&&!ffMin[k]);o.f.classList.toggle('fhide',fl&&ffMin[k]);
    });
    var fb=$('#fab'),cur=FF[curV];if(fb&&cur)fb.hidden=!(cur.out&&ffMin[curV]);
  }
  Object.keys(FF).forEach(function(k){var o=FF[k],f=o.f,slot=document.createElement('div');slot.className='fslot';f.parentNode.insertBefore(slot,f);slot.appendChild(f);o.slot=slot;
    var x=document.createElement('button');x.type='button';x.className='fmin';x.setAttribute('aria-label','Minimizar formulario');x.textContent='–';f.insertBefore(x,f.firstChild);
    x.addEventListener('click',function(){ffMin[k]=true;ffSync()});
    if('IntersectionObserver' in window)new IntersectionObserver(function(es){var en=es[es.length-1];o.out=!en.isIntersecting&&en.boundingClientRect.height>0;ffSync()},{rootMargin:'-80px 0px 0px 0px'}).observe(slot);
  });
  document.addEventListener('click',function(e){var b=e.target.closest('[data-focus]');if(!b)return;var o=FF[curV],el=document.getElementById(b.dataset.focus);
    if(o&&o.out&&el&&o.f.contains(el)){e.stopPropagation();ffMin[curV]=false;ffSync();el.focus({preventScroll:true})}},true);

  /* Nuestro impacto: las tarjetas suben y los números cuentan cada vez que la sección entra en pantalla */
  var stats=$('#stats'),nums=$$('#stats .num'),seen=false;
  function fmt(n){return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g,'.')}
  function count(el){var to=+el.dataset.to,t0=null;function step(t){if(t0===null)t0=t;var p=Math.min(1,(t-t0)/1700),e=1-Math.pow(1-p,3);el.textContent=fmt(to*e);if(p<1&&seen)requestAnimationFrame(step);else el.textContent=fmt(to)}requestAnimationFrame(step)}
  if('IntersectionObserver' in window&&!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)){
    new IntersectionObserver(function(es){es.forEach(function(en){
      if(en.isIntersecting&&!seen){seen=true;stats.classList.add('go');nums.forEach(function(n,i){n.textContent='0';setTimeout(function(){if(seen)count(n)},i*120)})}
      else if(!en.isIntersecting&&seen){seen=false;stats.classList.remove('go');nums.forEach(function(n){n.textContent=fmt(+n.dataset.to)})}
    })},{threshold:.3}).observe(stats);
  }

  /* ===== Página interna de programa ===== */
  var PGI={cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',hour:'<path d="M5 22h14M5 2h14M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',layers:'<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',screen:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',award:'<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',shield:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',check:'<path d="M20 6 9 17l-5-5"/>',arrow:'<path d="M5 12h14M12 5l7 7-7 7"/>',down:'<path d="M12 15V3M7 10l5 5 5-5M5 21h14"/>',chev:'<path d="m9 18 6-6-6-6"/>',plus:'<path d="M12 5v14M5 12h14"/>',book:'<path d="M12 7v14M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',msg:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',star:'<path d="M12 3l2.7 5.6 6.1.8-4.5 4.3 1.1 6.1L12 17l-5.4 2.8 1.1-6.1L3.2 9.4l6.1-.8z"/>'};
  function pgSv(k,x){return '<svg class="pg-ic'+(x?' '+x:'')+'" viewBox="0 0 24 24" aria-hidden="true">'+PGI[k]+'</svg>'}
  var PGAREA={'Negocios':'Economía y Negocios','Finanzas':'Economía y Negocios','Innovación':'Economía y Negocios','Derecho':'Jurisprudencia','Tecnología':'Ciencias e Ingeniería','Salud':'Salud','Bienestar':'Bienestar'};
  function pgProg(id){
    var k=id.charAt(0),i=parseInt(id.slice(1),10),c;
    if(k==='c'&&CAT[i]){c=CAT[i];return {id:id,t:c.t,fac:c.fac,area:c.area,tipo:c.tipo,mod:c.mod,price:c.p,h:c.h,nivel:c.nivel,desc:c.d,img:c.img?SRC('curso-'+c.img+'.jpg'):'',prem:c.prem,cat:'c'}}
    if(k==='n'&&NEXT[i]){c=NEXT[i];return {id:id,t:c.t,fac:c.fac,area:c.area,tipo:c.tipo,mod:c.mod,price:c.p,dur:c.dur,ini:c.ini,desc:c.d,img:c.img?SRC('curso-'+c.img+'.jpg'):'',cat:'n'}}
    if(k==='s'&&SIM[i]){c=SIM[i];return {id:id,t:c.n,fac:'Escuela de Medicina y Ciencias de la Salud',area:'Salud',tipo:c.t,mod:c.m,price:'',dur:c.d,ini:c.f,desc:'Programa de simulación clínica del área '+c.c+', en el Centro Avanzado de Simulación del Rosario.',img:SRC('sim-p'+(i<10?'0':'')+i+'.jpg'),ext:SIMBASE+c.u,cat:'s'}}
    return null;
  }
  function pgRender(id){
    var P=pgProg(id);if(!P)return false;
    var w=P.t.split(' '),last=w.pop(),title=(w.length?w.join(' ')+' ':'')+'<em class="pg-em">'+last+'</em>';
    var wk=P.dur&&/\d/.test(P.dur)&&/seman/i.test(P.dur)?parseInt(P.dur,10):0;
    var fi=[];
    fi.push(['cal','Próximo inicio',P.ini||'Por confirmar']);
    if(P.dur)fi.push(['layers','Duración',P.dur]);
    if(P.h)fi.push(['hour','Intensidad',P.h+' horas']);
    fi.push(['screen','Modalidad',P.mod]);
    if(P.nivel)fi.push(['target','Nivel',P.nivel]);
    fi.push(['award','Certificación','Universidad del Rosario']);
    var live=(P.ini||P.cat==='n')?'<span class="pg-live"><i></i>Inscripciones abiertas</span>':'';
    var price=P.price?'$ '+P.price+'<small>COP</small>':'Consultar';
    var tags='<span class="pg-tag pg-tag-ind">✦ '+P.tipo+'</span>'+(P.prem?'<span class="pg-tag pg-tag-out">✦ Premium</span>':'')+'<span class="pg-tag pg-tag-out">'+P.fac+'</span><span class="pg-tag pg-tag-out">'+P.mod+'</span>';
    var hero='<section class="pg-hero" aria-labelledby="pg-titulo"><div class="pg-hero-bg" aria-hidden="true">'+(P.img?'<img src="'+P.img+'" alt="">':'')+'<div class="pg-g1"></div><div class="pg-grid"></div><div class="pg-orb pg-orb1"></div><div class="pg-orb pg-orb2"></div></div><div class="pg-hero-in">'
      +'<nav class="pg-bc pg-in pg-in1" aria-label="Ruta de navegación"><a href="#inicio" data-go="inicio">Inicio</a>'+pgSv('chev')+'<a href="#cursos" data-go="cursos">Programas</a>'+pgSv('chev')+'<span>'+P.fac+'</span>'+pgSv('chev')+'<span aria-current="page">'+P.t+'</span></nav>'
      +'<div><div class="pg-tags pg-in pg-in1">'+tags+'</div><h1 id="pg-titulo" class="pg-disp pg-h1 pg-in pg-in2">'+title+'</h1><p class="pg-lead pg-in pg-in3">'+P.desc+'</p>'
      +'<div class="pg-cta-row pg-in pg-in4"><a class="pg-btn pg-btn-pri" href="#pg-form" data-pgs="pg-form">Quiero inscribirme '+pgSv('arrow','pg-ic-r')+'</a><a class="pg-btn pg-btn-out" href="#pg-form" data-pgs="pg-form">'+pgSv('down')+' Descargar brochure</a>'+(P.ext?'<a class="pg-btn pg-btn-out" href="'+P.ext+'" target="_blank" rel="noopener">Ver ficha en el sitio actual</a>':'')+'</div>'
      +'<div class="pg-trust pg-in pg-in5"><span>'+pgSv('shield')+'Acreditación de alta calidad</span><span>'+pgSv('users')+'~180.000 egresados rosaristas</span><span>'+pgSv('globe')+'Aliados internacionales</span></div></div>'
      +'<aside class="pg-fact pg-in pg-in6" aria-label="Ficha del programa"><div class="pg-fact-h"><span class="pg-eyebrow">Ficha del programa</span>'+live+'</div><dl class="pg-fgrid" style="margin:0">'
      +fi.map(function(f){return '<div class="pg-fi"><span class="pg-fi-ic">'+pgSv(f[0])+'</span><div><dt class="pg-fi-l">'+f[1]+'</dt><dd class="pg-fi-v" style="margin-left:0">'+f[2]+'</dd></div></div>'}).join('')
      +'</dl><div class="pg-fprice"><div><div class="pg-fi-l">Inversión</div><div class="pg-price" style="margin-top:6px">'+price+'</div></div>'+(P.price?'<span class="pg-okline">'+pgSv('check')+'Pago online</span>':'')+'</div></aside></div></section>';
    var sum='<b>'+(P.price?'$ '+P.price:'Consultar')+'</b>'+(P.h?'<i></i><span>'+P.h+' h</span>':'')+'<i></i><span>'+P.mod+'</span>';
    var sub='<nav class="pg-sub" aria-label="Secciones del programa"><div class="pg-sub-in"><ul>'+[['descripcion','Descripción'],['objetivos','Objetivos'],['dirigido','Dirigido a'],['modulos','Módulos'],['docentes','Docentes'],['credencial','Credencial'],['contacto','Contacto']].map(function(s){return '<li><a href="#pg-'+s[0]+'" data-pgs="pg-'+s[0]+'">'+s[1]+'</a></li>'}).join('')+'</ul><div class="pg-sub-sum">'+sum+'</div></div></nav>';
    var note='<p class="pg-foot-note">Contenido de demostración: se reemplaza con la ficha oficial del programa.</p>';
    var feats=[['book','Contenido actualizado','Programa alineado con las tendencias y necesidades actuales del área.'],['target','Enfoque teórico-práctico','Competencias aplicables desde la primera sesión en tu entorno profesional.'],['msg','Docentes y comunidad','Intercambio con docentes expertos y con otros profesionales del programa.']];
    var objs=['Actualizar tus conocimientos con los enfoques más recientes del área.','Aplicar herramientas y metodologías a casos reales de tu entorno profesional.','Fortalecer las competencias clave para tomar mejores decisiones.','Conectar con docentes y pares para ampliar tu red profesional.'];
    var aud=['Profesionales del área','Egresados rosaristas','Líderes y gerentes','Estudiantes de últimos semestres','Equipos y empresas'];
    var mods=[['I','Fundamentos y marco de referencia','Conceptos clave, estado del arte y enfoques actuales del área.'],['II','Herramientas y metodologías','Instrumentos prácticos para aplicar lo aprendido en tu contexto profesional.'],['III','Casos y aplicación','Análisis de casos reales y ejercicios guiados con los docentes.'],['IV','Proyecto integrador','Aplicación de lo aprendido a un reto de tu organización.']];
    var st=[];if(P.h)st.push([P.h,'Horas']);if(wk)st.push([wk,'Semanas']);st.push([mods.length,'Módulos']);
    var fa=PGAREA[P.area],dl=ORD_DOC.filter(function(j){return PEOPLE[j].f===fa}).slice(0,3);
    var docs=dl.map(function(j){var p=PEOPLE[j];return '<button type="button" class="pg-card pg-doc" data-p="'+j+'" aria-label="Ver perfil de '+p.n+'"><span class="pg-av" aria-hidden="true">'+(PH[j]?'<img src="'+SRC('docente-'+PH[j]+'.jpg')+'" alt="">':ini(p.n))+'</span><h3>'+p.n+'</h3><p>'+p.c+'</p></button>'}).join('');
    var rel=CAT.filter(function(c){return c.id!==id&&c.area===P.area}).concat(CAT.filter(function(c){return c.id!==id&&c.area!==P.area})).slice(0,3);
    var body='<div class="pg-lay"><div>'
      +'<section class="pg-sec pg-rv" id="pg-descripcion"><p class="pg-eyebrow">Descripción</p><h2 class="pg-disp pg-h2">Una formación pensada para ti</h2><p class="pg-prose">'+P.desc+'</p><div class="pg-g3 pg-feat">'+feats.map(function(f){return '<div class="pg-card pg-card-h pg-rv"><span class="pg-fic">'+pgSv(f[0],'pg-ic-l')+'</span><h3>'+f[1]+'</h3><p>'+f[2]+'</p></div>'}).join('')+'</div></section>'
      +'<section class="pg-sec pg-rv" id="pg-objetivos"><p class="pg-eyebrow">Objetivos de aprendizaje</p><h2 class="pg-disp pg-h2">Lo que lograrás</h2><div class="pg-g2 pg-obj">'+objs.map(function(o,n){return '<div class="pg-card pg-card-h"><div class="pg-num">0'+(n+1)+'</div><p>'+o+'</p></div>'}).join('')+'</div>'+note+'</section>'
      +'<section class="pg-sec pg-rv" id="pg-dirigido"><p class="pg-eyebrow">Audiencia</p><h2 class="pg-disp pg-h2">¿A quién va dirigido?</h2><div class="pg-chips">'+aud.map(function(a){return '<span class="pg-chip">'+pgSv('check')+a+'</span>'}).join('')+'</div>'+note+'</section>'
      +'<section class="pg-sec pg-rv" id="pg-modulos"><p class="pg-eyebrow">Plan de estudios</p><h2 class="pg-disp pg-h2">'+mods.length+' módulos temáticos</h2><div class="pg-stats" style="--n:'+st.length+'">'+st.map(function(s){return '<div><b>'+s[0]+'</b><span>'+s[1]+'</span></div>'}).join('')+'</div><div class="pg-acc">'+mods.map(function(m,n){return '<details'+(n===0?' open':'')+'><summary><span class="pg-mn">'+m[0]+'</span><span class="pg-mt">'+m[1]+'</span><span class="pg-pm">'+pgSv('plus')+'</span></summary><div class="pg-bd">'+m[2]+'</div></details>'}).join('')+'</div>'+note+'</section>'
      +'<section class="pg-sec pg-rv" id="pg-docentes"><p class="pg-eyebrow">Experiencia</p><h2 class="pg-disp pg-h2">Docentes de la facultad</h2>'+(docs?'<div class="pg-dgrid">'+docs+'</div>':'')+'<a class="pg-more" href="#docentes" data-go="docentes">Conoce a todos los conferencistas '+pgSv('arrow')+'</a></section>'
      +'<section class="pg-sec pg-rv" id="pg-credencial"><p class="pg-eyebrow">Credencial</p><h2 class="pg-disp pg-h2">Respaldo rosarista</h2><div class="pg-g3 pg-cred">'+[['shield','Credencial verificable','Certificación e insignia digital con verificación institucional*'],['users','Red rosarista','Acceso a la comunidad de egresados, docentes-investigadores y empresas aliadas.'],['layers','Puente a posgrados','Conecta con diplomados, programas ejecutivos y posgrados formales del Rosario.']].map(function(f){return '<div class="pg-card pg-card-h"><span class="pg-fic">'+pgSv(f[0],'pg-ic-l')+'</span><h3>'+f[1]+'</h3><p>'+f[2]+'</p></div>'}).join('')+'</div><p class="pg-foot-note">*Insignia digital según programa académico.</p></section>'
      +'<section class="pg-sec pg-rv" id="pg-contacto"><p class="pg-eyebrow">Contacto</p><h2 class="pg-disp pg-h2">¿Tienes dudas sobre el programa?</h2><div class="pg-card pg-adv"><div class="pg-adv-l"><span class="pg-av" aria-hidden="true">VB</span><div><p class="pg-lbl">Asesora especializada</p><h3 style="margin-top:4px">Vanessa Beltrán Jiménez</h3><a class="pg-mail" href="mailto:educon2@urosario.edu.co">educon2@urosario.edu.co</a></div></div><a class="pg-btn pg-btn-out" href="https://wa.me/573219295847">'+pgSv('phone')+' +57 321 929 5847</a></div></section>'
      +'</div><aside class="pg-side" aria-label="Reserva tu cupo"><div class="pg-card pg-form" id="pg-form"><p class="pg-eyebrow">Reserva tu cupo</p><h2 class="pg-disp">Solicita información</h2><p class="pg-sub-t">Déjanos tus datos y una asesora te contactará para resolver tus dudas y acompañar tu inscripción.</p>'
      +'<div class="pg-fld"><label for="pg-f-nombre">Nombre completo</label><input id="pg-f-nombre" type="text" placeholder="Tu nombre y apellido" autocomplete="name"></div><div class="pg-fld"><label for="pg-f-email">Correo electrónico</label><input id="pg-f-email" type="email" placeholder="tu@correo.com" autocomplete="email" spellcheck="false"></div><div class="pg-fld"><label for="pg-f-cel">Celular (WhatsApp)</label><input id="pg-f-cel" type="tel" placeholder="+57 312 345 6789" autocomplete="tel"></div>'
      +'<div class="pg-chk"><input id="pg-f-habeas" type="checkbox"><label for="pg-f-habeas">Autorizo el tratamiento de mis datos personales según la <a href="https://repository.urosario.edu.co/server/api/core/bitstreams/79f9bc01-3363-455a-bd5c-11da864f2fc3/content" target="_blank" rel="noopener">Política de Tratamiento de Datos</a> de la Universidad del Rosario.</label></div><div class="pg-chk"><input id="pg-f-msj" type="checkbox"><label for="pg-f-msj">Autorizo recibir información por mensajería instantánea.</label></div>'
      +'<button class="pg-btn pg-btn-pri" type="button" data-pgsend="1">Enviar solicitud '+pgSv('arrow','pg-ic-r')+'</button><div class="pg-alt"><span>¿Prefieres hablar ahora?</span><a href="https://wa.me/573219295847">'+pgSv('msg')+'WhatsApp</a></div></div></aside></div>';
    var relH='<section class="pg-rel" id="pg-relacionados" aria-labelledby="pg-rel-t"><div class="pg-rel-in"><div class="pg-rel-h pg-rv"><div><p class="pg-eyebrow">Seguir explorando</p><h2 id="pg-rel-t" class="pg-disp pg-h2" style="font-size:36px">Programas relacionados</h2><p class="pg-sub-p">Avalados por nuestras Escuelas y Facultades.</p></div><a class="pg-btn pg-btn-out pg-btn-pill" href="#cursos" data-go="cursos">Ver catálogo completo '+pgSv('arrow')+'</a></div><div class="pg-cgrid">'+rel.map(function(c){return ccard(c,false)}).join('')+'</div></div></section>';
    var cta='<section class="pg-cta-w" aria-labelledby="pg-cta-t"><div class="pg-cta pg-rv"><h2 id="pg-cta-t" class="pg-disp">Comienza hoy con el respaldo de 370 años de tradición.</h2><p>Reserva tu cupo en este programa o agenda una conversación con nuestro equipo.</p><div class="pg-btns"><a class="pg-btn pg-btn-light" href="#pg-form" data-pgs="pg-form">Reservar mi cupo '+pgSv('arrow','pg-ic-r')+'</a><a class="pg-btn pg-btn-ind" href="#pg-contacto" data-pgs="pg-contacto">Comunícate con un asesor</a></div></div></section>';
    $('#pg-root').innerHTML=hero+sub+body+relH+cta;
    return true;
  }
  var ORD_DOC=[0,1,8,7,2,6,3,5,9,4];
  document.addEventListener('click',function(e){
    var s=e.target.closest('[data-pgs]');
    if(s){e.preventDefault();var el=document.getElementById(s.dataset.pgs);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});return}
    var b=e.target.closest('[data-pgsend]');
    if(b){var t=$('#toast'),m;var n=$('#pg-f-nombre').value.trim(),em=$('#pg-f-email').value.trim(),h=$('#pg-f-habeas').checked;
      if(!h)m='Acepta el tratamiento de datos personales (Habeas Data) para enviar tu solicitud.';
      else if(!n||em.indexOf('@')<1)m='Completa tu nombre y un correo válido.';
      else m='Solicitud recibida (demostración): una asesora te contactará.';
      t.textContent=m;t.hidden=false;clearTimeout(t._h);t._h=setTimeout(function(){t.hidden=true},3600)}
  });
  /* página Conferencistas: carrusel, temáticas, destacado, grilla y formulario */
  (function(){
    var TEMAS=[
      ['Marketing y branding','Marketing en salud','Experiencia de marca','Estrategia comercial'],
      ['Fintech','Legaltech','Comercio electrónico','Derecho financiero'],
      ['Paz y justicia transicional','Derecho ambiental','Sociología jurídica','Instituciones políticas'],
      ['Salud pública','Coaching y bienestar','Liderazgo colaborativo','Ejercicio y salud'],
      ['Educación emocional','Bienestar','Competencias emocionales','Orientación psicopedagógica'],
      ['Transformación digital','Industria 4.0','Gestión ágil de proyectos','Innovación'],
      ['Analítica de datos','Power BI','Gobierno de IA (ISO 42001)','Finanzas'],
      ['Dirección estratégica','Planeación','Efectividad organizacional','Gerencia'],
      ['Medicina alternativa','Terapia neural','Neurorrehabilitación','Educación'],
      ['Teatro musical','Danza y canto','Expresión escénica','Creatividad']
    ];
    var CATS=[
      {n:'Liderazgo y estrategia',c:'#ff9944',p:[7,3,0]},
      {n:'Marketing y negocios',c:'#d80f23',p:[0,6]},
      {n:'Derecho y Fintech',c:'#54bae2',p:[1,2]},
      {n:'Transformación digital y datos',c:'#3a8cef',p:[5,6]},
      {n:'Bienestar y salud',c:'#209b89',p:[3,4,8]},
      {n:'Inteligencia emocional',c:'#85d3c6',p:[4,3]},
      {n:'Arte y creación',c:'#9897d3',p:[9]}
    ];
    var ORD=[4,2,0,1,7,5,6,3,8,9],HERO=[4,0,1,7,5],FEAT=2,WA='https://wa.me/573219295847?text=';
    var sel=-1,q='',cur=0,tm=null;
    function first(p){return p.n.split(' ')[0]}
    function img(i){return PH[i]?SRC('docente-'+PH[i]+'-card.jpg'):''}
    function nz(s){return s.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase()}
    /* carrusel */
    var sl=$('#spk-slides'),dt=$('#spk-dots');
    sl.innerHTML=HERO.map(function(i,k){var p=PEOPLE[i];return '<article class="spk-slide'+(k?'':' on')+'" style="--acc:'+FACC[p.f]+'" aria-hidden="'+(k?'true':'false')+'"><img src="'+img(i)+'" alt=""><div class="cap"><span class="tag">'+TEMAS[i][0]+'</span><h3>'+p.n+'</h3><p class="cred">'+p.c+'</p><button class="btn red sm" type="button" data-agenda="'+i+'"'+(k?' tabindex="-1"':'')+'>Agenda a '+first(p)+' →</button></div></article>'}).join('');
    dt.innerHTML=HERO.map(function(i,k){return '<button type="button" data-dot="'+k+'" aria-label="Ver a '+PEOPLE[i].n+'" aria-current="'+(k===0)+'"></button>'}).join('');
    function goSl(k){var S=sl.children,D=dt.children;cur=(k+S.length)%S.length;for(var j=0;j<S.length;j++){var on=j===cur;S[j].classList.toggle('on',on);S[j].setAttribute('aria-hidden',!on);S[j].querySelector('.btn').tabIndex=on?0:-1;D[j].setAttribute('aria-current',on)}}
    var calm=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
    function play(){stop();if(!calm)tm=setInterval(function(){if(!$('#v-docentes').hidden&&!document.hidden)goSl(cur+1)},6000)}
    function stop(){if(tm)clearInterval(tm);tm=null}
    var box=$('#spk-slider');
    box.addEventListener('mouseenter',stop);box.addEventListener('mouseleave',play);box.addEventListener('focusin',stop);box.addEventListener('focusout',play);
    box.addEventListener('click',function(e){var a=e.target.closest('[data-sl]');if(a){goSl(cur+ +a.dataset.sl);return}var d=e.target.closest('[data-dot]');if(d)goSl(+d.dataset.dot)});
    play();
    /* temáticas */
    $('#spk-cats').innerHTML=CATS.map(function(c,k){return '<button class="spk-cat" type="button" data-cat="'+k+'" style="--acc:'+c.c+'"><i aria-hidden="true"></i><b>'+c.n+'</b><span>'+c.p.length+(c.p.length===1?' conferencista':' conferencistas')+' →</span></button>'}).join('');
    /* destacado */
    var fp=PEOPLE[FEAT];
    $('#spk-feat').innerHTML='<div class="ph"><img src="'+img(FEAT)+'" alt="'+fp.n+'"></div><div class="tx"><p class="eyebrow">Conferencista destacado</p><h2>'+fp.n+'</h2><p class="cred">'+fp.c+' · '+fp.f+'</p><p class="bio">'+fp.b+'</p><p class="spk-temas-t">Temas clave /</p><ul class="spk-temas">'+TEMAS[FEAT].map(function(t,k){return '<li><b>0'+(k+1)+'</b>'+t+'</li>'}).join('')+'</ul><div class="btns"><button class="btn red" type="button" data-agenda="'+FEAT+'">Agendar a '+first(fp)+'</button><button class="btn ghost" type="button" data-p="'+FEAT+'">Ver perfil</button></div></div>';
    /* grilla */
    var fb=$('#doc-f'),gr=$('#doc-grid'),ct=$('#doc-count');
    function card(i){var p=PEOPLE[i];return '<button class="spk" type="button" data-p="'+i+'" style="--acc:'+FACC[p.f]+'" aria-label="Ver perfil de '+p.n+'">'+(PH[i]?'<img src="'+img(i)+'" alt="">':'')+'<span class="cap"><span class="bar" aria-hidden="true"></span><h3>'+p.n+'</h3><span class="tp">'+TEMAS[i][0]+'<br>'+TEMAS[i][1]+'</span><span class="go">Ver perfil →</span></span></button>'}
    function chips(){fb.innerHTML='<button type="button" class="fchip" data-cf="-1" aria-pressed="'+(sel===-1)+'">Todas</button>'+CATS.map(function(c,k){return '<button type="button" class="fchip" data-cf="'+k+'" style="--acc:'+c.c+'" aria-pressed="'+(sel===k)+'"><i aria-hidden="true"></i>'+c.n+'</button>'}).join('')}
    function draw(){
      var k=nz(q.trim()),L=ORD.filter(function(i){var p=PEOPLE[i];return (sel<0||CATS[sel].p.indexOf(i)>-1)&&(!k||nz(p.n+' '+p.f+' '+TEMAS[i].join(' ')).indexOf(k)>-1)});
      gr.innerHTML=L.length?L.map(card).join(''):'<p class="muted">No encontramos conferencistas con esa búsqueda. Prueba con otro nombre o tema.</p>';
      ct.textContent=L.length+(L.length===1?' conferencista':' conferencistas');chips();
    }
    fb.addEventListener('click',function(e){var b=e.target.closest('[data-cf]');if(!b)return;sel=+b.dataset.cf;draw()});
    $('#doc-q').addEventListener('input',function(e){q=e.target.value;draw()});
    $('#spk-cats').addEventListener('click',function(e){var b=e.target.closest('[data-cat]');if(!b)return;sel=+b.dataset.cat;q='';$('#doc-q').value='';draw();$('#spk-todos').scrollIntoView({block:'start'})});
    draw();
    /* formulario */
    $('#spk-tema').innerHTML+=CATS.map(function(c){return '<option>'+c.n+'</option>'}).join('');
    $('#spk-quien').innerHTML+=ORD.map(function(i){return '<option value="'+i+'">'+PEOPLE[i].n+'</option>'}).join('');
    window.spkAgenda=function(i){
      if(dlg&&dlg.open){if(dlg.close)dlg.close();else dlg.removeAttribute('open')}
      if($('#v-docentes').hidden)go('docentes');
      $('#spk-quien').value=i===''||i==null?'':String(i);
      setTimeout(function(){var f=$('#spk-contacto');f.scrollIntoView({block:'start'});$('#spk-nombre').focus({preventScroll:true})},60);
    };
  })();
  /* Habeas Data: las opciones de mentorIA se habilitan al aceptar el tratamiento de datos */
  (function(){var hb=$('#habeas'),card=$('.mentor');if(!hb||!card)return;
    function sync(){card.classList.toggle('nohb',!hb.checked)}
    hb.addEventListener('change',sync);sync();
    document.addEventListener('click',function(e){var a=e.target.closest('#ruta a[href*="mentoria"]');if(!a||hb.checked)return;e.preventDefault();
      var t=$('#toast');t.textContent='Acepta el tratamiento de datos personales (Habeas Data) para continuar.';t.hidden=false;clearTimeout(t._h);t._h=setTimeout(function(){t.hidden=true},3200);hb.focus()},true);
  })();
  route((location.hash||'').slice(1)||'inicio',true);
})();
