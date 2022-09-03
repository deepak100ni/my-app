// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import React, {useState} from 'react'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')//wheather dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toogleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert('Dark Mode Enabled','success');
      document.title='TextUtils (Dark Mode)';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light Mode Enabled', 'success');
      document.title = 'TextUtils (Light Mode)';
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="About Us" homeText="Home" mode={mode} toogleMode={toogleMode}></Navbar>
    <Alert alert={alert} />
    <div className="container my-3">
      {/* <Routes >
          <Route exact  path = "/about" element = {<About />} ></Route>
          <Route  exact path="/" element= {<TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />}>
            
          </Route>
        </Routes > */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
