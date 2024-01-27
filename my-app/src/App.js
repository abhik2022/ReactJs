import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode1 = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');
      document.title = 'TechBEE - light mode'

      // jo ads run hote h wo wli videos dekhte time...wo setinterval se set hote h...jbhi baar baar blink krte h
      // setInterval(() => {
      //   document.title = 'Install right now'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Risk - virus found '
      // }, 1500);
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark Mode has been enabled', 'success');
      document.title = 'TechBEE - dark mode'
    }
  }

  const toggleMode2 = () => {
    if (mode === "green") {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');
      document.title = 'TechBEE - light mode'
    }
    else {
      setMode("green");
      document.body.style.backgroundColor = '#198251'
      showAlert('Green Mode has been enabled', 'success');
      document.title = 'TechBEE - green mode'
    }
  }

  const toggleMode3 = () => {
    if (mode === "yellow") {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');
      document.title = 'TechBEE - light mode'
    }
    else {
      setMode("yellow");
      document.body.style.backgroundColor = '#ffc107'
      showAlert('Yellow Mode has been enabled', 'success');
      document.title = 'TechBEE - yellow mode'
    }
  }

  return (
    // making a basic website with bootstrap...
    // there will be some error when we direct copy paste from bootstrap...close tags like img,hr...and replace classname...
    <>
      {/* <Navbar title="TechBee" disableText="moye_moye"/> */}
      <Router>
        <Navbar title="TechBee" mode={mode} toggleMode1={toggleMode1} toggleMode2={toggleMode2} toggleMode3={toggleMode3} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}>              
            </Route>
            <Route exact path="/" element={<TextForm heading="Tell Us About Yourself" mode={mode} showAlert={showAlert} />}>              
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
