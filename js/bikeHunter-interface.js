import { apiCall } from './../js/bikeHunter.js';
$(document).ready(function(){
  let inputZip = `97201`;
  let inputDistance = `5`;
  console.log(`apiCall is:`);
  console.log(apiCall(inputZip, inputDistance));
    $('h1').text('');

});
