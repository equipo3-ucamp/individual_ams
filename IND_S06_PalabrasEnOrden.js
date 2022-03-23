var array = [];
var temp;
var len;

/* palabraEnOrden(['naranja', 'manzana', 'uva', 'banana'])
Array(4) [ "banana", "manzana", "naranja", "uva" ]
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


