const elMayor = (a, b) => (a > b) ? a : b;
const tieneMembresia = (miembro) => (miembro) ? '2 dólares' : '10 dólares';

console.log(elMayor(20, 15)); // Output : 20 
console.log(tieneMembresia(false)); // Output : 10 dólares

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    (amigo) ? 'Thor' : 'Loki'
];

console.log(amigosArr);

const nota = 100; // A+ A
const grado = (nota >= 95) ? 'A+' :
              (nota >= 90) ? 'A' :
              (nota >= 85) ? 'B+' :
              (nota >= 80) ? 'B' :
              (nota >= 75) ? 'C+' :
              (nota >= 70) ? 'C' : 'F';

console.log({ nota, grado });