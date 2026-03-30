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
    question: 'How much does skip hire cost in Chilwell?',
    answer: 'Skip hire in Chilwell starts from just £150 for a 4 yard mini skip. Midi skips start from £200, builders skips from £250, and large 12 yard skips from £350. All prices include delivery, collection, and responsible waste disposal. Call us on 0115 999 9999 for an exact quote.',
  },
  {
    question: 'Can I get same day skip delivery in Chilwell?',
    answer: 'Yes, we offer same day skip delivery in Chilwell. Our Long Eaton yard is a short drive away, so we can usually have a skip on your driveway within a couple of hours. Call us before midday on 0115 999 9999 for the best chance of same day delivery.',
  },
  {
    question: 'Do I need a permit for a skip in Chilwell?',
    answer: 'If your skip is placed on a public road or pavement in Chilwell, you will need a skip permit from Broxtowe Borough Council. If the skip is on your private driveway or land, no permit is needed. We can arrange the permit on your behalf if required.',
  },
  {
    question: 'Do you deliver skips to Beeston, Toton, Bramcote and Stapleford?',
    answer: 'Absolutely. We cover Chilwell and all the surrounding areas including Beeston, Toton, Bramcote, and Stapleford. Our central location in Long Eaton means we can reach all of these areas quickly and affordably.',
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
    { '@type': 'ListItem', position: 3, name: 'Chilwell', item: 'https://longeatonskips.co.uk/areas/chilwell/' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Skip Hire Chilwell',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Long Eaton Skips',
    telephone: '01159999999',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Chilwell, Nottinghamshire',
  },
  description: 'Skip hire in Chilwell from £150. Mini, midi, builders & large skips with same day delivery to NG9.',
};

export default function Chilwell() {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="bg-surface-950 text-white">
      <Helmet>
        <title>Skip Hire Chilwell | Same Day Delivery | From £150 | Long Eaton Skips</title>
        <meta name="description" content="Skip hire in Chilwell from £150. Mini, midi, builders & large skips. Same day delivery to NG9. Covering Beeston, Toton & Bramcote." />
        <link rel="canonical" href="https://longeatonskips.co.uk/areas/chilwell/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 reveal">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Skip Hire in <span className="gradient-text">Chilwell, Nottinghamshire</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Looking for a skip in Chilwell? Long Eaton Skips delivers mini, midi, builders and large skips across NG9 with same day availability. Chilwell is a popular residential suburb and we regularly serve homeowners tackling renovations, garden makeovers and house clearances throughout the area.
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
            <h2 className="text-lg font-bold mb-4 text-center">Chilwell Skip Prices</h2>
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
          <h2 className="text-3xl font-bold mb-6">Skip Hire Chilwell — Local Service, Competitive Prices</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>
              Chilwell is a well-established residential suburb sitting between Beeston and Toton, and it is one of our most popular delivery areas. The neighbourhood is characterised by its mix of 1930s semi-detached houses, post-war council housing, and newer family estates — all of which generate steady demand for skip hire as homeowners invest in improvements and extensions.
            </p>
            <p>
              Home improvement projects are particularly common in Chilwell. From loft conversions and garage conversions on the inter-war semis, to kitchen and bathroom refits in the modern estates around Inham Nook, we see a wide range of domestic skip hire requirements. Garden projects are another big driver, especially during spring and summer when residents are landscaping, building patios, or clearing overgrown plots.
            </p>
            <p>
              Our Long Eaton base is just a few minutes from Chilwell, which means we can offer fast delivery and collection — often same day. We have built strong relationships with Chilwell homeowners who come back to us project after project, and many of our bookings come through word of mouth recommendations from satisfied customers in the area.
            </p>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Coverage */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-6">What We Cover in the Chilwell Area</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            We deliver skips across all parts of Chilwell and the wider NG9 postcode area. Whether your project is in the heart of the village, the Inham Nook estate, or near the Chetwynd Barracks site, we will get a skip to you quickly.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 stagger-children">
            {['Chilwell village', 'Inham Nook', 'Chetwynd Barracks area', 'High Road corridor', 'Bramcote Lane end', 'Chilwell Meadows'].map((area) => (
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
          <h2 className="text-3xl font-bold mb-8">Popular Skip Sizes in Chilwell</h2>

          <div className="space-y-8">
            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Mini & Midi Skips</h3>
              <p className="text-gray-300 leading-relaxed">
                Mini skips (4 yard, from £150) and midi skips (6 yard, from £200) are the most frequently ordered sizes in Chilwell. They are ideal for the household clearouts, garden tidying, and small renovation projects that are common across the area. A mini skip holds around 30-40 bin bags — perfect for a single room clearout or small bathroom refit — while a midi at 50-60 bags is the better choice for larger garden clearances or garage clear-outs on the 1930s semis that line many of Chilwell's streets.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Builders Skips</h3>
              <p className="text-gray-300 leading-relaxed">
                The 8 yard builders skip (from £250) is the right choice for the renovation and extension projects that are increasingly popular in Chilwell. With capacity for 70-80 bin bags, it comfortably handles kitchen strip-outs, garage conversions, and the loft conversions that many homeowners are undertaking to add space to their inter-war semis. Trade customers working on properties throughout the NG9 area regularly choose this size for its versatility.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Large Skips</h3>
              <p className="text-gray-300 leading-relaxed">
                Our 12 yard large skips (from £350) are suited to major projects in Chilwell — full house clearances, large extension builds, and the kind of whole-property renovations that older houses in the area sometimes need. Holding 100-120 bin bags worth of waste, they are also a popular choice for contractors working on multiple properties or managing waste from the redevelopment sites around the former Chetwynd Barracks area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Permits */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-6">Skip Permits in Chilwell</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>
              Chilwell falls under <strong className="text-white">Broxtowe Borough Council</strong> for skip permit purposes. If you need to place your skip on a public road, pavement or grass verge, a skip permit is required. If the skip fits on your private driveway or land, no permit is needed.
            </p>
            <p>
              Many properties in Chilwell have driveways that can accommodate a skip, particularly the 1930s semis and modern estates. However, if road placement is your only option, we can arrange the Broxtowe Borough Council skip permit on your behalf. Just let us know when you book and we will handle the paperwork. Permit processing typically takes 1-2 working days.
            </p>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-8">Why Choose Long Eaton Skips for Chilwell?</h2>
          <div className="grid sm:grid-cols-2 gap-4 stagger-children">
            {[
              'Minutes from Chilwell — fast delivery across NG9',
              'Same day skip delivery available for all sizes',
              'Competitive prices starting from just £150',
              'Fully licensed waste carrier — Environment Agency registered',
              'Full 14-day hire period included as standard',
              'We arrange Broxtowe Borough Council permits for you',
              'Trusted by Chilwell families and local tradespeople',
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
          <h2 className="text-3xl font-bold mb-8">Chilwell Skip Hire Questions</h2>
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
              { name: 'Toton', path: '/areas/toton' },
              { name: 'Bramcote', path: '/areas/bramcote' },
              { name: 'Stapleford', path: '/areas/stapleford' },
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
          <h2 className="text-3xl font-bold mb-4">Ready to Book a Skip in Chilwell?</h2>
          <p className="text-gray-400 mb-8">Call us now for a free, no-obligation quote. Same day delivery available.</p>
          <a href="tel:01159999999" className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-surface-950 shimmer">
            <Phone className="w-5 h-5" /> 0115 999 9999
          </a>
        </div>
      </section>
    </div>
  );
}
