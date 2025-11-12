import React, { useState } from 'react';
const TextIn = () => {
    //text=type of data
    //setText= function to update the data
    //useState("")= initial value is empty string
    //handleChange= function to handle input change event
    //event= event object representing the input change

    const [text, setText] = useState("");
    const handleChange = (event) => {
        setText(event.target.value);// update text state with input value
    };
    return (
        <div>
            <h2>Input Text Below:</h2>
            <input type="text" value={text} onChange={handleChange} />
            <p>You entered: {text}</p>
        </div>
    );
};
export default TextIn;