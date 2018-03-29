1. ## Exercise #3

   #### `TODO` create a movie search page

   ***start with:***

   - HTML/CSS template, the omdb module, template.js file
   - empty index.js file
   - your raw wits

   ***end with:***

   - create a search box that displays multiple results from the omdb API

   ------

   ## `HOWTO` Loop through data from a promise

   Load the movie-profile.html in your browser. Remember to set an API key.

   **First**, remember how we can call the API:

   ```javascript
   omdb.getOneMovieProfile('tt0301836')
   .then((results) => document.getElementById('movie').innerHTML = results.Title)
   ```

   **Second**, call the function again, but this time run a loop over the results::`omdb.getOneMovieProfile('tt0301836').then(console.log(results));`

   ```javascript
   omdb.getOneMovieProfile('tt0301836')
   .then((results) => results.forEach(movies => {
                   console.log("its a movie!"); 
               });
   )
   ```

   That's a loop! We'll use that to loop over our template function.

   **Great!** You're ready to do this exercise!

   ------

   ​

   ### Rough process:

   You're going to be working with multiple parts now: An HTML form element with a callback, a new template function, and somehow its got to all hook together!

   1. Notice that your omdb.js file now has an extra method - for calling search results! Use that.
   2. remove all of the sample html for a movie card; stash this in a new template.js function. This function can be very similar to your movie-profile template function.
   3. movie into the index.js file. Assign the key DOM elements (like the search box!) to Javascript variables (for convenience)
   4. create a new function that calls omdb and gets a list of results (not just one movie).
   5. Modify your new function to loop over the results and store all of them in a single string.
   6. Did you forget the template? Use your new template in the loop!
   7. The new function should return results to the DOM... which part?
   8. Create an "init" function to hook up the search box submit event to the new search function
   9. Whew, you just might be done!