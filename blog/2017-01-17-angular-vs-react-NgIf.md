---
path: "/angular-vs-react-ngif-vs-operador-ternario/"
date: "2017-01-17"
title: "Angular vs React: ngIf vs Operador ternario"
tags: ['The Battle of Frameworks']
excerpt: "En la entrada de hoy vamos aprender como funciona la representación de elementos del DOM dependiendo de la lógica de nuestros componentes tanto como en Angular como en React. El ejemplo que llevaremos a cabo contiene  un reloj el cuál cuando llegue a las 3:14 el texto que se mostrará en pantalla cambiará a “Hora PI”, por"
subtitle: ""
featured_image: "./images/angular_vs_react.png"
---

En la entrada de hoy vamos aprender como funciona la representación de elementos del DOM dependiendo de la lógica de nuestros componentes tanto como en **Angular** como en **React**. 

El ejemplo que llevaremos a cabo contiene  un reloj el cuál cuando llegue a las **3:14** el texto que se mostrará en pantalla cambiará a "Hora PI", por supuesto la hora es relativa y se puede cambiar para ver que funciona correctamente el ejemplo. 

**Angular 2.0** en su nueva versión, nos proporciona la directiva en **\*ngIf** la cual evalúa una expresión dada, si es la expresión dada es correcta nos renderizará nuestro elemento en el DOM y si no lo es lo descartará. 

Se puede ver la demo en el siguiente <a href="https://embed.plnkr.co/lCAFUIK84ttUkSqnrOvH/" target="_blank">plunker</a>

```typescript
import {Component, NgModule} from "@angular/core";

@Component({
 selector:'app',
 template: `
  <h1 *ngIf="difference"> Hora PI </h1>
  <h1 *ngIf="!difference">Todavía no es la hora del ingeniero</h1>
  <div>
    <p>{{actualTime}}</p>
    <p>{{time}}</p>
  </div>
`
})

export class AppComponent {
 
 time: Date = new Date()
 actualTime: Date = new Date()
 difference: boolean
 
 constructor(){
  this.time.setHours(3);
  this.time.setMinutes(14);
  this.time.setSeconds(0);
 }

 ngAfterContentInit(){
  this.interval = setInterval(() => {
    this.actualTime = new Date();
    this.difference = Math.abs(this.time.getTime() - this.actualTime.getTime()) < 1000 ? true : false; 
  },1000)
 }

 ngOnDestroy(){
  clearInterval(this.interval)
 }
}
```

Este trozo de código lo que hace el componente al inicializarse  es asignar la hora objetivo en el constructor, después de que se inicializa, se lanza el evento **ngAfterContentInit** el cual contiene un intervalo que se ejecuta cada segundo, finalmente en la template se realiza la comprobación con **\*ngIf** 

Si tuviésemos que realizar el siguiente ejemplo en **React** nos tendríamos que olvidar de la estructura if, pero podemos usar el operador ternario, el cuál funciona perfectamente como if /else 

El ejemplo en **React** se puede ver en el siguiente <a href="http://codepen.io/GGarciaSeco/pen/ggwPpp" target="_blank">codepen</a>

```js
class App extends React.Component {
 constructor(props) {
  super(props);
  const actualTime = new Date();
  let time = new Date();
  time.setHours(3);
  time.setMinutes(14);
  time.setSeconds(0);

  this.state = {
    actualTime,
    time
  };
  this.interval = null;
 }

 componentDidMount() {
   //set a new date every second
   this.interval = setInterval(() => {
     this.setState({
      actualTime: new Date()
     });
   }, 1000);
 }

 componentWillUnmount() {
   clearInterval(this.interval)
 }

 render() {
  const { state } = this;
   const difference = Math.abs(state.time.getTime() - state.actualTime.getTime()) < 1000 ? true : false;

   return (
    <div>
     {difference ? <h3>Hora PI</h3> : <h3>Todavía no es la hora de ingeniero</h3>}
     <p>{state.actualTime.toString()}</p>
     <p>{state.time.toString()}</p>
    </div>
   )
 }
}
```

Este trozo de código lo que hace el componente al inicializarse  es asignar la hora objetivo en el constructor, además de pasar las dos horas al estado del componente después de que se monta el componente, se lanza el evento **componentDidMount** el cual contiene un intervalo que se ejecuta cada segundo actualizando el estado de actualTime y por último en la función render hay un operador ternario que en base a la variable difference hace que se muestre un contenido u otro. 

**Nota:** Este artículo será modificado si Angular 4.0 saque las mejoras respecto al **ngIf**