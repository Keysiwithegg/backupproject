import React from 'react';
import './App.css';

// Import all the components here----->
import Sidebar from './Components/Sidebar Section/Sidebar'
import Body from './Components/Body Section/Body'
import Account from './Components/Account Section/Account'


const App = () => {
  return (
    <div className='container'>
      
      <Sidebar/>
      <Body/>
      <Account/>
    </div>
  )
}

export default App