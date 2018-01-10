export function apiCall(inputZip, inputDistance, addToPage){
  $.ajax({
    url: `https://bikeindex.org:443/api/v3/search?location=${inputZip}&distance=${inputDistance}&stolenness=proximity`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      console.log(`Success`);
    },
    complete: function(response){
      let bikeInfo = JSON.parse(response.responseText);
      addToPage(bikeInfo);
    },
    error: function() {
      console.error(`API Error`);
      console.error(`inputted zip:${inputZip}`);
      console.error(`inputted dist:${inputDistance}`);
    }
  }).done(function(){
    console.log(`done function`);
  });
}
