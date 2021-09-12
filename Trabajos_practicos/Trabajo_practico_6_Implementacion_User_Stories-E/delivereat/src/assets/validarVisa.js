var numTarjeta
var cvc
var mesVencimiento
var añoVencimiento
var titular

function separarValores(tarjeta) {
    numTarjeta = tarjeta.numTarjeta;
    cvc = tarjeta.cvc;
    mesVencimiento = tarjeta.mesVencimiento;
    diaVencimiento = tarjeta.diaVencimiento;
    titular = tarjeta.titular;
}

function validarNumero(numero) {
    
}

function validarCvc(codigo) {
    return 0
}

function validarVto(mes, año) {
    return 0
}

function validarTitular(nombre) {
    return 0
}

function validarTarjeta(tarjeta) {
    separarValores(tarjeta);
    if (validarNumero(numTarjeta) == -1) {
        return -1
    }
    else if (validarNumero(numTarjeta) == -2){
        return -2
    }
    
    else if (validarCvc(cvc) == -1){
        return -2
    }

    else if (validarVto(mesVencimiento, añoVencimiento) == -1){
        return -2
    }

    else if (validarTitular(titular) == -1){
        return -2
    }

    else {
        return 0
    }
}