/*import React, { useState } from 'react';
import Button from './button.jsx';

function UseButton() {
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("#ffffff");
        const randColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setColor(randColor);


    return (
        <div>
            <h2>Reusable Buttons </h2>
            <Button text="Click Me" onclick={() => setMessage("You clicked the first button!")} className="click" />
            <Button text="Submit" onclick={() => alert("Submitted")} className="submit" />
            <Button text="Danger" onclick={(e) => e.target.style.background = "rgb(34, 3, 3)"} className="danger" />
            <Button text="Change BG" onclick={() => document.body.style.background = "randColor"} className="c" />
            <h5>{message}</h5>

        </div>
    )
}*/
import React, { useState } from 'react';
import Button from './button.jsx';

function UseButton() {
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("#ffffff");

    const changeBgColor = () => {
        const randColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setColor(randColor);
        document.body.style.background = randColor;
    };

    return (
        <div>
            <h2>Reusable Buttons</h2>

            <Button 
                text="Click Me" 
                onClick={() => setMessage("You clicked the first button!")} 
                className="click" 
            />

            <Button 
                text="Submit" 
                onClick={() => alert("Submitted")} 
                className="submit" 
            />

            <Button 
                text="Danger" 
                onClick={(e) => e.target.style.background = "rgb(34, 3, 3)"} 
                className="danger" 
            />

            <Button 
                text="Change BG" 
                onClick={changeBgColor} 
                className="c" 
            />

            <h5>{message}</h5>
        </div>
    );
}

export default UseButton;

