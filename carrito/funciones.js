const menus = [{nombre: "Inicio", url: "index.html"},
    {nombre: "¿Quienes somos?", url: "quienes.html"},
    {nombre: "Contacto", url: "contacto.html"},
    {nombre: "Carrito", url: "carrito.html"},
];

function cargarmenu() {
let enlaces = document.getElementById("ulmenu")
for (const menu of menus) {
let lista = document.createElement("li")
lista.innerHTML = `<a href="${menu.url}">${menu.nombre}</a>`;
enlaces.appendChild(lista);
}
}
cargarmenu() 

const productos = [
{
id: 1,
nombre: "Mazo Tarot Visiones Etereas Dorado",
urlImagen: "etereas.webp",
precio: 22000,
descripcion: "Mazo Tarot Visiones Etereas Dorado ORIGINAL",
stock: 15
},
{
id: 2,
nombre: "Mazo Tarot Golden Art Noveau ",
urlImagen: "golden.webp",
precio: 17000,
descripcion: "Mazo Tarot Golden Art Noveau  ORIGINAL",
stock: 8
},
{
id: 3,
nombre: "Mazo Tarot Gold & Black Original ",
urlImagen: "gyb.webp",
precio: 35000,
descripcion: "Mazo Tarot Gold & Black Original ",
stock: 25
},
{
id: 4,
nombre: "Magas Ilustradas: Libro de tarot + Mazo ilustrado",
urlImagen: "magas.png",
precio: 12000,
descripcion: "Magas Ilustradas: Libro de tarot + Mazo ilustrado",
stock: 12
},
{
id: 5,
nombre: "Sahumerios Mágicos Vainilla",
urlImagen: "aromanza.webp",
precio: 2500,
descripcion: "Sahumerios Mágicos Vainilla",
stock: 7
},
{
id: 6,
nombre: "Sahumerios Magistrales Aromanza Delicioso",
urlImagen: "aromanza2.jpg",
precio: 5000,
descripcion: "Sahumerios Magistrales Aromanza Delicioso",
stock: 30
},
{
id: 7,
nombre: "Estatuas Buda Sabio 3 Sentidos Resina ",
urlImagen: "budas.webp",
precio: 8000,
descripcion: "Estatuas Buda Sabio 3 Sentidos Resina , 10cm x 8cm",
stock: 20
},
{
id: 8,
nombre: "VELAS LARGAS 7 COLORES",
urlImagen: "velas.jpg",
precio: 3500,
descripcion: "VELAS LARGAS 7 COLORES",
stock: 10
},
{
id: 9,
nombre: "Buda II 30 cm",
urlImagen: "buda.jpeg",
precio: 16000,
descripcion: "Buda II 30 cm",
stock: 18
},
{
id: 10,
nombre: "Velón 7 colores",
urlImagen: "velon.jpeg",
precio: 1000,
descripcion: "Velón 7 colores",
stock: 40
}
];

function cargarproductos() {
let enlaces = document.getElementById("boxproductos")
for (const producto of productos) {
let lista = document.createElement("div")
lista.innerHTML =`  <h3>${producto.nombre}</h3>
                    <img src=${producto.urlImagen} alt="">
                    <p>${producto.precio}</p>
                    <button onclick="verdetalle('${producto.id}')">Detalles</button>
                `;
enlaces.appendChild(lista);
}
}
cargarproductos()

function verdetalle(idproducto) {
const buscarProducto = productos.find(producto => producto.id === parseInt(idproducto));
const enJSON = JSON.stringify(buscarProducto);
localStorage.setItem("detalleproducto", enJSON)
window.location.href="detalle.html"
}