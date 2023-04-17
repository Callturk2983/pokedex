import React from 'react'
import NavBar from './section/NavBar';
import Wrapper from './section/Wrapper';
import Footer from './section/Footer';
import Background from './components/Background';
import "./scss/index.scss";

function App() {
  return (
    <div className='main-container'>
      <Background />
      <div className='app'>
        <NavBar/>
        <Wrapper />
        <Footer/>
      </div>
    </div>
  )
}

export default App;
