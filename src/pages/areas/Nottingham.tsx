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
    question: 'How much does skip hire cost in Nottingham?',
    answer: 'Skip hire in Nottingham starts from just £150 for a 4 yard mini skip. Midi skips start from £200, builders skips from £250, and large 12 yard skips from £350. All prices include delivery, collection, and responsible waste disposal. Call us on 0115 999 9999 for an exact quote.',
  },
  {
    question: 'Can I get same day skip delivery in Nottingham?',
    answer: 'Yes, we offer same day skip delivery across Nottingham, subject to availability across the wider Nottingham area. We serve the southern and western suburbs most quickly from our Long Eaton base. Call us before midday on 0115 999 9999 for the best chance of same day delivery.',
  },
  {
    question: 'Do I need a permit for a skip in Nottingham?',
    answer: 'If your skip is placed on a public road or pavement, you will need a skip permit. In the city centre and inner suburbs, this is issued by Nottingham City Council. For outer suburbs, permit responsibilities may fall to the relevant borough council (such as Broxtowe or Gedling). We can advise you on exactly which authority applies and arrange the permit on your behalf.',
  },
  {
    question: 'What areas of Nottingham do you cover?',
    answer: 'We cover all of Nottingham including Beeston, West Bridgford, Lenton, Wollaton, Clifton, Sneinton, The Meadows, Mapperley, Sherwood, and Arnold. We serve postcodes NG1 through NG16. Our Long Eaton base makes us especially quick to reach the southern and western suburbs.',
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
    { '@type': 'ListItem', position: 3, name: 'Nottingham', item: 'https://longeatonskips.co.uk/areas/nottingham/' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Skip Hire Nottingham',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Long Eaton Skips',
    telephone: '01159999999',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Nottingham, Nottinghamshire',
  },
  description: 'Skip hire in Nottingham from £150. Mini, midi, builders & large skips with same day delivery across NG1-NG16.',
};

export default function Nottingham() {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="bg-surface-950 text-white">
      <Helmet>
        <title>Skip Hire Nottingham | Same Day Delivery | From £150 | Long Eaton Skips</title>
        <meta name="description" content="Skip hire in Nottingham from £150. Mini, midi, builders & large skips. Same day delivery across NG1-NG16. Covering all Nottingham areas." />
        <link rel="canonical" href="https://longeatonskips.co.uk/areas/nottingham/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 reveal">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Skip Hire in <span className="gradient-text">Nottingham, Nottinghamshire</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Need a skip in Nottingham? Long Eaton Skips delivers mini, midi, builders and large skips across NG1-NG16 with same day availability. We serve Nottingham's southern and western suburbs directly from our Long Eaton base, and cover the wider city for residential, commercial and construction skip hire.
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
            <h2 className="text-lg font-bold mb-4 text-center">Nottingham Skip Prices</h2>
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
          <h2 className="text-3xl font-bold mb-6">Skip Hire Nottingham — Local Service, Competitive Prices</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>
              Nottingham is a high-demand, competitive market for skip hire — and we offer a genuine alternative to the larger city operators. Based in Long Eaton on the south-western edge of the city, we are ideally positioned to serve Nottingham's southern and western suburbs quickly, while also covering the wider city area including the centre, north and east.
            </p>
            <p>
              The sheer variety of Nottingham's property landscape drives constant demand for skip hire. Student accommodation turnover in Lenton and Dunkirk creates a regular cycle of clearance work every summer. City centre commercial premises undergo frequent refits and strip-outs. Residential renovations are booming across areas like West Bridgford, Wollaton and Mapperley, where homeowners invest in upgrading period and post-war housing. We handle all of these requirements with the same straightforward, reliable service.
            </p>
            <p>
              What sets us apart in the Nottingham market is our combination of competitive pricing, fast delivery, and personal service. We are a local, independently-run business — not a faceless national operator. When you call us, you speak to someone who knows the area, can advise on the right skip size for your project, and will get you an honest price without hidden extras. That approach has earned us a growing base of loyal repeat customers across the city.
            </p>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Coverage */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-6">What We Cover in the Nottingham Area</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            We deliver skips across all parts of Nottingham and the wider NG postcode area. From the city centre to the suburbs and surrounding towns, we will get a skip to you quickly. Our Long Eaton base means south and west Nottingham get the fastest delivery times.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 stagger-children">
            {['West Bridgford', 'Beeston', 'Lenton', 'Wollaton', 'Clifton', 'Sneinton', 'The Meadows', 'Mapperley', 'Sherwood', 'Arnold'].map((area) => (
              <div key={area} className="flex items-center gap-2 glass rounded-2xl px-4 py-3 hover-lift">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
                <span className="text-sm">{area}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-4">Postcodes covered: <strong className="text-white">NG1 — NG16</strong></p>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Skip Sizes */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-8">Popular Skip Sizes in Nottingham</h2>

          <div className="space-y-8">
            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Mini & Midi Skips</h3>
              <p className="text-gray-300 leading-relaxed">
                Mini skips (4 yard, from £150) and midi skips (6 yard, from £200) are hugely popular across Nottingham, particularly for the student let clearances in Lenton and Dunkirk, end-of-tenancy clean-ups in rented properties, and small domestic projects. A mini holds around 30-40 bin bags — enough for a room clearout or small garden job — while a midi at 50-60 bags suits larger household clearances. These sizes are especially practical for terraced streets where driveway space is limited.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Builders Skips</h3>
              <p className="text-gray-300 leading-relaxed">
                The 8 yard builders skip (from £250) is the workhorse for Nottingham's active renovation market. With capacity for 70-80 bin bags, it handles kitchen and bathroom strip-outs, loft conversions in the Victorian terraces of Sherwood and Mapperley, and extension builds across the suburban areas. Trade customers throughout Nottingham rely on this size for its versatility — it takes a solid mix of rubble, timber, plasterboard and general construction waste without breaking the budget.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Large Skips</h3>
              <p className="text-gray-300 leading-relaxed">
                Our 12 yard large skips (from £350) are ideal for major commercial and construction projects across Nottingham. Holding 100-120 bin bags worth of waste, they are the choice for city centre commercial refits, large residential renovations in West Bridgford and Wollaton, and new-build development sites. For ongoing construction work, we offer regular skip exchanges to keep sites clear and compliant. Landlords clearing multiple student properties between tenancies also find the large skip the most cost-effective option.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Permits */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-6">Skip Permits in Nottingham</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>
              Skip permits in Nottingham are managed by <strong className="text-white">Nottingham City Council</strong> for addresses within the city boundary. If your property falls within an outer borough — such as Broxtowe (Beeston, Chilwell, Stapleford), Gedling (Arnold, Carlton), or Rushcliffe (West Bridgford) — the permit is issued by the relevant borough council instead.
            </p>
            <p>
              If you need to place your skip on a public road, pavement or grass verge, a skip permit is required regardless of which council area you are in. If the skip fits on your private driveway or land, no permit is needed. We know which council applies to every part of Nottingham and can arrange the correct permit on your behalf — just let us know when you book and we will handle all the paperwork. Permit processing typically takes 1-3 working days depending on the authority.
            </p>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-8">Why Choose Long Eaton Skips for Nottingham?</h2>
          <div className="grid sm:grid-cols-2 gap-4 stagger-children">
            {[
              'Local independent operator — personal service, not a call centre',
              'Same day skip delivery available across Nottingham',
              'Competitive prices starting from just £150',
              'Fully licensed waste carrier — Environment Agency registered',
              'Full 14-day hire period included as standard',
              'We arrange the correct council permit for your area',
              'Experienced with student lets, commercial refits and construction sites',
              'Responsible waste disposal — high recycling rates on every load',
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
          <h2 className="text-3xl font-bold mb-8">Nottingham Skip Hire Questions</h2>
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
              { name: 'Beeston', path: '/areas/beeston' },
              { name: 'Stapleford', path: '/areas/stapleford' },
              { name: 'Ilkeston', path: '/areas/ilkeston' },
              { name: 'Derby', path: '/areas/derby' },
              { name: 'Long Eaton', path: '/' },
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
          <h2 className="text-3xl font-bold mb-4">Ready to Book a Skip in Nottingham?</h2>
          <p className="text-gray-400 mb-8">Call us now for a free, no-obligation quote. Same day delivery available across Nottingham.</p>
          <a href="tel:01159999999" className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-surface-950 shimmer">
            <Phone className="w-5 h-5" /> 0115 999 9999
          </a>
        </div>
      </section>
    </div>
  );
}
