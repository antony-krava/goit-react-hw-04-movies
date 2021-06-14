import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import routes from '../../routes';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import DefaultImg from '../../default.jpg';
import styles from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    genres: null,
    id: null,
    overview: null,
    popularity: null,
    poster_path: null,
    release_date: null,
    title: null,
    vote_average: null,
    castList: null,
    reviewsList: null,
  };
  async componentDidMount() {
    const searchFilm = this.props.match.params.movieId;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${searchFilm}?api_key=de3679880cea73120b4b17c145aa9537&language=en-US`,
    );
    const castList = await axios.get(
      ` https://api.themoviedb.org/3/movie/${searchFilm}/credits?api_key=de3679880cea73120b4b17c145aa9537&language=en-US`,
    );
    const reviewsList = await axios.get(
      ` https://api.themoviedb.org/3/movie/${searchFilm}/reviews?api_key=de3679880cea73120b4b17c145aa9537&language=en-US&page=1`,
    );
    this.setState({
      ...response.data,
      castList: castList.data.cast,
      reviewsList: reviewsList.data.results,
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { poster_path, title, overview, genres } = this.state;
    const srcImgFilm = poster_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : DefaultImg;

    const { url, path } = this.props.match;

    return (
      <div className={styles.container}>
        <div>
          <button
            type="button"
            onClick={this.handleGoBack}
            className={styles.btn}
          >
            ← Go back
          </button>
          <div className={styles.content}>
            <img
              src={srcImgFilm}
              alt="poster_path"
              width="350"
              className={styles.img}
            />
            <div className={styles.aside}>
              <h3 className={styles.title}>{title}</h3>
              <h5>Overview:</h5>
              <p className={styles.text}>{overview}</p>
              <h5>Genre:</h5>
              <ul className={styles.list}>
                {genres &&
                  genres.map(({ id, name }) => (
                    <li key={id} className={styles.item}>
                      <span>{name}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2>Additional information</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <NavLink className={styles.link} activeClassName={styles.linkActive} exact to={{ pathname: `${url}/cast`, state: { ...this.props.location.state } }}>
                <span>Cast</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.link} activeClassName={styles.linkActive} exact to={{ pathname: `${url}/reviews`, state: { ...this.props.location.state }}}>
                <span>Reviews</span>
              </NavLink>
            </li>
          </ul>
          <Route
            path={`${path}/cast`}
            render={props => {
              return <Cast {...props} castList={this.state.castList} />;
            }}
          />
          <Route
            path={`${path}/reviews`}
            render={props => {
              return (
                <Reviews {...props} reviewsList={this.state.reviewsList} />
              );
            }}
          />
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;