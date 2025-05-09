import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState();

  let storeText = (e)=>{
    setText(e.target.value);
  }
 
  let copytoclick = useRef(null)
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
        <div className='sameline'>
        <p className='btn2' onClick={toCopy}>Copy</p>
        <p className='btn' onClick={toClear}>Clear</p>
        </div>
        
      </div>
    </>
  )
}

export default App
