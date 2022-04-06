import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");

    const resetText = () => {
        setText("");
    }

    const convertLower = () => {
        setText(text.toLowerCase());
    }

    const convertCapital = () => {
        //console.log("Converted");
        const newText = text.toUpperCase();
        setText(newText);
    }

    const onChangingText = (event) => {
        //console.log("Text is changed");
        setText(event.target.value);
    }

    return (
        <>
        <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={onChangingText} id="my-text" rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={convertCapital}>Convert into Capital</button>
            <button type="button" className="btn btn-info mx-3" onClick={convertLower}>Convert into Lower</button>
            <button type="button" className="btn btn-secondary" onClick={resetText}>Reset TextBox</button>
        </div>
        <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words & {text.length} characters. </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text to preview it here!"}</p>
        </div>
        </>
    )
}
