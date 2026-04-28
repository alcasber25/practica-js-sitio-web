// ===== IMÁGENES HEADER =====
const imagenesHeader = [   
    'assets/images/banner/1.jpg',
    'assets/images/banner/2.jpg',
    'assets/images/banner/3.jpg',
    'assets/images/banner/4.jpg',
    'assets/images/banner/5.jpg',
    'assets/images/banner/6.jpg',
    'assets/images/banner/7.jpg',
    'assets/images/banner/8.jpg'
];
 
// ===== IMÁGENES GALERÍA =====
const imagenesGaleria = [
    {
        url: 'assets/images/viajes/viajes-1.jpg',
        titulo: 'Playa con palmeras',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        url: 'assets/images/viajes/viajes-2.jpg',
        titulo: 'Playa de agua cristalina',
        descripcion: 'Pellentesque at ante laoreet justo hendrerit venenatis.'
    },
    {
        url: 'assets/images/viajes/viajes-3.jpg',
        titulo: '¿A dónde quieres ir?',
        descripcion: 'Phasellus feugiat enim ut eros auctor, vitae faucibus eros tristique.'
    },
    {
        url: 'assets/images/viajes/viajes-4.jpg',
        titulo: 'Sevilla',
        descripcion: 'In quis sem nec quam fringilla sollicitudin.'
    },
    {
        url: 'assets/images/viajes/viajes-5.jpg',
        titulo: 'Plaza España',
        descripcion: 'Integer consectetur purus tincidunt dui lobortis, ut laoreet nisi viverra.'
    },
    {
        url: 'assets/images/viajes/viajes-6.jpg',
        titulo: 'Grandes aventuras',
        descripcion: 'Curabitur imperdiet dolor vestibulum luctus dignissim.'
    },
    {
        url: 'assets/images/viajes/viajes-7.jpg',
        titulo: 'Una ruta inolvidable',
        descripcion: 'Nulla ultrices ante et fermentum semper.'
    }
];
 
// ===== HEADER ALEATORIO =====
function cargarHeader() {
    const imagenesAleatorias = [...imagenesHeader];
    imagenesAleatorias.sort(() => Math.random() - 0.5);
    const imagen = imagenesAleatorias[0];
    document.getElementById('imagenHeader').src = imagen;
}
 
// ===== CARGAR GALERÍA =====
function cargarGaleria() {
    const galeria = document.getElementById('galeria');
    galeria.innerHTML = '';
    imagenesGaleria.forEach(function(imagen) {
        const html = `
            <div class="tarjeta">
                <img src="${imagen.url}" class="tarjeta-imagen">
                <div class="tarjeta-contenido">
                    <h3 class="tarjeta-titulo">${imagen.titulo}</h3>
                    <p class="tarjeta-descripcion">${imagen.descripcion}</p>
                </div>
            </div>
        `;
        galeria.innerHTML += html;
    });
}
 
// ===== EJECUTAR AL CARGAR =====
document.addEventListener('DOMContentLoaded', function() {
    cargarHeader();
    cargarGaleria();
});