import { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, CheckCircle2, PhoneCall, ArrowRight, Clock, Shield, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    answer: 'Skip hire in Sandiacre starts from just £150 for a 4-yard mini skip. Midi skips start from £200, builders skips from £250, and large 12-yard skips from £350. Prices include delivery, collection, and responsible waste disposal.',
  },
  {
    question: 'Can you deliver same day to Sandiacre?',
    answer: 'Yes, we offer same-day skip delivery to Sandiacre. Our yard is just minutes away, so we can often have a skip on your driveway within hours of your call. Contact us before midday for the best chance of same-day service.',
  },
  {
    question: 'Do I need a permit for a skip in Sandiacre?',
    answer: 'If your skip is placed on a public road or pavement in Sandiacre, you will need a permit from Erewash Borough Council. We can arrange this on your behalf. If the skip is on your private driveway, no permit is needed.',
  },
  {
    question: 'What areas near Sandiacre do you cover?',
    answer: 'As well as Sandiacre, we provide skip hire across Long Eaton, Stapleford, Breaston, Draycott, and the wider Erewash and south Nottinghamshire area. Check our area pages for more details.',
  },
];

export default function Sandiacre() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Helmet>
        <title>Skip Hire Sandiacre | Same Day Delivery | From £150 | Long Eaton Skips</title>
        <meta name="description" content="Skip hire in Sandiacre from £150. Mini, midi, builders & large skips. Same day delivery to NG10. Covering Long Eaton, Stapleford & Breaston." />
        <link rel="canonical" href="https://longeatonskips.co.uk/areas/sandiacre/" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://longeatonskips.co.uk/' },
            { '@type': 'ListItem', position: 2, name: 'Areas', item: 'https://longeatonskips.co.uk/areas/' },
            { '@type': 'ListItem', position: 3, name: 'Sandiacre', item: 'https://longeatonskips.co.uk/areas/sandiacre/' },
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
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
          description: 'Affordable skip hire in Sandiacre with same day delivery. Mini, midi, builders and large skips available.',
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 noise-overlay">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-400/8 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 dot-pattern opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3 reveal">
              <div className="flex items-center gap-2 text-brand-400 mb-4">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wide uppercase">Sandiacre, Derbyshire</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                Skip Hire in <span className="gradient-text">Sandiacre, Derbyshire</span>
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                Affordable skip hire on your doorstep. Sandiacre borders our Long Eaton yard directly, so we can deliver mini, midi, builders and large skips faster than anyone else — often the same day you call.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="tel:01159999999" className="btn-gradient px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2 shimmer">
                  <Phone className="w-5 h-5" /> 0115 999 9999
                </a>
                <Link to="/contact" className="glass px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2 hover-lift">
                  Get a Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-400" /> Same Day Delivery</span>
                <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-brand-400" /> Fully Licensed</span>
                <span className="flex items-center gap-2"><Recycle className="w-4 h-4 text-brand-400" /> Responsible Recycling</span>
              </div>
            </div>

            <div className="lg:col-span-2 reveal">
              <div className="glass rounded-3xl p-6 hover-lift">
                <h2 className="text-xl font-bold mb-4 text-center">Skip Prices in Sandiacre</h2>
                <div className="space-y-3">
                  {[
                    { size: 'Mini Skip (4yd)', price: '£150' },
                    { size: 'Midi Skip (6yd)', price: '£200' },
                    { size: 'Builders Skip (8yd)', price: '£250' },
                    { size: 'Large Skip (12yd)', price: '£350' },
                  ].map((s) => (
                    <div key={s.size} className="flex justify-between items-center p-3 rounded-2xl bg-white/5">
                      <span className="font-medium">{s.size}</span>
                      <span className="text-brand-400 font-bold">From {s.price}</span>
                    </div>
                  ))}
                </div>
                <a href="tel:01159999999" className="btn-gradient w-full mt-5 py-3 rounded-full font-semibold text-center flex items-center justify-center gap-2 shimmer">
                  <PhoneCall className="w-5 h-5" /> Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hr-gradient" />

      {/* Local Service */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Skip Hire Sandiacre — <span className="gradient-text">Local Service, Competitive Prices</span>
          </h2>
          <div className="text-gray-400 space-y-4 leading-relaxed">
            <p>
              Sandiacre sits right on the Derbyshire-Nottinghamshire border and is one of the closest areas to our Long Eaton depot. This means shorter journeys, faster delivery times, and lower costs that we pass directly on to you. Whether you are clearing out a garage on Springfield Road, renovating a semi-detached on Station Road, or landscaping a garden backing onto the Erewash Canal, we have the right skip at the right price.
            </p>
            <p>
              The area is predominantly residential with a strong mix of semi-detached and detached housing built across several decades. That means a steady demand for skips — from bathroom refits and kitchen tear-outs to full garden clearances and driveway replacements. We work with homeowners, landlords, and local tradespeople across Sandiacre every week, and our drivers know the streets inside out.
            </p>
            <p>
              Because we are based just down the road, same-day delivery to Sandiacre is almost always possible when you call before midday. We carry a range of skip sizes on our fleet so we can match you with the exact capacity you need — no paying for space you will not use.
            </p>
          </div>
        </div>
      </section>

      <div className="hr-gradient" />

      {/* Coverage */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            What We Cover in the <span className="gradient-text">Sandiacre Area</span>
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            We deliver skips to every street in Sandiacre and the surrounding sub-areas. Our coverage in the NG10 postcode area includes:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 stagger-children">
            {['Springfield', 'Cloudside', 'Stanton-by-Dale', 'Sandiacre town centre', 'Station Road area', 'Derby Road corridor'].map((area) => (
              <div key={area} className="glass rounded-2xl p-4 flex items-center gap-3 hover-lift">
                <MapPin className="w-5 h-5 text-brand-400 shrink-0" />
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 mt-6">
            <strong className="text-white">Primary postcode:</strong> NG10. If you are not sure whether we cover your road, give us a call on <a href="tel:01159999999" className="text-brand-400 hover:underline">0115 999 9999</a> and we will confirm straight away.
          </p>
        </div>
      </section>

      <div className="hr-gradient" />

      {/* Skip Sizes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
            Popular Skip Sizes in <span className="gradient-text">Sandiacre</span>
          </h2>

          <div className="space-y-8">
            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Mini & Midi Skips (4-6 Yards)</h3>
              <p className="text-gray-400 leading-relaxed">
                The most popular choice for Sandiacre homeowners tackling weekend clearouts, small bathroom refits, or seasonal garden tidies. A 4-yard mini skip holds around 30-40 bin bags and fits neatly on most driveways along streets like Town Street and Longmoor Lane. The 6-yard midi is ideal if you are doing a single-room renovation or larger garden clearance.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Builders Skip (8 Yards)</h3>
              <p className="text-gray-400 leading-relaxed">
                The classic builders skip is a regular sight on Sandiacre streets, especially where homeowners are extending kitchens, converting lofts, or carrying out full house renovations. At 8 yards it holds around 70-80 bin bags, making it the go-to choice for local tradespeople working across the NG10 area.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Large Skip (12 Yards)</h3>
              <p className="text-gray-400 leading-relaxed">
                For major projects in Sandiacre — whole-house clearances, large construction jobs, or commercial fit-outs — our 12-yard skip is the most cost-effective option. It holds up to 120 bin bags and saves you the hassle of booking multiple smaller skips. Popular with landlords renovating rental properties in the area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="hr-gradient" />

      {/* Permits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Skip Permits in <span className="gradient-text">Sandiacre</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Sandiacre falls within the <strong className="text-white">Erewash Borough Council</strong> area. If your skip needs to go on a public highway, pavement, or grass verge rather than your private driveway, a skip permit is required by law.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            We handle the entire permit application process for you — just let us know when you book and we will sort it out with Erewash Borough Council. Permits typically take 1-3 working days to process, so plan ahead if you need a road placement.
          </p>
          <p className="text-gray-400 leading-relaxed">
            If the skip sits on your own driveway or private land, no permit is needed and we can deliver straight away — including same day in most cases.
          </p>
        </div>
      </section>

      <div className="hr-gradient" />

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
            Why Choose Long Eaton Skips for <span className="gradient-text">Sandiacre</span>?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 stagger-children">
            {[
              'Minutes from our yard — fastest delivery times in Sandiacre',
              'Prices from just £150 with no hidden fees',
              'Same-day delivery available for NG10 postcodes',
              'We handle Erewash Borough Council permits for you',
              'Fully licensed waste carrier — your waste is disposed of legally',
              'Over 90% recycling rate across all skip sizes',
              'Trusted by Sandiacre homeowners and tradespeople',
              'Friendly local team who know the area inside out',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 glass rounded-2xl p-4 hover-lift">
                <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <span className="text-gray-300">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hr-gradient" />

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
            Sandiacre Skip Hire <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-3 stagger-children">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <div className="hr-gradient" />

      {/* Nearby Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
            Nearby Areas We Also <span className="gradient-text">Cover</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 stagger-children">
            {[
              { name: 'Long Eaton', path: '/' },
              { name: 'Stapleford', path: '/areas/stapleford' },
              { name: 'Breaston', path: '/areas/breaston' },
              { name: 'Draycott', path: '/areas/draycott' },
              { name: 'Ilkeston', path: '/areas/ilkeston' },
            ].map((area) => (
              <Link key={area.name} to={area.path} className="glass rounded-2xl p-4 flex items-center justify-between hover-lift group">
                <span className="font-medium">{area.name}</span>
                <ArrowRight className="w-5 h-5 text-brand-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="hr-gradient" />

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Book Your <span className="gradient-text">Sandiacre Skip</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Call us now for a free, no-obligation quote. Same-day delivery available across Sandiacre and the NG10 area.
          </p>
          <a href="tel:01159999999" className="btn-gradient px-10 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2 shimmer">
            <Phone className="w-5 h-5" /> 0115 999 9999
          </a>
        </div>
      </section>
    </div>
  );
}
