
import React, { Component} from "react";
import './App.css';
import About from './pages/About';
import Navbar from './components/Navbar/Navbar';
import aboutKris from './aboutKris';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <About aboutKris={aboutKris}/>
       
        
      </div>
    );
  }
}

export default App;