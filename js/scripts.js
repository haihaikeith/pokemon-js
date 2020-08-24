var pokemonRepository = (function () {
  var $pokemonList = $('.pokemon-list');
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


// function to pull all pokemeon
  function getAll() {
      return pokemonList;
}
// function to add pokemon
  function add(pokemon) {
      pokemonList.push(pokemon);
}


// adds pokemon to array
function addListItem(pokemon) {
  var $buttonList = $('.pokemon-list');

  var $listItem = $('li');
  
  var $button = $('<button class="button-list">' + pokemon.name + '</button>');
  
  $button.on('click', function() {
    showDetails(pokemon);
  });
  
  $button.addClass('pokemon-name');  
  $listItem.append($button);
  $buttonList.append($listItem);
}

// Other functions remain here

  function loadList() {
    return $.ajax(apiUrl, {
        dataType: 'json'
    })
    .then(function (json) {
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

// loads pokemon details
function loadDetails(item) {
  var url = item.detailsUrl;
    return $.ajax(url, {
        dataType: 'json'
    })
    .then(function (details) {
// add the details to the item
  item.imageUrl = details.sprites.front_default;
  item.height = details.height;
  item.type = details.type;
}).catch(function (e) {
  console.error(e);
});
}  



// function to show pokemon details
function showDetails(pokemon) {
  pokemonRepository.loadDetails(pokemon).then(function () {
    showModal(pokemon.name, pokemon.imageUrl, pokemon.height);
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

  var $modalContainer = $('#modal-container');

  function showModal(item) {
    // clear existing modal content
    $modalContainer.HTML('', class='is-visible');

    var $modal = $('<div class="modal"</div>');
      
    // add modal content
    var $closeButtonElement = $('<button class="modal-close"</button>');
    $closeButtonElement.on('click', function(hideModal);

    var $titleElement = $('h2');
    $titleElement.html(item.name, class="modal-title");

    var $contentElement = $('p');
    $contentElement.html('Type: ' + item.types, class="modal");

    var $pokemonImage = $('img');
    $pokemonImage.html(item.imageUrl, class="pokemon-image");

    $modal.append(closeButtonElement);
    $modal.append(titleElement)
    $modal.append(pokemonImage);
    $modal.append(contentElement);
    $modalContainer.append(modal);
    $modalContainer.addClass('is-visible');

  }

  function hideModal() {
    var $modalContainer = $('#modal-container', 
    $modalContainer.removeClass('is-visible'));
  }

  var $modalContainer.on('click', function(showModal) => {
    ('modal title', 'this is content');
  });

  $modalContainer.addEventListener('click', e => {
    var target = e.target;
    if (target === $modalContainer) {
      hideModal();
    }
  });




pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListItem(pokemon);
});
});