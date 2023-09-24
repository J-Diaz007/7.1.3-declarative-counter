import React from 'react'
import {useState} from 'react'
//import React, { useState } from 'react'
//Line 3 is the same as lines 1 & 2 of code above

//NOTE: You ALMOST NEVER want to make a global variable this way in a finished app. 
// (with window.changeCounter = changeCounter)
function App(){
    let [ counter, changeCounter ] = useState(1)
    window.changeCounter = changeCounter
    return (
        <div>
          <h1>{counter}</h1>
          <h4>{counter}</h4>
        </div>
    )
}

export default App;


//////////////////////////////////////
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
