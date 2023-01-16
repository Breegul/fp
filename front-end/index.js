const form = document.querySelector("#selection-section > form");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log(e.target["fruit-name"].value);
})