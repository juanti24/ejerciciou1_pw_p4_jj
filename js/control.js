function comprueba(comp) {
    let id = comp.id;
    document.getElementById('pkmn').src = '../img/pcolor.jpg';
    if (id == 'op4') {
        document.getElementById('mnsj').innerHTML = 'Felicitaciones, has seleccionado la opción correcta';
        document.getElementById('ttl').className = 'correcta';
       

    } else {
        document.getElementById('mnsj').innerHTML = 'Pokémon incorrecto, la respuesta es: excadrill';
        document.getElementById('ttl').className = 'incorrecta';
    }
}

function reiniciar() {
    document.getElementById("mnsj").innerHTML="Pulsa Un botón";

    document.getElementById('pkmn').src = '../img/pnegro.jpg';
    
    document.getElementById('ttl').className = 'reinicie';

    
}


function intentos(intento) {
    switch (intento) {
        case 1:
            document.getElementById('puntajeid').innerHTML="Puntaje: 5";
            break;
        case 2:
            document.getElementById('puntajeid').innerHTML="Puntaje: 3";
            break;
        case 3:
            document.getElementById('puntajeid').innerHTML="Puntaje: 1";
            break;
        default:
            reiniciar();
            break;
    }
}