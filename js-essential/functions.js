// Function declaration vs expression? Hoisting?

// function getLarger(a, b){
//     if(a>b){
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log(getLarger(6,9));


// const getLarger = (a, b) => {
//     if(a>b){
//         return a;
//     } else {
//         return b;
//     }
// }


// const getLarger = (a, b) => a > b ? a : b

// function farewell(name){
//     return "Goodbye forever, " + name;
// }
// //console.log(farewell("name"))

// const farewellCompact = (name) => `Goodbye forever, ${name}`
// //console.log(farewellCompact("nomme"));

function countdown(start, stop, final){
    if(stop>start){
        for(let i=start; i<=stop; i++){
            if(i===stop){console.log(final); return;}
            console.log(i);
        }

    } else {
        for(let i=start; i>=stop; i--){
            if(i===stop){console.log(final); return;}
            console.log(i);
        }
    }
}
countdown(1, 10, "Done!");