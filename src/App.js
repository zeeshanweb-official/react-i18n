import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next';
function App() {
  const { t, i18n } = useTranslation();
  async function handleClick (event){
    await i18n.changeLanguage(event.target.name);
  }

  return (
    <div className="App">
      <nav style={{width:"100%", padding:"2rem", backgroundColor:"lightgray"}}>
        <button name="en" onClick={handleClick}>English</button>
        <button name="ko" onClick={handleClick}>Korian</button>
        <button name="ur" onClick={handleClick}>Urdu</button>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t('thanks.1')}</p>
        <Link style={{color:"white"}} to="/users">
        {t('Home.1')}
        </Link>
      </header>
    </div>
  );
}

export default App;
