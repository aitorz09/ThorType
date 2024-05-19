/* eslint-disable react/prop-types */
import "./index.css"
export const Results = ({correct,roundedAccuracy,handleClick}) => {
  return (
    <section className='results'>
            <h2>WPM : <span>{correct}</span></h2>
            <h2>Acurracy: <span className={roundedAccuracy >= 70 ? "good" : (roundedAccuracy > 30 && roundedAccuracy < 70 ? 'regular' : 'bad')}>{roundedAccuracy}%</span></h2>
            <button onClick={handleClick}>PlayAgain</button>
      </section>
  )
}
