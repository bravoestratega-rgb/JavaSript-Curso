let a = 5;


if ( a >= 10){
    console.log('A es mayor o igual a 10');

} else {

    console.log('A es menor a 10');
}

console.log('Fin de programa');



const hoy = new Date();
let dia = hoy.getDay();




console.log( dia );

if( dia === 0 ) {
    console.log('Domingo');
} else {
    if ( dia === 1 ) {
        console.log('Lunes');
    } else {
       console.log('No es lunes ni domingo');
    }
}


let today = 6

let diaHoy = {
   0: 'domingo',
   1: 'lunes',
   2: 'martes',
   3: 'miercoles',
   4: 'jueves',
   5: 'viernes',
   6: 'sabado',
};

console.log( diaHoy[today] || 'Día no definido');


let diaSemana = new Date().getDay();

console.log({ diaSemana });