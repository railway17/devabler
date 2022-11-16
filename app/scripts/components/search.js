import React, { useState, useCallback } from "react";
import { debounce } from "./../libs/helper";

const DELAY_TIME = 500;

export const SearchInput = ({ visible, setVisible, onSearch }) => {
  const [query, setQuery] = useState("");

  const debouncedSearch = useCallback(
    debounce((val) => {
      onSearch(val);
    }, DELAY_TIME),
    []
  );

  const searchTextChange = (e) => {
    const newSearchInput = e.target.value;
    setQuery(newSearchInput);
    debouncedSearch(newSearchInput);
  };

  return (
    <div className={(visible ? "showing " : "") + "search-container"}>
      {visible ? (
        <>
          {" "}
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => searchTextChange(e)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                setVisible(false);
              }
            }}
          />
          <a href="#" onClick={() => setVisible(false)}>
            <i className="material-icons close">close</i>
          </a>
        </>
      ) : null}
    </div>
  );
};
