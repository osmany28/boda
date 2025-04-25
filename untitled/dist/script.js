// Establecer la fecha de la boda (ajustar según la fecha real)
var bodaDate = new Date("2025-06-30T15:00:00").getTime();

// Actualizar el contador cada segundo
var x = setInterval(function() {

    // Obtener la fecha y hora actual
    var now = new Date().getTime();

    // Calcular la diferencia entre la fecha de la boda y la fecha actual
    var distancia = bodaDate - now;

    // Calcular días, horas, minutos y segundos
    var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Mostrar los resultados en el HTML
    document.getElementById("dias").innerHTML = dias + "d";
    document.getElementById("horas").innerHTML = horas + "h";
    document.getElementById("minutos").innerHTML = minutos + "m";
    document.getElementById("segundos").innerHTML = segundos + "s";

    // Si la cuenta atrás ha terminado, mostrar un mensaje
    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("contador-regresivo").innerHTML = "¡Es el gran día!";
    }
}, 1000);