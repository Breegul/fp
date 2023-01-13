for (let i=0; i< 100; i++){
    console.log("AAAAAAAAAAAAAAAA")
}


while (false) {
    console.log("AAAAAAAAAAAAAAAA");
}


do {
    console.log("AAAAAAAAAAAAAAAA");
} while (false)



// FOR OF
const arr = [1,2,3];

for (i of arr) {
    console.log(i);
} //1 2 3

for (let [i, elem] of arr.entries()) {
    console.log(i, elem);
} // 0 1, 1 2, 2 3


// FOR IN
const obj = {
    a: 1,
    b: 2,
    c: 3
}

for (let prop in obj) {
    console.log(prop, obj[prop]);
} // a 1, b 2, c 3


// .forEach
arr.forEach( (e, i, ar) => {
    console.log(e + " is the current element at index " + i + ". full array: " + ar)
});


// MAP
const sqArr = arr.map(e => e**2);
console.log(sqArr);


// FILTER + REDUCE
console.log(arr.filter(e => e>1)); // 2 3

const animals = ["cat", "dog", "wasp", "bee", "horse", "snake", "platypus", "penguin", "rat", "anteater"]

const result = animals
                .filter(e => e.length > 4)  // keep elements > 4
                .sort()                     // sort alphabetical
                .map(e=>e.toUpperCase())    // make uppercase
                .reduce((a, b) => {         // combine, result goes into a
                 return a + " eats " + b;
                }, "init string, ");
 
console.log(result);