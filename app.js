let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento (){
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

  if (numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p', `Asertaste el número en ${intentos} ${(intentos === 1) ? 'vez' :  'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.querySelector('#jugar').setAttribute('disabled', 'true');
  }else{
    if (numeroDeUsuario > numeroSecreto){
      asignarTextoElemento('p', 'El numero secreto es menor');
    }else{
      asignarTextoElemento('p', 'El numero secreto es mayor');
    }
    intentos++;
    limpiarCaja();
  }
}

function limpiarCaja (){
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
  let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
  console.log(numeroGenerado);
  // Si ya sorteamos todos los numeros 
  if (listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
  }else{
    // Si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){
      return generarNumeroSecreto();
    }else{
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del numero secreto');
  asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);  
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  // Limpiar caja
  limpiarCaja();
  // indicar mensaje de intervalos de numeros
  condicionesIniciales();
  // Generar el numero aleatorio
  // Inicializar el numeo de intentos
  // Deshabilitar el boton de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled', 'true');
  // Habilitar el boton de Intentar
  document.getElementById('jugar').removeAttribute('disabled');
}

condicionesIniciales();
