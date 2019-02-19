---
path: "/un-linter-para-gobernarlos-a-todos/"
date: "2019-02-17"
title: "Un linter para gobernarlos a todos"
subtitle: "Paremos la divergencia"
tags: ["javascript"]
excerpt: "Un Linter para gobernarlos a todos. Un Linter para encontrarlos,
un Linter para atraerlos a todos y atarlos en las tinieblas."
featured_image: "./images/lord-of-rings.jpg"
---

Año 2019 empiezas un proyecto de javascript, te bajas un boilerplate desactualizado, te actualizas tus paquetes y lo primero que ves es que no tienes el linter ni el formateador como tú quieres.

Solución fácil, vas a tu anterior proyecto miras que paquetes tienes instalados de linter te lo instalas copias el archivo de eslint y prettier y a funcionar.

Solución que propongo acabar con la divergencia, tener un paquete en el que tienes centralizado prettier, eslint y tu formateador de código css en mi caso stylelint.

### Front-linter

[Front-linter](https://github.com/gabrielseco/front-linter) un paquete que te lintea ficheros de javascript o typescript con eslint y prettier, usa la misma configuración de reglas tanto cómo para uno y como para otro.

Además tiene configurado opciones de stylelint para el sass.

El paquete es un fork de [sui-lint](https://github.com/SUI-Components/sui/tree/master/packages/sui-lint) de los chicos de [Schibsted Spain](https://www.schibsted.es/).

### Configuración

Con esta configuración se acabó de tener paquetes instalados en cada proyecto, sólo tenemos que extender la configuración y si no te gusta las configuraciones de ninguno de los 2 repos siempre puedes hacer un fork y tener uno propio tuyo.

```json
{
  "name": "test-project",
  "version": "1.0.0",
  "scripts": {
    "lint:js": "front-linter js",
    "lint:sass": "front-linter sass"
  },
  "devDependencies": {
    "@rogal/front-linter": "1.0.0"
  },
  "eslintConfig": { "extends": ["./node_modules/@rogal/front-linter/eslintrc.js"] },
  "stylelint": {
    "extends": ["./node_modules/@rogal/front-linter/.stylelintrc.json"]
  }
}
```
