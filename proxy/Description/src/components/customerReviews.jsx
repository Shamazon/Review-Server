import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from '../index.css';

class CustomerReviews extends Component {
  render() {
    const numStars = `style.astar${this.props.starIcon}`
    return (
      <div id="customerReviews">
        {/* create a function that creates dynamic Classnames for astar */}
        <div
          id="averageCustomerReviewImage"
          className={`${style.iconStar} ${numStars} ${style.amazonIcon}`}
          aria-label={this.props.averageStars}
          title={`${this.props.averageStars} out of 5 stars`}
        />
        <div id="iconDropDownHover" className={`${style.dropDown} ${style.amazonIcon}`} />
        <span id="totalReviews" className={`${style.fivepxLeft}`}>
          <a href="#">{this.props.totalStars} customer reviews</a>
        </span>
      </div>
    );
  }
}

CustomerReviews.propTypes = {
  starIcon: PropTypes.string.isRequired,
  averageStars: PropTypes.string.isRequired,
  totalStars: PropTypes.number.isRequired,
};

export default CustomerReviews;
