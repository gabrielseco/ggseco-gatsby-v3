---
path: "/como-configurar-react-testing-library/"
date: "2019-02-02"
title: "Cómo configurar React Testing Library"
tags: ["react"]
excerpt: "React Testing Library que nos permite hacer tests de nuestros componentes de React chequeando el DOM en vez de chequear nuestras props o state cómo haríamos con Enzyme."
featured_image: "./images/code.jpg"
---

**<a href="https://github.com/kentcdodds/react-testing-library" target="_blank">React Testing Library</a>** que nos permite hacer tests de nuestros componentes de React chequeando el DOM en vez de chequear nuestras props o state cómo haríamos con enzyme.

### Instalación de nuestro proyecto de React

Con npx podemos crear un proyecto de react atacando al instalador global de create-react-app y crear nuestro proyecto

```sh
  npx create-react-app configure-react-testing-library
```

A continuación podemos instalar los siguientes paquetes para usar react-testing-library.

```sh
  npm i --save-dev react-testing-library jest-dom
```

Después de que nos instale estos paquetes dentro de la carpeta src, creamos el archivo setupTests.js y dentro escribiremos los siguiente

```js
// se añaden ciertos matchers del DOM a nuestro expect de jest
import "jest-dom/extend-expect";
// resetea nuestros componentes por cada test para que empiecen desde 0
import "react-testing-library/cleanup-after-each";
```

### Hagamos nuestros primeros tests

En el archivo App.test.js lo editaremos de la siguiente forma añadiendole 2 tests.

El primer test se encargará de renderizar nuestro componente <App> y que se renderice correctamente.

Mientras que el segundo comprobará que el elemento link tenga el texto "Learn React"

```js
import React from "react";
import { render } from "react-testing-library";
import App from "./App";

it("renders without crashing", () => {
  const wrapper = render(<App />);
  expect(wrapper.container.outerHTML).not.toBeUndefined();
});

it("the link text should be Learn React", () => {
  const wrapper = render(<App />);
  expect(wrapper.container.querySelector("a")).toHaveTextContent("Learn React");
});
```

### Resumen

En poco tiempo hemos configurado nuestra aplicación con react-testing-library, no nos tenemos que preocupar de configurar un adapter porque con cualquier versión de React funciona nuestra librería y no hay que olvidarse que a día de hoy nos deja testear los hooks de React.

Os dejo el repo en el siguiente enlace: **<a href="https://github.com/gabrielseco/configure-react-testing-library" target="_blank">Repo</a>**
