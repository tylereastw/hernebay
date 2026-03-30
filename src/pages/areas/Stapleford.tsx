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
    question: 'How much does skip hire cost in Stapleford?',
    answer: 'Skip hire in Stapleford starts from just £150 for a 4 yard mini skip. Midi skips start from £200, builders skips from £250, and large 12 yard skips from £350. All prices include delivery, collection, and responsible waste disposal. Call us on 0115 999 9999 for an exact quote.',
  },
  {
    question: 'Can I get same day skip delivery in Stapleford?',
    answer: 'Yes, we offer same day skip delivery in Stapleford. Our yard in Long Eaton is just minutes away, so we can usually get a skip to you within a couple of hours. Call us before midday on 0115 999 9999 for the best chance of same day delivery.',
  },
  {
    question: 'Do I need a permit for a skip in Stapleford?',
    answer: 'If your skip is placed on a public road or pavement in Stapleford, you will need a skip permit from Broxtowe Borough Council. If the skip is on your private driveway or land, no permit is needed. We can arrange the permit on your behalf if required.',
  },
  {
    question: 'Do you deliver skips to Sandiacre, Beeston, Toton and Ilkeston?',
    answer: 'Absolutely. We cover Stapleford and all the surrounding areas including Sandiacre, Beeston, Toton, and Ilkeston. Our central location in Long Eaton means we can reach all of these areas quickly and affordably.',
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
    { '@type': 'ListItem', position: 3, name: 'Stapleford', item: 'https://longeatonskips.co.uk/areas/stapleford/' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Skip Hire Stapleford',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Long Eaton Skips',
    telephone: '01159999999',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Stapleford, Nottinghamshire',
  },
  description: 'Skip hire in Stapleford from £150. Mini, midi, builders & large skips with same day delivery to NG9.',
};

export default function Stapleford() {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="bg-surface-950 text-white">
      <Helmet>
        <title>Skip Hire Stapleford | Same Day Delivery | From £150 | Long Eaton Skips</title>
        <meta name="description" content="Skip hire in Stapleford from £150. Mini, midi, builders & large skips. Same day delivery to NG9. Covering Sandiacre, Beeston & Toton." />
        <link rel="canonical" href="https://longeatonskips.co.uk/areas/stapleford/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 reveal">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Skip Hire in <span className="gradient-text">Stapleford, Nottinghamshire</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Need a skip in Stapleford? Long Eaton Skips delivers mini, midi, builders and large skips across NG9 with same day availability. Based just minutes away in Long Eaton, we offer fast, reliable skip hire for both domestic clearouts and trade projects throughout Stapleford and the surrounding area.
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
            <h2 className="text-lg font-bold mb-4 text-center">Stapleford Skip Prices</h2>
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
          <h2 className="text-3xl font-bold mb-6">Skip Hire Stapleford — Local Service, Competitive Prices</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>
              Stapleford is one of our highest-demand areas for skip hire. With a strong mix of residential streets and light industrial premises, we see consistent bookings from homeowners tackling clearouts, garden renovations and home improvement projects, alongside trade customers managing waste from workshops and commercial units along the Ilkeston Road corridor.
            </p>
            <p>
              Our Long Eaton depot is just a short drive from Stapleford, which means we can offer genuinely fast turnaround times — including same day delivery for most skip sizes. Whether you are clearing out a terraced house on Hickings Lane, renovating a property near the town centre, or managing waste from a light industrial unit, we have the right skip at the right price.
            </p>
            <p>
              We have built a strong reputation in Stapleford by offering straightforward, no-nonsense skip hire. No hidden fees, no complicated booking processes — just a quick phone call and your skip is on its way. Every skip we deliver comes with a full 14-day hire period, and we handle all the disposal responsibly through licensed waste facilities.
            </p>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Coverage */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-6">What We Cover in the Stapleford Area</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            We deliver skips across all parts of Stapleford and the wider NG9 postcode area. Whether your project is in the town centre, the residential streets around Hickings Lane, or along the Ilkeston Road corridor, we will get a skip to you quickly.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 stagger-children">
            {['Stapleford town centre', 'Hickings Lane area', 'Ilkeston Road corridor', 'Pasture Road', 'Toton Lane end', 'Bessell Lane area'].map((area) => (
              <div key={area} className="flex items-center gap-2 glass rounded-2xl px-4 py-3 hover-lift">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
                <span className="text-sm">{area}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-4">Main postcode covered: <strong className="text-white">NG9</strong></p>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Skip Sizes */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-8">Popular Skip Sizes in Stapleford</h2>

          <div className="space-y-8">
            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Mini & Midi Skips</h3>
              <p className="text-gray-300 leading-relaxed">
                Mini skips (4 yard, from £150) and midi skips (6 yard, from £200) are our most popular choices in Stapleford for household clearouts and small garden projects. Many customers on the residential streets around Hickings Lane and the town centre use these for decluttering, bathroom refits, and seasonal garden waste. A mini holds around 30-40 bin bags — enough for most single-room projects — while a midi at 50-60 bags suits larger clearances.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Builders Skips</h3>
              <p className="text-gray-300 leading-relaxed">
                The 8 yard builders skip (from £250) is the go-to for renovation and construction projects across Stapleford. With capacity for 70-80 bin bags, it handles kitchen and bathroom strip-outs, extension builds, and general building waste with ease. Trade customers working on properties along the Ilkeston Road corridor and throughout Stapleford town centre regularly rely on this size for efficient waste management.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Large Skips</h3>
              <p className="text-gray-300 leading-relaxed">
                Our 12 yard large skips (from £350) are ideal for major projects in Stapleford — whole house clearances, commercial strip-outs, and large-scale construction work. Holding 100-120 bin bags worth of waste, these skips are popular with trade customers managing waste from light industrial and commercial premises in the area. They are also a cost-effective option for landlords clearing multiple properties at once.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Permits */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-6">Skip Permits in Stapleford</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>
              Stapleford falls under <strong className="text-white">Broxtowe Borough Council</strong> for skip permit purposes. If you need to place your skip on a public road, pavement or grass verge, a skip permit is required. If the skip fits on your private driveway or land, no permit is needed.
            </p>
            <p>
              We can arrange the Broxtowe Borough Council skip permit on your behalf, saving you the hassle of dealing with the council directly. Just let us know when you book and we will handle the paperwork. Permit processing typically takes 1-2 working days, so plan ahead if you need a road placement.
            </p>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-8">Why Choose Long Eaton Skips for Stapleford?</h2>
          <div className="grid sm:grid-cols-2 gap-4 stagger-children">
            {[
              'Just minutes from Stapleford — fastest delivery times in NG9',
              'Same day skip delivery available for all sizes',
              'Competitive prices starting from just £150',
              'Fully licensed waste carrier — Environment Agency registered',
              'Full 14-day hire period included as standard',
              'We arrange Broxtowe Borough Council permits for you',
              'Trusted by Stapleford homeowners and trade customers alike',
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
          <h2 className="text-3xl font-bold mb-8">Stapleford Skip Hire Questions</h2>
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
              { name: 'Sandiacre', path: '/areas/sandiacre' },
              { name: 'Beeston', path: '/areas/beeston' },
              { name: 'Toton', path: '/areas/toton' },
              { name: 'Ilkeston', path: '/areas/ilkeston' },
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
          <h2 className="text-3xl font-bold mb-4">Ready to Book a Skip in Stapleford?</h2>
          <p className="text-gray-400 mb-8">Call us now for a free, no-obligation quote. Same day delivery available.</p>
          <a href="tel:01159999999" className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-surface-950 shimmer">
            <Phone className="w-5 h-5" /> 0115 999 9999
          </a>
        </div>
      </section>
    </div>
  );
}
