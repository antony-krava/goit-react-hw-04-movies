import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import routes from './routes';
import Spinner from './components/Spinner';
import styles from './App.module.css';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage'),
);

const MoviesPage = lazy(() =>
  import('./views/MoviesPage/MoviesPage'),
);

const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage'),
);

const App = () => (
  <div className={styles.App}>
    <AppBar />
    <Suspense fallback={Spinner}>
      <Switch>
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />;
        <Route path={routes.home} component={HomePage} />;
      </Switch>
    </Suspense>
  </div>
);

export default App;