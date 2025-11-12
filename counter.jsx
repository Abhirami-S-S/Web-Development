/*import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Counter updated to : ${count}`);
    }, [count]);

    return (
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
}

export default Counter;

*/
/*
import React, { useState, useEffect } from 'react';
//import './count.css';
function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {}, [count]);
    return (
        <div>
            <h1>Counter :{count}</h1>
            <button class='in' onClick={() => setCount(count + 1)}>Increment</button>
            <button class='de' onClick={() => setCount(count - 1)}>Decrement</button>
            <button class='reset' onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}
export default Counter;

*/
import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');

    useEffect(() => {
        setMessage(`${count}`);
    }, [count]); // runs every time "count" changes

    return (
        <div>
            <h1>Counter : {message}</h1>
            <button className='in' onClick={() => setCount(count + 1)}>Increment</button>
            <button className='de' onClick={() => setCount(count - 1)}>Decrement</button>
            <button className='reset' onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;
