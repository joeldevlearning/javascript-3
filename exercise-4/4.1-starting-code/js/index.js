/*
SUMMARY
DEPENDS ON: omdb.js, template.js, and movie-search.js
FUNCTIONALITY: Supports searching movies by titles; connects various DOM events and elements to search functionality
USED BY: none, but required for index.html
*/

/*
DEFINITIONS
*/
omdb.setKey('<yourkeyhere>');

const m = new MovieSearch(omdb); //create a singleton for searching movies

//abbreviated labels for key DOM elements
const searchInput = document.querySelector('#search-form-input');
const searchForm = document.querySelector('#search-form');
const resultList = document.querySelector('#movies');
const counter = //TODO select our counter

    let updateCounter = (returned, total) => {
        //TODO return a string that tells us how many results we are viewing and what the total results are
    }

let displayMsgNoResults = () => {
    counter.innerHTML = `Sorry, no results found`;
}

let displayError = (error) => {
    counter.innerHTML = error;
}

//helper function
let isValid = (input) => {
    if (typeof input != "undefined" &&
        typeof input.valueOf() === "string" &&
        input.length > 0) {
        return true;
    } else {
        return false;
    }
}

//write a new URL + movie id hash to the address bar
//implicitly redirects user to movie-profile.html
let loadMovieProfile = (imdbId) => {
    location.assign(`movie-profile.html#${encodeURIComponent(imdbId)}`);
}

//focus the blinking cursor on the search input field
let initfocusOnSearch = () => searchInput.focus();

//connect the search form submit event to the 
let initOnePageSearch = () => { //connect the search
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        onePageSearch(searchInput.value);
    })
};

//alternative search function, supports pagination, *CONFLICTS* with OnePageSearch
let initMultiPageSearch = () => {
    //hook up the submit event, like before
    //call reset page, because each time we search we want to erase the previous results
    //check if the search box input is valid before calling the callback
    //if results are NOT valid, call the displayMsgNoResults() function
};


let resetPage = () => {
    counter.innerHTML = '';
    resultList.innerHTML = '';
};


//return just the first page of results using only omdb.js
//no support for pagination
let onePageSearch = (searchText) => {
    omdb.getMovieList(searchText) //return promise from function
        .then((response) => { //when promise is in-hand, let's work on it contents
            let movies = response.Search; //extract nested array of search results
            updateCounter(movies.length, response.totalResults); //update the numbers
            let output = ''; //declare our string...
            movies.forEach(movies => {
                output += template.movieCard(movies); //populate our string
            });
            resultList.innerHTML = output; //push string to DOM, implicitly overwrite any content already there
        })
}

//returns first page of results using movie-search.js
let multiPageSearch = (searchText) => {
    //use the movie-search calls, m.newSearch() method to call the API
    //update the counter with new result numbers
    //use the insertAdjacentHTML function on the resultList to append results
    //use the template.render() function to template the results
}

/*
ONLOAD
*/
document.addEventListener("DOMContentLoaded", function(event) {
    initfocusOnSearch(); //call once on page load
    initMultiPageSearch(); //call once on page load
});