import React, { Component } from 'react';
import styles from '../../views/MoviesPage/MoviesPage.module.css';

class SearchForm extends Component {
  state = {
    query: ''
  }
    
    handleChangeQuery = e => this.setState({ query: e.currentTarget.value });

    submitForm = e => {
        e.preventDefault()
        const { query } =this.state

        const { onSubmit } = this.props
        onSubmit(query)
        this.setState({ query: ''})
    }

    render() {
        const { query } = this.state

      return (
        <form onSubmit={this.submitForm} className={styles.form}>
          <input
            type="text"
            placeholder="Search film"
            autoComplete="off"
            value={query}
            autoFocus
            onChange={this.handleChangeQuery}
            className={styles.input}
          />
          <button type="submit" className={styles.btn}>
            <span className={styles.textBtn}>Search</span>
          </button>
        </form>
      );
    }
}
 
export default SearchForm;