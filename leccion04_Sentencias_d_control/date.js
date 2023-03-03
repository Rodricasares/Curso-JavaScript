let mes = 12;
let estacion;

if ( mes == 1 || mes == 2 || mes ==12) {

  estacion = "Invierno";

}
else if (mes == 3 || mes == 4 || mes == 5) {
  estacion = "Primavera";

}
else if(mes == 6 || mes == 7 || mes == 8) {
  estacion = "Verano";

}
else if(mes == 6 || mes == 7 || mes == 8) {
  estacion = "Otoño";

} else{
  estacion = "Estación incorrecta, los años se componen de 12 meses";
}

console.log(estacion);

