console.warn('Ciclo while');
const carros = [ 'Ford', 'Chevrolet', 'Fiat', 'Honda', 'Toyota' ];


let i = 0
while( i < carros.length ) {
    console.log( carros[i] );
    i++; // i = i + 1
}


console.warn('Ciclo while con continue');

i = 0

while( carros[i] ) {
    if ( i === 1 ) {
        i++;
        continue; // Salta a la siguiente iteración del ciclo
    }
    console.log( carros[i] );
    i++;
}

console.warn('Ciclo do while');

let j = 0
do {
 console.log( carros[j] );
  j++; // j = j + 1

} while(carros[j] );
