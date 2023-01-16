const form = document.querySelector("#selection-section > form");
const fruitList = document.querySelector("#fruit-basket");

function createDeleteButton() {
    const button = document.createElement("button");
    button.innerText = "Remove";
    button.addEventListener("click", (e)=>{
        e.target.parentElement.remove();
    })
    return button;
}

function createFruitCard(name){
    const card = document.createElement("div");
    card.className = "fruit";

    const heading = document.createElement("h2");
    heading.innerText = name;
    card.appendChild(heading);

    const img = document.createElement("img");
    img.src = "https://placebear.com/180/180"
    card.appendChild(img);

    const p = document.createElement("p");
    p.innerText = "my mistress eyes are nothing like the sun, \ncoral is far more red than her lips red"
    card.appendChild(p);

    const delButton = createDeleteButton();
    card.appendChild(delButton);

    return card;
}



form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const fruit = e.target["fruit-name"].value;
    const card = createFruitCard(fruit);
    fruitList.appendChild(card);

    e.target["fruit-name"].value = "";
})
