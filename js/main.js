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
    tareas.innerHTML = "";
    for (tarea of pListaTareas) {
        mostrarUnaTarea(tarea);

    }
    darEventoEliminar();

}//Fin mostrarTareas
mostrarTareas(listaTareas);


//Funcion para mostrar una sola tarea:

function mostrarUnaTarea(pTarea) {
    switch (pTarea.prioridad) {
        case 'diaria':
            clase = 'diaria'
            break;
        case 'mensual':
            clase = 'mensual'
            break;
        case 'urgente':
            clase = 'urgente'
            break;
    }
    tareas.innerHTML += `<div class="tarea ${clase}" >
                        <div class="texto"> ${pTarea.texto}</div>
                        <div class="eliminar" data-id=${pTarea.idtarea} >Eliminar</div>
                        </div>`;


}

//Funcion para añadir tareas

var btnGuardar = document.querySelector('#guardar');


btnGuardar.addEventListener('click', crearTarea);

function crearTarea() {
    var tareaNueva = document.querySelector('#crearTarea').value;
    var prioridadNuevaTarea = document.querySelector('#prioridad').value;
    var mensaje = document.getElementById('mensaje');
    if (tareaNueva == "") {
        mensaje.style.display = "block";
    } else {
        mensaje.style.display = "none";
        let tarea = {
            idtarea: idTareasGlobal,
            texto: tareaNueva,
            prioridad: prioridadNuevaTarea
        };
        listaTareas.push(tarea);
        mostrarUnaTarea(tarea);

        console.log(listaTareas)
        idTareasGlobal++;
        document.querySelector('#crearTarea').value = "";
        darEventoEliminar;
    }


}

//Funcion para eliminar tareas


function eliminarTarea(event) {
    let idEliminar = event.target.dataset.id;
    console.log(idEliminar)
    listaTareas.splice(idEliminar, 1);
    console.log(listaTareas);
    let tareaFuera = event.target.parentNode;
    console.log(tareaFuera)
    tareaFuera.parentNode.removeChild(tareaFuera);
}


//Filtros

//Filtrar por prioridad

var filtroPrioridad = document.querySelector('.buscar #selector2');

filtroPrioridad.addEventListener('change', filtrarPrioridad);

function filtrarPrioridad() {
    let listaFiltrada = new Array();
    if (filtroPrioridad.value == 'todas') { mostrarTareas(listaTareas) }
    else {

        for (tarea of listaTareas) {
            if (tarea.prioridad == (filtroPrioridad.value).toLowerCase()) {
                listaFiltrada.push(tarea);
            }
        }
        mostrarTareas(listaFiltrada);
    }
}

//Filtrar por texto (debe reaccionar al poner cada letra)

var buscarTarea = document.querySelector('.buscar #buscadorTarea');

buscarTarea.addEventListener('keyup', filtrarTareas);

function filtrarTareas() {
    let listaFiltrada = new Array();

    let textoIntroducido = document.querySelector('.buscar #buscadorTarea').value.toLowerCase();
    for (tarea of listaTareas) {
        let texto = tarea.texto.toLowerCase();
        console.log(texto);
        console.log(textoIntroducido);
        if (texto.includes(textoIntroducido)) {
            listaFiltrada.push(tarea);
        }
    }
    console.log(listaFiltrada)
    mostrarTareas(listaFiltrada)
}

function darEventoEliminar() {
    console.log('entrar')
    var btnEliminar = document.querySelectorAll('.tarea .eliminar');
    for (btn of btnEliminar) {
        btn.addEventListener('click', eliminarTarea);
    }
}