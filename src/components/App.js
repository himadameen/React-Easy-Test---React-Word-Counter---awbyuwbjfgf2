import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [count , setCount] = useState({ wordCount : 0 , charCount : 0});
  
  const num = document.querySelector("#char-limit-input");

  const handleChange = (e) => {
      const val = e.target.value;
      const words = (val) => {
        if(val.length === 0){
          return 0;
        }else{
          val = val.replace(/(^\s*)|(\s*$)/gi,"");
          val = val.replace(/[ ]{2,}/gi," ");
          val = val.replace(/\n /,"\n");
          return val.split(' ').length; 
        }
      }

      setCount({
        wordCount: words(val),
        charCount: val.length
      })
  }

  return (
    <div id="main">
        <textarea id='textarea' onChange={handleChange} ></textarea>
        <p>The Total Word Count : </p>
        <div id='word-counter'>{count.wordCount}</div>
        <p>The Total Character Count : </p>
        <div id='char-counter'>{count.charCount}</div>
        <p>Words limit</p>
        <input type="number" id="char-limit-input" max="50" />
        <p>Font size</p>
        <input type='range' id='font-size-input' min="16px" max="32px" />
    </div>
  )
}


export default App;
