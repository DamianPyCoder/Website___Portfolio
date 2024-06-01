// Array de eventos
var eventos = [
    { fecha: '1914', descripcion: 'Primera Guerra Mundial.', centroEstudios: 'Universidad de Oxford', color: 'azul' },
    { fecha: '1959', descripcion: 'Segunda Guerra Mundial.', centroEstudios: 'Universidad de Cambridge', color: 'rojo' },



    { fecha: '2014-2018', descripcion: 'GRADO DE HISTORIA', centroEstudios: 'Universitat de Barcelona (UB)', color: 'rojo', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/Website___Portfolio/main/icons/timeline/ub.png' },
    { fecha: '2021-2024', descripcion: 'DESARROLLO DE APLICACIONES MULTIPLATAFORMA', centroEstudios: 'ITIC Barcelona', color: 'verde', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/Website___Portfolio/main/icons/timeline/itic.png' },
    { fecha: '1929', descripcion: 'El hombre llega a la luna en la misión Apolo 11.', centroEstudios: 'MIT', color: 'rojo' },
    { fecha: '1989', descripcion: 'Caída del Muro de Berlín.', centroEstudios: 'Universidad de Harvard', color: 'azul' },
    { fecha: '2001', descripcion: 'Atentados del 11 de septiembre.', centroEstudios: 'Universidad de Stanford', color: 'rojo' }
];


// Eventos para los interruptores
document.getElementById('switchRojo').addEventListener('click', function() {
    toggleEventos('rojo', this);
});

document.getElementById('switchVerde').addEventListener('click', function() {
    toggleEventos('verde', this);
});

document.getElementById('switchAzul').addEventListener('click', function() {
    toggleEventos('azul', this);
});

// Función para mostrar u ocultar los eventos según el color
function toggleEventos(color, button) {
    var timeline = document.getElementById('timeline');
    var eventosFiltrados = eventos.filter(function(evento) {
        return evento.color === color;
    });

    if (button.classList.contains('active')) {
        button.classList.remove('active');
        eventosFiltrados.forEach(function(evento) {
            var eventoEl = document.getElementById(evento.fecha);
            if (eventoEl) {
                eventoEl.remove();
            }
        });
    } else {
        button.classList.add('active');
        eventosFiltrados.forEach(function(evento) {
            var eventoEl = crearEvento(evento.fecha, evento.descripcion, evento.color, evento.imagenURL, evento.centroEstudios); 
            timeline.appendChild(eventoEl);
        });
    }

    ordenarEventosPorFecha();
}


function crearEvento(fecha, descripcion, color, imagenURL, centroEstudios) {
    var container = document.createElement('div');
    container.id = fecha;
    container.classList.add('container');

    var content = document.createElement('div');
    content.classList.add('content');

    var imgSection = document.createElement('div');
    imgSection.classList.add('img-section');

    var img = document.createElement('img');
    img.src = imagenURL; // URL de la imagen
    img.alt = "Imagen"; // Texto alternativo para la imagen (opcional)

    // Establecer el tamaño de la imagen
    img.style.width = "100px"; // Ancho de 200 píxeles
    img.style.height = "100px"; // Alto de 150 píxeles

    imgSection.appendChild(img); // Agregamos la imagen a su propia sección

    var dateDescSection = document.createElement('div');
    dateDescSection.classList.add('date-desc-section');

    // Creamos un elemento de párrafo para la fecha y le aplicamos estilos
    var fechaP = document.createElement('p');
    fechaP.textContent = fecha;

    // Creamos un elemento de párrafo para la descripción y le aplicamos estilos
    var descripcionP = document.createElement('p');
    descripcionP.textContent = descripcion;
    descripcionP.style.fontWeight = 'bold'; // Estilo negrita
    descripcionP.style.fontSize = '16px'; // Tamaño de letra


    dateDescSection.appendChild(descripcionP); // Descripción después

    
    // Creamos un elemento de párrafo para el centro de estudios si se proporciona
    if (typeof centroEstudios !== 'undefined') {
        var centroEstudiosP = document.createElement('p');
        centroEstudiosP.textContent = "Centro de estudios: " + centroEstudios;
        dateDescSection.appendChild(centroEstudiosP); // Centro de estudios después
    }

    // Agregamos los elementos de párrafo al contenedor de fecha y descripción
    dateDescSection.appendChild(fechaP); // Fecha primero


    content.appendChild(imgSection);
    content.appendChild(dateDescSection);
    container.appendChild(content);

    if (color === 'rojo') {
        container.classList.add('right');
        content.style.background = 'linear-gradient(to bottom, #FF9F9C, #ffffff)'; // Degradado de rojo a blanco (vertical)
    } else if (color === 'verde') {
        container.classList.add('left');
        content.style.background = 'linear-gradient(to bottom, #5CD7A3, #ffffff)'; // Degradado de verde a blanco (vertical)
    } else if (color === 'azul') {
        container.classList.add('left');
        content.style.background = 'linear-gradient(to bottom, #87A5EF, #ffffff)'; // Degradado de azul a blanco (vertical)
    }

    // Eliminar el borde inferior del degradado
    content.style.borderBottom = 'none'; // Cambiado a 'none' para asegurar que no haya borde inferior

    return container;
}










// Función para ordenar los eventos por fecha
function ordenarEventosPorFecha() {
    var timeline = document.getElementById('timeline');
    var eventosOrdenados = Array.from(timeline.children).sort(function(a, b) {
        var fechaA = new Date(a.id.split(' - ')[0]);
        var fechaB = new Date(b.id.split(' - ')[0]);
        return fechaA - fechaB;
    });

    eventosOrdenados.forEach(function(evento) {
        timeline.appendChild(evento);
    });
}
