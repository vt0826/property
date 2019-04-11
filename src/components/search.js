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
    <form
      style={{
        display: `block`,
        marginTop: `0em`,
        width: `100%`,
        textAlign: `center`,
      }}
      onSubmit={e => props.submitSearch(e)}
    >
      <div
        style={{
          width: `85%`,
          margin: `0 auto`,
        }}
      >
        <h2> Search</h2>
        <div>
          <p>Enter the address </p>
        </div>
        <div
          style={{
            display: `inline-block`,
            width: `auto`,
            margin: `12px 0 0 0 `,
          }}
        >
          <input
            style={{
              width: `100%`,
              textRendering: `auto`,
              color: `initial`,
              letterSpacing: `normal`,
              wordSpacing: `normal`,
              textTransform: `none`,
              textIndent: `0px`,
              textShadow: `none`,
              display: `inline-block`,
              textAlign: `start`,
              margin: `0em`,
              font: `400 11px system-ui`,
              width: `220px`,
              height: `50px`,
              outline: `none`,
            }}
          />
        </div>
        <button
          style={{
            display: `inline-block`,
            width: `auto`,
            height: `auto`,
            padding: `1em 2.5em`,
            borderWidth: 0,
            textAlign: `center`,
            cursor: `pointer`,
            outline: `none`,
            position: `relative`,
            color: `#fff`,
            backgroundColor: `#262626`,
            border: `1px solid #262626`,
            fontSize: `15px`,
            lineHeight: `normal`,
            fontWeight: `normal`,
            textTransform: `uppercase`,
            whiteSpace: `nowrap`,
          }}
        >
          Search
        </button>
      </div>
    </form>
  </div>
)

export default Search
