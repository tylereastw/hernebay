import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import MiniSkipHire from './pages/MiniSkipHire';
import BuildersSkipHire from './pages/BuildersSkipHire';
import SameDaySkipHire from './pages/SameDaySkipHire';
import WhatCanYouPutInASkip from './pages/WhatCanYouPutInASkip';

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
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}
