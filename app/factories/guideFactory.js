"use strict";

Travel.factory("ItemStorage", ($http) => {

	let getBooks = () => {
			return new Promise ((resolve,reject) => {
		  $http.get('data/guides.json')
		  .success((dataObj) => {
		  	console.log("dataObj", dataObj);
		  resolve(dataObj);
		  })
		  .error((error) => {
		  reject(error);
	     });
		});

	};

	return  {getBooks};

});