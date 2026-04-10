import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Icon } from './components/Icon';
import Home from './pages/Home';
import SkipSizes from './pages/SkipSizes';

const navItems = [
  { label: 'HOME', path: '/', icon: 'home_pin' },
  { label: 'SKIPS', path: '/skips', icon: 'view_in_ar' },
  { label: 'BOOKING', path: '/#cta', icon: 'calendar_today' },
];

const footerLinks = [
  { label: 'Sizing Guide', path: '/skips' },
  { label: 'Contact', path: '/#cta' },
  { label: 'Permit Info', path: '/skips' },
];

function Layout() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isHome = currentPath === '/';

  return (
    <div className="bg-background font-body text-on-surface selection:bg-surface-tint selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-stone-50/80 backdrop-blur-xl border-b-2 border-stone-950">
        <Link to="/" className="flex items-center gap-2">
          <Icon name="architecture" className="text-stone-950" />
          <span className="text-lg font-black tracking-tighter text-stone-950 font-headline uppercase">
            LONG EATON SKIPS (NO VAT)
          </span>
        </Link>
        {isHome && (
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map(({ label, path }) => {
              const isActive = path === currentPath;
              return (
                <Link
                  key={label}
                  to={path}
                  className={`font-headline uppercase tracking-tighter font-bold text-sm px-2 py-1 transition-colors duration-100 ${
                    isActive
                      ? 'text-amber-500'
                      : 'text-stone-500 hover:bg-amber-500 hover:text-stone-950'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        )}
        <button className="font-headline uppercase tracking-tighter font-bold text-sm text-stone-950 hover:bg-amber-500 hover:text-stone-950 transition-colors duration-100 px-4 py-2 active:translate-y-[1px]">
          CONTACT
        </button>
      </header>

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skips" element={<SkipSizes />} />
      </Routes>

      {/* Footer */}
      <footer className="w-full px-6 py-12 flex flex-col gap-8 bg-stone-900 text-stone-50 border-t-4 border-stone-950">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <Link to="/" className="flex items-center gap-4">
            <Icon name="architecture" className="text-4xl text-amber-500" />
            <span className="text-amber-500 font-bold tracking-tighter font-headline text-2xl uppercase">
              LONG EATON SKIPS
            </span>
          </Link>
          <div className="flex flex-wrap gap-6 font-headline text-[12px] leading-tight tracking-tight">
            {footerLinks.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                className="text-stone-400 hover:text-amber-400 transition-colors uppercase font-bold border-l-2 border-stone-700 pl-4"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-t border-stone-800 pt-8">
          <p className="font-headline text-[12px] leading-tight tracking-tight text-stone-500 uppercase">
            &copy; {new Date().getFullYear()} LONG EATON SKIPS. TECHNICAL
            SPECIFICATIONS SUBJECT TO CHANGE.
          </p>
          <div className="flex gap-4">
            <span className="bg-amber-500 text-stone-950 px-2 py-1 font-headline font-bold text-[10px] tracking-widest">
              VAT FREE
            </span>
            <span className="border border-stone-700 text-stone-400 px-2 py-1 font-headline font-bold text-[10px] tracking-widest uppercase">
              NG10 SERVICE AREA
            </span>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-stretch h-16 bg-stone-50 border-t-2 border-stone-950">
        {navItems.map(({ label, path, icon }) => {
          const isActive = path === currentPath;
          return (
            <Link
              key={label}
              to={path}
              className={`flex flex-col items-center justify-center h-full w-full px-2 active:scale-95 duration-75 transition-all font-headline font-bold text-[10px] tracking-widest uppercase ${
                isActive
                  ? 'bg-amber-500 text-stone-950'
                  : 'text-stone-500 hover:bg-stone-200'
              }`}
            >
              <Icon name={icon} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
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
