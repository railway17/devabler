import React, { useState } from "react";
import { SearchInput } from "./search";
import PropTypes from "prop-types";
import { Container, Nav, Navbar } from "react-bootstrap";

const propTypes = {
  onSearch: PropTypes.func.isRequired,
};

const Menu = ({ onSearch }) => {
  const [searchVisible, setSearchVisible] = useState(false);

  /**
   * Shows or hides the search container
   * @memberof Menu
   * @param e [Object] - the event from a click handler
   */
  const showSearchContainer = (e) => {
    e.preventDefault();
    setSearchVisible(!searchVisible);
    // TODO focus to input
  };

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */
  return (
    <header className="menu">
      <div className="menu-container">
        <Navbar variant="dark" expand="lg" className="d-flex">
          <Container fluid className="justify-content-start col">
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="toggle-button"
            />
            <Navbar.Brand href="#/">ELC</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">HOLIDAY</Nav.Link>
                <Nav.Link href="#">WHAT'S NEW</Nav.Link>
                <Nav.Link href="#">PRODUCTS</Nav.Link>
                <Nav.Link href="#">BESTSELLERS</Nav.Link>
                <Nav.Link href="#">GOODBYES</Nav.Link>
                <Nav.Link href="#">STORES</Nav.Link>
                <Nav.Link href="#">INSPIRATION</Nav.Link>
                <a
                  href="#"
                  onClick={(e) => showSearchContainer(e)}
                  className="search-link"
                >
                  <input className="menu-search-input" readOnly />
                  <i className="material-icons search">search</i>
                </a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <SearchInput
        visible={searchVisible}
        setVisible={setSearchVisible}
        onSearch={onSearch}
      />
    </header>
  );
};

Menu.propTypes = propTypes;
export default Menu;
