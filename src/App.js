import React from 'react';
import './App.css';
import CampsitesDirectory from './pages/CampsitesDirectory';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesDirectory />
      <Footer />
    </div>
  );
}

export default App;
