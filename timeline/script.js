// Array de eventos
var eventos = [

    { fecha: '2024', descripcion: 'CIENCIA DE DATOS', centroEstudios: 'Universitat Oberta de Catalunya (UOC)', color: 'verde', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/Website___Portfolio/main/icons/timeline/uocGreen2.png' },    
    { fecha: '2024', descripcion: 'PROFESOR DE PROGRAMACIÓN EN YOUTUBE', centroEstudios: 'www.youtube.com/@damiandevops', color: 'verde', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/Website___Portfolio/main/icons/timeline/damiandevopslogo.png' },    
    { fecha: '2024', descripcion: 'VOLUNTARIADO EN HOSPITAL.', centroEstudios: 'Hospital Sant Pau', color: 'rojo', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/Website___Portfolio/12f2baa82b47a1971257d7283b9adcd9ee91ad6b/icons/timeline/santPau.svg' },
    { fecha: '2024', descripcion: 'ÁRABE y RUSO.', centroEstudios: 'EOI Drassanes. Intensivo de verano', color: 'rojo', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/Website___Portfolio/main/icons/timeline/eoidrassanes.png' },
    { fecha: '2024', descripcion: 'ÁRABE y RUSO', centroEstudios:  '...', color: 'azul', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/RandomAssets__flags/main/ArabRus.png' },
    { fecha: '2024', descripcion: 'FRANCÉS e ITALIANO', centroEstudios:  '...', color: 'azul', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/RandomAssets__flags/main/frenchItal.png' },
    { fecha: '2021-2024', descripcion: 'DESARROLLO DE APLICACIONES MULTIPLATAFORMA', centroEstudios: 'ITIC Barcelona', color: 'verde', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/Website___Portfolio/main/icons/timeline/itic.png' },    
    { fecha: '2023-2024', descripcion: 'GRADO DE PSICOLOGÍA.', centroEstudios: 'Universidad Nacional de Eduación a Distancia (UNED)', color: 'rojo', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/Website___Portfolio/main/icons/timeline/unedRojo.png' },
    { fecha: '2023', descripcion: 'Voluntario/cocinero ', centroEstudios: 'ONG cocinar', color: 'rojo', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/Website___Portfolio/main/icons/timeline/cocinando.png' },
    { fecha: '2023', descripcion: 'ALEMÁN Y FRANCÉS.', centroEstudios: 'EOI La Pau', color: 'rojo', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/Website___Portfolio/main/icons/timeline/eoilapau.png' },
    { fecha: '2022-2023', descripcion: 'SOFTWARE DEVELOPER', centroEstudios: 'ITEQUIA', color: 'verde', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/Website___Portfolio/main/icons/timeline/itequia.png' },
    { fecha: '2021-2023', descripcion: 'VARIOS CERTIFICADOS', centroEstudios: 'UDEMY', color: 'verde', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/Website___Portfolio/main/icons/timeline/udemyGreen2.png' },
    { fecha: '2018-2022', descripcion: 'Inspector', centroEstudios: 'Strength. Public Space Control', color: 'rojo', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/Website___Portfolio/main/icons/timeline/strrength.jpg' },    
    { fecha: '2017-2018', descripcion: 'Administrativo', centroEstudios: 'ToiToi', color: 'rojo', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/Website___Portfolio/main/icons/timeline/toitoiRed.png' },
    { fecha: '2013-2018', descripcion: 'Profesor ', centroEstudios: 'Amunt. Escola Fructuros Gelabert', color: 'rojo', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/Website___Portfolio/main/icons/timeline/fruitosGelabertRed.png' },
    { fecha: '2013-2018', descripcion: 'GRADO DE HISTORIA', centroEstudios: 'Universitat de Barcelona (UB)', color: 'rojo', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/Website___Portfolio/main/icons/timeline/ub4.png' },
    { fecha: '2009-2010', descripcion: 'Administrativo', centroEstudios: 'Ardix Hotels', color: 'rojo', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/Website___Portfolio/main/icons/timeline/ardix.png' },
    { fecha: '2008-2010', descripcion: 'GRADO SUPERIOR ADMINISTRACIÓN Y FINANZAS.', centroEstudios: 'IES Rambla Prim', color: 'rojo', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/Website___Portfolio/main/icons/timeline/iestamblaprim.png' },
    { fecha: '2010', descripcion: 'Voluntario ', centroEstudios: 'Llibres lliures', color: 'rojo', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/Website___Portfolio/main/icons/timeline/llibreslliuresRed.png' },
    { fecha: '2008', descripcion: 'ALEMÁN.', centroEstudios: 'Volkshochschule Berlin-Steglitz', color: 'rojo', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/Website___Portfolio/main/icons/timeline/vhs2.png' },
    { fecha: '2008', descripcion: 'INGLÉS y ALEMÁN', centroEstudios: 'Gracias a mis viajes (84 países en 6 años), vivir en Berlin, Bangkok y Cairo, o mis trabajos y amistades he consguido un nivel de inglés avanzado.', color: 'azul', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/RandomAssets__flags/main/AleIng.png' },
    { fecha: '1997', descripcion: 'CASTELLANO Y CATALÁN', centroEstudios: 'Ninguno. Son mis lenguas maternas', color: 'azul', imagenURL: 'https://raw.githubusercontent.com/DamianPyCoder/RandomAssets__flags/main/EspCat.png' },
    
    

    



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
        centroEstudiosP.textContent = "" + centroEstudios;
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
