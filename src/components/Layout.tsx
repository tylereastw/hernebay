import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Truck, Mail, MapPin } from 'lucide-react';

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const el = ref.current;
    if (el) {
      el.querySelectorAll('.reveal, .stagger-children').forEach((child) => {
        observer.observe(child);
      });
    }
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const mainRef = useScrollReveal();

  return (
    <div ref={mainRef} className="min-h-screen bg-surface-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center glass rounded-2xl px-6 py-3">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center">
                <Truck className="w-5 h-5 text-surface-950" />
              </div>
              <span className="text-lg font-bold tracking-tight">Long Eaton <span className="gradient-text">Skips</span></span>
            </Link>
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/mini-skip-hire" className="animated-underline px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Mini Skips</Link>
              <Link to="/builders-skip-hire" className="animated-underline px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Builders Skips</Link>
              <Link to="/same-day-skip-hire" className="animated-underline px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Same Day</Link>
              <Link to="/#skip-sizes" className="animated-underline px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Skip Sizes</Link>
              <Link to="/#areas" className="animated-underline px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Areas</Link>
              <Link to="/#contact" className="animated-underline px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
            <a
              href="tel:01159999999"
              className="btn-gradient shimmer px-5 py-2.5 rounded-xl font-bold text-sm text-surface-950 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">0115 999 9999</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </nav>

      {children}

      {/* Footer */}
      <footer className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center space-x-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center">
                  <Truck className="w-5 h-5 text-surface-950" />
                </div>
                <span className="text-lg font-bold">Long Eaton <span className="gradient-text">Skips</span></span>
              </Link>
              <p className="text-sm text-gray-500 leading-relaxed">Affordable, reliable skip hire serving Long Eaton and the surrounding areas.</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-300 mb-5">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/mini-skip-hire" className="text-gray-500 hover:text-brand-400 transition-colors">Mini Skip Hire</Link></li>
                <li><Link to="/builders-skip-hire" className="text-gray-500 hover:text-brand-400 transition-colors">Builders Skip Hire</Link></li>
                <li><Link to="/same-day-skip-hire" className="text-gray-500 hover:text-brand-400 transition-colors">Same Day Skip Hire</Link></li>
                <li><Link to="/#skip-sizes" className="text-gray-500 hover:text-brand-400 transition-colors">All Skip Sizes</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-300 mb-5">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/#about" className="text-gray-500 hover:text-brand-400 transition-colors">About Us</Link></li>
                <li><Link to="/#areas" className="text-gray-500 hover:text-brand-400 transition-colors">Areas Covered</Link></li>
                <li><Link to="/#contact" className="text-gray-500 hover:text-brand-400 transition-colors">Contact Us</Link></li>
                <li><Link to="/blog/what-can-you-put-in-a-skip" className="text-gray-500 hover:text-brand-400 transition-colors">Skip Waste Guide</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-300 mb-5">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-brand-400" />
                  <a href="tel:01159999999" className="text-gray-500 hover:text-brand-400 transition-colors">0115 999 9999</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-brand-400" />
                  <a href="mailto:info@longeatonskips.co.uk" className="text-gray-500 hover:text-brand-400 transition-colors">info@longeatonskips.co.uk</a>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-brand-400" />
                  <span className="text-gray-500">Long Eaton, Derbyshire</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="hr-gradient mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Long Eaton Skips. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Proudly serving the East Midlands</p>
          </div>
        </div>
      </footer>

      {/* Sticky mobile phone bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <a
          href="tel:01159999999"
          className="flex items-center justify-center space-x-2 btn-gradient py-4 font-bold text-surface-950"
        >
          <Phone className="w-5 h-5" />
          <span>Call 0115 999 9999</span>
        </a>
      </div>
    </div>
  );
}
