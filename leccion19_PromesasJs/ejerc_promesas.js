//async,await & setTimeout
//await solo se puede utilizar con async, no es posible de utilizar de otra forma

async function miFunc(){
    let miPromesa = new Promise(resolved => {
        console.log('inicio función');
        setTimeout(()=> resolved('Promesa con async,await & setTimeout'),3000)
  
    })
console.log(await miPromesa);
console.log('fin de la función');
}

miFunc();