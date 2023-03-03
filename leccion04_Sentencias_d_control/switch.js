let mes = 6;
let estacion = "Estación desconocida, ERROR";


switch (mes){
    case 1: case 2: case 12: 
    estacion='Invierno';
    break;


    case 3: case 4: case 5: 
    estacion='pRIMAVERA';
    break;


    case 6: case 7: case 8: 
    estacion='vERANO';
    break;


    case 9: case 10: case 11: 
    estacion='oTOÑO';
    break;
    default:
        estacion = 'valor incorrecto'
}

console.log(estacion)
