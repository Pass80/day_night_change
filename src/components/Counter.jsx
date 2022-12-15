import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [mode, setMode] = useState(false);

    const changeMode = () => {
        setMode(!mode);
    };

    return (
        <article>
            <div
                className="tag"
                style={
                    mode
                        ? { backgroundColor: '#14203c' }
                        : { backgroundColor: '#7bccf8' }
                }
            >
                {mode ? <p>Es ist Nacht ! 🌚</p> : <p> Es ist Tag ! ☀️</p>}
                <button onClick={changeMode}>
                    {mode ? 'Wechsel zu Tag' : 'Wechsel zu Nacht'}
                </button>
            </div>
        </article>
    );
};

export default Counter;
