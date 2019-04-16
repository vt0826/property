import React from "react"

const styles = {
  container: {
    background: `rgba(0,0,0,0)`,
    //padding: `32px`,
    boxSizing: `border-box`,
    display: `block`,
    transition: `all .25s`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontSize: `18px`,
    letterSpacing: `0px`,
    lineHeight: `1.6em`,
  },
  form: {
    display: `block`,
    marginTop: `0em`,
    width: `100%`,
    textAlign: `center`,
  },
  inputWrapper: {
    display: `inline-block`,
    width: `auto`,
  },
  input: {
    textRendering: `auto`,
    color: `initial`,
    letterSpacing: `normal`,
    paddingLeft: `12px`,
    wordSpacing: `normal`,
    textTransform: `none`,
    textIndent: `0px`,
    textShadow: `none`,
    display: `inline-block`,
    textAlign: `start`,
    margin: `0 10px 0 10px`,
    font: `400 11px system-ui`,
    height: `50px`,
    width: `220px`,
    outline: `none`,
  },
  button: {
    display: `inline-block`,
    width: `auto`,
    height: `auto`,
    padding: `1em 2.5em`,
    margin: `0 10px 0 10px`,
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
  },
}

const Search = props => (
  <div style={styles.container}>
    <form style={styles.form} onSubmit={props.submitSearch}>
      <div
        style={
          {
            // width: `85%`,
            // margin: `0 auto`,
            //  fontFamily: `Montserrat`,
          }
        }
      >
        <div style={styles.inputWrapper}>
          <input style={styles.input} placeholder={"Street Address"} />
          <input style={styles.input} placeholder={"City, State"} />
        </div>
        <button style={styles.button}>Search</button>
      </div>
    </form>
  </div>
)

export default Search
