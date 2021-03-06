import React from 'react';
import Routes from './routes';
import './styles.css';
import Header from './components/Header/index';
import Main from './pages/main';


const App = () => (
  <div className="app">
    <Header/>
    <Routes />
  </div>
);

export default App;
