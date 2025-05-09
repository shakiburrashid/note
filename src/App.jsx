import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState();

  let storeText = (e)=>{
    setText(e.target.value);
  }
 
  let toCopy = () => {
    copytoclick.current?.select();
    window.navigator.clipboard.writeText(text);
  };

  let toClear = () => {
    setText("")
  }

  return (
    <>
      <div className="container">
        <textarea className='textarea' value={text} onChange={storeText} ref={copytoclick}> 
        </textarea>
        <p className='btn' onClick={toClear}>Clear</p>
        <p className='btn2' onClick={toCopy}>Copy</p>
        
      </div>
    </>
  )
}

export default App
