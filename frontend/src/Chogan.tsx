import React from 'react';

import AuthPage from './pages/AuthPage';
import ProjectsHome from './components/ProjectsHome';
import './Chogan.css';
import Home from './pages/home/Home';
import Routes from './routes/Routes';


function Chogan() {
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default Chogan;

//<Home/>
//<AuthPage/>