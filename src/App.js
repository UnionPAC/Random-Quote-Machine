import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import './App.scss';

let quoteDB = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

const facebookIcon = <FontAwesomeIcon icon={faFacebookSquare} />
const twitterIcon = <FontAwesomeIcon icon={faTwitterSquare} />

function App() {

  const [quote, setQuote] = useState("Strive not to be a success, but rather to be of value.")
  const [author, setAuthor] = useState("Albert Einstein")
  
  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box">
          <div id="text-box">
            <p id="text">"{quote}"</p>
          </div>
          <div id="author-box">
            <p id="author">- {author}</p>
          </div>
          <div id="quote-button-box">
            <button id="new-quote" onClick={() => {
              setQuote("We become what we think about.")
              ;
              setAuthor("Earl Nightingale")
            }}>New Quote</button>
          </div>
          <div className="social-icons">
            <div id="twitter-icon">
              <a href="twitter.com/intent/tweet" id="tweet-quote">{twitterIcon}</a>
            </div>
            <div id="facebook-icon">
              <a href="facebook.com" id="facebook-quote">{facebookIcon}</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
