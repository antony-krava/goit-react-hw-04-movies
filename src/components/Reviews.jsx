import React from 'react';
import PropTypes from 'prop-types';

const Reviews = ({ reviewsList }) => {
  return (
    <div>
      <ul>
        {reviewsList && reviewsList.length > 0 ? (
          reviewsList.map(({ id, author, content }) => (
            <li key={id}>
              <h5>Author: "{author}"</h5>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>No comments yet</p>
        )}
      </ul>
    </div>
  );
};

Reviews.propTypes = {
  reviewsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      content: PropTypes.string,
    }),
  ),
};

export default Reviews;