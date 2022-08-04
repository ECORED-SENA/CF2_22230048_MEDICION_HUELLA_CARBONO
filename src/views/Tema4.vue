<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 4
      h1 Cálculo de la huella de carbono: contabilización de emisiones de GEI

    
    .row.mb-4(data-aos="fade-right")
      p Luego de determinar los límites de medición de GEI, se puede iniciar con el ejercicio de cuantificación de las emisiones de GEI. Para facilitar el ejercicio de cuantificación de las emisiones de GEI, las organizaciones deben identificar las fuentes de emisión que están asociadas a las actividades y operaciones que fueron consideradas a analizar. 
      span Para conocer las principales fuentes de emisión de GEI, revise con atención el recurso educativo propuesto: 

    .row.mb-2(data-aos="fade-down")
        .col-md-12
          .tarjeta.fondo-slyder-1.mb-5(data-aos="fade-up")
            SlyderA
              .row.p-2
                .col-md-4
                  h4 Fuentes fijas
                  p Equipos estacionarios o fijos, como calderas, hornos, entre otros, que realizan procesos de combustión para generar energía en forma de calor o electricidad.
                .col-md-8
                  figure
                    img.tam(src='@/assets/curso/tema4/img1.png', alt='Industria')
                
              .row.p-2
                .col-md-4
                  h4 Fuentes móviles
                  p Vehículos automotores, ferrocarriles, aeronaves, embarcaciones u otro equipo móvil que desarrolle procesos de combustión a partir de fuentes fósiles.
                .col-md-8
                  figure.p-2
                    img.tam(src='@/assets/curso/tema4/img2.png', alt='Varios autos')
                
              .row.p-2
                .col-md-4
                  h4 Fuentes de proceso
                  p Emisiones generadas por procesos químicos o físicos como las emisiones de PFC en la fundición de aluminio, entre otras. 

                .col-md-8
                  figure.p-2
                    img.tam(src='@/assets/curso/tema4/img3.png', alt='Trabajadores')
                
              .row.p-2
                .col-md-4
                  h4 Fuentes fugitivas
                  p Liberaciones intencionales o no intencionales generadas por plantas de tratamiento de agua residual, torres de enfriamiento, plantas de procesamiento de gas, fugas de gas en las uniones, sellos, empaques o juntas de equipos. 
                .col-md-8
                  figure.p-2
                    img.tam(src='@/assets/curso/tema4/img4.png', alt='Industria')

    .row.mb-4(data-aos="fade-right")
      p Es innegable que todas las empresas realizan procesos y actividades encaminadas a la producción de un producto o la prestación de un servicio y la ejecución de estos generan emisiones directas o indirectas de una o varias fuentes de emisión.
      span Con el fin de determinar las fuentes de emisión directas e indirectas de la organización objeto de cuantificación del inventario de emisiones y la huella de carbono, se han definido los siguientes alcances, para conocerlos revise con atención el recurso educativo propuesto:      

    .row.mb-4(data-aos="fade-down")
      TabsB.color-acento-contenido.mb-5
        .py-4.py-md-5(titulo="CO2 Alcance 1" :icono="require('@/assets/curso/tema4/vec1.png')")
          .row.align-items-center
            .col-md-2
              figure.der.mb-4
                img(src='@/assets/curso/tema4/vec4.png', alt='Texto que describa la imagen' style= "width: 105px")
            .col-md-10.mb-0.mb-md-0
              h4 Emisiones directas de GEI: 
              p Las emisiones que están definidas en este alcance son las fuentes sobre las cuales la organización tiene el control, como las emisiones generadas por equipos de combustión y parque automotor perteneciente o con control de la organización. Las emisiones de GEI generadas por la combustión de biomasa, los GEI no contemplados por el Protocolo de Kyoto como los CFC, NOX, entre otros, no deben ser incluidos en la cuantificación de este alcance.

            

        .py-4.py-md-5(titulo="CO2 Alcance 2" :icono="require('@/assets/curso/tema4/vec2.png')")
          .row.align-items-center
            .col-md-2
              figure.der.mb-4
                img(src='@/assets/curso/tema4/vec5.png', alt='Texto que describa la imagen' style= "width: 105px")
            .col-md-10.mb-0.mb-md-0
              h4 Emisiones indirectas de GEI:
              p.mb-2 Asociadas a la electricidad: las emisiones que están definidas en este alcance son exclusivamente las emisiones asociadas a la generación eléctrica que es comprada y consumida por la organización para el desarrollo de sus actividades y procesos.
              p Estas emisiones tienen lugar en la planta de generación eléctrica.  


        .py-4.py-md-5(titulo="CO 2 Alcance 3" :icono="require('@/assets/curso/tema4/vec3.png')")
          .row.align-items-center
            .col-md-2
              figure.der.mb-4
                img(src='@/assets/curso/tema4/vec6.png', alt='Texto que describa la imagen' style= "width: 105px")
            .col-md-10.mb-0.mb-md-0
              h4 Otras emisiones indirectas: 
              p Las emisiones que están definidas en este alcance son aquellas emisiones indirectas que no son asociadas a la generación eléctrica y son consecuencia de las actividades de la organización, pero sobre las cuales no tiene el control, como la obtención de materias primas, el transporte de materias primas y combustibles necesarios para la operación de la organización, entre otras.
              
    .row.mb-4(data-aos="fade-right")
      p Cabe denotar que en la metodología establecida en el estándar ISO 14064-1:2019 estos alcances son definidos en 6 categorías donde la categoría 1 y 2 son análogas a los alcances 1 y 2 y las categorías 3, 4, 5 y 6 son consideradas como el alcance 3. 

    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-down")
      .col-md-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Estos alcances son definidos, para facilitar a las organizaciones la cuantificación de las emisiones directas e indirectas, que puedan ser comparables en tiempo y provean información transparente y confiable para establecer metas de reducción de emisiones de GEI aportando, de esta forma, al cumplimiento de las políticas de cambio climático.<br><br/> Para realizar una correcta cuantificación de las emisiones de GEI se hace necesario realizar la contabilización y reporte de los alcances 1 y 2.
    separador
      
    #t_4_1.titulo-segundo.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1	Alcance 1: Emisiones directas de GEI
   
    .row.mb-4(data-aos="fade-right")
      p Las organizaciones que cuantifican y reportan las emisiones de GEI de las fuentes sobre las cuales tiene control, deben realizar el análisis de estas en el alcance 1. <b>Las emisiones directas de GEI son generadas por la ejecución de las siguientes actividades o procesos.</b>

    .row.mb-4(data-aos="fade-right")
      ul.lista-ul--color
        li 
          i.fas.fa-atom
          | Generación de electricidad, calor o vapor: emisiones de calderas, hornos, turbinas, entre otras.
        li 
          i.fas.fa-atom
          | Procesos físicos o químicos: emisiones generadas por la manufactura de químicos y materiales.
        li 
          i.fas.fa-atom
          | Transporte de materiales, productos, residuos y empleados: emisiones derivadas de la combustión de fuentes móviles como vehículos, aviones, barcos, entre otras.
        li 
          i.fas.fa-atom
          | Emisiones fugitivas: emisiones resultantes de liberaciones intencionales o no intencionales.

    .row(data-aos="fade-down")
      .bg_fondo_3.p-4
        .row.align-items-center(data-aos="zoom-in-up")
          .col-12.col-md-8
            p.p-2 Si la organización es generadora de energía eléctrica, productora de cemento, aluminio o acero, manufacturera o de tipo industrial y realiza la venta de estos servicios y productos, la organización debe contabilizar las emisiones asociadas a este proceso físico o químico en el alcance 1, siempre y cuando las organizaciones tengan el control sobre estos procesos, lo que quiere decir que las emisiones asociadas a la venta o transferencia de productos y servicios deben ser cuantificadas y reportadas en el alcance 1.<br><br/>Por otro lado, si las organizaciones sólo realizan actividades administrativas en algunas ocasiones pueden que no tengan fuentes de emisión directa de GEI, pero si estas cuentan u operan vehículos propios, sistemas de refrigeración o equipos de combustión estas emisiones deben ser cuantificadas y reportadas en alcance 1.
          .col-12.col-md-4
            figure.arri1
              img(src="@/assets/curso/tema4/img5.png")
    separador

    #t_4_2.titulo-segundo.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2	Alcance 2: Emisiones indirectas de GEI asociadas a la electricidad

    .row.justify-content-center.align-items-center.mb-4
      .col-md-6(data-aos="fade-right")
        figure.mb-4
          img(src='@/assets/curso/tema4/img6.png', alt='Texto que describa la imagen')
      .col-md-6(data-aos="fade-left")
        p Las organizaciones que cuantifican y reportan las emisiones de GEI derivadas del uso de la energía eléctrica comprada para poder desarrollar sus procesos y actividades, deben realizar el análisis de estas en el alcance 2. Para la mayoría de las organizaciones las emisiones cuantificadas en este alcance son las fuentes más significativas y con mayor porcentaje de participación en las emisiones totales generadas, por ello sobre este alcance se centra la implementación de medidas o estrategias que propendan por su reducción.
        span Asimismo, el análisis de este alcance en la organización representa una oportunidad pues le permite tener información y seguimiento a los costos monetarios, de mitigación y compensación asociados con la compra de energía y con ello establecer programas de ahorro y uso eficiente de la energía, compra de energía verde certificada a través de certificados I-REC, compra de bonos de carbono, instalación de plantas de cogeneración in situ, entre otras.
    
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-8
        .cajon.color-primario.p-4.mb-4(style='background-color: #E5FFE9')
          .row.justify-content-center.align-items-center
            .col-md-2.col-8
              figure
                img(src='@/assets/curso/tema4/vec7.png' alt='AvatarTop')
            .col-md-10
              p.mb-0 Es importante resaltar que todas las organizaciones generan emisiones directas asociadas a la compra de electricidad ya que este servicio es indispensable para el desarrollo de sus actividades y procesos indistintamente de su COR de negocio.
    separador

    #t_4_3.titulo-segundo.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3	Otras emisiones indirectas

    .row.mb-4(data-aos="fade-right")
      p Cabe resaltar que las organizaciones no están obligadas a cuantificar y reportar este alcance, sin embargo, la cuantificación de este permite tener trazabilidad del impacto real en cuanto a emisiones, en toda la cadena de valor de la organización y a lo largo del ciclo de vida de todos sus productos y/o servicios.

    .row.mb-4(data-aos="fade-down")
      figure
        img(src='@/assets/curso/tema4/img2.jpg' alt='AvatarTop')

    .row.mb-4(data-aos="fade-right")
      p Estas emisiones son producto de las actividades de la organización pero que proceden de fuentes que no están bajo su control ni son de su propiedad, e incluye las emisiones corriente arriba y corriente abajo de los procesos sobre los cuales la organización tiene el control. 
      span.mb-2 En este alcance las organizaciones pueden decidir cuáles fuentes de emisión cuantificar y reportar, lo que en ocasiones impide la comparabilidad con empresas del mismo sector. 
      p Las fuentes de emisión corriente arriba y corriente abajo son 15 las cuales son:


    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Figura 3.
      span Fuentes de emisión corriente arriba y corriente abajo.

    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-down")
      .col-md-8.col-12
        figure.mb-4
          img(src='@/assets/curso/tema4/fond.svg' alt='AvatarTop')
      .col-md-4.col-12
        .row.m.mb-4
          .col-md-12.mb-4.col-12
            .tarjeta.tarjeta--naranja.p-4
              SlyderA(tipo="b")
                .row.p-2
                  .col-md-12.mb-0.mb-md-0
                    h5 Fuentes corriente arriba
                    ol.lista-ol
                        li.mb-0 
                          .text-bold 1.
                          |  Artículos y servicios comprados.
                        li.mb-0 
                          .text-bold 2.
                          | Bienes de capital.
                        li.mb-0 
                          .text-bold 3.
                          | Actividades relacionadas con el combustible y la energía (no incluídas en alcance 1 y 2).
                        li.mb-0 
                          .text-bold 4.
                          | Transporte y distribución corriente arriba.

                .row.p-2
                  .col-md-12.mb-0.mb-md-0
                    h5 Fuentes corriente arriba
                    ol.lista-ol
                        li.mb-0 
                          span.text-bold 5.
                            | Residuos generados en las operaciones.
                        li.mb-0 
                          span.text-bold 6.
                          | Viajes de negocios.
                        li.mb-0 
                          span.text-bold 7.
                          | Desplazamiento al trabajo de los empleados.
                        li.mb-0 
                          span.text-bold 8.
                          | Activos arrendados corriente arriba.
      
          .col-md-12.col-12.mb-4
            .tarjeta.tarjeta--verde.p-4
              SlyderA
                .row.p-2
                  .col-md-12.mb-4.mb-md-0
                    h5 Fuentes corriente abajo
                    ol.lista-ol
                        li.mb-0 
                          span.text-bold 9.
                          | Transporte y distribución corriente abajo.
                        li.mb-0 
                          span.text-bold 10.
                          | Procesamiento de los productos vendidos.
                        li.mb-0 
                          span.text-bold 11.
                          | Uso de los productos vendidos.
                        li.mb-0 
                          span.text-bold 12.
                          | Transporte de final de vida útil de los productos vendidos.

                .row.p-2
                  .col-md-12.mb-4.mb-md-0
                    h5 Fuentes corriente abajo
                    ol.lista-ol
                        li.mb-0 
                          span.text-bold 13.
                          | Activos arrendados corriente abajo.
                        li.mb-0 
                          span.text-bold 14.
                          | Franquicias.
                        li.mb-0 
                          span.text-bold 15.
                          | Inversiones.
                     
    .row.mb-5(data-aos="fade-right")
      p Si la organización tiene control o es dueña de alguna de las fuentes de emisión para el análisis del alcance 3 esta debe tener muy claros sus límites organizacionales, ya que, si es así, estas emisiones no pueden ser cuantificadas en este alcance sino en el alcance 1 o 2 según sea su fuente y se deben indicar las emisiones de acuerdo a su participación accionaria.
      span Para conocer los pasos necesarios para cuantificar y reportar las emisiones en este alcance, revise el siguiente recurso educativo:

    .row(data-aos="fade-down")
      LineaTiempoE.color-primario
        .row(titulo="Describir la cadena de valor")
          .col-lg-12.mb-0.mb-lg-0
            p La organización debe informar y describir su cadena de valor y las fuentes de emisión de GEI asociadas, para realizar esta acción se puede usar una lista de verificación.

        .row(titulo="Determinar las fuentes de emisión relevantes")
          .col-lg-12.mb-0.mb-lg-0
            p la organización debe analizar cuáles fuentes de emisión corriente arriba y abajo son relevantes,  para esto deben tener en cuenta que estas: <br> ●	Representan un alto porcentaje respecto a las emisiones alcance 1 y 2. <br> ●  Contribuyen a la exposición de riesgo de GEI de la organización. <br> ●  Son críticas para las partes interesadas de la organización. <br> ●  Se pueden generar reducciones potenciales en estas fuentes aplicando acciones coercitivas por parte de la organización.
    
        .row(titulo="Identificar socios a lo largo de la cadena de valor")
          .col-lg-12.mb-0.mb-lg-0
            p La organización debe identificar qué proveedor o cliente o socio aporta un porcentaje significativo de emisiones de GEI a lo largo de la cadena de valor.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosLineaTiempoA: [
      {
        ano: 'Describir la cadena de valor',
        texto:
          'La organización debe informar y describir su cadena de valor y las fuentes de emisión de GEI asociadas, para realizar esta acción se puede usar una lista de verificación.',
      },
      {
        ano: 'Determinar las fuentes de emisión relevantes',
        texto:
          'la organización debe analizar cuáles fuentes de emisión corriente arriba y abajo son relevantes,  para esto deben tener en cuenta que estas: <br> ●	Representan un alto porcentaje respecto a las emisiones alcance 1 y 2. <br> ●  Contribuyen a la exposición de riesgo de GEI de la organización. <br> ●  Son críticas para las partes interesadas de la organización. <br> ●  Se pueden generar reducciones potenciales en estas fuentes aplicando acciones coercitivas por parte de la organización.',
      },
      {
        ano: 'Identificar socios a lo largo de la cadena de valor',
        texto:
          'La organización debe identificar qué proveedor o cliente o socio aporta un porcentaje significativo de emisiones de GEI a lo largo de la cadena de valor.',
      },
    ],
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
