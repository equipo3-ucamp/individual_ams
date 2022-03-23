
let repetir = 1;

/* Convertimos el mensaje en mayusculas y lo 
   comparamos contra el mensaje original, si son iguales
   quiere decir que el mensaje original está todo en mayusculas.

   .toUpperCase convierte el texto en mayúsculas
   .localeCompare regresa 0 si las cadenas de texto son iguales */

function abuelita(param) {
    let mayusculas = param.toUpperCase();
    let igualdad = param.localeCompare(mayusculas);
    switch (igualdad) {
        case 0:
            /* el mensaje está en mayúsculas */
            return 'NO, NO DESDE 1983';
            break;
    
        default:
            return '¡¿EH?! ¡NO TE ESCUCHO, HIJO!';
            break;
    }
}

while (repetir <= 3) {
    let mensaje = prompt('Dile algo a tu abuelita');
    let respuesta = abuelita(mensaje);
    console.log(respuesta);

    if (mensaje == 'ADIÓS TQM') {
        repetir = repetir + 1
    } else {
        repetir = 1
    }

}
