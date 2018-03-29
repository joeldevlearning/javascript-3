const template = (function() { //module pattern

    let exportable = {};
    /*
    MOVIE-PROFILE.JS TEMPLATE
    */

    exportable.render = (movies) => {
        let output = '';
        movies.forEach(movies => {
            output += template.movieCard(movies);
        });
        return output;
    }

    exportable.movieCard = (movie) => {
        return `
    <li>
      <a onclick="loadMovieProfile('${movie.imdbID}')" href="#">
      <div class="movie-card">
        <img src="${movie.Poster}" alt="${movie.Title}, ${movie.Year}">
        <br>
        <span class="movie-card-title heavy">${movie.Title}</span>
        <br>
        <span class="movie-card-year">${movie.Year}</span>
      </div>
      </a>
    </li>
`;
    }

    exportable.movieProfileFull = (movie) => {
        return `<div class="row">
          <div class="col-md-4">
            <img src="${movie.Poster}" class="img-fluid">
          </div>
          <div class="col-md-8">
            <h3>${movie.Title}</h3>
            <ul class="list-group">
              <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
              <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
              <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
              <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
              <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
              <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
              <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
            </ul>
          </div>
        </div>
        <br>
        <div class="row">
        <div class="col-md-12">
          <div class="well">
            <h3>Plot</h3>
            ${movie.Plot}
            <hr>
            <a href="http://imdb.com/title/${movie.imdbID}" data-imdbId="${movie.imdbID} "target="_blank" class="btn btn-primary">View IMDB</a>
            <a href="index.html" class="btn btn-default">Go Back To Search</a>
          </div>
        </div>
        </div>
        <br><br>
      `;
    }

    return exportable;

}());