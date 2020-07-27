import React from 'react';
<<<<<<< HEAD
=======

>>>>>>> master
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
<<<<<<< HEAD
=======

>>>>>>> master
    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
