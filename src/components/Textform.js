import React, { useState } from 'react'

export default function Textform(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase","success")
    }
    const handleCopy = () => {
        let text = document.getElementById('myBoxs')
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value)
    }
    const handleClearText = () => {
        let newText = "";
        setText(newText)
    }
    const [text, setText] = useState("")
    // text = "newText"  Wrong way to set new text
    // setText("new text") Correct way to set the text
    return (
        <>
            <div className="container" style = {{color : props.mode === 'dark' ? 'white' : '#042743'}}>

                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor : props.mode === 'dark' ? 'grey' : 'white',color :props.mode === 'dark' ? 'white' : '#172337' }} id="myBoxs" rows="8"></textarea>
                </div>
                <button disabled = {text.length == 0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled = {text.length == 0} className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled = {text.length == 0} className="btn btn-primary mx-2" onClick={handleClearText}>Clear text</button>
                <button disabled = {text.length == 0} className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container" style = {{color : props.mode === 'dark' ? 'white' : '#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element) => {return element.length != 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
            </div>
        </>
    )
}
