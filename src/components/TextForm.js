// react function based component (rfc)

import React, { useState } from 'react'


// console.log()

export default function TextForm(props) {

    const handleOnChange = (event) => {
        console.log("OnChange function triggered");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        console.log("handleUpClick function trigerred");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(": Converted to uppercase", "success");
    }

    const handlelowClick = () => {
        console.log("handlelowClick function trigerred");
        let newText1 = text.toLocaleLowerCase();
        setText(newText1);
        props.showAlert(": Converted to lowercase", "success");
    }

    const handleClear = () => {
        console.log("handleClear function triggered");
        setText("");
        props.showAlert(": All cleared", "success");
    }

    const handleCopyText = () => {
        console.log("handleCopyText function triggered");
        let ctext = document.getElementById("myBox");
        ctext.select();
        navigator.clipboard.writeText(ctext.value);
        props.showAlert(": Text copied successfully", "success");
    }

    const removeExtraSpaces = () => {
        console.log("removeExraSpaces function triggered");
        let remXtra = text.split(/[ ]+/);
        setText(remXtra.join(" "));
        props.showAlert(": Removed extra spaces", "success");
    }


    // text name ki state variable set kari jiski def value h "Enter text here" , "setText" se iska test set krngy
    const [text, setText] = useState('Enter text here');

    return (
        <>
            <div className="container" style={{ color: props.mode=== 'dark'?'white':'#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3 mt-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode=== 'dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743' }} id="myBox" rows="10"></textarea>
                </div>

                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UPPERCASE</button>

                <button className='btn btn-success mx-1' onClick={handlelowClick}>Convert To lowercase</button>

                <button className="btn btn-danger mx-1" onClick={handleClear}>Clear</button>

                <button className="btn btn-dark mx-1" onClick={handleCopyText}>Copy All Text</button>

                <button className="btn btn-secondary mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>

                <div className="container" style={{ color: props.mode=== 'dark'?'white':'#042743' }}>
                    <h4>Your text Summary</h4>
                    <p>Total characters : {text.length}</p>
                    <p>Total words : {text.split(" ").length - 1}</p>
                    <h4>Preview</h4>
                    <p>{text.length>0 ? text: "Enter something to preview it here"}</p>
                </div>
            </div>
        </>
    )
}