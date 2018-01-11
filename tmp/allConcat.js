import { apiCallPromise } from './../js/bikeHunter.js';
// import { apiCallAjax } from './../js/bikeHunter.js';

function addToPage(bikeInfo){
  console.log(bikeInfo);
  for (var i = 0; i < bikeInfo.bikes.length; i++) {
    console.log(i);
    var convertDate = moment.unix(bikeInfo.bikes[i].date_stolen).calendar(); // or end in .format("MM-DD-YYYY HH:mm")
    console.log(convertDate);
    $('div').append(`<p class="bike-item">Bike Description: ${bikeInfo.bikes[i].title}<br>Serial Number: ${bikeInfo.bikes[i].serial}<br>Stolen From: ${bikeInfo.bikes[i].stolen_location}<br>Date Stolen: ${convertDate}</p>`);
  }
}

$(document).ready(function(){
  $("form#bikeSearch").submit(function(event) {
    event.preventDefault();
    let inputZip = $("#location").val();
    let inputDistance = $("#distance").val();
    apiCallPromise(inputZip, inputDistance, addToPage);
  });
});
