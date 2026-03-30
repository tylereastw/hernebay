import { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, AlertTriangle, PhoneCall, ArrowRight } from 'lucide-react';
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
    question: 'Can I put a mattress in a skip in the UK?',
    answer:
      'Yes, mattresses can go in a skip. However, they take up a lot of space. Consider folding or cutting them to save room, or ask your local council about mattress recycling.',
  },
  {
    question: 'Can you put a sofa in a skip?',
    answer:
      'Yes, sofas are accepted in skips. Break them down if possible to save space and get more value from your skip hire.',
  },
  {
    question: 'Can I put a fridge in a skip?',
    answer:
      'No. Fridges, freezers and other electrical appliances are classed as WEEE and must be disposed of separately through your local recycling centre or collection service.',
  },
  {
    question: 'Can you put pillows and duvets in a skip?',
    answer:
      'Yes, pillows and duvets can go in a skip. They are general household waste and are accepted.',
  },
  {
    question: 'Can you put paint in a skip?',
    answer:
      'Liquid paint is prohibited. However, empty or dried-out paint tins are accepted. Leave lids off tins to let residual paint dry before disposal.',
  },
  {
    question: 'Can you put bags of soil in a skip?',
    answer:
      'Yes, soil and earth can go in a skip. Be aware that soil is very heavy and will use up your weight allowance quickly. Consider a separate heavy waste skip for large amounts.',
  },
  {
    question: 'Can you put plasterboard in a skip?',
    answer:
      'Plasterboard must be separated from other waste due to environmental regulations. We can accept it but it cannot be mixed with general waste.',
  },
  {
    question: 'Can you put tyres in a skip?',
    answer:
      'No. Tyres are prohibited and must be disposed of at a licensed tyre facility. Most garages will accept old tyres for a small fee.',
  },
  {
    question: 'Can I put rubble in a skip?',
    answer:
      'Yes, bricks, concrete, and rubble are accepted. These are heavy materials so they will count towards your weight limit. A builders skip is ideal for rubble.',
  },
  {
    question: 'Can loft insulation go in a skip?',
    answer:
      'Modern mineral wool insulation is accepted. However, if the insulation dates from before 2000, it could contain asbestos and must be tested before disposal.',
  },
  {
    question: 'Can I put crockery in a skip?',
    answer: 'Yes, ceramics, crockery, and pottery are accepted in a skip.',
  },
  {
    question: 'Can you put domestic waste into a skip?',
    answer:
      'Yes, general household waste including furniture, clothes, toys, and non-hazardous items are all accepted.',
  },
  {
    question: 'Can you put garden waste in a skip bag?',
    answer:
      'Yes, garden waste including branches, soil, turf, leaves, and hedge cuttings can go in both skips and skip bags.',
  },
  {
    question: 'What are 5 things that cannot be recycled?',
    answer:
      'Asbestos, gas cylinders, clinical and medical waste, hazardous chemicals, and plasterboard mixed with other waste cannot go in a standard skip.',
  },
  {
    question: "Why can't you put carpet in a skip?",
    answer:
      'You CAN put carpet in a skip. This is a common misconception. Carpet is accepted as general waste.',
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
      name: 'Blog',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'What Can You Put in a Skip?',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "What Can & Can't You Put in a Skip? | Complete 2026 Guide",
  datePublished: '2026-01-15',
  dateModified: '2026-03-30',
  author: {
    '@type': 'Organization',
    name: 'Long Eaton Skips',
  },
};

const acceptedItems = [
  'General household waste',
  'Garden waste',
  'Wood & timber',
  'Bricks & rubble',
  'Metal',
  'Furniture',
  'Carpets',
  'Plastics',
  'Soil & earth',
  'Ceramics & crockery',
];

const prohibitedItems = [
  'Asbestos',
  'Batteries',
  'Gas cylinders',
  'Electrical items (WEEE)',
  'Tyres',
  'Paint & solvents',
  'Clinical waste',
  'Plasterboard (if mixed)',
];

type Verdict = 'ACCEPTED' | 'PROHIBITED' | 'CONDITIONAL';

interface BreakdownItem {
  name: string;
  verdict: Verdict;
  note: string;
}

const breakdownItems: BreakdownItem[] = [
  {
    name: 'Mattresses',
    verdict: 'CONDITIONAL',
    note: 'Accepted but take up a lot of space. Fold or cut to save room.',
  },
  {
    name: 'Sofas',
    verdict: 'ACCEPTED',
    note: 'Fully accepted. Break down if possible to maximise skip space.',
  },
  {
    name: 'Pillows & Duvets',
    verdict: 'ACCEPTED',
    note: 'Classed as general household waste. No restrictions.',
  },
  {
    name: 'Fridges & Freezers',
    verdict: 'PROHIBITED',
    note: 'WEEE regulations apply. Must go to a licensed recycling centre.',
  },
  {
    name: 'Paint',
    verdict: 'CONDITIONAL',
    note: 'Liquid paint is banned. Dried-out or empty tins are accepted.',
  },
  {
    name: 'Soil & Earth',
    verdict: 'ACCEPTED',
    note: 'Accepted but very heavy. Counts towards your weight allowance.',
  },
  {
    name: 'Plasterboard',
    verdict: 'CONDITIONAL',
    note: 'Must be separated from other waste. Cannot be mixed in a general skip.',
  },
  {
    name: 'Tyres',
    verdict: 'PROHIBITED',
    note: 'Must be disposed of at a licensed tyre facility or garage.',
  },
  {
    name: 'Carpets',
    verdict: 'ACCEPTED',
    note: 'Fully accepted as general waste despite common misconceptions.',
  },
  {
    name: 'Wood & Timber',
    verdict: 'ACCEPTED',
    note: 'All untreated and treated timber is accepted in skips.',
  },
  {
    name: 'Bricks & Rubble',
    verdict: 'ACCEPTED',
    note: 'Accepted but heavy. A builders skip is ideal for large amounts.',
  },
  {
    name: 'Loft Insulation',
    verdict: 'CONDITIONAL',
    note: 'Modern mineral wool is fine. Pre-2000 insulation may contain asbestos.',
  },
  {
    name: 'Crockery',
    verdict: 'ACCEPTED',
    note: 'Ceramics, pottery and crockery are all accepted without restriction.',
  },
  {
    name: 'Domestic Waste',
    verdict: 'ACCEPTED',
    note: 'Furniture, clothes, toys and general non-hazardous items are accepted.',
  },
];

function verdictBadge(verdict: Verdict) {
  if (verdict === 'ACCEPTED')
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-green-500/10 text-green-400">
        <CheckCircle2 className="w-3.5 h-3.5" /> Accepted
      </span>
    );
  if (verdict === 'PROHIBITED')
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-red-500/10 text-red-400">
        <XCircle className="w-3.5 h-3.5" /> Prohibited
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/10 text-amber-400">
      <AlertTriangle className="w-3.5 h-3.5" /> Conditional
    </span>
  );
}

export default function WhatCanYouPutInASkip() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef} className="min-h-screen bg-surface-950 text-white">
      <Helmet>
        <title>What Can &amp; Can't You Put in a Skip? | Complete 2026 Guide</title>
        <meta
          name="description"
          content="Full list of what you can and can't put in a skip in the UK. Covers mattresses, sofas, fridges, paint, soil, plasterboard, tyres & more. Updated 2026."
        />
        <link rel="canonical" href="https://longeatonskips.co.uk/blog/what-can-you-put-in-a-skip/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      {/* ───── Hero / Intro ───── */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <p className="text-gray-400 text-sm mb-4">Updated March 2026 &middot; 8 min read</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              What Can &amp; Can't You Put{' '}
              <span className="gradient-text">in a Skip?</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
              Knowing what can and can't go in a skip saves you time, money and potential fines.
              This guide covers every common item — from mattresses and sofas to paint, tyres and
              plasterboard — so you can fill your skip with confidence.
            </p>
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-4xl mx-auto" />

      {/* ───── Quick Reference ───── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Quick Reference</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 stagger-children">
            {/* Accepted column */}
            <div className="glass rounded-3xl p-6 hover-lift border border-green-500/20">
              <div className="flex items-center gap-3 mb-5">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-bold uppercase tracking-wider text-green-400">
                  Accepted
                </h3>
              </div>
              <ul className="space-y-3">
                {acceptedItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Prohibited column */}
            <div className="glass rounded-3xl p-6 hover-lift border border-red-500/20">
              <div className="flex items-center gap-3 mb-5">
                <XCircle className="w-6 h-6 text-red-400" />
                <h3 className="text-lg font-bold uppercase tracking-wider text-red-400">
                  Prohibited
                </h3>
              </div>
              <ul className="space-y-3">
                {prohibitedItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-4xl mx-auto" />

      {/* ───── What You CAN Put in a Skip ───── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              What You <span className="text-green-400">CAN</span> Put in a Skip
            </h2>
          </div>

          <div className="space-y-8 stagger-children">
            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">General Household Waste</h3>
              <p className="text-gray-300 leading-relaxed">
                Most everyday items from your home can go straight into a skip. This includes old
                furniture, clothing, toys, books, kitchenware and general clutter. If it is
                non-hazardous and not electrical, it is almost certainly accepted.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Garden Waste</h3>
              <p className="text-gray-300 leading-relaxed">
                Branches, hedge cuttings, leaves, turf, soil and grass clippings are all accepted
                in skips. Garden waste is one of the most common reasons people hire a mini skip,
                and it can also go in skip bags for smaller jobs.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Construction &amp; Building Waste</h3>
              <p className="text-gray-300 leading-relaxed">
                Bricks, concrete, rubble, tiles, timber and metal are all accepted. These materials
                are heavy, so they will count towards your skip's weight limit. For large amounts of
                heavy waste, a dedicated builders skip is the most cost-effective option.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Furniture &amp; Bulky Items</h3>
              <p className="text-gray-300 leading-relaxed">
                Sofas, beds, wardrobes, tables, chairs and desks can all go in a skip. Breaking
                bulky items down before loading them will help you fit more in and get better value
                from your hire.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Carpets &amp; Textiles</h3>
              <p className="text-gray-300 leading-relaxed">
                Despite a common myth that carpet is not allowed, it is fully accepted as general
                waste. Roll up carpets and underlay to maximise space. Curtains, rugs and other
                textiles are also fine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-4xl mx-auto" />

      {/* ───── What You CAN'T Put in a Skip ───── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              What You <span className="text-red-400">CAN'T</span> Put in a Skip
            </h2>
          </div>

          <div className="space-y-8 stagger-children">
            <div className="glass rounded-3xl p-6 border border-red-500/10">
              <h3 className="text-xl font-bold mb-3 text-red-400">Asbestos</h3>
              <p className="text-gray-300 leading-relaxed">
                Asbestos is a hazardous material that requires specialist disposal by a licensed
                contractor. It is illegal to put asbestos in a skip. If you suspect asbestos in
                your property, have it tested before starting any work.
              </p>
            </div>

            <div className="glass rounded-3xl p-6 border border-red-500/10">
              <h3 className="text-xl font-bold mb-3 text-red-400">Electrical Items (WEEE)</h3>
              <p className="text-gray-300 leading-relaxed">
                Fridges, freezers, washing machines, TVs, computers and any item with a plug or
                battery fall under WEEE regulations. These must be taken to a licensed recycling
                centre or collected through your local council's bulky waste service.
              </p>
            </div>

            <div className="glass rounded-3xl p-6 border border-red-500/10">
              <h3 className="text-xl font-bold mb-3 text-red-400">Batteries</h3>
              <p className="text-gray-300 leading-relaxed">
                All types of batteries — from household AA cells to car batteries — are prohibited
                in skips due to the risk of fire and chemical leakage. Take them to a battery
                recycling point at your local supermarket or recycling centre.
              </p>
            </div>

            <div className="glass rounded-3xl p-6 border border-red-500/10">
              <h3 className="text-xl font-bold mb-3 text-red-400">
                Gas Bottles &amp; Cylinders
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Pressurised gas cylinders, propane bottles and aerosol cans that are not fully
                empty pose an explosion risk. Return gas bottles to your supplier or take them to a
                hazardous waste facility.
              </p>
            </div>

            <div className="glass rounded-3xl p-6 border border-red-500/10">
              <h3 className="text-xl font-bold mb-3 text-red-400">
                Paint, Solvents &amp; Chemicals
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Liquid paint, white spirit, varnish, adhesives and any other chemicals are
                prohibited. Once paint tins are completely empty or the paint has fully dried out,
                the tins themselves can be placed in a skip.
              </p>
            </div>

            <div className="glass rounded-3xl p-6 border border-red-500/10">
              <h3 className="text-xl font-bold mb-3 text-red-400">Tyres</h3>
              <p className="text-gray-300 leading-relaxed">
                Tyres cannot be placed in a skip under UK waste regulations. Most garages and tyre
                fitting centres will accept old tyres for a small disposal fee, typically a few
                pounds per tyre.
              </p>
            </div>

            <div className="glass rounded-3xl p-6 border border-red-500/10">
              <h3 className="text-xl font-bold mb-3 text-red-400">
                Medical &amp; Clinical Waste
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Needles, syringes, medication and any clinical waste must be disposed of through
                approved clinical waste services. Contact your local pharmacy or GP surgery for safe
                disposal options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-4xl mx-auto" />

      {/* ───── Common Items: The Full Breakdown ───── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Common Items: The Full Breakdown
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
            {breakdownItems.map((item) => (
              <div
                key={item.name}
                className="glass rounded-3xl p-5 hover-lift flex flex-col gap-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-sm">{item.name}</h3>
                  {verdictBadge(item.verdict)}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-4xl mx-auto" />

      {/* ───── Special Waste Types ───── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Special Waste Types</h2>
          </div>

          <div className="space-y-8 stagger-children">
            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Mixed vs Separated Waste</h3>
              <p className="text-gray-300 leading-relaxed">
                Separating your waste before it goes in the skip can save you money. Mixed waste
                skips cost more to process because materials need to be sorted at the recycling
                facility. Plasterboard in particular must always be separated from general waste due
                to environmental regulations — if it is mixed in, the entire skip may be reclassified
                as hazardous, increasing your disposal costs significantly.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Heavy Waste</h3>
              <p className="text-gray-300 leading-relaxed">
                Soil, rubble, concrete, bricks and stone are all accepted but they are extremely
                heavy. Every skip has a weight limit and heavy materials will use up your allowance
                fast. If you have large quantities of heavy waste, it is more economical to hire a
                separate heavy waste skip rather than mixing it with lighter general waste.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-3">Green Waste</h3>
              <p className="text-gray-300 leading-relaxed">
                Garden waste including grass cuttings, branches, hedge trimmings, leaves, turf and
                soil is fully accepted in skips. Green waste is compostable and is processed
                separately at the recycling facility, making it one of the most environmentally
                friendly types of skip waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-4xl mx-auto" />

      {/* ───── Consequences ───── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Happens If You Put Prohibited Items in a Skip?
            </h2>
            <div className="glass rounded-3xl p-6 border border-amber-500/20">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                <p className="text-gray-300 leading-relaxed">
                  Placing prohibited items in a skip can have serious consequences. Your skip hire
                  company may add surcharges to cover the additional processing costs, or the skip
                  could be rejected entirely at the recycling facility — meaning you will be charged
                  for a wasted load and need to arrange alternative disposal. In the worst cases, the
                  Environment Agency can issue fines of up to several thousand pounds for illegal
                  waste disposal. Hazardous materials like asbestos carry even stricter penalties. To
                  avoid any issues, always check with your skip hire provider before disposing of
                  anything you are unsure about.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-4xl mx-auto" />

      {/* ───── FAQs ───── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3 stagger-children">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-4xl mx-auto" />

      {/* ───── Related Guides ───── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Related Guides</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 stagger-children">
            <Link
              to="/mini-skip-hire"
              className="glass rounded-3xl p-6 hover-lift group flex items-center justify-between"
            >
              <span className="font-semibold">Mini Skip Hire</span>
              <ArrowRight className="w-5 h-5 text-brand-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/builders-skip-hire"
              className="glass rounded-3xl p-6 hover-lift group flex items-center justify-between"
            >
              <span className="font-semibold">Builders Skip Hire</span>
              <ArrowRight className="w-5 h-5 text-brand-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/#skip-sizes"
              className="glass rounded-3xl p-6 hover-lift group flex items-center justify-between"
            >
              <span className="font-semibold">Skip Sizes Guide</span>
              <ArrowRight className="w-5 h-5 text-brand-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <div className="hr-gradient max-w-4xl mx-auto" />

      {/* ───── CTA ───── */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal">
            <div className="glass rounded-3xl p-10 shimmer">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Need a Skip?{' '}
                <span className="gradient-text">Get a Quote</span>
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Not sure which skip size you need or whether your waste is accepted? Give us a call
                and we will help you choose the right skip for your project.
              </p>
              <a
                href="tel:01159999999"
                className="btn-gradient inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold text-surface-950 hover-lift"
              >
                <PhoneCall className="w-5 h-5" />
                0115 999 9999
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
