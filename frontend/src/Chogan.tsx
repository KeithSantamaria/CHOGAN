import React from 'react';

import ProjectsHome from './components/ProjectsHome';
import './Chogan.css';
import Home from './pages/home/Home';


function Chogan() {
  return (
    <div className="App">
      <ProjectsHome />
      <Home/>
    </div>
  );
}

export default Chogan;
