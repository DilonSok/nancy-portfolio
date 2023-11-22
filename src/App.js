import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.js';
import HomePage from './components/homePage.js';
import cvPage from './components/cvPage.js';
import ContactPage from './components/contactPage.js';

function App() {
  return (
    <Router>
      <div className='whole-page'>
        <Navbar />
        <div className='main-content'>
          <Routes>
            <Route exact path="/home" Component={HomePage} ></Route>
            <Route path="/cv" Component={cvPage} ></Route>
            <Route path="/contact" Component={ContactPage} ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
