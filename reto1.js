//Esta función llamada findFirstRepeated toma un arreglo gifts como entrada. 
//Itera sobre el arreglo y lleva un seguimiento del conteo de cada elemento en un objeto llamado count. 
//Cuando encuentra un elemento que ya ha sido visto, devuelve ese elemento. 
//Si no se encuentra ningún elemento repetido, devuelve -1.

function findFirstRepeated(gifts) {
    let count = {}
    for (let i = 0; i < gifts.length; i++) {
        if (count[gifts[i]]) {
            count[gifts[i]]++;
            if (count[gifts[i]] >= 2) {
                return gifts[i]
        }
        } else {
            count[gifts[i]] = 1
        }
    }
    return -1
}

const giftIds = [2, 1, 6, 5, 3, 7]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId)