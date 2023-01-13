const prompt = require("prompt-sync")();

try {
    const userInput = +prompt("Enter a number below 10: ");
    if(typeof(userInput) != "number" || userInput>10 || isNaN(userInput)){
        throw Error("Input should be a number below 10");
    }
} catch (error) {
    console.log("Oop");
    console.log(error.message)
}
