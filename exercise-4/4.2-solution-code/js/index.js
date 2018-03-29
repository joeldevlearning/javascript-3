/*
SUMMARY
DEPENDS ON: omdb.js, template.js, and movie-search.js
FUNCTIONALITY: Supports searching movies by titles; connects various DOM events and elements to search functionality
USED BY: none, but required for index.html
*/

/*
DEFINITIONS
*/
const m = new MovieSearch(omdb); //create a singleton for searching movies

//abbreviated labels for key DOM elements
const searchInput = document.querySelector('#search-form-input');
const searchForm = document.querySelector('#search-form');
const resultList = document.querySelector('#movies');
const counter = document.querySelector('#result-counter-value');

let updateCounter = (returned, total) => {
    counter.innerHTML = `Viewing ${returned} results of ${total}`;
}

let displayMsgNoResults = () => {
    counter.innerHTML = `Sorry, no results found`;
}

let displayError = (error) => {
    counter.innerHTML = error;
}

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
let initMultiPageSearch = () => { //connect the search
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        resetPage();
        if (isValid(searchInput.value)) {
            multiPageSearch(searchInput.value.trim()); //trim whitespace on both sides of the string
        } else {
            displayMsgNoResults();
        }
    })
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
    let results = m.newSearch(searchText);
    results.then((results) => {
        if (!results.Search) {
            displayError(results.Error);
            return;
        }
        updateCounter(m.totalResultsViewed, results.totalResults);
        resultList.insertAdjacentHTML('beforeend', template.render(results.Search));
    })
}

/*
ONLOAD
*/
document.addEventListener("DOMContentLoaded", function(event) {
    initfocusOnSearch(); //call once on page load
    initMultiPageSearch(); //call once on page load
});