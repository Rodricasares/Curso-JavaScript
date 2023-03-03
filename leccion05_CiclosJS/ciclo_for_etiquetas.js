///ETIQUETAS en el ciclo FOR
/*
for (let contador = 0; contador <= 10; contador++ ){
    
    if(contador % 2 !== 0){  //El numero es par?
       break inicio;
    }
 //CUIDADO CON LA PALAB. continue, el console.log cambia dentro del for 
 console.log(contador);
}
*/  

// 

inicio:

for (let contador = 0; contador <= 10; contador++ ){
    
    if(contador % 2 !== 0){  //El numero es par?
       continue inicio;
    }
 //CUIDADO CON LA PALAB. continue, el console.log cambia dentro del for 
 console.log(contador);
}

