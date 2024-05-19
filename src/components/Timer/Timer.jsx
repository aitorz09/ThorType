
import { useEffect } from 'react'
import './index.css'
export const Timer = ({handleMaxWords,timerValue, maxWords, currWordIndex}) => {
  return (
    <>
    <section className="timer-wrap">
      <p className="timer-timer">{timerValue}</p>
      <p className="timer-words-count">{`${currWordIndex}/${maxWords}`}</p>
      <div className='dificulty-wrap'>
        <button onClick={()=>{
          handleMaxWords(32)
        }} className='easy'>Easy</button>
        <button onClick={()=>{
          handleMaxWords(48)
        }}  className='medium'>Medium</button>
        <button onClick={()=>{
          handleMaxWords(64)
        }} className='hard'>Hard</button>
      </div>
    </section>
  
    </>

  )
}
