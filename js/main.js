var listaTareas = new Array();
var tareas = document.querySelector('.tareas');
var idTareasGlobal = 4;
listaTareas = [
    {
        idtarea: 0,
        texto: 'Estudiar',
        prioridad: 'urgente'
    },
    {
        idtarea: 1,
        texto: 'Ir a por el pan',
        prioridad: 'diaria'
    },
    {
        idtarea: 2,
        texto: 'Hacer la compra',
        prioridad: 'mensual'
    },
    {
        idtarea: 3,
        texto: 'Pasear al perro',
        prioridad: 'diaria'
    },

];

function mostrarTareas(pListaTareas) {
    let color = "";
    tareas.innerHTML = "";

    for (tarea of pListaTareas) {
        switch (tarea.prioridad) {
            case 'diaria':
                color = 'chartreuse'
                break;
            case 'mensual':
                color = 'blue'
                break;
            case 'urgente':
                color = 'tomato'
                break;
        }
        tareas.innerHTML += `<div class="tarea ${color}" id="${tarea.idtarea}">
                                <div class="texto"> ${tarea.texto}</div>
                                <div class="eliminar">Eliminar</div>
                            </div>`;

    }
}//Fin mostrarTareas
mostrarTareas(listaTareas);

//Funcion para añadir tareas

var btnGuardar = document.querySelector('#guardar');


btnGuardar.addEventListener('click', crearTarea);

function crearTarea() {
    var tareaNueva = document.querySelector('#crearTarea').value;
    var prioridadNuevaTarea = document.querySelector('#prioridad').value;
    let tarea = {
        idtarea: idTareasGlobal,
        texto: tareaNueva,
        prioridad: prioridadNuevaTarea
    };
    listaTareas.push(tarea);
    mostrarTareas(listaTareas);
    idTareasGlobal++;
}

//Funcion para eliminar tareas

var btnEliminar = document.querySelectorAll('.tarea .eliminar');
for (btn of btnEliminar) {
    btn.addEventListener('click', eliminarTarea);
}

function eliminarTarea() {

    let idTareaEliminar = document.getElementsByClassName('tarea');
    console.log(idTareaEliminar);

}


//Filtros

//Filtrar por prioridad

var filtroPrioridad = document.querySelector('.buscar #selector2');

filtroPrioridad.addEventListener('change', filtrarPrioridad);

function filtrarPrioridad() {
    let listaFiltrada = new Array();
    for (tarea of listaTareas) {
        if (tarea.prioridad == (filtroPrioridad.value).toLowerCase()) {
            listaFiltrada.push(tarea);
        }
    }
    mostrarTareas(listaFiltrada);
}

//Filtrar por texto (debe reaccionar al poner cada letra)

var buscarTarea = document.querySelector('.buscar #buscadorTarea');

buscarTarea.addEventListener('keyup', filtrarTareas);

function filtrarTareas() {
    let listaFiltrada = new Array();
    
    let textoIntroducido = document.querySelector('.buscar #buscadorTarea').value.toLowerCase();
    for(tarea of listaTareas){
        let texto = tarea.texto.toLowerCase();
        console.log(texto);
        console.log(textoIntroducido);
        if(texto.includes(textoIntroducido)){
            listaFiltrada.push(tarea);
        }
    }
    console.log(listaFiltrada)
    mostrarTareas(listaFiltrada)
}
