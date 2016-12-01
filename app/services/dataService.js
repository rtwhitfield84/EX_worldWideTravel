// "use strict";

// Travel.service("dataService", function($http, $q) {
//   var deferred = $q.defer();
//   $http.get('data/guides.json').then(function(response) {
//     deferred.resolve(response.data);
//   });

//   this.getBooks = function() {
//     return deferred.promise;
//   };
// });



// let promise = $q((resolve, reject) => {
//   if ($http.get('data/guides.json')) {
//     resolve(response.data);
//   } else {
//     reject('Oops... something went wrong');
//   }
// });

// promise.then(data => {
//   console.log(data);
// });