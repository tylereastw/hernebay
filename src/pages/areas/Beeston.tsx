import { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle2, PhoneCall, ArrowRight, Clock, Shield, Recycle } from 'lucide-react';
import FaqItem from '../../components/FaqItem';

const faqs = [
  {
    question: 'How much does skip hire cost in Beeston?',
    answer:
      'Skip hire in Beeston starts from £150 for a 4 yard mini skip. Midi skips from £200, builders skips from £250, and large skips from £350. We deliver from our Long Eaton yard, just 10 minutes away.',
  },
  {
    question: 'Can you deliver a skip to Beeston the same day?',
    answer:
      'Yes, we offer same day skip delivery to Beeston and the wider NG9 area. Order before noon for same day, or next day as standard.',
  },
  {
    question: 'Do I need a skip permit in Beeston?',
    answer:
      "If the skip is on your driveway, no permit is needed. For road placement, you'll need a permit from Broxtowe Borough Council. We handle the permit application for you.",
  },
  {
    question: 'What areas near Beeston do you cover?',
    answer:
      'We cover all areas around Beeston including Chilwell, Bramcote, Wollaton, Toton, Attenborough, and Stapleford. We also serve the wider NG9 postcode area.',
  },
];

const nearbyAreas = [
  { name: 'Chilwell', href: '/areas/chilwell' },
  { name: 'Bramcote', href: '/areas/bramcote' },
  { name: 'Toton', href: '/areas/toton' },
  { name: 'Stapleford', href: '/areas/stapleford' },
  { name: 'Nottingham', href: '/areas/nottingham' },
  { name: 'Sandiacre', href: '/areas/sandiacre' },
];

const subAreas = ['Chilwell', 'Bramcote', 'Wollaton borders', 'Attenborough', 'Toton'];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    const el = ref.current;
    if (el) el.querySelectorAll('.reveal, .stagger-children').forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);
  return ref;
}

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
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://longeatonskips.co.uk/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Areas',
      item: 'https://longeatonskips.co.uk/areas/',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Beeston',
      item: 'https://longeatonskips.co.uk/areas/beeston/',
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Skip Hire Beeston',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Long Eaton Skips',
    telephone: '01159999999',
    url: 'https://longeatonskips.co.uk',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Beeston, Nottingham',
  },
  serviceType: 'Skip Hire',
  description:
    'Skip hire in Beeston, Nottingham from £150. Mini, midi, builders & large skips with same day delivery to NG9.',
};

export default function Beeston() {
  const ref = useScrollReveal();

  return (
    <>
      <Helmet>
        <title>Skip Hire Beeston | Same Day Delivery | From £150 | Long Eaton Skips</title>
        <meta
          name="description"
          content="Skip hire in Beeston, Nottingham from £150. Mini, midi, builders & large skips. Same day delivery to NG9. Covering Chilwell, Bramcote & Wollaton."
        />
        <link rel="canonical" href="https://longeatonskips.co.uk/areas/beeston/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <div ref={ref}>
        {/* Hero Section */}
        <section className="pt-28 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="reveal">
                <div className="flex items-center gap-2 text-brand-400 mb-4">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-medium tracking-wide uppercase">Beeston, Nottingham &mdash; NG9</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Skip Hire in{' '}
                  <span className="gradient-text">Beeston, Nottingham</span>
                </h1>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Affordable skip hire delivered to Beeston from our Long Eaton yard, just 10 minutes away. Mini, midi, builders and large skips available with same day delivery across the NG9 postcode area.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <a href="tel:01159999999" className="btn-gradient px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    0115 999 9999
                  </a>
                  <Link to="/contact" className="glass px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-2 hover-lift">
                    Get a Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Trust Signals */}
                <div className="grid grid-cols-2 gap-4 stagger-children">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-brand-400 shrink-0" />
                    <span className="text-sm text-gray-300">Same day delivery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0" />
                    <span className="text-sm text-gray-300">All sizes available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-brand-400 shrink-0" />
                    <span className="text-sm text-gray-300">Fully licensed carrier</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Recycle className="w-5 h-5 text-brand-400 shrink-0" />
                    <span className="text-sm text-gray-300">90% recycled</span>
                  </div>
                </div>
              </div>

              {/* Right Price Card */}
              <div className="reveal">
                <div className="glass rounded-3xl p-8 shimmer">
                  <h2 className="text-xl font-bold mb-6 text-center">Quick Prices &mdash; Beeston</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-white/10">
                      <div>
                        <p className="font-semibold">Mini Skip</p>
                        <p className="text-sm text-gray-400">4 yard &mdash; 30-40 bags</p>
                      </div>
                      <span className="text-brand-400 font-bold text-lg">From £150</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-white/10">
                      <div>
                        <p className="font-semibold">Midi Skip</p>
                        <p className="text-sm text-gray-400">6 yard &mdash; 50-60 bags</p>
                      </div>
                      <span className="text-brand-400 font-bold text-lg">From £200</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-white/10">
                      <div>
                        <p className="font-semibold">Builders Skip</p>
                        <p className="text-sm text-gray-400">8 yard &mdash; 70-80 bags</p>
                      </div>
                      <span className="text-brand-400 font-bold text-lg">From £250</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <p className="font-semibold">Large Skip</p>
                        <p className="text-sm text-gray-400">12 yard &mdash; 100-120 bags</p>
                      </div>
                      <span className="text-brand-400 font-bold text-lg">From £350</span>
                    </div>
                  </div>
                  <a
                    href="tel:01159999999"
                    className="btn-gradient w-full mt-6 py-4 rounded-2xl font-semibold text-center inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call for Exact Price
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="hr-gradient max-w-6xl mx-auto" />

        {/* Local Service Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Skip Hire Beeston &mdash; Local Service, Competitive Prices
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Beeston is just 10 minutes from our Long Eaton yard, making it one of the fastest areas we deliver to. We know Beeston well and understand the unique demands of the area &mdash; from the high turnover of university student lets requiring regular clearouts, to the Victorian terraced properties along the side streets off the High Road that are constantly being renovated and modernised.
              </p>
              <p>
                The ongoing tram corridor regeneration has brought a wave of new development to Beeston, with old commercial buildings making way for modern apartments and mixed-use schemes. Whether you are a landlord turning around a student property between tenancies, a homeowner renovating a period terrace, or a contractor working on one of the new-build projects near the tram line, we have the right skip at the right price.
              </p>
              <p>
                We understand Beeston's mix of period homes and modern builds, and we will recommend the right skip size for your project. Our local knowledge means we know which streets have permit restrictions and where driveway access can be tight &mdash; so you get practical advice from a team that actually knows the area.
              </p>
            </div>
          </div>
        </section>

        <div className="hr-gradient max-w-6xl mx-auto" />

        {/* Coverage Area Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Cover in the Beeston Area</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We deliver skips throughout Beeston and the surrounding areas. Whether you are on the High Road, Station Road, or near the University of Nottingham campus area, we will get a skip to you quickly and efficiently.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 stagger-children">
              {subAreas.map((area) => (
                <div key={area} className="glass rounded-2xl px-5 py-4 flex items-center gap-3 hover-lift">
                  <MapPin className="w-5 h-5 text-brand-400 shrink-0" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
            <div className="glass rounded-3xl p-6">
              <h3 className="font-semibold mb-3">Postcode Coverage</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We cover the full NG9 postcode area including NG9 1, NG9 2, NG9 3, NG9 4, NG9 5, and NG9 6. This includes all residential and commercial addresses across Beeston, Chilwell, Bramcote, and surrounding streets. Key roads we regularly deliver to include the High Road, Station Road, Queens Road, Wollaton Road, and the streets around the University of Nottingham campus.
              </p>
            </div>
          </div>
        </section>

        <div className="hr-gradient max-w-6xl mx-auto" />

        {/* Skip Sizes Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Popular Skip Sizes in Beeston</h2>

            <div className="space-y-8 stagger-children">
              <div className="glass rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-3">
                  Mini &amp; Midi Skips <span className="text-brand-400">&mdash; From £150</span>
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Our most popular sizes in Beeston. Mini and midi skips are ideal for student let clearouts between tenancies, end-of-tenancy waste from rented properties, and small garden jobs on the compact plots that come with Victorian terraces. A 4 yard mini skip handles a single room clearout or bathroom refit, while a 6 yard midi is perfect when you have a bit more to shift. Both sizes fit on most Beeston driveways without needing a road permit.
                </p>
              </div>

              <div className="glass rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-3">
                  Builders Skips <span className="text-brand-400">&mdash; From £250</span>
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  The 8 yard builders skip is the go-to choice for Victorian property renovations across Beeston &mdash; from full house strip-outs to extension builds and the loft conversions that are increasingly common in the area. It handles a solid mix of rubble, timber, plasterboard and general construction waste. If you are working on one of Beeston's period terraces, this is usually the right size.
                </p>
              </div>

              <div className="glass rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-3">
                  Large Skips <span className="text-brand-400">&mdash; From £350</span>
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Our 12 yard large skips are suited to commercial refits along the High Road, larger renovation projects, and new-build developments near the tram line. If you are clearing out a full property, managing waste from a commercial premises, or running a bigger construction job, a large skip gives you the capacity to keep the site clear and work moving.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="hr-gradient max-w-6xl mx-auto" />

        {/* Permits Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Skip Permits in Beeston</h2>
            <div className="glass rounded-3xl p-8">
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  If you are placing a skip on your own driveway or private land, no permit is needed. However, if the skip needs to go on a public road or pavement, you will need a skip permit from <strong className="text-white">Broxtowe Borough Council</strong>.
                </p>
                <p>
                  We handle the entire permit application process for you. Just let us know when you book and we will take care of the paperwork. Typical processing time is 3 to 5 working days, so plan ahead if you need road placement.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">No permit needed for driveways</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">Permit required for road/pavement only</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">We handle the application for you</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">3-5 working days processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="hr-gradient max-w-6xl mx-auto" />

        {/* Why Choose Us Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Long Eaton Skips for Beeston?</h2>
            <div className="grid sm:grid-cols-2 gap-4 stagger-children">
              {[
                'Just 10 minutes from Beeston',
                'Same day delivery available',
                'Competitive local prices',
                'Fully licensed waste carrier',
                '90% recycling rate',
                'We handle permits for you',
                'Flexible hire periods',
              ].map((usp) => (
                <div key={usp} className="flex items-center gap-3 glass rounded-2xl px-5 py-4 hover-lift">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0" />
                  <span className="font-medium">{usp}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="hr-gradient max-w-6xl mx-auto" />

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Beeston Skip Hire Questions</h2>
            <div className="space-y-4 stagger-children">
              {faqs.map((faq) => (
                <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        <div className="hr-gradient max-w-6xl mx-auto" />

        {/* Nearby Areas Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Nearby Areas We Also Cover</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 stagger-children">
              {nearbyAreas.map((area) => (
                <Link
                  key={area.name}
                  to={area.href}
                  className="glass rounded-2xl px-5 py-4 flex items-center justify-between hover-lift group"
                >
                  <span className="font-medium">{area.name}</span>
                  <ArrowRight className="w-4 h-4 text-brand-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="hr-gradient max-w-6xl mx-auto" />

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="glass rounded-3xl p-10 md:p-14">
              <PhoneCall className="w-12 h-12 text-brand-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Skip?</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Call us now for a free, no-obligation quote. Same day delivery available to Beeston and all NG9 postcodes.
              </p>
              <a
                href="tel:01159999999"
                className="btn-gradient px-10 py-5 rounded-2xl font-semibold text-xl inline-flex items-center gap-3"
              >
                <Phone className="w-6 h-6" />
                0115 999 9999
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
