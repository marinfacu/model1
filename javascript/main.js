var precioCompra = 420000
var precioAlquilerDia = 4500
var precioEnvioCompra = 1500
var precioEnvioAlquiler = 2500




function solicitudProvincia(){
    var provincia = (prompt("Ingresá tu provincia. Cordoba y Buenos Aires disponibles.").toUpperCase());
    while(provincia != "Cordoba" && provincia != "cordoba" && provincia != "CORDOBA" && provincia != "buenos aires" && provincia != "BUENOS AIRES" && provincia != "Buenos Aires" && provincia != "Buenos aires"){
        alert("Por el momento solo contamos con distribuidores en Cordoba y Buenos Aires.");
            var provincia = (prompt("Ingresá tu provincia. Cordoba y Buenos Aires disponibles.").toUpperCase());
        }
    return provincia;
}

function proveedor(){
    if (provincia == "CORDOBA"){
        console.log ("Distribuidores en Cordoba");}
        else if (provincia == "BUENOS AIRES"){
        console.log ("Distribuidores en Buenos Aires")
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

var Casa1 = new Distribuidor("ENTER.", "Cordoba", "si", "si", "Jonas Germani", "Av. Colon 2774 - Cordoba capital", "351 428.6554");
var Casa2 = new Distribuidor("Cocoon", "Cordoba", "si", "no", "Joaquin Carbelo", "Pedro Zanni 48 - Cordoba capital", "351 442.4881");
var Casa3 = new Distribuidor("Lost & Found", "Cordoba", "no", "si", "Florencia Rodriguez", "España 43 - Alta Gracia - Cordoba", "3547 411.2154");
var Casa4 = new Distribuidor("SudBeat", "Buenos Aires", "si", "si", "Juan Cruz Cabral", "Av. Brasil 2774 - CABA", "11 6302.3455");
var Casa5 = new Distribuidor("Rumors", "Buenos Aires", "no", "si", "Federico Schorder", "Cochabamba 447 - CABA", "11 3369.4721");
var Casa6 = new Distribuidor("Bedrock", "Buenos Aires", "si", "no", "Fernando Salinas", "Av. Pedro Goyena 1982 - CABA", "11 8996.7426");


function distCordoba(){
    if (provincia == "CORDOBA" && alquilerCompra == "ALQUILER"){
        console.log (Casa1, Casa2);}
    else if(provincia == "CORDOBA" && alquilerCompra == "COMPRA"){
        console.log (Casa1, Casa3);}
    }


function distBuenosAires(){
    if (provincia == "BUENOS AIRES" && alquilerCompra == "ALQUILER"){
        console.log (Casa4, Casa6);}
    else if(provincia == "BUENOS AIRES" && alquilerCompra == "COMPRA"){
        console.log (Casa4, Casa5);}
    }



var provincia = solicitudProvincia();
var alquilerCompra = (prompt("Ingresá alquiler o compra segun tu necesidad.").toUpperCase());
if (alquilerCompra == "ALQUILER"){
    var diasAlquiler = (prompt("Cuantos días necesitas alquilar?"));
}

var provedor = proveedor();
distCordoba();
distBuenosAires();

var precioAlquiler = (diasAlquiler * precioAlquilerDia)

if (alquilerCompra == "COMPRA"){
    console.log ("PRECIO DE COMPRA");
    console.log ("Compra - sin envio: $" + precioCompra + ".-");
    console.log ("Compra - con envio: $" + (precioCompra + precioEnvioCompra) + ".-");
    }
    else if (alquilerCompra == "ALQUILER"){
            console.log ("PRECIO DE ALQUILER");
            console.log ("Alquiler por " + diasAlquiler + " días - sin envio: $ " + precioAlquiler + ".-");
            console.log ("Alquiler por " + diasAlquiler + " días - con envio: $ " + (precioAlquiler + precioEnvioAlquiler) + ".-");
            console.log ("El costo de envio incluye retiro.");
        }