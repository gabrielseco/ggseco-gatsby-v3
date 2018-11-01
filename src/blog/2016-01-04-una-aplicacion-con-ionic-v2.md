---
path: "/una-app-con-ionic-framework-v2/"
date: "2016-01-04"
title: "Una app con Ionic Framework v2. Parte I"
tags: ["Ionic Framework"]
excerpt: "Drifty co. ha sacado recientemente la versión beta de Ionic Framework v2, que viene con grandes cambios, con la actualización a Angular2, y una actualización de sus componentes, una nueva navegación. Además usan Webpack, para compilar los archivos SCSS, JS y HTML en el que usan BabelJS para compilar ES6. Vamos a realizar una aplicación."
subtitle: "Parte I. El listado"
featured_image: "./images/code.jpg"
---

Drifty co. ha sacado recientemente la versión beta de **[Ionic Framework v2](http://ionic.io/2)**, que viene con grandes cambios, con la actualización a **[Angular2](https://angular.io/)**, y una actualización de sus componentes, una nueva navegación.

Además usan **[Webpack](https://webpack.github.io/)**, para compilar los archivos SCSS, JS y HTML en el que usan **[BabelJS](https://babeljs.io/)** para compilar ES6.

Vamos a realizar una aplicación sencilla, que pide las películas más populares de un servicio REST **[themoviedb](http://docs.themoviedb.apiary.io/)**, lo mostraremos en un listado, además tendrán un detalle.

A continuación podéis ver el resultado de la app, si queréis saltaros el tutorial, podéis visitar el siguiente enlace de github y descargaros el código fuente.

**[Ver código fuente](https://github.com/gabrielseco/learnionic2)**

[![Simulator Screen Shot 2 ene 2016 11.20.54](http://178.62.72.15/wp-content/uploads/2016/01/Simulator-Screen-Shot-2-ene-2016-11.20.54-169x300.png)](http://178.62.72.15/wp-content/uploads/2016/01/Simulator-Screen-Shot-2-ene-2016-11.20.54.png)[![Simulator Screen Shot 2 ene 2016 11.21.04](http://178.62.72.15/wp-content/uploads/2016/01/Simulator-Screen-Shot-2-ene-2016-11.21.04-169x300.png)](http://178.62.72.15/wp-content/uploads/2016/01/Simulator-Screen-Shot-2-ene-2016-11.21.04.png)

# Instalación

Para instalar ionic v2 hay que seguir los siguientes pasos:

* 1.  Abrir la terminal
* 2.  Asegurarnos que tenemos node y npm instalados
* 3.  Ejecutar el siguiente comando

```sh
  npm install -g ionic@beta
```

# Crear una aplicación

Desde la terminal ejecutaremos el siguiente comando, que para las personas que estén familiarizadas con Ionic 1 les resultará conocido

```sh
  ionic start learnionic2 --v2
```

Nos genera la base del framework, para ejecutar la app que nos genera una aplicación con tabs por defecto

```sh
  cd learnionic2
  ionic serve
```

Nos ejecutará en nuestro navegador predeterminado en el puerto 8100 la App

Abrimos la carpeta para ver los archivos que se han generado

<a href="http://www.ggseco.com/wp-content/uploads/2016/01/Captura-de-pantalla-2016-01-02-a-las-17.20.48.png" rel="attachment wp-att-857"><img class="alignnone size-medium wp-image-857" src="http://www.ggseco.com/wp-content/uploads/2016/01/Captura-de-pantalla-2016-01-02-a-las-17.20.48-262x300.png" alt="Captura de pantalla 2016-01-02 a las 17.20.48" width="262" height="300" /></a>


Nosotros por ahora solo nos tenemos que preocupar de hacer los cambios en el directorio /app.

"ionic serve" se encarga por nosotros de compilar los archivos scss y js que usen es6 por medio de Webpack.

# 1.- Cambiar tabs

En el directorio /app abrimos el archivo app.html que contiene el html de cada tab, dejamos una cambiándole sus propiedades.

```html
```

Definimos que el componente ion-tab con las siguientes propiedades
```html
```

asamos a editar el archivo app.js.

En el tenemos importado nuestras páginas y definimos el componente que vamos a asignar a cada tab.

Nuestro archivo debería quedar de la siguiente forma.

```ts
```

# 2.- Crear nuestra página Films

Podemos borrar en el directorio pages,los directorios page1, page2, page3 ya que no las vamos a utilizar.

Creamos un directorio llamado films, que tendrá 3 archivos un films.html para nuestras vistas, un films.scss para modificar los estilos de la página y un archivo js en el que tendremos nuestra lógica.

En el fichero films.js importamos un provider que vamos a crear posteriormente para hacer nuestras llamadas AJAX a una API.

También importamos Page y NavController de Ionic.

```ts
```

La vista la crearíamos de la siguiente forma.

```html
```

El ion-title nos permite definir el título de la vista que aparecerá en la parte superior del dispositivo.

Usamos un ngFor que actúa como ng-repeat en angular1 o un for en javascript o en cualquier lenguaje similar.

Asignamos a la imagen la ruta que nos devuelve la api y asignamos una descripción.

<h1>3.- Creación del provider</h1>
Para obtener los datos y que se pinten en nuestra vista, necesitamos hacer una llamada ajax.

En esta aplicación vamos a llamar a la API themoviedb para obtener las películas más populares del momento.

Creamos en el directorio /app la carpeta providers el archivo films-data.js.

En el importo  el módulo Http y el módulo Injectable para poder usarlo en films.js

El módulo nos permite hacer las llamadas Ajax.

```ts
```

Al finalizar la creación del provider ya tendremos el listado de películas listo, en el siguiente tutorial aprenderemos a usar la navegación y obtener los datos de la ficha de una película