import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import './App.scss';
import COLOURS_ARRAY from "./coloursArray";

let quoteDB = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

const facebookIcon = <FontAwesomeIcon icon={faFacebookSquare} id="fbIcon"/>
const twitterIcon = <FontAwesomeIcon icon={faTwitterSquare} id="twitterIcon" />

let quoteDBUrl ="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {

  const [quote, setQuote] = useState("Strive not to be a success, but rather to be of value.")
  const [author, setAuthor] = useState("Albert Einstein")

  let quoteUri = encodeURI(quote)

  const [randomNumber, setrandomNumber] = useState(0)

  const [quotesArray, setQuotesArray] = useState(null)

  const [accentColour, setAccentColour] = useState("#e1cf3b")

  const fetchQuotes = async (url) => {
    const response = await fetch(url);
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes);
  }

  useEffect(() => {
    fetchQuotes(quoteDBUrl)
  }, [quoteDBUrl])

  const getRandomQuote = () => {
    let randomInt = Math.floor(Math.random() * quotesArray.length)
    setrandomNumber(randomInt);
    setAccentColour(COLOURS_ARRAY[randomInt]);
    setQuote(quotesArray[randomInt].quote);
    setAuthor(quotesArray[randomInt].author)
  }

  return (
    <div className="App">
      <header className="App-header" style={
        {backgroundColor:accentColour, color:accentColour}
      }>
        <div id="quote-box">
          <div id="text-box">
            <p id="text" style={
        {color:accentColour}
      }>"{quote}"</p>
          </div>
          <div id="author-box">
            <p id="author" style={
        {color:accentColour}
      }>- {author}</p>
          </div>
          <div className="social-icons" >
            <div id="twitter-icon">
              <a href={`https://twitter.com/intent/tweet?text=${quoteUri} -${author}`} id="tweet-quote" style={
        {color:accentColour}
      }>{twitterIcon}</a>
            </div>
            <div id="facebook-icon">
              <a href="facebook.com" id="facebook-quote" style={
        {color:accentColour}
      }>{facebookIcon}</a>
            </div>
          </div>
          <div id="quote-button-box">
            <button id="new-quote" style={
        {backgroundColor:accentColour}
      } onClick={() => setrandomNumber(getRandomQuote)}>New Quote</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
