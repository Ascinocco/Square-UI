import React from 'react';

import CardGallery from '../components/gallery/Card';
import Sidebar from '../components/external/Sidebar';

import styles from './App.css';


const App = () => (
  <div>
    <Sidebar>
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </Sidebar>
    <div className={styles.app}>
      <CardGallery />
    </div>
  </div>
);

export default App;
