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
    for (let i = 0; i < y; i++) {
        result = add(result, x)
    }
    return result
}

