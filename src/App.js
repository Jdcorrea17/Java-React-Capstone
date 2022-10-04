import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login"
import Register from "./pages/register";

function App() {
  return (
    <div>
      <Router>
                <Routes>
                    <Route path="/" exact element={<Register/>}/>
                    <Route path="/login" exact element={<Login/>}/>
                    <Route path="/home" exact element={<Home/>}/>
                </Routes>
            </Router>
    </div>
  );
}

export default App;
