/**
 * This file will hold the product card that displays the product info
 */
import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  /**Product image src */
  picture: PropTypes.string.isRequired,

  /**Product name */
  name: PropTypes.string.isRequired,

  /**Product description */
  about: PropTypes.string,

  /**Product price */
  price: PropTypes.string.isRequired,

  /**Product tags */
  tags: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  about: "",
  tags: [],
};

export const Product = ({ picture, name, about, price, tags }) => {
  return (
    <div className="product-card">
      <div className="card-image">
        <img src={picture} alt="" />
      </div>
      <div className="card-detail">
        <div className="text card-name">{name}</div>
        <div className="text card-price">${price}</div>
        <div className="text card-about">${about}</div>
      </div>
    </div>
  );
};

Product.propTypes = propTypes;
Product.defaultProps = defaultProps;
export default Product;
