var precioCompra = 420.000
var precioAlquilerDia = 8.000
var precioEnvio = 1.500


function solicitudProvincia(){
    var provincia = (prompt("Ingresá tu provincia. Cordoba y Buenos Aires disponibles."));
    while(provincia != "Cordoba" && provincia != "cordoba" && provincia != "CORDOBA" && provincia != "buenos aires" && provincia != "BUENOS AIRES" && provincia != "Buenos Aires" && provincia != "Buenos aires"){
        alert("Por el momento solo contamos con distribuidores en Cordoba y Buenos Aires.");
            var provincia = (prompt("Ingresá tu provincia. Cordoba y Buenos Aires disponibles."));
        }
    return provincia;
}

var provincia = solicitudProvincia();

var alquilerCompra = (prompt("Ingresá alquiler o compra segun tu necesidad."));
if(alquilerCompra == "alquiler" || alquilerCompra == "Alquiler" || alquilerCompra == "ALQUILER"){
    var diasAlquiler = (prompt("Cuantos días necesitas alquilar?"));
}

function proveedor(){
    if (provincia == "Cordoba" || provincia == "cordoba" || provincia == "CORDOBA"){
        console.log ("Datos provedor Cordoba");}
        else if (provincia == "buenos aires" || provincia == "Buenos Aires" || provincia == "BUENOS AIRES"){
        console.log ("Datos provedor Buenos Aires")
        }
}

var provedor = proveedor();


console.log (provincia);
console.log (alquilerCompra);
console.log (diasAlquiler);