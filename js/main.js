// ===== IMÁGENES HEADER =====
const imagenesHeader = [
    {
        url: 'assets/images/banner/1.jpg',
        alt: 'Descripcion de texto 1'
    },
    {
        url: 'assets/images/banner/2.jpg',
        alt: 'Descripcion de texto 2'
    },
    {
        url: 'assets/images/banner/3.jpg',
        alt: 'Descripcion de texto 3'
    },
    {
        url: 'assets/images/banner/4.jpg',
        alt: 'Descripcion de texto 4'
    },
    {
        url: 'assets/images/banner/5.jpg',
        alt: 'Descripcion de texto 5'
    },
    {
        url: 'assets/images/banner/6.jpg',
        alt: 'Descripcion de texto 6'
    },
    {
        url: 'assets/images/banner/7.jpg',
        alt: 'Descripcion de texto 7'
    },
    {
        url: 'assets/images/banner/8.jpg',
        alt: 'Descripcion de texto 8'
    }
];
 
// ===== CARGAR HEADER =====
const cargarHeader = () => {
    const indice = Math.floor(Math.random() * imagenesHeader.length);
    const imagenSeleccionada = imagenesHeader[indice];
    
    document.getElementById('imagenHeader').src = imagenSeleccionada.url;
    document.getElementById('imagenHeader').alt = imagenSeleccionada.alt;
};

// ===== IMÁGENES GALERÍA =====
const imagenesGaleria = [
    {
        url: 'assets/images/viajes/viajes-1.jpg',
        titulo: 'Playa con palmeras',
        alt: 'descripcion alternativo 1',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        url: 'assets/images/viajes/viajes-2.jpg',
        titulo: 'Playa de agua cristalina',
        alt: 'descripcion alternativo 2',
        descripcion: 'Pellentesque at ante laoreet justo hendrerit venenatis.'
    },
    {
        url: 'assets/images/viajes/viajes-3.jpg',
        titulo: '¿A dónde quieres ir?',
        alt: 'descripcion alternativo 3',
        descripcion: 'Phasellus feugiat enim ut eros auctor, vitae faucibus eros tristique.'
    },
    {
        url: 'assets/images/viajes/viajes-4.jpg',
        titulo: 'Sevilla',
        alt:'descripcion alternativo 4',
        descripcion: 'In quis sem nec quam fringilla sollicitudin.'
    },
    {
        url: 'assets/images/viajes/viajes-5.jpg',
        titulo: 'Plaza España',
        alt:'descripcion alternativo 5',
        descripcion: 'Integer consectetur purus tincidunt dui lobortis, ut laoreet nisi viverra.'
    },
    {
        url: 'assets/images/viajes/viajes-6.jpg',
        titulo: 'Grandes aventuras',
         alt: 'descripcion alternativo 6',
        descripcion: 'Curabitur imperdiet dolor vestibulum luctus dignissim.'
    },
    {
        url: 'assets/images/viajes/viajes-7.jpg',
        titulo: 'Una ruta inolvidable',
        alt: 'descripcion alternativo 7',
        descripcion: 'Nulla ultrices ante et fermentum semper.'
    }
];
 
 
// ===== CARGAR GALERÍA =====
const cargarGaleria = () => {
    const galeria = document.getElementById('galeria');
    galeria.innerHTML = '';
    
    imagenesGaleria.forEach((imagen) => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta';
        
        const img = document.createElement('img');
        img.src = imagen.url;
        img.alt = imagen.alt;
        img.className = 'tarjeta-imagen';
        
        const contenido = document.createElement('div');
        contenido.className = 'tarjeta-contenido';
        
        const titulo = document.createElement('h3');
        titulo.className = 'tarjeta-titulo';
        titulo.textContent = imagen.titulo;
        
        const descripcion = document.createElement('p');
        descripcion.className = 'tarjeta-descripcion';
        descripcion.textContent = imagen.descripcion;
        
        contenido.appendChild(titulo);
        contenido.appendChild(descripcion);
        
        tarjeta.appendChild(img);
        tarjeta.appendChild(contenido);
        
        galeria.appendChild(tarjeta);
    });
};
 
// ===== EJECUTAR =====
cargarHeader();
cargarGaleria();