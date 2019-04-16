import React from "react"
import TextField from "@material-ui/core/TextField"

const styles = {
  container: {
    background: `rgba(0,0,0,0)`,
    boxSizing: `border-box`,
    display: `block`,
    transition: `all .25s`,
    fontWeight: 400,
    fontStyle: `normal`,
    fontSize: `18px`,
    letterSpacing: `0px`,
    textAlign: `center`,
    lineHeight: `1.6em`,
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

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

const Search = props => (
  <div style={styles.container}>
    <form noValidate autoComplete="off">
      <TextField
        id="standard-update"
        label="Update"
        className={"textField"}
        value={props.updated}
        margin="none"
      />

      <TextField
        id="standard-estimate"
        label="Estimate"
        value={formatter.format(props.amount)}
        margin="none"
      />

      <TextField
        id="standard-high"
        label="High"
        value={formatter.format(props.high)}
        margin="none"
      />

      <TextField
        id="standard-low"
        label="Low"
        value={formatter.format(props.low)}
        margin="none"
      />
    </form>

    <button style={styles.button} onClick={props.clickBack}>
      New Search
    </button>
  </div>
)

export default Search
