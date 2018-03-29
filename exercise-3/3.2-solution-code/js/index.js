omdb.setKey('<yourkeyhere>'); //insert OMDB API key

//abbreviated labels for key DOM elements
const searchInput = document.querySelector('#search-form-input');
const searchForm = document.querySelector('#search-form');
const resultList = document.querySelector('#movies');

//input validation function; don't send junk to the API
let isValid = (input) => {
    if (typeof input != "undefined" &&
        typeof input.valueOf() === "string" &&
        input.length > 0) {
        return true;
    } else {
        return false;
    }
}

//Bonus!
//write a new URL + movie id hash to the address bar
//implicitly redirects user to movie-profile.html
let loadMovieProfile = (imdbId) => {
    location.assign(`movie-profile.html#${encodeURIComponent(imdbId)}`);
}

//focus the blinking cursor on the search input field
let initfocusOnSearch = () => searchInput.focus();

//connect the search form submit event to the API call
let initOnePageSearch = () => {
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        onePageSearch(searchInput.value);
    })
};

//return just the first page of results using only omdb.js
//no support for pagination
let onePageSearch = (searchText) => {
    omdb.getMovieList(searchText) //return promise from function
        .then((response) => { //when promise is in-hand, let's work on it contents
            let movies = response.Search; //extract nested array of search results
            let output = ''; //declare our string...
            movies.forEach(movies => {
                output += template.movieCard(movies); //populate our string
            });
            resultList.innerHTML = output; //push string to DOM, implicitly overwrite any content already there
        })
}

/*
ONLOAD
*/
document.addEventListener("DOMContentLoaded", function(event) {
    initfocusOnSearch(); //call once on page load
    initOnePageSearch(); //call once on page load
});