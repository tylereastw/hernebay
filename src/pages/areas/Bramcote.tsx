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
    question: 'How much does skip hire cost in Bramcote?',
    answer: 'Skip hire in Bramcote starts from just £150 for a 4 yard mini skip. Midi skips start from £200, builders skips from £250, and large 12 yard skips from £350. All prices include delivery, collection, and responsible waste disposal. Call us on 0115 999 9999 for an exact quote.',
  },
  {
    question: 'Can I get same day skip delivery in Bramcote?',
    answer: 'Yes, we offer same day skip delivery in Bramcote. Our Long Eaton depot is nearby and we can usually get a skip to you within a couple of hours. Call us before midday on 0115 999 9999 for the best chance of same day delivery.',
  },
  {
    question: 'Do I need a permit for a skip in Bramcote?',
    answer: 'If your skip is placed on a public road or pavement in Bramcote, you will need a skip permit from Broxtowe Borough Council. If the skip is on your private driveway or land, no permit is needed. Most properties in Bramcote have generous driveways, so road permits are rarely required. We can arrange one if needed.',
  },
  {
    question: 'Do you deliver skips to Beeston, Chilwell, Wollaton and Stapleford?',
    answer: 'Absolutely. We cover Bramcote and all the surrounding areas including Beeston, Chilwell, Wollaton, and Stapleford. Our central location in Long Eaton means we can reach all of these areas quickly and affordably.',
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
    { '@type': 'ListItem', position: 3, name: 'Bramcote', item: 'https://longeatonskips.co.uk/areas/bramcote/' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Skip Hire Bramcote',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Long Eaton Skips',
    telephone: '01159999999',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Bramcote, Nottinghamshire',
  },
  description: 'Skip hire in Bramcote from £150. Mini, midi, builders & large skips with same day delivery to NG9.',
};

export default function Bramcote() {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="bg-surface-950 text-white">
      <Helmet>
        <title>Skip Hire Bramcote | Same Day Delivery | From £150 | Long Eaton Skips</title>
        <meta name="description" content="Skip hire in Bramcote from £150. Mini, midi, builders & large skips. Same day delivery to NG9. Covering Beeston, Chilwell & Wollaton." />
        <link rel="canonical" href="https://longeatonskips.co.uk/areas/bramcote/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 reveal">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Skip Hire in <span className="gradient-text">Bramcote, Nottinghamshire</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Need a skip in Bramcote? Long Eaton Skips delivers mini, midi, builders and large skips across NG9 with same day availability. Bramcote is an affluent residential area with larger properties, and we regularly supply skips for garden renovations, period home restorations and landscaping projects throughout the village.
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
            <h2 className="text-lg font-bold mb-4 text-center">Bramcote Skip Prices</h2>
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
          <h2 className="text-3xl font-bold mb-6">Skip Hire Bramcote — Local Service, Competitive Prices</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>
              Bramcote is one of the more affluent areas we serve, characterised by larger detached properties set on generous plots. This means garden renovation and landscaping projects are particularly common here — from clearing mature gardens and removing old decking, to excavating for new driveways and patio installations. Many Bramcote homeowners invest significantly in their outdoor spaces, and a well-sized skip is an essential part of the process.
            </p>
            <p>
              The area also has a good number of period and character properties that regularly undergo renovation work. Whether it is restoring original features in an older home on Bramcote Lane, updating a kitchen or bathroom in one of the substantial family houses on the Hills, or managing the waste from an extension build, we provide the right skip at the right price. Builders skips and large skips are especially popular in Bramcote given the scale of projects we typically see.
            </p>
            <p>
              Our Long Eaton depot is a short drive from Bramcote, and we know the area well. Many Bramcote properties have spacious driveways that easily accommodate a skip without the need for a road permit, making the whole process straightforward. We pride ourselves on being clean, punctual and respectful of property — qualities that our Bramcote customers particularly appreciate.
            </p>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Coverage */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-6">What We Cover in the Bramcote Area</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            We deliver skips across all parts of Bramcote and the wider NG9 postcode area. Whether your project is in the village centre, up on Bramcote Hills, or along the Bramcote Lane corridor, we will get a skip to you quickly and reliably.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 stagger-children">
            {['Bramcote village', 'Bramcote Hills', 'Bramcote Lane area', 'Derby Road corridor', 'Thoresby Road area', 'Town Street end'].map((area) => (
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
          <h2 className="text-3xl font-bold mb-8">Popular Skip Sizes in Bramcote</h2>

          <div className="space-y-8">
            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Mini & Midi Skips</h3>
              <p className="text-gray-300 leading-relaxed">
                Mini skips (4 yard, from £150) and midi skips (6 yard, from £200) are popular in Bramcote for garden tidying, shed clearances, and smaller interior projects. A mini holds around 30-40 bin bags — ideal for clearing a conservatory, garage or single room — while a midi at 50-60 bags handles larger garden waste jobs like hedge removals and border clearouts. Given the generous garden sizes in Bramcote, midi skips are often the more practical choice.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Builders Skips</h3>
              <p className="text-gray-300 leading-relaxed">
                The 8 yard builders skip (from £250) is the most popular size in Bramcote, reflecting the scale of renovation work that larger properties typically require. With capacity for 70-80 bin bags, it handles kitchen and bathroom strip-outs, extension waste, and the mix of rubble, timber and plasterboard that period property renovations generate. Trade customers working on the substantial detached homes in Bramcote Hills and along Bramcote Lane regularly choose this size.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Large Skips</h3>
              <p className="text-gray-300 leading-relaxed">
                Our 12 yard large skips (from £350) are well suited to the major landscaping and renovation projects that Bramcote properties often involve. Holding 100-120 bin bags worth of waste, they can handle whole-garden transformations, large-scale driveway replacements, and full property renovations. If you are gutting a period home or clearing a large mature garden for a complete redesign, this is the most cost-effective option.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Permits */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-6">Skip Permits in Bramcote</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>
              Bramcote falls under <strong className="text-white">Broxtowe Borough Council</strong> for skip permit purposes. If you need to place your skip on a public road, pavement or grass verge, a skip permit is required. If the skip fits on your private driveway or land, no permit is needed.
            </p>
            <p>
              The good news is that most properties in Bramcote have generous driveways and off-street parking, so the majority of our Bramcote customers can have their skip placed on private land without needing a permit. If road placement is unavoidable, we can arrange the Broxtowe Borough Council skip permit on your behalf. Just let us know when you book and we will handle the paperwork. Permit processing typically takes 1-2 working days.
            </p>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-8">Why Choose Long Eaton Skips for Bramcote?</h2>
          <div className="grid sm:grid-cols-2 gap-4 stagger-children">
            {[
              'Short drive from Bramcote — reliable delivery times across NG9',
              'Same day skip delivery available for all sizes',
              'Competitive prices starting from just £150',
              'Fully licensed waste carrier — Environment Agency registered',
              'Full 14-day hire period included as standard',
              'We arrange Broxtowe Borough Council permits if needed',
              'Clean, punctual service trusted by Bramcote homeowners',
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
          <h2 className="text-3xl font-bold mb-8">Bramcote Skip Hire Questions</h2>
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
              { name: 'Beeston', path: '/areas/beeston' },
              { name: 'Chilwell', path: '/areas/chilwell' },
              { name: 'Stapleford', path: '/areas/stapleford' },
              { name: 'Nottingham', path: '/areas/nottingham' },
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
          <h2 className="text-3xl font-bold mb-4">Ready to Book a Skip in Bramcote?</h2>
          <p className="text-gray-400 mb-8">Call us now for a free, no-obligation quote. Same day delivery available.</p>
          <a href="tel:01159999999" className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-surface-950 shimmer">
            <Phone className="w-5 h-5" /> 0115 999 9999
          </a>
        </div>
      </section>
    </div>
  );
}
