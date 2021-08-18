import React from "react";

import './App.css';

import DashboardMain from './DashboardMain';
import Store from './Store'

function App() {
  return (
    <div className="App">
      <Store>
        <DashboardMain />
      </Store>    
    </div>
  );
}

export default App;
