var topping = prompt ("Seleccione topping");
var precio;
var precioFinal;
var helado = 30;


if (topping.toLowerCase() == "oreo") {
    precio = 10;
}else if(topping.toLowerCase() == "kitkat"){
    precio = 15;
}else if(topping.toLowerCase() == "kinder"){
    precio = 25;
}else{
    alert("No tenemos este topping")
    precio = 0;
    }

precioFinal = precio + helado

alert ("El helado cuesta $" + precioFinal)
