import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { InlineIcon } from './components/InlineIcon';
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
            <InlineIcon name="recycling" className="text-[#154212]" size={28} />
            <span className="text-xl font-black text-[#154212] tracking-tighter">
              NO VAT SKIPS
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
            <a href="http://zipskips.co.uk/?location=long-eaton" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-[#154212] to-[#2d5a27] text-white px-6 py-2.5 rounded-full font-bold text-sm active:scale-95 duration-200 shadow-lg hover:opacity-90 transition-all">
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
        <div className="w-full flex flex-col items-center text-center px-8 max-w-7xl mx-auto">
          <div className="mb-12 space-y-4">
            <Link to="/" className="flex items-center justify-center gap-2 mb-2">
              <InlineIcon name="recycling" size={32} />
              <span className="text-lg font-bold text-[#154212]">NO VAT SKIPS</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-md opacity-80">
              Premium domestic skip hire for Long Eaton and surrounding areas.
              Professional, family-run, and VAT-free for homeowners.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <a href="#" className="text-[#154212] underline hover:text-[#154212] transition-colors">Terms</a>
            <a href="#" className="text-[#171d16]/60 hover:text-[#154212] transition-colors">Privacy</a>
            <a href="#" className="text-[#171d16]/60 hover:text-[#154212] transition-colors">Service Areas</a>
          </div>
          <p className="text-sm leading-relaxed opacity-60">
            &copy; {new Date().getFullYear()} The Editorial Skip Service. No VAT on all domestic hires.
          </p>
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
