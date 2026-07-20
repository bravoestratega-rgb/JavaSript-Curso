const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}
const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o o la negación de un booleano');
console.log(true);
console.log(!true);
console.log(!false);

console.log( !regresaFalse() );

console.warn('And'); // true si todos los valores son true
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('=====================');
console.log(regresaFalse() && regresaTrue());
console.log('=====================');
console.log(regresaTrue() && regresaFalse());

console.warn('Or'); // true si alguno de los valores es true
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('=====================');
console.log(regresaFalse() || regresaTrue());
console.log('=====================');
console.log(regresaTrue() || regresaFalse());

console.warn('Asignaciones'); // true si alguno de los valores es true
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150
const a2 = 'Hola' && 'Mundo' && soyFalso && true; 
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;
console.log({ a1 });
console.log({ a2 });
console.log({ a3 }); 
console.log({ a4 });
console.log({ a5 });

if( true || true || true || false ) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}
