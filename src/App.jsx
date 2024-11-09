import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState();

  let storeText = (e)=>{
    setText(e.target.value);
  }

  let toClear = () => {
    setText("")
  }

  return (
    <>
      <div className="container">
        <textarea className='textarea' value={text} onChange={storeText}>
        </textarea>
        <p className='btn' onClick={toClear}>Clear</p>
      </div>
    </>
  )
}

export default App
