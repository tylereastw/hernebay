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
    question: 'How much does skip hire cost in Sawley?',
    answer: 'Skip hire in Sawley starts from just £150 for a 4 yard mini skip. Midi skips start from £200, builders skips from £250, and large 12 yard skips from £350. All prices include delivery, collection, and responsible waste disposal. Call us on 0115 999 9999 for an exact quote.',
  },
  {
    question: 'Can I get same day skip delivery in Sawley?',
    answer: 'Yes, same day delivery to Sawley is one of our easiest runs — Sawley neighbours Long Eaton directly, so we can often have a skip with you within the hour. Call us on 0115 999 9999 before midday for the best availability.',
  },
  {
    question: 'Do I need a permit for a skip in Sawley?',
    answer: 'If your skip is placed on a public road or pavement in Sawley, you will need a skip permit from Erewash Borough Council. If the skip is on your private driveway or land, no permit is needed. We can arrange the permit on your behalf if required.',
  },
  {
    question: 'What areas near Sawley do you cover?',
    answer: 'We cover Sawley and all surrounding areas including Long Eaton, Breaston, Draycott, and Sandiacre. Our base in Long Eaton means Sawley is one of the closest areas we serve — you will not find faster or more affordable skip hire locally.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://longeatonskips.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Areas', item: 'https://longeatonskips.co.uk/areas/' },
    { '@type': 'ListItem', position: 3, name: 'Sawley', item: 'https://longeatonskips.co.uk/areas/sawley/' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Skip Hire Sawley',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Long Eaton Skips',
    telephone: '01159999999',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Sawley, Derbyshire',
  },
  description: 'Skip hire in Sawley from £150. Mini, midi, builders & large skips with same day delivery.',
};

export default function Sawley() {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="bg-surface-950 text-white">
      <Helmet>
        <title>Skip Hire Sawley | Same Day Delivery | From £150 | Long Eaton Skips</title>
        <meta name="description" content="Skip hire in Sawley from £150. Mini, midi, builders & large skips. Same day delivery. Covering Long Eaton, Breaston & Draycott." />
        <link rel="canonical" href="https://longeatonskips.co.uk/areas/sawley/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 reveal">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Skip Hire in <span className="gradient-text">Sawley, Derbyshire</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Need a skip in Sawley? As your immediate neighbour in Long Eaton, we deliver mini, midi, builders and large skips to Sawley faster than anyone else. From the riverside streets near Sawley Marina to the residential roads bordering Long Eaton, we provide reliable, affordable skip hire with same day availability for domestic and trade customers alike.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="tel:01159999999" className="btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-surface-950">
                <Phone className="w-5 h-5" /> 0115 999 9999
              </a>
              <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-400/30 hover:border-brand-400 transition-colors font-semibold">
                View All Sizes <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-400" /> Same day delivery</span>
              <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-brand-400" /> Fully licensed carrier</span>
              <span className="flex items-center gap-2"><Recycle className="w-4 h-4 text-brand-400" /> Responsible disposal</span>
            </div>
          </div>

          <div className="reveal glass rounded-3xl p-6">
            <h2 className="text-lg font-bold mb-4 text-center">Sawley Skip Prices</h2>
            <div className="space-y-3">
              {[
                { size: 'Mini Skip (4yd)', price: 'From £150' },
                { size: 'Midi Skip (6yd)', price: 'From £200' },
                { size: 'Builders Skip (8yd)', price: 'From £250' },
                { size: 'Large Skip (12yd)', price: 'From £350' },
              ].map((item) => (
                <div key={item.size} className="flex items-center justify-between p-3 rounded-2xl bg-white/5">
                  <span className="text-sm font-medium">{item.size}</span>
                  <span className="text-brand-400 font-bold text-sm">{item.price}</span>
                </div>
              ))}
            </div>
            <a href="tel:01159999999" className="btn-gradient w-full mt-5 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-surface-950">
              <PhoneCall className="w-4 h-4" /> Get a Quote
            </a>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Local Service */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-6">Skip Hire Sawley — Local Service, Competitive Prices</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>
              Sawley is one of the closest communities to our Long Eaton base, separated by just a few streets. This riverside area along the River Trent has a distinctive character — a mix of older Victorian and Edwardian terraces alongside newer housing developments. Many Sawley residents come to us for garden clearances, home improvement waste, and general household decluttering, particularly during spring and summer months.
            </p>
            <p>
              The marina area and the paths around Trentlock attract visitors year-round, but it is the residential streets that keep our skip lorries busy. Whether you are renovating one of the older period properties near the village centre or clearing a garden on a newer estate, we can have the right skip on your drive the same day you call. Our proximity to Sawley means lower fuel costs and faster delivery — savings we pass directly on to you.
            </p>
            <p>
              We pride ourselves on hassle-free service. One phone call, a clear price, and a skip on your drive — that is how skip hire should work. Every hire includes a generous 14-day rental period, and we take care of all disposal through licensed waste facilities, recycling as much as possible.
            </p>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Coverage */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-6">What We Cover in the Sawley Area</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            We deliver skips to every part of Sawley and the surrounding NG10 postcode. From the marina and Trentlock area through to the residential streets bordering Long Eaton, no address in Sawley is far from our depot.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 stagger-children">
            {['Sawley Marina', 'Trentlock', 'Sawley village centre', 'Long Eaton borders', 'Tamworth Road area', 'Draycott Road area'].map((area) => (
              <div key={area} className="flex items-center gap-2 glass rounded-2xl px-4 py-3 hover-lift">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
                <span className="text-sm">{area}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-4">Main postcode covered: <strong className="text-white">NG10</strong></p>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Skip Sizes */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-8">Popular Skip Sizes in Sawley</h2>

          <div className="space-y-8">
            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Mini & Midi Skips</h3>
              <p className="text-gray-300 leading-relaxed">
                Mini skips (4 yard, from £150) and midi skips (6 yard, from £200) are our most requested sizes in Sawley. The area's mix of older terraces and family homes generates steady demand for garden clearances, shed and garage clear-outs, and small renovation waste. A mini skip holds around 30-40 bin bags — perfect for a weekend clear-out — while the midi at 50-60 bags is ideal for larger garden projects and bathroom refits that Sawley homeowners frequently undertake.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Builders Skips</h3>
              <p className="text-gray-300 leading-relaxed">
                The 8 yard builders skip (from £250) is the preferred choice for renovation work in Sawley. Many of the older properties around the village centre are being modernised, generating significant amounts of building waste from kitchen and bathroom strip-outs, wall removals, and general refurbishment. At 70-80 bin bags capacity, this size handles most renovation projects comfortably without taking up excessive driveway space.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Large Skips</h3>
              <p className="text-gray-300 leading-relaxed">
                Our 12 yard large skips (from £350) suit major projects in Sawley — whole house clearances, large extensions, and significant landscaping jobs. With 100-120 bin bags of capacity, they are the most economical option when you have a substantial volume of waste. Particularly popular with landlords and property developers working on the older housing stock in the area, as well as homeowners undertaking full property renovations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Permits */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-6">Skip Permits in Sawley</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>
              Sawley falls under <strong className="text-white">Erewash Borough Council</strong> for skip permit purposes. If you need to place your skip on a public road, pavement or grass verge, a skip permit is required. If the skip fits on your private driveway or land, no permit is needed.
            </p>
            <p>
              We can arrange the Erewash Borough Council skip permit on your behalf, saving you the hassle of dealing with the council directly. Just let us know when you book and we will take care of everything. Permit processing typically takes 1-2 working days, so if you need a road placement, let us know as early as possible.
            </p>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-8">Why Choose Long Eaton Skips for Sawley?</h2>
          <div className="grid sm:grid-cols-2 gap-4 stagger-children">
            {[
              'Sawley is our nearest neighbour — unbeatable delivery times',
              'Same day skip delivery available for all sizes',
              'Competitive prices starting from just £150',
              'Fully licensed waste carrier — Environment Agency registered',
              'Full 14-day hire period included as standard',
              'We arrange Erewash Borough Council permits for you',
              'Trusted by Sawley residents for domestic and trade projects',
              'Responsible waste disposal — we recycle wherever possible',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 glass rounded-2xl p-4 hover-lift">
                <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-8">Sawley Skip Hire Questions</h2>
          <div className="space-y-3 stagger-children">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Useful Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="reveal">
            <h2 className="text-2xl font-bold mb-6">Useful <span className="gradient-text">Resources</span></h2>
          </div>
          <div className="stagger-children grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            <Link to="/#skip-sizes" className="glass rounded-xl p-4 hover-lift text-sm font-medium text-gray-300 hover:text-white transition-colors">Skip Sizes & Prices</Link>
            <Link to="/same-day-skip-hire" className="glass rounded-xl p-4 hover-lift text-sm font-medium text-gray-300 hover:text-white transition-colors">Same Day Skip Hire</Link>
            <Link to="/blog/what-can-you-put-in-a-skip" className="glass rounded-xl p-4 hover-lift text-sm font-medium text-gray-300 hover:text-white transition-colors">Skip Waste Guide</Link>
            <Link to="/blog/skip-sizes-guide" className="glass rounded-xl p-4 hover-lift text-sm font-medium text-gray-300 hover:text-white transition-colors">Skip Sizes Guide</Link>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-8">Nearby Areas We Also Cover</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 stagger-children">
            {[
              { name: 'Long Eaton', path: '/' },
              { name: 'Breaston', path: '/areas/breaston' },
              { name: 'Draycott', path: '/areas/draycott' },
              { name: 'Sandiacre', path: '/areas/sandiacre' },
            ].map((area) => (
              <Link key={area.name} to={area.path} className="glass rounded-2xl px-5 py-4 hover-lift flex items-center justify-between group">
                <span className="font-medium text-sm">Skip Hire {area.name}</span>
                <ArrowRight className="w-4 h-4 text-brand-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-4">Ready to Book a Skip in Sawley?</h2>
          <p className="text-gray-400 mb-8">Call us now for a free, no-obligation quote. Same day delivery available.</p>
          <a href="tel:01159999999" className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-surface-950 shimmer">
            <Phone className="w-5 h-5" /> 0115 999 9999
          </a>
        </div>
      </section>
    </div>
  );
}
