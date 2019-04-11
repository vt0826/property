import React from "react"

const Search = props => (
  <div
    style={{
      background: `rgba(0,0,0,0)`,
      padding: `32px`,
      boxSizing: `border-box`,
      display: `block`,
      transition: `all .25s`,
      fontWeight: 400,
      fontStyle: `normal`,
      fontSize: `18px`,
      letterSpacing: `0px`,
      lineHeight: `1.6em`,
    }}
  >
    <button onClick={props.clickBack}> back </button>
    <h6> this is result</h6>
  </div>
)

export default Search
