/* Declaración de variables globales*/
var listaTareas = new Array();
var tareas = document.querySelector('.tareas');
var idTareasGlobal = 4;
var filtroPrioridad = document.querySelector('.buscar #selector2');
var btnGuardar = document.querySelector('#guardar');
var buscarTarea = document.querySelector('.buscar #buscadorTarea');

/* Añadiendo todos los eventos listener*/
btnGuardar.addEventListener('click', crearTarea);
filtroPrioridad.addEventListener('change', filtrarPrioridad);
buscarTarea.addEventListener('keyup', filtrarTareas);

/* Inicialización JSON de tareas*/
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


/* Función para mostrar todas las tareas del JSON */
function mostrarTareas(pListaTareas) {
    tareas.innerHTML = "";
    for (tarea of pListaTareas) {
        mostrarUnaTarea(tarea);
    }
    crearEventoEliminar();
}


/* Funcion para mostrar una sola tarea */
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


/* Función para crear nuevas tareas */
function crearTarea() {
    let tareaNueva = document.querySelector('#crearTarea').value;
    let prioridadNuevaTarea = document.querySelector('#prioridad').value;
    let mensaje = document.getElementById('mensaje');

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

        idTareasGlobal++;
        document.querySelector('#crearTarea').value = "";
        crearEventoEliminar();
    }
}


/* Funcion para eliminar tareas */
function eliminarTarea(event) {
    let idEliminar = event.target.dataset.id;
    let tareaFuera = event.target.parentNode;

    listaTareas.splice(idEliminar, 1);
    tareaFuera.parentNode.removeChild(tareaFuera);
}


                                /* Creación de los filtros*/

/* Función para filtrar por prioridad */
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


/* Función para filtrar según el texto que se vaya introduciendo en el buscador */
function filtrarTareas() {
    let listaFiltrada = new Array();
    let textoIntroducido = document.querySelector('.buscar #buscadorTarea').value.toLowerCase();

    for (tarea of listaTareas) {
        let texto = tarea.texto.toLowerCase();
        if (texto.includes(textoIntroducido)) {
            listaFiltrada.push(tarea);
        }
    }
    mostrarTareas(listaFiltrada);
}


/* Función para añadir el evento click a los botones eliminar según se vayan creando tareas */
function crearEventoEliminar() {
    var btnEliminar = document.querySelectorAll('.tarea .eliminar');
    for (btn of btnEliminar) {
        btn.addEventListener('click', eliminarTarea);
    }
}


/* Inicialización de la aplicación*/

mostrarTareas(listaTareas);
