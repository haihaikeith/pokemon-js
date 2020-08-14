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

// function to show modal
  function showModal() {
    var modalContainer = document.querySelector('#modal-container');
      modalContainer.classList.add('is-visible');

// clear all existing modal content
    modalContainer.innerHTML = '';

    var modal = document.createElement('div');
    modal.classList.add('modal');

// add new modal content
    var closeButton = document.createElement('button');
    closeButton.classList.add('modal-close');
    closeButton.innerText = 'Get out of here';

    var titleElement = document.createElement('p');
    titleElement.innerText = title;

    var buttonContent = document.createElement('p');
    buttonContent.innerText = text;

    modal.appendChild(closeButton);
    modal.appendChild(titleElement);
    modal.appendChild(buttonContent);
    modalContainer.appendChild(modal);
    modalContainer.classList.add('is-visible');

  // to show the close button
    var closeButton = document.createElement('button');
    closeButton.classList.add('modal-close');
    closeButton.innerText = 'Get out of here';
    closeButton.addEventListener('click', hideModal);
  }

      document.querySelector('#show-modal').addEventListener('click', () =>{
        showModal('Modal title', 'this should be some content');

  });

// hides modal
  function hideModal() {
    var modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible')
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
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }  
// ESC to close out modal
  window.addEventListener('keydown', (e) => {
    var modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('if-visible')) {
      hideModal();
    }
  });
// eventListener for clicking outside the modal
  modalContainer.addEventListener('click', (e) => {
    var target = e.target;
    if (target === modalContainer){
      hideModal();
    }
  });
  
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