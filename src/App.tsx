import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { InlineIcon } from './components/InlineIcon';
import { trackBookingClick } from './lib/tracking';
import Home from './pages/Home';
import SkipSizes from './pages/SkipSizes';
import ServicePage from './pages/ServicePage';
import LocationPage from './pages/LocationPage';

function Layout() {
  return (
    <div className="bg-background text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#f5fcef]/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(21,66,18,0.06)]">
        <nav className="flex items-center justify-between px-6 py-4 w-full max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl leading-none" aria-hidden="true">♻️</span>
            <span className="text-xl font-black text-[#154212] tracking-tighter">
              HERNE BAY SKIPS
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-tight">
            <a href="#catalog" className="text-[#154212] font-bold hover:opacity-90 transition-opacity">
              Skip Sizes
            </a>
            <a href="#why" className="text-[#171d16]/70 hover:opacity-90 transition-opacity">
              Why Us
            </a>
            <a href="#faqs" className="text-[#171d16]/70 hover:opacity-90 transition-opacity">
              FAQs
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:07782222906" className="hidden sm:flex items-center gap-2 text-[#154212] font-bold text-sm">
              <InlineIcon name="phone" size={18} />
              07782 222 906
            </a>
            <a onClick={trackBookingClick} href="https://zipskips.co.uk/?location=herne-bay" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-[#154212] to-[#2d5a27] text-white px-6 py-2.5 rounded-full font-bold text-sm active:scale-95 duration-200 shadow-lg hover:opacity-90 transition-all">
              Book Now
            </a>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skips" element={<SkipSizes />} />
        <Route path="/:slug" element={<ServicePage />} />
        <Route path="/skip-hire/:location" element={<LocationPage />} />
      </Routes>

      {/* Footer */}
      <footer className="w-full pt-16 pb-32 bg-[#e9f0e4] text-[#154212]">
        <div className="w-full max-w-7xl mx-auto px-8 grid gap-10 md:grid-cols-4">
          {/* Brand + NAP */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl leading-none" aria-hidden="true">♻️</span>
              <span className="text-lg font-bold text-[#154212]">HERNE BAY SKIPS</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-md opacity-80">
              Family-run skip hire serving Herne Bay and surrounding areas since 2015.
              Licensed waste carrier, professional service, and no VAT for domestic customers.
            </p>
            <address className="not-italic text-sm space-y-1 opacity-90">
              <div className="font-bold">Herne Bay Skips</div>
              <div>Herne Bay, Kent CT6, United Kingdom</div>
              <div>
                Phone: <a href="tel:07782222906" className="underline hover:opacity-80">07782 222 906</a>
              </div>
              <div>
                WhatsApp: <a href="https://wa.me/447470300853" className="underline hover:opacity-80">07470 300 853</a>
              </div>
              <div>Hours: Mon–Sat 7:30 – 17:30</div>
            </address>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="font-bold uppercase tracking-widest text-xs">Services</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/skips" className="hover:opacity-60">Skip Sizes</Link></li>
              <li><Link to="/grab-hire" className="hover:opacity-60">Grab Hire</Link></li>
              <li><Link to="/wait-and-load-skip-hire" className="hover:opacity-60">Wait &amp; Load</Link></li>
              <li><Link to="/commercial-skip-hire" className="hover:opacity-60">Commercial Skip Hire</Link></li>
              <li><Link to="/rubbish-clearance" className="hover:opacity-60">Rubbish Clearance</Link></li>
            </ul>
          </div>

          {/* Areas Covered */}
          <div className="space-y-3">
            <h3 className="font-bold uppercase tracking-widest text-xs">Areas Covered</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/skip-hire/herne-bay" className="hover:opacity-60">Skip Hire Herne Bay</Link></li>
              <li><Link to="/skip-hire/whitstable" className="hover:opacity-60">Skip Hire Whitstable</Link></li>
              <li><Link to="/skip-hire/canterbury" className="hover:opacity-60">Skip Hire Canterbury</Link></li>
            </ul>
            <div className="pt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 bg-white/60 text-[#154212] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                Licensed Waste Carrier
              </span>
              <span className="inline-flex items-center gap-1 bg-white/60 text-[#154212] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                NO VAT
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-2 bg-[#f5fcef]/90 backdrop-blur-md rounded-t-[3rem] shadow-[0_-10px_30px_rgba(21,66,18,0.08)] z-50">
        <a
          href="tel:07782222906"
          className="flex flex-col items-center justify-center text-[#171d16] p-3 hover:bg-[#e9f0e4] rounded-full transition-transform active:scale-90"
        >
          <InlineIcon name="phone" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Call</span>
        </a>
        <a
          href="https://wa.me/447470300853"
          className="flex flex-col items-center justify-center text-[#171d16] p-3 hover:bg-[#e9f0e4] rounded-full transition-transform active:scale-90"
        >
          <InlineIcon name="chat" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">WhatsApp</span>
        </a>
        <a
          href="#catalog"
          className="flex flex-col items-center justify-center bg-gradient-to-br from-[#154212] to-[#2d5a27] text-white rounded-full p-3 shadow-lg transition-transform active:scale-90"
        >
          <InlineIcon name="calendar_month" />
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Book</span>
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
