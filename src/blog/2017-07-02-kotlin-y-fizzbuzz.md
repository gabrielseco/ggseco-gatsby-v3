---
path: "/kotlin-y-fizzbuzz/"
date: "2017-07-02"
title: "Kotlin y FizzBuzz"
tags: ['Kotlin']
excerpt: "Kotlin, es un lenguaje de programación creado por JetBrains que corre en la JVM (Java Virtual Machine) que se ha puesto de moda, Google le ha dado soporte oficial para Android y el framework web por excelencia de Java Spring también le da soporte"
subtitle: "Un caso practico"
featured_image: "./images/kotlin.jpg"
---

**[Kotlin](https://kotlinlang.org/)**, es un lenguaje de programación creado por **JetBrains** que corre en la **JVM** (Java Virtual Machine) que se ha puesto de moda, **Google** le ha dado soporte oficial para Android y el framework web por excelencia de Java **Spring** también le da soporte. 

En esta entrada no me quiero meter en que se diferencia **Kotlin** de otros lenguajes sólo quiero plantear un caso práctico como es la kata de **FizzBuzz** y como lo he resuelto de 3 maneras diferentes. 

La kata de FizzBuzz se basa en lo siguiente. 

Si el número es divisible entre 3 el ordenador dirá **"Fizz"** 

Si el número es divisible entre 5 el ordenador dirá **"Buzz"** 

Si el número es divisible entre 3 y 5 el ordenador dirá **"FizzBuzz"** 

Sino el ordenador sacará el número por pantalla. 

La primera forma de hacerlo es la más imperativa de todos, tienes un for que empieza desde 1 hasta al 100. 

Luegas usas unos ifs que se cumplan las condiciones y las imprimes por pantalla.

```kotlin
  for (i in 1..100) {
   if (i % 15 == 0) {
     print("FizzBuzz \n")
   } else if (i % 3 == 0) {
     print("Fizz \n")
   } else if (i % 5 == 0) {
     print("Buzz\n")
   } else {
     print("$i \n")
   }
 }
```

La segunda manera de hacerlo puede ser la siguiente. 

Seguimos usando un for el cual por cada iteración llamada una función. 

Dentro de esa función llamamos a la estructura when que digamos para simplificar que funciona como un switch en cualquier otro lenguaje. 

Hacemos que se evalué siempre para que entre en la estructura de control y si se dan las condiciones irá imprimiendo los datos por pantalla.

```kotlin
for (i in 1..100) {
  printFizzBuzz(i)
}

fun printFizzBuzz(item: Int) {
  when (true) {
    item % 15 == 0 -> print("FizzBuzz \n")
    item % 3 == 0 -> print("Fizz \n")
    item % 5 == 0 -> print("Buzz \n")
    else -> print("$item\n")
  }
}
```

La tercera y última manera por la cuál podemos mejorar nuestro código es la siguiente. 

Está la podría denominar la más próxima a la programación funcional. 

Utilizas un rango del 1 al 100 y utilizas un .map que va ir iterando el rango.

La función .map usa una lambda y sin declarar variable se le puede pasar el número a la función que se usaba en el ejemplo 2. 

```kotlin
 val range = 1..100
 range.map { printFizzBuzz(it) }

 fun printFizzBuzz(item: Int) {
  when (true) {
    item % 15 == 0 -> print("FizzBuzz \n")
    item % 3 == 0 -> print("Fizz \n")
    item % 5 == 0 -> print("Buzz \n")
    else -> print("$item\n")
  }
}
```

Si queréis probar el código, lo tienes muy fácil copias un trozo de código y lo pruebas en el siguiente enlace 

[https://try.kotlinlang.org/](https://try.kotlinlang.org/) 

Ahí encontrarás un playground con una función main que es la que ejecuta tu código.

### Fun Facts

*   Las funciones en Kotlin empiezan por fun "Because functions are fun"
*   [Link interesante sobre FizzBuzz y las entrevistas de programación](https://blog.codinghorror.com/why-cant-programmers-program/)
*   [Y en el siguiente enlace puedes leer más acerca del lenguaje](https://www.genbetadev.com/desarrollo-aplicaciones-moviles/kotlin-la-maquina-virtual-de-java-tiene-un-nuevo-aliado)