
export const MonoGame = ({words,getCharClass,handleKeyDown,inputMaxLength,handleChange,inputValue}) => {
  return (
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
  )
}
