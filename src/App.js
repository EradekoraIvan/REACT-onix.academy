import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Profile from './pages/profile/profile';
import Biography from './pages/biography/temp';
import Layout from './Layout/Layout';
import NewsList from './pages/News/NewsList/NewsList';
import LandingPage from './pages/landing_page/landingPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/" element={<Layout />}>
            <Route path="pages/biography/biography.js" element={<Biography />} />
            <Route path="profile/profile.js" element={<Profile />} />
            <Route path="News/NewsList/NewsList.js" element={<NewsList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
