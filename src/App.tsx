import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Icon } from './components/Icon';
import Home from './pages/Home';
import SkipSizes from './pages/SkipSizes';

function Layout() {
  return (
    <div className="bg-background text-on-background selection:bg-primary-fixed selection:text-primary">
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full z-50 bg-emerald-50/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(21,66,18,0.06)]">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="recycling" className="text-emerald-900 text-[28px]" />
            <span className="text-xl font-bold tracking-tighter text-emerald-900">
              LONG EATON SKIPS
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
            <Link to="/" className="text-emerald-900 font-bold">Sizes</Link>
            <a href="#" className="text-emerald-800/70 hover:text-emerald-600 transition-colors">Prices</a>
            <a href="#" className="text-emerald-800/70 hover:text-emerald-600 transition-colors">Coverage</a>
            <a href="#" className="text-emerald-800/70 hover:text-emerald-600 transition-colors">Contact</a>
          </div>
          <div className="flex items-center">
            <span className="bg-secondary text-on-secondary px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
              NO VAT
            </span>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skips" element={<SkipSizes />} />
      </Routes>

      {/* Footer */}
      <footer className="w-full pt-12 pb-32 bg-emerald-100">
        <div className="flex flex-col items-center text-center px-8 gap-6 w-full">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="recycling" className="text-emerald-900 text-[24px]" />
            <span className="text-lg font-black text-emerald-900">LONG EATON SKIPS</span>
          </Link>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {['Terms', 'Privacy', 'Coverage', 'WhatsApp Support'].map((label) => (
              <a key={label} href="#" className="text-emerald-800/80 hover:text-emerald-600 transition-colors text-sm leading-relaxed">
                {label}
              </a>
            ))}
          </div>
          <p className="max-w-2xl text-emerald-800/60 text-sm leading-relaxed">
            &copy; {new Date().getFullYear()} Long Eaton Skips. The Modern Neighbor Service.
            NO VAT on all domestic skips. Serving Long Eaton, Sandiacre, and surrounding areas.
          </p>
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 bg-emerald-50 shadow-[0_-10px_40px_rgba(21,66,18,0.08)] rounded-t-[3rem]">
        <Link to="/skips" className="flex flex-col items-center justify-center text-emerald-800 opacity-60 hover:opacity-100 active:scale-90 transition-all">
          <Icon name="straighten" />
          <span className="text-[11px] font-semibold uppercase tracking-wider mt-1">Sizes</span>
        </Link>
        <a href="#" className="flex flex-col items-center justify-center text-emerald-800 opacity-60 hover:opacity-100 active:scale-90 transition-all">
          <Icon name="payments" />
          <span className="text-[11px] font-semibold uppercase tracking-wider mt-1">Prices</span>
        </a>
        <Link to="/skips" className="flex flex-col items-center justify-center bg-yellow-400 text-emerald-950 rounded-full px-6 py-2 active:scale-90 transition-all">
          <Icon name="calendar_month" />
          <span className="text-[11px] font-semibold uppercase tracking-wider mt-1">Book</span>
        </Link>
        <a href="#" className="flex flex-col items-center justify-center text-emerald-800 opacity-60 hover:opacity-100 active:scale-90 transition-all">
          <Icon name="chat" />
          <span className="text-[11px] font-semibold uppercase tracking-wider mt-1">Contact</span>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
