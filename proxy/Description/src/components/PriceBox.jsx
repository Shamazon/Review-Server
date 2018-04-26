import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from '../index.css';

class PriceBox extends Component {
  render() {
    return (
      <div id="PriceBox" className={style.priceBox}>
        <div id="Price Column 1" className={`${style.colorGray} ${style.col1}`}>
          Price:
        </div>
        <div id="Price Column 2-4" className={`${style.col24}`}>
          <div className={`${style.colorRed} ${style.sizeMedium}`}>
            {this.props.stringPrice} <span className={`${style.ifItemPrimeImage} ${style.amazonIcon}`} />
          </div>
          <a href="#">FREE Shipping</a> on orders over $25—or get<b> FREE Two-Day Shipping</b> with <a href="#">Amazon Prime</a>
          {/* Stretch: Make a function that Renders a Price Block + Prime Image (if Prime) */}
        </div>
      </div>
    );
  }
}

PriceBox.propTypes = {
  stringPrice: PropTypes.string.isRequired,
};

export default PriceBox;
