<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 <em>Let's talk about my life</em> (Hablemos de mi vida)
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3
        img(src='@/assets/curso/temas/28.png', alt='')
      .col-lg-6
        .contenedor-traductor
          .contenedor-traductor__eng
            p
              span.r-3.fst-italic.fw-normal To be able to describe and talk about situations in our personal lives that have occurred in the past, it is necessary to know not only expressions of the time context, but it is also important to delve into the appropriate vocabulary, which is the main input that allows us to build the ideas that we want to convey about our life, our experiences, our memories, etc.
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
            p Para poder describir y hablar sobre situaciones de nuestra vida personal ocurridas en el pasado, es necesario conocer no solo expresiones propias del contexto temporal, también es importante profundizar en el vocabulario adecuado, el cual es el principal insumo que nos permite construir las ideas que queremos transmitir sobre nuestra vida, nuestras experiencias, nuestros recuerdos, etc.
          a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción
    Separador
    #t_3_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 3.1. <em>How I used to feel in the past</em> (Cómo solía sentirme en el pasado)
    p.mb-5(data-aos='fade-right')
      span.r-3.fw-normal.fst-italic When we talk about how someone felt in the past, we have to use the verb “To be” and vocabulary to express feelings.
      br
      br
      | Cuando se habla de cómo alguien se sentía en un momento del pasado, se debe usar el verbo “to be” en el pasado y vocabulario para expresar esos sentimientos.
      br
      |A continuación, en el siguiente recurso, es posible reconocer algunos sentimientos en inglés que son utilizados en nuestro diario vivir.
    p.mb-5(data-aos='fade-right') Lea y escuche algunos ejemplos con su correspondiente pronunciación en inglés.
    SlyderF.mb-5(columnas="col-lg-1 col-xl-3")
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/38.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/1.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Happy
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/39.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/2.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Bored
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/40.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/3.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold In love
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/41.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/4.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Sad
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/42.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/5.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Excited
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/43.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/6.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Jealous
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/44.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/7.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Angry
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/45.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/8.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Worried
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/46.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/9.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Exhausted
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/47.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/10.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Scared
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/48.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/11.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Lonely
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/49.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/12.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Proud
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/50.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/13.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Grateful
    p.mb-5(data-aos='fade-right') Lea y escuche algunos ejemplos con su correspondiente pronunciación en inglés.
    div(style=' background-color: #fffbeb').p-5.mb-5
      p.fw-bold
        span.r-4.fst-italic For example 
        | / Por ejemplo:
      .row.justify-content-center
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/t1.svg' alt='AvatarTop')
            .tarjeta.color-acento-contenido.h-100
              .p-4
                h5
                  span.r-1.fst-italic I was worried in my graduation.
                p.text-white.mb-0 Yo estaba preocupada en mi graduación.
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/t2.svg' alt='AvatarTop')
            .tarjeta.color-acento-contenido.h-100
              .p-4
                h5
                  span.r-1.fst-italic My brothers were excited on their last vacation.
                p.text-white.mb-0 Mis hermanos estaban emocionados en sus últimas vacaciones.
      .row.justify-content-center
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/t3.svg' alt='AvatarTop')
            .tarjeta.color-acento-contenido.h-100
              .p-4
                h5
                  span.r-1.fst-italic Sara was happy on her birthday.
                p.text-white.mb-0 Sara estaba feliz en su cumpleaños.
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/t4.svg' alt='AvatarTop')
            .tarjeta.color-acento-contenido.h-100
              .p-4
                h5
                  span.r-1.fst-italic My girlfriend was jealous yesterday.
                p.text-white.mb-0 Mi novia estaba celosa ayer.
      .row.justify-content-center
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/t5.svg' alt='AvatarTop')
            .tarjeta.color-acento-contenido.h-100
              .p-4
                h5.mb-0
                  span.r-1.fst-italic I was bored on Christmas last year.
                p.text-white.mb-0 Yo estaba aburrido en Navidad el año pasado.
      .row.justify-content-center
        .col-lg-6
          TarjetaAudio.color-acento-botones.bg-white.mb-4(
          texto=""
          :audio="require('@/assets/audios/tema3/a1.mp3')"
          )

    .contenedor-franja.margin-n
      .franja(style= 'height: 80%')
      .contenido.px-5
        .row.justify-content-center.mb-5
          .col-lg-2.col-6.mb-lg-0.mb-3
            img(src='@/assets/curso/temas/warning.svg', alt='' style='width: 130px').m-auto
          .col-lg-10
            h5.mb-5.text-lg-white
              span.r-3 Warning #6
              br
              | Advertencia #6
            p.mb-5 
              span.r-1.fw-normal.fst-italic The adjectives that describe emotions in Spanish vary in number and gender, for example, “aburrido”, “aburrida”, “aburridos” and “aburridas”; instead, in English, that adjective has a single base word that can be used regardless of whether the subject is singular or plural, masculine or feminine, for example, “bored”.
              br
              br
              span.text-white Los adjetivos que describen las emociones en español varían en número y en género, por ejemplo, “aburrido”, “aburrida”, “aburridos” y “aburridas”; en cambio, en inglés, ese adjetivo tiene una sola palabra base que puede ser usada sin importar si el sujeto es singular o plural, masculino o femenino, por ejemplo, <em>“bored”</em>.

    p.mb-5(data-aos='fade-right') A continuación, se invita a escuchar algunos ejemplos con su correspondiente pronunciación en inglés.
    div(style=' background-color: #fffbeb').p-5.mb-5
      p.fw-bold
        span.r-4.fst-italic For example 
        | / Por ejemplo:
      .row.justify-content-center
        .col-lg-4
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/t1.svg' alt='AvatarTop' style='width: 85px')
            .tarjeta.color-acento-contenido.h-100
              .p-4
                h5
                  span.r-1.fst-italic She is bored.

                p.text-white.mb-0 Ella está aburrida.
        .col-lg-4
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/t2.svg' alt='AvatarTop' style='width: 85px')
            .tarjeta.color-acento-contenido.h-100
              .p-4
                h5
                  span.r-1.fst-italic He is bored.
                p.text-white.mb-0 Él está aburrido
        .col-lg-4
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/t4.svg' alt='AvatarTop' style='width: 85px')
            .tarjeta.color-acento-contenido.h-100
              .p-4
                h5
                  span.r-1.fst-italic They are bored.
                p.text-white.mb-0 Ellos están aburridos.
      .row.justify-content-center
        .col-lg-6
          TarjetaAudio.color-acento-botones.bg-white.mb-4(
          texto=""
          :audio="require('@/assets/audios/tema3/a2.mp3')"
          )
    Separador
    #t_3_2.titulo-segundo.color-acento-botones(data-aos='fade-right' )
      h2 3.2. <em>The stages of my life</em> (Las etapas de mi vida)
    .row.justify-content-center.mb-5
      .col-lg-7
        p.mb-5(data-aos='fade-right')
          span.r-3.fst-italic.fw-normal In life there are different stages in which very specific events are lived and those events have to be told using specific vocabulary and expressions in order to make others understand the context.
          br
          br
          |En la vida, existen diferentes etapas en las cuales se viven eventos muy específicos que deben poder contarse usando el correcto vocabulario y expresiones para dar a entender el contexto.
          br
          br
          |Lo invitamos a conocer las etapas de la vida utilizando expresiones en inglés.
      .col-lg-5: img(src='@/assets/curso/temas/c6.jpg', alt='')
    SlyderF.mb-5(columnas="col-lg-1 col-xl-3")
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/29.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/19.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Childhood
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/30.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/20.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Newborn child
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/31.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/21.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Toddlerhood
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/32.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/22.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Preschool years
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/33.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/23.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Early school years
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/34.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/24.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Adolescence 
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/35.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/25.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Young adulthood
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/36.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/26.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Middle adulthood
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/37.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/27.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Late adulthood
    p.mb-5(data-aos='fade-right') A continuación, se invita a escuchar algunos ejemplos con su correspondiente pronunciación en inglés.
    .contenedor-audios-iconos.p-5(style='background-color: #6b8dff')
      .icono1.d-none.d-lg-block: img(src='@/assets/curso/temas/51.svg', alt='')        
      .icono2.d-none.d-lg-block: img(src='@/assets/curso/temas/52.svg', alt='' style='width: 350px')   
      h5.text-white.text-center For example / Por ejemplo:      
      .row.justify-content-center
        .col-lg-5
          TarjetaAudio.color-acento-botones.bg-white.mb-4(
          texto="I was chubby in my childhood."
          :audio="require('@/assets/audios/tema3/28.mp3')"
          )
          p.ms-3 Yo era regordete en mi niñez.
      .row.justify-content-center
        .col-lg-5
          TarjetaAudio.color-acento-botones.bg-white.mb-4(
          texto="My toddlerhood was a difficult moment of my life."
          :audio="require('@/assets/audios/tema3/29.mp3')"
          )
          p.ms-3 Mi primera infancia fue un momento difícil de mi vida.
      .row.justify-content-center
        .col-lg-5
          TarjetaAudio.color-acento-botones.bg-white.mb-4(
          texto="Adolescence is a problematic stage for most people."
          :audio="require('@/assets/audios/tema3/30.mp3')"
          )
          p.ms-3 La adolescencia es una etapa problemática para la mayoría de las personas.
      .row.justify-content-center
        .col-lg-5
          TarjetaAudio.color-acento-botones.bg-white.mb-4(
          texto="My preschool years were really happy for me."
          :audio="require('@/assets/audios/tema3/31.mp3')"
          )
          p.ms-3 Mi edad preescolar fue muy feliz para mí.
      .row.justify-content-center
        .col-lg-5
          TarjetaAudio.color-acento-botones.bg-white.mb-4(
          texto="People in late adulthood are usually abandoned."
          :audio="require('@/assets/audios/tema3/32.mp3')"
          )
          p.ms-3 Los adultos mayores son usualmente abandonados.
    Separador.mt-5
    #t_3_3.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 3.3 <em>My social and family life</em> (Mi vida social y familiar)
    p.mb-5(data-aos='fade-right')
      span.r-3.fst-italic Talking about social and family life is something natural and daily for most people and you have to have the right vocabulary to generate a conversation about the topic.
      br
      br
      |Hablar de la vida social y familiar es algo natural y cotidiano para la mayoría de personas y se debe contar con el vocabulario necesario para generar una conversación en torno al tema.
      br
      br
      |Algunas de estas etapas 
      span.r-3.fst-italic (stages) 
      | son:
    SlyderF.mb-5(columnas="col-lg-1 col-xl-3")
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/53.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/33.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Birthday
            br
            span.r-3 Cumpleaños
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/54.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/34.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Thanksgiving
            br
            span.r-3 Día de acción de gracias
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/55.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/35.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Summer vacation

            br
            span.r-3 Vacaciones de verano
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/56.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/36.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Baptism

            br
            span.r-3 Bautizo
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/57.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/37.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Anniversary
            br
            span.r-3 Aniversario
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/58.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/38.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Birth
            br
            span.r-3 Nacimiento
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/59.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/39.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Wedding
            br
            span.r-3 Boda
      .tarjeta.tarjeta-bg.p-4.d-flex.align-items-end(:style="{'background-image': `url(${require('@/assets/curso/temas/60.jpg')})`}" style='height: 303px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-botones.mb-2.m-auto(:audio="require('@/assets/audios/tema3/40.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold Baby shower
            br
            span.r-3 Baby shower (celebración antes del nacimiento del bebé)
    p.mb-5(data-aos='fade-right') Lea y escuche algunos ejemplos con su correspondiente pronunciación en inglés.
    .contenedor-audios-iconos.p-5(style='background-color: #fff0b5')
      .icono1.d-none.d-lg-block: img(src='@/assets/curso/temas/61.svg', alt='' style='width: 172px')        
      .icono2.d-none.d-lg-block: img(src='@/assets/curso/temas/62.svg', alt='' style='width: 210px')   
      h5.text-center For example / Por ejemplo:      
      .row.justify-content-center
        .col-lg-5
          TarjetaAudio.color-acento-botones.bg-white.mb-4(
          texto="My birthday was amazing."
          :audio="require('@/assets/audios/tema3/41.mp3')"
          )
          p.ms-3 Mi cumpleaños fue increíble.   
      .row.justify-content-center
        .col-lg-5
          TarjetaAudio.color-acento-botones.bg-white.mb-4(
          texto="My parents’ wedding was a great event."
          :audio="require('@/assets/audios/tema3/42.mp3')"
          )
          p.ms-3 La boda de mis papás fue un gran evento.
      .row.justify-content-center
        .col-lg-5
          TarjetaAudio.color-acento-botones.bg-white.mb-4(
          texto="My baby shower was in a big house."
          :audio="require('@/assets/audios/tema3/43.mp3')"
          )
          p.ms-3 Mi baby shower fue en una casa grande.
      .row.justify-content-center
        .col-lg-5
          TarjetaAudio.color-acento-botones.bg-white.mb-4(
          texto="My godparents were really happy on my baptism."
          :audio="require('@/assets/audios/tema3/44.mp3')"
          )
          p.ms-3 Mis padrinos estaban muy felices en mi bautizo.
      .row.justify-content-center
        .col-lg-5
          TarjetaAudio.color-acento-botones.bg-white.mb-4(
          texto="On our last anniversary, we were in New York."
          :audio="require('@/assets/audios/tema3/45.mp3')"
          )
          p.ms-3 En nuestro último aniversario, estábamos en Nueva York.
    titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 Actividad didáctica 
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/completar-espacios.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 <em>Listen to the audio and fill in the blanks.</em> / Escuche el audio y complete los espacios en blanco.
        p.mb-4 Reforzar conocimientos acerca del vocabulario útil para hablar en el tiempo pasado simple.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Completar los espacios
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad3/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    ocultarEsp: true, // variables de vue
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
