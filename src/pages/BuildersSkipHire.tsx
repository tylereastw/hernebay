import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle2, Ruler, Weight, HardHat, ArrowRight, Phone, Repeat, Users, Building2, Hammer } from 'lucide-react';
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

const acceptedWaste = [
  'Bricks & blocks',
  'Timber & wood',
  'Plasterboard & plaster',
  'Scrap metal',
  'Ceramic tiles',
  'Rubble & hardcore',
  'Soil & earth',
  'Concrete',
];

const faqs = [
  {
    question: 'How much does an 8 yard skip cost in the UK?',
    answer:
      'An 8 yard builders skip typically costs from £250 in the Long Eaton area. Prices vary by region, with some areas of the UK charging up to £350 or more. Our pricing includes delivery, collection, and 14-day hire as standard.',
  },
  {
    question: 'How heavy is an empty 8 yard skip?',
    answer:
      'An empty 8 yard skip weighs around 250-300kg. This is important to know if you are considering placement on a driveway or other surface, as the weight increases significantly once loaded with waste.',
  },
  {
    question: 'How much can you fit in an 8 yard skip?',
    answer:
      'An 8 yard skip holds approximately 70-80 bin bags of waste, or around 8 cubic yards of material. This makes it ideal for larger renovation projects, house clearances, and construction jobs where a significant volume of waste is generated.',
  },
  {
    question: 'What happens if I overload an 8 yard skip?',
    answer:
      'If a skip is overloaded above the fill line, we cannot legally collect it. Overloaded skips are unsafe to transport and can result in fines. We will ask you to remove excess waste before collection, or we can arrange an additional skip if needed.',
  },
  {
    question: 'What are the alternatives to an 8 yard skip?',
    answer:
      'If an 8 yard skip is too large, a 6 yard midi skip is a good alternative for medium-sized projects. For larger jobs, a 12 yard maxi skip provides extra capacity. We can help you choose the right size when you call for a quote.',
  },
  {
    question: "Can you put builder's rubble in a skip?",
    answer:
      'Yes, builders rubble such as bricks, concrete, and hardcore can go in a skip. However, heavy waste like rubble significantly affects the weight limit. A skip filled entirely with rubble will reach its weight limit well before it is visually full.',
  },
  {
    question: "How much weight can a builder's skip hold?",
    answer:
      'A builders skip can typically hold between 1 and 1.5 tonnes of waste, depending on the type of material. Light mixed waste allows you to fill the skip fully, while heavy materials like soil, rubble, and concrete will reach the weight limit sooner.',
  },
  {
    question: 'What size skip do builders use?',
    answer:
      'The 8 yard skip is the industry standard for builders and construction professionals. It offers enough capacity for most renovation and building projects without being excessively large. For bigger commercial jobs, a 12 yard maxi skip may be more suitable.',
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
      name: 'Builders Skip Hire',
      item: 'https://longeatonskips.co.uk/builders-skip-hire/',
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Builders Skip Hire',
  description:
    'Builders skip hire in Long Eaton. 8 yard skips for renovations, construction and building waste. Same day delivery available.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Long Eaton Skips',
    areaServed: 'Long Eaton, Derbyshire',
  },
  offers: {
    '@type': 'Offer',
    price: '250',
    priceCurrency: 'GBP',
    description: '8 yard builders skip including delivery, collection, and 14-day hire',
  },
};

export default function BuildersSkipHire() {
  const mainRef = useScrollReveal();

  return (
    <div ref={mainRef}>
      <Helmet>
        <title>Builders Skip Hire Long Eaton | 8 Yard Skips | From £250</title>
        <meta
          name="description"
          content="Builders skip hire in Long Eaton from £250. 8 yard skips for renovations, construction and building waste. Same day delivery. Fully licensed."
        />
        <link rel="canonical" href="https://longeatonskips.co.uk/builders-skip-hire/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* Hero / Intro */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="reveal text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-500/10 text-brand-400 mb-6">
            Industry Standard
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Builders Skip Hire in Long Eaton —{' '}
            <span className="gradient-text">8 Yard Skips</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            The 8 yard builders skip is the industry-standard choice for construction, renovation,
            and large clearance projects. Prices start from{' '}
            <span className="text-white font-semibold">£250</span> and include 14-day hire,
            delivery, and collection as standard. Same day delivery is available across Long Eaton
            and the surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:01159999999"
              className="btn-gradient shimmer px-8 py-3.5 rounded-xl font-bold text-surface-950 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get a Quote</span>
            </a>
            <Link
              to="/#skip-sizes"
              className="glass px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors flex items-center space-x-2"
            >
              <span>View All Sizes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-7xl mx-auto" />

      {/* Specifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="reveal text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            8 Yard Builders Skip{' '}
            <span className="gradient-text">Specifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about the dimensions, capacity, and weight limits of our
            8 yard builders skips.
          </p>
        </div>
        <div className="stagger-children grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 text-center hover-lift">
            <div className="w-14 h-14 mx-auto mb-5 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center">
              <Ruler className="w-7 h-7 text-surface-950" />
            </div>
            <h3 className="text-lg font-bold mb-2">Dimensions</h3>
            <p className="text-3xl font-extrabold gradient-text mb-1">3.7m x 1.7m x 1.2m</p>
            <p className="text-sm text-gray-500">Length x Width x Height</p>
          </div>
          <div className="glass rounded-3xl p-8 text-center hover-lift">
            <div className="w-14 h-14 mx-auto mb-5 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center">
              <HardHat className="w-7 h-7 text-surface-950" />
            </div>
            <h3 className="text-lg font-bold mb-2">Capacity</h3>
            <p className="text-3xl font-extrabold gradient-text mb-1">70–80</p>
            <p className="text-sm text-gray-500">Bin bags equivalent</p>
          </div>
          <div className="glass rounded-3xl p-8 text-center hover-lift">
            <div className="w-14 h-14 mx-auto mb-5 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center">
              <Weight className="w-7 h-7 text-surface-950" />
            </div>
            <h3 className="text-lg font-bold mb-2">Weight Limit</h3>
            <p className="text-3xl font-extrabold gradient-text mb-1">~1.5 Tonnes</p>
            <p className="text-sm text-gray-500">Maximum load weight</p>
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-7xl mx-auto" />

      {/* What Can Go In */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="reveal text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            What Can Go in a{' '}
            <span className="gradient-text">Builders Skip?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Builders skips accept most construction and renovation waste. Here are the most common
            materials our customers dispose of.
          </p>
        </div>
        <div className="stagger-children grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {acceptedWaste.map((item) => (
            <div
              key={item}
              className="glass rounded-2xl px-5 py-4 flex items-center space-x-3 hover-lift"
            >
              <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
        <div className="reveal mt-8 text-center">
          <p className="text-sm text-gray-500">
            Hazardous waste, asbestos, tyres, fridges, and paint are not accepted. Please{' '}
            <a href="tel:01159999999" className="text-brand-400 hover:underline">
              call us
            </a>{' '}
            if you are unsure about any materials.
          </p>
        </div>
      </section>

      <div className="hr-gradient max-w-7xl mx-auto" />

      {/* Who Uses Builders Skips */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="reveal text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Who Uses{' '}
            <span className="gradient-text">Builders Skips?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The 8 yard skip is popular across a wide range of trades and project types.
          </p>
        </div>
        <div className="stagger-children grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: HardHat,
              title: 'Builders',
              desc: 'For new builds, extensions, and general construction waste disposal.',
            },
            {
              icon: Hammer,
              title: 'Renovation Contractors',
              desc: 'Kitchen and bathroom refits, loft conversions, and structural alterations.',
            },
            {
              icon: Users,
              title: 'DIY Renovators',
              desc: 'Homeowners tackling larger projects like full room renovations or garage clearouts.',
            },
            {
              icon: Building2,
              title: 'Commercial Refits',
              desc: 'Office and retail refurbishments generating mixed construction waste.',
            },
          ].map((item) => (
            <div key={item.title} className="glass rounded-3xl p-7 text-center hover-lift">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center">
                <item.icon className="w-6 h-6 text-surface-950" />
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="hr-gradient max-w-7xl mx-auto" />

      {/* Builders Skip vs Other Sizes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="reveal text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Builders Skip vs{' '}
            <span className="gradient-text">Other Sizes</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Not sure whether the 8 yard is right for your project? Here is how it compares to other
            popular skip sizes.
          </p>
        </div>
        <div className="stagger-children grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="glass rounded-3xl p-8 hover-lift">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
              Smaller Option
            </p>
            <h3 className="text-xl font-bold mb-2">6 Yard Midi Skip</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Best for medium projects like single-room renovations, kitchen refits, or moderate
              garden clearances. Holds around 50-60 bin bags.
            </p>
            <p className="text-lg font-bold gradient-text">From £200</p>
          </div>
          <div className="glass rounded-3xl p-8 hover-lift border border-brand-500/30">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-400 mb-3">
              Most Popular for Builders
            </p>
            <h3 className="text-xl font-bold mb-2">8 Yard Builders Skip</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              The industry standard for construction and renovation projects. Handles 70-80 bin bags
              of mixed building waste comfortably.
            </p>
            <p className="text-lg font-bold gradient-text">From £250</p>
          </div>
          <div className="glass rounded-3xl p-8 hover-lift">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
              Larger Option
            </p>
            <h3 className="text-xl font-bold mb-2">12 Yard Maxi Skip</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              For major construction jobs, commercial clearances, and projects generating very high
              volumes of waste. Holds 100-120 bin bags.
            </p>
            <p className="text-lg font-bold gradient-text">From £350</p>
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-7xl mx-auto" />

      {/* Heavy Waste & Weight Limits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="reveal max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">
            Heavy Waste &{' '}
            <span className="gradient-text">Weight Limits</span>
          </h2>
          <div className="glass rounded-3xl p-8 md:p-10">
            <p className="text-gray-400 leading-relaxed mb-6">
              While an 8 yard skip has a generous volume, heavy materials such as rubble, concrete,
              and soil will reach the weight limit before the skip is visually full. The typical
              weight limit for a builders skip is approximately{' '}
              <span className="text-white font-semibold">1.5 tonnes</span>.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-400 mt-0.5 shrink-0" />
                <p className="text-sm text-gray-400">
                  <span className="text-white font-medium">Mixed light waste</span> — fill to the
                  top line. Timber, plasterboard, and plastic are unlikely to exceed the weight
                  limit.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-400 mt-0.5 shrink-0" />
                <p className="text-sm text-gray-400">
                  <span className="text-white font-medium">Heavy waste (rubble, concrete, soil)</span>{' '}
                  — fill to approximately half or two-thirds capacity. Mixing heavy and light waste
                  helps maximise the space.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-400 mt-0.5 shrink-0" />
                <p className="text-sm text-gray-400">
                  <span className="text-white font-medium">Pure soil or concrete</span> — may only
                  fill one-third of the skip before reaching the weight limit. Consider a smaller
                  skip if disposing of soil only.
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              If you are unsure how much heavy waste you have, give us a call and we will help you
              choose the right skip size.
            </p>
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-7xl mx-auto" />

      {/* Trade Accounts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="reveal max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 mx-auto mb-6 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center">
            <Repeat className="w-7 h-7 text-surface-950" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Trade Accounts &{' '}
            <span className="gradient-text">Regular Hire</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            If you are a builder or contractor who needs skips on a regular basis, we offer trade
            accounts with preferential rates, priority scheduling, and flexible invoicing. Whether
            you need a skip every week or on an ad-hoc basis, we can tailor a plan to suit your
            business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:01159999999"
              className="btn-gradient shimmer px-8 py-3.5 rounded-xl font-bold text-surface-950 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Set Up a Trade Account</span>
            </a>
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-7xl mx-auto" />

      {/* FAQs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="reveal text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Common questions about 8 yard builders skip hire in Long Eaton.
          </p>
        </div>
        <div className="stagger-children max-w-3xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      <div className="hr-gradient max-w-7xl mx-auto" />

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="reveal glass rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Book Your{' '}
            <span className="gradient-text">Builders Skip?</span>
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Call us today for a free, no-obligation quote. Same day delivery available across Long
            Eaton and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="tel:01159999999"
              className="btn-gradient shimmer px-8 py-3.5 rounded-xl font-bold text-surface-950 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>0115 999 9999</span>
            </a>
            <Link
              to="/#skip-sizes"
              className="glass px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors flex items-center space-x-2"
            >
              <span>Compare Skip Sizes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <Link to="/mini-skip-hire" className="text-brand-400 hover:underline text-sm font-medium">Mini Skip Hire</Link>
            <span className="text-gray-600">·</span>
            <Link to="/same-day-skip-hire" className="text-brand-400 hover:underline text-sm font-medium">Same Day Delivery</Link>
            <span className="text-gray-600">·</span>
            <Link to="/blog/what-can-you-put-in-a-skip" className="text-brand-400 hover:underline text-sm font-medium">Skip Waste Guide</Link>
            <span className="text-gray-600">·</span>
            <Link to="/blog/skip-sizes-guide" className="text-brand-400 hover:underline text-sm font-medium">Skip Sizes Guide</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
