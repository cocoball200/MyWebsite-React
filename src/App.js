import React, { Component } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { ProjectData } from './data/ProjectData';
import GlobalStyle from './golobalStyles';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Navbar />
        <Hero dataList={ProjectData} />
      </>
    );
  }
}

export default App;