import React from 'react';

function Squats(props) {
    return (
        <div>
            <h2>Squats: {props.state.squats}</h2>
            <button onClick={() => props.dispatch({ "type": "increment1" })}>Add Squats</button>
            <button onClick={() => props.dispatch({ "type": "decrement1" })}>Remove Squats</button>
        </div>
    )
}

export default Squats;