import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from '../../components/SearchForm';
import MovieList from '../../components/MovieList';
import styles from './MoviesPage.module.css';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };

  componentDidMount() {
    const { search, pathname } = this.props.location;
    if (pathname && search) {
      this.setState({ query: search.slice(7) });
    }
  }

  async componentDidUpdate(_, prevState) {
    const { query: currentQuery } = this.state;
    const { query: prevQuery } = prevState;

    if (currentQuery.trim() === '') {
      return;
    }

    if (currentQuery !== prevQuery) {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=46ebbea232da466abf6f925c11796569&query=${currentQuery}`,
      );

      this.setState({ movies: [...response.data.results] });
      return;
    }
  }
  onChangeQuery = query => {
    this.setState({
      query: query,
    });
    this.props.history.push({
      ...this.props.location,
      search: `?query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    const { location } = this.props;

    return (
      <div className={styles.container}>
        <SearchForm onSubmit={this.onChangeQuery}/>
        <MovieList location={location} movies={movies} />
      </div>
    );
  }
}

export default MoviesPage;