import React from 'react';
import logo from './logo.svg';
import styles from './App.css';

const App = () => (
  <div className={styles.App}>
    <header className={styles['app-header']}>
      <img src={logo} className={styles['app-logo']} alt='logo' />
      <h1 className={styles['App-title']}>Welcome to React</h1>
    </header>
    <p className={styles['app-intro']}>
      To get started, edit <code>src/App.js</code> and save to reload.
      <i className='fa fa-address-card' aria-hidden='true' />
    </p>
  </div>
);

export default App;
