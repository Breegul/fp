function createPokemonCard(data){

    const card = document.createElement("div");
    card.className = "pokemon-card";

    const link = document.createElement("a");
    link.textContent = data["name"]; /*+ " #" + data["id"]*/
    link.href = `./pokemon.html?name=${data["name"]}`;
    link.target = "blank";
    card.appendChild(link);

    console.log(data.url);
    const img = document.createElement("img");
    let imgSrc; 
    fetch(data.url).then(r => r.json()).then(d => imgSrc = d["sprites"]["front_default"]);
    console.log("imgsrc " + imgSrc);
    img.src = imgSrc
    card.appendChild(img);

    container.appendChild(card);
}


async function loadPokemon(offset) {
    container.replaceChildren();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
    const { results } = await res.json();
    results.forEach(p => {
        createPokemonCard(p);
    })
};


document.querySelector("#next").addEventListener("click", () => {
    offset += 10;
    loadPokemon(offset);
})

document.querySelector("#prev").addEventListener("click", () => {
    offset -= 10;
    loadPokemon(offset);
})

const container = document.querySelector("#pokedex");
let offset = 0;
loadPokemon(offset);