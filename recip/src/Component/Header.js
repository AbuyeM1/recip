import React from "react";

function Header(props) {
  const { search, onInputChange, onSearchClick } = props;
  return (
    <div className="Header">
      <h1>Recipes</h1>

      <input
        className=""
        type="search"
        value={search}
        onChange={onInputChange}
      />
      <button className="btn btn-warning btn-lg" onClick={onSearchClick}>
        Search
      </button>
    </div>
  );
}

export default Header;
