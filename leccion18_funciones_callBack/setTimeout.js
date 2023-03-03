function miFuncion(){
    console.log('Mi función')
}
function miFuncion2(){
    console.log('Mi función 2')

}

miFuncion()
miFuncion2()

//Funciones callBack
function respuesta(mensaje){
    console.log(mensaje)
}

function miFunCallBack(a,b,callBack){
    let suma = a+b
    console.log('Mi función contiene el argumento a y b\n los cuales se suman, total:'+ suma)
    callBack(`Resultado: ${suma}`);
}
miFunCallBack(2,2,respuesta)

//Llamadas asíncronas con uso stTImeout

function miCallBack(){
    console.log('Saludos asíncronos después de 3 seg.')
}
setTimeout(miCallBack, 3000)

setTimeout(function(){console.log('Mi segundo saludos con funciones callBack asíncronas 10 seg. despues de mi primera  funcion miCallBack')}, 10000)
setTimeout(()=> console.log('Tercer saludo callBack en func. flecha'),3000)