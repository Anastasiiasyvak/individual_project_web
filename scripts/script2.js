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

        // Оновіть список "parfum-list" після фільтрації.
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
      });
}