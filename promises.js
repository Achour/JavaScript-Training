
// a function to get a random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

// Promise example
let p = new Promise((resolve, reject) => {
    let a = getRandomInt(2)
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

// Executing the example

p.then((msg) => {
    console.log(msg)
}).catch((msg) => {
    console.log(msg)
})