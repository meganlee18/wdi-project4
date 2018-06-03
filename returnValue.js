var $cityName = $('#cityName')
var $textContainer = $('text-container')
var $cityDetails = $('#city-details')
var $aboutCountry = $('#about-country')
var $weather = $('#weather')
var $currency = $('#currency')


//return params
var search = location.search.substring(1);
console.log(search)

//convert to json object
var urlQueryParams = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
console.log(urlQueryParams)
//var cityName = urlQueryParams.city

//select the city within the object
$cityName.append(urlQueryParams.city)

var currencyCode = ""

var fetchCountryIdDoneHandler = function (res) {

  res.results.forEach(function (array) {
    //console.log(array.images[0].sizes.medium.url)
    //console.log(array.snippet)
    var countryName = array.country_id.toLowerCase()
    console.log(countryName)

    var $p = $('<p>')

    $p.append('<img src=' + array.images[0].sizes.medium.url + '>');
    $aboutCountry.append($p);
    $textContainer.append($aboutCountry);
    $aboutCountry.text('About the city')

    var $p2 = $('<p>')
    $p.append(array.snippet);
    $aboutCountry.append($p);
    $textContainer.append($aboutCountry);
  })
}

var fetchCurrencyAjaxCall = function (data) {
  var country = data.results[0].country_id.toLowerCase()
  // .then() returns a new promise
  return $.ajax({
    url: 'https://restcountries.eu/rest/v2/name/' + country,
  })
}

var fetchCurrencyDoneHandler = function (res) {
  currencyCode = res[0].currencies[0].code
  console.log(currencyCode)
}

var exchangeRateAjaxCall = function (data) {
  return $.ajax({
    url: 'https://free.currencyconverterapi.com/api/v5/convert',
    data: {
      q: 'AUD_' + currencyCode,
      compact: 'y',
    }
  });
}

var exchangeRateDoneHandler = function (res) {
  var rate = res['AUD_' + currencyCode].val
  console.log(rate)
  $currency.text('Exchange rate of 1 AUD to ' + currencyCode + ' :  ')

  var $p = $('<div style="color:orange;display:inline-block;">')

  $p.append(rate);
  $currency.append($p);
  $textContainer.append($currency);

};


var encodedCity = function (cityName) {
  //replaces spaces and special char in names, if any
  var cityNoUnderscore = (cityName).split(' ').join('_')
  return encodeURI(cityNoUnderscore).split("%").join('')
}

//When citybutton is clicked
$cityDetails.on("click", function (event) {

  var fetchCountryId = $.ajax({

    url: 'https://www.triposo.com/api/20180507/location.json',
    data: {
      id: encodedCity(urlQueryParams.city),
      count: '3',
      account: 'C995KGMT',
      token: 'w1iffxcmvhlgj9y76d6ass468nxzt07l'
    }
  }).done(fetchCountryIdDoneHandler);

  var fetchCurrency = fetchCountryId
    .then(fetchCurrencyAjaxCall)
    .done(fetchCurrencyDoneHandler);

  var fetchExchangeRates = fetchCurrency
    .then(exchangeRateAjaxCall)
    .done(exchangeRateDoneHandler);

  var fetchGeoLocation = $.ajax({

    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    data: {
      address: urlQueryParams.city,
      key: 'AIzaSyAiZ2zRbNnifbohJdLUd_JsmSlkFxEKk8c'
    }
  }).done(function (res) {
    res.results.forEach(function (array) {
      console.log(array.geometry.location.lat)
      console.log(array.geometry.location.lng)
    })
  });
  
  //converting input time to UNIX
  var date = new Date(myDate.value).getTime() / 1000

  var fetchWeather = fetchGeoLocation
    .then(function(data) {
        return $.ajax({
          url: 'https://api.darksky.net/forecast/SECRETKEY/'
          + data.results[0].geometry.location.lat + ',' 
          + data.results[0].geometry.location.lng + ','
          + date
          }
        );
    })
    .done(function(res) {
      //temperature returns in Farenheit
      console.log(res.currently.temperature)
      console.log(res.currently.summary)
      $weather.text('Weather in the month of ' + (myDate.value.split("-")[1]))

      //Need to convert to degrees celsius
      //Append to the body

      var $p3 = $('p')

      $p3.append(res.currently.temperature);
      $weather.append($p3);
      debugger;
      $textContainer.append($weather);
    });

});



  //1. Fetch Google Geolocation data, pass in city name
  //   https://maps.googleapis.com/maps/api/geocode/json?address='+ urlQueryParams.city + '&key=AIzaSyAiZ2zRbNnifbohJdLUd_JsmSlkFxEKk8c
  //2. Return lat and long details
  //3. Fetch DarkSky weather api, pass in lat and long, and timestamp (from input field)
  //   https://api.darksky.net/forecast/[key]/[latitude],[longitude],[time]
  //4. Return weather






