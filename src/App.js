//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
//import { Router } from 'react-router-dom';
import LayoutComponent from './components/layout';

import {browserHistory} from './components/route'
function App() {
  return (
    <div className="App">
      <header className="App-header">
     
          <LayoutComponent />
      
      </header>
    </div>
  );
}

export default App;
