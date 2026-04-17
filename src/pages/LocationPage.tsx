import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { locations } from '../data/locations';

const skipPricing = [
  { name: '5-Yard Skip', bags: '~40-50 bin bags', price: '£326' },
  { name: '8-Yard Builders Skip', bags: '~80-90 bin bags', price: '£386' },
  { name: '12-Yard Large Skip', bags: '~120 bin bags', price: '£472' },
];

export default function LocationPage() {
  const { location } = useParams<{ location: string }>();
  const loc = location ? locations[location] : null;

  useEffect(() => {
    if (loc) document.title = loc.metaTitle;
  }, [loc]);

  if (!loc) {
    return (
      <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-primary mb-4">Location Not Found</h1>
        <p className="text-on-surface-variant">We don't have a page for this location yet.</p>
      </main>
    );
  }

  const schemaService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Skip Hire ${loc.name}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Long Eaton Skips',
      telephone: '07782222906',
      areaServed: loc.name,
    },
    areaServed: { '@type': 'Place', name: `${loc.name}, East Midlands` },
    description: loc.heroDescription,
  };

  const schemaFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: loc.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <main className="pt-24">
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />

      {/* Hero */}
      <section className="px-6 py-12 md:py-24 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container rounded-full text-on-secondary-container font-bold text-xs tracking-widest uppercase mb-6">
            <Icon name="location_on" className="text-base" />
            {loc.postcodes.join(' / ')} Coverage
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter leading-[0.95] mb-8">
            Skip Hire in{' '}
            <span className="text-primary italic">{loc.name}</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10">
            {loc.heroDescription}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="http://zipskips.co.uk/?location=long-eaton"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-white rounded-full font-bold text-lg shadow-xl active:scale-95 transition-transform"
            >
              Book Online
            </a>
            <a
              href="tel:07782222906"
              className="px-8 py-4 bg-secondary-container text-on-secondary-container rounded-full font-bold text-lg active:scale-95 transition-transform flex items-center gap-2"
            >
              <Icon name="call" />
              07782 222 906
            </a>
            <a
              href="https://wa.me/447470300853"
              className="px-8 py-4 bg-tertiary-container text-tertiary-fixed rounded-full font-bold text-lg active:scale-95 transition-transform flex items-center gap-2"
            >
              <Icon name="chat" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="px-6 py-20 bg-surface-container rounded-xl mx-4 md:mx-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-on-surface text-center">
            Skip Prices in {loc.name}
          </h2>
          <p className="text-on-surface-variant text-center mb-12 max-w-xl mx-auto">
            All prices include delivery and collection. No VAT — save 20% on every hire.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skipPricing.map((skip) => (
              <div key={skip.name} className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/10 text-center space-y-4">
                <h3 className="text-xl font-bold">{skip.name}</h3>
                <p className="text-on-surface-variant text-sm">{skip.bags}</p>
                <p className="text-3xl font-black text-primary">{skip.price}</p>
                <p className="text-xs text-on-surface-variant font-bold">Inc. delivery &middot; No VAT</p>
                <a
                  href="http://zipskips.co.uk/?location=long-eaton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-surface-container text-on-surface font-bold rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  Book This Skip
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tighter text-on-surface mb-6">
              Areas We Cover Near {loc.name}
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              We deliver skips across {loc.name} and the surrounding areas. If your location isn't listed, give us a call — we can usually help.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="text-3xl font-black text-primary">20%</p>
                <p className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">VAT Savings</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-black text-primary">24h</p>
                <p className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">Rapid Response</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {loc.areas.map((area) => (
              <div key={area} className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/10 text-center shadow-sm">
                <Icon name="location_on" className="text-primary text-2xl mb-2" />
                <p className="font-bold">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 bg-surface-container-low">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold tracking-tighter text-center mb-16 text-on-surface">
            Skip Hire {loc.name} FAQs
          </h2>
          <div className="space-y-4">
            {loc.faqs.map((faq) => (
              <details key={faq.q} className="group bg-surface-container-lowest rounded-lg overflow-hidden border border-outline-variant/10">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="text-lg font-bold">{faq.q}</span>
                  <Icon name="expand_more" className="transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-primary-container rounded-xl mx-4 md:mx-12 mb-12">
        <div className="max-w-3xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            Book Skip Hire in {loc.name}
          </h2>
          <p className="text-primary-fixed text-lg">
            Get a free quote today. No VAT on all domestic skip hires.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="http://zipskips.co.uk/?location=long-eaton"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-primary rounded-full font-bold text-lg shadow-xl active:scale-95 transition-transform"
            >
              Book Online
            </a>
            <a
              href="tel:07782222906"
              className="px-8 py-4 bg-secondary-container text-on-secondary-container rounded-full font-bold text-lg active:scale-95 transition-transform flex items-center gap-2"
            >
              <Icon name="call" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
