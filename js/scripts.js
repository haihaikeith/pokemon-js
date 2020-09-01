var pokemonRepository = (function () {
  var pokemonList = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=10';
  var $modalContainer = $('#modal-container');

// function to pull all pokemeon
  function getAll() {
      return pokemonList;
}
// function to add pokemon
  function add(pokemon) {
      pokemonList.push(pokemon);
}

// capitlize the names
const capitalize = (str) => str[0].toUpperCase() + str.substr(1);


// adds pokemon to array
function addListItem(pokemon) {
    var $buttonList = $('.pokemon-list');
    var $listItem = $('<li></li>');
    var $button = $('<button type="button" class="btn btn-dark row col-2">' + pokemon.name + '</button>');
      $button.click (function () {
          showDetails(pokemon)
      });
      $button.addClass('.pokemon-name');
      $listItem.append($button);
      $buttonList.append($listItem);
  }

// Other functions remain here

function loadList() {
    return $.ajax(apiUrl, {
        dataType: "json"})
          .then(function (responsJSON) {
              return responsJSON;
        }).then(function (json) {
            json.results.forEach(function (item) {
                var pokemon = {
                    name: capitalize(item.name),
                    detailsUrl: item.url
                   
        };
        add(pokemon);
      });
    }).catch(function (e) {6
      console.error(e);
    })
  }



// loads pokemon details
function loadDetails(item) {
  var url = item.detailsUrl;
    return $.ajax(url, {
      dataType: "json"})
        .then(function (responsJSON) {
          return responsJSON;
}).then(function (details) {
  console.log(details);
// add the details to the item
       item.imageUrl = details.sprites.front_default;
       item.height = details.height;
       item.type = details.type;
       item.id = details.id;
}).catch(function (e) {
  console.error(e);
});
}  





// function to show pokemon details
function showDetails(pokemon) {
  pokemonRepository.loadDetails(pokemon).then(function () {
    showModal(pokemon);
});
}


  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    addListItem: addListItem,
    showDetails: showDetails,
    loadDetails: loadDetails,
  };

})();



 

  function hideModal() {
    var $modalContainer = $('#modal-container');
    $modalContainer.removeClass('is-visible');
  }


  
  $(window).keydown(function(e){
    if (e.key === 'Escape' && $modalContainer.hasClass('is-visible')) {
      hideModal();
    }
    
  });

  $(modal).click(function(e) {
      var target = e.target;
        if (target !== modal) {
          hideModal();
          }
  });




pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListItem(pokemon);
});
});