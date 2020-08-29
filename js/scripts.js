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

// loads pokemon details
function loadDetails(item) {
  var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
}).then(function (details) {
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

  var $modalContainer = document.querySelector('#modal-container');

  function showModal(title, img, text) {
    // clear existing modal content
    $modalContainer.innerHTML = '';

    var modal = document.createElement('div');
    modal.classList.add('modal');

    // add modal content
    var closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    // hide the modal when 'Close' button is clicked
    closeButtonElement.addEventListener('click', hideModal);

    var titleElement = document.createElement('h2');
    titleElement.innerText = title;

    var contentElement = document.createElement('p');
    contentElement.innerText = text;

    var pokemonImage = document.createElement('img');
    pokemonImage.src = img;
    pokemonImage.classList.add('pokemon-image');

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement)
    modal.appendChild(pokemonImage);
    modal.appendChild(contentElement);
    $modalContainer.appendChild(modal);

    $modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', e => {
    if (
      e.key === 'Escape' &&
      $modalContainer.classList.contains('is-visible')
    ) {
      hideModal();
    }
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