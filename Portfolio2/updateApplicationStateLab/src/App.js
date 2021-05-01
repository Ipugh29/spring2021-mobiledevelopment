import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { state, reducer } from './components/ApplicationState';
import Squats from './components/Squats';
import Lunges from './components/Lunges';
import Pushups from './components/Pushups';
import Pullups from './components/Pullups';
import Crunches from './components/Crunches';

function App() {

  const [currentState, dispatch] = useReducer(reducer, state);
  return (
    <div className="App">
      <header className="App-header">
        <Squats state={currentState} dispatch={dispatch} />
        <Lunges state={currentState} dispatch={dispatch} />
        <Pushups state={currentState} dispatch={dispatch} />
        <Pullups state={currentState} dispatch={dispatch} />
        <Crunches state={currentState} dispatch={dispatch} />
      </header>
    </div>
  );
}

export default App;
