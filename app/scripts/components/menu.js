/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 * 
 */
import React from 'react';
import SearchItem from './searchItem';
import { fetchData } from "../../service/fetchData";
import { debounce } from "../../utils/helpers";;

class Menu extends React.PureComponent {
  /**
   * Main constructor for the Menu Class
   * @memberof Menu
   */
  constructor() {
    super();
    this.state = {
      showingSearch: false,
      searchQuery: "",
      items: [],
    };
  }

  /**
   * Shows or hides the search container
   * @memberof Menu
   * @param e [Object] - the event from a click handler
   */

  showSearchContainer = (e) => {
    e.preventDefault();
    this.setState({
      showingSearch: !this.state.showingSearch,
      items: [],
      searchQuery: "",
    });
  };

  debounceCall = debounce(
    (value) =>
      fetchData(value)
        .then(({ data }) => {
          this.setState({ items: data });
          if(this.state.searchQuery === "") {
            this.setState({ items: [] });
          }
        })
        .catch((error) => {
          console.error(error);
        }),
    300
  );

  /**
   * Calls upon search change
   * @memberof Menu
   * @param e [Object] - the event from a text change handler
   */

  onSearch = ({ target: { value } }) => {
    if (value !== "") {
      this.setState({ searchQuery: value });
      this.debounceCall(value);
    } else {
      this.setState({ items: [], searchQuery: "" });
    }
  };

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */
  render() {
    const {
      state: { items, showingSearch, searchQuery },
      showSearchContainer,
      onSearch,
    } = this;
    return (
      <div>
        <header className="menu">
          <div className="menu-container">
            <div className="menu-holder">
              <h1>ELC</h1>
              <nav>
                <a href="#" className="nav-item">
                  HOLIDAY
                </a>
                <a href="#" className="nav-item">
                  WHAT'S NEW
                </a>
                <a href="#" className="nav-item">
                  PRODUCTS
                </a>
                <a href="#" className="nav-item">
                  BESTSELLERS
                </a>
                <a href="#" className="nav-item">
                  GOODBYES
                </a>
                <a href="#" className="nav-item">
                  STORES
                </a>
                <a href="#" className="nav-item">
                  INSPIRATION
                </a>

                <a href="#" onClick={(e) => showSearchContainer(e)}>
                  <i className="material-icons search">search</i>
                </a>
              </nav>
            </div>
          </div>
          <div
            className={(showingSearch ? "showing " : "") + "search-container"}
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearch(e)}
            />
            <a href="#" onClick={(e) => showSearchContainer(e)}>
              <i className="material-icons close">close</i>
            </a>
          </div>
        </header>
        {items.length > 0 ? <SearchItem items={items} /> : null}
      </div>
    );
  }
}

// Export out the React Component
module.exports = Menu;