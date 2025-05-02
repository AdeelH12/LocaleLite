import React from "react";

function SearchInput(props) {
  return (
    <>
      <input
        type="text"
        className="search-input"
        placeholder="Type a country..."
        onChange={props.userInput}
      />
      <br />
      <button className="search-button" onClick={props.submit}>
        Search
      </button>
    </>
  );
}

export default SearchInput;
