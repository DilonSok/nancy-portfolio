import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.js';
import Sidebar from './components/sidebar.js';
import HomePage from './components/homePage.js';
import ResearchPage from './components/researchPage.js';
import TalksPage from './components/talksPage.js';
import PublicationsPage from './components/publicationsPage.js';
import cvPage from './components/cvPage.js';

function App() {
  return (
    <Router>
      <div className='whole-page'>
        <Navbar />
        <Sidebar />
        <div className='main-content'>
          <Routes>
            <Route exact path="/home" Component={HomePage} ></Route>
            <Route path="/research" Component={ResearchPage} ></Route>
            <Route path="/publications" Component={PublicationsPage} ></Route>
            <Route path="/talks" Component={TalksPage} ></Route>
            <Route path="/cv" Component={cvPage} ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
