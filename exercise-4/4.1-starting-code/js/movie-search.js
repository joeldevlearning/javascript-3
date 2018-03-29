/*
SUMMARY
DEPENDENCIES: omdb.js
FUNCTIONALITY: Calls omdb module to retrieve movie search results; allows returning multiple "pages" (sets) of results by keeping a "memory" of result counts, up to 100 pages
USED BY: index.js
NOTES: This class is customized for the OMDB API, but is DOM-agnostic
*/

class MovieSearch {
    constructor(api) { //requires omdb mobile
        this.api = api;
        this.searchText;
        this.totalResultsFound = 0; //fixed for a given query
        this.totalResultsViewed = 0; //increments as user asks for more results
    }

    reset() {
        this.totalResultsFound = 0;
        this.totalResultsViewed = 0;
    }

    //generic wrapper for omdb, used by both newSearch() and getMoreResults()
    getFromApi() {
        //call the omdb module
        //if there are results, assign found and viewed numbers to their properties
        //return the results
    }

    //called by search input field, ovewriting previous search
    newSearch(searchText) {
        //reset everything
        //grab the search text
        //call the getFromApi()
    }
}