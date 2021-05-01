import React from 'react';

function Pushups(props) {
    return (
        <div>
            <h2>Pushups: {props.state.pushups}</h2>
            <button onClick={() => props.dispatch({ "type": "increment3" })}>Add Pushups</button>
            <button onClick={() => props.dispatch({ "type": "decrement3" })}>Remove Pushups</button>
        </div>
    )
}

export default Pushups;