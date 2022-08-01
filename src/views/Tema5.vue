<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 5
      h1 Herramientas de cálculo de emisiones de GEI

    .row.mb-4
      figure
        img(src='@/assets/curso/tema5/img1.jpg' alt='AvatarTop')

    .row.mb-4
      p.mb-2 Luego de identificar las fuentes de emisión respectivas para cada alcance se debe seleccionar el método de cálculo para cuantificar las emisiones, comúnmente se realiza a partir de la recolección de información relacionada con los procesos y actividades establecidas como marco de cuantificación de las emisiones de GEI y la selección de factores de emisión.
      p <b>Para poder relacionar la información y los factores de emisión se debe aplicar la siguiente ecuación:</b>

    .row.justify-content-center.mb-4
      .col-md-8
        .cajon.color-primario.p-4.mb-4(style='background-color: #E5FFE9')
          .row.align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/tema4/vec7.png' alt='AvatarTop')
            .col-md-10
              p Como resultado de esta ecuación se obtendrá una cantidad (ton, kg, l) determinada de CO2e. Las emisiones de GEI se miden en función del CO2 ya que este GEI es el gas que influye en mayor proporción al calentamiento global.
              <b>Emisiones = información proceso o actividad  X Factor de emisión</b>

    .row.mb-4.justify-content-center.align-items-center
      .col-md-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/img2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Dentro de las herramientas para la cuantificación de las emisiones de GEI se encuentran las intersectoriales y sectoriales, el uso de estas herramientas es recomendado dados los procesos de actualización y revisión por parte de expertos y líderes de las industrias.<br><br/>
            span A continuación, se hace referencia a cada una de las herramientas:
    separador

    #t_5_1.titulo-segundo.titulo-segundo.color-acento-contenido
      h2 5.1	Herramientas intersectoriales
   
    .row.mb-4 
      p Estas herramientas pueden ser empleadas por diversos sectores de la economía, incluyen emisiones asociadas a la combustión móvil y fija, el uso de gases refrigerantes y sistemas HVAC (aire acondicionado y calefacción) En el siguiente recurso educativo se detallan las herramientas de cálculo intersectoriales.

    .bg_grad-04.mb-5
      .row.align-items-center.justify-content-end.mb-5
        .col-md-7.mb-5
          .tarjeta.tarjeta--blanca.p-5
            SlyderA
              .row.p-4
                .col-md-12.mb-4.mb-md-0
                  h5 1. Combustión fija
                  p.mb-2 Calcula las emisiones directas e indirectas de CO2 de la combustión de combustibles fósiles en equipo estacionario o fijo. 
                  p Provee factores de emisión de referencia para combustibles y electricidad promedio nacional.

              .row.p-4
                .col-md-12.mb-4.mb-md-0
                  h5 2. Combustión móvil
                  p.mb-2 Calcula las emisiones directas e indirectas de CO2 de la combustión de combustibles fósiles en fuentes móviles. 
                  p Provee cálculos y factores. 

              .row.p-4
                .col-md-12.mb-4.mb-md-0
                  h5 3. HFC del uso del aire acondicionado y refrigeración
                  p.mb-2 Calcula emisiones directas de HFCs durante la manufactura, uso y disposición de equipos de refrigeración y aire acondicionado en edificaciones comerciales. 
                  p Provee 3 metodologías de cálculo: uno basado en ventas, otro en las fases del ciclo de vida y finalmente otro basado en factores de emisión.

              .row.p-4
                .col-md-12.mb-4.mb-md-0
                  h5 4. Incertidumbre en la medición y estimación de emisiones.
                  p.mb-2 Incorpora los elementos fundamentales del análisis de la incertidumbre y cuantificación. Calcula la incertidumbre estadística de los parámetros debido a errores aleatorios relacionados con el cálculo de emisiones de GEI. 
                  p Automatiza los pasos de incorporación involucrados en desarrollar una evaluación básica de la incertidumbre para los datos del inventario de GEI.
      br
      separador

    #t_5_2.titulo-segundo.titulo-segundo.color-acento-contenido
      h2 5.2	Herramientas específicas por sector

    .row.mb-4
      p Son herramientas estructuradas para ser usadas por sectores determinados como hierro, cemento, aluminio, petróleo y gas, papel y empresas con actividades de índole administrativo. En el siguiente recurso se detallan las herramientas de cálculo por sector: 

    .row.mb-5
      .col-md-12.center
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema5/vec1.svg', alt='Texto que describa la imagen')
          .tarjeta.bg-amarillo-claro.p-4(x="62.2%" y="18.3%" numero="")
            p <b>1. Producción de aluminio y otros metales no férreos</b>  
            span Calcula las emisiones directas de GEI de la producción de aluminio (CO2 de la oxidación anódica, emisiones de PFC derivadas del "efecto de ánodo" y SF6 utilizado como gas de cubierta en la producción de metales no ferrosos).

          .tarjeta.bg-amarillo-claro.p-4(x="68.6%" y="30.6%" numero="")
            p  <b>2. Hierro y acero</b>  
            span Calcula las emisiones directas de GEI (CO2) de la oxidación del agente reductor, de la calcinación del flujo utilizado en la producción de acero, y de la remoción de carbón del hierro mineral en bruto y acero de desecho utilizados.

          .tarjeta.bg-amarillo-claro.p-4(x="71%" y="46.7%" numero="")
            p <b>3. Manufactura de ácido nítrico</b>  
            span Calcula las emisiones directas de GEI (N2O) de la producción de ácido nítrico.

          .tarjeta.bg-amarillo-claro.p-4(x="68.6%" y="62.5%" numero="")
            p <b>4. Manufactura de amoníaco</b>  
            span Calcula las emisiones directas de GEI (CO2) de la producción de amoníaco. Esto es solamente por la remoción de carbón de la corriente de alimentación; las emisiones provenientes de la combustión se calculan con el módulo de combustión fija.

          .tarjeta.bg-amarillo-claro.p-4(x="62.2%" y="75%" numero="")
            p <b>5. Manufactura de ácido adípico</b>  
            span Calcula las emisiones directas de GEI (N2O) de la producción de ácido adípico.

          .tarjeta.bg-amarillo-claro.p-4(x="39.5%" y="18.3%" numero="")
            p.mb-2 <b>6. Cemento</b>  
            p.mb-2 Calcula las emisiones directas de CO2 del proceso de calcinación en la manufactura del cemento (la herramienta del WBCSD también calcula las emisiones de combustión). 
            p Provee dos metodologías de cálculo: un método basado en el cemento y otro basado en el Clinker. 

          .tarjeta.bg-amarillo-claro.p-4(x="33%" y="30.6%" numero="")
            p <b>7.CAL</b>  
            span Calcula las emisiones directas de GEI provenientes de la manufactura de cal (CO2 proveniente del proceso de calcinación).

          .tarjeta.bg-amarillo-claro.p-4(x="30.7%" y="46.7%" numero="")
            p <b>8. HFC-23</b>  
            span Proveniente de la producción de HCHC-22 Calcula las emisiones directas de HFC-23 provenientes de la producción de HCFC-22.

          .tarjeta.bg-amarillo-claro.p-4(x="33.2%" y="62.5%" numero="")
            p <b>9. Pulpa y papel</b>  
            span Calcula las emisiones directas de CO2, CH4, y N2O de la producción de pulpa y papel. Esto incluye el cálculo de las emisiones directas e indirectas de CO2 de la combustión de combustibles fósiles, biocombustibles y productos de desperdicio en equipos estacionarios.

          .tarjeta.bg-amarillo-claro.p-4(x="39.5%" y="75%" numero="")
            p <b>10. Producción de paneles semiconductores</b>  
            span Calcula las emisiones de PFC de la producción de paneles semiconductores.

    .row.mb-4
      p.mb-2 Las organizaciones deben emplear más de una herramienta (sectorial e intersectorial) para desarrollar el cálculo de sus emisiones de GEI.
      p <b>Para cada una de estas herramientas se deben considerar las siguientes secciones:</b>

    .titulo-sexto.color-acento-contenido.mb-0
      h5 Figura 4.
      span Secciones por considerar para realizar la cuantificación de emisiones de GEI.
    .row
      figure
        img(src='@/assets/curso/tema5/vec2.svg' alt='AvatarTop')

</template>

<script>
export default {
  name: 'Tema5',
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
