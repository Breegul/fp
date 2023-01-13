function addTwo (a, b) {
    return a + b;
}

function renameDog(old, newName){
    return `${old} is now called ${newName}.`
}

//10 random number, if below 0 red, 100
function randNumColors(num){
    list = []
    for(let i=0; i<num; i++){
        list[i] = Math.ceil((Math.random()-0.5)*400);
    }
    return list
}

module.exports = {addTwo, renameDog, randNumColors}