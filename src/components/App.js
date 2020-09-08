import "../styles/App.css";

import React, { Component } from "react";
import Base from "./Base";
import SideBar from './SideBar';
import Header from './HeaderComponent';
import Tab from  './TabComponent';
import Dictaphone from './voice-notes/Dictaphone';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SideBar />
        <Dictaphone />
      </div>
    );
  }
}
export default App;