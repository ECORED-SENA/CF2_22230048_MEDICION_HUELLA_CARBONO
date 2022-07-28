<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Seguimiento a las emisiones a través del tiempo
    
    .row.mb-4
      p Las organizaciones a lo largo del tiempo pueden experimentar cambios estructurales que transforman la forma en la cual desarrollan sus actividades y procesos, esto puede dificultar la realización de comparaciones de datos de un periodo de tiempo a otro. Por ello, es necesario que para realizar esta labor se lleguen a ajustes consensuados.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-6
        figure
          img(src='@/assets/curso/tema2/img1.png', alt='Texto que describa la imagen')
      .col-md-6
        p Por este motivo, para que las organizaciones puedan comparar cómo varían sus emisiones de GEI en el tiempo de forma significativa y consistente, deben fijar una base de comparación que permita contrastar el desempeño de un año con respecto al año inmediatamente anterior, llamado año base, sobre este año se centrará el seguimiento al desempeño en términos de emisiones, es muy importante justificar la selección de dicho año.
        .cajon.color-primario.p-4.mb-4(style='background-color: #E5FFE9')
          p No obstante, algunas organizaciones no determinan un año en particular como base de comparación sino un periodo de tiempo consecutivo lo que permite disminuir los riesgos de variaciones inusuales de la tendencia de emisiones de la organización.

    p.mb-5 Las emisiones cuantificadas en el año base son utilizadas como el punto de partida para el establecimiento de criterios, objetivos y medidas de mitigación y reducción de las emisiones de GEI, además permiten la planeación de diferentes procesos que facilitan a la organización un óptimo desempeño en términos de emisiones.

    .row.justify-content-center.mb-4
      .col-xxl-10.col-md-11(data-aos="fade")
        .bloque-texto-g1.fondo1.p-3.p-sm-4.p-md-5
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.jpg')})`}"
          )
          .bloque-texto-g1__texto.p-4
            p.mb-0 Por otro lado, la organización para velar por la pertinencia y significancia de la cuantificación de las emisiones de GEI a lo largo del tiempo, debe establecer lineamientos claros referentes a los casos en los cuales se puede realizar el ajuste o recálculo de las emisiones del año base y este debe ser comunicado en los reportes que realice en términos de sus emisiones de GEI.

    p.mb-5 Para conocer los casos en los cuales se podría aplicar el ajuste sobre las emisiones del año base, revise el siguiente recurso:

    .bg_grad-02
      .row.mb-4.justify-content-center
        .col-md-10
          figure
            img(src='@/assets/curso/tema2/vec1.svg', alt='Texto que describa la imagen')

      .row.mb-4.justify-content-center.align-items-center
        .col-md-8
          .tarjeta.fondo-slyder.mb-5(data-aos="fade-up")
            SlyderA
              .row.p-4
                .col-md-12
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 01.
                      | Cambios estructurales como:
                .col-md-12
                  ol.lista-ol
                    li 
                      span.text-bold a. 
                      | Fusiones de otras organizaciones.
                    li 
                      span.text-bold b. 
                      | Desinversiones.
                    li 
                      span.text-bold c. 
                      | Incorporación de nuevos procesos o actividades que generan emisiones.
                    li 
                      span.text-bold d. 
                      | Tercerización de procesos o actividades que generan emisiones.

              .row.p-4
                .col-md-12
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 02.
                .col-md-12
                  p Cambios en la metodología de cuantificación de las emisiones de GEI por ajustes a los factores de emisión o información de las emisiones.


              .row.p-4
                .col-md-12
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span 03.
                .col-md-12
                  p Errores significativos en la cuantificación de las emisiones de GEI, los cuales pueden traer consecuencias significativas para la organización.

    .row 
      .cajon.color-acento-contenido.p-4.mb-4(style='background-color: #FFE3DB')
        p.mb-0 El ajuste de las emisiones del año base deben realizarse de manera retroactiva con el fin de reflejar cambios significativos en el desempeño de la organización en términos de emisiones de GEI.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
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
