omdb.setKey('<yourkeyhere>'); //insert OMDB API key

//abbreviated labels for key DOM elements
const searchInput = ''; //TODO call document.querySelector on the relevant id;
const searchForm = ''; // TODO call document.querySelector on the relevant id;
const resultList = ''; // TODO call document.querySelector on the relevant id;

//Bonus!
//write a new URL + movie id hash to the address bar
//implicitly redirects user to movie-profile.html
let loadMovieProfile = (imdbId) => {
    //TODO
}

//focus the blinking cursor on the search input field
let initfocusOnSearch = () => searchInput.focus();

//connect the search form submit event to the callback
let initOnePageSearch = () => {
    //TODO, hook up event to callback function
    //the callback should call the API
};

//return just the first page of results using only omdb.js
//no support for pagination
let onePageSearch = (searchText) => {
    // TODO return promise from function
    //when promise is in-hand, let's work on it contents
    //extract nested array of search results
    //declare one string for all results...
    //loop over the string, adding templated movie results
    //push string to DOM, implicitly overwrite any content already there
}

/*
ONLOAD
*/
document.addEventListener("DOMContentLoaded", function(event) {
    initfocusOnSearch(); //call once on page load
    initOnePageSearch(); //call once on page load
});