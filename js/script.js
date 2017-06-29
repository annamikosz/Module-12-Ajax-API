$(function () {
	var url = 'https://restcountries.eu/rest/v1/name/',
    countriesList = $('#countries');

  $('#search').click(searchCountries);

  function searchCountries() {
    var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    
    $.ajax({
    url: url + countryName,
    method: 'GET',
    success: showCountriesList
    });
  }

  function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item){
  
      $('<li>').addClass('name').text("Name: " + item.name).appendTo(countriesList);
      $('<li>').text("Capital: "  + item.capital).appendTo(countriesList);
      $('<li>').text("Region: "  + item.region).appendTo(countriesList);
      $('<li>').text("Subregion: "  + item.subregion).appendTo(countriesList);
      $('<li>').text("Language: "  + item.languages).appendTo(countriesList);
      $('<li>').text("Timezones: "  + item.timezones).appendTo(countriesList);

    });
  }


}); //end
