import React from 'react';

function Lunges(props) {
    return (
        <div>
            <h2>Lunges: {props.state.lunges}</h2>
            <button onClick={() => props.dispatch({ "type": "increment2" })}>Add Lunges</button>
            <button onClick={() => props.dispatch({ "type": "decrement2" })}>Remove Lunges</button>
        </div>
    )
}

export default Lunges;