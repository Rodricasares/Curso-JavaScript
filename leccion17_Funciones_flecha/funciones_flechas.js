
//Forma normal de función
function miFuncion(){
    console.log('Curso Js Udemy');
}
miFuncion()

//let miFuncionFlecha = (a,b) =>{ 
  //  let suma = a+b
    //console.log('Funcion flecha CUrso de Udemy' + '\n' + 'La Suma de a y b: ' + suma)}

//miFuncionFlecha(200,300)

const miFlecha = () => console.log('saludos mi flecha')
miFlecha()

const miflecha1 =()=>{return 'hola flecha1'}
console.log(miflecha1())

const flechaObj = () => ({nombre:'JUan', apellido:'Perez'})
console.log(flechaObj())

const miSuma = (sum1,sum2) => sum1 + sum2 + '€';
console.log(miSuma(20,30))
