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
        console.log ("Datos distribuidores en Cordoba");}
        else if (provincia == "buenos aires" || provincia == "Buenos Aires" || provincia == "BUENOS AIRES"){
        console.log ("Datos distribuidores en Buenos Aires")
        }
}

function Distribuidor(nombre, localidad, alquiler, venta, contacto, direccion, telefono) {
    this.nombre = nombre;
    this.localidad = localidad;
    this.alquiler = alquiler;
    this.venta = venta;
    this.contacto = contacto;
    this.direccion = direccion;
    this.telefono = telefono;
}

var Casa1 = new Distribuidor("Cordoba V-A", "Cordoba", "si", "si", "Jonas Germani", "Av. Colon 2774 - Cordoba capital", "351 428.6554");
var Casa2 = new Distribuidor("Cordoba A", "Cordoba", "si", "no", "Joaquin Carbelo", "Pedro Zanni 48 - Cordoba capital", "351 442.4881");
var Casa3 = new Distribuidor("Cordoba V", "Cordoba", "no", "si", "Florencia Rodriguez", "España 43 - Alta Gracia - Cordoba", "3547 411.2154");
var Casa4 = new Distribuidor("Buenos Aires V-A", "Buenos Aires", "si", "si", "Juan Cruz Cabral", "Av. Brasil 2774 - CABA", "11 6302.3455");
var Casa5 = new Distribuidor("Buenos Aires V", "Buenos Aires", "no", "si", "Federico Schorder", "Cochabamba 447 - CABA", "11 3369.4721");
var Casa6 = new Distribuidor("Buenos Aires A", "Buenos Aires", "si", "no", "Fernando Salinas", "Av. Pedro Goyena 1982 - CABA", "11 8996.7426");


function distCordoba(){
    if (provincia == "Cordoba" && alquilerCompra == "Alquiler"){
        console.log (Casa1, Casa2);}
    else if(provincia == "Cordoba" && alquilerCompra == "Venta"){
        console.log (Casa1, Casa3);}
    }


function distBuenosAires(){
    if (provincia == "Buenos Aires" && alquilerCompra == "Alquiler"){
        console.log (Casa4, Casa6);}
    else if(provincia == "Buenos Aires" && alquilerCompra == "Venta"){
        console.log (Casa4, Casa5);}
    }


var provedor = proveedor();
distCordoba();
distBuenosAires();



 //   else if(promedioFinal=>6){
   // console.log("Promedio final: " + promedioFinal + ". APRUEBA.");
   // }
//}