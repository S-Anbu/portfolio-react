import './App.css';
import React from 'react';
import Navcomponent from './components/Navcomponent';
import Body from './components/Body';
function App() {

  return (
    <>
    <Navcomponent/>
    <div className='mt-12'>
    <Body/>
    </div>
    </>
  )
}

export default App
