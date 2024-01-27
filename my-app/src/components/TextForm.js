import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text is converted to uppercase', 'success');
    }
    const handleLowClick = () => {
        console.log("Lowercase clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text is converted to lowercase', 'success');
    }
    const handleOnChange = (event) => {
        console.log("ON change");
        // with below line we are setting text(value) in textarea
        setText(event.target.value);
    }      

    const [text, setText] = useState('Enter your text here');
    return (
        <>
            <div className={`container text-${props.mode==="dark"?'light':'dark'}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'white':'skyblue', color: props.mode==='dark'?'red':'green'}} id="myBox" rows="5"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-danger mx-4" onClick={handleLowClick}>Convert to lowercase</button>
            </div>
            <div className={`container text-${props.mode==="dark"?'light':'dark'} my-2`}>
                <h3>Your text summary</h3>
                <p>{text.split(/\s+/).filter((element) =>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) =>{return element.length!==0}).length} minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0 ? text : 'Enter text in textBox to preview it here'}</p>
            </div>
        </>
    )
}
