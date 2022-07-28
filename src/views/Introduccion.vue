<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span
          i.fas.fa-info
      h1 Introducción
      
    .row 
      p.mb-4 Le damos la bienvenida al componente formativo “Cálculo de GEI y estrategias de gestión”, para comenzar el recorrido por el mismo, visite el recurso educativo que se propone a continuación: 

    .row 
      figure.mb-5
        .video
          iframe(width="942" height="530" src="https://www.youtube.com/embed/XQbBPSBQ4-o" title="Cálculo de GEI y estrategias de gestión introducción" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            
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
