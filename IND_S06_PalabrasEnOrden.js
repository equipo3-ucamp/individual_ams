var array = [];
var temp;
var len;

/* El for interno va recorriendo el arreglo comparando el elemento 1 con el 2, luego el 2 con el 3, etc. 
   esto lo hace tantas veces como lo indique la variable len. En esa comparación si el primer elemento comparado es 
   "mayor" que el segundo elemento comparado entonces los intercambia de lugar, de otra manera no hace nada.

   Con el for externo hace que se repita la operación tantas veces como elementos en el array -1 existan y en cada 
   ciclo disminuye el valor de len porque al finalizar cada ciclo del for interno en el último lugar queda el valor 
   más grande del array por lo que no es necesario realizar el ciclo una vez mas.

*/

function palabraEnOrden(array) {
    len = array.length - 1;

    for (let j = 0; j < array.length - 1; j++) {
        
        for (let i = 0; i < len; i++) {
            if (array[i] > array[i + 1]) {
                temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
        len = len -1;
    }
    console.log(array)    
}

