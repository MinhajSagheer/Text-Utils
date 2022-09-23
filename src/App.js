import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert'
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react';

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom"; 

function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been Enabled","success")
      document.title = 'Text-Utils Dark Mode';
      
      // setInterval(() => {
      //   document.title = 'Text-Utils is Amazing';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Install Text-Utils';
      // }, 1500);

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been Enabled", "success")
      document.title = 'Text-Utils Light Mode';      
    }
  }
  return (
    <>
    {/* <BrowserRouter>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      <Route path="/" element = {<TextForm heading = "MyTextArea" mode={mode}/>}/>
      <Route path="/about" element = {<About />}/>
    </Routes>
    </div>
    </BrowserRouter> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm showAlert={showAlert} heading = "MyTextArea" mode = {mode}/>
    </div>
    </>
  );
}
export default App;
