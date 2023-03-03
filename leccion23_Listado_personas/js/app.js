const personas = [
    new Persona('Juana', 'Sánchez'),
    new Persona('Rodrigo', 'Cantudo')
];

function mostrarPersonas(){
    console.log('Mostrar personas...');
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}
function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if (nombre.value != '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona)
        personas.push(persona);
        mostrarPersonas();
    }else{
        alert('Rellene los campos obligatorios')
    }
 
} 