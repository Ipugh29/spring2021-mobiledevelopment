import React from 'react';

function Pullups(props) {
    return (
        <div>
            <h2>Pushups: {props.state.pullups}</h2>
            <button onClick={() => props.dispatch({ "type": "increment4" })}>Add Pullups</button>
            <button onClick={() => props.dispatch({ "type": "decrement4" })}>Remove Pullups</button>
        </div>
    )
}

export default Pullups;