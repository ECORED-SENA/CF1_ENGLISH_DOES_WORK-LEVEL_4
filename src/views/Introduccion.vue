<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos='fade-right') Para hablar de situaciones de nuestra vida personal ocurridas en el pasado, es necesario entender los conceptos más básicos del pasado simple, como es la conjugación del verbo “to be” en pasado, y apoyar esto con vocabulario sobre etapas y experiencias de vida, más el uso de expresiones que nos permitan ubicar esas vivencias en el tiempo. A partir de estos elementos esenciales, se pueden empezar a construir oraciones más complejas y adentrarse en conceptos más elaborados sobre el uso de los diferentes tiempos del pasado, la conjugación de otros verbos, etc. Partiendo de lo anterior, le damos la bienvenida al estudio de este componente formativo, y para comenzar, se le invita a explorar el video que se presenta a continuación:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/vDjZy2UisKE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos='fade-right') Si desea practicar, el siguiente PDF presenta los textos del video anterior, tanto en inglés como en español.
    .row.justify-content-center
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/introduction.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Guion video Introducción
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
