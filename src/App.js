import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/alert";
import { HashRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };

  const toggleMode1 = () => {
    setMode("light");
    showAlert("Light Theme Enabled", "success");
  };
  const toggleMode2 = () => {
    setMode("dark");
    showAlert("Dark Theme Enabled", "success");
  };
  const toggleMode3 = () => {
    setMode("Green");
    showAlert("Green Theme Enabled", "success");
  };
  const toggleMode4 = () => {
    setMode("Red");
    showAlert("Red Theme Enabled", "success");
  };
  const toggleMode5 = () => {
    setMode("Yellow");
    showAlert("Yellow Theme Enabled", "success");
  };

  useEffect(() => {
    const themeStyles = {
      light: { backgroundColor: "white", color: "black" },
      dark: { backgroundColor: "#212529", color: "white" },
      Green: { backgroundColor: "#2c6949ff", color: "#c4ffe5ff" },
      Red: { backgroundColor: "#f8d7da", color: "#842029" },
      Yellow: { backgroundColor: "#fff3cd", color: "#664d03" },
    };

    const applied = themeStyles[mode] || themeStyles.light;
    document.body.style.backgroundColor = applied.backgroundColor;
    document.body.style.color = applied.color;
  }, [mode]);

  return (
    <Router>
      <Navbar
        title="TEXTIFY"
        aboutext="ABOUT US"
        darkMode={mode}
        toggleMode1={toggleMode1}
        toggleMode2={toggleMode2}
        toggleMode3={toggleMode3}
        toggleMode4={toggleMode4}
        toggleMode5={toggleMode5}
      />
            <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Text Case Converter"
                darkMode={mode}
                showAlert={showAlert}
              />
            }
          />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
