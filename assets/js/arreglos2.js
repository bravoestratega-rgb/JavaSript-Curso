// para ver la cantidad de variable, cuenta el cero.

let juegos = ['zelda', 'mario', 'metroid', 'Chrono']
console.log('largo', juegos.length);

juegos.forEach( (elemento, indice, arreglo) => {
    console.log({elemento, indice, arreglo})
});

// Agregar un elemento al final del arreglo
// Usamos una variable para guardar la nueva longitud del arreglo, 
// pero no es necesario, se puede hacer sin esa variable
// solo lo hicimos para visualizar los cambios

let nuevaLongitud = juegos.push( 'F-Zero');

console.log({nuevaLongitud, juegos});

// Agregar un elemento al inicio del arreglo
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});

// Eliminar el ultimo elemento del arreglo
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

// Eliminar un elemento por su posición
// Al escribir 1, se borra el segundo elemento, 
// porque el conteo empieza en cero
// en el .splice pusimos 2 porque queremos eliminar dos elementos,
//  el que esta en la posición 1 y el que esta en la posición 2, 
// si solo queremos eliminar el de la posición 1, 
// entonces ponemos un 1

let posicion = 1;
let juegoBorrado2 = juegos.splice(posicion, 2);
console.log({juegoBorrado2, juegos});

//Esto es case sensitive, si escribes 'metroid' con m minuscula funciona
// en este caso es M mayuscula, no encuentra el elemento y devuelve -1
let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});

// Este si esta bien, esta con m minuscula

let sonicIndex = juegos.indexOf('metroid');
console.log({sonicIndex});