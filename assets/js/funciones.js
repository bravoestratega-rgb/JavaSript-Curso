
// así se realiza una función
//pero tiene problemas con var

function saludar() {
    console.log('Hola Mundo');
}

// esta es otra opción 
// se le llama función anonima
// porque no se usa saludar2 al lado de la 'function'

const saludar2 = function () {
    console.log('Hola Mundo');
}

//si necesito imrpimir una variable
// se usa argumentos

function saludar3( nombre ) {
    console.log('Hola ' + nombre );
}

// Aqui igual usamos argumentos 
// pero con el segundo método

const saludar4 = function( nombre ) {
    console.log('Hola ' + nombre );
}

// funciones de flecha
// landa functions

const saludar5 = () => {
    console.log('Hola Flecha');
}

// argumentos en flecha

const saludar6 = ( nombre ) => {
    console.log('Hola ' + nombre);
}



saludar();
saludar2();
saludar3( 'Mauricio' );
saludar4( 'Christian');
saludar5();
saludar6( 'Fernandez' );