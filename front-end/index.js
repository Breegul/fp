const button = document.querySelector("#clicker");
const display = document.querySelector("#readout");

button.addEventListener("click", (e) => {
    console.log("Clicked!");
    display.textContent = parseInt(display.textContent) + Math.ceil(Math.random()*10);
});