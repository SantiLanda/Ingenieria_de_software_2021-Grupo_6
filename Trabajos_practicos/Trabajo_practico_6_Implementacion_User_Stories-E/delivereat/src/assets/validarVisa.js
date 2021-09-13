var numTarjeta
var cvc
var mesVencimiento
var añoVencimiento
var titular
var tarjVal = [{ numTarjeta: '4555555555555555', cvc: '123', mesVencimiento: '06', añoVencimiento: '24', titular: 'Juan Perez' }]

function separarValores (tarjeta) {
  numTarjeta = tarjeta.numTarjeta
  cvc = tarjeta.cvc
  mesVencimiento = tarjeta.mesVencimiento
  añoVencimiento = tarjeta.añoVencimiento
  titular = tarjeta.titular
}

function validarNumero (numero) {
  if (numero.length < 13) {
    return -1
  }
  if (numero[0] !== '4') {
    return -1
  }
}

function validarCvc (codigo) {
  for (var i = 0; i < tarjVal.length; i++) {
    if (codigo === tarjVal[i].cvc) {
      return true
    }
  }
}

function validarVto (mes, año) {
  añoVencimiento = año
  mesVencimiento = mes
  return 0
}

function validarTitular (nombre) {
  titular = nombre
  return 0
}

function validarTarjeta (tarjeta) {
  separarValores(tarjeta)
  if (validarNumero(numTarjeta) === -1) {
    return -1
  } else if (validarNumero(numTarjeta) === -2 && validarCvc(cvc) && validarVto(mesVencimiento, añoVencimiento) && validarTitular(titular)) {
    return 0
  } else {
    return -2
  }
}

export { validarTarjeta }
