<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Titulo de primer nivel
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3
        img(src='@/assets/curso/temas/28.png', alt='')
      .col-lg-6
        p.mb-5(data-aos='fade-right')
          span.r-4.fw-normal.fst-italic To be able to describe and talk about situations in our personal lives that have occurred in the past, it is necessary to know not only expressions of the time context, but it is also important to delve into the appropriate vocabulary, which is the main input that allows us to build the ideas that we want to convey about our life, our experiences, our memories, etc.
          br
          br
          | Para poder describir y hablar sobre situaciones de nuestra vida personal ocurridas en el pasado, es necesario conocer no solo expresiones propias del contexto temporal, también es importante profundizar en el vocabulario adecuado, el cual es el principal insumo que nos permite construir las ideas que queremos transmitir sobre nuestra vida, nuestras experiencias, nuestros recuerdos, etc.
    Separador
    #t_3_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 3.1. How I used to feel in the past (Cómo solía sentirme en el pasado)
    p.mb-5(data-aos='fade-right')
      span.r-4.fw-normal When we talk about how someone felt in the past, we have to use the verb “To be” and vocabulary to express feelings.
      br
      br
      | Cuando se habla de cómo alguien se sentía en un momento del pasado, se debe usar el verbo “to be” en el pasado y vocabulario para expresar esos sentimientos.
      br
      |A continuación, en el siguiente recurso, es posible reconocer algunos sentimientos en inglés que son utilizados en nuestro diario vivir.
    p.mb-5(data-aos='fade-right') Lea y escuche algunos ejemplos con su correspondiente pronunciación en inglés.
    SlyderF.mb-5(columnas="col-lg-1 col-xl-3")
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/38.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold 
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/39.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold 
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/40.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold 
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/41.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold 
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/42.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold 
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/43.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold 
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/44.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold 
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/45.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold 
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/46.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold 
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/47.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold 
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/48.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold 
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/49.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold 
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/50.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold 
    .contenedor-franja.margin-n
      .franja(style= 'height: 80%')
      .contenido.px-5
        .row.justify-content-center.mb-5
          .col-lg-2.col-8.mb-lg-0.mb-3
            img(src='@/assets/curso/temas/warning.svg', alt='')
          .col-lg-10
            h5.mb-5
              span.r-4 Warning #6
              br
              | Advertencia #6
            p.mb-5 
              span.r-1.fw-normal.fst-italic The adjectives that describe emotions in Spanish vary in number and gender, for example, “aburrido”, “aburrida”, “aburridos” and “aburridas”; instead, in English, that adjective has a single base word that can be used regardless of whether the subject is singular or plural, masculine or feminine, for example, “bored”.
              br
              br
              span.text-white Los adjetivos que describen las emociones en español varían en número y en género, por ejemplo, “aburrido”, “aburrida”, “aburridos” y “aburridas”; en cambio, en inglés, ese adjetivo tiene una sola palabra base que puede ser usada sin importar si el sujeto es singular o plural, masculino o femenino, por ejemplo, “bored”.

    p.mb-5(data-aos='fade-right') A continuación, se invita a escuchar algunos ejemplos con su correspondiente pronunciación en inglés.
    .contenedor-audios.p-5.mb-5(style='background-color: #ff5f65') 
      h2.text-center.text-white AUDIOS  
    Separador
    #t_3_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 3.2. The stages of my life (Las etapas de mi vida)
    p.mb-5(data-aos='fade-right')
      span.r-4.fst-italic.fw-normal In life there are different stages in which very specific events are lived and those events have to be told using specific vocabulary and expressions in order to make others understand the context.
      br
      br
      |En la vida, existen diferentes etapas en las cuales se viven eventos muy específicos que deben poder contarse usando el correcto vocabulario y expresiones para dar a entender el contexto.
      br
      br
      |Lo invitamos a conocer las etapas de la vida utilizando expresiones en inglés.
    SlyderF.mb-5(columnas="col-lg-1 col-xl-3")
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/29.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Childhood
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/30.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Newborn child
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/31.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Toddlerhood
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/32.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Preschool years
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/33.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Early school years
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/34.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Adolescence 
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/35.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Young adulthood
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/36.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Middle adulthood
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/37.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Late adulthood
    p.mb-5(data-aos='fade-right') A continuación, se invita a escuchar algunos ejemplos con su correspondiente pronunciación en inglés.
    .contenedor-audios-iconos.p-5(style='background-color: #6b8dff')
      .icono1.d-none.d-lg-block: img(src='@/assets/curso/temas/51.svg', alt='')        
      .icono2.d-none.d-lg-block: img(src='@/assets/curso/temas/52.svg', alt='' style='width: 350px')   
      h5.text-white.text-center For example / Por ejemplo:      
      .row.justify-content-center
        .col-lg-5
          TarjetaAudio.color-acento-botones.bg-white.mb-4(
          texto="I was chubby in my childhood."
          :audio="require('@/assets/audios/muestra.mp3')"
          )
          p.ms-3 Yo era regordete en mi niñez.
      .row.justify-content-center
        .col-lg-5
          TarjetaAudio.color-acento-botones.bg-white.mb-4(
          texto="My toddlerhood was a difficult moment of my life."
          :audio="require('@/assets/audios/muestra.mp3')"
          )
          p.ms-3 Mi primera infancia fue un momento difícil de mi vida.
      .row.justify-content-center
        .col-lg-5
          TarjetaAudio.color-acento-botones.bg-white.mb-4(
          texto="Adolescence is a problematic stage for most people."
          :audio="require('@/assets/audios/muestra.mp3')"
          )
          p.ms-3 La adolescencia es una etapa problemática para la mayoría de las personas.
      .row.justify-content-center
        .col-lg-5
          TarjetaAudio.color-acento-botones.bg-white.mb-4(
          texto="My preschool years were really happy for me."
          :audio="require('@/assets/audios/muestra.mp3')"
          )
          p.ms-3 Mi edad preescolar fue muy feliz para mí.
      .row.justify-content-center
        .col-lg-5
          TarjetaAudio.color-acento-botones.bg-white.mb-4(
          texto="People in late adulthood are usually abandoned."
          :audio="require('@/assets/audios/muestra.mp3')"
          )
          p.ms-3 Los adultos mayores son usualmente abandonados.
    Separador.mt-5
    #t_3_3.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 3.3 My social and family life (Mi vida social y familiar)
    p.mb-5(data-aos='fade-right')
      span.r-4.fst-italic Talking about social and family life is something natural and daily for most people and you have to have the right vocabulary to generate a conversation about the topic.
      br
      br
      |Hablar de la vida social y familiar es algo natural y cotidiano para la mayoría de personas y se debe contar con el vocabulario necesario para generar una conversación en torno al tema.
      br
      br
      |Algunas de estas etapas 
      span.r-4.fst-italic (stages) 
      | son:
    SlyderF.mb-5(columnas="col-lg-1 col-xl-3")
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/53.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Birthday
            br
            span.r-3 Cumpleaños
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/54.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Thanksgiving
            br
            span.r-3 Día de acción de gracias
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/55.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Summer vacation

            br
            span.r-3 Vacaciones de verano
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/56.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Baptism

            br
            span.r-3 Bautizo
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/57.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Anniversary
            br
            span.r-3 Aniversario
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/58.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Birth
            br
            span.r-3 Nacimiento
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/59.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Wedding
            br
            span.r-3 Boda
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/60.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/muestra.mp3')")
          p.text-center
            span.r-4.fst-italic.fw-bold Baby shower
            br
            span.r-3 Baby shower
    p.mb-5(data-aos='fade-right') Lea y escuche algunos ejemplos con su correspondiente pronunciación en inglés.
    .contenedor-audios-iconos.p-5(style='background-color: #fff0b5')
      .icono1.d-none.d-lg-block: img(src='@/assets/curso/temas/61.svg', alt='' style='width: 172px')        
      .icono2.d-none.d-lg-block: img(src='@/assets/curso/temas/62.svg', alt='' style='width: 210px')   
      h5.text-center For example / Por ejemplo:      
      .row.justify-content-center
        .col-lg-5
          TarjetaAudio.color-acento-botones.bg-white.mb-4(
          texto="My birthday was amazing."
          :audio="require('@/assets/audios/muestra.mp3')"
          )
          p.ms-3 Mi cumpleaños fue increíble.   
      .row.justify-content-center
        .col-lg-5
          TarjetaAudio.color-acento-botones.bg-white.mb-4(
          texto="My parents’ wedding was a great event."
          :audio="require('@/assets/audios/muestra.mp3')"
          )
          p.ms-3 La boda de mis papás fue un gran evento.
      .row.justify-content-center
        .col-lg-5
          TarjetaAudio.color-acento-botones.bg-white.mb-4(
          texto="My baby shower was in a big house."
          :audio="require('@/assets/audios/muestra.mp3')"
          )
          p.ms-3 Mi baby shower fue en una casa grande.
      .row.justify-content-center
        .col-lg-5
          TarjetaAudio.color-acento-botones.bg-white.mb-4(
          texto="My godparents were really happy on my baptism."
          :audio="require('@/assets/audios/muestra.mp3')"
          )
          p.ms-3 Mis padrinos estaban muy felices en mi bautizo.
      .row.justify-content-center
        .col-lg-5
          TarjetaAudio.color-acento-botones.bg-white.mb-4(
          texto="On our last anniversary, we were in New York."
          :audio="require('@/assets/audios/muestra.mp3')"
          )
          p.ms-3 En nuestro último aniversario, estábamos en Nueva York.





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

<style lang="sass">
.tarjeta-bg
  background-repeat: no repeat
  background-size: cover
  background-position: center
.contenedor-audios-iconos
  position: relative
  .icono1
    position: absolute
    width: 312px
    top: -20px
    left: 20px
  .icono2
    position: absolute
    bottom: -20px
    right: 20px
</style>
