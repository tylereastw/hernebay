import { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle2, PhoneCall, ArrowRight, Clock, Shield, Recycle } from 'lucide-react';
import FaqItem from '../../components/FaqItem';

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); }); },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    const el = ref.current;
    if (el) el.querySelectorAll('.reveal, .stagger-children').forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const faqs = [
  {
    question: 'How much does skip hire cost in Derby?',
    answer: 'Skip hire in Derby starts from \u00A3150 for a 4 yard mini skip. Midi from \u00A3200, builders from \u00A3250, large from \u00A3350. Competitive prices with free delivery from our Long Eaton base.',
  },
  {
    question: 'Can you deliver a skip to Derby the same day?',
    answer: 'Yes, we offer same day delivery across Derby, subject to availability. Our Long Eaton yard is approximately 20 minutes from Derby city centre.',
  },
  {
    question: 'Do I need a skip permit in Derby?',
    answer: 'For placement on your driveway, no permit needed. For road placement, a permit from Derby City Council is required. We handle the application process for you.',
  },
  {
    question: 'What areas of Derby do you cover?',
    answer: 'We cover all of Derby including Spondon, Allestree, Mickleover, Littleover, Chellaston, Alvaston, Chaddesden, Oakwood, and the city centre.',
  },
];

const subAreas = [
  'Spondon', 'Allestree', 'Mickleover', 'Littleover', 'Chellaston',
  'Alvaston', 'Chaddesden', 'Oakwood', 'Normanton', 'City Centre',
];

const nearbyAreas = [
  { name: 'Borrowash', path: '/areas/borrowash' },
  { name: 'Ilkeston', path: '/areas/ilkeston' },
  { name: 'Sandiacre', path: '/areas/sandiacre' },
  { name: 'Long Eaton', path: '/' },
  { name: 'Nottingham', path: '/areas/nottingham' },
  { name: 'Breaston', path: '/areas/breaston' },
];

export default function Derby() {
  const revealRef = useScrollReveal();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://longeatonskips.co.uk/' },
      { '@type': 'ListItem', position: 2, name: 'Areas', item: 'https://longeatonskips.co.uk/areas/' },
      { '@type': 'ListItem', position: 3, name: 'Derby', item: 'https://longeatonskips.co.uk/areas/derby/' },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Skip Hire Derby',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Long Eaton Skips',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Derby, Derbyshire',
    },
    serviceType: 'Skip Hire',
  };

  return (
    <div ref={revealRef}>
      <Helmet>
        <title>Skip Hire Derby | Same Day Delivery | From £150 | Long Eaton Skips</title>
        <meta name="description" content="Skip hire in Derby from £150. Mini, midi, builders & large skips. Same day delivery across DE1-DE24. Covering Spondon, Allestree & Mickleover." />
        <link rel="canonical" href="https://longeatonskips.co.uk/areas/derby/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-500/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="reveal">
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-brand-400 mb-6">
                <MapPin className="w-4 h-4" />
                Serving Derby, Derbyshire
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Skip Hire in{' '}
                <span className="gradient-text">Derby, Derbyshire</span>
              </h1>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Affordable skip hire across Derby from our Long Eaton base. Mini, midi, builders and large skips available with same day delivery. Covering all DE1-DE24 postcodes including Spondon, Allestree and Mickleover.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:01159999999" className="btn-gradient px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 hover-lift">
                  <Phone className="w-5 h-5" />
                  0115 999 9999
                </a>
                <Link to="/#contact" className="glass px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Price Card */}
            <div className="reveal">
              <div className="glass rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Derby Skip Prices</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Mini Skip (4 yard)</span>
                    <span className="text-brand-400 font-bold text-lg">From £150</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Midi Skip (6 yard)</span>
                    <span className="text-brand-400 font-bold text-lg">From £200</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Builders Skip (8 yard)</span>
                    <span className="text-brand-400 font-bold text-lg">From £250</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-300">Large Skip (12 yard)</span>
                    <span className="text-brand-400 font-bold text-lg">From £350</span>
                  </div>
                </div>
                <a href="tel:01159999999" className="btn-gradient w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover-lift">
                  <PhoneCall className="w-5 h-5" />
                  Get an Exact Quote
                </a>
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="glass rounded-2xl p-4 text-center">
                  <Clock className="w-6 h-6 text-brand-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-400">Same Day Delivery</p>
                </div>
                <div className="glass rounded-2xl p-4 text-center">
                  <Shield className="w-6 h-6 text-brand-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-400">Fully Licensed</p>
                </div>
                <div className="glass rounded-2xl p-4 text-center">
                  <Recycle className="w-6 h-6 text-brand-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-400">90% Recycled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hr-gradient" />

      {/* Local Service Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Skip Hire Derby — <span className="gradient-text">Local Service, Competitive Prices</span>
            </h2>
          </div>
          <div className="reveal max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12">
            <p className="text-gray-300 leading-relaxed mb-6">
              Derby is one of our key service areas and a market we know well. We serve Derby from our Long Eaton base, approximately 20 minutes away, allowing us to offer highly competitive prices compared to Derby-based competitors who carry higher overheads. The short distance means we can provide same day delivery with the same reliability as our core Long Eaton coverage area.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              There is strong demand for skip hire across Derby, driven by residential renovations, new housing developments on the city's outskirts, and commercial refits in the city centre. Derby's mix of Victorian terraces in areas like Normanton, 1930s semi-detached estates in Allestree and Mickleover, and modern developments in Oakwood and Chellaston all generate different skip hire needs — from compact mini skips for terrace house clearouts to large skips for new-build construction waste.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether you are renovating a period property in the city centre, clearing a garden in Spondon, or managing waste from a commercial project, we provide the right skip at the right price with reliable, flexible service.
            </p>
          </div>
        </div>
      </section>

      <div className="hr-gradient" />

      {/* Areas Covered */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Cover in the <span className="gradient-text">Derby Area</span>
            </h2>
            <p className="text-gray-400 text-lg">Postcodes: DE1-DE24</p>
          </div>
          <div className="stagger-children grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {subAreas.map((area) => (
              <div key={area} className="glass rounded-2xl p-4 flex items-center gap-3 hover-lift">
                <MapPin className="w-5 h-5 text-brand-400 shrink-0" />
                <span className="text-gray-300 text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hr-gradient" />

      {/* Popular Skip Sizes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Skip Sizes in <span className="gradient-text">Derby</span>
            </h2>
            <p className="text-gray-400 text-lg">The right skip for every project across Derby</p>
          </div>
          <div className="stagger-children grid md:grid-cols-3 gap-8">
            {/* Mini & Midi */}
            <div className="glass rounded-3xl p-8 hover-lift">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/20 flex items-center justify-center mb-6">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Mini & Midi Skips</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Our most popular choices for Derby households. Mini and midi skips are perfect for house clearouts, student accommodation turnovers at the end of term, garden waste from seasonal tidy-ups, and small bathroom or kitchen refits. Compact enough to fit on most driveways across Derby's residential streets.
              </p>
              <p className="text-brand-400 font-semibold">From £150</p>
            </div>

            {/* Builders */}
            <div className="glass rounded-3xl p-8 hover-lift">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/20 flex items-center justify-center mb-6">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Builders Skips</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Ideal for Derby's numerous renovation and extension projects. Builders skips handle the heavy mixed waste from loft conversions, garage conversions, and period property restorations common across Allestree, Mickleover, and Littleover. The go-to size for tradespeople working across the city.
              </p>
              <p className="text-brand-400 font-semibold">From £250</p>
            </div>

            {/* Large */}
            <div className="glass rounded-3xl p-8 hover-lift">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/20 flex items-center justify-center mb-6">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Large Skips</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Built for commercial refits, demolition projects, and major construction in Derby city centre and surrounding areas. Large skips are the choice for developers, contractors, and businesses managing significant volumes of waste from large-scale projects across the DE postcode area.
              </p>
              <p className="text-brand-400 font-semibold">From £350</p>
            </div>
          </div>
        </div>
      </section>

      <div className="hr-gradient" />

      {/* Skip Permits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Skip Permits in <span className="gradient-text">Derby</span>
            </h2>
            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-400 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg mb-1">Driveway Placement</p>
                    <p className="text-gray-400">No permit required. If your skip sits on your own private land or driveway, you are free to proceed without any council paperwork.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-brand-400 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg mb-1">Road Placement</p>
                    <p className="text-gray-400">A permit from Derby City Council is required for any skip placed on a public road or pavement. We handle the entire application process for you, so you do not need to contact the council yourself.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-400 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg mb-1">Derby City Council Coverage</p>
                    <p className="text-gray-400">Derby City Council manages permits for DE1-DE24 postcodes within the city boundary. If your location falls outside the city boundary, a different council may apply — just ask and we will confirm.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hr-gradient" />

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Long Eaton Skips for <span className="gradient-text">Derby?</span>
            </h2>
          </div>
          <div className="stagger-children grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              'Competitive prices vs Derby-based competitors',
              'Same day delivery available across Derby',
              'Just 20 minutes from Derby city centre',
              'Fully licensed waste carrier',
              '90% of all waste recycled responsibly',
              'We handle council permit applications',
              'Flexible hire periods to suit your project',
            ].map((usp) => (
              <div key={usp} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <span className="text-gray-300">{usp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hr-gradient" />

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Derby Skip Hire <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <div className="stagger-children max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <div className="hr-gradient" />

      {/* Nearby Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nearby Areas We Also <span className="gradient-text">Cover</span>
            </h2>
          </div>
          <div className="stagger-children grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {nearbyAreas.map((area) => (
              <Link
                key={area.name}
                to={area.path}
                className="glass rounded-2xl p-4 text-center hover-lift hover:bg-white/10 transition-colors"
              >
                <span className="text-gray-300 text-sm font-medium">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="hr-gradient" />

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal glass rounded-3xl p-8 md:p-16 text-center shimmer">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Book Your Skip in <span className="gradient-text">Derby?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Call us now for a free, no-obligation quote. Same day delivery available across all Derby postcodes.
            </p>
            <a
              href="tel:01159999999"
              className="btn-gradient inline-flex items-center gap-3 px-10 py-5 rounded-xl text-xl font-bold hover-lift"
            >
              <PhoneCall className="w-6 h-6" />
              0115 999 9999
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
