import React from "react"
import classNames from "classnames"
import LinearProgress from "@material-ui/core/LinearProgress"

const styles = {
  width: `40%`,
  display: `inline-block`,
  textAlign: `center`,
}

const Loading = props => (
  <div style={styles}>
    <LinearProgress />
  </div>
)
export default Loading
