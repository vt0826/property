import React from "react"
import styled from "styled-components"

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
          <StyledInput placeholder={"Street Address"} />
          <StyledInput placeholder={"City, State"} />
        </div>
        <button style={styles.button}>Search</button>
      </div>
    </form>
  </div>
)

export default Search

const StyledInput = styled.input`
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  padding-left: 12px;
  words-pacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  margin: 10px 10px 20px 10px;
  font: 400 11px system-ui;
  height: 50px;
  width: 220px;
  outline: none;
  @media (min-width: 768px) {
    margin: 0 10px 0 px;
  }
`
