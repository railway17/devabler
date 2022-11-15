/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 * 
 */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { debounce } from './../libs/helper';
const DELAY_TIME = 500;

const propTypes = {
    onFetched: PropTypes.func.isRequired,
}

class Menu extends React.Component {

    /**
     * Main constructor for the Menu Class
     * @memberof Menu
     */
    constructor() {
        super();
        this.inputRef = null;
        this.state = {
            showingSearch: false,
            searchInput: '',
        };
        this.debouncedFetch = debounce(this.fetchData, DELAY_TIME); 
    }

    componentDidMount() {
        this.fetchData()
    }

    /**
     * Fetch data from API
     */
    fetchData() {
        const {searchInput} = this.state
        axios.get('http://localhost:3035', {
            params: { query: searchInput, }
        }).then(res=> {
            if (res.status !== 200) {
                // TODO: handle response if status code is not 200
                return;
            }
            const products = res.data;
            this.props.onFetched(products);
        }).catch(err=> {
            // TODO: API exception handler, e.g: show error modal dialog
            console.error('API error: ', err.toString())
        })
    }
    
    /**
     * Shows or hides the search container
     * @memberof Menu
     * @param e [Object] - the event from a click handler
     */
    showSearchContainer(e) {
        e.preventDefault();
        this.setState({
            showingSearch: !this.state.showingSearch
        }, ()=> {
            if (this.inputRef != null) {
                this.inputRef.focus()
            }
        });
    }

    /**
     * Calls upon search change
     * @memberof Menu
     * @param e [Object] - the event from a text change handler
     */
    onSearch(e) {        
        const newSearchInput = e.target.value;
        this.setState({ searchInput: newSearchInput });
        if (newSearchInput === '') {
            return;
        }
        this.debouncedFetch(newSearchInput);    
    }

    /**
     * Not required, only hide the search container when hit Enter Key
     * @param {KeyEvent} e 
     */
    onKeyDown(e) {
        console.log(e.keyCode)
        if  (e.keyCode === 13) {
            this.setState({showingSearch: false})
        }
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
    render() {
        return (
            <header className="menu">
                <div className="menu-container">
                    <div className="menu-holder">
                        <h1>ELC</h1>
                        <nav>
                            <a href="#" className="nav-item">HOLIDAY</a>
                            <a href="#" className="nav-item">WHAT'S NEW</a>
                            <a href="#" className="nav-item">PRODUCTS</a>
                            <a href="#" className="nav-item">BESTSELLERS</a>
                            <a href="#" className="nav-item">GOODBYES</a>
                            <a href="#" className="nav-item">STORES</a>
                            <a href="#" className="nav-item">INSPIRATION</a>

                            <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                                <i className="material-icons search">search</i>
                            </a>
                        </nav>
                    </div>
                </div>
                <div className={(this.state.showingSearch ? "showing " : "") + "search-container"}>
                    <input 
                        ref={(input) => { this.inputRef = input; }} 
                        type="text" 
                        autoFocus
                        value={this.state.searchInput} 
                        onChange={(e) => this.onSearch(e)} 
                        onKeyDown={(e)=> this.onKeyDown(e)} />
                    <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                        <i className="material-icons close">close</i>
                    </a>
                </div>
            </header>
        );
    }


}

Menu.propTypes = propTypes;
Menu.displayName = 'Menu';
// Export out the React Component
export default Menu;