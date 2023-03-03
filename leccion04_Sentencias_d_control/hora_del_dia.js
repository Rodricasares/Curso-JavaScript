/*
6am-11am - Buenos días
12pm-18pm - Buenas tardes
19pm-24pm - Buenas noches
0am-5am - Durmiendo
*/



let hour = 6 ;
let time;

if(hour >= 6 && hour <= 11 ){
    time = "Buenos días"
}else if (hour >= 12 && hour <= 18){
    time = "Buenas tardes"
}else if (hour >= 19 && hour <= 24){
    time = "Buenas noches"
}else if (hour >= 0 && hour < 6){
    time = "Durmiendo"
}else{
    time = "Hora incorrecta";

}

console.log(time)