import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import './App.scss';

const facebookIcon = <FontAwesomeIcon icon={faFacebookSquare} />

function App() {
  const [quote, newQuote] = useState("An unexamined life is not worth living.")
  const [author, newAuthor] = useState("Socrates")

  const changeQuoteAndAuthor = () => {
    newQuote("If you want to lift yourself up, lift up someone else.");
    newAuthor("Booker T. Washington");
  }
  
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
            <button id="new-quote" onClick={changeQuoteAndAuthor}>New Quote</button>
          </div>
          <div className="social">
            <div id="twitter-icon">
              <a href="twitter.com/intent/tweet" id="tweet-quote"></a>
            </div>
            <div id="facebook-icon">
              <a href="" id="facebook-quote">{facebookIcon}</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
