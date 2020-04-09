import React from 'react';
import './App.css';
import axios from 'axios';
import SimpsonQuote from './components/SimpsonQuote'

const SimpsonQuotes = {
  "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
  "character": "Nelson Muntz",
  "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  "characterDirection" : "Left"
 }

 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: SimpsonQuotes
      };
      this.getSimpsonQuote = this.getSimpsonQuote.bind(this)

      }
      
      getSimpsonQuote() {
        axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
          .then(response => response.data)
          .then(data => {
            this.setState({
              character: data[0],
            });
        });
      }

  render() {
    return (
      <div className="App">
        <SimpsonQuote character={this.state.character} />
        <button type="button" onClick={this.getSimpsonQuote}>Hola chica</button>
      </div>
  );}
}


export default App;
