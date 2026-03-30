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
    question: 'How much does skip hire cost in Sandiacre?',
    answer: 'Skip hire in Sandiacre starts from just £150 for a 4 yard mini skip. Midi skips start from £200, builders skips from £250, and large 12 yard skips from £350. All prices include delivery, collection, and responsible waste disposal. Call us on 0115 999 9999 for an exact quote.',
  },
  {
    question: 'Can you deliver same day to Sandiacre?',
    answer: 'Yes, we offer same day skip delivery to Sandiacre. Our depot in Long Eaton is just minutes away — Sandiacre borders Long Eaton directly, so we can usually have a skip on your drive within a couple of hours. Call us before midday on 0115 999 9999 for guaranteed same day delivery.',
  },
  {
    question: 'Do I need a permit for a skip in Sandiacre?',
    answer: 'If your skip is placed on a public road or pavement in Sandiacre, you will need a skip permit from Erewash Borough Council. If the skip is on your private driveway or land, no permit is needed. We can arrange the permit on your behalf if required.',
  },
  {
    question: 'What areas near Sandiacre do you cover?',
    answer: 'We cover Sandiacre and all surrounding areas including Long Eaton, Stapleford, Breaston, Draycott, and Ilkeston. Our central location in Long Eaton means we can reach all of these areas quickly and keep delivery costs low.',
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
    { '@type': 'ListItem', position: 3, name: 'Sandiacre', item: 'https://longeatonskips.co.uk/areas/sandiacre/' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Skip Hire Sandiacre',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Long Eaton Skips',
    telephone: '01159999999',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Sandiacre, Derbyshire',
  },
  description: 'Skip hire in Sandiacre from £150. Mini, midi, builders & large skips with same day delivery to NG10.',
};

export default function Sandiacre() {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="bg-surface-950 text-white">
      <Helmet>
        <title>Skip Hire Sandiacre | Same Day Delivery | From £150 | Long Eaton Skips</title>
        <meta name="description" content="Skip hire in Sandiacre from £150. Mini, midi, builders & large skips. Same day delivery to NG10. Covering Long Eaton, Stapleford & Breaston." />
        <link rel="canonical" href="https://longeatonskips.co.uk/areas/sandiacre/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 reveal">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Skip Hire in <span className="gradient-text">Sandiacre, Derbyshire</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Looking for skip hire in Sandiacre? Long Eaton Skips delivers mini, midi, builders and large skips across NG10 with same day availability. Sandiacre borders our Long Eaton yard directly, meaning we can get a skip to your door faster than any other local provider. Whether you are clearing out a garage, renovating a kitchen, or landscaping a garden, we have the right skip at the right price.
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
            <h2 className="text-lg font-bold mb-4 text-center">Sandiacre Skip Prices</h2>
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
          <h2 className="text-3xl font-bold mb-6">Skip Hire Sandiacre — Local Service, Competitive Prices</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>
              Sandiacre sits right on the doorstep of our Long Eaton depot, making it one of the quickest areas we serve. This predominantly residential area features a healthy mix of semi-detached and detached housing, with many homeowners regularly booking skips for garden clearances, driveway renovations, and home improvement waste. From the older properties around Springfield to the newer builds near Cloudside, Sandiacre keeps us busy year-round.
            </p>
            <p>
              Because we are so close, we can offer genuinely unbeatable response times to Sandiacre. Many of our Sandiacre customers call us in the morning and have a skip on their driveway by lunchtime. That kind of speed matters when you are mid-project and need waste removed quickly — you will not get that from larger national operators working from distant depots.
            </p>
            <p>
              We keep things simple and honest. Our prices include delivery, collection, and responsible disposal at licensed facilities. There are no hidden extras, no fuel surcharges, and no booking fees. Just straightforward skip hire from a local, family-run business that knows Sandiacre inside and out.
            </p>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Coverage */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-6">What We Cover in the Sandiacre Area</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            We deliver skips to all parts of Sandiacre and the surrounding NG10 postcode area. Whether your project is in Springfield, near the canal, or over towards Stanton-by-Dale, we will get a skip to you the same day wherever possible.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 stagger-children">
            {['Springfield', 'Cloudside', 'Stanton-by-Dale', 'Sandiacre town centre', 'Station Road area', 'Derwent Avenue area'].map((area) => (
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
          <h2 className="text-3xl font-bold mb-8">Popular Skip Sizes in Sandiacre</h2>

          <div className="space-y-8">
            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Mini & Midi Skips</h3>
              <p className="text-gray-300 leading-relaxed">
                Mini skips (4 yard, from £150) and midi skips (6 yard, from £200) are our biggest sellers in Sandiacre. The area's mix of semi-detached and detached homes means plenty of garden clearances, shed clear-outs, and small renovation projects. A mini skip holds around 30-40 bin bags — ideal for a single room clearout or a weekend garden tidy. The midi step up to 50-60 bags suits bathroom refits, full garden clearances, and larger decluttering jobs across the Springfield and Cloudside areas.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Builders Skips</h3>
              <p className="text-gray-300 leading-relaxed">
                The 8 yard builders skip (from £250) is the workhorse choice for renovation projects in Sandiacre. With capacity for around 70-80 bin bags, it handles kitchen strip-outs, extension waste, and full room renovations with ease. Many Sandiacre homeowners upgrading their older semi-detached properties choose this size for the flexibility it offers — big enough for serious building waste, but still fits comfortably on most driveways.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Large Skips</h3>
              <p className="text-gray-300 leading-relaxed">
                Our 12 yard large skips (from £350) are the right choice for major projects in Sandiacre — full house clearances, large-scale renovations, and significant garden landscaping work. Holding 100-120 bin bags, they are popular with tradespeople working on property conversions and homeowners tackling whole-house refurbishments. If you are managing a bigger project near Stanton-by-Dale or anywhere across the NG10 area, this size saves you money compared to hiring multiple smaller skips.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Permits */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-6">Skip Permits in Sandiacre</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>
              Sandiacre falls under <strong className="text-white">Erewash Borough Council</strong> for skip permit purposes. If you need to place your skip on a public road, pavement or grass verge, a skip permit is required. If the skip fits on your private driveway or land, no permit is needed.
            </p>
            <p>
              We can arrange the Erewash Borough Council skip permit on your behalf, saving you the hassle of dealing with the council directly. Just let us know when you book and we will handle the paperwork. Permit processing typically takes 1-2 working days, so plan ahead if you need a road placement.
            </p>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-8">Why Choose Long Eaton Skips for Sandiacre?</h2>
          <div className="grid sm:grid-cols-2 gap-4 stagger-children">
            {[
              'Sandiacre borders our yard — the fastest delivery times in NG10',
              'Same day skip delivery available for all sizes',
              'Competitive prices starting from just £150',
              'Fully licensed waste carrier — Environment Agency registered',
              'Full 14-day hire period included as standard',
              'We arrange Erewash Borough Council permits for you',
              'Trusted by Sandiacre homeowners and local tradespeople',
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
          <h2 className="text-3xl font-bold mb-8">Sandiacre Skip Hire Questions</h2>
          <div className="space-y-3 stagger-children">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Nearby Areas */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-8">Nearby Areas We Also Cover</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 stagger-children">
            {[
              { name: 'Long Eaton', path: '/' },
              { name: 'Stapleford', path: '/areas/stapleford' },
              { name: 'Breaston', path: '/areas/breaston' },
              { name: 'Draycott', path: '/areas/draycott' },
              { name: 'Ilkeston', path: '/areas/ilkeston' },
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
          <h2 className="text-3xl font-bold mb-4">Ready to Book a Skip in Sandiacre?</h2>
          <p className="text-gray-400 mb-8">Call us now for a free, no-obligation quote. Same day delivery available.</p>
          <a href="tel:01159999999" className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-surface-950 shimmer">
            <Phone className="w-5 h-5" /> 0115 999 9999
          </a>
        </div>
      </section>
    </div>
  );
}
