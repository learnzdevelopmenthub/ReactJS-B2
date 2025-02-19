
// Destructuring

// array
const numbers = [1, 2, 3, 4]

const [first, second, third, fourth] = numbers

console.log(first)

// object
const user = { name: "Raja", age: 25, country: {name: 'India'}}
const {name, age, country: { name: countryName }} = user

console.log(name)
console.log(countryName)


// rest and spread (...)
// spread
const newUser = {...user}

// rest 
function sum(...numbers) {
    // [1,2,3,4]
    return numbers.reduce((acc, num) => acc + num, 0)
}

let total = sum(1,2,3,4)
console.log(total)

import add, {sub} from "./math.js"

let add_result = add(1,2)
console.log(add_result)

let sub_result = sub(2,1)
console.log(sub_result)