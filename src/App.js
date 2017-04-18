import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import './index.css';


class App extends Component {
  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header title="Timeline" />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
