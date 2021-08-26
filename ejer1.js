/* 
La empresa perfumes latinos premiará a su empleado del mes (quien más dinero recaude en ventas) con una comisión  
y requiere un programa que almacene y muestre:
- Qué cantidad de cada productos vendió cada vendedor.
- La suma total de dinero recolectada por cada vendedor.
- Nombre del empleado del mes, en caso de haber vendido lo mismo indicar que fue un empate

La empresa actualmente cuenta con los siguientes 4 productos que tienen los siguientes nombres y precios:
- Aqua: 200 usd
- Emoción: 180 usd
- Alegría: 160 usd
- Frescura: 150 usd

Y 2 vendedores Juana, Pedro.

Notas:
Al inicio el usuario debe ingresar las cantidades que vendió cada empleado de cada producto
Los resultados deben visualizarse en consola y deben activarse a través de botones
El programa debe validar y mostrar un mensaje de error si no se ingresa un valor numérico.(Opcional).
Debe hacer uso de funciones, arrays y estructuras de control para resolver el ejercicio.

*/

let vendedores = [];
let ventasJuana = 0;
let ventasPedro = 0;

let p_aqua = 200;
let p_emocion = 180;
let p_alegria = 160;
let p_frescura = 150;

function calcularVentas(p1, p2, p3, p4){
    let resultado = p1*p_aqua + p2*p_emocion + p3*p_alegria + p4*p_frescura;
    console.log(`${p1} Aqua`);
    console.log(`${p2} Emoción`);
    console.log(`${p3} Alegría`);
    console.log(`${p4} Frescura`);
    console.log(`Por un valor total de: ${resultado}`);
    return resultado;
}

let btnJuana = document.getElementById("btn-juana");
btnJuana.addEventListener("click",function()
{
    let aqua = document.getElementById("aqua").value;
    let emocion = document.getElementById("emocion").value;
    let alegria = document.getElementById("alegria").value;
    let frescura = document.getElementById("frescura").value;

    ventasJuana = calcularVentas(aqua,emocion,alegria,frescura);
});

let btnPedro = document.getElementById("btn-pedro");
btnPedro.addEventListener("click",function()
{
    let aqua = document.getElementById("aqua2").value;
    let emocion = document.getElementById("emocion2").value;
    let alegria = document.getElementById("alegria2").value;
    let frescura = document.getElementById("frescura2").value;

    ventasPedro = calcularVentas(aqua,emocion,alegria,frescura);
});

let btnVendedor = document.getElementById("btn-vendedor");
btnVendedor.addEventListener("click",function()
{
    if (ventasJuana > ventasPedro) {
        alert(`Juana es la vendedora del mes`);
    } else if (ventasJuana < ventasPedro) {
        alert(`Pedro es el vendedor del mes`);
    } else {
        alert(`Empate`);
    }
});