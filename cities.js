var $citiesBtn = $('.cities-btn')
var $foodBtn = $('.food-btn')
var $beachesBtn = $('.beaches-btn')
var $museumsBtn = $('.museums-btn')
var $searchResultsDiv = $('#search-results-div')


var fetchData = function () {

  event.preventDefault();
  $searchResultsDiv.empty();

  $searchResultsDiv.html("Searching...")
  console.log("Cities Button is clicked")

  var options = {
    url: 'https://www.triposo.com/api/20180507/location.json',
    data: {
      tag_labels: 'city',
      count:'7',
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
        //passing querystrings in params
        .attr('href', 'about.html?city=' + array.name)
        .text(array.name)

      $p.append($a);
      $searchResultsDiv.append($p);
    })
  })
}


$citiesBtn.on("click", function(event) {
  fetchData();
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
      .attr('href', 'about.html?city=' + array.location_id)
      .text(array.location_id)

      $p.append($a);
      $searchResultsDiv.append($p);
    })
  })
})




$beachesBtn.on("click", function(event){
  event.preventDefault();

  $searchResultsDiv.empty();

  $searchResultsDiv.html("Searching...") 
  console.log("Beaches Button is clicked")

  var options = {
    url: 'https://www.triposo.com/api/20180507/location.json',

    data: {
      child_tag_labels:'diving',
      diving_score:'>5',
      count: '7',
      offset:'20',
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
      .attr('href', 'about.html?city=' + array.name)
      .text(array.name)

      $p.append($a);
      $searchResultsDiv.append($p);
    })
  })
})



$museumsBtn.on("click", function(event){
  event.preventDefault();

  $searchResultsDiv.empty();

  $searchResultsDiv.html("Searching...") 
  console.log("Musuems Button is clicked")

  var options = {
    url: 'https://www.triposo.com/api/20180507/tag.json',
    data: {
      label: 'museums',
      count: '7',
      offset:'16',
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
      .attr('href', 'about.html?city=' + array.location_id)
      .text(array.location_id)

      $p.append($a);
      $searchResultsDiv.append($p);
    })
  })
})