import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import './App.css';

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient'></div>
      </div>

      <div className='app'>
        <Header />
        <Summary />
      </div>
    </main>
  )
}

export default App;
