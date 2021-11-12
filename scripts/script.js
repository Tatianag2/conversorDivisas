//Capturar el id de resultado para ocultarlo
document.getElementById("resultado").style.display="none";

//Inicialice las variables para usarlas en la funcion addOptions
var selectUno = document.getElementById("monedaOrigen");
var selectDos = document.getElementById("monedaCambio");
//Array con la lista de monedas
var moneda = ['Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
//Funcion que me aniade las options al documento html
function addOptions(array, select){
    var fragment = document.createDocumentFragment();
    //Recorrer el array e ir agregando los valores 
    array.forEach(function(item){
        var option = document.createElement("option");
        option.textContent = item;
        fragment.appendChild(option);

        select.appendChild(fragment);
    });
}
//Llamo la funcion y le agrego los parametros
addOptions(moneda, selectUno);
addOptions(moneda, selectDos);
//Variable con la que capturo las alertas
let elemento = document.getElementById("inputAlert")

//Funciones que me cambian atributos del input de alerta
function alertaPorCantidad(domElement){
    domElement.setAttribute("type","disabled");
    domElement.setAttribute("placeholder","Ingrese por favor la cantidad de dinero")
}

function alertaPorNum(domElement){
    domElement.setAttribute("type","disabled");
    domElement.setAttribute("placeholder","Ingrese por favor números");
}

//Captura de datos y funcionamiento del programa
function capturarDatos () {
    let monedaOrigen = document.getElementById("monedaOrigen").value;
    let monedaCambio = document.getElementById("monedaCambio").value;
    let cantidad = document.getElementById("cantidadDinero").value;
    
    if(isNaN(cantidad)){
        alertaPorNum(elemento);
    } else if(cantidad === ""){
        alertaPorCantidad(elemento);
    }else {
        convertir(monedaOrigen, monedaCambio, cantidad);
        elemento.setAttribute("type","hidden"); //Vuelvo a esconder las alertas cuando se ingresen valores correctos
    }
}

//Funcion de conversion
function convertir(monedaOrigen, monedaCambio, cantidad){
    document.getElementById("resultado").style.display="block";
    
    let monedaConvertida = 0;
    //Equivalencias tomadas el dia 10 de noviembre del 2021

    //Conversion dolar
    if(monedaOrigen === "Dolar" && monedaCambio === "Peso Mexicano"){
        monedaConvertida = cantidad * 20.64;
    } else if(monedaOrigen === "Dolar" && monedaCambio === "Peso Colombiano"){
        monedaConvertida = cantidad * 3877.5;
    } else if(monedaOrigen === "Dolar" && monedaCambio === "Euro"){
        monedaConvertida = cantidad * 0.87;
    } else if(monedaOrigen === "Dolar" && monedaCambio === "Libra Esterlina"){
        monedaConvertida = cantidad * 0.75;
    }
    //Conversion peso mexicano
    else if(monedaOrigen === "Peso Mexicano" && monedaCambio === "Dolar"){
        monedaConvertida = cantidad * 0.048;
    } else if(monedaOrigen === "Peso Mexicano" && monedaCambio === "Peso Colombiano"){
        monedaConvertida = cantidad * 188.05;
    } else if(monedaOrigen === "Peso Mexicano" && monedaCambio === "Euro"){
        monedaConvertida = cantidad * 0.042;
    } else if(monedaOrigen === "Peso Mexicano" && monedaCambio === "Libra Esterlina"){
        monedaConvertida = cantidad * 0.036;
    }
    //Conversion peso colombiano
    else if(monedaOrigen === "Peso Colombiano" && monedaCambio === "Dolar"){
        monedaConvertida = cantidad * 0.00026;
    } else if(monedaOrigen === "Peso Colombiano" && monedaCambio === "Peso Mexicano"){
        monedaConvertida = cantidad * 0.0053;
    } else if(monedaOrigen === "Peso Colombiano" && monedaCambio === "Euro"){
        monedaConvertida = cantidad * 0.00022;
    } else if(monedaOrigen === "Peso Colombiano" && monedaCambio === "Libra Esterlina"){
        monedaConvertida = cantidad * 0.00019;
    } 
    //Conversion euro
    else if(monedaOrigen === "Euro" && monedaCambio === "Dolar"){
        monedaConvertida = cantidad * 1.15;
    } else if(monedaOrigen === "Euro" && monedaCambio === "Peso Mexicano"){
        monedaConvertida = cantidad * 23.69;
    } else if(monedaOrigen === "Euro" && monedaCambio === "Peso Colombiano"){
        monedaConvertida = cantidad * 4451.78;
    } else if(monedaOrigen === "Euro" && monedaCambio === "Libra Esterlina"){
        monedaConvertida = cantidad * 0.86;
    } 
    //Conversion libra esterlina
    else if(monedaOrigen === "Libra Esterlina" && monedaCambio === "Dolar"){
        monedaConvertida = cantidad * 1.34;
    } else if(monedaOrigen === "Libra Esterlina" && monedaCambio === "Peso Mexicano"){
        monedaConvertida = cantidad * 27.66;
    } else if(monedaOrigen === "Libra Esterlina" && monedaCambio === "Euro"){
        monedaConvertida = cantidad * 1.17;
    } else if(monedaOrigen === "Libra Esterlina" && monedaCambio === "Peso Colombiano"){
        monedaConvertida = cantidad * 5197.03;
    } else {
        monedaConvertida = cantidad;
    }
    //Adiciono el valor del resultado al elemento de html
    document.getElementById("inputResultado").value = monedaConvertida;
}