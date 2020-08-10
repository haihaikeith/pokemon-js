var pokemonRepository = (function () {      // IIFE
    var pokemonList = [
    {
        name: 'Bulbasaur',
        height: 0.7,
        type: ['Grass', ' Poison']
    },

    {
        name: 'Charmander',
        height: 0.6,
        type: 'Fire'
    },

    {
        name: 'Squirtle',
        height: 0.5,
        type: 'Water'
    },
    {
        name: 'Ivysaur',
        height: 3.03,
        type: ['Grass', ' Poison']
    },
    {
        name: 'Charmeleon',
        height: 3.07,
        type: 'Fire'
    },
    {
        name: 'Wartortle',
        height: 3.03,
        type: 'Water'
    },
];

// function to pull all pokemeon
    function getAll() {
        return pokemonRepository;
    }
// function to add pokemon
    function add(pokemon) {
        pokemonRepository.push(pokemon);
    }
    
// function to add list for each pokemon


function getAll() {
    return pokemonList;
}

function add(pokemon) {
    pokemonList.push(pokemon);
}

function addListItem(pokemon) {
    var ul = document.querySelector('ul.pokemon-list');
    var listItem = document.createElement('li');
    var button = document.createElement('button');
    pokemon.innerText = pokemon.name;
    button.classList.add('pokemon-name');
    button.addEventListener('click', function () {
        showDetails(pokemon)
    });
    listItem.appendChild(button);
    ul.appendChild(listItem);
}

function showDetails(pokemon) {
    console.log(pokemon.name + ' ' + pokemon.height + ' ' + pokemon.type);
    alert(pokemon.name + ', ' + pokemon.height + 'm, ' + pokemon.type);
}

return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails
    };
 
})();

pokemonRepository.getAll().forEach( (pokemon) => {
    pokemonRepository.addListItem(pokemon);
});