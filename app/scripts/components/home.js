/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ColorRing } from "react-loader-spinner";
import Product from "./product";
import { useProducts } from "./useProducts";

const propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

const Home = ({ searchQuery }) => {
  const { isLoading, products, fetchProducts } = useProducts(searchQuery);

  useEffect(() => {
    fetchProducts();
  }, []);
  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof Home
   */

  return (
    <section id="home">
      <ColorRing visible={isLoading} wrapperClass="loading-spinner" />
      {products.length ? (
        <div className="content">
          {products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              picture={product.picture}
              price={product.price}
              about={product.about}
              tags={product.tags}
            />
          ))}
        </div>
      ) : (
        <div className="empty-content">
          <div>
            <i className="material-icons">search</i>
          </div>
          <div>Sorry! No Found Result</div>
        </div>
      )}
    </section>
  );
};

Home.propTypes = propTypes;
export default Home;
