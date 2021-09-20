var numTarjeta
var cvc
var mesVencimiento
var añoVencimiento
var titular
var tarjVal = [{ numTarjeta: '4555555555555555', cvc: '123', mesVencimiento: '06', añoVencimiento: '24', titular: 'Juan Perez' }, 
{numTarjeta: '4564564564564567', cvc: '122', mesVencimiento: '07', añoVencimiento: '22', titular: 'Ricardo Lopez'},
{numTarjeta: '4000100110011001', cvc: '252', mesVencimiento: '10', añoVencimiento: '25', titular: 'Juana Suarez'}]

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
  for (var i = 0; i < tarjVal.length; i++) {
    if (numero === tarjVal[i].numTarjeta) {
      return -2
    }
  }

}

function validarCvc (codigo) {
  for (var i = 0; i < tarjVal.length; i++) {
    if (codigo === tarjVal[i].cvc) {
      return true
    }
  }
  return false
}

function validarVto (mes, año) {
  for (var i = 0; i < tarjVal.length; i++) {
    if (mes === tarjVal[i].mesVencimiento && año === tarjVal[i].añoVencimiento) {
      return true
    }
  }
  return false
}

function validarTitular (nombre) {
  for (var i = 0; i < tarjVal.length; i++) {
    if (nombre === tarjVal[i].titular) {
      return true
    }
  }
  return false
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
