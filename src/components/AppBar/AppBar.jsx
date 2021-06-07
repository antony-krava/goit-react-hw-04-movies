import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            exact
            to={routes.home}
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            <h2 className={styles.title}>Home</h2>
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            exact
            to={routes.movies}
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            <h2 className={styles.title}>Movies</h2>
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default AppBar;