/*
SUMMARY
requires API key, see http://www.omdbapi.com/

*/

const omdb = (function() { //module pattern

    let exportable = {}; //everything assigned to exportable is publicly exposed outside of omdb  

    const baseGetUrl = 'http://www.omdbapi.com?i='; //note "i", for movie ids in IMDB format
    const apiFragment = '&apikey=';
    let apiKey;
    let searchTerm;
    let imdbId;

    /*
    PRIVATE METHODS
    */

    //create API-specific URLs
    const idUrl = (imdbId) => `${baseGetUrl}${imdbId}${apiFragment}${apiKey}`;

    //check that HTTP status code was in 200-299 range, else throw error and stop the train   
    let validate = (response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    //
    let validateAndParse = (promise) => {
        let results = promise.then(validate) //check HTTP response for any error
            .then((response) => response.json()) //get json from promise
            .catch((error) => console.error(error)); //catch any promise-related errors
        return results;
    }

    /*
    PUBLIC METHODS
    */
    exportable.setKey = (newKey) => apiKey = newKey;

    exportable.getOneMovieProfile = (imdbId) => {
        let promise = fetch(idUrl(imdbId)); //fetch() returns a promise
        return validateAndParse(promise);
    };

    return exportable; //expose all of this object's properties outside of omdb

}())