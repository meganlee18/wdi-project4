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
var urlQueryParams = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
console.log(urlQueryParams)
//var cityName = urlQueryParams.city

//select the city within the object
$cityName.append(urlQueryParams.city)

//When citybutton is clicked
$cityDetails.on("click", function(event) {

  $aboutCountry.text('About the country')

  var options = {
    url: 'https://www.triposo.com/api/20180507/location.json',
    data: {
      id: urlQueryParams.city,
      count:'3',
      account: 'C995KGMT',
      token: 'w1iffxcmvhlgj9y76d6ass468nxzt07l'
    }
  }

  $.ajax(options).done(function (res) {
    res.results.forEach(function (array) {
      console.log(array.images[0].sizes.medium.url)
      console.log(array.snippet)
    })
  })

  //NEED TO APPEND TO BODY NEXT

  $weather.text('Weather in the month of ' + (myDate.value.split("-")[1]))
  $currency.text('Currency Exchange (against AUD)')
})






