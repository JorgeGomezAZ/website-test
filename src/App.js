import React from 'react'
import Portfolio from './Portfolio'
import { Route } from "react-router-dom";
import Palabraz from './Palabraz';

function App()
{
  return (
    <div className='App'>
      <Portfolio />
      {/* <Route exact path="/" component={Portfolio} />
      <Route exact path="/palabraz" component={Palabraz} /> */}
    </div>
  )
}

export default App