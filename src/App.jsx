import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Timer } from './components/Timer/Timer.jsx';
import { data } from './data/data.js';
import { Results } from './components/Results/Results.jsx';
import { MonoGame } from './components/Game/MonoGame.jsx';
import { Home } from './components/Home/Home.jsx';
import { Header } from './components/Header/header.jsx';

function App() {
  const maxWords = 32;
  const [currWordIndex, setCurrWordIndex] = useState(0);
  const [currCharIndex, setCurrCharIndex] = useState(-1);
  const [currChar, setCurrChar] = useState("");
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [status, setStatus] = useState("waiting");
  const [inputValue, setInputValue] = useState('');
  const [inputMaxLength, setInputMaxLength] = useState(null);
  const [words, setWords] = useState([]);
  const accuracy = (correct / (correct + incorrect)) * 100;
  const roundedAccuracy = accuracy.toFixed(2);
  const [timerValue, setTimerValue] = useState(60);
  const [input, setInput] = useState(null);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  function setInputRef(inputRef) {
    setInput(inputRef);
  }

  function handleKeyDown({ keyCode, key }) {
    // space bar
    if (keyCode === 32) {
      setInputValue("");
      checkMatch();
      setCurrWordIndex(currWordIndex + 1);
      setCurrCharIndex(-1);
      // backspace
    } else if (keyCode === 8) {
      setCurrCharIndex(currCharIndex - 1);
      setCurrChar("");
    } else {
      setCurrCharIndex(currCharIndex + 1);
      setCurrChar(key);
    }
  }

  function checkMatch() {
    const wordToCompare = words[currWordIndex];
    const doesItMatch = wordToCompare === inputValue.trim();
    if (doesItMatch) {
      setCorrect(correct + 1);
    } else setIncorrect(incorrect + 1);
  }

  function getCharClass(wordIndex, letterIndex, letter) {
    if (wordIndex === currWordIndex) {
      const trimmedInputValue = inputValue.trim();
      if (letterIndex < trimmedInputValue.length) {
        return trimmedInputValue[letterIndex] === letter ? "correct" : "incorrect";
      }
      if (letterIndex === trimmedInputValue.length) {
        return "letterActive";
      }
    }
    return "";
  }

  function handleClick() {
    setStatus("playing");
    setCurrWordIndex(0);
    setCurrCharIndex(-1);
    setInputValue("");
    setCorrect(0);
    setIncorrect(0);
    getWords();
    console.log(input);
  }

  function getWords() {
    const WORDS = data.sort(() => Math.random() - 0.5).slice(0, maxWords);
    setWords(WORDS);
  }

  useEffect(() => {
    getWords();
  }, []);

  useEffect(() => {
    let intervalId;
    if (status === "playing") {
      intervalId = setInterval(() => {
        setTimerValue((prevTimerValue) => {
          if (prevTimerValue === 0) {
            clearInterval(intervalId);
            setStatus("finished");
            return 60;
          } else {
            return prevTimerValue - 1;
          }
        });
      }, 1000);
    } else if (status === "finished") {
      clearInterval(intervalId);
      setCurrWordIndex(0);
      setCurrCharIndex(-1);
      setInputValue("");
    }
    return () => clearInterval(intervalId);
  }, [status]);

  return (
    <>
      {status === "waiting" && <Home setStatus={setStatus} />}
      {(status === "playing" || status === "finished") && (
        <>
          <Header />
          <Timer timerValue={timerValue} maxWords={maxWords} currWordIndex={currWordIndex} />
          <MonoGame
            words={words}
            getCharClass={getCharClass}
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
            inputValue={inputValue}
            inputMaxLength={inputMaxLength}
            status={status}
            setInputRef={setInputRef}
          />
          {status === "finished" && <Results inputRef={input} correct={correct} roundedAccuracy={roundedAccuracy} handleClick={handleClick} />}
        </>
      )}
    </>
  );
}

export default App;
