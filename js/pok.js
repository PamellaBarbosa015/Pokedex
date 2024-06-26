const pokemonName = document.querySelector(".pokemon__name");
const pokemonNumber = document.querySelector(".pokemon__number");
const pokemonImage = document.querySelector(".pokemon__image");
const form = document.querySelector(".form");
const input = document.querySelector(".input__search");
const buttonPrev = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-next");

// conctar com API

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return (data);
    }
   
   
};

// Renderizar os dados da APi

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    if (condition) {
        pokemonNumber.innerHTML = data.id;

        pokemonName.innerHTML = data.name;
    
        pokemonImage.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
        input.value = "";
        console.log(data);  
    } else {
        pokemonName.textContent = "Não encontrado."
    }

};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase())

});
