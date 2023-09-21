// condicional con operador terciario

/* let salario = 10000;

//decision tradiciona
/* if (salario > 0) {
  console.log("tiene saldo en la cuenta");
} else {
  console.log("NO tiene saldo en la cuenta");
} 

salario > 0 ? console.log("tiene saldo en la cuenta") : console.log("NO tiene saldo en la cuenta");
 */

//recorriendo arreglos

let numeros = [1, 3, 5];
//devuelve los valores
/* let otro = numeros.forEach((numero) => {
  //console.log(numero * 2);
  return numero * 4;
}); */

//operador map  : devuelve otro arreglo con la posiciones originales
// usar este bucle en REACT ME PERMITE OBTENER INDEX
let nuevoArreglo = numeros.map((numero) => {
  // return console.log(numero * 2);
  return numero * 4;
});

console.log(numeros);

console.log(nuevoArreglo);
