function eliminarIndice(array, indice) {
    (indice < array.length && indice > -1) ? array.splice(indice, 1) : console.log("Indice fuera de rango");
    console.log(array);
}



function busquedaArray(array, item) {
    return (array.indexOf(item) > -1) ? console.log("Se encontró el elemento") : console.log("No se encontró el elemento");
}



let infoLibros = [
    { titulo: "El Quijote", autor: "Miguel C."},
    { titulo: "Señor de las moscas", autor: "William G."},
    { titulo: "La tregua", autor: "Mario B."},
    ];

function busquedaObjeto(array, item) {
    let encontrado = false;
    for (let key in array) {
        if ((array[key]["titulo"] == item) || (array[key]["autor"] == item)) {
            encontrado = true;
        }
    }
    encontrado ? console.log("Se encontró el elemento") : console.log("No se encontró el elemento");
}
