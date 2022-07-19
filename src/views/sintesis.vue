<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p
      span.r-4.fst-italic Up to this point, we have been able to appreciate everything that has to do with the introduction to the past tense and the different forms of the verb "to be" (was / were), which is why we invite you to consider the following conceptual scheme that summarizes the subject treated:
      br
      br
      |Hasta este punto, hemos podido apreciar todo lo que tiene que ver con la introducción del tiempo pasado y las diferentes formas del verbo “to be” (was / were), es por ello que se invita a que aprecie el siguiente esquema conceptual que le resume la temática tratada:

    .row.justify-content-center
      .col-lg-10.mb-5
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
