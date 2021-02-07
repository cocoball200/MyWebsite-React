import React, { Component } from 'react';
import Project from './components/Project';
import Navbar from './components/Navbar';
import { ProjectData } from './data/ProjectData';
import GlobalStyle from './golobalStyles';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Navbar />
        <Project dataList={ProjectData} />
      </>
    );
  }
}

export default App;