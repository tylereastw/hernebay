import { Icon } from '../components/Icon';

const skipCatalog = [
  {
    name: '2-Yard Mini Skip',
    capacity: 'Fits ~20-30 bin bags',
    price: '£120.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWGWn0xyMgjqkU48PhZzgTg2IkngjQMk1b0BEDne-2coDX8X5PLAPwHjCY_OO4Osa4hEpGF_YF9KCjCj2dVkXOuFLirzY7OBNaoaDVnYvt0ujT9uDV8jmzM38rq5pu1alWTPy6E5lGm9SFg51WKcHhdrOlIzvDapdL3lEYfLycALL0l-IJUnGvLM05Kwl83A0eLp2Wk49VBRkdyyUUtqymwynerjI5BwppwMO2_Re95iFhkKitsA_h0u_ycNO1k0R21eEni90iUas',
    popular: false,
  },
  {
    name: '4-Yard Midi Skip',
    capacity: 'Fits ~40-50 bin bags',
    price: '£185.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATTMAKflCsRpoM_J33CgziooulSi78L0Go8ZP9APr180iKyJtCYNyaOQwX6X6vceCGY7aOUtxHEUt7s6koE4QSr8CuAjPgOar6VJIWSlB5796hR2ELtDtQCMgr-BrTne0RE2Bqfl8umS-PGZXa7VPrw6kCVYyECzxSoskpqheAeaCR3bLZPG1MXjAq24HBytj1PSxkzXcZXqW_snstG1iXSiBQTsVEnRY8qSD758ws_l28J9qMOgTYRRwCkEw4DaFj8ZTS34U_-Js',
    popular: false,
  },
  {
    name: '8-Yard Builders Skip',
    capacity: 'Fits ~80-90 bin bags',
    price: '£260.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEPpL8--7fPSknz5h_sV7Slg4CppjWvWfnPSNJrBaVdQvfj5TKEpCmiHIPRJJSmVegnYF38wAEBg3fPNZjgCmv4o1GtXTt7j3wQgiY1_v9Dw7ReNHsGB4Ws6B7A-tmiV7h3lytuL3dBJ6hlyjnLifVbY0Lvgs2Ywlx7cnPGyGRf2u5li8SpLaGPoEakLy4bv2UiuqZlRQwOhz5DIC8hcm1xr5SQHutI5PgSXlUarovZJR5xy1u241gS5i23PlBzkXCPIPFUK2s2t0',
    popular: true,
  },
  {
    name: '12-Yard Large Skip',
    capacity: 'Fits ~120 bin bags',
    price: '£345.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQCLcrkNNtkzgqleorBi23CRQOTEyFSPjX6YR8j654aMFJXjO_-wpjIZwdltI_mW7sjNUl-cwaYQa9sodVUr_ku-NeT8OgKlyx-yXm41vLpN3-T8x7x-UnLQFNhn_XLZs68CAgNA-mWNwWg7H66k1JjhoHpnwD71Cb_ZsmtKCCoF-hy1iR7N847v_HFZboqwn_iRa28okIYnE0nGNjfbKgOsvxnZhaDNjScdCIVWvZuJCIqCrHNjTReuBT_IgDywryY4Hq5C7U2Y0',
    popular: false,
  },
];

const faqs = [
  {
    q: 'Do I need a permit for the skip?',
    a: 'If the skip is placed on your private driveway, no permit is needed. If it needs to be on a public road, we can arrange the necessary council permits for a small additional fee.',
  },
  {
    q: 'How long can I keep the skip for?',
    a: "Our standard hire period is up to 14 days. If you need it for longer, just give us a call and we can usually extend this at no extra cost depending on skip availability.",
  },
  {
    q: "What can't I put in the skip?",
    a: 'For environmental and safety reasons, we cannot accept asbestos, batteries, clinical waste, fridges/freezers, gas cylinders, liquids, oil, paint, or tyres.',
  },
];

export default function Home() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative px-6 py-12 md:py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container rounded-full text-on-secondary-container font-bold text-xs tracking-widest uppercase">
              <Icon name="verified_user" className="text-base" />
              Long Eaton's Trusted Choice
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter leading-[0.95]">
              Professional Skip Hire.{' '}
              <span className="text-primary italic block">Zero VAT.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
              The premium editorial service for domestic waste. Family-run
              and local expertise you can rely on.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="http://zipskips.co.uk/?location=long-eaton" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-white rounded-full font-bold text-lg shadow-xl active:scale-95 transition-transform">
                Book Online
              </a>
              <a href="tel:07782222906" className="px-8 py-4 bg-secondary-container text-on-secondary-container rounded-full font-bold text-lg active:scale-95 transition-transform flex items-center gap-2">
                <Icon name="call" />
                Call Now
              </a>
              <a href="https://wa.me/447470300853" className="px-8 py-4 bg-tertiary-container text-tertiary-fixed rounded-full font-bold text-lg active:scale-95 transition-transform flex items-center gap-2">
                <Icon name="chat" />
                WhatsApp
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl">
              <img
                alt="Skip on a clean driveway"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8Rg1S4p7q3iqkqd_xCw5UbY4PHhlerPmf8g2rqYp0UizA0VHuIrxAe3G_0GeSVSopGr07Zq9B5dyq1RFZzTv1roxcfQvCorB6vJRCazt2qSFF13I4mpQD-ySAz7IRU410g2vxDvoZUdssIwNeDWzDT-lQy1kWKykLdK7Zg3GD8zC1t6RuKW5-3sM_ST8zkmaHE5YNmbAb057v7-1Lee--SFesrt29YCLcQP6_xd7ngC8xiXz0aMkxPB6tRtlAD9HK6RMe0yMGG0g"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-8 rounded-lg shadow-xl max-w-xs border border-outline-variant/10">
              <p className="text-primary font-black text-4xl tracking-tighter italic">
                NO VAT
              </p>
              <p className="text-on-surface-variant text-sm font-medium">
                Save <span className="font-bold text-primary">20%</span> on all domestic hires within the Long Eaton area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        id="why"
        className="px-6 py-20 bg-surface-container rounded-xl mx-4 md:mx-12 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-on-surface">
              Modern Service, Traditional Values
            </h2>
            <p className="text-on-surface-variant">
              We've reimagined skip hire to be cleaner, faster, and more
              neighborly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-10 rounded-lg space-y-4 shadow-sm border border-outline-variant/10">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                <Icon name="family_history" />
              </div>
              <h3 className="text-xl font-bold">Family-Run</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Three generations of local service means we care about our
                streets as much as you do.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-lg space-y-4 shadow-sm border border-outline-variant/10">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <Icon name="local_shipping" />
              </div>
              <h3 className="text-xl font-bold">Reliable Delivery</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Flexible scheduling to suit your project. We'll confirm a
                delivery window that works for you.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-lg space-y-4 shadow-sm border border-outline-variant/10">
              <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-tertiary-fixed">
                <Icon name="savings" />
              </div>
              <h3 className="text-xl font-bold">Save 20% Instantly</h3>
              <p className="text-on-surface-variant leading-relaxed">
                No VAT means you save 20% compared to VAT-registered
                competitors. The price you see is what you pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skip Catalog */}
      <section id="catalog" className="px-6 py-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-on-surface">
              The Right Size for Every Task
            </h2>
            <p className="text-on-surface-variant text-lg">
              From garden cleanups to full home renovations, we have the perfect
              skip for your project.
            </p>
          </div>
          <div className="flex gap-2 bg-surface-container p-1 rounded-full">
            <button className="px-6 py-2 bg-surface-container-lowest rounded-full font-bold text-sm shadow-sm">
              Residential
            </button>
            <button className="px-6 py-2 text-on-surface-variant font-bold text-sm">
              Commercial
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skipCatalog.map((skip) => (
            <div key={skip.name} className="group space-y-6">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-surface-variant">
                <img
                  alt={skip.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={skip.image}
                />
                <div className="absolute top-4 left-4 bg-secondary text-on-secondary px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  NO VAT
                </div>
                {skip.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    MOST POPULAR
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">{skip.name}</h3>
                <p className="text-on-surface-variant text-sm mb-4">
                  {skip.capacity}
                </p>
                <p className="text-primary font-black text-2xl mb-4">
                  {skip.price}{' '}
                  <span className="text-xs font-normal text-on-surface-variant tracking-normal">
                    Inc. delivery
                  </span>
                </p>
                <a
                  href="http://zipskips.co.uk/?location=long-eaton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 font-bold rounded-full transition-colors text-center ${
                    skip.popular
                      ? 'bg-gradient-to-br from-primary to-primary-container text-white shadow-lg'
                      : 'bg-surface-container text-on-surface hover:bg-primary hover:text-white'
                  }`}
                >
                  {skip.popular ? 'Book Now' : 'Select Size'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="bg-primary-container rounded-xl w-full aspect-video flex items-center justify-center p-12">
              <div className="text-white space-y-6">
                <Icon name="handshake" className="text-6xl" />
                <h3 className="text-4xl font-bold tracking-tight">
                  Built on Trust
                </h3>
                <p className="text-primary-fixed leading-relaxed text-lg">
                  Since 1988, we've been the silent partner in thousands of home
                  improvements across Long Eaton. We're more than just waste
                  removal; we're your local neighbor ensuring your community
                  stays clean and vibrant.
                </p>
              </div>
            </div>
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary-container rounded-full flex items-center justify-center text-center p-6 shadow-xl hidden md:flex">
              <p className="text-on-secondary-container font-black text-lg leading-tight uppercase tracking-tighter">
                Licensed Waste Carrier
              </p>
            </div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface">
              Experience the Editorial Standard in Service
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              We don't believe skip hire should be messy. From our clean,
              well-maintained vehicles to our uniformed, polite drivers, we
              bring a level of professionalism that's rare in the industry.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="text-3xl font-black text-primary">20%</p>
                <p className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">
                  VAT Savings
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-black text-primary">24h</p>
                <p className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">
                  Rapid Response
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="px-6 py-24 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold tracking-tighter text-center mb-16 text-on-surface">
          Common Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group bg-surface-container-lowest rounded-lg overflow-hidden border border-outline-variant/10"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="text-lg font-bold">{faq.q}</span>
                <Icon
                  name="expand_more"
                  className="transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
