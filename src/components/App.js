import "../styles/App.css";

import React, { Component, useState } from "react";
import SideBar from './SideBar';
import Header from './HeaderComponent';
import Tab from  './TabComponent';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [menuItem, setActiveMenu] = useState("notes");

  return (
    <div>
      <Header menuItem={menuItem}/>
      <SideBar setActiveMenu={setActiveMenu}/>
    </div>
  );
}

export default App;