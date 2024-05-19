import { useRef, useEffect } from "react";

export const MonoGame = ({ setInputRef, status, words, getCharClass, handleKeyDown, inputMaxLength, handleChange, inputValue }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    setInputRef(inputRef.current);
    inputRef.current.focus(); // Enfocar el input cuando el componente se monta
  }, [setInputRef]);

  return (
    <main className='mono-game'>
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
    </main>
    
  );
};
