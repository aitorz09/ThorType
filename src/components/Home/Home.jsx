import "./index.css"
export const Home = ({setStatus}) => {
  return (
  
    <section className="homepage">
      <h1>Welcome to ThorType</h1>
      <button style={{width:'100px'}} onClick={()=>setStatus('playing')}>Play as guest</button>
    </section>
  
  )
}
