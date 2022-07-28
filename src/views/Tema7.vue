<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 7
      h1 Estrategias de gestión de las emisiones de GEI

    .row.mb-4
      figure
        img(src='@/assets/curso/tema7/img1.jpg', alt='Texto que describa la imagen')

    p.mb-2 Actualmente muchas organizaciones se han visto en la necesidad de identificar y establecer medidas tendientes a convertir sus actividades de desarrollo y de generación de valor económico como generadoras de emisiones cero. Sin embargo, esta tarea puede hacerse casi imposible a pesar de su compromiso por la sostenibilidad y la eficiencia energética.
    p <b>Algunas de ellas son:</b>
    separador

    #t_7_1.titulo-segundo.titulo-segundo.color-acento-contenido
      h2 7.1	Bonos de carbono
   
    .row.justify-content-center.mb-4
      .col-xxl-10.col-md-11(data-aos="fade")
        .bloque-texto-g1.fondo2.p-3.p-sm-4.p-md-5
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema7/img2.jpg')})`}"
          )
          .bloque-texto-g1__texto.p-4
            p.mb-0 Los bonos de carbono son reconocidos internacionalmente como el mecanismo a través del cual se pueden gestionar las emisiones de carbono en las organizaciones y mitigar los efectos negativos del cambio climático.
            br
            p Este mecanismo consiste en que una organización o país que logre reducir sus emisiones de GEI puede vender dicha reducción a países desarrollados que tienen como compromiso global la reducción o dejar de emitir GEI a la atmósfera. 

    .row.mb-4
      p.mb-2 Los países desarrollados que invierten en este tipo de proyectos de compensación de emisiones de GEI contribuyen a que las organizaciones puedan diseñar e implementar medidas de mitigación de estas emisiones de forma inmediata. 
      p Las organizaciones que incluyen este mecanismo pueden generar los siguientes beneficios.
    br
    .row.mb-4
      .bg_fondo_4
        .row.mb-4.justify-content-center.align-items-center
          .col-md-8.mb-4
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 5.
              span Beneficios de los bonos de mercado en las organizaciones.
          .col-md-8.mb-4
            figure
              img(src='@/assets/curso/tema7/vec1.svg', alt='Texto que describa la imagen')

    #t_7_2.titulo-segundo.titulo-segundo.color-acento-contenido
      h2 7.2	Programa de ahorro y uso eficiente de la energía

    .row.mb-4.justify-content-center.align-items-center
      .col-md-6 
        figure
          img(src='@/assets/curso/tema7/img1.png', alt='Texto que describa la imagen')

      .col-md-6 
        p.mb-4 El programa de ahorro y uso eficiente de la energía es un mecanismo a través del cual se promueven mejores prácticas para el uso de los recursos energéticos en una organización, las acciones que aquí se contemplan deben ser evaluadas continuamente con el fin de garantizar la disminuir los impactos ambientales asociados al uso de la energía y propende la reducción de costos de mitigación y compensación de las emisiones de GEI.
        span Dentro de este programa se debe realizar un análisis de viabilidad en donde se estudian detalladamente las estrategias a implementar en pro de la reducción del consumo de energía sin que los procesos y actividades de la organización se vean afectadas, luego de realizar este análisis se deben establecer los mecanismos de implementación de estas y seguimiento. 


</template>

<script>
export default {
  name: 'Tema7',
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
