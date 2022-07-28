<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 6
      h1 Reporte de emisiones de GEI
    
    .row.mb-5.justify-content-center.align-items-center
      .col-md-6 
        p.mb-4 Los resultados de la cuantificación de las emisiones de GEI se deben presentar en un informe para facilitar su verificación, reconocer la participación en un programa de GEI o como forma de comunicación de las emisiones a sus partes interesadas internas y externas.
        span Los reportes de emisiones de GEI deben ser informes completos, relevantes, transparentes, concisos y precisos, donde se refleje toda la información referente a los alcances contabilizados. Para conocer la información que se debe considerar a la hora de realizar un reporte, revise el siguiente recurso educativo:  


      .col-md-6 
        figure
          img(src='@/assets/curso/tema6/img1.png', alt='Texto que describa la imagen')
    .row 
      figure.mb-5
        .video
          iframe(width="942" height="530" src="https://www.youtube.com/embed/-EAwxVi1GzM" title="Contenidos de reporte de cuantificación de GEI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  
</template>

<script>
export default {
  name: 'Tema6',
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
