//Repetir bloques de codigo(bucles)

//ciclo for
//imprimiendo los numeros del 1 al 10
/**
 * primer elemento = indica el inicio
 * segundo elemento = condicion(hasta donde voy a terminar)
 * tercer elemento = incremento/decremento
 */
console.log("------------uso del for-------")
for(let i = 0; i <= 10; i++){
    console.log(i);
}


console.log("------------uso del while-----")
//ciclo while
//imprimiendo los numeros del 1 al 10
let j = 0;
while(j <= 10){ //una condicion
    console.log(j);
    j++;   
}

console.log("---------uso del while-----")
//ciclo do while -> la primera iteracion siempre pasa (verdadera)
let k = 11;
do{
    console.log(k);
    k++;
}while(k <=10)

//funciones/metodos
function utilizarDoWhile(){
  //ciclo do while -> la primera iteracion siempre pasa (verdadera)
let k = 11;
do{
    console.log(k);
    k++;
}while(k <=10)  
}
utilizarDoWhile()




