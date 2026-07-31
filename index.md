---
layout: home
permalink: /
---

<section class="hero">
  <div class="container">
    <div class="hero-copy">
      <h1 class="hero-title">
        <span class="es">Tu Título Profesional</span>
        <span class="en">Your Professional Title</span>
      </h1>
      <p class="hero-text">
        <span class="es">
          Breve descripción de quién eres y a qué te dedicas. Sustituye este texto por un resumen
          de una o dos frases sobre tu perfil profesional, área de estudio o especialidad.
        </span>
        <span class="en">
          Short description of who you are and what you do. Replace this text with a one- or
          two-sentence summary of your professional profile, field of study, or specialty.
        </span>
      </p>
      <div class="btn-row">
        <a href="#projects" class="btn btn-primary">
          <span class="es">Explorar Proyectos</span>
          <span class="en">Explore Projects</span>
        </a>
        <a href="{{ '/about/' | relative_url }}" class="btn btn-secondary">
          <span class="es">Más Sobre Mí</span>
          <span class="en">More About Me</span>
        </a>
      </div>
    </div>

    <div class="hero-photo">
      <img src="{{ '/assets/images/profile-placeholder.svg' | relative_url }}"
           data-es="Foto de perfil" data-en="Profile photo" data-attr="alt"
           alt="Foto de perfil">
    </div>
  </div>
</section>

<section class="section-alt">
  <div class="container about-summary">
    <h2 class="section-heading">
      <span class="es">Sobre Mí</span>
      <span class="en">About Me</span>
    </h2>
<div class="es" markdown="1">
Aquí va un resumen breve de tu página "Sobre Mí": tu trayectoria, formación e intereses
principales en dos o tres frases. Este texto debería ser un extracto condensado del
contenido completo que desarrollas en la página About Me.

</div>

<div class="en" markdown="1">
Here goes a short summary of your "About Me" page: your background, education, and main
interests in two or three sentences. This text should be a condensed excerpt of the full
content you develop on the About Me page.

</div>
    <a href="{{ '/about/' | relative_url }}" class="btn btn-secondary">
      <span class="es">Leer Más</span>
      <span class="en">Read More</span>
    </a>
  </div>
</section>
