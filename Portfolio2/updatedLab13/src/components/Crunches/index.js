import React from 'react';

function Crunches(props) {
    return (
        <div>
            <h2>Crunches: {props.state.crunches}</h2>
            <button onClick={() => props.dispatch({ "type": "increment5" })}>Add Crunches</button>
            <button onClick={() => props.dispatch({ "type": "decrement5" })}>Remove Crunches</button>
        </div>
    )
}

export default Crunches;