## Exercise #1
#### `TODO` create a movie profile page

***start with:***
- HTML/CSS template
- some static, mock data
- the omdb module
- empty movie-profile.js file

***end with:***
- a page that dynamically loads some movie data

---

##`HOWTO` Get data out of a promise

Load the movie-profile.html in your browser. Let's play with getting a promise from the API using the browser's dev console.

**First**, set the api key; you can call the function `omdb.setKey('<yourkeyhere>');` <--- your key in there

**Second**, call `omdb.getOneMovieProfile('tt0301836');` Browse the returned promise in the console.

**Third**, call the function again, but this time attach a .then() method:`omdb.getOneMovieProfile('tt0301836').then(console.log(results));`

That's not right... call it again properly by passing a *function* to then(): omdb.getOneMovieProfile('tt0301836').then((results) => console.log(results));

**On fire!**

**Fourth**, let's dump the contents to the DOM (webpage). Assign the json contents to a DOM element.: 

```
omdb.getOneMovieProfile('tt0301836')
.then((results) => document.getElementById('movie').innerHTML = results)
```

Hmm, not quite what we wanted. Let's try calling a property of that results object:

```
omdb.getOneMovieProfile('tt0301836')
.then((results) => document.getElementById('movie').innerHTML = results.Title)
```

**Awesome!** You're ready to do this exercise!

---



### Rough process:

1. get a (free!) API key from http://www.omdbapi.com/
2. open the omdb.js file (in the starter code) and figure out how to call the API
3. identify a movie id from imdb.com (e.g. tt0301836)
4. test calling the API with your key (in the dev console, in a <script> tag, or in a js file)
5. put this calling code into the (empty) movie-profile.js file
6. you get a promise back from omdb.js; chain a method to this promise and test it with console.log(), just to test it out
7. figure out the names of the properties on the javascript object that the API gives you; you will need to call these properties to pass them into the HTML page
8. replace that console.log() with a function that assigns the value of a movie object property to an HTML element (write the data to the DOM property document.getElementById('movie').innerHTML) 
9. generalize this; pass the movie object properties to several DOM elements in the webpage
10. ???
11. Profit!