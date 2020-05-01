var listaTareas = new Array();
var tareas = document.querySelector('.tareas');

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
        tareas.innerHTML += `<div class="tarea ${color}">
                                <div class="texto"> ${tarea.texto}</div>
                                <div class="eliminar">Eliminar</div>
                            </div>`;
        
    }
}//Fin mostrarTareas
mostrarTareas(listaTareas);