// para ver la cantidad de variable, cuenta el cero.

let juegos = ['zelda', 'mario', 'metroid', 'Chrono']
console.log('largo', juegos.length);

juegos.forEach( (elemento, indice, arreglo) => {
    console.log({elemento, indice, arreglo})
});

juegos.push( 'F-Zero');
