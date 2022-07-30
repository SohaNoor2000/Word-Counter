import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from 'react';
/* this is file */

function App() {
  
const [mode,changeMode]=useState('light');
const toggle=()=>{
  if(mode=='light'){
    changeMode('dark');
    document.body.style.backgroundColor='#1a3e62';
  }
  else{
    changeMode('light');
    document.body.style.backgroundColor='white';
  }
}
  return (
    <>
      <Navbar title="Title" about="ABOUT-US" mode={mode} ChangeColor={toggle}/>
      <Textform Heading="Enter Text Here!" mode={mode}/>
    </>
  );
}

export default App;

