import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './styles.css';
import SidebarNav from './components/SidebarNav';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import Search from './pages/Search';
import MyList from './pages/MyList';
import Settings from './pages/Settings';

// PUBLIC_INTERFACE
function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();

  const sectionTitle = (() => {
    switch (location.pathname) {
      case '/':
        return 'Home';
      case '/search':
        return 'Search';
      case '/my-list':
        return 'My List';
      case '/settings':
        return 'Settings';
      default:
        return 'Home';
    }
  })();

  // Basic keyboard/remote-like navigation for sections
  const handleGlobalKeyDown = (e) => {
    // Allow arrow keys for scrolling rails; Enter handled at tile level
    if (e.key === 'F1') {
      navigate('/');
    } else if (e.key === 'F2') {
      navigate('/search');
    }
  };

  return (
    <div className="app-shell" onKeyDown={handleGlobalKeyDown}>
      <SidebarNav />
      <TopBar title={sectionTitle} onSearch={() => navigate('/search')} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/my-list" element={<MyList />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

// PUBLIC_INTERFACE
export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
