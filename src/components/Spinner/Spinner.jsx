import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.Box}>
      <Loader type="Hearts" color="#8a2be2" height={100} width={100} />
    </div>
  );
};

export default Spinner;