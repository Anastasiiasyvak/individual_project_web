var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


function filterParfums() {
    var priceMin = parseFloat(document.getElementById("price-min").value);
    var priceMax = parseFloat(document.getElementById("price-max").value);
    var brandFilter = document.getElementById("brand-filter").value;
    var countryFilter = document.getElementById("country-filter").value;

    fetch('https://raw.githubusercontent.com/Anastasiiasyvak/individual_project_web/master/new.json')
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Data loading error');
        }
        return response.json();
      })
      .then(function(data) {
        var filteredParfums = data.filter(function(parfum) {
          var meetsPriceCriteria = (parfum.price >= priceMin && parfum.price <= priceMax);
          var meetsBrandCriteria = (brandFilter === "All" || parfum.brand === brandFilter);
          var meetsCountryCriteria = (countryFilter === "All" || parfum.countryOrigin === countryFilter);

          return meetsPriceCriteria && meetsBrandCriteria && meetsCountryCriteria;
        });

        console.log(filteredParfums);

        var parfumList = document.getElementById("parfum-list");
        parfumList.innerHTML = "";

        filteredParfums.forEach(function(parfum) {
          var parfumElement = document.createElement("div");
          parfumElement.classList.add("parfum");
          parfumElement.innerHTML = `
            <h3>${parfum.name}</h3>
            <p>Brand: ${parfum.brand}</p>
            <p>Country of Origin: ${parfum.countryOrigin}</p>
            <p>Price: ${parfum.price} UAH</p>
          `;
          parfumList.appendChild(parfumElement);
        });
      })
      .catch(function(error) {
        console.error(error);
      });var favorites = []; 

      function addToFavorites(button) {
        var parfumElement = button.parentElement;
        var parfumName = parfumElement.querySelector("h3").textContent;
      
        if (!favorites.includes(parfumName)) {
          favorites.push(parfumName);
          updateFavoritesList();
        }
      }
      
      function removeFromFavorites(parfumName) {
        var index = favorites.indexOf(parfumName);
        if (index !== -1) {
          favorites.splice(index, 1);
          updateFavoritesList();
        }
      }
      
      function updateFavoritesList() {
        var favoritesList = document.getElementById("favorites-items");
        favoritesList.innerHTML = "";
      
        favorites.forEach(function (parfumName) {
          var listItem = document.createElement("li");
          listItem.textContent = parfumName;
          var removeButton = document.createElement("button");
          removeButton.textContent = "Видалити";
          removeButton.onclick = function () {
            removeFromFavorites(parfumName);
          };
          listItem.appendChild(removeButton);
          favoritesList.appendChild(listItem);
        });
      }
      
}


var favorites = []; 

function addToFavorites(parfumName) {
  if (!favorites.includes(parfumName)) {
    favorites.push(parfumName);
    updateFavoritesList();
  }
}

function removeFromFavorites(parfumName) {
  var index = favorites.indexOf(parfumName);
  if (index !== -1) {
    favorites.splice(index, 1);
    updateFavoritesList();
  }
}

function updateFavoritesList() {
  var favoritesList = document.getElementById("favorites-items");
  favoritesList.innerHTML = "";

  favorites.forEach(function (parfumName) {
    var listItem = document.createElement("li");
    listItem.textContent = parfumName;
    var removeButton = document.createElement("button");
    removeButton.textContent = "Видалити";
    removeButton.onclick = function () {
      removeFromFavorites(parfumName);
    };
    listItem.appendChild(removeButton);
    favoritesList.appendChild(listItem);
  });
}

function updateParfumList(parfums) {
  var parfumList = document.getElementById("parfum-list");
  parfumList.innerHTML = "";

  parfums.forEach(function (parfum) {
    var parfumElement = document.createElement("div");
    parfumElement.classList.add("parfum");
    parfumElement.innerHTML = `
      <h3>${parfum.name}</h3>
      <p>Brand: ${parfum.brand}</p>
      <p>Country of Origin: ${parfum.countryOrigin}</p>
      <p>Price: ${parfum.price} UAH</p>
      <button onclick="addToFavorites('${parfum.name}')">Додати в корзину</button>
    `;
    parfumList.appendChild(parfumElement);
  });
}

function filterParfums() {
  var priceMin = parseFloat(document.getElementById("price-min").value);
  var priceMax = parseFloat(document.getElementById("price-max").value);
  var brandFilter = document.getElementById("brand-filter").value;
  var countryFilter = document.getElementById("country-filter").value;

  fetch('https://raw.githubusercontent.com/Anastasiiasyvak/individual_project_web/master/new.json')
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Data loading error');
      }
      return response.json();
    })
    .then(function (data) {
      var filteredParfums = data.filter(function (parfum) {
        var meetsPriceCriteria = (parfum.price >= priceMin && parfum.price <= priceMax);
        var meetsBrandCriteria = (brandFilter === "All" || parfum.brand === brandFilter);
        var meetsCountryCriteria = (countryFilter === "All" || parfum.countryOrigin === countryFilter);

        return meetsPriceCriteria && meetsBrandCriteria && meetsCountryCriteria;
      });

      updateParfumList(filteredParfums);
    })
    .catch(function (error) {
      console.error(error);
    });
}


var favorites = [];

if (localStorage.getItem('favorites')) {
  favorites = JSON.parse(localStorage.getItem('favorites'));
  updateFavoritesList(); 
}

function addToFavorites(parfumName) {
  if (!favorites.includes(parfumName)) {
    favorites.push(parfumName);
    updateFavoritesList();
    saveFavoritesToLocalStorage();
  }
}

function removeFromFavorites(parfumName) {
  var index = favorites.indexOf(parfumName);
  if (index !== -1) {
    favorites.splice(index, 1);
    updateFavoritesList();
    saveFavoritesToLocalStorage();
  }
}

function saveFavoritesToLocalStorage() {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function updateFavoritesList() {
  var favoritesList = document.getElementById("favorites-items");
  favoritesList.innerHTML = "";

  favorites.forEach(function (parfumName) {
    var listItem = document.createElement("li");
    listItem.textContent = parfumName;
    var removeButton = document.createElement("button");
    removeButton.textContent = "Видалити";
    removeButton.onclick = function () {
      removeFromFavorites(parfumName);
    };
    listItem.appendChild(removeButton);
    favoritesList.appendChild(listItem);
  });
}


filterParfums();
