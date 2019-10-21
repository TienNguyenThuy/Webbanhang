import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Banner from './Components/Banner/Banner';
import Tab from './Components/Tab/Tab';

function App() {
  return (
    <div>
      <div>
      <Header/>
      </div>
      <div>
        <Banner/>
      </div>
      <div>
        <Tab/>
      </div>
    </div>
  );
}

export default App;
