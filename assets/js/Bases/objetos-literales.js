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

console.log(personaje['ultima-pelicula'])

// más detalles
// Eliminar la propiedad edad, ¿Cómo lo hacemos?

delete personaje.edad;

console.log( personaje );

personaje.casado = true; // Así agregamos una propiedad a "personaje" para que lo procese el entries

// Como trabajos el objeto pero como si fuera un arreglo

const entriesPares = Object.entries ( personaje );

console.log( entriesPares );

// Si en cambio queremos que no se pueda cambiar 
// las propiedades del objeto personajes
// no nos funcionara cambiar de let a const
// porque no podemos cambiar el objeto personajes
// a otras cosas pero si podemos manipular sus
// caracteristicas
// para bloquear hasta las caracteristicas necesitamos de:

Object.freeze( personaje );

personaje.dinero = 10000000; // no se agrega al objeto
personaje.casado = false; // no cambia la propiedad
personaje.direccion.ubicacion = 'Costa Rica'; // si va a cambiar el codigo porque el Object.freeze no congela los objetos del del objeto personaje

console.log( personaje );

// Si necesito un listado de todas las propiedades de un objeto. Y luego sus valores.

const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log( {propiedades, valores} );

// IA que son los metodos, como se diferencian de los objetos y los primitivos?
