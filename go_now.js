var $citiesBtn = $('.cities-btn')
var $foodBtn = $('.food-btn')
var $beachesBtn = $('.beaches-btn')
var $musuemsBtn = $('.museums-btn')
var $searchResultsDiv = $('#search-results-div')


var fetchData = function() {

}




$citiesBtn.on("click", function(event){
  event.preventDefault();
   $searchResultsDiv.html("Searching...")
   console.log("Cities Button is clicked")

  var options = {
    url: 'https://www.triposo.com/api/20180507/location.json',
    data: {
      tag_labels: 'city',
      account: 'C995KGMT',
      token: 'w1iffxcmvhlgj9y76d6ass468nxzt07l'
    }
  }

  $.ajax(options).done(function (res) {
    $searchResultsDiv.html("Choose a city!")
    res.results.forEach(function (array) {
      console.log(array.name)

      var $p = $('<p>')
      var $a = $('<a>')
      .attr('href', 'about.html')
      .text(array.name)

      $p.append($a);
      $searchResultsDiv.append($p);
    })
  })
})


$foodBtn.on("click", function(event){
  event.preventDefault();

  $searchResultsDiv.empty();

  $searchResultsDiv.html("Searching...") 
  console.log("Food Button is clicked")

  var options = {
    url: 'https://www.triposo.com/api/20180507/tag.json',
    data: {
      label: 'eatingout',
      count: '7',
      offset:'24',
      account: 'C995KGMT',
      token: 'w1iffxcmvhlgj9y76d6ass468nxzt07l'
    }
  }

  $.ajax(options).done(function (res) {
    $searchResultsDiv.html("Choose a city!")
    res.results.forEach(function (array) {
      console.log(array.location_id)

      var $p = $('<p>')
      var $a = $('<a>')
      .attr('href', 'about.html')
      .text(array.location_id)

      $p.append($a);
      $searchResultsDiv.append($p);
    })
  })
})