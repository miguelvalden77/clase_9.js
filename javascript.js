// reduce 
let numeros = [3, 6, 4, 5, 11, 5]
let strings = ["Hola", "que", "tal"]

let sumaArr = numeros.reduce((acc, value)=>{
    return acc + value
}, 6)

console.log(sumaArr)

let sumChar = strings.reduce((acc, value)=>{
    return acc + value.length
}, 0)

console.log(sumChar)


// Math.min / Math.max

console.log(Math.max(2, 6, 4, 99))
console.log(Math.min(2, 6, 4, 99))

// ... son parámetros infinitos
const maxNum = (...nums)=>{
    return Math.max(...nums)
}

console.log(maxNum(7, 4, 1))



// reduce
    // 1. Haz una función que reciba un array de números y devuelva la suba de todos ellos
    let numbers = [2, 3, 6, 8, 10]
    
    

    // 2. Toma la función anterior y haz que el resultado final le sean sumados otros 20.



// Math.min / Math.max
    // 3. Haz una función que reciba varios números como parámetro y devuelva el menor.



    // 4. Ahora haz que la función anterior reciba otro parámetro extra, un string que será "max" si se quiere devolver el mayor y "min" si se quiere devolver el menor.


    