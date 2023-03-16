import React, { useState } from 'react';

const Action = () => {
    const [count, setCount] = useState(0);

    return (
    <div className="action-container">
        <h2>Testa den här funktionen! </h2>
                <p>Du har klickat</p> <h3>{count}</h3> <p>gånger!</p>
                <button onClick={() => setCount(count + 1)}> Klicka på mig!
                </button> 
    </div>
)}


export default Action;