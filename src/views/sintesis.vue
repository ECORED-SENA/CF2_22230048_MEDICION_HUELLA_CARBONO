<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4
      .titulo-sexto.color-acento-contenido
        h5 Medición de huella de carbono en organizaciones
        p Síntesis: Cálculo de GEI y estrategias de gestión


    p.mb-3 El desarrollo de este componente de aprendizaje busca fortalecer en los aprendices del curso complementario sobre “Medición de huella de carbono en organizaciones”, sus habilidades y conocimientos para realizar cálculos de GEI y desde allí establecer estrategias para su gestión y mitigación.
    p.mb-5 Una breve revisión de los temas vistos, se encuentran en el siguiente esquema:

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
