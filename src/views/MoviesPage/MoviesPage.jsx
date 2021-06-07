import React, { Component } from 'react';
import axios from 'axios';
import MovieList from '../../components/MovieList';
import styles from './MoviesPage.module.css';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  hendelSubmit = e => {
    e.preventDefault();

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=46ebbea232da466abf6f925c11796569&language=en-US&query=${this.state.query}&page=1&include_adult=false`,
      )
      .then(response => this.setState({ movies: response.data.results }))
      .catch();

    this.setState({ query: '' });
  };

  render() {
    const { movies } = this.state;

    return (
      <div className={styles.container}>
        <form onSubmit={this.hendelSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Search film"
            onChange={this.handleChange}
            className={styles.input}
          />
          <button type="submit" className={styles.btn}>
            <span className={styles.textBtn}>Search</span>
          </button>
        </form>
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default MoviesPage;