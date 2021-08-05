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
    let newX = x
    let newY = y
    if(x < 0 || y < 0) {
        if(x < 0 && y < 0) {
            newX = add(0, -x)
            newY = add(0, -y)
        } else if (y < 0) {
            newX = y
            newY = x
        }
    }

    let result = 0
    for (let i = 0; i < newY; i = add(i, 1)) {
        result = add(result, newX)
    }
    return result
}

const power = (x, n) => {
    if(!checkIfNumber(n) || n < 0) { //n has to be a whole number
        return null
    }
    let result = 1
    let equation = (x, n) => { //i was trying to do if n was negative, but it's too tough. might do it later for my own purposes
        for(let i = 0; i < n; i = add(i, 1)) {
            result = multiply(result, x)
        }        
    }
    equation(x, n)
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

const fibinacci = (n) => {
    if(n <= 1) {
        if(n < 0) {
            return null
        } else {
            return n
        }
    } else {
        let fibArray = [0, 1] //starting numbers
        for (i = 2; i < n; i = add(i, 1)) {
            let nextNum = add(fibArray[add(i, -1)], fibArray[add(i, -2)])
            fibArray.push(nextNum)
        }
        console.log(fibArray)
        return fibArray[n - 1]
    }
}