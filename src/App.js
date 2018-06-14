import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRPC';
import Portal from './Portal';
import Modal from './Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Toggle>     
              {({on, handleToggle}) => (
                <Fragment> 
                  <button onClick={handleToggle}>Login</button>
                  <Modal on={on} handleToggle={handleToggle}>
                    <h1>Still in modal</h1>
                  </Modal>
                </Fragment>
              )}  
        </Toggle>

        <Portal>
        <h1>Hi Im in a portal</h1>
        </Portal>
      </div>
    );
  }
}

export default App;
