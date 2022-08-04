<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span
          i.fas.fa-info
      h1 Introducción
      
    .row(data-aos="flip-down")
      p.mb-4 Le damos la bienvenida al componente formativo “Cálculo de GEI y estrategias de gestión”, para comenzar el recorrido por el mismo, visite el recurso educativo que se propone a continuación: 

    .row(data-aos="flip-down")
      figure
        .video
          iframe(width="942" height="530" src="https://www.youtube.com/embed/2VM7Y6-7Gg8" title="Cálculo de GEI y estrategias de gestión introducción" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row
      .col-md-1.col-2
        figure.mod
          img(src='@/assets/curso/introduccion/fond.png', alt='Hojas')


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
