import React from 'react'
import { connect } from 'react-redux';
import MovieCard from '../movieCard/MovieCard'
import './moviesContainer.scss'


const MoviesContainer = (props) => {
    
    const { movies } = props;

    let content = '';
    content = movies.Response === 'True' ? movies.Search.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
    )) : <div className="movies-error"><h3>{movies.Error}</h3></div>;

    let movieGreet = '';
    movieGreet = movies.Response === 'True' ?  null : <div className="movies-error"><h1>Welcome to movies !!!</h1></div>

    return (
    <div className="row" data-test = 'row'>
        <div className="movie-wrapper" data-test = 'movie-wrapper'>
         {movieGreet}
            <div className="movie-container" data-test = 'movie-container'>
                {content}
            </div>
        </div>
    </div>
    );
}


const mapStateToProps = state => ({
    movies: state.movies.movies
});


export default connect(mapStateToProps)(MoviesContainer)
