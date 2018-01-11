export function apiCallAjax(searchTerm, perPage, addToPage, apiKey){
  $.ajax({
    url: `https://core.ac.uk:443/api-v2/articles/search/${searchTerm}?page=1&pageSize=${perPage}&metadata=true&fulltext=false&citations=false&similar=false&duplicate=false&urls=true&faithfulMetadata=false&apiKey=${apiKey}`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      console.log(`Success`);
    },
    complete: function(response){
      let articleInfo = JSON.parse(response.responseText);
      addToPage(articleInfo);
      console.log(`complete function`);
    },
    error: function() {
      console.error(`API Error`);
      // console.error(`inputted zip:${inputZip}`);
      // console.error(`inputted dist:${inputDistance}`);
    }
  }).done(function(){
    console.log(`done function`);
  });
}
//AJAX API CALL FOR BIKE PROJECT
// export function apiCallAjax(inputZip, inputDistance, addToPage){
//   $.ajax({
//     url: `https://bikeindex.org:443/api/v3/search?location=${inputZip}&distance=${inputDistance}&stolenness=proximity`,
//     type: 'GET',
//     data: {
//       format: 'json'
//     },
//     success: function(response) {
//       console.log(`Success`);
//     },
//     complete: function(response){
//       let bikeInfo = JSON.parse(response.responseText);
//       addToPage(bikeInfo);
//     },
//     error: function() {
//       console.error(`API Error`);
//       console.error(`inputted zip:${inputZip}`);
//       console.error(`inputted dist:${inputDistance}`);
//     }
//   }).done(function(){
//     console.log(`done function`);
//   });
// }

//PROMISE API CALL FOR BIKE PROJECT
// export function apiCallPromise(inputZip, inputDistance, addToPage) {
//   let promise = new Promise(function(resolve, reject){
//     let request = new XMLHttpRequest();
//     let url = `https://bikeindex.org:443/api/v3/search?location=${inputZip}&distance=${inputDistance}&stolenness=proximity`;
//     request.onload = function() {
//       if (this.status === 200) {
//         resolve(request.response);
//       } else {
//         reject(Error(request.statusText));
//       }
//     }
//     request.open("GET", url, true);
//     request.send();
//   });
//
//   promise.then(function(response){
//     let bikeInfo = JSON.parse(response);
//     addToPage(bikeInfo);
//   });
// }
