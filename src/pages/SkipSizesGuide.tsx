import { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Ruler, PhoneCall, ArrowRight, Lightbulb, TrendingUp, Weight, Users, Truck, Calendar } from 'lucide-react';
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
    if (el) el.querySelectorAll('.reveal, .stagger-children').forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const faqs = [
  {
    question: 'What is the best size skip to hire?',
    answer:
      'The 6 yard midi skip is the most popular size, ideal for most household projects. For small clearouts choose a 4 yard mini, for renovations an 8 yard builders skip, and for large projects a 12 yard or bigger.',
  },
  {
    question: 'What size skip do I need for house clearance?',
    answer:
      'For a full house clearance, an 8 yard builders skip or 12 yard large skip is recommended. A single room clearout typically needs a 4 yard mini skip.',
  },
  {
    question: 'What size skip do I need for garden waste?',
    answer:
      'A 4 yard mini skip handles most garden clearances. For larger gardens or landscaping projects, a 6 yard midi skip gives extra capacity.',
  },
  {
    question: 'What size skip do I need for a garage clearance?',
    answer:
      'A 4 yard mini skip is usually sufficient for a single garage clearance. If you have bulky items or a double garage, consider a 6 yard midi.',
  },
  {
    question: 'What size skip for driveway?',
    answer:
      'Most driveways can accommodate up to an 8 yard builders skip. A 4 yard mini skip is the smallest and fits on virtually any driveway.',
  },
  {
    question: 'What size skip for king size mattress?',
    answer:
      'A king size mattress will fit in a 4 yard mini skip, though it will take up most of the space. If you have other waste too, opt for a 6 yard midi.',
  },
  {
    question: 'Is a 4 yard skip big enough?',
    answer:
      'A 4 yard skip holds 30-40 bin bags and is ideal for small projects like bathroom refits, garden tidies, and single room clearouts.',
  },
  {
    question: 'Is a 6 yard skip big enough?',
    answer:
      'A 6 yard skip holds 50-60 bin bags and suits most household projects including kitchen renovations, medium garden clearances, and small house clearouts.',
  },
  {
    question: 'How much can you fit in a midi skip?',
    answer:
      'A midi skip (6 yard) holds approximately 50-60 bin bags or 6 cubic yards of waste. It is equivalent to roughly 2-3 transit van loads.',
  },
  {
    question: 'What does a 4 yard skip look like?',
    answer:
      'A 4 yard skip measures approximately 1.8m long x 1.2m wide x 0.9m high. It is the most common small skip and fits easily on a standard driveway.',
  },
];

const skipSizes = [
  {
    size: '2 Yard',
    name: 'Mini',
    dimensions: '1.2m \u00d7 0.9m \u00d7 0.6m',
    binBags: '15-20',
    weight: '0.25t',
    idealFor: 'Small garden tidy',
    price: '\u00a3120',
    slug: '/mini-skip-hire',
    useCases: [
      'Small garden tidy or hedge trimming',
      'Minor bathroom updates with limited waste',
      'A few bags of household rubbish',
    ],
  },
  {
    size: '4 Yard',
    name: 'Mini',
    dimensions: '1.8m \u00d7 1.2m \u00d7 0.9m',
    binBags: '30-40',
    weight: '0.5t',
    idealFor: 'Bathroom refit, garden clearance',
    price: '\u00a3150',
    slug: '/mini-skip-hire',
    useCases: [
      'Complete bathroom refit or small kitchen update',
      'Garden clearance and landscaping waste',
      'Single room clearout or declutter',
    ],
  },
  {
    size: '6 Yard',
    name: 'Midi',
    dimensions: '2.4m \u00d7 1.5m \u00d7 1.1m',
    binBags: '50-60',
    weight: '0.75t',
    idealFor: 'Kitchen renovation, medium garden',
    price: '\u00a3200',
    slug: '/#skip-sizes',
    useCases: [
      'Kitchen renovation including old units and flooring',
      'Medium garden project or patio clearance',
      'Small house clearout of 2-3 rooms',
    ],
  },
  {
    size: '8 Yard',
    name: 'Builders',
    dimensions: '3.7m \u00d7 1.7m \u00d7 1.2m',
    binBags: '70-80',
    weight: '1.5t',
    idealFor: 'House renovation, construction',
    price: '\u00a3250',
    slug: '/builders-skip-hire',
    popular: true,
    useCases: [
      'Full house renovation with mixed waste',
      'Construction and building projects',
      'Large garden landscaping with soil and rubble',
    ],
  },
  {
    size: '12 Yard',
    name: 'Large',
    dimensions: '3.7m \u00d7 1.7m \u00d7 1.7m',
    binBags: '100-120',
    weight: '2t',
    idealFor: 'House clearance, large renovation',
    price: '\u00a3350',
    slug: '/#skip-sizes',
    useCases: [
      'Complete house clearance including furniture',
      'Large renovation generating significant waste',
      'Commercial refurbishment projects',
    ],
  },
  {
    size: '16 Yard',
    name: 'Maxi',
    dimensions: '4.6m \u00d7 1.7m \u00d7 1.7m',
    binBags: '140-160',
    weight: '2.5t',
    idealFor: 'Commercial, major construction',
    price: '\u00a3450',
    slug: '/#skip-sizes',
    useCases: [
      'Major construction or commercial refit',
      'Large-scale property clearance',
      'Industrial clean-up projects',
    ],
  },
  {
    size: '20 Yard',
    name: 'RORO',
    dimensions: '6.1m \u00d7 2.4m \u00d7 1.5m',
    binBags: '180-200',
    weight: '3t',
    idealFor: 'Industrial, large commercial',
    price: 'POA',
    slug: '/#skip-sizes',
    useCases: [
      'Industrial waste removal',
      'Large commercial clearances',
      'Major construction site waste management',
    ],
  },
  {
    size: '40 Yard',
    name: 'RORO',
    dimensions: '6.1m \u00d7 2.4m \u00d7 2.6m',
    binBags: '400+',
    weight: '5t',
    idealFor: 'Demolition, major projects',
    price: 'POA',
    slug: '/#skip-sizes',
    useCases: [
      'Full demolition projects',
      'Large-scale industrial clearances',
      'Major civil engineering waste',
    ],
  },
];

const projectMappings = [
  { project: 'Garden tidy / Small clearout', size: '2-4 Yard Mini' },
  { project: 'Bathroom refit', size: '4 Yard Mini' },
  { project: 'Single room clearout', size: '4 Yard Mini' },
  { project: 'Kitchen renovation', size: '6-8 Yard' },
  { project: 'Garage clearance', size: '4-6 Yard' },
  { project: 'Medium garden project', size: '6 Yard Midi' },
  { project: 'Full house clearance', size: '8-12 Yard' },
  { project: 'Loft conversion', size: '8 Yard Builders' },
  { project: 'Extension / major renovation', size: '12-16 Yard' },
  { project: 'Commercial refit', size: '16-20 Yard' },
  { project: 'Demolition', size: '20-40 Yard RORO' },
];

const tips = [
  {
    icon: Ruler,
    title: 'Estimate Volume Using Bin Bags',
    description:
      'Count how many standard bin bags your waste would fill. A 4 yard skip holds about 30-40 bags, a 6 yard holds 50-60, and an 8 yard holds 70-80. This is the quickest way to gauge what you need.',
  },
  {
    icon: TrendingUp,
    title: 'When in Doubt, Size Up',
    description:
      'It is always more cost-effective to hire one larger skip than two smaller ones. If you are between sizes, go for the bigger option to avoid overflow and additional hire charges.',
  },
  {
    icon: Weight,
    title: 'Separate Heavy Waste',
    description:
      'Soil, rubble, and concrete are extremely heavy. Mixing them with general waste can push you over weight limits, resulting in surcharges. Consider a dedicated heavy waste skip for these materials.',
  },
  {
    icon: Users,
    title: 'Share with a Neighbour',
    description:
      'If your project does not fill a whole skip, ask a neighbour if they want to share the cost. A 6 yard midi can easily serve two small projects, saving you both money.',
  },
  {
    icon: Truck,
    title: 'Consider Access Width',
    description:
      'Measure your driveway or access point before booking. A 4 yard mini skip needs about 2m of width, while an 8 yard builders skip requires at least 3m. RORO skips need even more space.',
  },
  {
    icon: Calendar,
    title: 'Book Ahead for Best Price',
    description:
      'Skip availability fluctuates with demand, especially during spring and summer. Booking a few days in advance gives you the best selection of sizes and the most competitive pricing.',
  },
];

export default function SkipSizesGuide() {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="min-h-screen">
      <Helmet>
        <title>Skip Sizes Guide 2026 | What Size Skip Do I Need? | Long Eaton Skips</title>
        <meta
          name="description"
          content="Not sure what size skip to hire? Our visual guide compares every skip from 2 yard mini to 40 yard RORO. See bin bag equivalents, dimensions & ideal projects."
        />
        <link rel="canonical" href="https://longeatonskips.co.uk/blog/skip-sizes-guide/" />
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
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
                name: 'Blog',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Skip Sizes Guide',
              },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Skip Sizes Guide: What Size Skip Do I Need?',
            datePublished: '2026-01-20',
            dateModified: '2026-03-30',
            author: {
              '@type': 'Organization',
              name: 'Long Eaton Skips',
            },
          })}
        </script>
      </Helmet>

      {/* Hero / Intro */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <p className="text-brand-400 font-medium text-sm tracking-wide uppercase mb-4">
              Updated March 2026 &middot; 10 min read
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Skip Sizes Guide:{' '}
              <span className="gradient-text">What Size Skip Do I Need?</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
              Choosing the right skip size saves you money and hassle. Too small and you will need a
              second hire; too large and you are paying for space you do not use. This guide covers
              every skip size from 2 yard mini skips right up to 40 yard roll-on-roll-off containers,
              with dimensions, bin bag equivalents, weight limits, and pricing to help you pick the
              perfect skip for your project.
            </p>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Skip Size Comparison Chart */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Skip Size <span className="gradient-text">Comparison Chart</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-3xl">
              Use the table below to quickly compare all skip sizes side by side. Prices are
              starting from and may vary depending on location, waste type, and permit requirements.
            </p>
          </div>

          <div className="reveal overflow-x-auto">
            <table className="w-full glass rounded-3xl overflow-hidden text-left text-sm md:text-base">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-4 font-semibold text-white">Size</th>
                  <th className="px-4 py-4 font-semibold text-white">Name</th>
                  <th className="px-4 py-4 font-semibold text-white">Dimensions (L&times;W&times;H)</th>
                  <th className="px-4 py-4 font-semibold text-white">Bin Bags</th>
                  <th className="px-4 py-4 font-semibold text-white">Weight Limit</th>
                  <th className="px-4 py-4 font-semibold text-white">Ideal For</th>
                  <th className="px-4 py-4 font-semibold text-white">Price From</th>
                </tr>
              </thead>
              <tbody>
                {skipSizes.map((skip) => (
                  <tr
                    key={skip.size}
                    className={`border-b border-white/10 transition-colors hover:bg-white/5 ${
                      skip.popular ? 'ring-1 ring-brand-400 bg-brand-400/5' : ''
                    }`}
                  >
                    <td className="px-4 py-4 text-white font-semibold whitespace-nowrap">
                      {skip.size}
                      {skip.popular && (
                        <span className="ml-2 text-xs bg-brand-500 text-surface-950 px-2 py-0.5 rounded-full font-bold">
                          Most Popular
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-gray-300">{skip.name}</td>
                    <td className="px-4 py-4 text-gray-300 whitespace-nowrap">{skip.dimensions}</td>
                    <td className="px-4 py-4 text-gray-300">{skip.binBags}</td>
                    <td className="px-4 py-4 text-gray-300">{skip.weight}</td>
                    <td className="px-4 py-4 text-gray-300">{skip.idealFor}</td>
                    <td className="px-4 py-4 font-bold gradient-text whitespace-nowrap">{skip.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* All Skip Sizes Explained */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              All Skip Sizes <span className="gradient-text">Explained</span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-3xl">
              Below is a detailed breakdown of every skip size we offer. Each section covers
              dimensions, capacity, weight limits, ideal use cases, and pricing so you can make an
              informed decision.
            </p>
          </div>

          <div className="stagger-children grid gap-8">
            {skipSizes.map((skip) => (
              <div
                key={skip.size}
                className={`glass rounded-3xl p-6 md:p-8 ${
                  skip.popular ? 'ring-1 ring-brand-400' : ''
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {skip.size} {skip.name} Skip
                      {skip.popular && (
                        <span className="ml-3 text-xs bg-brand-500 text-surface-950 px-2 py-1 rounded-full font-bold align-middle">
                          Most Popular
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-400 mt-1">{skip.dimensions}</p>
                  </div>
                  <p className="text-2xl font-bold gradient-text shrink-0">{skip.price}</p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/5 rounded-2xl p-4 text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Bin Bags</p>
                    <p className="text-xl font-bold text-white">{skip.binBags}</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4 text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Weight Limit</p>
                    <p className="text-xl font-bold text-white">{skip.weight}</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4 text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Dimensions</p>
                    <p className="text-lg font-bold text-white">{skip.dimensions}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-white mb-3">Ideal Use Cases:</p>
                  <ul className="space-y-2">
                    {skip.useCases.map((useCase, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <ArrowRight className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={skip.slug}
                  className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-500 font-medium text-sm transition-colors"
                >
                  View {skip.name} skip hire details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Which Skip Size for Your Project */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Which Skip Size for <span className="gradient-text">Your Project?</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Not sure where to start? Find your project type below and see the recommended skip
              size at a glance.
            </p>
          </div>

          <div className="reveal overflow-x-auto">
            <table className="w-full glass rounded-3xl overflow-hidden text-left text-sm md:text-base">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 font-semibold text-white">Project</th>
                  <th className="px-6 py-4 font-semibold text-white">Recommended Skip Size</th>
                </tr>
              </thead>
              <tbody>
                {projectMappings.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-4 text-gray-300">{row.project}</td>
                    <td className="px-6 py-4 text-white font-semibold">{row.size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Tips for Choosing the Right Size */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tips for Choosing the <span className="gradient-text">Right Size</span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-3xl">
              Follow these practical tips to get the best value from your skip hire and avoid common
              pitfalls.
            </p>
          </div>

          <div className="stagger-children grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip) => (
              <div key={tip.title} className="glass rounded-3xl p-6 hover-lift">
                <tip.icon className="w-8 h-8 text-brand-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{tip.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* FAQs */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <div className="stagger-children space-y-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* Internal Links */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Related <span className="gradient-text">Guides &amp; Services</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                to="/mini-skip-hire"
                className="glass rounded-3xl p-6 hover-lift group flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-white group-hover:text-brand-400 transition-colors">
                    Mini Skip Hire
                  </p>
                  <p className="text-gray-500 text-sm mt-1">2 &amp; 4 yard skips for smaller projects</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-brand-400 transition-colors" />
              </Link>
              <Link
                to="/builders-skip-hire"
                className="glass rounded-3xl p-6 hover-lift group flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-white group-hover:text-brand-400 transition-colors">
                    Builders Skip Hire
                  </p>
                  <p className="text-gray-500 text-sm mt-1">8 yard skips for construction &amp; renovation</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-brand-400 transition-colors" />
              </Link>
              <Link
                to="/#skip-sizes"
                className="glass rounded-3xl p-6 hover-lift group flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-white group-hover:text-brand-400 transition-colors">
                    All Skip Sizes &amp; Prices
                  </p>
                  <p className="text-gray-500 text-sm mt-1">View our full range and book online</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-brand-400 transition-colors" />
              </Link>
              <Link
                to="/blog/what-can-you-put-in-a-skip"
                className="glass rounded-3xl p-6 hover-lift group flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-white group-hover:text-brand-400 transition-colors">
                    What Can You Put in a Skip?
                  </p>
                  <p className="text-gray-500 text-sm mt-1">Accepted &amp; prohibited items explained</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-brand-400 transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr-gradient" />

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center reveal">
          <PhoneCall className="w-12 h-12 text-brand-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Sure? <span className="gradient-text">Call Us</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Our team has helped thousands of customers choose the right skip size. Tell us about
            your project and we will recommend the perfect option, with no obligation.
          </p>
          <a
            href="tel:01159999999"
            className="btn-gradient shimmer inline-flex items-center gap-3 px-8 py-4 rounded-full text-surface-950 font-bold text-lg"
          >
            <PhoneCall className="w-5 h-5" />
            0115 999 9999
          </a>
        </div>
      </section>
    </div>
  );
}
