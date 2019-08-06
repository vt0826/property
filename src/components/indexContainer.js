import React from "react"
import SEO from "../components/seo"
import Search from "../components/search"
import Result from "../components/result"
import Loading from "../components/loading"
import ErrorMessage from "../components/error"
import axios from "axios"
import { parseString } from "xml2js"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"

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
      "zws-id": "X1-ZWz1h0dqtywkcr_aroxz",
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
      <StyledContainer>
        <StyledWrapper>
          <div style={styles.imgWrapper} />
          <figure style={styles.figure}>
            <img
              style={styles.img}
              src={require("../images/background.jpg")}
              alt="background"
            />
          </figure>
          <StyledTextWrapper>
            <StyledTextProperty>Property</StyledTextProperty>
            <StyledTextSlogan>Reimagine home</StyledTextSlogan>
          </StyledTextWrapper>
        </StyledWrapper>
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
      </StyledContainer>
    )
  }
}

export default IndexContainer

const StyledContainer = styled.div`
  height: 500px;
`
const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
  height: 20%;
  @media (min-width: 363px) and (max-width: 439px) {
    height: 25%;
  }
  @media (min-width: 440px) and (max-width: 520px) {
    height: 30%;
  }
  @media (min-width: 521px) and (max-width: 590px) {
    height: 35%;
  }
  @media (min-width: 591px) and (max-width: 660px) {
    height: 40%;
  }
  @media (min-width: 661px) and (max-width: 732px) {
    height: 45%;
  }
  @media (min-width: 733px) and (max-width: 816px) {
    height: 50%;
  }
  @media (min-width: 817px) and (max-width: 883px) {
    height: 55%;
  }
  @media (min-width: 884px) and (max-width: 957px) {
    height: 60%;
  }
  @media (min-width: 958px) and (max-width: 1034px) {
    height: 65%;
  }
  @media (min-width: 1035px) and (max-width: 1099px) {
    height: 70%;
  }
  @media (min-width: 1100px) and (max-width: 1174px) {
    height: 75%;
  }
  @media (min-width: 1175px) and (max-width: 1244px) {
    height: 80%;
  }
  @media (min-width: 1245px) and (max-width: 1319px) {
    height: 85%;
  }
  @media (min-width: 1320px) and (max-width: 1399px) {
    height: 90%;
  }
  @media (min-width: 1400px) and (max-width: 1450px) {
    height: 95%;
  }
  @media (min-width: 1451px) {
    height: 100%;
  }
`
const StyledTextProperty = styled.p`
  font-family: Tangerine;
  font-size: 24px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  @media (min-width: 600px) and (max-width: 1200px) {
    font-size: 36px;
  }
  @media (min-width: 1201px) {
    font-size: 60px;
  }
`
const StyledTextSlogan = styled.p`
  font-family: Montserrat;
  font-weight: 700;
  font-style: normal;
  font-size: 12px;
  letter-spacing: 4px;
  text-transform: uppercase;
  line-height: 1em;
  color: #fff;
  @media (min-width: 600px) and (max-width: 1200px) {
    font-size: 24px;
  }
  @media (min-width: 1201px) {
    font-size: 68px;
  }
`
const StyledTextWrapper = styled.div`
  z-index: 100;
  position: relative;
  width: 100%;
  max-width: 956px;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  text-rendering: optimizeLegibility;
  color: white;
  animation: feature-text-anim 0.75s ease-in-out;
  display: block;
  @media (min-width: 600px) {
    top: 20%;
  }
`
