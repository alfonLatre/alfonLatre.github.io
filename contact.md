---
layout: default
title: "Contact / Contacto"
permalink: /contact/
---

<section>
  <div class="container">
    <h1 class="section-heading">
      <span class="es">Contacto</span>
      <span class="en">Contact</span>
    </h1>
    <p class="section-subheading">
      <span class="es">¿Quieres hablar sobre un proyecto o colaboración? Escríbeme.</span>
      <span class="en">Want to talk about a project or collaboration? Get in touch.</span>
    </p>

    <div class="contact-layout">
      <div>
        <h2><span class="es">Información</span><span class="en">Information</span></h2>
        <ul class="contact-info-list">
          <li>
            <span class="contact-icon">✉</span>
            <a href="mailto:{{ site.social.email }}">{{ site.social.email }}</a>
          </li>
          <li>
            <span class="contact-icon">in</span>
            <a href="{{ site.social.linkedin }}" target="_blank" rel="noopener">{{ site.social.linkedin | remove_first: "https://" }}</a>
          </li>
          <li>
            <span class="contact-icon">gh</span>
            <a href="{{ site.social.github }}" target="_blank" rel="noopener">{{ site.social.github | remove_first: "https://" }}</a>
          </li>
        </ul>
      </div>

      <div>
        <h2><span class="es">Envíame un mensaje</span><span class="en">Send me a message</span></h2>
        <!--
          This form has no backend. To make it work you can:
          - Use a form service like Formspree/Getform (set the action URL they give you), or
          - Replace the <form> with a simple mailto: link.
        -->
        <form class="contact-form" action="#" method="POST">
          <div class="form-group">
            <label for="name">
              <span class="es">Nombre</span>
              <span class="en">Name</span>
            </label>
            <input type="text" id="name" name="name" required
                   data-es="Tu nombre" data-en="Your name" data-attr="placeholder"
                   placeholder="Tu nombre">
          </div>
          <div class="form-group">
            <label for="email">
              <span class="es">Correo electrónico</span>
              <span class="en">Email</span>
            </label>
            <input type="email" id="email" name="email" required
                   data-es="tu@correo.com" data-en="you@email.com" data-attr="placeholder"
                   placeholder="tu@correo.com">
          </div>
          <div class="form-group">
            <label for="message">
              <span class="es">Mensaje</span>
              <span class="en">Message</span>
            </label>
            <textarea id="message" name="message" required
                      data-es="Escribe tu mensaje aquí..." data-en="Write your message here..." data-attr="placeholder"
                      placeholder="Escribe tu mensaje aquí..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            <span class="es">Enviar</span>
            <span class="en">Send</span>
          </button>
          <p class="form-note">
            <span class="es">Este formulario es de ejemplo: conéctalo a un servicio como Formspree o a tu propio backend para que funcione.</span>
            <span class="en">This form is a placeholder: connect it to a service like Formspree or your own backend to make it functional.</span>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>
