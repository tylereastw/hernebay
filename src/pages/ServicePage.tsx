import { useParams } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { usePageMeta } from '../components/PageMeta';
import { services } from '../data/services';

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? services[slug] : null;

  usePageMeta(
    service?.metaTitle ?? 'Service Not Found | Long Eaton Skips',
    service?.metaDescription ?? ''
  );

  if (!service) {
    return (
      <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-primary mb-4">Service Not Found</h1>
        <p className="text-on-surface-variant">The service you're looking for doesn't exist.</p>
      </main>
    );
  }

  const schemaService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Long Eaton Skips',
      telephone: '07782222906',
      areaServed: 'Long Eaton',
    },
    areaServed: { '@type': 'Place', name: 'Long Eaton, Nottinghamshire' },
    description: service.heroDescription,
  };

  const schemaFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <main className="pt-24">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />

      {/* Hero */}
      <section className="relative px-6 py-12 md:py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container rounded-full text-on-secondary-container font-bold text-xs tracking-widest uppercase">
              <Icon name="verified_user" className="text-base" />
              {service.heroTag}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter leading-[0.95]">
              {service.heroHeading}{' '}
              <span className="text-primary italic block">{service.heroHighlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
              {service.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
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
          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl">
              <img alt={service.title} className="w-full h-full object-cover" src={service.heroImage} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-20 bg-surface-container rounded-xl mx-4 md:mx-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.benefits.map((b) => (
              <div key={b.title} className="bg-surface-container-lowest p-10 rounded-lg space-y-4 shadow-sm border border-outline-variant/10">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                  <Icon name={b.icon} />
                </div>
                <h3 className="text-xl font-bold">{b.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="px-6 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-primary-container rounded-xl w-full aspect-video flex items-center justify-center p-12">
            <div className="text-white space-y-6">
              <Icon name="engineering" className="text-6xl" />
              <h3 className="text-4xl font-bold tracking-tight">{service.details.heading}</h3>
              <p className="text-primary-fixed leading-relaxed text-lg">{service.details.description}</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface">
              Why Choose Our {service.title}?
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              We bring the same professional, no-nonsense approach to every service. No VAT on domestic hires means you save 20% with us.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {service.details.stats.map((s) => (
                <div key={s.label} className="space-y-2">
                  <p className="text-3xl font-black text-primary">{s.value}</p>
                  <p className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold tracking-tighter text-center mb-16 text-on-surface">
          {service.title} FAQs
        </h2>
        <div className="space-y-4">
          {service.faqs.map((faq) => (
            <details key={faq.q} className="group bg-surface-container-lowest rounded-lg overflow-hidden border border-outline-variant/10">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="text-lg font-bold">{faq.q}</span>
                <Icon name="expand_more" className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-primary-container rounded-xl mx-4 md:mx-12 mb-12">
        <div className="max-w-3xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            Ready to Book {service.title}?
          </h2>
          <p className="text-primary-fixed text-lg">
            Get in touch today for a free, no-obligation quote. No VAT on all domestic services.
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
