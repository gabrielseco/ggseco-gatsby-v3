---
path: "/como-mantener-la-altura-en-todos-tus-divs/"
date: "2015-05-10"
title: "Cómo mantener la altura en todos tus divs"
tags: ["CSS"]
excerpt: "Este es un problema que he resuelto esta semana. El problema es que los divs debido a su diferente contenido nunca mantienen la misma medida en vertical. Hay dos soluciones a este problema usar javascript o usar css. Yo me he decantado por la segunda. Para el ejemplo que presento usaré bootstrap 3 con flexbox. Usaré un layout 3 columnas."
subtitle: ""
featured_image: "./images/man-with-tablet.jpg"
---
Este es un problema que he resuelto esta semana.

El problema es que los divs debido a su diferente contenido nunca mantienen la misma medida en vertical.

Hay dos soluciones a este problema usar javascript o usar css.

Yo me he decantado por la segunda.

Para el ejemplo que presento usaré bootstrap 3 con flexbox.

Usaré un layout 3 columnas.

```html
  <div class="container">
  <div class="row">
    <div class="wrapper">
      <div class="col-md-4 col-sm-4 col-xs-12 fondo">
        <img src="https://facebook.github.io/react/img/logo_og.png" alt="React JS" title="React JS" class="img_responsive img-thumbnail" />
        <h4 class="nombre">REACTJS</h4>
        <div class="descripcion">
          <p>
            React JS una librería para hacer UI con JS
          </p>
          <p>Con flexbox mantenemos la altura aunque tengamos diferente contenido</p>
          <p>Añadimos más contenido....</p>
        </div>
      </div>

      <div class="col-md-4 col-sm-4 col-xs-12 fondo">
        <img src="https://facebook.github.io/react/img/logo_og.png" alt="React JS" title="React JS" class="img_responsive img-thumbnail" />
        <h4 class="nombre">REACTJS</h4>
        <div class="descripcion">
          <p>
            React JS una librería para hacer UI con JS
          </p>
          <p>Con flexbox mantenemos la altura aunque tengamos diferente contenido</p>
        </div>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12 fondo">
        <img src="https://facebook.github.io/react/img/logo_og.png" alt="React JS" title="React JS" class="img_responsive img-thumbnail" />
        <h4 class="nombre">REACTJS</h4>
        <div class="descripcion">
          <p>
            React JS una librería para hacer UI con JS
          </p>
          <p>Con flexbox mantenemos la altura aunque tengamos diferente contenido</p>
        </div>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12 fondo">
        <img src="https://facebook.github.io/react/img/logo_og.png" alt="React JS" title="React JS" class="img_responsive img-thumbnail" />
        <h4 class="nombre_trabajo">REACTJS</h4>
        <div class="descripcion">
          <p>
            React JS una librería
          </p>
        </div>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12 fondo">
        <img src="https://facebook.github.io/react/img/logo_og.png" alt="React JS" title="React JS" class="img_responsive img-thumbnail" />
        <h4 class="nombre_trabajo">REACTJS</h4>
        <div class="descripcion">
          <p>
            React JS una librería
          </p>
        </div>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12 fondo">
        <img src="https://facebook.github.io/react/img/logo_og.png" alt="React JS" title="React JS" class="img_responsive img-thumbnail" />
        <h4 class="nombre_trabajo">REACTJS</h4>
        <div class="descripcion">
          <p>
            React JS una librería
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
```

```css
  .wrapper{
    display:flex;
    flex-wrap:wrap;
  }
```

En el css usamos la propiedad display con valor  flex para decirle que queremos usar flexbox y usamos la propiedad flex-wrap con el valor wrap para presentarlo en multilínea.

Si quieres aprender flexbox puedes usar esta guía

<a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">
  Guía Flexbox
</a>

He hecho una demo que se puede ver a continuación

<a href="http://codepen.io/GGarciaSeco/pen/MwaJmY/" target="_blank">
  Demo
</a>

Saludos &amp; Happy Coding