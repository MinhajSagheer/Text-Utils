import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }

    const handleUpClick = ()=>{
        // console.log("you have to clicked on handleUpClick + uppercase was clicked: " + text)
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert("Converted to uppercase", "success")
    }

    const handleLoClick = ()=>{
        // console.log("you have to clicked on handleUpClick + uppercase was clicked: " + text)
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert("Converted to lowercase", "success")
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success")
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removes", "success")
    }


    const [text, setText] = useState('');
//   text = "new text"; wrong way to change the state
//   setText("new text");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}> 
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove extra space</button>
        </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your summary here</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

