import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import MiniSkipHire from './pages/MiniSkipHire';
import BuildersSkipHire from './pages/BuildersSkipHire';
import SameDaySkipHire from './pages/SameDaySkipHire';
import WhatCanYouPutInASkip from './pages/WhatCanYouPutInASkip';
import SkipSizesGuide from './pages/SkipSizesGuide';
import Beeston from './pages/areas/Beeston';
import Sandiacre from './pages/areas/Sandiacre';
import Sawley from './pages/areas/Sawley';
import Breaston from './pages/areas/Breaston';
import Draycott from './pages/areas/Draycott';
import Borrowash from './pages/areas/Borrowash';
import Toton from './pages/areas/Toton';
import Stapleford from './pages/areas/Stapleford';
import Chilwell from './pages/areas/Chilwell';
import Bramcote from './pages/areas/Bramcote';
import Ilkeston from './pages/areas/Ilkeston';
import Nottingham from './pages/areas/Nottingham';
import Derby from './pages/areas/Derby';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mini-skip-hire" element={<MiniSkipHire />} />
            <Route path="/builders-skip-hire" element={<BuildersSkipHire />} />
            <Route path="/same-day-skip-hire" element={<SameDaySkipHire />} />
            <Route path="/blog/what-can-you-put-in-a-skip" element={<WhatCanYouPutInASkip />} />
            <Route path="/blog/skip-sizes-guide" element={<SkipSizesGuide />} />
            <Route path="/areas/beeston" element={<Beeston />} />
            <Route path="/areas/sandiacre" element={<Sandiacre />} />
            <Route path="/areas/sawley" element={<Sawley />} />
            <Route path="/areas/breaston" element={<Breaston />} />
            <Route path="/areas/draycott" element={<Draycott />} />
            <Route path="/areas/borrowash" element={<Borrowash />} />
            <Route path="/areas/toton" element={<Toton />} />
            <Route path="/areas/stapleford" element={<Stapleford />} />
            <Route path="/areas/chilwell" element={<Chilwell />} />
            <Route path="/areas/bramcote" element={<Bramcote />} />
            <Route path="/areas/ilkeston" element={<Ilkeston />} />
            <Route path="/areas/nottingham" element={<Nottingham />} />
            <Route path="/areas/derby" element={<Derby />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}
