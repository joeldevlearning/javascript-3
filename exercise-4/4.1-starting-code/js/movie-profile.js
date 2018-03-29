/*
SUMMARY
DEPENDENCIES: omdb.js, template.js, and movie-search.js

*/
/*
PAGE LOGIC
*/

omdb.setKey('<yourkeyhere>'); //insert OMDB API key

/*Bonus*/
let getHash = () => window.location.hash.split('#')[1]; //read hash from URL

let exampleMovie = 'tt3085312';

function getMovieProfile() {
    omdb.getOneMovieProfile('tt3085312') //use getHash() or just a static variable
        .then((data) => {
            document.getElementById('title').innerHTML = data.Title;
            document.getElementById('poster').src = data.Poster;
            document.getElementById('plot').innerHTML = data.Plot;
        }) //pass data to template, template returns html string, insert into DOM
} //no data returned