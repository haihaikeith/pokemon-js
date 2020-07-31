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
];


document.write('<h1> Some Pokemon stats!</h1>');

  pokemonList.forEach(function(currentItem){
  document.write('<p>' + currentItem.name + ' is ' + currentItem.height + ' meters tall!');
  
  if (currentItem.height <= 0.5) {
    document.write(' (Wow that\'s real small!)' )
    }
});



