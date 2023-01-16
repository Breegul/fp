function createPokemonCard(data){
    const container = document.querySelector("#pokedex");
    
    const card = document.createElement("div");
    card.className = "pokemon-card";

    const link = document.createElement("a");
    link.textContent = data["name"] /*+ " #" + data["id"]*/;
    link.href = data["url"];
    card.appendChild(link);

    console.log(data.url);
    // const img = document.createElement("img");
    // img.src = data["sprites"]["front_default"];
    // card.appendChild(img);

    container.appendChild(card);
}

// fetch("https://pokeapi.co/api/v2/pokemon/mareep")
//     .then(res => res.json())
//     .then((data) => {createPokemonCard(data);console.log(data);})
//     .catch(e=>console.log("A wild pokémon appears!"))

async function loadPokemon(offset) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
    const {results} = await res.json();
    console.log(results);
    results.forEach(p => {
        createPokemonCard(p);
        console.log(p);
    })
};
loadPokemon(0);