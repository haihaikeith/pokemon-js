var pokemonRepository = (function () {
    var pokemonList = [];
    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  

// function to pull all pokemeon
    function getAll() {
        return pokemonList;
}
// function to add pokemon
    function add(pokemon) {
        pokemonList.push(pokemon);
}

// Other functions remain here
  
    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }

// adds pokemon to array
    function addListItem(pokemon) {
      var buttonList = document.querySelector('.pokemon-list');
      var listItem = document.createElement('li');
      var button = document.createElement('button');
        button.innerText = pokemon.name;
        button.addEventListener('click', function () {
            showDetails(pokemon)
        });
    button.classList.add('pokemon-name');
    listItem.appendChild(button);
    buttonList.appendChild(listItem);
    }

// function to show pokemon details
    function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
        console.log(pokemon);
    });
  }

// loads pokemon details
    function loadDetails(item) {
      var url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
    }).then(function (details) {
// Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }  
    return {
      add: add,
      getAll: getAll,
      loadList: loadList,
      addListItem: addListItem,
      showDetails: showDetails,
      loadDetails: loadDetails
    };
  })();



pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
  });
});