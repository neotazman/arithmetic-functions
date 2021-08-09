// Your Code Here. 
const checkIfInteger = (x) =>  x === parseInt(x)

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
    if(!checkIfInteger(y) || !checkIfInteger(x)) { //the multiply function can't take decimals
        return null
    }

    let newX = x
    let newY = y

    if(x < 0 || y < 0) { //allows negative numbers to be entered but i'll take it out for the submission
        // if(x < 0 && y < 0) {
        //     newX = add(0, -x)
        //     newY = add(0, -y)
        // } else if (y < 0) {
        //     newX = y
        //     newY = x
        // }

        return null
    }

    let result = 0
    for (let i = 0; i < newY; i = add(i, 1)) {
        result = add(result, newX)
    }
    return result
}

const power = (x, n) => {
    if(!checkIfInteger(n) || n < 0) { //n has to be a whole number
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
    if(!checkIfNumber(x) || x < 0) {
        return null
    } else if(x === 0) {
        return x
    }
    let result = 1

    for (let i = x; i > 0; i = add(i, -1)) { //makes i start at x and continue down 1
        //if (i >= 22) return 'number too large to calculate' 
        result = multiply(result, i)
    }
    return result
}

const fibinacci = (n) => {
    if(!checkIfInteger(n)) {
        return null
    }
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

//add tests
console.log(add(2, 3))
console.assert(add(2, 3) === 2 + 3, "positive integers can't be added")

console.log(add(-2, 4.25))
console.assert(add(-2, 4.25) === -2 + 4.25, "negative numbers and decimals can't be added")

console.log(add("james", 3))
console.assert(add("james", 3) === "james3", "strings cannot be added")

//multiply tests
console.log(multiply(3, 47))
console.assert(multiply(3, 47) === 3 * 47, "positive integers cannot be added together")

console.log(multiply(45, 0))
console.assert(multiply(45, 0) === 45 * 0, "zero cannot be multiplied")

console.log(multiply(2.333, 65))
console.assert(multiply(2.333, 65) === 2.333 * 65, "decimals cannot be multiplied")

//power tests
console.log(power(4, 8))
console.assert(power(4, 8) === 4 ** 8, "positive integers cannot be multiplied")

console.log(power(45, 0))
console.assert(power(45, 0) === 45 ** 0, "zero cannot be an exponent")

console.log(power(15, -4))
console.assert(power(15, -4) === 15 ** -4, "negative numbers cannot be exponents")

//factorial tests
console.log(factorial(6))
console.assert(factorial(6) === 6 * 5 * 4 * 3 * 2 * 1, "positive integers cannot be factorials")

console.log(factorial(0))
console.assert(factorial(0) === 0, "zero cannot be a factorial")

console.log(factorial(4.2))
console.assert(factorial(4.2) === 4.2 * 4 * 3 * 2 * 1, "decimals cannot be factorials")

//fibinacci tests
console.log(fibinacci(39))
console.assert(fibinacci(39) === 39088169, "positive integers are not the placeholders of the fibinacci sequence")

console.log(fibinacci(0))
console.assert(fibinacci(0) === 0, "zero is not a place on the fibinacci sequence")

console.log(fibinacci(4.02))
console.assert(fibinacci(4.02) === 5.02 /*idk*/, "decimals are not places on the fibinacci sequence")