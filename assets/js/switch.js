const dia = 2; // 0: domingo, 1: lunes, 2: martes, 3: miercoles, 4: jueves, 5: viernes, 6: sabado

switch ( dia ) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        break; 
    default:
        console.log('No es Domingo, lunes, martes ni miercoles');
        break;
}