var pokemonList = [
    {
        pokemonName: 'Bulbasaur',
        pokemonHeight: 0.7,
        pokemonType: ['Grass', 'Poison']
    },

    {
        pokemonName: 'Charmander',
        pokemonHeight: 0.6,
        pokemonType: 'Fire'
    },

    {
        pokemonName: 'Squirtle',
        pokemonHeight: 0.5,
        pokemonType: 'Water'
    },
];

for ( let i = 0; i < pokemonList.length; i++) {
    document.write('<h2>' + pokemonList[i].pokemonName + '</h2>' + ' Height: ' + pokemonList[i].pokemonHeight)
  if (pokemonList[i].pokemonHeight <= 0.5) {
    document.write(' (Wow that\'s real small!)' )
    }
}
