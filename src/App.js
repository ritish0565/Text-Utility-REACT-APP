import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
// import Accordian from './components/Accordian'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  //const [red, setRed] = useState(false);

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      });

      setTimeout(() => {
        setAlert(null);
      },1000);
  }

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode set successfully!", "success");
      document.title = "Ritish - Dark Mode";

      // setInterval(()=>{
      //   document.title = "Dark Mode On"
      // },2000);

      // setInterval(()=>{
      //   document.title = "Turn it off!"
      // },1500);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode set successfully!", "success");
      document.title = "Ritish - Light mode";
    }
  }

  // const toggleRedMode = () => {
  //   if(red === false){
  //     setRed(true);
  //     document.body.style.backgroundColor = "red";
  //     showAlert("Red mode set successfully!", "success");
  //   }
  //   else{
  //     setRed(false);
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode set successfully!", "success");
  //   }
  // }

  

  return (
    <>
    {/* <Router> */}
      {/** Navbar in React using BOOTSTRAP */}
      <Navbar title="Ritish's App" about="about us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
       {/* <Routes>
        <Route path="/about" element={<Accordian/>}></Route> */}
        {/* <Route path="/" element={<TextForm heading="Enter your text to analyze" mode={mode}/>}></Route> */}
        <TextForm heading="Enter your text to analyze" mode={mode}/>
      {/* </Routes> */}
      </div>
      {/* </Router> */}
      {/* <div className="container my-4">
        <Accordian />
      </div> */}

    </>
  );
}

export default App;
