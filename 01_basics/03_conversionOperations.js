let score = "9abc"

console.log(typeof score);
console.log(typeof (score));


//to convert into the number:

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)

//because we put abc with the orginal no. 9 so 9abc is not a number so the 0utput is NaN = not a number.
// true = 1, false = 0

let isLoggedIn = "vinay"


let boolienLoggedIn = Boolean(isLoggedIn)
console.log(typeof boolienLoggedIn);
console.log(boolienLoggedIn);

// 1 = true, 0 = false
// "" = false
// "vinay" (name) = true




//we can convert into string also

let someNumber = 34

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

