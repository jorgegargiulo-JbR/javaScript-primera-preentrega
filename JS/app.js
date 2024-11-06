let chicos = 0;
let adoles = 0;
let mayores = 0;
let abuelos = 0;

let sigaIngresando = true;

while (sigaIngresando) {
    let ingreseEdad = prompt("Ingresa una edad (o escribe 'detener' para terminar):");

    if (ingreseEdad.toLowerCase() === 'detener') {
    sigaIngresando = false;
    } else {
    let edad = parseInt(ingreseEdad);

    if (isNaN(edad) || edad < 0) {
        alert("Por favor, ingresa una edad válida.");
        continue;
    }

    if (edad >= 0 && edad <= 12) {
        chicos++;
    } else if (edad >= 13 && edad <= 19) {
        adoles++;
    } else if (edad >= 20 && edad <= 64) {
        mayores++;
    } else if (edad >= 65) {
        abuelos++;
    }
  }
}

alert(`Resultados finales de cada grupo:
    
Niños ( hasta 12 años ) : ${chicos}
Adolescentes ( de 13 a 19 ) : ${adoles}
Adultos ( de 20 a 64 ) : ${mayores}
Mayores ( superiores a 65 ) : ${abuelos}`);
