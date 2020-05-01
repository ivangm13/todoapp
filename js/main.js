var listaTareas = new Array();
var tareas = document.querySelector('.tareas');

listaTareas = [
    {
        'idtarea': 0,
        'texto': 'Estudiar',
        'prioridad': 'urgente'
    },
    {
        'idtarea': 1,
        'texto': 'Ir a por el pan',
        'prioridad': 'diaria'
    },
    {
        'idtarea': 2,
        'texto': 'Hacer la compra',
        'prioridad': 'semanal'
    },
    {
        'idtarea': 3,
        'texto': 'Pasear al perro',
        'prioridad': 'diaria'
    },

];

function mostrarTareas(pListaTareas) {

    for(tarea of pListaTareas){
        tareas.innerHTML += `<div class="tarea">
                                <div class="texto"> ${tarea.texto}</div>
                                <div class="eliminar">Eliminar</div>
                            </div>`
    }
}