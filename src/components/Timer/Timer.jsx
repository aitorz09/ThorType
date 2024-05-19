
import { useEffect } from 'react'
import './index.css'
export const Timer = ({getWords,timerValue, maxWords, currWordIndex}) => {
  
  return (
    <>
    <section className="timer-wrap">
      <p className="timer-timer">{timerValue}</p>
      <p className="timer-words-count">{`${currWordIndex}/${maxWords}`}</p>
    </section>
    </>

  )
}
