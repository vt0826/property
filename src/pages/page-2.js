import React from "react"
import SEO from "../components/seo"
import Search from "../components/search"
import Result from "../components/result"
import axios from "axios"

class SecondPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hovered: true,
      result: "",
    }
  }
  componentDidMount() {
    axios({
      method: "POST",
      url: "http://www.zillow.com/webservice/GetSearchResults.htm",
      params: {
        ["zws-id"]: "X1-ZWz1h0dqtywkcr_aroxz",
        address: "5025 184th st",
        citystatezip: "fresh meadows,ny",
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(function(response) {
        console.log("hihihi")
        console.log(response.data)
      })
      .catch(function(error) {
        console.log("hohoho")
        console.log(error.response)
      })
  }

  //componentDidUpdate(prevProps, prevState)){

  //}

  submitSearch = e => {
    e.preventDefault()
    this.setState({ result: true })
  }
  clickBack = event => {
    event.preventDefault()
    this.setState({ result: "" })
  }

  renderSearchBox() {
    if (!this.state.result) {
      return <Search submitSearch={this.submitSearch} />
    } else {
      return <Result clickBack={this.clickBack} />
    }
  }
  render() {
    return (
      <div style={{ height: `648px` }}>
        <SEO title="Page two" />
        <div
          style={{
            position: `relative`,
            overflow: `hidden`,
            display: `block`,
            height: `100%`,
          }}
        >
          <div style={{}} />
          <div
            style={{
              position: `absolute`,
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: `rgba(0,0,0,.3)`,
              zIndex: 99,
              height: `1000px`,
            }}
          />
          >
          <figure
            style={{
              position: `absolute`,
              height: `1000px`,
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              display: `block`,
              margin: `0`,
            }}
          >
            <img src={require("../images/background.jpg")} />
          </figure>
          <div
            style={{
              zIndex: `100`,
              position: `relative`,
              top: `10%`,
              width: `100%`,
              maxWidth: `956px`,
              margin: `0 auto`,
              padding: `32px`,
              textAlign: `center`,
              textRendering: `optimizeLegibility`,
              color: `white`,
              animation: `feature-text-anim .75s ease-in-out`,
              display: `block`,
            }}
          >
            <p>sustainability </p>
            <p
              style={{
                fontFamily: `proxima-nova`,
                fontWeight: 700,
                fontStyle: `normal`,
                fontSize: `68px`,
                letterSpacing: `4px`,
                textTransform: `uppercase`,
                lineHeight: `1em`,
                color: `#fff`,
              }}
            >
              {" "}
              Starts With You
            </p>
          </div>
        </div>
        {this.renderSearchBox()}
      </div>
    )
  }
}

export default SecondPage
