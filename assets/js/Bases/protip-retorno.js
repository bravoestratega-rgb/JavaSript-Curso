// nos ha enseñado que si la clave es igual al valor nombre: nombre se puede poner solo nombre,
// ya no necesitamos en el codigo de abajo escribir nombre: nombre, apellido: apellido

function crearPersona( nombre, apellido ) {
    return {
        nombre,
        apellido,
    }
}

const persona = crearPersona( 'Fernando', 'Herrera');
console.log( persona );

// ahora con función de flecha para el retorno usamos (), si solo usaramos llaves sería el cuerpo de la función con los parentesis son el return


const crearPersona2 = ( nombre, apellido) => ({ nombre, apellido });

const persona2 = crearPersona2( 'Mauricio', 'Fernandez');
console.log( persona2 );

function imprimeArgumentos() {
    console.log( arguments );
}

imprimeArgumentos( 10, true, false, 'Mauricio', 'Hola');

const imprimeArgumentos2 = ( ...args ) => { 
    console.log( args );
}

imprimeArgumentos2( 10, true, false, 'Mauricio', 'Hola');