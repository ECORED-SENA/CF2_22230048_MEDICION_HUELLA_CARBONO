<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1	
      h1 Determinación de los límites de medición de GEI
    
    .row.mb-4.justify-content-center.align-items-center
      .col-md-6 
        p.mb-4 El primer paso que se debe ejecutar para determinar el inventario de emisiones y cuantificar la huella de carbono es la identificación y el establecimiento de los límites organizacionales y operativos, esto implica tener claridad frente a cada una  de las unidades de negocio o áreas de la organización necesarias para el proceso de recolección de información y la cuantificación de las emisiones de GEI, del mismo modo, es importante determinar las fuentes de emisión directas e indirectas relacionadas con las operaciones y actividades desarrolladas en el negocio.
        span El desarrollo de dicho ejercicio es relativamente sencillo, y se puede aplicar a cualquier tipo de organización, sin importar su tamaño o razón social, no obstante, puede complejizarse en organizaciones que cuenten con diversos lugares de operación, con régimen de sociedades o franquicias y con diferentes filiales, pues este tipo de organizaciones deben definir de forma más clara y meticulosa cuales son los aspectos de medición a considerar en el ejercicio. 

      .col-md-6 
        figure
          img(src='@/assets/curso/tema1/img1.png', alt='Texto que describa la imagen')
    separador


    #t_1_1.titulo-segundo.titulo-segundo.color-acento-contenido
      h2 1.1	Límites organizacionales

    .row.mb-4
      p Las actividades y operaciones de las organizaciones pueden ser distintas según sea su naturaleza y estructura organizacional o como ya se mencionaron antes, pueden contar con uno o varios lugares de operación, lo que hace que las fuentes de emisión de GEI de cada lugar sean distintas. Por todas estas particularidades es relevante que la organización defina las unidades de negocio, áreas y actividades sobre las cuales tiene control y las cuales serán involucradas en el ejercicio de cuantificación de las emisiones de GEI.

    .row.mb-2
      .cajon.color-primario.p-4.mb-4(style='background-color: #E5FFE9')
        p Para que la organización pueda definir límites organizaciones, debe considerar en primera medida el objetivo principal por cumplir con el ejercicio de cuantificación de las emisiones de GEI y a su vez debe considerar algunos enfoques los cuales son la base orientadora para la consolidación de dichas emisiones, para conocerlos revise con atención el siguiente recurso educativo: 

    .row.mb-1
      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
        .row(titulo="Enfoque de participación accionaria")
          .col-md-7.mb-5.mb-md-0.p-4
            p.mb-4 La organización bajo este enfoque cuantifica las emisiones de GEI conforme a la proporción que posee la estructura accionaria. Este enfoque es netamente de interés económico ya que representa los derechos que una organización tiene sobre los riesgos y beneficios derivados de sus operaciones y actividades, estos derechos son directamente proporcionales a su porcentaje de participación accionaria.
            span Si la organización decide cuantificar sus emisiones conforme a lo establecido en este enfoque, se deberá apoyar de las áreas legal y contable, con el fin de conocer la participación accionaria asociada a las operaciones compartidas y que serán incluidas en este ejercicio.
        
          .col-md-5
            figure
              img(src='@/assets/curso/tema1/img2.png', alt='Grupo de personas' style= "height: 418px")

        .row(titulo="Enfoque de control")
          .col-md-7.mb-5.mb-md-0.p-4
            p.mb-4 La organización bajo este enfoque cuantifica el 100% de las emisiones de GEI asociadas a las operaciones, áreas y actividades sobre las cuales tiene control directo,  no puede incluir en dicha cuantificación otras actividades relacionadas con otras organizaciones propias, pero de las cuales no  tiene control directo, este control puede ser definido en términos financieros y operativos.
            p.mb-4 <b>Control financiero:</b> este enfoque se da cuando una organización puede dirigir y establecer las políticas financieras y operativas con aras de obtener beneficios económicos de las actividades u operaciones desarrolladas por esta. Si dado caso la organización tiene control financiero sobre otra organización se deberá aplicar el enfoque de participación accionaria.
            p <b>Control operativo:</b> en este enfoque se tienen en cuenta los GEI emitidos por las fuentes de emisión sobre las cuales tiene control operativo directo la organización. Bajo este enfoque la organización debe contabilizar el 100% de las emisiones como propias.

          .col-md-5
            figure
              img(src='@/assets/curso/tema1/img3.png', alt='Mujer escribiendo su rutina de trabajo' style= "height: 418px")

    p.mb-2 Es importante tener en cuenta que cuando la organización es la única dueña de las operaciones, el límite organizacional es el mismo indistintamente el enfoque aplicado y para aquellas organizaciones que cuenten con operaciones en conjunto con otra u otras organizaciones, el límite organizacional puede ser distinto según el enfoque aplicado. Asimismo, en cualquier tipo de situación organizacional, el tipo de enfoque aplicado podrá generar cambio en la categorización de las emisiones de GEI cuando se determinen los límites operativos.    
    separador


    #t_1_2.titulo-segundo.titulo-segundo.color-acento-contenido
      h2 1.2	Límites operacionales
  
    p.mb-4 Luego de la definición de los límites organizacionales en el marco de los lugares de operación sobre los cuales la organización tiene el control, se deben definir los límites operacionales. Para realizar esta actividad se debe identificar las emisiones directas (que provienen de fuentes sobre las cuales la organización tiene el control y es dueña como lo son equipos de combustión y parque automotor) y las emisiones indirectas (que provienen de fuentes sobre las cuales la organización no tiene control y pueden ser atribuibles a la energía o a los productos y servicios que la organización necesita para su funcionamiento) vinculadas a los procesos y actividades de la organización que serán tomados para la cuantificación del inventario de emisiones y huella de carbono.

    .row.mb-4
      figure
        img(src='@/assets/curso/tema1/img1.jpg', alt='Texto que describa la imagen')

    p.mb-5 A continuación, se muestra gráficamente cómo se relacionan los límites organizacionales y operacionales donde los límites organizacionales se encuentran asociados a la organización matriz, otras organizaciones, unidades de negocio y áreas sobre las cuales tiene control la organización y serán involucradas en el ejercicio de cuantificación de las emisiones de GEI y los límites operacionales hace referencia a las actividades fuente de emisiones que serán abordadas en la medición del inventario de emisiones.

    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Relación límites organizacionales y operacionales

    .row 
      figure
        img(src='@/assets/curso/tema1/vec1.png', alt='Texto que describa la imagen')


</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
