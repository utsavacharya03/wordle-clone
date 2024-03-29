import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput/GuessInput";
import TrackGuess from "../TrackGuess/TrackGuess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = React.useState([])

  function handleSubmitGuess(tentativeGuess) {

    const nextGuess = {
      value: tentativeGuess,
      id : Math.random()
    }
      setGuesses([...guesses, nextGuess])
      console.log('received tentativeGuess', tentativeGuess)
  }
  
  return (
    <>
      <TrackGuess guesses = {guesses} />
      <GuessInput  handleSubmitGuess = {handleSubmitGuess}/>
    </>
  );
}

export default Game;
