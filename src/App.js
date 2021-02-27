
import React, { Component} from "react";
import './App.css';
import About from './pages/About';

import aboutKris from './aboutKris';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <About aboutKris={aboutKris}/>
       
        
      </div>
    );
  }
}

export default App;