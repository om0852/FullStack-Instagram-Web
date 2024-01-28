import './App.css';
import { AppProvider } from './context/exit';
import { Provider } from 'react-redux';
import Main from './Main';
import { useState } from 'react';

function App() {
  
  
  return (
    <AppProvider>
  
      <Main/>

      {/* <h2>om</h2> */}

    </AppProvider>
  
      
  );
}

export default App;
