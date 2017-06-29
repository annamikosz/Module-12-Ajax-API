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

      $titleTableCountry = $('<h3 class="title">Background information</h3>'),
      $row =  $('<li>').append($titleTableCountry),
      $tableCountry = $('<table>'),
      $rowCountryName = $('<tr class="name">'),
      $rowCountryCapital = $('<tr>'),
      $rowCountryRegion = $('<tr>'),
      $rowCountrySubregion = $('<tr>'),
      $rowCountryLanguages = $('<tr>'),
      $rowCountryTimezones = $('<tr>'),

      $cellName = $('<td>').text("Name: "),
      $cellNameCountry = $('<td>').text(item.name),
      $cellCapital = $('<td>').text("Capital: ").css("text-transform","uppercase"),
      $cellCapitalCountry = $('<td>').text(item.capital),

      $cellRegion = $('<td>').text("Region: ").css("text-transform","uppercase"),
      $cellRegionCountry = $('<td>').text(item.region),
      $cellSubregion = $('<td>').text("Subregion: " ).css("text-transform","uppercase"),
      $cellSubregionCountry = $('<td>').text(item.subregion),
      $cellLanguages = $('<td>').text("Languages: " ).css("text-transform","uppercase"),
      $cellLanguagesCountry = $('<td>').text(item.languages),
      $cellTimezones = $('<td>').text("Timezones: " ).css("text-transform","uppercase"),
      $cellTimezonesCountry = $('<td>').text(item.timezones),

      ($row).append($tableCountry).appendTo(countriesList);

      ($tableCountry).append($rowCountryName)
      .append($rowCountryCapital)
      .append($rowCountryRegion)
      .append($rowCountrySubregion)
      .append($rowCountryLanguages)
      .append($rowCountryTimezones);

      ($rowCountryName).append($cellName).append($cellNameCountry);
      ($rowCountryCapital).append($cellCapital).append($cellCapitalCountry);
      ($rowCountryRegion).append($cellRegion).append($cellRegionCountry);
      ($rowCountrySubregion).append($cellSubregion).append($cellSubregionCountry);
      ($rowCountryLanguages).append($cellLanguages).append($cellLanguagesCountry);
      ($rowCountryTimezones).append($cellTimezones).append($cellTimezonesCountry);
    });
  }


}); //end
