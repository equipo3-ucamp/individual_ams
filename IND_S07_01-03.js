
function eliminarIndice(array, indice) {    
    if (indice < array.length && indice > -1) {
        array.splice(indice, 1)
    } else {
        console.log("Indice fuera de rango");
    }    
    console.log(array);
}


function busquedaArray(array, item) {
    if (array.indexOf(item) > -1) {
        console.log("Se encontró el elemento");
    } else {
        console.log("No se encontró el elemento");
    }   
}


