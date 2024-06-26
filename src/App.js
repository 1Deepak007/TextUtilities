import React, { useState } from 'react';
import './App.css';

//=========> import components
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

//==============> App component
function App() {
  const [mode, setMode] = useState('light');          // (mode state)  enable dark mode   (prop)
  const [alert, setAlert] = useState(null);           // (alert state) 


  const showAlert = (messages, type) => {             // type refers to type of alert
    setAlert({
      msg: messages,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {                          // enabla dark or light mode with toggle button
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled","success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
    }
  }


  return (
    <>
      {/* used imported component navbar */}

      {/* <Navbar></Navbar> */}
      <Navbar title="Textutils" home="Home" aboutText="About" mode={mode} toggleMode={toggleMode} />

      {/* Alert component */}
      <Alert alert={alert} />

      {/* TextForm component */}
      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}></TextForm>
      </div>


      {/* About component */}
      {/* <div className="container my-3">
        <About/>
      </div> */}

    </>
  );
}

export default App;