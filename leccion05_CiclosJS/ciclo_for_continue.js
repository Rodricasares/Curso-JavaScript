for (let contador = 0; contador <= 10; contador++ ){
    
    if(contador % 2 !== 0){  //El numero es par?
        console.log(contador);
        continue;  // ir a la siguiente iteración
    }
 //CUIDADO CON LA PALAB. continue, el console.log cambia dentro del for 
 console.log(contador);
}
