import './App.css';
import React, { useRef, useState } from 'react';



/**Define hooks*/




function App() {
  const myRef = useRef();
  // eslint-disable-next-line 
  const [inputValue, setInputValue] = useState("");

  function post() {
    let value = myRef.current.value;
    let chatResponse = document.querySelector('.chatResponse');
    let p = document.createElement('p');
    p.className = 'userRespone';
    p.textContent = value;
    chatResponse.appendChild(p);
  }

  /**When enter key clicked add user comment to chat */
  // eslint-disable-next-line
  function enterKey() {

  }


  function handleInputChange(event) {
    setInputValue(event.target.value);
  }


  return (
    <div className="App">
      <div className='chatResponse'>

        {/**user chat box responses **/}

      </div>
      <div className='commentSec'>
        <input type='text' ref={myRef} className='txtField' onChange={handleInputChange} />

        <button onClick={post}>SEND</button>
      </div>
    </div>
  );


}





export default App;


/**hacker.io react 10 projects */
