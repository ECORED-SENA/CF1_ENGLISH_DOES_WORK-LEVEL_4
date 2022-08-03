<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Verb To be in the past tense (Verbo To be en pasado)
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/00.svg', alt='')
      .col-lg-10
        .contenedor-traductor
          .contenedor-traductor__eng
            p
              span.r-3.fst-italic.fw-normal The verb "to be" is an irregular verb that has different forms depending on the tense in which it is conjugated. In the past, it has two forms: "was" and "were", determined by the grammatical person with which it is conjugated, and can be used as a main verb (for example, in the simple past) or as an auxiliary verb (for example, in the past progressive).
          .contenedor-traductor__esp(:class="{ mostrar: ocultarEsp}")
            p El verbo <em>"to be"</em> (ser/estar) es un verbo irregular que tiene diferentes formas según el tiempo en el que esté conjugado. En pasado, tiene dos formas: <em>"was"</em> y <em>"were"</em>, dependiendo de la persona gramatical con la que esté conjugado, y puede ser usado como verbo principal (por ejemplo, en el pasado simple) o como verbo auxiliar (por ejemplo, en el pasado progresivo).
          a.boton-traduccion(@click='ocultarEsp = !ocultarEsp') Ver traducción 
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 1
      span Verbo “to be” en tiempo pasado
    .row.justify-content-center.mb-5
      .col-lg-8
        .tabla-a.color-acento-botones.mb-5
          table.text-center.fw-bold.tb-edit
            tr
              th(colspan='4').p-0
                img(src='@/assets/curso/temas/0.svg', alt='')
            tbody
              tr
                td 
                td Sujeto
                td Verb “to be”
                td Verbo “ser” o “estar”
              tr
                td( rowspan='5') Singular
                td 1.ª persona
                td(style='background-color: #fff7da') 
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="I was"
                    :audio="require('@/assets/audios/tema1/1.mp3')"
                  )
                td() yo era/estaba
              tr
                td() 2.ª persona
                td(style='background-color: #fff7da') 
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="you were"
                    :audio="require('@/assets/audios/tema1/2.mp3')"
                  )
                td() tú eras/estabas<br>usted era/estaba
              tr
                td( rowspan='3') 3.ª persona
                td
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="he was"
                    :audio="require('@/assets/audios/tema1/3.mp3')"
                  )
                td él era/estaba
              tr
                td(style='background-color: #fff7da')
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="she was"
                    :audio="require('@/assets/audios/tema1/4.mp3')"
                  )
                td ella era/estaba
              tr
                td(style='background-color: #fff7da')
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="it was"
                    :audio="require('@/assets/audios/tema1/5.mp3')"
                  )
                td (eso) era/estaba
              tr
                td(rowspan='3') Plural
                td 1.ª persona
                td
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="we were"
                    :audio="require('@/assets/audios/tema1/6.mp3')"
                  )
                td nosotros<br>éramos/estábamos
              tr
                td 2.ª persona
                td(style='background-color: #fff7da')
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="you were"
                    :audio="require('@/assets/audios/tema1/7.mp3')"
                  )
                td ustedes<br>eran/estaban
              tr
                td 3.ª persona
                td(style='background-color: #fff7da')
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                    texto="they were"
                    :audio="require('@/assets/audios/tema1/8.mp3')"
                  )
                td ellos eran/estaban
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        img(src='@/assets/curso/temas/1.png', alt='')
        .tarjeta.rounded-0.color-acento-contenido.p-5.d-flex.flex-column
          .d-flex.align-items-end.justify-content-start.mb-4.m-auto
            img(src='@/assets/curso/temas/warning.svg', alt='' style='width: 63px;').me-3
            .textos
              h4.mb-0
                span.r-1 Warning #1 
                br
                | Advertencia #1
          p 
            span.r-1.fw-normal As shown in the table, all singular persons use "was" except for "you", which uses "were" for both singular and plural.
            br
            |Como se muestra en la tabla, todas las personas singulares usan "was" con excepción de "you", que tanto para singular como plural usa "were".
          p For example/por ejemplo:
          TarjetaAudio.color-acento-botones.bg-white.mb-3(
            texto="She was in the back and you were in the front of the photo."
            :audio="require('@/assets/audios/tema1/9.mp3')"
          )
          p.ms-2.mb-0 Ella estaba en la parte de atrás y tú estabas en el frente de la foto.
      .col-lg-6
        img(src='@/assets/curso/temas/2.png', alt='')
        .tarjeta.rounded-0.color-acento-contenido.p-5.d-flex.flex-column
          .d-flex.align-items-end.mb-4.m-auto
            img(src='@/assets/curso/temas/warning.svg', alt='' style='width: 63px;').me-3
            .textos
              h4.mb-0
                span.r-1 Warning #2 
                br
                | Advertencia #2
          p 
            span.r-1.fw-normal In Spanish, the verb "to be" can refer to "ser" or “estar" depending on the context of the sentence.
            br
            | En español, el verbo "to be" puede hacer referencia a "ser" o “estar" dependiendo del contexto de la oración.
          p For example/por ejemplo:
          .row.justify-content-center
            .col-lg-5
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
              texto="I was a student."
              :audio="require('@/assets/audios/tema1/10.mp3')"
              )
              p.ms-2 Yo era un estudiante.
            .col-lg-7
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
              texto="I was in the classroom."
              :audio="require('@/assets/audios/tema1/11.mp3')"
              )
              p.ms-2 Yo estaba en el salón de clases.
    Separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.1. Uses of the verb "to be" in the past tense (Usos del verbo "to be" en tiempo pasado)
    .row.justify-content-center.mb-5
      .col-lg-5.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/c1.jpg', alt='')   
      .col-lg-7
        p.mb-5(data-aos='fade-right') 
          span.r-3.fw-normal.fst-italic The verb "to be" is generally used as a main verb joining a subject with its complement, or it can also be used as an auxiliary verb to build a continuous tense. These are the most common uses of the verb "to be" in the past tense.
          br
          br
          |El verbo "to be" generalmente es usado como verbo principal, uniendo a un sujeto con su complemento, o también puede ser usado como verbo auxiliar para construir un tiempo continuo. Estos son los usos más comunes del verbo "to be" en pasado.
    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-6.mb-4.mb-md-0
              h5 
                span.r-3.fst-italic Describe 
                | / Describir
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
              texto="He was young and handsome."
              :audio="require('@/assets/audios/tema1/12.mp3')"
              )
              p.ms-2 Él era joven y guapo.
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
              texto="The puppies were so cute."
              :audio="require('@/assets/audios/tema1/13.mp3')"
              )
              p.ms-2 Los cachorros eran tan lindos.
            .col-md-6
              img.mb-5(src='@/assets/curso/temas/3.svg', alt='')
          .row
            .col-md-6
              img.mb-5(src='@/assets/curso/temas/4.svg', alt='')
            .col-md-6.mb-4.mb-md-0
              h5 
                span.r-3.fst-italic Locate 
                | / Ubicar
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
              texto="Sandra was in Colombia"
              :audio="require('@/assets/audios/tema1/14.mp3')"
              )
              p.ms-2 Sandra estaba en Colombia.
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
              texto="We were abroad."
              :audio="require('@/assets/audios/tema1/15.mp3')"
              )
              p.ms-2 Nosotros estábamos en el extranjero.
          .row
            .col-md-6.mb-4.mb-md-0
              h5 
                span.r-3.fst-italic Indicate feelings and states  
                | / Indicar sentimientos y estados
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
              texto="John was happy with the news, but Ana was worried."
              :audio="require('@/assets/audios/tema1/16.mp3')"
              )
              p.ms-2 John estaba feliz con la noticia, pero Ana estaba preocupada.
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
              texto="My parents were very busy at work."
              :audio="require('@/assets/audios/tema1/17.mp3')"
              )
              p.ms-2 Mis padres estaban muy ocupados en el trabajo.
            .col-md-6
              img.mb-5(src='@/assets/curso/temas/5.svg', alt='')
          .row
            .col-md-6
              img.mb-5(src='@/assets/curso/temas/6.svg', alt='')
            .col-md-6.mb-4.mb-md-0
              h5 
                span.r-3.fst-italic It + was
                p 
                  span.r-3.fst-italic.fw-normal To talk about time, distance, climate or cost. In this case, the verb <b>"to be"</b> is always used in the singular, <b>"was".</b>
                  br
                  br
                  |Para hablar del tiempo, distancia, clima o costo. En este caso el verbo 
                  span.r-3 "to be" 
                  | se usa siempre en singular, 
                  span.r-3 "was".
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
              texto="I didn't know it was so late."
              :audio="require('@/assets/audios/tema1/18.mp3')"
              )
              p.ms-2 No sabía que era tan tarde.
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
              texto="It was cold this morning."
              :audio="require('@/assets/audios/tema1/19.mp3')"
              )
              p.ms-2 Hacía frío esta mañana.
          .row
            .col-md-6.mb-4.mb-md-0
              h5 
                span.r-3.fst-italic.fw-norma There was - There were
              p
                span.r-3.fw-normal.fst-italic These forms are used to talk about something that existed. 
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
              texto="There was a hurricane on the island."
              :audio="require('@/assets/audios/tema1/20.mp3')"
              )
              p.ms-2 Hubo un huracán en la isla.
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
              texto="There were many volunteers to rebuild it."
              :audio="require('@/assets/audios/tema1/21.mp3')"
              )
              p.ms-2 Hubo muchos voluntarios para reconstruirla.
            .col-md-6
              img.mb-5(src='@/assets/curso/temas/7.svg', alt='')
          .row
            .col-md-6
              img.mb-5(src='@/assets/curso/temas/8.svg', alt='')
            .col-md-6.mb-4.mb-md-0
              h5 
                span.r-3.fst-italic As an auxiliary verb in the past progressive 
                span.fw-bold / Como verbo auxiliar en el pasado progresivo
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
              texto="I was playing football."
              :audio="require('@/assets/audios/tema1/ft.mp3')"
              )
              p.ms-2 Yo estaba jugando fútbol.
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
              texto="Clara and Diana were playing volleyball. "
              :audio="require('@/assets/audios/tema1/clara.mp3')"
              )
              p.ms-2 Clara y Diana estaban jugando voleibol.
          .row
            .col-md-6.mb-4.mb-md-0
              h5 
                span.r-3.fst-italic Talk about people's behavior 
                span.fw-bold / Hablar sobre el comportamiento de las personas
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
              texto="I was being careful and attentive. "
              :audio="require('@/assets/audios/tema1/attentive.mp3')"
              )
              p.ms-2 Yo estaba siendo cuidadoso y atento.
              TarjetaAudio.color-acento-botones.bg-white.mb-3(
              texto="You were being very rude to your teacher."
              :audio="require('@/assets/audios/tema1/teacher.mp3')"
              )
              p.ms-2 Ustedes estaban siendo muy groseros con su profesor.
            .col-md-6
              img.mb-5(src='@/assets/curso/temas/9.svg', alt='')
    Separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.2. Differences: Was vs. Were (Diferencias: Was vs. Were)
    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/c1.jpg', alt='') 
      .col-lg-7 
        p.mb-5(data-aos='fade-right') 
          span.r-3.fw-normal Although both <b>“was”</b> and <b>“were”</b> are the past tense forms of the verb <b>“to be”</b>, they are used with different grammatical persons in the indicative mood, and in the subjunctive mood the rules for their use change. But the first question is: What are the indicative mood and the subjunctive mood?
          br
          br
          | Si bien, tanto 
          span.r-3 “was” 
          | como 
          span.r-3 “were” 
          | son las formas en pasado del verbo 
          span.r-3 “to be”, 
          | se usan con diferentes personas gramaticales en el modo indicativo; y en el modo subjuntivo, las reglas para su uso cambian. Pero la primera pregunta es: <b>¿qué son el modo indicativo y el modo subjuntivo?</b>
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.color-primario.p-4.h-100
          img.mb-3(src='@/assets/curso/temas/10.svg', alt='' style='width: 41px')
          h5
            span.r-3.fst-italic Indicative mood
            br
            | Modo indicativo
          p 
            span.r-2.fw-normal Grammatical mood used to express objective statements, things that happen in reality, and known facts.
          p Modo gramatical usado para expresar declaraciones objetivas, cosas que suceden en realidad y hechos conocidos.
      .col-lg-3
        .tarjeta.color-secundario.p-4.h-100
          img.mb-3(src='@/assets/curso/temas/11.svg', alt='' style='width: 41px')
          h5
            span.fst-italic.text-white Subjunctive mood 
            br
            | Modo subjuntivo
          p 
            span.text-white.fw-normal Grammatical mood used to express a wish or suggestion, hypothetical or improbable situations, things that are not real.
          p Modo gramatical utilizado para expresar un deseo o sugerencia, situaciones hipotéticas o improbables, cosas que no son reales.
    div(style='background-color: #eda0a8').mb-5
      .row.justify-content-center
        .col-xl-4.d-none.d-xl-block: img.h-100(src='@/assets/curso/temas/c2.png', alt='')
        .col-xl-8
          p.p-4.mb-0(data-aos='fade-right') 
            span.r-3.fw-normal Knowing this, let's compare <b>“was”</b> and <b>“were”</b> to clarify how and when to use them correctly, since even native English speakers and people who have been learning this language for a long time make common mistakes when speaking and writing.
            br
            br
            | Sabiendo esto, vamos a comparar 
            span.r-3.fst-italic <b>“was”</b> 
            | y 
            span.r-3.fst-italic <b>“were” </b> 
            | para aclarar cómo y cuándo usarlos correctamente, porque incluso los hablantes nativos de inglés y las personas que llevan mucho tiempo aprendiendo este idioma cometen errores comunes al hablar y escribir.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 2
      span Was vs. Were
    //TODO Configurar el scroll 
    .contenedor-vs
      .contenedor-vs__icon.d-none.d-lg-block: img(src='@/assets/curso/temas/vs.svg', alt='')
      .row.justify-content-center.mb-5.gx-3
        .col-lg-6.mb-lg-0.mb-3
          .card-was
            .card-was__title.p-4
              h2.mb-0.fst-italic WAS
            .card-was__content.scroll.p-5
              p 
                span.r-3.fw-normal.fst-italic It is used in the indicative mood, when something real happened in the past, only with the first and third singular person: <b>I, he, she, it.</b>
                br
                br
                |Es usado en el modo indicativo, cuando algo real sucedió en el pasado, solamente con la primera y tercera persona singular: 
                span.r-3.fst-italic <b>I, he, she, it.</b>
              p
                span.r-4 For example / 
                <b>Por ejemplo</b>
              .row.justify-content-center.mb-4
                .col-lg-3.col-8.mb-lg-0.mb-3
                  img.mb-3(src='@/assets/curso/temas/12.svg', alt='')
                .col-lg-8
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                  texto="She was sick last week."
                  :audio="require('@/assets/audios/tema1/22.mp3')"
                  )
                  p.ms-2 Ella estaba enferma la semana pasada.
              .row.justify-content-center
                .col-lg-3.col-8.mb-lg-0.mb-3
                  img.mb-3(src='@/assets/curso/temas/13.svg', alt='')
                .col-lg-8
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                  texto="I was at home yesterday."
                  :audio="require('@/assets/audios/tema1/23.mp3')"
                  )
                  p.ms-2 Yo estaba en casa ayer. 
        .col-lg-6
          .card-was
            .card-was__title.p-4
              h2.mb-0.fst-italic WERE
            .card-was__content.scroll.p-5
              p
                span.r-3.fst-italic.fw-normal It is used in the indicative mood, when something real happened in the past, with the other grammatical persons: <b>you</b> (both singular and plural), <b>we, they.</b>
                br
                br
                | Es usado en el modo indicativo, cuando algo real sucedió en el pasado, con las demás personas gramaticales: 
                span.r-3.fst-italic you 
                | (tanto singular como plural), 
                span.r-3.fst-italic we, they.
              p
                span.r-4 For example /  
                <b>Por ejemplo</b>
              .row.justify-content-center.mb-4
                .col-lg-3.col-8.mb-lg-0.mb-3
                  img.mb-3(src='@/assets/curso/temas/14.svg', alt='')
                .col-lg-8
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                  texto="We were at the supermarket."
                  :audio="require('@/assets/audios/tema1/24.mp3')"
                  )
                  p.ms-2 Nosotros estábamos en el supermercado.
              .row.justify-content-center.mb-4
                .col-lg-3.col-8.mb-lg-0.mb-3
                  img.mb-3(src='@/assets/curso/temas/15.svg', alt='')
                .col-lg-8
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                  texto="They were nice to me."
                  :audio="require('@/assets/audios/tema1/25.mp3')"
                  )
                  p.ms-2 Ellos fueron amables conmigo.
              p
                span.r-3.fw-normal.fst-italic It is used in certain cases, such as some conditional clauses, in the subjunctive mood and after the verb <b>“wish”</b>, with all grammatical persons regardless of whether they are singular or plural: <b>I, you</b> (both singular and plural), <b>he, she, it, we, they.</b>
                br
                br
                |Es usado en ciertos casos, como en algunas cláusulas condicionales, en el modo subjuntivo y después del verbo 
                span.r-3.fst-italic “wish”, 
                | con todas las personas gramaticales, sin importar si son las singulares o plurales: 
                span.r-3.fst-italic I, you 
                | (tanto singular como plural), 
                span.r-3.fst-italic he, she, it, we, they.
              p
                span.r-4 For example / 
                <b>Por ejemplo</b>
              .row.justify-content-center.mb-4
                .col-lg-3.col-8.mb-lg-0.mb-3
                  img.mb-3(src='@/assets/curso/temas/16.svg', alt='')
                .col-lg-8
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                  texto="I wish I were taller"
                  :audio="require('@/assets/audios/tema1/26.mp3')"
                  )
                  p.ms-2 Desearía ser más alto.
              .row.justify-content-center.mb-4
                .col-lg-3.col-8.mb-lg-0.mb-3
                  img.mb-3(src='@/assets/curso/temas/17.svg', alt='')
                .col-lg-8
                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                  texto="If the weather were better, he would go swimming"
                  :audio="require('@/assets/audios/tema1/27.mp3')"
                  )
                  p.ms-2 Si el clima fuera mejor, él iría a nadar.
    .contenedor-franja.margin-n
      .franja
      .contenido.px-5
        .row.justify-content-center.mb-5
          .col-lg-2.col-6.mb-lg-0.mb-3
            img(src='@/assets/curso/temas/warning.svg', alt='' style='width: 130px;').m-auto
          .col-lg-10
            h5.mb-5.text-lg-white
              span.r-3.fst-italic Warning #3
              br
              | Advertencia #3
            p.mb-5 
              span.r-1.fw-normal Don’t confuse “were”, which is a past tense form of the verb “to be”, with “we’re”, which is the contraction “we + are” of the personal pronoun “we” and the verb “to be” in the present tense, “are”.
              br
              br
              span.text-white No se debe confundir <em>“were”</em>, que es una forma en pasado del verbo <em>“to be”</em>, con <em>“we’re”</em>, que es la contracción <em>“we + are”</em> del pronombre personal “nosotros” y el verbo <em>“to be”</em> en presente, <em>“are”</em>.
    Separador
    #t_1_3.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.3. Sentence structures (Estructuras de oraciones) 
    p.mb-5(data-aos='fade-right') En el pasado simple, las oraciones que usan el verbo <em>"to be"</em> como verbo principal son útiles para expresar qué y cómo éramos, dónde estábamos, cómo nos sentíamos y comportábamos en un tiempo anterior al presente. Observe las frases (o estructuras gramaticales) usadas para expresar esta información en el siguiente video: 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/1Ker6cG44Uk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos='fade-right') Si desea practicar, el siguiente PDF presenta los textos del video anterior, tanto en inglés como en español.
    // TODO Anadir el pdf al llamado de accion 
    .tarjeta.color-acento-botones.p-3.mb-5.margin-n.rounded-0.px-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/18.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5.mb-1 Sentence structures (Estructuras de oraciones) 
              p.text-small Y  en el siguiente recurso podrá repasar cada una de las estructuras gramaticales (estructura afirmativa, estructura negativa, estructura interrogativa) del verbo <b>“To be”</b> explicadas en el video.
            .col-sm-auto
              a.boton.color-primario(:href="obtenerLink('downloads/structure.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    .tarjeta-bg.p-lg-5.p-1.mb-5
      .row.justify-content-center.align-items-end
        .col-lg-3.mb-lg-0.mb-3
          img.d-none.d-lg-block(src='@/assets/curso/temas/c3.png', alt='')
        .col-lg-9
          .tarjeta.bg-white.p-lg-5.p-3
            SlyderA(tipo='b')
              div
                p
                  span.r-3.fst-italic Affirmative 
                  | / Afirmativa
                .row.justify-content-center.mb-5
                  .col-lg-10
                    img.d-lg-block.d-none(src='@/assets/curso/temas/s1.svg', alt='').mb-3
                    img.d-block.d-lg-none(src='@/assets/curso/temas/s2.svg', alt='').mb-3
                TarjetaAudio.color-acento-botones.bg-white(
                  texto=""
                  :audio="require('@/assets/audios/tema1/a1.mp3')"
                  )
              div
                p
                  span.r-3.fst-italic Negative 
                  | / Negativa
                .row.justify-content-center.mb-5
                  .col-lg-10
                    img.d-lg-block.d-none(src='@/assets/curso/temas/s3.svg', alt='')
                    img.d-block.d-lg-none(src='@/assets/curso/temas/s4.svg', alt='')
                TarjetaAudio.color-acento-botones.bg-white.mb-3(
                  texto=""
                  :audio="require('@/assets/audios/tema1/a2.mp3')"
                  )
              div
                p
                  span.r-3.fst-italic Yes or No Questions 
                  | / Preguntas de Sí o No
                .row.justify-content-center.mb-3
                  .col-lg-4.mb-lg-0.mb-3
                    .d-flex.align-items-center
                      img(src='@/assets/curso/temas/21.svg', alt='' style='width: 49px').me-3
                      p
                        span.r-3.fst-italic Affirmative
                        br
                        | Afirmativa
                  .col-lg-4.mb-lg-0.mb-3
                    p She 
                      span.r-3.fw-italic was 
                      | intelligent.
                  .col-lg-4.mb-lg-0.mb-3
                    p Ella <b>era</b> inteligente.
                .row.justify-content-center.mb-3
                  .col-lg-4.mb-lg-0.mb-3
                    .d-flex.align-items-center
                      img(src='@/assets/curso/temas/22.svg', alt='' style='width: 49px').me-3
                      p
                        span.r-3.fst-italic Interrogative
                        br
                        | Interrogativa
                  .col-lg-4.mb-lg-0.mb-3
                    p 
                      span.r-3.fw-italic Was 
                      | she intelligent?
                  .col-lg-4.mb-lg-0.mb-3
                    p ¿Ella <b>era</b> inteligente?
                .row.justify-content-center.mb-3
                  .col-lg-4.mb-lg-0.mb-3
                    .d-flex.align-items-center
                      img(src='@/assets/curso/temas/23.svg', alt='' style='width: 49px').me-3
                      p
                        span.r-3.fst-italic Short answer

                        br
                        | Respuestas cortas
                  .col-lg-4.mb-lg-0.mb-3
                    p - Yes, she 
                      span.r-3.fw-italic was.
                      br
                      |- No, she 
                      span.r-3.fw-italic wasn’t.
                  .col-lg-4.mb-lg-0.mb-3
                    p Si.
                      br
                      |No.
                hr
                .row.justify-content-center.mb-3
                  .col-lg-4.mb-lg-0.mb-3
                    .d-flex.align-items-center
                      img(src='@/assets/curso/temas/21.svg', alt='' style='width: 49px').me-3
                      p
                        span.r-3.fst-italic Affirmative
                        br
                        | Afirmativa
                  .col-lg-4.mb-lg-0.mb-3
                    p They 
                      span.r-3.fw-italic were 
                      | students
                  .col-lg-4.mb-lg-0.mb-3
                    p Ellos <b>eran</b> estudiantes.
                .row.justify-content-center.mb-3
                  .col-lg-4.mb-lg-0.mb-3
                    .d-flex.align-items-center
                      img(src='@/assets/curso/temas/22.svg', alt='' style='width: 49px').me-3
                      p
                        span.r-3.fst-italic Interrogative
                        br
                        | Interrogativa
                  .col-lg-4.mb-lg-0.mb-3
                    p 
                      span.r-3.fw-italic Were 
                      | they students?
                  .col-lg-4.mb-lg-0.mb-3
                    p ¿Ellos <b>eran</b> estudiantes?
                .row.justify-content-center.mb-3
                  .col-lg-4.mb-lg-0.mb-3
                    .d-flex.align-items-center
                      img(src='@/assets/curso/temas/23.svg', alt='' style='width: 49px').me-3
                      p
                        span.r-3.fst-italic Short answer

                        br
                        | Respuestas cortas
                  .col-lg-4.mb-lg-0.mb-3
                    p - Yes, they 
                      span.r-3.fw-italic were.
                      br
                      |- No, they 
                      span.r-3.fw-italic weren’t.
                  .col-lg-4.mb-lg-0.mb-3
                    p Si.
                      br
                      |No.
                    
                TarjetaAudio.color-acento-botones.bg-white.mb-3(
                  texto=""
                  :audio="require('@/assets/audios/tema1/a3.mp3')"
                  )
              div
                p
                  span.r-3.fst-italic Information Questions 
                  | / Preguntas de información
                .row.justify-content-center.mb-5
                  .col-lg-10
                    img.d-lg-block.d-none(src='@/assets/curso/temas/s5.svg', alt='')
                    img.d-block.d-lg-none(src='@/assets/curso/temas/s6.svg', alt='')
                .row.justify-content-center.mb-5
                  .col-lg-5
                    p.mb-1.fst-italic
                      span.r-3 Where 
                      span.r-4 was 
                      span.r-3 he yesterday?
                    p.mb-1.fst-italic
                      span.r-3 Why  
                      span.r-4 were 
                      span.r-3 they angry? 
                    p.mb-1.fst-italic
                      span.r-3 When 
                      span.r-4 were 
                      span.r-3 you a student? 
                  .col-lg-5
                    p.mb-1 ¿Dónde <b>estaba</b> él ayer?
                    p.mb-1 ¿Por qué ellos <b>estaban</b> enojados?
                    p.mb-1 ¿Cuándo <b>eras</b> tú un estudiante?
                TarjetaAudio.color-acento-botones.bg-white.mb-3(
                  texto=""
                  :audio="require('@/assets/audios/tema1/a4.mp3')"
                  )

    .contenedor-franja.margin-n
      .franja
      .contenido.px-5
        .row.justify-content-center.mb-5
          .col-lg-2.col-6.mb-lg-0.mb-3
            img(src='@/assets/curso/temas/warning.svg', alt='' style='width: 130px').m-auto
          .col-lg-10
            h5.mb-5.text-lg-white
              span.r-3.fst-italic Warning #4
              br
              | Advertencia #4
            p.mb-5 
              span.r-1.fw-normal.fst-italic In the Spanish language, the structure of affirmative sentences and questions is generally the same, the only thing that changes is the intonation in which they are pronounced; but in English sentence structure and word order do change and you should be very aware of it.
              br
              br
              span.text-white En el idioma español, generalmente la estructura de las oraciones afirmativas y las preguntas es la misma, lo único que cambia es la entonación en la que se pronuncian; pero en inglés, la estructura de la oración y el orden de las palabras sí cambia y se debe estar muy consciente de ello.
    titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 Actividad didáctica 
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/seleccion-multiple.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 <em>Reading comprehension “My last trip”.</em> / Comprensión de lectura “My last trip”.
        p.mb-4 Reforzar conocimientos acerca de las formas del verbo “to be” en el tiempo pasado simple.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Opcion múltiple 
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad1/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece      
          
          


























</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.tb-edit
  th,td,tr
    border: 2px solid $color-secundario !important
.card-was
  .scroll
    overflow: scroll
    overflow-x: hidden

  &__title
    background-color: $color-acento-contenido
    h2
      color: $white
    text-align: center
  &__content
    background-color: #e1e8ff
    max-height: 690px
.contenedor-vs
  position: relative
  &__icon
    position: absolute
    left: 48%
    top: 0
    translate: translateX(-50%)
.contenedor-degrade
  background: linear-gradient(180deg, rgba(255,240,181,1) 0%, rgba(9,9,121,0) 30%, rgba(9,9,121,0) 70%, rgba(255,240,181,1) 100%)
.dialogo-verde
  .tarjeta-audio.color-acento-botones,
    border-color: #01ac57 !important
  .audio__btn
    background-color: #01ac57 !important
  .tarjeta-audio__texto
    color: #01ac57 !important
.tarjeta-bg
  background-image: url('../assets/curso/temas/bg.png')
  background-size: cover
  background-position: center
  background-repeat: no-repeat
</style>
