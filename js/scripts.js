var pokemonRepository = (function () {
    var pokemonList = [
    {
        name: 'Bulbasaur',
        height: 0.7,
        type: ['Grass', 'Poison']
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
        type: ['Grass', 'Poison']
    },
    {
        name: 'Charmeleon',
        height: 3.07,
        type: 'Fire'
    },
    {
        name: 'Wartotle',
        height: 3.03,
        type: 'Water'
    },
];


    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    

    return {
        getAll: getAll,
        add: add
        };
     
    })();

document.write('<h1> Some Pokemon stats!</h1>');

pokemonRepository.getAll().forEach(function (pokemon) {
    var ul = document.querySelector(ul),
    var listItem = document.createElement('li'),
    var button = document.createElement('button')
        button.innerText = pokemon.name,
        button.classList.add('pokemon-name'),
        listItem.appendChild(button),
        ul.appendChild(listItem);
  }
});



