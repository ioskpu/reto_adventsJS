/* El Reto
En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.
*/

//Solución propuesta
/*
Esta función llamada manufacture toma dos parámetros: gift y material. 
Recorre cada elemento en el array gift y verifica si todos los elementos de cada elemento están presentes en el array material. 
Si lo están, el elemento se agrega a un nuevo array llamado arr. Finalmente, se devuelve el array arr.
*/ 

function manufacture(gift, material) {
    let arr = []
    for (let i = 0; i < gift.length; i++) {
        let canManufacture = true;
        for (let j = 0; j < gift[i].length; j++) {
            if (!material.includes(gift[i][j])) {
                canManufacture = false
                break;
            }
        }
        if (canManufacture) {
            arr.push(gift[i]);
        }
    }
    return arr
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

console.log(manufacture(gifts, materials))