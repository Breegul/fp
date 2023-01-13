// ARRAYS

const simpleArray = [1, 2, 3, "hello"];
simpleArray[3] = "goodbye";
// console.log(simpleArray[3]);

// console.log(simpleArray);
// console.log(simpleArray.length);

// console.log(simpleArray.indexOf("goodbye"));


// OBJECTS

const martinObject = {
    firstName: "Martin",
    secondName: "Torrado Mouzo",
    age: 26,
    bloodType: "Unknown",
    location: "London",
    alive: true,
    favouriteFoods: ["Spaghetti bolognese", "Pizza", "Burrito"],
    fullname: function() {
        return this.firstName + " " + this.secondName;
    }
}

console.log(martinObject.fullname());


// console.log(martinObject.favouriteFoods);
// console.log(martinObject['bloodType']);

// if(martinObject.alive){
//     console.log(`Still breathing at the age of ${martinObject['age']}`);
// }

function countTarget(arr, target){
    let obj = {
        success: false,
        count: 0
    }
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]===target){
            obj.success = true;
            obj.count++;
        }
    }
    return obj;
}

console.log(countTarget([1, 1, 1], 1));
console.log(countTarget([1, 1, 1], 3));
console.log(countTarget([1, 1, "1"], 1));