// Your Code Here.

const checkIfNumber = (x) => { //x should be a number
    if(typeof x !== 'number'){
        return false;
    } else return true
}

const add = (x, y) => {
    if( !checkIfNumber(x) || !checkIfNumber(y)) { //check that both are a number
        return null
    }
    return x + y
} 

const multiply = (x, y) => {
    if(!checkIfNumber(y)) { //x is already checked on the add function
        return null
    }
    let result = 0
    for (let i = 0; i < y; i = add(i, 1)) {
        result = add(result, x)
    }
    return result
}

const power = (x, n) => {
    if(!checkIfNumber(n) || n < 0) { //x has to be a natural number
        return null
    }
    let result = 1
    for(let i = 0; i < n; i = add(i, 1)) {
        result = multiply(result, x)
    }
    return result
}

const factorial = (x) => {
    if(!checkIfNumber(x)) {
        return null
    }
    let result = 1

    for (let i = x; i > 0; i = add(i, -1)) { //makes i start at x and continue down 1
        result = multiply(result, i)
    }
    return result
}