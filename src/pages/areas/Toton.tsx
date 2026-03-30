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
    question: 'How much does skip hire cost in Toton?',
    answer: 'Skip hire in Toton starts from just £150 for a 4 yard mini skip. Midi skips start from £200, builders skips from £250, and large 12 yard skips from £350. All prices include delivery, collection, and responsible waste disposal. Call us on 0115 999 9999 for an exact quote.',
  },
  {
    question: 'Can I get same day skip delivery in Toton?',
    answer: 'Yes, we offer same day skip delivery to Toton. Our Long Eaton depot is just a few minutes away, so we can usually deliver within a couple of hours. Call us before midday on 0115 999 9999 for the best chance of same day delivery.',
  },
  {
    question: 'Do I need a permit for a skip in Toton?',
    answer: 'If your skip is placed on a public road or pavement in Toton, you will need a skip permit from Broxtowe Borough Council. If the skip is on your private driveway or land, no permit is needed. We can arrange the permit on your behalf if required.',
  },
  {
    question: 'What areas near Toton do you cover?',
    answer: 'We cover Toton and all surrounding areas including Chilwell, Beeston, Stapleford, and Long Eaton. Our Long Eaton base puts us right next to Toton, meaning fast delivery times and competitive prices across the NG9 postcode.',
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
    { '@type': 'ListItem', position: 3, name: 'Toton', item: 'https://longeatonskips.co.uk/areas/toton/' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Skip Hire Toton',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Long Eaton Skips',
    telephone: '01159999999',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Toton, Nottinghamshire',
  },
  description: 'Skip hire in Toton from £150. Mini, midi, builders & large skips with same day delivery to NG9.',
};

export default function Toton() {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="bg-surface-950 text-white">
      <Helmet>
        <title>Skip Hire Toton | Same Day Delivery | From £150 | Long Eaton Skips</title>
        <meta name="description" content="Skip hire in Toton from £150. Mini, midi, builders & large skips. Same day delivery to NG9. Covering Chilwell, Beeston & Stapleford." />
        <link rel="canonical" href="https://longeatonskips.co.uk/areas/toton/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 reveal">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Skip Hire in <span className="gradient-text">Toton, Nottinghamshire</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Need a skip in Toton? Long Eaton Skips delivers mini, midi, builders and large skips across NG9 with same day availability. Toton is one of the closest areas to our Long Eaton depot, and with new development at Toton Sidings alongside established housing, we are seeing growing demand for skip hire from both new homeowners and long-time residents tackling improvement projects.
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
            <h2 className="text-lg font-bold mb-4 text-center">Toton Skip Prices</h2>
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
          <h2 className="text-3xl font-bold mb-6">Skip Hire Toton — Local Service, Competitive Prices</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>
              Toton is a tram-connected suburb sitting between Long Eaton and Beeston, and it is one of our busiest delivery areas. The neighbourhood has two distinct characters — the established residential streets around Toton village with their mature gardens and 1930s-era housing, and the newer developments springing up around the former Toton Sidings site. Both generate consistent demand for skip hire, whether it is clearing waste from new build snagging, renovating an older property, or managing a large garden project.
            </p>
            <p>
              Our Long Eaton depot is just a few minutes from Toton, which means we can offer the fastest turnaround times in the area. Many of our Toton customers call in the morning and have a skip on their drive before lunch. The proximity also keeps our costs down — savings we pass straight on to you in the form of competitive pricing across all skip sizes.
            </p>
            <p>
              Whether you are a homeowner on Banks Road clearing out a loft, a tradesperson finishing a job near the tram stop, or a developer managing waste on a new build plot, we make skip hire simple. One phone call, transparent pricing, and a skip delivered on your schedule. Every hire includes a full 14-day period and responsible disposal at licensed waste facilities.
            </p>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Coverage */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-6">What We Cover in the Toton Area</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            We deliver skips across all parts of Toton and the wider NG9 postcode area. From the village centre through to the Toton Lane tram stop area and the Banks Road neighbourhood, every part of Toton is within easy reach of our depot.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 stagger-children">
            {['Toton village', 'Toton Lane tram stop area', 'Banks Road area', 'Swiney Way area', 'Stapleford Lane end', 'High Road area'].map((area) => (
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
          <h2 className="text-3xl font-bold mb-8">Popular Skip Sizes in Toton</h2>

          <div className="space-y-8">
            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Mini & Midi Skips</h3>
              <p className="text-gray-300 leading-relaxed">
                Mini skips (4 yard, from £150) and midi skips (6 yard, from £200) are consistently popular in Toton. The established residential streets around the village have mature gardens that generate plenty of seasonal waste, while homeowners on newer developments often need to clear packaging and snagging debris. A mini holds around 30-40 bin bags — ideal for a garden tidy or single room clearout. The midi at 50-60 bags suits larger garden overhauls and the kind of home improvement projects Toton residents regularly undertake.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Builders Skips</h3>
              <p className="text-gray-300 leading-relaxed">
                The 8 yard builders skip (from £250) sees strong demand in Toton, driven by homeowners modernising the area's older housing stock. Kitchen and bathroom renovations, loft conversions, and garage conversions all produce the kind of heavy mixed waste that this skip handles best. At 70-80 bin bags capacity, it is also the go-to for tradespeople working on home improvement projects around the Toton Lane and Banks Road areas.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Large Skips</h3>
              <p className="text-gray-300 leading-relaxed">
                Our 12 yard large skips (from £350) are ideal for the bigger jobs in Toton — whole house refurbishments, large extensions, and clearances of multiple rooms. With the ongoing development around Toton Sidings, we also see demand from contractors managing construction waste on larger projects. Holding 100-120 bin bags, these skips offer the best value per bag and save time compared to hiring multiple smaller skips for substantial waste volumes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Permits */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-6">Skip Permits in Toton</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>
              Toton falls under <strong className="text-white">Broxtowe Borough Council</strong> for skip permit purposes. If you need to place your skip on a public road, pavement or grass verge, a skip permit is required. If the skip fits on your private driveway or land, no permit is needed.
            </p>
            <p>
              We can arrange the Broxtowe Borough Council skip permit on your behalf, saving you the hassle of dealing with the council directly. Just let us know when you book and we will handle the paperwork. Permit processing typically takes 1-2 working days, so plan ahead if you need a road placement. Many Toton properties have driveways that can accommodate a skip, so check your available space before assuming you will need a permit.
            </p>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-bold mb-8">Why Choose Long Eaton Skips for Toton?</h2>
          <div className="grid sm:grid-cols-2 gap-4 stagger-children">
            {[
              'Minutes from Toton — among the fastest delivery times in NG9',
              'Same day skip delivery available for all sizes',
              'Competitive prices starting from just £150',
              'Fully licensed waste carrier — Environment Agency registered',
              'Full 14-day hire period included as standard',
              'We arrange Broxtowe Borough Council permits for you',
              'Serving both established homes and new Toton developments',
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
          <h2 className="text-3xl font-bold mb-8">Toton Skip Hire Questions</h2>
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
              { name: 'Chilwell', path: '/areas/chilwell' },
              { name: 'Beeston', path: '/areas/beeston' },
              { name: 'Stapleford', path: '/areas/stapleford' },
              { name: 'Long Eaton', path: '/' },
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
          <h2 className="text-3xl font-bold mb-4">Ready to Book a Skip in Toton?</h2>
          <p className="text-gray-400 mb-8">Call us now for a free, no-obligation quote. Same day delivery available.</p>
          <a href="tel:01159999999" className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-surface-950 shimmer">
            <Phone className="w-5 h-5" /> 0115 999 9999
          </a>
        </div>
      </section>
    </div>
  );
}
