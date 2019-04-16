import React from "react"
import SEO from "../components/seo"
import Search from "../components/search"
import Result from "../components/result"
import Loading from "../components/loading"
import ErrorMessage from "../components/error"
import axios from "axios"
import { parseString } from "xml2js"

class IndexContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hovered: true,
      loading: false,
      result: "",
      message: "",
      statusCode: "",
      error: "",
      updated: "",
      amount: "",
      high: "",
      low: "",
      address: "",
      citystatezip: "",
    }
  }

  //api call when the search is submitted
  submitSearch = event => {
    event.preventDefault()

    //set status to loading when the search button is clicked
    this.setState({ loading: true })

    //collect query string from the input form
    const querystingObject = {
      ["zws-id"]: "X1-ZWz1h0dqtywkcr_aroxz",
      address: event.target[0].value,
      citystatezip: event.target[1].value,
    }

    axios({
      method: "POST",
      url:
        "https://cors-anywhere.herokuapp.com/https://www.zillow.com/webservice/GetSearchResults.htm",
      params: querystingObject,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).then(response => {
      const data = response.data

      //parse the returning XML responses and determine the response base on the status code
      parseString(data, (err, results) => {
        const responseObject = {
          statusCode: results["SearchResults:searchresults"].message[0].code[0],
          message: results["SearchResults:searchresults"].message[0].text[0],
        }
        if (responseObject.statusCode === "0") {
          this.setState({
            result: true,
            loading: false,

            statusCode:
              results["SearchResults:searchresults"].message[0].code[0],
            message: results["SearchResults:searchresults"].message[0].text[0],

            updated:
              results["SearchResults:searchresults"].response[0].results[0]
                .result[0].zestimate[0]["last-updated"][0],
            amount:
              results["SearchResults:searchresults"].response[0].results[0]
                .result[0].zestimate[0].amount[0]["_"],
            high:
              results["SearchResults:searchresults"].response[0].results[0]
                .result[0].zestimate[0].valuationRange[0].high[0]["_"],
            low:
              results["SearchResults:searchresults"].response[0].results[0]
                .result[0].zestimate[0].valuationRange[0].low[0]["_"],
          })
        } else {
          this.setState({
            result: true,
            loading: false,
            statusCode:
              results["SearchResults:searchresults"].message[0].code[0],
            message: results["SearchResults:searchresults"].message[0].text[0],
          })
        }
      })
    })
  }

  // reset the state when the back button or new serach button is clicked
  clickBack = event => {
    event.preventDefault()
    this.setState({
      result: "",
      amount: "",
      high: "",
      low: "",
      message: "",
      statusCode: "",
      loading: false,
    })
  }

  // if there's no result and not in loading state, search box will appear.
  // if the return response has no error status code and result is true, result will be showing
  // if it is still in loading state, it will stay in the loading page until one of the above is true.
  // if the respose has error, show the error message
  renderSearchBox() {
    if (!this.state.result && !this.state.loading) {
      return <Search submitSearch={this.submitSearch} />
    } else if (this.state.result && this.state.statusCode === "0") {
      return (
        <Result
          clickBack={this.clickBack}
          updated={this.state.updated}
          amount={this.state.amount}
          high={this.state.high}
          low={this.state.low}
        />
      )
    } else if (this.state.loading) {
      return <Loading />
    } else {
      return (
        <ErrorMessage
          clickBack={this.clickBack}
          errorMessage={this.state.message}
        />
      )
    }
  }

  render() {
    const styles = {
      container: {
        height: `648px`,
      },
      wrapper: {
        position: `relative`,
        overflow: `hidden`,
        display: `block`,
        height: `100%`,
      },
      imgWrapper: {
        position: `absolute`,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: `rgba(0,0,0,.3)`,
        zIndex: 99,
        height: `1000px`,
      },
      figure: {
        position: `absolute`,
        top: 0,
        left: 0,
        right: 0,
        display: `block`,
        margin: `0`,
      },
      img: {
        width: `100%`,
      },
      textWrapper: {
        zIndex: `100`,
        position: `relative`,
        top: `20%`,
        width: `100%`,
        maxWidth: `956px`,
        margin: `0 auto`,
        padding: `32px`,
        textAlign: `center`,
        textRendering: `optimizeLegibility`,
        color: `white`,
        animation: `feature-text-anim .75s ease-in-out`,
        display: `block`,
      },
      textProperty: {
        fontFamily: `Tangerine`,
        fontSize: `50px`,
        display: `block`,
        marginBlockStart: `1em`,
        marginBlockEnd: `1em`,
        marginInlineStart: `0px`,
        marginInlineEnd: `0px`,
      },
      textSlogan: {
        fontFamily: `Montserrat`,
        fontWeight: 700,
        fontStyle: `normal`,
        fontSize: `68px`,
        letterSpacing: `4px`,
        textTransform: `uppercase`,
        lineHeight: `1em`,
        color: `#fff`,
      },
      bottomContainer: {
        background: `rgba(0,0,0,0)`,
        padding: `60px`,
        boxSizing: `border-box`,
        display: `block`,
        transition: `all .25s`,
        fontWeight: 400,
        fontStyle: `normal`,
        fontSize: `18px`,
        letterSpacing: `0px`,
        lineHeight: `1.6em`,
      },
      bottomWrapper: {
        width: `85%`,
        margin: `0 auto`,
        fontFamily: `Montserrat`,
        display: `block`,
        marginTop: `0em`,
        textAlign: `center`,
      },
    }

    return (
      <div style={styles.container}>
        <SEO title="index" />
        <div style={styles.wrapper}>
          <div style={styles.imgWrapper} />
          <figure style={styles.figure}>
            <img style={styles.img} src={require("../images/background.jpg")} />
          </figure>
          <div style={styles.textWrapper}>
            <p style={styles.textProperty}>Property</p>
            <p style={styles.textSlogan}>Reimagine home</p>
          </div>
        </div>
        <div style={styles.bottomContainer}>
          <div style={styles.bottomWrapper}>
            <h2 style={{ fontFamily: `Montserrat` }}>
              Explore your home’s value
            </h2>
            <div>
              <p style={{ paddingBottom: `10px`, fontFamily: `Montserrat` }}>
                Find out your home’s estimate, the best time to sell, and more.
              </p>
            </div>
            {this.renderSearchBox()}
          </div>
        </div>
      </div>
    )
  }
}

export default IndexContainer
