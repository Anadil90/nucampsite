import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CampsitesDirectory from './pages/CampsitesDirectory';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import { fetchCampsites } from './features/campsites/campsitesSlice';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampsites())//pass campsites action creator to dispatch
  }, [dispatch]) 

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='contact' element={<ContactPage />}/>
          <Route path='about' element={<AboutPage />} />
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
