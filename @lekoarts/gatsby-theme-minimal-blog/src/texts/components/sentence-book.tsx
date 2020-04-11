import React, { Component } from "react"
import ReactDOM from "react-dom";

class SentenceBook extends Component {

  constructor() {
    super();
    this.state = { data: []};
  }

  async componentDidMount() {
    const response = await fetch("https://andruxnet-random-famous-quotes.p.rapidapi.com/",
      { 
        method: 'GET',
        headers: {
          "x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
          "x-rapidapi-key": "c3ab29a263mshc561452e76e6be2p11482djsnfc8ce2077b64"
        },
        mode: 'cors',
        cache: 'default' 
      })
    
    const json = await response.json()
    this.setState({ data: json[0] })
  }

  render() {
    return (
      <section>
        " {this.state.data.quote} "
        <hr />
        <span style={{ fontSize: '0.7rem',}}>
         - <b> {this.state.data.author}</b> -
        </span>        
      </section>
    )
  }
}

export default SentenceBook