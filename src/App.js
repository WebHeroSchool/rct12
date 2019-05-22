import React from 'react';
import logo from './logo.svg';
import './App.css';

const nigel = 'Nigel';
const isLeg = false;
const isHappy = true;

function App() {
  return (
    <div className="App">
     <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
       
        
        <h1 style={{
          color: 'orange'
        }}>
        Making plans for Nigel
        </h1>
        <p style={{
          width: 615,
          textAlign: 'left'
        }}>
          We're only making plans for {nigel},
          We're only want what's b{3}st for him.
          We're only making plans {140 - 136} Nigel,<br></br>
          Nigel just needs tihs helping {!isLeg && 'hand'}.<br></br>
         And when young Nigel says he's {isHappy ? 'happy': 'unhappy'},
        </p>
        <p>
          I'm like Lening in jail, I've got an invisble ink. Check this out, man!
          {undefined}
          {null}
          {false}
          {true}
        </p>
      </header>
    </div>
  );
}

export default App;
