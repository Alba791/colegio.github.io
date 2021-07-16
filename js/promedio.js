var datos=[];

function registrar(){
    var nombre=document.getElementById('alumno').value;
    var asignatura=document.getElementById('asignatura').value;
    var p1=document.getElementById('p1').value;
    var p2=document.getElementById('p2').value;
    var p3=document.getElementById('p3').value;
    var p4=document.getElementById('p4').value;

    datos.push({
        'alumno' : nombre,
        'asignatura' : asignatura,
        'p1' : p1,
        'p2' : p2,
        'p3' : p3,
        'p4' : p4,
        'promedio' : (parseInt(p1) + parseInt(p2) + parseInt(p3) + parseInt(p4)) / 4
    });
    document.getElementById('frmCalif').reset();
    alert('datos guardados');
    
    creartabla();

    cerrarModal();
}
function creartabla(){
    var fila='';
datos.forEach((item, i)=>{
fila +=`<tr>
                <td>${item.alumno}</td>
                <td>${item.asignatura}</td>
                <td>${item.p1}</td>
                <td>${item.p2}</td>
                <td>${item.p3}</td>
                <td>${item.p4}</td>
                <td>${item.promedio}</td>
        </tr>`
    });

document.getElementById('filas').innerHTML=fila;
}

function mostrarModal(){
    document.getElementById('modal-registro').classList.add('active');
}

function cerrarModal(){
    document.getElementById('modal-registro').classList.remove('active');
}