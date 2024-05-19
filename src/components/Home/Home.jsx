import React, { useState, useEffect } from 'react';
import "./index.css";

export const Home = ({ setStatus }) => {
  const fullText = "Unna simple app para practicar tus habilidades de mecanografía inspirada en MonkeyType.";
  const [displayedText, setDisplayedText] = useState('');
 
  useEffect(()=>{
    let index = 0
    const intervalId = setInterval(() => {
      setDisplayedText((prev) =>{
        if(index < fullText.length){
          console.log(prev);
          return prev + fullText[index]
          } else{
            clearInterval(intervalId)
            return prev
          }
        })
        index++
      }, 80);
      return () => clearInterval(intervalId)
  },[])

  return (
    <section className="homepage">
      <div className="homepage-wrap">
        <h1>ThorType</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.935 39.687h-.805a2.413 2.413 0 0 1-2.413-2.414V26.011a2.413 2.413 0 0 1 2.413-2.413h.805a2.413 2.413 0 0 1 2.413 2.413v11.262a2.413 2.413 0 0 1-2.413 2.414m4.825-12.871a1.609 1.609 0 1 0 3.218 0v0a1.609 1.609 0 1 0-3.217 0zm4.827 0a1.609 1.609 0 1 0 3.217 0v0a1.609 1.609 0 1 0-3.217 0m4.826 0a1.609 1.609 0 1 0 3.217 0v0a1.609 1.609 0 1 0-3.217 0m-9.653 4.826a1.609 1.609 0 1 0 3.218 0v0a1.609 1.609 0 1 0-3.217 0zm4.827 0a1.609 1.609 0 1 0 3.217 0v0a1.609 1.609 0 1 0-3.217 0m4.826 0a1.609 1.609 0 1 0 3.217 0v0a1.609 1.609 0 1 0-3.217 0m-9.653 4.827a1.609 1.609 0 1 0 3.218 0v0a1.609 1.609 0 1 0-3.217 0zm4.827 0a1.609 1.609 0 1 0 3.217 0v0a1.609 1.609 0 1 0-3.217 0m4.826 0a1.609 1.609 0 1 0 3.217 0v0a1.609 1.609 0 1 0-3.217 0"/>
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.5 21.184h37V42.1h-37zM8.717 5.9h30.566v15.284H8.717z"/>
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18.37 9.118h17.695v12.067H18.37zm13.674 16.089h7.239v6.435h-7.24z"/>
        </svg>
      </div>
      <p className="homepage-p">{displayedText}</p>
      <button className="homepage-btn" style={{ width: '100px' }} onClick={() => setStatus('playing')}>Play as guest</button>
    </section>
  );
};
