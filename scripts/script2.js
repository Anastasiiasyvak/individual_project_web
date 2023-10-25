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
    var removeIcon = document.createElement("i");
    removeIcon.classList.add("gg-close-o");
    removeIcon.style.cursor = "pointer";
    removeIcon.onclick = function () {
      removeFromFavorites(parfumName);
    };
    listItem.appendChild(removeIcon);
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
      <p>Description: ${parfum.description}</p>
      <img src="${parfum.image}" alt="${parfum.name}">
      <i class="gg-heart" style="cursor: pointer;" onclick="addToFavorites('${parfum.name}')"></i>
      `;
    parfumList.appendChild(parfumElement);
  });
}

function filterParfums() {
  var priceMin = parseFloat(document.getElementById("price-min").value);
  var priceMax = parseFloat(document.getElementById("price-max").value);
  var brandFilter = document.getElementById("brand-filter").value;
  var countryFilter = document.getElementById("country-filter").value;

  fetch('https://raw.githubusercontent.com/Anastasiiasyvak/individual_project_web/master/ourParfumData.json')
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

filterParfums();

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (window.pageYOffset > 50) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

const instagramIcon = document.getElementById("instagram-icon");
const instagramLink = "https://www.instagram.com/p/CyVc-sVIG6MuxB5M6xLv2QzJjNAefb_MUF9IfA0/?igshid=MzRlODBiNWFlZA==";

instagramIcon.addEventListener("click", function () {
  window.open(instagramLink, "_blank");
});

const facebookLink = "https://uk-ua.facebook.com/";

const facebookIcon = document.querySelector(".gg-facebook"); 

facebookIcon.addEventListener("click", function () {
  window.open(facebookLink, "_blank");
});

const chanelIcon = document.getElementById("chanel-icon");

chanelIcon.addEventListener("click", function () {
  const chanelLink = "https://www.chanel.com/#";
  window.open(chanelLink, "_blank");
});

document.addEventListener("DOMContentLoaded", function() {
  const formButton = document.getElementById("formButton");

  formButton.addEventListener("click", function() {
      window.location.href = "index1.html";
  });
});


var favoritesVisible = false;

document.addEventListener("DOMContentLoaded", function() {
  const favoritesList = document.getElementById("favorites-list");

  document.querySelector(".gg-shopping-cart").addEventListener("click", function () {
    favoritesVisible = !favoritesVisible;
    if (favoritesVisible) {
      favoritesList.style.display = "block";
    } else {
      favoritesList.style.display = "none";
    }
  });
});