import React, { Component } from 'react';
import axios from 'axios';
import MovieList from '../../components/MovieList';
import styles from './HomePage.module.css';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=de3679880cea73120b4b17c145aa9537`,
    );
    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className={styles.container}>
        <h2 className={styles.homeTitle}>The most popular movies today</h2>
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default HomePage;