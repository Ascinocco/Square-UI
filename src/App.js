import React from 'react';
import FontAwesome from 'react-fontawesome';
import faStyles from 'font-awesome/css/font-awesome.css';

import logo from './logo.svg';
import styles from './App.css';

const App = () => (
  <div className={styles.app}>
    <header className={styles['app-header']}>
      <img src={logo} className={styles['app-logo']} alt={'logo'} />
      <h1 className={styles['App-title']}>Welcome to React</h1>
    </header>
    <p className={styles['app-intro']}>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <div>
      Meet Anthony
      <FontAwesome
        cssModule={faStyles}
        name={'linkedin'}
      />
    </div>
  </div>
);

export default App;
