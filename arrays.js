
function sumaArray(array){
    let suma = 0;
    for (let i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma;
}

console.log(sumaArray([1, 2, 3, 4, 5]));

function promedioArray(array){
    let suma = 0
    for (let i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma/array.length;
}

console.log(promedioArray([1, 2, 3, 4, 5]));

function upperCaseArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i].toUpperCase());
    }
    return newArray;
}

console.log(upperCaseArray(["mono","perro","raton","gato"]));

function parArray(array){
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        if (array[i]%2 == 0){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function parArray(array){
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        if (array[i]%2 == 0){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(parArray([1, 2, 3, 4, 5]))