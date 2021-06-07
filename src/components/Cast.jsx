import React from 'react';
import PropTypes from 'prop-types';
import DefaultImg from '../default.jpg';
import styles from './Cast.module.css';

const Cast = ({ castList }) => {
  const srcImgFilm = `https://image.tmdb.org/t/p/w500`;
  return (
    <div>
      <ul className={styles.list}>
        {castList &&
          castList.map(
            ({ id, character = '', name = 'Actor/Actresse', profile_path }) => (
              <li className={styles.listItem} key={id}>
                <img
                  src={
                    profile_path ? `${srcImgFilm}${profile_path}` : DefaultImg
                  }
                  alt="poster_path"
                  width="150"
                />
                <p className={styles.castName}>{name}</p>
                <p className={styles.castName}>{character}</p>
              </li>
            ),
          )}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  castList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      character: PropTypes.string,
      name: PropTypes.string,
      profile_path: PropTypes.string,
    }),
  ),
};

export default Cast;