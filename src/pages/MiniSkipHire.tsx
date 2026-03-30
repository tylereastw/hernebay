import { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle2, Truck, Phone, ArrowRight, Ruler, Package, Home, TreePine, Bath, Hammer, Info, Scale } from 'lucide-react';
import FaqItem from '../components/FaqItem';

const faqs = [
  {
    question: 'How much does a mini skip cost UK?',
    answer: 'In Long Eaton, a 2 yard mini skip starts from £120 and a 4 yard mini skip from £150. Both include a full 14-day hire period, delivery and collection. Prices can vary depending on your location and waste type, but our rates are competitive for the East Midlands.',
  },
  {
    question: 'What is the smallest size skip you can hire?',
    answer: 'The smallest skip we offer is a 2 yard mini skip. It holds around 15 to 20 bin bags and is ideal for small clearouts, single room tidy-ups, or minor garden waste. It fits easily on most driveways without needing a permit.',
  },
  {
    question: 'What can I fit in a 4 yard skip?',
    answer: 'A 4 yard mini skip holds approximately 30 to 40 bin bags. That is enough for a full bathroom refit, a small garden clearance, a single room renovation, or a decent-sized household clearout. It comfortably fits items like a bathtub, old cabinets, rubble and general household waste.',
  },
  {
    question: 'Is a 2 yard skip big enough?',
    answer: 'A 2 yard skip is a good choice for a single room clearout, a small garden tidy, or getting rid of a few pieces of old furniture. If your project is bigger than one room or involves heavier materials like soil or rubble, stepping up to a 4 yard skip is usually more cost-effective.',
  },
  {
    question: 'Is a 4 yard skip big enough?',
    answer: 'Yes, a 4 yard skip is big enough for most small to medium domestic projects. It handles bathroom refits, kitchen strip-outs, garden clearances, and general household decluttering with ease. For larger renovations or building work, consider an 8 yard builders skip instead.',
  },
  {
    question: 'Will a bath fit in a 4 yard skip?',
    answer: 'Yes, a standard bathtub will fit in a 4 yard skip with room to spare. Most customers doing a bathroom refit find a 4 yard skip is the perfect size for the bath, toilet, basin, tiles, and general waste from the project.',
  },
  {
    question: 'Is a 4 yard skip the same as a midi skip?',
    answer: 'No, a 4 yard skip is classed as a mini skip. A midi skip is typically 6 yards and holds around 50 to 60 bin bags. The 4 yard sits between the small 2 yard and the mid-range 6 yard midi skip in our range.',
  },
  {
    question: 'What is the cost of hiring a small skip?',
    answer: 'In Long Eaton, small skip hire starts from £120 for a 2 yard mini skip and £150 for a 4 yard mini skip. These prices include delivery, collection, and responsible waste disposal. Call us on 0115 999 9999 for an exact quote.',
  },
];

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
      name: 'Mini Skip Hire',
      item: 'https://longeatonskips.co.uk/mini-skip-hire/',
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mini Skip Hire Long Eaton',
  description:
    'Mini skip hire in Long Eaton from £150. 2 yard and 4 yard skips perfect for garden clearances, bathroom refits and small clearouts. Same day delivery available.',
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
  serviceType: 'Mini Skip Hire',
  offers: [
    {
      '@type': 'Offer',
      name: '2 Yard Mini Skip',
      price: '120',
      priceCurrency: 'GBP',
    },
    {
      '@type': 'Offer',
      name: '4 Yard Mini Skip',
      price: '150',
      priceCurrency: 'GBP',
    },
  ],
};

export default function MiniSkipHire() {
  const mainRef = useScrollReveal();

  return (
    <div ref={mainRef}>
      <Helmet>
        <title>Mini Skip Hire Long Eaton | 2 &amp; 4 Yard Skips | From £150</title>
        <meta
          name="description"
          content="Mini skip hire in Long Eaton from £150. 2 yard and 4 yard skips perfect for garden clearances, bathroom refits and small clearouts. Same day delivery."
        />
        <link rel="canonical" href="https://longeatonskips.co.uk/mini-skip-hire/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* Hero / Intro */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Mini Skip Hire in Long Eaton — <span className="gradient-text">2 &amp; 4 Yard Skips</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            A mini skip is the smallest skip you can hire — perfect for small household clearouts, garden tidies,
            bathroom refits, and single room renovations. Whether you need a compact 2 yard skip for a quick tidy
            or a 4 yard skip for a bigger clearout, we deliver across Long Eaton and surrounding areas.
            Prices start from just <span className="text-brand-400 font-semibold">£150</span> with same day
            delivery available.
          </p>
        </div>
      </section>

      <div className="hr-gradient max-w-4xl mx-auto" />

      {/* Mini Skip Sizes */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mini Skip <span className="gradient-text">Sizes</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer two mini skip sizes to suit different project needs. Here is a side-by-side comparison
              to help you choose the right one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 stagger-children">
            {/* 2 Yard Skip */}
            <div className="glass rounded-3xl p-8 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/20 flex items-center justify-center">
                  <Package className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">2 Yard Mini Skip</h3>
                  <p className="text-brand-400 text-sm font-medium">Compact &amp; convenient</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <Ruler className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Approx. 1.2m x 0.9m x 0.6m</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <Package className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Holds 15–20 bin bags</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <Home className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Fits on any driveway</span>
                </li>
              </ul>
              <div className="border-t border-white/10 pt-6">
                <p className="text-3xl font-bold">
                  From <span className="gradient-text">£120</span>
                </p>
                <p className="text-gray-500 text-sm mt-1">Inc. delivery, collection &amp; disposal</p>
              </div>
            </div>

            {/* 4 Yard Skip */}
            <div className="glass rounded-3xl p-8 hover-lift relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="btn-gradient text-xs font-bold px-3 py-1 rounded-full text-surface-950">
                  Most Popular
                </span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/20 flex items-center justify-center">
                  <Package className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">4 Yard Mini Skip</h3>
                  <p className="text-brand-400 text-sm font-medium">Our best-selling mini</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <Ruler className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Approx. 1.8m x 1.2m x 0.9m</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <Package className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Holds 30–40 bin bags</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <Home className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Fits on most driveways</span>
                </li>
              </ul>
              <div className="border-t border-white/10 pt-6">
                <p className="text-3xl font-bold">
                  From <span className="gradient-text">£150</span>
                </p>
                <p className="text-gray-500 text-sm mt-1">Inc. delivery, collection &amp; disposal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-4xl mx-auto" />

      {/* What Can You Fit */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Can You Fit in a <span className="gradient-text">Mini Skip?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Mini skips are surprisingly spacious. Here are some real-world examples of what our customers
              regularly fit in their 2 and 4 yard skips.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 stagger-children">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-lg font-bold mb-4 text-brand-400">2 Yard Skip</h3>
              <ul className="space-y-3">
                {[
                  'Single room clearout',
                  'Small garden tidy-up',
                  'A few bags of rubble',
                  'Old shelving and flat-pack furniture',
                  'Bathroom tiles and fittings',
                  'General household junk',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-lg font-bold mb-4 text-brand-400">4 Yard Skip</h3>
              <ul className="space-y-3">
                {[
                  'Full bathroom refit waste',
                  'Small kitchen strip-out',
                  'Garden clearance with shrubs and soil',
                  'Several pieces of old furniture',
                  'Shed clearout and old decking',
                  'Small loft or garage clearance',
                  'Bathtub, toilet and basin',
                  'Mixed household and garden waste',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-4xl mx-auto" />

      {/* When to Choose a Mini Skip */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              When to Choose a <span className="gradient-text">Mini Skip</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A mini skip is the right choice when you have too much waste for the bin but not enough
              to justify a larger skip. Here are the most common use cases.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {[
              {
                icon: Bath,
                title: 'Bathroom Refits',
                description: 'Ripping out an old bathroom? A 4 yard skip handles the bath, toilet, tiles, and all the rubble with room to spare.',
              },
              {
                icon: TreePine,
                title: 'Garden Clearances',
                description: 'Clearing overgrown shrubs, old turf, or general garden waste. A 2 yard handles a small tidy; a 4 yard suits a full clearance.',
              },
              {
                icon: Home,
                title: 'House Clearouts',
                description: 'Decluttering a spare room, clearing out a garage, or sorting through a loft. Mini skips are ideal for domestic junk.',
              },
              {
                icon: Hammer,
                title: 'Small Renovations',
                description: 'Replacing flooring, knocking out a built-in wardrobe, or stripping wallpaper. A mini skip keeps your project tidy.',
              },
              {
                icon: Package,
                title: 'Moving House',
                description: 'Getting rid of unwanted items before a move. A mini skip lets you clear out without multiple trips to the tip.',
              },
              {
                icon: Truck,
                title: 'Driveway Projects',
                description: 'Lifting old paving slabs or clearing gravel. A 4 yard skip handles a surprising amount of heavy material.',
              },
            ].map((card) => (
              <div key={card.title} className="glass rounded-3xl p-6 hover-lift">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center mb-4">
                  <card.icon className="w-5 h-5 text-brand-400" />
                </div>
                <h3 className="font-bold mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-4xl mx-auto" />

      {/* Mini Skip vs Skip Bag */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mini Skip vs <span className="gradient-text">Skip Bag</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Skip bags (also called hippo bags) are an alternative to mini skips. Here is an honest
              comparison to help you decide which is right for your project.
            </p>
          </div>

          <div className="glass rounded-3xl overflow-hidden reveal">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-gray-400 font-medium">Feature</th>
                    <th className="px-6 py-4 text-brand-400 font-semibold">Mini Skip</th>
                    <th className="px-6 py-4 text-gray-400 font-medium">Skip Bag</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="px-6 py-4 text-gray-300">Capacity</td>
                    <td className="px-6 py-4 text-white font-medium">15–40 bin bags</td>
                    <td className="px-6 py-4 text-gray-400">Up to 20 bin bags</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300">Heavy waste</td>
                    <td className="px-6 py-4 text-white font-medium">Yes — rubble, soil, bricks</td>
                    <td className="px-6 py-4 text-gray-400">Limited — weight restrictions apply</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300">Price</td>
                    <td className="px-6 py-4 text-white font-medium">From £120</td>
                    <td className="px-6 py-4 text-gray-400">£80–£150 + collection fee</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300">Delivery speed</td>
                    <td className="px-6 py-4 text-white font-medium">Same day available</td>
                    <td className="px-6 py-4 text-gray-400">Next day at best</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300">Collection</td>
                    <td className="px-6 py-4 text-white font-medium">Included in price</td>
                    <td className="px-6 py-4 text-gray-400">Separate booking required</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300">Durability</td>
                    <td className="px-6 py-4 text-white font-medium">Steel — very strong</td>
                    <td className="px-6 py-4 text-gray-400">Woven bag — can tear</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300">Best for</td>
                    <td className="px-6 py-4 text-white font-medium">Most domestic projects</td>
                    <td className="px-6 py-4 text-gray-400">Very small, light clearouts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 glass rounded-2xl p-5 reveal">
            <Info className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
            <p className="text-gray-400 text-sm leading-relaxed">
              <span className="text-white font-medium">Our recommendation:</span> For anything heavier than
              light household waste, a mini skip is almost always better value. Skip bags are fine for a small
              amount of light rubbish, but the weight limits and separate collection fees can make them more
              expensive overall.
            </p>
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-4xl mx-auto" />

      {/* Delivery & Placement */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Delivery &amp; <span className="gradient-text">Placement</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Mini skips are the easiest skips to place. Their compact size means they fit on almost
              any driveway without blocking access.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            <div className="glass rounded-3xl p-6 hover-lift">
              <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center mb-4">
                <Home className="w-5 h-5 text-brand-400" />
              </div>
              <h3 className="font-bold mb-2">Driveway Placement</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A 2 yard skip is about the size of a washing machine. A 4 yard is roughly the size of a
                small car boot. Both fit easily on standard driveways without needing a permit.
              </p>
            </div>

            <div className="glass rounded-3xl p-6 hover-lift">
              <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center mb-4">
                <Scale className="w-5 h-5 text-brand-400" />
              </div>
              <h3 className="font-bold mb-2">Road Permits</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                If you do not have a driveway, we can place the skip on the road. This requires a council
                permit which we arrange for you. Just let us know when you book and we will handle the rest.
              </p>
            </div>

            <div className="glass rounded-3xl p-6 hover-lift">
              <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center mb-4">
                <Truck className="w-5 h-5 text-brand-400" />
              </div>
              <h3 className="font-bold mb-2">Access Requirements</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our delivery vehicles need a minimum of 3 metres width to drop off the skip. If you have
                narrow access or low branches, give us a call and we will work out the best solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-4xl mx-auto" />

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Got a question about mini skip hire? Here are the answers to the questions we get asked most often.
            </p>
          </div>

          <div className="space-y-3 stagger-children">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-4xl mx-auto" />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your <span className="gradient-text">Mini Skip?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            From £120 for a 2 yard to £150 for a 4 yard. 14-day hire included, same day
            delivery available. One call is all it takes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="tel:01159999999"
              className="btn-gradient shimmer text-surface-950 font-bold px-8 py-4 rounded-2xl flex items-center gap-2 text-lg"
            >
              <Phone className="w-5 h-5" />
              0115 999 9999
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/builders-skip-hire"
              className="glass px-6 py-3 rounded-2xl text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2 hover-lift"
            >
              Builders Skip Hire
              <ArrowRight className="w-4 h-4 text-brand-400" />
            </Link>
            <Link
              to="/"
              className="glass px-6 py-3 rounded-2xl text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2 hover-lift"
            >
              All Skip Sizes
              <ArrowRight className="w-4 h-4 text-brand-400" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
