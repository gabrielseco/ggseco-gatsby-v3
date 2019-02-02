---
path: "/copias-de-seguridad-con-sailsjs/"
date: "2016-01-06"
title: "Copias de seguridad con SailsJS"
tags: ["Javascript"]
excerpt: "Últimamente estoy haciendo varias apps usando ReactJS con el framework SailsJS. SailsJS ofrece una api desde el minuto 1 donde se pueden hacer altas, bajas, modificaciones y búsquedas. Además tiene distintos adaptadores para conectar con distintas bases de datos. El problema que tenía es que quería guardar mis datos, por si en el futuro."
subtitle: ""
featured_image: "./images/man-with-tablet.jpg"
---

Últimamente estoy haciendo varias apps usando **<a href="https://facebook.github.io/react/" target="_blank">ReactJS</a>** con el framework **<a href="http://sailsjs.org/" target="_blank">SailsJS</a>**.

ofrece una api desde el minuto 1 donde se pueden hacer altas, bajas, modificaciones y búsquedas. Además tiene distintos adaptadores para conectar con distintas bases de datos. 

El problema que tenía es que quería guardar mis datos, por si en el futuro hubiese algún problema. Buscando en google, descubrí que se puede añadir funcionalidad en el archivo config/bootstrap.js antes de que se inicie el servidor con **sails lift**. 

```js
  module.exports.bootstrap = function(cb) {
    var sys = require(‘sys’);
    var exec = require(‘child_process’).exec;
    var child;
    var date = new Date();
    var fecha = date.getFullYear() + “-” + date.getMonth() + 1 + “-” + date.getDate();
    var file = “../sql-backup/learnseries”+ fecha + “.sql”;
    child = exec(“mysqldump -u root -p learnseries > ” + file, function (error, stdout, stderr){
      if (error !== null) {
         console.log(‘exec error: ‘ + error);
      }
    })

    cb();
  }
```

Se ejecuta el comando mysqldump con permisos de administrador y se guarda un fichero mysql con la fecha en la que se ejecuta. 

Documentación: <a href="http://sailsjs.org/documentation/anatomy/my-app/config/bootstrap-js" target="_blank">SailsJS Bootstrap file</a>