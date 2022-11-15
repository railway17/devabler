/**
 * This file will hold the product card that displays the product info
 */
import React from 'react';
import PropTypes from 'prop-types';


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
    about: '',
    tags: []
};


 class Product extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="product-card">
                <div className="card-image">
                    <img src={this.props.picture} alt=""/>
                </div>
                <div className="card-detail">
                    <div className="text card-name">
                        {this.props.name}
                    </div>
                    <div className="text card-price">
                        ${this.props.price}
                    </div>
                    <div className="text card-about">
                        ${this.props.about}
                    </div>
                </div>
            </div>
        );
    }
 
 
 }
 
Product.propTypes = propTypes;
Product.defaultProps = defaultProps;
Product.displayName = 'Product';
export default Product;