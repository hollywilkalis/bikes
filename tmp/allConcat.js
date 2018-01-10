import { apiCall } from './../js/bikeHunter.js';
function addToPage(bikeInfo){
  console.log(bikeInfo);
  for (var i = 0; i < bikeInfo.bikes.length; i++) {
    $('h1').append(`<div class="bike-item">${bikeInfo.bikes[i].title}<br>Serial Number: ${bikeInfo.bikes[i].serial}<br>Stolen From: ${bikeInfo.bikes[i].stolen_location}</div>`);
  }
}
$(document).ready(function(){
  let inputZip = `97204`;
  let inputDistance = `5`;
  apiCall(inputZip, inputDistance, addToPage);
});
