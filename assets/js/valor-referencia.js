// estamos pasando por valor, todos los primitivos pasan valor

let a = 10;
let b = a;
a = 30; 

console.log({ a, b });

// estamos pasando por referencia, todos los objetos pasan por referencia

let juan = { nombre: 'Juan'};
let ana  = { ...juan}; 
ana.nombre = 'Ana';
console.log( juan, ana )

//

const cambiaNombre = ( {...persona} ) => {
    persona.nombre = 'Tony';
    return persona
}

let peter = { nombre: 'Peter'};
let tony = cambiaNombre( peter );

console.log({peter, tony})

// resolver con arreglos


const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas});

