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

let productodetalle = JSON.parse(localStorage.getItem("detalleproducto"))

function cargarproducto(){
    let enlaces = document.getElementById("boxproductos");
    let lista = document.createElement("div");
    lista.innerHTML =` 
        <h3>${productodetalle.nombre}</h3>
        <img src="${productodetalle.urlImagen}" alt=""> <!-- Corregido aquí -->
        <p>${productodetalle.precio}</p> 
                <div class="boxcontador">
                    <button onclick="sumar()">+</button>
                    <p id="contarproducto">0</p>
                    <button onclick="restar()">-</button>
                </div>
                <button onclick="cargarcarrito()">Cargar carrito</button>
            </div>
        </div>   
    `;
    enlaces.appendChild(lista);
}

cargarproducto()
let contador = 0;

function sumar(){
    let nstock = productodetalle.stock 
    if(contador<nstock){
        contador = contador + 1;
    document.getElementById("contarproducto").innerHTML = contador;
    } else {
        alert("Stock agotado!")
    }
}

function restar(){
    if(contador>0){
        contador = contador - 1;
        document.getElementById("contarproducto").innerHTML = contador;
    }
}


function cargarcarrito(){
    if(contador == 0){
        alert("Ingrese la cantidad de productos deseados, por favor.");
    } else {
        // Verifica si ya hay un carrito guardado en localStorage
        let carrito = JSON.parse(localStorage.getItem("carrito"));

        // Si el carrito no existe, inicialízalo como un array vacío
        if (!carrito) {
            carrito = [];
        }

        // Agrega el producto al carrito
        carrito.push(productodetalle);

        // Guarda el carrito actualizado en localStorage
        const enJSON = JSON.stringify(carrito);
        localStorage.setItem("carrito", enJSON);

        // Redirige a la página del carrito
        window.location.href = "carrito.html";
    }
}