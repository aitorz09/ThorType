/* eslint-disable react/prop-types */

export const Results = ({correct,roundedAccuracy,handleClick}) => {
  return (
    <section className='results'>
            <h2>WPM : <span>{correct}</span></h2>
            <h2>Acurracy: <span className="">{roundedAccuracy}%</span></h2>
            <button onClick={handleClick}>PlayAgain</button>
      </section>
  )
}
