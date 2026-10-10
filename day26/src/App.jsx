import React from 'react'
import Navbar from './components/Navbar';
import "./App.css";
import Header from './components/Header';
import Main from './components/Main';
import Center from './components/Center';
import Help from './components/Help';
import Design from './components/Design';
import Under from './components/Under';
import Car from './components/Car';
import Demo from './components/Demo';
import Last from './components/Last';


const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <Center/>
      < Help />
      <Design />
      <Under />
      <Car />
      <Demo />
      <Last />
      

    </>
  )
}

export default App