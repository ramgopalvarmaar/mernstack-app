import "../styles/App.css";

import React, { Component } from "react";
import SideBar from './SideBar';
import Header from './HeaderComponent';
import Tab from  './TabComponent';

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