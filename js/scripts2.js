var pokemonRepository = (function () {
  var $pokemonList = $('.pokemon-list');
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  var $modalContainer = $('#modal-container');
  var $titleElement = $('h2');
  var $contentElement = $('p');
  var $pokemonImage = $('img');

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
    var $listItem = $('<li></li>');
    var $button = $('<button>' + pokemon.name, '</button>');
      $button.innerText = pokemon.name;
      $button.click (function () {
          showDetails(pokemon)
      });
  $button.addClass('.pokemon-name');
  $listItem.append($button);
  $buttonList.append($listItem);
  }

// Other functions remain here

  function loadList() {
    return $.ajax(apiUrl)
    .then(function(item) {
      $.each(item.results, function(item) {
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
    return $.ajax(url)
            .then(function (details) {
// add the details to the item
              item.imageUrl = details.sprites.front_default;
              item.height = details.height;
              item.type = details.type;
        })
            .catch(function (e) {
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
    $modalContainer.addClass('is-visible');
    $modalContainer.click(showModal);
  }

    var $modal = $('<div class="modal"</div>');
    // add modal content
    var $closeButtonElement = $('<button class="modal-close"</button>');
        $closeButtonElement.click(hideModal);
            
       

    $modal.append(closeButtonElement);
    $modal.append(titleElement)
    $modal.append(pokemonImage);
    $modal.append(contentElement);
    $modalContainer.append(modal);
    $modalContainer.addClass('is-visible');

  

  function hideModal() {
     $modalContainer.removeClass('is-visible');
  }

    
      
      $(window).keydown(function(e) {
		if (e.key === 'Escape' && $modalContainer.hasClass('is-visible')) {
			hideModal();
		}
  });
  
    $modalContainer.on('click', function(hideModal) {
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