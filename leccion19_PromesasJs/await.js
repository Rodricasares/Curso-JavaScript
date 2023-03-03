//async & await
async function miFunc(){
    let miPromesa = new Promise(resolved => {
        resolved('Promesa await');
    })

    console.log(await miPromesa)
}
miFunc();