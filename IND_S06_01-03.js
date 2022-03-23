const resultado = [];
const resultado2 = [];
var resultado3 = [];
var array = [];

function impares(num1, num2) {
for (let i = num1; i <= num2; i++) {
  if (i % 2) {
    resultado.push(i); 
  }
}
console.log(resultado)
}


function tabla(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

function tabla2(numero) {
    for (let i = 1; i <= 10; i++) {
        resultado2.push(`${numero} x ${i} = ${numero * i}`);
    }
    console.log(resultado2);
}

function tabla3(numero) {
    for (let i = 1; i <= 10; i++) {
        resultado3 = resultado3 + ` ${numero} x ${i} = ${numero * i} `;       
    }
    console.log(resultado3);
}


function ordenar(array) {
    const ordenado = array.slice().sort((a,b)=>a-b);
    console.log(ordenado);
}
