import React from "react"

const styles = {
  message: {
    color: `red`,
    fontFamily: `Montserrat`,
    textTransform: `uppercase`,
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

const ErrorMessage = props => {
  return (
    <div>
      <h6 style={styles.message}>{props.errorMessage}</h6>
      <button style={styles.button} onClick={props.clickBack}>
        Back
      </button>
    </div>
  )
}

export default ErrorMessage
