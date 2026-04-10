const skipSizes = [
  {
    name: '2-Yard Mini Skip',
    description: 'Ideal for minor household renovations or garden clearances.',
    length: '1.2M',
    capacity: '25-35 BAGS',
    price: 'FROM £120',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDegrth0brIhVOZ_u_xcwQ1BH7z0ubhQbDfpSbE7PDOw40n1BGs3akg5b8DZb6_eX9WHyD5bO2vfu_e2qbziuwYgef_YaYvACqLozh3zLDMZbXeuUofe1fUeSBJZu35Y166k5phD_iC78C5TkODK9TX7_etKyzEh3TKBxQHcplk6W3sYEVY4nzdPbtyX-2yws1QodNzQNsP5VOmorR2FHQOUnMvbrkkQpuGafqkRQmVsiGravyM7iF-wito_2ILeRghmjkqktws7u8',
  },
  {
    name: '4-Yard Midi Skip',
    description: 'The standard for bathroom and kitchen rip-outs.',
    length: '1.8M',
    capacity: '45-55 BAGS',
    price: 'FROM £180',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCosbjSeyfCUEgj6ndbXmc7pn1tPgrtmIFq085aiECurMTirzWW3JySznZcAldbX_LM-jXOppHMjT1ZejcN6w-nfdW6zYx3igoiW15fqb3lxd9q5ePzFJUyZiLSqSPjyCQUDBdiNI1DsKWVLptTrftA0PIq498t2iC0dADa3KcXE3k1SP4ckf_2a3_AXzYCcPCWpkeF3Ccp3FqjhhSkc7PnMyCv-rliYaRQ5jb4n5pqJx35EPZ7X0Ic_EA3mf-n4v2ctVdmS-NGayI',
  },
];

const valueProps = [
  {
    icon: 'location_searching',
    title: 'Local Precision',
    description:
      'We specialize exclusively in the Long Eaton area. This focus ensures we meet your delivery and collection windows with millimetre accuracy.',
    module: 'LOC_01',
  },
  {
    icon: 'receipt_long',
    title: 'Transparent Pricing',
    description:
      'What you see is what you pay. As a NO VAT business, we offer homeowners a significant cost advantage without sacrificing technical quality.',
    module: 'COST_TRANS',
  },
  {
    icon: 'precision_manufacturing',
    title: 'Reliable Delivery',
    description:
      'Our fleet utilizes advanced routing to ensure your skip arrives exactly when scheduled. We treat your driveway like a construction site: with respect.',
    module: 'DEL_LOG',
  },
];

const navLinks = [
  { label: 'HOME', href: '#', active: true },
  { label: 'SKIPS', href: '#skip-sizes' },
  { label: 'BOOKING', href: '#cta' },
];

const footerLinks = [
  { label: 'Sizing Guide', href: '#skip-sizes' },
  { label: 'Contact', href: '#cta' },
  { label: 'Permit Info', href: '#' },
];

function Icon({ name, className = '' }: { name: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

function App() {
  return (
    <div className="bg-surface text-on-surface">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-stone-50/80 backdrop-blur-xl border-b-2 border-stone-950">
        <div className="flex items-center gap-2">
          <Icon name="architecture" className="text-stone-950" />
          <span className="text-lg font-black tracking-tighter text-stone-950 font-headline uppercase">
            LONG EATON SKIPS (NO VAT)
          </span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ label, href, active }) => (
            <a
              key={label}
              href={href}
              className={`font-headline uppercase tracking-tighter font-bold text-sm px-2 py-1 transition-colors duration-100 ${
                active
                  ? 'text-amber-500'
                  : 'text-stone-500 hover:bg-amber-500 hover:text-stone-950'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
        <button className="bg-primary text-on-primary px-4 py-2 font-headline font-bold text-xs tracking-widest hover:bg-surface-tint transition-all active:translate-y-[1px]">
          CONTACT
        </button>
      </nav>

      <main className="pt-16 blueprint-grid">
        {/* Hero */}
        <section className="relative min-h-[751px] flex flex-col md:flex-row items-stretch border-b-2 border-primary">
          <div className="flex-1 p-8 md:p-16 flex flex-col justify-center border-r-0 md:border-r-2 border-primary bg-surface/40 backdrop-blur-sm">
            <div className="mb-4">
              <span className="bg-primary text-on-primary px-3 py-1 font-headline font-bold text-[10px] tracking-[0.2em] uppercase">
                SYSTEM V.2024
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter leading-[0.85] mb-8 text-primary">
              SKIP HIRE,
              <br />
              RE-ENGINEERED.
            </h1>
            <p className="text-xl max-w-md font-body text-on-surface-variant leading-relaxed mb-12 border-l-4 border-surface-tint pl-6">
              Professional, residential skip services delivered with
              architectural precision. No VAT. No hidden costs. Just local
              reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-on-primary px-8 py-5 font-headline font-bold text-sm tracking-widest flex items-center justify-center gap-3 hover:bg-surface-tint transition-colors">
                BOOK ONLINE
                <Icon name="arrow_forward" className="text-sm" />
              </button>
              <button className="border-2 border-primary text-primary px-8 py-5 font-headline font-bold text-sm tracking-widest flex items-center justify-center gap-3 hover:bg-primary hover:text-on-primary transition-colors">
                WHATSAPP
                <Icon name="chat" className="text-sm" />
              </button>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-outline-variant pt-8">
              <div>
                <span className="block font-headline text-[10px] font-bold text-outline uppercase tracking-widest mb-1">
                  SERVICE AREA
                </span>
                <span className="block font-headline text-lg font-bold">
                  LONG EATON &amp; SURROUNDINGS
                </span>
              </div>
              <div>
                <span className="block font-headline text-[10px] font-bold text-outline uppercase tracking-widest mb-1">
                  TAX STATUS
                </span>
                <span className="block font-headline text-lg font-bold text-surface-tint">
                  0% VAT APPLIED
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative min-h-[400px] bg-surface-container">
            <img
              alt="Yellow skip on modern driveway"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbWj6JuhZhDFWv0CrvPZmCXz9lV5YCdbLo_tCzVF5k1_iVhgV4Pp8mUMMxlperEY6BroRqQoKuXIVyZ2dv0PHsU6esD19-Y3rKZOpTnBZ13NwzmliSsXQHcQX0cre8ILaAcgchgLejDzncRdDfaE792voA6Kp30c4cmO95WGLokSiyFTKihR4XojghUB4zt55_5ZKbyB9g8TovxiMkU0j5QtEUhcQBLC3QfQ8UTXuvvK6bDdBPu4JP1vIdznnYuw5UvTN8wXaDLZY"
            />
            <div className="absolute bottom-0 right-0 bg-primary p-6 text-on-primary flex flex-col items-end">
              <span className="font-headline text-4xl font-black">£0.00</span>
              <span className="font-headline text-[10px] tracking-widest font-bold opacity-70">
                TAX ADD-ON TOTAL
              </span>
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className="grid grid-cols-1 md:grid-cols-3 border-b-2 border-primary">
          {valueProps.map((prop, i) => (
            <div
              key={prop.module}
              className={`p-12 bg-surface-container-lowest flex flex-col gap-6 ${
                i < valueProps.length - 1
                  ? 'border-r-0 md:border-r-2 border-primary'
                  : ''
              }`}
            >
              <Icon name={prop.icon} className="text-4xl text-surface-tint" />
              <h3 className="text-2xl font-black font-headline tracking-tight uppercase">
                {prop.title}
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                {prop.description}
              </p>
              <div className="mt-auto pt-6 border-t border-outline-variant">
                <span className="font-headline font-bold text-[10px] text-outline tracking-widest">
                  MODULE: {prop.module}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Skip Sizes */}
        <section id="skip-sizes" className="p-8 md:p-24 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <span className="font-headline font-bold text-surface-tint tracking-widest uppercase text-sm mb-4 block">
                  DIMENSIONAL GUIDE
                </span>
                <h2 className="text-5xl md:text-6xl font-black font-headline tracking-tighter leading-none">
                  THE RIGHT SCALE
                  <br />
                  FOR YOUR PROJECT.
                </h2>
              </div>
              <div className="hidden md:block">
                <span className="font-headline text-8xl font-black opacity-5">
                  SKP_04
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-primary">
              {skipSizes.map((skip) => (
                <div
                  key={skip.name}
                  className="bg-surface-container-lowest p-8 flex flex-col md:flex-row gap-8 items-center group"
                >
                  <div className="w-full md:w-1/2 aspect-video bg-surface-container flex items-center justify-center border border-outline-variant overflow-hidden">
                    <img
                      alt={skip.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                      src={skip.image}
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h4 className="font-headline font-black text-2xl mb-2 uppercase">
                      {skip.name}
                    </h4>
                    <p className="font-body text-sm text-on-surface-variant mb-4">
                      {skip.description}
                    </p>
                    <ul className="font-headline text-[11px] font-bold tracking-wider space-y-1">
                      {[
                        { label: 'LENGTH', value: skip.length },
                        { label: 'CAPACITY', value: skip.capacity },
                      ].map((spec) => (
                        <li
                          key={spec.label}
                          className="flex justify-between border-b border-outline-variant pb-1"
                        >
                          <span>{spec.label}</span>
                          <span>{spec.value}</span>
                        </li>
                      ))}
                      <li className="flex justify-between text-surface-tint">
                        <span>PRICE</span>
                        <span>{skip.price}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="cta"
          className="bg-primary text-on-primary py-24 px-8 text-center border-t-8 border-surface-tint"
        >
          <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter mb-8 uppercase">
            READY TO DEPLOY?
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-surface-tint text-on-primary px-12 py-6 font-headline font-bold text-lg tracking-widest hover:bg-white hover:text-primary transition-colors flex items-center justify-center gap-4">
              <Icon name="calendar_today" />
              SCHEDULE DELIVERY
            </button>
            <button className="border-2 border-on-primary px-12 py-6 font-headline font-bold text-lg tracking-widest hover:bg-on-primary hover:text-primary transition-colors flex items-center justify-center gap-4">
              <Icon name="call" />
              0115 000 0000
            </button>
          </div>
          <p className="mt-12 font-headline text-[10px] tracking-[0.4em] opacity-50 uppercase">
            OFFICE HOURS: MON-FRI 07:30 - 17:30
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full px-6 py-12 flex flex-col gap-8 bg-stone-900 text-stone-50 border-t-4 border-stone-950">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-4">
            <Icon name="architecture" className="text-4xl text-amber-500" />
            <span className="text-amber-500 font-bold tracking-tighter font-headline text-2xl uppercase">
              LONG EATON SKIPS
            </span>
          </div>
          <div className="flex gap-8 border-l-2 border-stone-700 ml-4 pl-4">
            {footerLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-headline text-[12px] leading-tight tracking-tight text-stone-400 hover:text-amber-400 transition-all"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-t border-stone-800 pt-8">
          <p className="font-headline text-[12px] leading-tight tracking-tight text-stone-500 uppercase">
            &copy; {new Date().getFullYear()} LONG EATON SKIPS. TECHNICAL
            SPECIFICATIONS SUBJECT TO CHANGE.
          </p>
          <div className="flex gap-4">
            <span className="bg-amber-500 text-stone-950 px-2 py-1 font-headline font-bold text-[10px] tracking-widest">
              VAT FREE
            </span>
            <span className="border border-stone-700 text-stone-400 px-2 py-1 font-headline font-bold text-[10px] tracking-widest uppercase">
              NG10 SERVICE AREA
            </span>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-stretch h-16 bg-stone-50 border-t-2 border-stone-950">
        {[
          { icon: 'home_pin', label: 'HOME', href: '#', active: true },
          { icon: 'view_in_ar', label: 'SKIPS', href: '#skip-sizes' },
          { icon: 'calendar_today', label: 'BOOKING', href: '#cta' },
        ].map(({ icon, label, href, active }) => (
          <a
            key={label}
            href={href}
            className={`flex flex-col items-center justify-center h-full w-full px-2 active:scale-95 duration-75 ${
              active
                ? 'bg-amber-500 text-stone-950'
                : 'text-stone-500 hover:bg-stone-200'
            }`}
          >
            <Icon name={icon} />
            <span className="font-headline font-bold text-[10px] tracking-widest uppercase">
              {label}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}

export default App;
