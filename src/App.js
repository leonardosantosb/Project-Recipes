import { Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Routes from './Routes';
import { LoginProvider } from './context/LoginProvider';
import SearchBarProvider from './context/SearchBarProvider';

function App() {
  return (
    <LoginProvider>
      <SearchBarProvider>
        <Switch>
          <Routes />
        </Switch>
      </SearchBarProvider>
    </LoginProvider>
  );
}
export default App;
