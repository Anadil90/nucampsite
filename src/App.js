import { Routes, Route } from 'react-router-dom';
import './App.css';
import CampsitesDirectory from './pages/CampsitesDirectory';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='contact' element={<ContactPage />}/>
          <Route path='directory' element={<CampsitesDirectory />}/>
          <Route 
            path='directory/:campsiteId'
            element={<CampsiteDetailPage />}
          />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
