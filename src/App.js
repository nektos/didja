import React, { useState } from 'react';
import hungry from './hungry.gif';
import Fab from '@material-ui/core/Fab';
import PetsIcon from '@material-ui/icons/Pets';
import full from './full.gif';
import './App.css';

const period = 12 * 60 * 60 

function App() {
  const [lastTime, setLastTime] = useState(0);

  function handleClick() {
    setLastTime(Date.now());
  }
  
  function isFed() {
    let last = new Date(lastTime);
    let now = new Date();
    if(now - last > period) {
      return false;
    } else {
      return true;
    }
  }
  return (
    <div className="App">
      <header className="App-header">
      {!isFed() && 
        <React.Fragment>
          <img src={hungry} alt="hungry"/>
          Feed me, human!
          <Fab color="primary" onClick={handleClick}> 
            <PetsIcon />
          </Fab>
       </React.Fragment>
      }
      {isFed() &&
       <React.Fragment>
          <img src={full} alt="full"/>
          I was fed. 
       </React.Fragment>
      }
        
        <p>
          Last fed: {new Date(lastTime).toLocaleString()}
        </p>
      </header>
    </div>

  );
}

export default App;
