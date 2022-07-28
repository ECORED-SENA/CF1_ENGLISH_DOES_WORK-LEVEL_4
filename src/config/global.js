export default {
  global: {
    componenteFormativo:
      '<em>When I was younger</em><br><span class=r-3>Cuando era más joven</b>',
    descripcionCurso:
      // 'This component is going to be the introduction to the past tenses, starting with the past forms of the verb “to be” (was / were), useful time expressions to refer to the past (ago, last, yesterday, etc.), and suitable vocabulary to build sentences and describe information about experiences of our own life in the past tense. <br><br>
      'Este componente va a ser la introducción a los tiempos pasados, empezando con las formas en pasado del verbo <em>“to be” (was/were)</em>, expresiones de tiempo útiles para hacer referencia al pasado <em>(ago, last, yesterday, etc.)</em> y vocabulario idóneo para construir oraciones y describir información sobre experiencias de nuestra propia vida en tiempo pasado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/flag.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          '<em>Verb To Be in the Past Tense</em> (verbo <em>"to be"</em> en pasado)   ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              '<em>Uses of the verb "to be" in the past tense</em> (Usos del verbo <em>"to be"</em> en tiempo pasado)      ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              '<em>Differences: Was vs. Were</em> (Diferencias: <em>Was vs. Were</em>) ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: '<em>Sentence structures </em>(Estructuras de oraciones)  ',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          '<em>Time expressions for past tense</em> (Expresiones temporales para tiempo pasado) ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Let&#39s talk about my life</em> (Hablemos de mi vida)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              '<em>How I used to feel in the past</em> (Cómo solía sentirme en el pasado)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: '<em>The stages of my life</em> (Las etapas de mi vida)',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              '<em>My social and family life</em> (Mi vida social y familiar)  ',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Verb To be in the past tense (Verbo To be en pasado)',
      referencia:
        'Universidad Nacional Autónoma de México [UNAM]. (s. f.). Simple past of the verb TO BE. Ambiente Virtual de Idiomas.',
      tipo: 'Artículo',
      link:
        'https://avi.cuaed.unam.mx/repositorio/moodle/pluginfile.php/2099/mod_resource/content/24/contenido/index.html',
    },
    {
      tema: 'Verb To be in the past tense (Verbo To be en pasado)',
      referencia:
        'British Council. (s. f.). Past simple - verb &#39to be&#39. LearnEnglish Kids. ',
      tipo: 'Artículo',
      link:
        'https://learnenglishkids.britishcouncil.org/grammar-practice/past-simple-verb-be',
    },
    {
      tema: 'Verb To be in the past tense (Verbo To be en pasado)',
      referencia:
        'Woodward English. (2017). TO BE - Past & Present Tense - Affirmative Sentences [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yhq1wuu7NFk',
    },
    {
      tema:
        'Time expressions for Past Tense  (Expresiones temporales para el tiempo pasado)',
      referencia:
        'Universidad Nacional Autónoma de México [UNAM]. (s. f.). Past time expressions (yesterday, last week, last night, two years ago). Ambiente Virtual de Idiomas.',
      tipo: 'Artículo',
      link:
        'https://avi.cuaed.unam.mx/repositorio/moodle/pluginfile.php/1987/mod_resource/content/17/contenido/index.html',
    },
    {
      tema: 'How I used to feel in the past (Cómo solía sentirme en el pasado)',
      referencia: 'British Council. (s. f.). Feelings. LearnEnglish Kids. ',
      tipo: 'Artículo',
      link:
        'https://learnenglishkids.britishcouncil.org/category/topics/feelings',
    },
    {
      tema: 'The stages of my life (Las etapas de mi vida)',
      referencia:
        'Cambridge University Press. (s. f.). Stages of life. SMART Vocabulary: related words and phrases. Cambridge Dictionary. ',
      tipo: 'Artículo',
      link:
        'https://dictionary.cambridge.org/es-LA/topics/time/stages-of-life/',
    },
    {
      tema: 'The stages of my life (Las etapas de mi vida)',
      referencia:
        'Woodward English. (2020). Stages of Childhood - English Vocabulary [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Tr5DUga_-jw',
    },
  ],
  glosario: [
    {
      termino: '<em>Indicative mood</em> <br> / Modo indicativo ',
      significado:
        'modo gramatical usado para expresar declaraciones objetivas, cosas que suceden en realidad y hechos conocidos.',
    },
    {
      termino: '<em>Past tense</em> <br> / Tiempo pasado',
      significado:
        'tiempo verbal que hace referencia a acciones que se llevaron a cabo en un momento o tiempo previo al ahora.',
    },
    {
      termino: '<em>Subjunctive mood</em> <br> / Modo subjuntivo',
      significado:
        'modo gramatical utilizado para expresar un deseo o sugerencia, situaciones hipotéticas, condicionales o improbables, cosas que no son reales.',
    },
    {
      termino: '<em>Time expressions</em> <br> / Expresiones de tiempo',
      significado:
        'son expresiones que dan información sobre el tiempo en que sucede algo y se emplean para hablar del momento en que se realiza una acción.',
    },
    {
      termino: '<em>Verb "to be"</em> <br> / Verbo “ser” o “estar”',
      significado:
        'verbo irregular que, en el idioma inglés, tiene diferentes formas según el tiempo y la persona gramatical con la que está conjugado, y puede ser usado como verbo principal (por ejemplo, en los tiempos simples) o como verbo auxiliar (por ejemplo, en los tiempos continuos).',
    },
  ],
  referencias: [
    {
      referencia:
        'Collins. (s. f.-a). How do you use the verb &#39 be&#39  in English? - Easy Learning Grammar. ',
      link:
        'https://grammar.collinsdictionary.com/es/gramatica-de-aprendizaje/how-do-you-use-the-verb-be-in-english',
    },
    {
      referencia: 'Collins. (s. f.-b). Subjunctive definición y significado. ',
      link:
        'https://www.collinsdictionary.com/es/diccionario/ingles/subjunctive',
    },
    {
      referencia:
        'Collins. (s. f.-c). What is the subjunctive in English? - Easy Learning Grammar. ',
      link:
        'https://grammar.collinsdictionary.com/es/gramatica-de-aprendizaje/what-is-the-subjunctive-in-english',
    },
    {
      referencia:
        'Equipo académico - Teaching Centre in Colombia. (2021). Past simple del inglés: uso, estructura y conjugación. British Council Colombia.',
      link: 'https://www.britishcouncil.co/blog/aprende-ingles/past-simple',
    },
    {
      referencia:
        'Universidad Nacional Autónoma de México [UNAM]. (s. f.). Past time expressions (yesterday, last week, last night, two years ago). Ambiente Virtual de Idiomas.',
      link:
        'https://avi.cuaed.unam.mx/repositorio/moodle/pluginfile.php/1987/mod_resource/content/17/contenido/index.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Michelle Manuela Pérez Hernández',
        cargo: 'Experta Temática',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Gloria Lida Alzate Suárez',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital ',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuly Andrea Rey Quiñonez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada        ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
