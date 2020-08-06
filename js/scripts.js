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

    document.write(pokemonRepository.getAll());
    

document.write('<h1> Some Pokemon stats!</h1>');

  pokemonList.forEach(function(currentItem){
  document.write('<p>' + currentItem.name + ' is ' + currentItem.height + ' meters tall!');
  
  if (currentItem.height <= 0.5) {
    document.write(' (Wow that\'s real small!)' )
    };

  if (currentItem.height >= 3.04){
      document.write(' (You play basketball?)')
  }
});



