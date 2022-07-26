<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Time expressions for Past Tense (Expresiones temporales para el tiempo pasado)
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-8.mb-lg-0.mb-3
        img(src='@/assets/curso/temas/c4.svg', alt='')
      .col-lg-10
        .contenedor-traductor
          .contenedor-traductor__eng
            p
              span.r-3.fst-italic.fw-normal We use simple past tense to talk about things that happened before the present tense, and to better reference the time in which they happened, we can add certain words or temporary expressions called adverbs of time to complement the sentence. The ones most often used in the past are:
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
            p El pasado simple sirve para hablar de cosas que ocurrieron antes del tiempo presente, y para referenciar mejor el tiempo en el que ocurrieron se puede agregar al complemento de la oración ciertas palabras o expresiones temporales llamadas adverbios de tiempo. Los que se usan con más frecuencia en el pasado son:
          a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 3 
      span Expresiones de  tiempo
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/25.svg' alt='AvatarTop').mb-4
          .tarjeta.color-primario.w-100
            .row.justify-content-center
              .col-lg-8.p-3
                h4.fst-italic.text-center.mt-4 Last
                TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="last night"
                :audio="require('@/assets/audios/tema2/1.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="last weekend"
                :audio="require('@/assets/audios/tema2/2.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="last year"
                :audio="require('@/assets/audios/tema2/3.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="last Wednesday"
                :audio="require('@/assets/audios/tema2/4.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="last Christmas"
                :audio="require('@/assets/audios/tema2/5.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="last month"
                :audio="require('@/assets/audios/tema2/6.mp3')"
                )
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/26.svg' alt='AvatarTop').mb-4
          .tarjeta.color-acento-botones.w-100
            .row.justify-content-center
              .col-lg-8.p-3
                h4.fst-italic.text-center.mt-4 Ago 
                TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="5 minutes ago"
                :audio="require('@/assets/audios/tema2/7.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="an hour ago"
                :audio="require('@/assets/audios/tema2/8.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="a week ago"
                :audio="require('@/assets/audios/tema2/9.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="a month ago"
                :audio="require('@/assets/audios/tema2/10.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="a year ago"
                :audio="require('@/assets/audios/tema2/11.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="a long time ago"
                :audio="require('@/assets/audios/tema2/12.mp3')"
                )
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/25.svg' alt='AvatarTop').mb-4
          .tarjeta.color-secundario.w-100
            .row.justify-content-center
              .col-lg-8.p-3
                h4.fst-italic.text-center.mt-4 Yesterday
                TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="yesterday"
                :audio="require('@/assets/audios/tema1/yesterday.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="yesterday morning"
                :audio="require('@/assets/audios/tema2/13.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="yesterday at noon"
                :audio="require('@/assets/audios/tema2/14.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="yesterday afternoon"
                :audio="require('@/assets/audios/tema2/15.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="yesterday evening"
                :audio="require('@/assets/audios/tema2/16.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-3(
                texto="the day before yesterday"
                :audio="require('@/assets/audios/tema2/17.mp3')"
                )
    p.mb-5(data-aos='fade-right') A continuación, conozca las expresiones de tiempo para el pasado simple, explorando el siguiente recurso:
    TabsB.color-secundario.mb-5
      .p-5.py-md-5(titulo="Last" :icono="require('@/assets/curso/temas/27.svg')" style="background-color: #fff7da")
        .row.justify-content-center.mb-5
          .col-md-10.mb-4.mb-md-0
            .contenedor-traductor2
              .contenedor-traductor2__eng
                p
                  span.r-3.fst-italic.fw-normal We use “last” + “time reference” to refer to the particular moment we are pointing to, whichever is most recent or close to the present.
                    br
                    br
                    |In Spanish, we say “el verano pasado”, “la semana pasada”, “el año pasado”; but in English we do not use the definite article “the”, we say “last summer”, “last week”, “last year”, we do NOT say “the last summer”, “the last week”, “the last year”.
              .contenedor-traductor2__esp(:class="{ mostrar: ocultarEsp}")
                p Usamos <em>“last”</em> + “referencia temporal” para referirnos al momento en particular que estamos señalando, el cual es el más reciente o cercano al presente.
                  br
                  br
                  |En español, decimos “el verano pasado”, “la semana pasada”, “el año pasado”; pero en inglés, no usamos el artículo definido <em>“the”</em>, se dice <em>“last summer”, “last week”, “last year”</em>, NO se dice <em>“the last summer”, “the last week”, “the last year”</em>.
              a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción
          .col-md-2.mb-4.mb-md-0
            img(src='@/assets/curso/temas/c5.png' alt='AvatarTop')
        .row.mb-5
          .col-lg-9
            .row.justify-content-center
              .col-lg-3
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="Last Summer"
                :audio="require('@/assets/audios/tema2/18.mp3')"
                )
              .col-lg-3
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="Last Christmas"
                :audio="require('@/assets/audios/tema2/20.mp3')"
                )
              .col-lg-3
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="Last April"
                :audio="require('@/assets/audios/tema2/22.mp3')"
                )
              .col-lg-3
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="Last night"
                :audio="require('@/assets/audios/tema2/24.mp3')"
                )
            .row.justify-content-center.mb-3
              .col-lg-3
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="Last year"
                :audio="require('@/assets/audios/tema2/19.mp3')"
                )
              .col-lg-3
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="Last month"
                :audio="require('@/assets/audios/tema2/21.mp3')"
                )
              .col-lg-3
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="Last week"
                :audio="require('@/assets/audios/tema2/23.mp3')"
                )
              .col-lg-3
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="Last Sunday"
                :audio="require('@/assets/audios/tema2/25.mp3')"
                )
        p
          span.r-3.fst-italic For example
          | / Por ejemplo: 
        .row.mb-5
          .col-lg-4
            TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="I was very tired last night"
                :audio="require('@/assets/audios/tema2/a1.mp3')"
                )
            p.ms-4 Yo estaba muy cansada anoche
          .col-lg-4
            TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="They were in Europe last summer"
                :audio="require('@/assets/audios/tema2/a2.mp3')"
                )
            p.ms-4 Ellos estuvieron en Europa el verano pasado 
      .p-5.py-md-5(titulo="Ago" :icono="require('@/assets/curso/temas/27.svg')" style="background-color: #fff7da")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4
              span.r-3 Ago
            p.mb-5
              span.r-4.fst-italic We use “time reference” + <em>“ago”</em> to show how far back in the past or how long ago something happened.
              br
              br
              | Usamos “referencia temporal” + <em>“ago”</em> para mostrar qué tan atrás en el pasado o hace cuánto sucedió algo.
          .col-md-5.mb-4.mb-md-0
            .row.justify-content-center.mb-5
              .col-lg-6
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="a minute"
                :audio="require('@/assets/audios/tema2/26.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="two hours"
                :audio="require('@/assets/audios/tema2/28.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="three days"
                :audio="require('@/assets/audios/tema2/30.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="a week"
                :audio="require('@/assets/audios/tema2/32.mp3')"
                )
              .col-lg-6
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="five months"
                :audio="require('@/assets/audios/tema2/27.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="ten years"
                :audio="require('@/assets/audios/tema2/29.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="many years"
                :audio="require('@/assets/audios/tema2/31.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="a long time"
                :audio="require('@/assets/audios/tema2/33.mp3')"
                )
        div(style='background-color: #ffffff').p-4
          p For example / Por ejemplo:
          .row.justify-content-center
            .col-lg-6
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="My birthday was a week ago."
                :audio="require('@/assets/audios/tema2/34.mp3')"
                )
                p.ms-3 Mi cumpleaños fue hace una semana.
            .col-lg-6
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="We were in the United States 5 years ago."
                :audio="require('@/assets/audios/tema2/35.mp3')"
                )
                p.ms-3 Estuvimos en los Estados Unidos hace 5 años.
      .p-5.py-md-5(titulo="Yesterday" :icono="require('@/assets/curso/temas/27.svg')" style="background-color: #fff7da")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4
              span.r-3 Yesterday
            p.mb-5
              span.r-4.fst-italic We use “yesterday” or “yesterday + morning / at noon / afternoon / evening”  to talk about the moments of the day before today.
              br
              br
              | Usamos 
              span.r-4.fst-italic “yesterday” 
              | o 
              span.fw-bold <em>“yesterday + morning</em> (en la mañana) <em>/ at noon</em> (al mediodía)  / <em>afternoon</em> (en la tarde) / <em>evening</em> (en la tarde-noche)” 
              | para hablar de los momentos del día antes de hoy.
          .col-md-5.mb-4.mb-md-0
            .row.justify-content-center.mb-5
              .col-lg-6
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="morning"
                :audio="require('@/assets/audios/tema2/36.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="afternoon"
                :audio="require('@/assets/audios/tema2/38.mp3')"
                )
              .col-lg-6
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="evening"
                :audio="require('@/assets/audios/tema2/37.mp3')"
                )
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="at noon"
                :audio="require('@/assets/audios/tema2/39.mp3')"
                )
        div(style='background-color: #ffffff').p-4
          p For example / Por ejemplo:
          .row.justify-content-center
            .col-lg-6
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="Sandra was busy yesterday morning."
                :audio="require('@/assets/audios/tema2/40.mp3')"
                )
                p.ms-3 Sandra estaba ocupada ayer por la mañana.
            .col-lg-6
                TarjetaAudio.color-acento-botones.bg-white.mb-2(
                texto="The kids were at their grandmother's house the day before yesterday."
                :audio="require('@/assets/audios/tema2/41.mp3')"
                )
                p.ms-3 Los niños estuvieron en casa de su abuela anteayer.
    .contenedor-franja.margin-n
      .franja(style= 'height: 80%')
      .contenido.px-5
        .row.justify-content-center.mb-5
          .col-lg-2.col-8.mb-lg-0.mb-3
            img(src='@/assets/curso/temas/warning.svg', alt='')
          .col-lg-10
            h5.mb-5
              span.r-4 Warning #5
              br
              | Advertencia #5
            p.mb-5 
              span.r-1.fw-normal.fst-italic “Evening” is the part of the day between the end of the afternoon and the night, and there is no exact word for this in Spanish; instead “night” can be interpreted directly as “noche”.
                br
                |Knowing this, with “evening” we use “yesterday”. With “night” instead, we say “last night”, NOT “yesterday night”.
                br
                |We also use the expression “the day before yesterday” to refer to “two days ago”, or in Spanish “anteayer”.

              br
              br
              span.text-white <em>“Evening”</em> es la parte del día entre el final de la tarde y la noche, y no hay una palabra exacta para esto en español; en cambio <em>“night”</em> sí puede interpretarse directamente como “noche”.
                br
                |Ya sabiendo esto, con <em>“evening”</em> sí usamos <em>“yesterday”</em>. Con <em>“night”</em>, en cambio, decimos <em>“last night”</em>, NO <em>“yesterday night”.</em>
                br
                |También usamos la expresión <em>“the day before yesterday”</em> para referirnos a “hace dos días”, o en español “anteayer”.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    ocultarEsp: true,
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

<style lang="sass">
.tabs-b__tab--active, .tabs-b__tab--active:hover
  background-color: #fff7da
</style>
