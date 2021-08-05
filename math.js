// Your Code Here.
const add = (x, y) => x + y

const multiply = (x, y) => {
    let result = 0
    for (let i = 0; i < y; i++) {
        result = add(result, x)
    }
    return result
}

