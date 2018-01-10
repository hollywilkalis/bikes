export function apiCall(inputZip, inputDistance){
  let returnResponse;
  $.ajax({
    url: `https://bikeindex.org:443/api/v3/search?stolenness=stolen&location=${inputZip}&distance=${inputDistance}`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      response = returnResponse;
      console.log(`Success`);
    },
    error: function() {
      console.error(`API Error`);
      console.error(`inputted zip:${inputZip}`);
      console.error(`inputted dist:${inputDistance}`);
    }
  }).done(function(){
    console.log(`done function`);
    return returnResponse;
  });
}
