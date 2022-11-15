/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';
import PropTypes from 'prop-types';
import Product from './product';

const propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        about: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string)
    })).isRequired
}

class Home extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof Home
    */
    render() {
        return (
            <section id="home">
                {this.props.products.length ? 
                (<div className="content">
                    {
                    this.props.products.map(product=> (
                        <Product 
                            key={product._id}
                            name={product.name}
                            picture={product.picture}
                            price={product.price}
                            about={product.about}
                            tags={product.tags}
                        />
                    )) 
                    }
                </div>) :
                <div className="empty-content">No Search Result...</div>
                }
            </section>
        );
    }


}
Home.propTypes = propTypes;
Home.displayName = 'Home';
// Export out the React Component
export default Home;