// Array de eventos
var eventos = [
    { fecha: '1914', descripcion: 'Primera Guerra Mundial.', color: 'azul' },
    { fecha: '1959', descripcion: 'Segunda Guerra Mundial.', color: 'rojo' },
    { fecha: '2021-2024', descripcion: 'ITIC BCN: DESARROLLO DE APLICACIONES MULTIPLATAFORMA', color: 'verde', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/Website___Portfolio/main/icons/timeline/itic.png' },
    { fecha: '1929', descripcion: 'El hombre llega a la luna en la misión Apolo 11.', color: 'rojo' },
    { fecha: '1989', descripcion: 'Caída del Muro de Berlín.', color: 'azul' },
    { fecha: '2001', descripcion: 'Atentados del 11 de septiembre.', color: 'rojo' }
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
            var eventoEl = crearEvento(evento.fecha, evento.descripcion, evento.color, evento.imagenURL); // Pasa la imagenURL como argumento
            timeline.appendChild(eventoEl);
        });
    }

    ordenarEventosPorFecha();
}

function crearEvento(fecha, descripcion, color, imagenURL) {
    var container = document.createElement('div');
    container.id = fecha;
    container.classList.add('container');

    var content = document.createElement('div');
    content.classList.add('content');

    var img = document.createElement('img');
    img.src = imagenURL; // URL de la imagen
    img.alt = "Imagen"; // Texto alternativo para la imagen (opcional)

    // Establecer el tamaño de la imagen
    img.style.width = "100px"; // Ancho de 200 píxeles
    img.style.height = "100px"; // Alto de 150 píxeles

    var h2 = document.createElement('h2');
    h2.textContent = fecha;

    var p = document.createElement('p');
    p.textContent = descripcion;

    content.appendChild(img); // Agregamos la imagen primero
    content.appendChild(h2);
    content.appendChild(p);
    container.appendChild(content);

    if (color === 'rojo') {
        container.classList.add('right');
        content.style.backgroundColor = '#FF9F9C'; // Color rojo
    } else if (color === 'verde') {
        container.classList.add('left');
        content.style.backgroundColor = '#5CD7A3'; // Color verde
    } else if (color === 'azul') {
        container.classList.add('left');
        content.style.backgroundColor = '#87A5EF'; // Color azul
    }

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
