const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let sec = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${sec}`;
    const meses = ['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre', 'Diciembre']
    const dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado']

    let diaSemana = dias[fecha.getDay()]
    let dia = fecha.getDate()
    let mes = meses[fecha.getMonth()]
let texto = `${diaSemana}, ${dia} de ${mes}`
document.getElementById('fecha').innerHTML = texto;
document.getElementById('contenedor').classList.toggle('animar')
}


const formatoHora = (hora) => {
    if(hora < 10)
        hora = '0' + hora;
        return hora;
    
}
setInterval(mostrarReloj,1000)// SetInterval nospermite programar nuestra funciones por tiempo.

