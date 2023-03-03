import { Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Routes from './Routes';
import { LoginProvider } from './context/LoginProvider';

function App() {
  return (
    <LoginProvider>
      <Switch>
        <Routes />
      </Switch>
    </LoginProvider>
  );
}
export default App;
