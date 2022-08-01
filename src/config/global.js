export default {
  global: {
    componenteFormativo: 'Cálculo de GEI y estrategias de gestión.',
    descripcionCurso:
      'Este componente permite conocer los límites de medición de los GEI, el proceso para el seguimiento, recolección de datos y selección de factores de emisión, los pasos a seguir para desarrollar inventarios de emisiones y la medición de la huella de carbono; se identificarán las herramientas para el cálculo de las emisiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
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
        titulo: 'Determinación de los límites de medición de GEI',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Límites organizacionales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Límites operacionales',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Seguimiento a las emisiones a través del tiempo',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Recolección de datos y selección de factores de emisión',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Cálculo de la huella de carbono: contabilización de emisiones de GEI',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Alcance 1: Emisiones directas de GEI',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              'Alcance 2: Emisiones indirectas de GEI asociadas a la electricidad',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Otras emisiones indirectas',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Herramientas de cálculo de emisiones de GEI',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Herramientas intersectoriales',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Herramientas específicas por sector',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Reporte de emisiones de GEI',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Estrategias de gestión de las emisiones de GEI',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Bonos de carbono',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Programa de ahorro y uso eficiente de la energía',
            hash: 't_7_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
  referencias: [
    {
      referencia:
        'Banco Interamericano de Desarrollo (BID). (Junio de 2013). Estrategias de mitigación y métodos para la estimacion de las emisiones de Gases Efecto Invernadero en el sector transporte.',
      link:
        'https://publications.iadb.org/publications/spanish/document/Estrategias-de-mitigaci%C3%B3n-y-m%C3%A9todos-para-la-estimaci%C3%B3n-de-las-emisiones-de-gases-de-efecto-invernadero-en-el-transporte.pdf',
    },
    {
      referencia:
        'BSI España. (11 de febrero de 2011). Huella de carbono. Cálculo de emisiones (PAS 2050) Y Neutralidad de carbono (PAS 2060). Barcelona, España.',
      link: 'http://www.ecotech.cat/pas2050.pdf',
    },
    {
      referencia:
        'Castiblanco, C. (s.f.). Curso internacional: Cambio climático, economía ambiental y estilos de desarrollo. Bogotá: Comisión Económica para América Latina y el Caribe CEPAL y Unversidad Nacional de Colombia. ',
      link:
        'https://www.cepal.org/sites/default/files/courses/files/presentacion_carmenza_castiblanco.pdf',
    },
    {
      referencia:
        'Ihobe con la colaboración de Factor CO2. (Marzo de 2013). 7 metodologías para el cálculo de emisiones de gases de efecto invernadero. Ihobe, Sociedad Pública de Gestión Ambiental; Departamento de Medio Ambiente y Política Territorial Gobierno Vasco.',
      link:
        'https://www.euskadi.eus/contenidos/documentacion/7metodologias_gei/es_def/adjuntos/7METODOLOGIAS.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2017). Política Nacional de Cambio Climático. Bogotá D.C., Colombia.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2022/01/9.-Politica-Nacional-de-Cambio-Climatico.pdf',
    },
    {
      referencia:
        'Ministerio de ambiente y desarrollo sostenible - Colombia. (15 de diciembre de 2016). Tutorial calculadora de carbono. Ministerio de ambiente y desarrollo sostenible - Colombia.',
      link:
        'https://www.youtube.com/watch?v=Zd84O9FZ6b0&ab_channel=MinisteriodeAmbienteyDesarrolloSostenible-Colombia',
    },
    {
      referencia:
        'Ministerio para la transición Ecológica. (2016). Guía para el cálculo de la huella de carbono y para la elaboración de un plan de mejora de una organización. Madrid: Oficina Española de Cambio Climático. Ministerio para la Transición.',
      link:
        'https://www.miteco.gob.es/es/cambio-climatico/temas/mitigacion-politicas-y-medidas/guia_huella_carbono_tcm30-479093.pdf',
    },
    {
      referencia:
        'Ochoa, O. (2016). Bonos de carbono: desarrollo conceptual y aproximación crítica. MisiónJurídica, 9(11), 289-297.',
      link:
        'https://www.revistamisionjuridica.com/wp-content/uploads/2020/09/Bonos-de-carbono-desarrollo-conceptual-y-aproximacion-critica.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Año base',
      significado:
        'Un año determinado o el promedio de varios años, con base en el cual se da seguimiento en el tiempo a las emisiones de una organización o empresa.',
    },
    {
      termino: 'Cambio estructural',
      significado:
        'Cambio en los límites organizacionales y operacionales de una organización que resulta de la transferencia de la propiedad o el control de emisiones de una organización a otra.',
    },
    {
      termino: 'Factor de emisión',
      significado:
        'Factor que permite estimar emisiones de GEI a partir de los datos de actividades disponibles (como toneladas de combustible consumido, toneladas de producto producido) y las emisiones totales de GEI.',
    },
    {
      termino: 'Reporte',
      significado:
        'Presentación de información relacionada con la cuantificación de las emisiones de GEI de la organización a sus partes interesadas internas y/o externas tales como autoridades reguladoras, accionistas, público en general y partes involucradas.',
    },
    {
      termino: 'Umbral de significancia',
      significado:
        'Criterio cualitativo o cuantitativo para definir cualquier cambio relevante en los datos, límite de inventario, los métodos de cálculo o cualquier otro factor significativo que permite definir un recálculo de las emisiones del año base.',
    },
  ],
  complementario: [
    {
      tema:
        'Cálculo de la huella de carbono: contabilización de emisiones de GEI.',
      referencia:
        'Guallasamin, K., Simón, D. (2018). Huella de carbono del cultivo de rosas en Ecuador comparando dos metodologías: GHG Protocol vs. PAS 2050. Letras verdes. Revista latinoamericana de estudios socioambientales, 27-56.',
      tipo: 'Artículo',
      link: 'https://doi.org/10.17141/letrasverdes.24.2018.3091',
    },
    {
      tema:
        'Cálculo de la huella de carbono: contabilización de emisiones de GEI.',
      referencia:
        'Ministerio de ambiente y desarrollo sostenible - Colombia. [Ministerio de Ambiente y Desarrollo Sostenible - Colombia]. (2016, 15 de diciembre). Tutorial calculadora de carbono. [video]. Youtube',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=Zd84O9FZ6b0&ab_channel=MinisteriodeAmbienteyDesarrolloSostenible-Colombia',
    },
    {
      tema: 'Herramientas de cálculo de emisiones de GEI.',
      referencia:
        'La Patria Manizales. [La Patria Manizales]. (2020, 19 de diciembre). Herramientas para medir la huella de carbono. [video]. Youtube',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=m8S4wMFNBrc&ab_channel=LaPatriaManizales',
    },
    {
      tema: 'Estrategias de gestión de las emisiones de GEI.',
      referencia:
        'South Pole. [South Pole].  (2018, 17 de julio). ¿Qué son los créditos de carbono? [video]. Youtube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=eUUNNvmK5Rg&ab_channel=SouthPole',
    },
    {
      tema: 'Estrategias de gestión de las emisiones de GEI.',
      referencia:
        'Tecnológico de Monterrey - Innovación educativa. [Tecnológico de Monterrey | Innovación Educativa]. (2017, 27 de septiembre). Incentivos que promueven la mitigación del cambio climático. [video]. Youtube',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=2ewluRi2z8Y&ab_channel=Tecnol%C3%B3gicodeMonterrey%7CInnovaci%C3%B3nEducativa',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ingrid Natalia Lozano Muñoz',
        cargo: 'Experto Temático',
        centro: 'Regional Tolima – Centro Agropecuario La Granja.',
      },
      {
        nombre: 'Jeimy Lorena Romero Perilla',
        cargo: 'Diseñador Instruccional',
        centro:
          'Regional Norte de Santander - Centro de la industria, la empresa y los servicios',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesor Metodológico',
        centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Mauricio Gómez Delgado',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez ',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
