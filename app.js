// Aquí en las primeras líneas de código definimos una nueva variable llamada titulo y de ahí el valor ya no es texto, si no un objeto
// También con el document.querySelector definimos en el index.html  <h1> y con el inner.HTML a esa llamada le podemos definir un título

// primera línea de código //let titulo = document.querySelector("h1");
// segunda línea de código //titulo.innerHTML = "Juego del número secreto";
// {TODO ESTO SE MOVIÓ A UNA NUEVA FUNCIÓN PARA SIMPLIFICAR NUESTRO CÓDIGO}

// querySelector = selecciona el elemento "tal"
// Podemos utilizar nuevamente la etiquta "p" que está en index.html (<p class="texto__parrafo"></p>)
// Y también podemos mostrar por la "clase" que es algo de "css", pero primero lo replicaré repitiendo el <"h1"> que está arriba en el código
// Eso nada más es para reforzar el conocimiento, pero más adelante haré el nuevo ejemplo...
// En let parrafo = {Yo le pido al document has el querySelector (selecciona el elemento p)} Y luego le digo al parrafo inner.html que me muestre el msj.

// Tercera línea de código let parrafo = document.querySelector("p");
// Cuarta línea de código  parrafo.innerHTML = "Indica un número del 1 al 10";
// Listo, ahora ya está puesta la indicación en la página del nuevo juego de número secreto.
//*

// Ahora en el index.html en la línea (26) se hizo "un evento click" en el que hacemos una función intento de usuario
// También aquí declaramos una función de la manera tradicional "function" y después tomamos el intentoDeUsuario de la línea (26)
// Y se le coloca el parentesis () y el cuerpo de la función {}
//***
//* 
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//console.log(numeroSecreto); Esto puesto al inicio es para saber cuál es el número secreto (como hacer trampa);

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
        return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // Éstos console.log(); solo son para verificar los datos obtenidos en la consola de nuestra página, son de pruebas y opcionales
//    console.log(typeof(numeroDeUsuario));
//    console.log(numeroSecreto);
//    console.log(typeof(numeroSecreto));
//    console.log(numeroDeUsuario);
//    console.log(numeroDeUsuario === numeroSecreto);
//    console.log(numeroSecreto); Éste último fue para hacer pruebas en la primera condicón
//    console.log(intentos); Es solo para que en la consola nos muestra la cantidad de intentos que vayamos haciendo
    if (numeroDeUsuario === numeroSecreto) {
        // Aquí en la función, también podemos utilizar las "template strings" para condicionar si el usuario acertó en 1 vez o más veces.
        // Recordando que para poner las condiciones de "vez" y "veces" tenemos que hacer uso del operador ternario ?, : .
        // Todo eso combando las 2 en un solo parámetro
        asignarTextoElemento ('p', `Acertaste el número ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        // El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento ('p', 'El número secreto es menor');
    } else {
        asignarTextoElemento ('p', 'El número secreto es mayor');
    }
    intentos ++;
    limpiarCaja();
}
return;
}

function limpiarCaja() {
    // la variable let valoCaja = document.querySelector ('#ValorUsuario'); y valorCaja.value = ' '; no son siempre necesarios
    // Ya que podemos hacer la evaluacion directamente eliminando la variable que puse en el anterior ejemplo 
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() {
    // Si el número generado está incluído en la lista
    let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1;
    // 
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
       asignarTextoElemento ('p', 'Ya se sortearon todos los números posibles');
    } else {
    // 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }

}
//Aquí se hace una funcion que manda a llamar los mensajes iniciales que son el <h1> y <p>

function condicionesIniciales() {
    asignarTextoElemento ('h1',"Juego del número secreto");
    asignarTextoElemento ('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Necesitamos limpiar la caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    // Generar el número aleatorio
    // Inicializar el número de intentos
    condicionesIniciales(); 
    // Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

//Los mensajes asignarTextoElemento fueron movidos a una nueva funcion llamada mensajesIniciales
// Para llamar a la función es utilizar el nombre de la función y los parentésis
// Se puede hacer dentro de JS como en HTML dentro de la sección elementos
// En el código de JS lo puedes hacer en el punto donde estes fuera bloque de las llaves
// O incluso podemos llamar ése texto o una función desde otra función 
