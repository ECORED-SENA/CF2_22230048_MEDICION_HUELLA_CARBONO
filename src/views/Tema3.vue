<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Recolección de datos y selección de factores de emisión
    
    .row.mb-4(data-aos="fade-down")
      figure
        img(src='@/assets/curso/tema3/img1.jpg', alt='Texto que describa la imagen')

    .row.mb-5(data-aos="fade-down")
      p.mb-4 El proceso de recolección de información para el cálculo de emisiones de GEI es una etapa muy importante, dado que se debe partir de los conceptos clave como la identificación adecuada de las fuentes de emisión y la definición de los límites organizacionales y operacionales que van a ser considerados.
      span Para realizar este proceso de recolección se deben tener en cuenta lo siguientes aspectos:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 2.
      span Relación límites organizacionales y operacionales.

    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-lg-8
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/avatar1.svg' alt='AvatarTop')
          .tarjeta.tarjeta-color
            .p-4
              p Las cantidades o volúmenes consumidas para combustibles comerciales (gasolina, nafta, diesel, gas natural, gas propano o GLP).

      .col-lg-8
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/avatar2.svg' alt='AvatarTop')
          .tarjeta.tarjeta-color
            .p-4
              p El consumo de energía eléctrica, así como las fuentes de generación o compra asociada, por ejemplo, es vital conocer si la energía eléctrica consumida proviene de la red eléctrica nacional o proviene de alguna fuente de generación alternativa (solar, eólica, térmica).

      .col-lg-8
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/avatar3.svg' alt='AvatarTop')
          .tarjeta.tarjeta-color
            .p-4
              p Las provenientes de inversiones, franquicias, activos arrendados, proceso y uso de los productos vendidos, transportes y distribución, bienes y servicios adquiridos, entre otros.

    .row.mb-4(data-aos="fade-right")
      p Teniendo los consumos proporcionados y estimados para cada uno de los alcances, es necesario consultar los factores de emisión para cada fuente. Estos factores deben ser generados por fuentes confiables, usando siempre los valores más actualizados para el año de reporte. En la siguiente tabla, se detallan algunas fuentes donde se pueden consultar los factores de emisión según alcance y tipo de fuente de emisión:

    .row.justify-content-center.mb-2(data-aos="fade-down")
      .col-md-10
        .tarjeta.color-degradado.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/tema3/vec1.svg" style= "height: 95px")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Tabla 1
                  p.text-small Fuentes de consulta de los factores de emisión por alcance y tipo de fuente
                .col-sm-auto.p-4
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/tabla1.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-8
        .cajon.color-acento-contenido.p-4.mb-4(style='background-color: #FFE3DB')
          .row.justify-content-center.align-items-center
            .col-md-2.col-4.mb-3
              figure
                img.der(src='@/assets/curso/tema3/vec2.png' alt='AvatarTop')
            .col-md-10
              p.mb-0 Cabe resaltar que los factores de emisión pueden variar por país, año, alcance y tipo de fuente de emisión.


</template>

<script>
export default {
  name: 'Tema3',
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
