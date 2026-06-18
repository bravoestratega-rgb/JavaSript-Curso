// Una forma poco conocida de hacer arreglos pero se puede //

const arr = new Array(10); 
console.log(arr);


// Como se hace arreglos ahora: 

const arreglo = [];
console.log(arreglo)

// La clave son los []

let videojuegos = [ 'Mario 3', 'Megaman', 'Chrono Trigger'];
console.log(videojuegos);

console.log(videojuegos[0]);

// Los arreglos pueden contener todo tipo de cosas, hasta funciones, y otros arreglos, y ese segundo arreglo otro arreglo
// Para llamar a la consola hay que poner el numero de la posición, no te olvides que cuenta desde cero
// Si tienes que ver la posición de otro arreglo dentro de un arreglo de vuelve a poner [] delante del otro []: [3][1]

let arregloCosas = [
    true,
    123,
    'fernando',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1 },
    [ 'x', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr.Willy',
        'Woodman'
    ]]
];

// console.log( arregloCosas );

 console.log( arregloCosas[7][4][1]);

