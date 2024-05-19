import { useRef, useEffect } from "react";
import { Timer } from "../Timer/Timer.jsx";
import './index.css'
export const MonoGame = ({ setInputRef, status, words, getCharClass, handleKeyDown, inputMaxLength, handleChange, inputValue,handleMaxWords,timerValue,maxWords,currWordIndex }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    setInputRef(inputRef.current);
    inputRef.current.focus(); // Enfocar el input cuando el componente se monta
  }, [setInputRef]);

  return (
    <>
    <main className="main">
     
     <section className="mono-game-timer-wrap">
      <Timer  handleMaxWords={handleMaxWords} timerValue={timerValue} maxWords={maxWords} currWordIndex={currWordIndex} />
     </section>
     <section className='mono-game'>

      {words.length === 0 ?
        <p>Loading...</p>
        :
        words.map((word, wordIndex) =>
          <span className='word' key={wordIndex}>
            {word.split('').map((letter, letterIndex) =>
              <span key={`${wordIndex}-${letterIndex}`} className={getCharClass(wordIndex, letterIndex, letter)}>
                {letter}
              </span>
            )}
          </span>
        )
      }
      <input ref={inputRef} disabled={status === 'finished' && true} className='Game-input' onKeyDown={handleKeyDown} maxLength={inputMaxLength} autoFocus onChange={handleChange} type='text' value={inputValue} />
     </section>
    </main>
    </>
    
  );
};
