import { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Clock, Truck, MapPin, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import FaqItem from '../components/FaqItem';

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
    if (el)
      el.querySelectorAll('.reveal, .stagger-children').forEach((child) =>
        observer.observe(child)
      );
    return () => observer.disconnect();
  }, []);
  return ref;
}

const faqs = [
  {
    question: 'Can you get a skip delivered the same day?',
    answer:
      'Yes. If you order before noon, we can deliver a skip to your Long Eaton address the same day. Give us a call on 0115 999 9999 as early as possible to guarantee availability for your required size.',
  },
  {
    question: 'How much does it cost to hire a skip for one day?',
    answer:
      'Our standard skip hire includes a 14-day hire period as standard. Prices start from £150 for a 4-yard mini skip. There is no separate one-day rate because every hire already includes up to 14 days.',
  },
  {
    question: 'How much is a skip for one day?',
    answer:
      'The same price as our standard hire. Every skip comes with a 14-day hire period included. Mini skips start from £150, midi from £200, builders from £250, and maxi from £350.',
  },
  {
    question: 'How much does a mini skip cost per day?',
    answer:
      'Mini skips start from £150, and that price includes a full 14-day hire period. There is no per-day pricing, so you get great value whether you need the skip for one day or the full two weeks.',
  },
  {
    question: 'Is it cheaper to hire a skip for one day?',
    answer:
      'Skip hire includes a 14-day hire period as standard, so there is no separate per-day pricing. You pay the same whether you keep the skip for one day or fourteen days. Prices start from £150 for a mini skip.',
  },
];

const areas = [
  'Long Eaton',
  'Sandiacre',
  'Breaston',
  'Sawley',
  'Draycott',
  'Borrowash',
  'Stapleford',
  'Toton',
  'Chilwell',
  'Beeston',
  'Attenborough',
  'Shardlow',
  'Castle Donington',
  'Ilkeston',
];

const skipSizes = [
  { name: '4yd Mini', from: '£150', desc: 'Small clearouts & garden waste' },
  { name: '6yd Midi', from: '£200', desc: 'Kitchen & bathroom refits' },
  { name: '8yd Builders', from: '£250', desc: 'Construction & renovation' },
  { name: '12yd Maxi', from: '£350', desc: 'Large projects & house clearances' },
];

const useCases = [
  {
    title: 'Unexpected Waste',
    desc: 'Surprise demolition finds or extra rubbish you did not plan for. We get a skip to you fast.',
  },
  {
    title: 'Project Deadline',
    desc: 'Finishing a job today and need waste cleared before sign-off? Same day delivery keeps you on track.',
  },
  {
    title: 'Landlord Clearout',
    desc: 'Tenant left a mess? Get a skip delivered the same day so you can turn the property around quickly.',
  },
  {
    title: 'Builder Ran Out of Space',
    desc: 'Current skip full and the job is not finished? We deliver an extra skip within hours.',
  },
];

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
      name: 'Same Day Skip Hire',
      item: 'https://longeatonskips.co.uk/same-day-skip-hire/',
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Same Day Skip Hire Long Eaton',
  description:
    'Same day skip delivery in Long Eaton and surrounding areas. Order before noon for same day delivery. All skip sizes available.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Long Eaton Skips',
    url: 'https://longeatonskips.co.uk',
    telephone: '0115 999 9999',
    areaServed: {
      '@type': 'Place',
      name: 'Long Eaton, Nottinghamshire',
    },
  },
  serviceType: 'Same Day Skip Hire',
  areaServed: areas.map((area) => ({
    '@type': 'Place',
    name: area,
  })),
};

export default function SameDaySkipHire() {
  const mainRef = useScrollReveal();

  return (
    <div ref={mainRef}>
      <Helmet>
        <title>Same Day Skip Hire Long Eaton | Urgent Delivery | Long Eaton Skips</title>
        <meta
          name="description"
          content="Same day skip delivery in Long Eaton. Order before noon for same day. All sizes available. Covering Sandiacre, Sawley, Beeston, Stapleford & beyond."
        />
        <link rel="canonical" href="https://longeatonskips.co.uk/same-day-skip-hire/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* Hero / Intro */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center reveal">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 text-brand-400 text-sm font-semibold mb-6">
            <AlertTriangle className="w-4 h-4" />
            Urgent Same Day Service
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Same Day Skip Hire</span> in Long Eaton
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Need a skip today? Order before noon and we will deliver to your door the same day.
            All sizes available across Long Eaton, Sandiacre, Sawley, Beeston, Stapleford and
            surrounding areas.
          </p>
          <a
            href="tel:01159999999"
            className="btn-gradient inline-flex items-center gap-3 px-8 py-5 rounded-2xl text-lg md:text-xl font-bold shimmer"
          >
            <Phone className="w-6 h-6" />
            0115 999 9999 — Call Now
          </a>
          <p className="text-brand-400 font-semibold mt-4 text-sm">
            Lines open early. Call before noon for guaranteed same day delivery.
          </p>
        </div>
      </section>

      <div className="hr-gradient max-w-md mx-auto" />

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 reveal">
            How <span className="gradient-text">Same Day Delivery</span> Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            {[
              {
                step: 1,
                icon: Phone,
                title: 'Call or Book Online',
                desc: 'Phone us on 0115 999 9999 or book online before noon. Let us know your address and what waste you need removing.',
              },
              {
                step: 2,
                icon: CheckCircle,
                title: 'Confirm Your Size',
                desc: 'We will help you choose the right skip size for your job. Mini, midi, builders, or maxi — all available same day.',
              },
              {
                step: 3,
                icon: Truck,
                title: 'Delivery Within Hours',
                desc: 'Our driver delivers your skip to your location the same day. Load it up at your own pace with a 14-day hire included.',
              },
            ].map((item) => (
              <div key={item.step} className="glass rounded-3xl p-8 hover-lift text-center">
                <div className="w-12 h-12 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center text-xl font-bold mx-auto mb-5">
                  {item.step}
                </div>
                <item.icon className="w-8 h-8 text-brand-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-md mx-auto" />

      {/* Delivery Areas */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 reveal">
            Same Day <span className="gradient-text">Delivery Areas</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto reveal">
            We offer same day skip delivery across Long Eaton and all surrounding towns and
            villages. If your area is not listed, give us a call — we probably cover it.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 stagger-children">
            {areas.map((area) => (
              <div
                key={area}
                className="glass rounded-2xl px-4 py-3 flex items-center gap-2 hover-lift"
              >
                <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
                <span className="text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-md mx-auto" />

      {/* Skip Sizes */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 reveal">
            Available Skip Sizes for <span className="gradient-text">Same Day</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto reveal">
            All skip sizes are available for same day delivery, subject to stock. Prices include
            a full 14-day hire period.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
            {skipSizes.map((size) => (
              <div
                key={size.name}
                className="glass rounded-3xl p-6 hover-lift text-center"
              >
                <h3 className="text-lg font-bold mb-2">{size.name}</h3>
                <p className="text-3xl font-bold gradient-text mb-1">{size.from}</p>
                <p className="text-brand-400 text-xs font-semibold mb-3">from</p>
                <p className="text-gray-400 text-sm">{size.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 reveal">
            <Link
              to="/#skip-sizes"
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-500 font-semibold transition-colors"
            >
              View all skip sizes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-md mx-auto" />

      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 reveal">
            When Do You Need <span className="gradient-text">Same Day?</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto reveal">
            Life does not always go to plan. Here are the most common reasons our customers need
            a skip delivered the same day.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 stagger-children">
            {useCases.map((item) => (
              <div key={item.title} className="glass rounded-3xl p-8 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-md mx-auto" />

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 reveal">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-3 stagger-children">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-md mx-auto" />

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Call Now for <span className="gradient-text">Same Day Delivery</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Do not wait around. Call us before noon and we will have a skip on your driveway
            today. All sizes, all areas, one phone call.
          </p>
          <a
            href="tel:01159999999"
            className="btn-gradient inline-flex items-center gap-3 px-10 py-6 rounded-2xl text-xl md:text-2xl font-bold shimmer"
          >
            <Phone className="w-7 h-7" />
            0115 999 9999
          </a>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/#skip-sizes"
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-500 font-semibold text-sm transition-colors"
            >
              View Skip Sizes
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/mini-skip-hire"
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-500 font-semibold text-sm transition-colors"
            >
              Mini Skip Hire
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/builders-skip-hire"
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-500 font-semibold text-sm transition-colors"
            >
              Builders Skip Hire
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/blog/what-can-you-put-in-a-skip"
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-500 font-semibold text-sm transition-colors"
            >
              Skip Waste Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/areas/beeston"
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-500 font-semibold text-sm transition-colors"
            >
              Skip Hire Beeston
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
