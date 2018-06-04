var api_domain = 'http://localhost:5000/'
var $citiesBtn = $('.cities-btn')
var $foodBtn = $('.food-btn')
var $beachesBtn = $('.beaches-btn')
var $museumsBtn = $('.museums-btn')
var $searchResultsDiv = $('.search-results-div')


$citiesBtn.on("click", function(event) {

  event.preventDefault();
  $searchResultsDiv.empty();

  $('.buttons').hide()
  $searchResultsDiv.html("Searching...")
  console.log("Cities Button is clicked")
  $('#whereToGo').text("I want to go somewhere with cities")

  var options = {
    url: api_domain + 'triposo',
    data: {
      req_type: 'cities'
    }
  }

  $.ajax(options).done(function (res) {
    res = JSON.parse(res)
    $searchResultsDiv.html("Choose a city")
    res.results.forEach(function (array) {
      console.log(array.name)

      var $p = $('<p>')
      var $a = $('<a style= "font-size: 20px;">')
        //passing querystrings in params
        .attr('href', 'about.html?city=' + array.name)
        .text(array.name)

      $p.append($a);
      $searchResultsDiv.append($p);
    })
  })
})


$foodBtn.on("click", function(event){
  event.preventDefault();

  $searchResultsDiv.empty();

  $('.buttons').hide()
  $searchResultsDiv.html("Searching...") 
  console.log("Food Button is clicked")
  $('#whereToGo').text("I want to go somewhere with food")

  var options = {
    url: api_domain + 'triposo',
    data: {
      req_type: 'food'
    }
  }

  $.ajax(options).done(function (res) {
   res = JSON.parse(res)
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

  $('.buttons').hide()
  $searchResultsDiv.html("Searching...") 
  console.log("Beaches Button is clicked")
  $('#whereToGo').text("I want to go somewhere with beaches")

  var options = {
    url: api_domain + 'triposo',
    data: {
      req_type: 'beaches'
    }
  }

  $.ajax(options).done(function (res) {
    res = JSON.parse(res)
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

  $('.buttons').hide()
  $searchResultsDiv.html("Searching...") 
  console.log("Musuems Button is clicked")
  $('#whereToGo').text("I want to go somewhere with museums")

  var options = {
    url: api_domain + 'triposo',
    data: {
      req_type: 'museums'
    }
  }

  $.ajax(options).done(function (res) {
    res = JSON.parse(res)
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