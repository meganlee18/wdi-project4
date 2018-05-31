
var citiesBtn = document.querySelector(".cities-btn")
var foodBtn = document.querySelector(".food-btn")
var beachesBtn = document.querySelector(".beaches-btn")
var musuemsBtn = document.querySelector(".museums-btn")
var resultList = document.getElementById("result-list")
var searchResults = document.getElementById("search-results")


citiesBtn.addEventListener("click", function () {
  event.preventDefault();
  searchResults.innerHTML = "Searching..."
  console.log("Cities Button is clicked")


  var options = {
    url: 'https://www.triposo.com/api/20180507/location.json?tag_labels=city&account=C995KGMT&token=w1iffxcmvhlgj9y76d6ass468nxzt07l'
  }

  $.ajax(options).done(function (res) {
    res.results.forEach(function (array) {
      searchResults.innerHTML = "Choose a city!"
      console.log(array.name)

      var newListItem = document.createElement('li');
      newListItem.textContent = array.name
      resultList.appendChild(newListItem);
    })
  })
})



foodBtn.addEventListener("click", function () {
  event.preventDefault();

  //resultList.empty();

  searchResults.innerHTML = "Searching..."
  console.log("Food Button is clicked")


  var options = {
    url: 'https://www.triposo.com/api/20180507/tag.json?label=eatingout&count=7&offset=24&account=C995KGMT&token=w1iffxcmvhlgj9y76d6ass468nxzt07l'
  }

  $.ajax(options).done(function (res) {
    res.results.forEach(function (array) {
      searchResults.innerHTML = "Choose a city!"
      console.log(array.location_id)

      var newListItem = document.createElement('li');
      newListItem.textContent = array.location_id
      resultList.appendChild(newListItem);
    })
  })
})