import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import * as React from 'react';


const title = 'here we go React'; 

function App() {
  return (
    <div>
      <h1>Oh yeah {title}</h1>

      <label for="cheese">Do you like cheese?</label>
      <input type="checkbox" name="cheese" id="cheese" />


</div> );
}
export default App;
