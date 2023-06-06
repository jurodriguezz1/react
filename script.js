// const IVA = 0.21;

// let opcion = null;

// while (opcion !== 0) {opcion = parseInt(
//     prompt("¿Qué desea comprar? Opcion 1: indumentaria, Opcion 2: calzado. Presione 0 para salir"));

// if (opcion === 1) {
//     //prendas de indumentaria
//     const prendas = [
//     { nombre: "pijamanta", precio: 14000 },
//     { nombre: "pijama polarsoft", precio: 11000 },
//     { nombre: "parka corderito", precio: 18500 },
//     { nombre: "parka premium", precio: 19000 },
//     { nombre: "puffer alaska", precio: 11800 },
//     { nombre: "puffer vegan", precio: 19000 },
//     ];

//     let mensaje = "seleccione una prenda:\n";
//     for (let i = 0; i < prendas.length; i++) {
//     mensaje += `${i + 1}.${prendas[i].nombre}($${prendas[i].precio})\n`;
//     }
//     //que el usuario elija una prenda
//     const seleccion = parseInt(prompt(mensaje));
//     //calcular el precio final
//     if (seleccion >= 1 && seleccion <= prendas.length) {
//     const prendaSeleccionada = prendas[seleccion - 1];
//     const cantidad = parseInt(
//         prompt(`¿cuantas unidades de ${prendaSeleccionada.nombre} desea comprar?`)
//     );
//     const precioConIva = calcularPrecio(prendaSeleccionada, cantidad);
//     alert(
//         `El precio final a pagar por ${cantidad} unidades de ${prendaSeleccionada.nombre} es: $${precioConIva.toFixed(2)}`);
//     } else {
//     alert("Opcion invalida");
//     }

//     function calcularPrecio(producto, cantidad) {
//     const precioSinIva = cantidad * producto.precio;
//     const precioConIva = precioSinIva * (1 + IVA);
//     return precioConIva;
// }   
// } else if (opcion === 2) {
//     //prendas calzado

//     const calzado = [
//         {nombre:"Qatar", precio: 9000},
//         {nombre:"texanas", precio: 18000},
//         {nombre:"Zayara", precio: 14000},
//     ];

//     //mostrar al usuario
//     let mensaje = "seleccione un calzado:\n";

//     for(let i = 0; i < calzado.length; i++){
//         mensaje +=`${i + 1}.${calzado[i].nombre}($${calzado[i].precio})\n`;
//     }

//     //que el usuario seleccione
//     const seleccion = parseInt(prompt(mensaje));

//     //Calcular precio final
//     if (seleccion >= 1 && seleccion <= calzado.length) {
//         const calzadoSeleccionado = calzado[seleccion - 1];
//         const cantidad = parseInt(prompt(`¿cuantas unidades de ${calzadoSeleccionado.nombre} desea comprar?`));
//         const precioConIva = calcularPrecio(calzadoSeleccionado, cantidad)
//         alert(`El precio final a pagar por ${cantidad} unidades de ${calzadoSeleccionado.nombre} es: $${precioConIva.toFixed(2)}`);
//     } else {
//         alert("Opcion invalida");
//     }
// } else if (opcion === 0){
//     alert("Gracias por tu compra!");
// } else {
//     alert("opcion invalida;");
// }
// }

// function calcularPrecio(producto, cantidad) {
//     const precioSinIva = cantidad * producto.precio;
//     const precioConIva = precioSinIva * (1 + IVA);
//     return precioConIva;
// }

//obtener referencias a los elementos del dom
const items = document.querySelectorAll('.item');
const carrito = document.getElementById('carrito');
const total = document.getElementById('total');
const btnVaciar = document.getElementById('btnVaciar');

// agregar eventos a los botones agregar
items.forEach(item =>{
    const btn = item.querySelector('.btn');
    btn.addEventListener('click', agregaAlCarrito);
});

//funcion para agregar un producto al carrito+
function agregaAlCarrito(event){
    const producto = event.target.parentNode.querySelector('span').innerText;
    const imagen = event.target.parentNode.querySelector('img').scr;
    const precio = obtenerPrecio(producto);
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = imagen;
    img.alt = producto;
    li.appendChild(img);
    li.appendChild(document.createTextNode(producto + '-$' + precio));
    carrito.appendChild(li);
    total.innerText = calcularTotal();
}

//funcion para obtener precio del prodcto
function obtenerPrecio(producto) {
    let precio = 0;
    switch (producto) {
        case 'Puffer Alaska':
        precio = 19800;
        break;

        case 'Pijamanta Corderito':
        precio = 22000;
        break;

        case 'Puffer Metalizada':
        precio = 31000;
        break;

        case 'Puffer Mia':
        precio = 30000;
        break;

        case 'Pijama Polarsoft':
        precio = 22000;
        break;

        case 'Vegan Leather Jacket':
        precio = 32000;
        break;

        default:
            precio = 0;
    }
return precio;
}

//funcion para calcular total
function calcularTotal(){
    let total = 0;
    const productos = carrito.querySelectorAll('li');
    productos.forEach(producto => {
        const textoProducto = producto.innerText;
        const precio = parseFloat(textoProducto.substring(textoProducto.lastIndexOf('$') + 1));
        total += precio;
        });
        return total;
}

//evento para vaciar el carrito
btnVaciar.addEventListener('click', vaciarCarrito);

//funcion para vaciatlo
function vaciarCarrito() {
    carrito.innerHTML = '';
    total.innerText = '0';
} 

//formulario
document.addEventListener('DOMContentLoaded' , function() {
    var form = document.getElementById('formulario');

    form.addEventListener('submit' , function(e) {
        e.preventDefault();

        //obtener vlores del form
var nombre = form.elements['nombre'].value; 
var email = form.elements['email'].value; 
var telefono = form.elements['telefono'].value; 
var comentario = form.elements['comentario'].value; 

// objeto para guardar la info
var informacion = {
    nombre : nombre,
    email : email,
    telefono : telefono,
    comentario : comentario,
};

// objeto a cadena json
var informacionJSON = JSON.stringify(informacion);

//guardar info de manera local
localStorage.setItem('formularioData' , informacionJSON);

//limpiar form
form.reset();

    });

});

document.addEventListener('DOMContentLoaded' , function(){
    var storedData = localStorage.getItem('formularioData');
    
    if (storedData){
        var informacion = JSON.parse(storedData);

        console.log(informacion);
    }
});
