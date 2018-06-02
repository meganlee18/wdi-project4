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

//select the city within the object
$cityName.append(urlQueryParams.city)

//When citybutton is clicked
$cityDetails.on("click", function(event) {
  
  $aboutCountry.text('About the country')
  $weather.text('Weather in')
  $currency.text('Currency Exchange (against AUD)')
})






