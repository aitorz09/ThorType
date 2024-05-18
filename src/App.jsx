import { useEffect, useState } from 'react';
import './App.css';
import { Timer } from './components/Timer/Timer.jsx';
import {data} from './data/data.js'
console.log(data);
function App() {
  const [currWordIndex, setCurrWordIndex] = useState(0)
  const [currCharIndex, setCurrCharIndex] = useState(-1)
  const [currChar, setCurrChar] = useState("")
  const [correct, setCorrect] = useState(0)
  const [incorrect, setIncorrect] = useState(0)
  const [status, setStatus] = useState("playing")
  const [inputValue, setInputValue] = useState('')
  const [inputMaxLength,setInputMaxLength] = useState(null)
  const [words, setWords] = useState([])
  const accuracy = (correct / (correct + incorrect)) * 100;
const roundedAccuracy = accuracy.toFixed(2)
const [timerValue, setTimerValue] = useState(60);

  
  const handleChange = (e)=>{
    const newValue = e.target.value
    setInputValue(newValue)
  }
  function handleKeyDown({keyCode, key}) {
    // space bar 
    if (keyCode === 32) {
      setInputValue("")
      checkMatch()
      setCurrWordIndex(currWordIndex + 1)
      setCurrCharIndex(-1)
    // backspace
    } else if (keyCode === 8) {
      setCurrCharIndex(currCharIndex - 1)
      setCurrChar('')
    } else {
      setCurrCharIndex(currCharIndex + 1)
      setCurrChar(key)
    }
  }
  function checkMatch(){
    const wordToCompare = words[currWordIndex]
    const doesItMatch = wordToCompare === inputValue.trim()
    if(doesItMatch){
      setCorrect(correct + 1)
    } else setIncorrect(incorrect + 1)
  }
  function getCharClass(wordIndex, letterIndex, letter) {
    if (wordIndex === currWordIndex) {
      const trimmedInputValue = inputValue.trim();
      if (letterIndex < trimmedInputValue.length) {
        return trimmedInputValue[letterIndex] === letter ? 'correct' : 'incorrect';
      }
      if (letterIndex === trimmedInputValue.length) {
        return 'letterActive';
      }
    }
    return '';
  }
  function handleClick(){
    setStatus('playing')
    setCurrWordIndex(0)
    setCurrCharIndex(-1)
    setInputValue('')
    setCorrect(0)
    setIncorrect(0)
  }
  
  useEffect(() => {
    const WORDS = data.sort(() => Math.random() - 0.5).slice(0, 48);
   setWords(WORDS)
  },[] )
  useEffect(() => {
    let intervalId;
    if (status === 'playing') {
      intervalId = setInterval(() => {
        setTimerValue(prevTimerValue => {
          if (prevTimerValue === 0) {
            clearInterval(intervalId);
            setStatus('finished');
            return 60;
          } else {
            return prevTimerValue - 1;
          }
        });
      }, 1000);
    } else if (status === 'finished') {
      clearInterval(intervalId);
      setCurrWordIndex(0)
      setCurrCharIndex(-1)
      setInputValue('')
      
    }
    return () => clearInterval(intervalId);
  }, [status]);
  return (
    <>
      { 
      status === 'playing' &&
      <>
        <Timer timerValue={timerValue} />
        <section className='mono-game'>
        {words.length === 0 ? 
          <p>Loading...</p>
          : 
          words.map((word, wordIndex) => 
            <span className='word' key={wordIndex}>
              
              {word.split('').map((letter, letterIndex) => 
                <span key={`${wordIndex}-${letterIndex}`} className={getCharClass(wordIndex,letterIndex,letter)}>
                  {letter}
                </span>
              )}
            </span>
          )
      }
      <input className='Game-input' onKeyDown={handleKeyDown} maxLength={inputMaxLength} autoFocus onChange={handleChange} type='text' value={inputValue} />
        </section>
         
      </>
      }
      {
        status === 'finished' &&
        <>
         <section className='results'>
            <h2>WPM : <span>{correct}</span></h2>
            <h2>Acurracy: <span>{roundedAccuracy}%</span></h2>
            <button onClick={handleClick}>PlayAgain</button>
          </section>
        </>
      }
      
    </>
  );
}

export default App;