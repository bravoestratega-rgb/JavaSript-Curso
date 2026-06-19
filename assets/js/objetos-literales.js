let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
}

console.log( personaje );
console.log( personaje.nombre );
console.log( personaje['nombre'] );
console.log( personaje.edad );
console.log( personaje.coords );
console.log( personaje.coords.lat );
console.log( personaje.trajes.length );
console.log( personaje.trajes[personaje.trajes.length - 1] );

const x = 'vivo';
console.log( 'vivo', personaje[x] );

console.log( personaje[ x ] );