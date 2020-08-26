import "../styles/App.css";

import React, { Component } from "react";
import Base from "./Base";
import SideBar from './SideBar';
import Header from './HeaderComponent';
import Tab from  './TabComponent';
import Main from './MainComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SideBar />
      </div>
    );
  }
}
export default App;