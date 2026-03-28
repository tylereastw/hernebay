import { useEffect, useRef } from 'react';
import { Phone, Truck, Clock, Shield, ChevronRight, MapPin, Star, Recycle, Mail, PhoneCall, ArrowRight, CheckCircle2, Leaf, PoundSterling } from 'lucide-react';

const skipSizes = [
  {
    name: '4 Yard Mini',
    description: 'Perfect for small household clearouts, bathroom refits, and garden waste.',
    capacity: '30-40 bin bags',
    price: 'From £150',
    popular: false,
    icon: '🏡',
    color: 'from-amber-400 to-yellow-500',
  },
  {
    name: '6 Yard Midi',
    description: 'Ideal for kitchen or bathroom renovations, medium garden clearances.',
    capacity: '50-60 bin bags',
    price: 'From £200',
    popular: true,
    icon: '🔨',
    color: 'from-yellow-400 to-amber-500',
  },
  {
    name: '8 Yard Builder\'s',
    description: 'Great for larger renovations, house clearances, and construction projects.',
    capacity: '70-80 bin bags',
    price: 'From £250',
    popular: false,
    icon: '🏗️',
    color: 'from-orange-400 to-amber-500',
  },
  {
    name: '12 Yard Maxi',
    description: 'Best for commercial waste, large construction jobs, and major clearouts.',
    capacity: '100-120 bin bags',
    price: 'From £350',
    popular: false,
    icon: '🏢',
    color: 'from-amber-500 to-orange-500',
  },
];

const areas = [
  'Long Eaton', 'Sandiacre', 'Breaston', 'Sawley', 'Draycott',
  'Borrowash', 'Stapleford', 'Toton', 'Chilwell', 'Beeston',
  'Attenborough', 'Shardlow', 'Castle Donington', 'Ilkeston',
];

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Long Eaton',
    text: 'Brilliant service! Skip was delivered the next morning and collected promptly. Very competitive prices too.',
    rating: 5,
  },
  {
    name: 'James T.',
    location: 'Sandiacre',
    text: 'Used Long Eaton Skips for our house renovation. Friendly team and the skip arrived exactly when they said it would.',
    rating: 5,
  },
  {
    name: 'David R.',
    location: 'Breaston',
    text: 'Great value for money. Have used them three times now and always had excellent service. Highly recommend.',
    rating: 5,
  },
];

const steps = [
  {
    num: '01',
    title: 'Get a Quote',
    description: 'Call us or fill in our contact form. Tell us what size skip you need and when you\'d like it delivered.',
    icon: PhoneCall,
  },
  {
    num: '02',
    title: 'We Deliver',
    description: 'We\'ll drop your skip off at your chosen location, on your driveway or on the road with a permit.',
    icon: Truck,
  },
  {
    num: '03',
    title: 'We Collect',
    description: 'Once you\'ve filled it, give us a call and we\'ll come and collect it. We responsibly recycle the waste.',
    icon: Recycle,
  },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const el = ref.current;
    if (el) {
      el.querySelectorAll('.reveal, .stagger-children').forEach((child) => {
        observer.observe(child);
      });
    }
    return () => observer.disconnect();
  }, []);
  return ref;
}

function App() {
  const mainRef = useScrollReveal();

  return (
    <div ref={mainRef} className="min-h-screen bg-surface-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center glass rounded-2xl px-6 py-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center">
                <Truck className="w-5 h-5 text-surface-950" />
              </div>
              <span className="text-lg font-bold tracking-tight">Long Eaton <span className="gradient-text">Skips</span></span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {['Skip Sizes', 'Areas', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="animated-underline px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <a
              href="tel:01159999999"
              className="btn-gradient shimmer px-5 py-2.5 rounded-xl font-bold text-sm text-surface-950 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">0115 999 9999</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 noise-overlay">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-400/8 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-brand-600/6 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
          {/* Grid lines */}
          <div className="absolute inset-0 dot-pattern opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Badge */}
              <div className="animate-slide-up inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300 font-medium">Same Day & Next Day Delivery</span>
              </div>

              {/* Headline */}
              <h1 className="animate-slide-up-delayed text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6" style={{ opacity: 0 }}>
                Skip Hire
                <br />
                <span className="gradient-text">Done Right.</span>
              </h1>

              <p className="animate-slide-up-delayed-2 text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed" style={{ opacity: 0 }}>
                Fast, affordable, and eco-friendly skip hire in Long Eaton and surrounding areas. From garden waste to full renovations.
              </p>

              {/* CTA buttons */}
              <div className="animate-slide-up-delayed-2 flex flex-col sm:flex-row gap-4" style={{ opacity: 0 }}>
                <a
                  href="tel:01159999999"
                  className="group btn-gradient shimmer px-8 py-4 rounded-2xl font-bold text-lg text-surface-950 flex items-center justify-center space-x-3"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#skip-sizes"
                  className="group glass px-8 py-4 rounded-2xl font-semibold text-lg text-white hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
                >
                  <span>View Sizes</span>
                  <ChevronRight className="w-5 h-5 text-brand-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Trust strip */}
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
                {[
                  { icon: Clock, label: 'Same Day' },
                  { icon: Shield, label: 'Fully Licensed' },
                  { icon: Recycle, label: '90% Recycled' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center space-x-2 text-gray-400">
                    <Icon className="w-4 h-4 text-brand-400" />
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual - geometric composition */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-lg">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-brand-500/10 animate-spin-slow" />
                <div className="absolute inset-6 rounded-full border border-brand-500/15 animate-spin-slow" style={{ animationDirection: 'reverse' }} />

                {/* Central card */}
                <div className="absolute inset-12 glass rounded-3xl flex flex-col items-center justify-center glow-amber animate-float p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl flex items-center justify-center mb-6 rotate-6">
                    <Truck className="w-12 h-12 text-surface-950" />
                  </div>
                  <p className="text-3xl font-black gradient-text mb-1">5/5</p>
                  <div className="flex items-center space-x-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-400 text-brand-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-400">Customer Rated</p>
                </div>

                {/* Floating accent cards */}
                <div className="absolute top-8 -right-4 glass px-4 py-3 rounded-xl animate-float-delayed">
                  <p className="text-sm font-bold text-brand-400">Same Day</p>
                  <p className="text-xs text-gray-400">Delivery</p>
                </div>
                <div className="absolute bottom-12 -left-4 glass px-4 py-3 rounded-xl animate-float-slow">
                  <p className="text-sm font-bold text-green-400">90%</p>
                  <p className="text-xs text-gray-400">Recycled</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-gray-500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-brand-400 to-transparent" />
        </div>
      </section>

      {/* Bento feature grid */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="inline-block text-sm font-semibold text-brand-400 tracking-widest uppercase mb-4">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-black text-balance">
              Not your average <span className="gradient-text">skip hire</span>
            </h2>
          </div>

          <div className="stagger-children grid md:grid-cols-6 gap-4">
            {/* Large card - Fast Delivery */}
            <div className="md:col-span-4 glass hover-lift rounded-3xl p-8 group cursor-default">
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 bg-brand-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-7 h-7 text-brand-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Lightning Fast Delivery</h3>
                <p className="text-gray-400 leading-relaxed mb-6 max-w-md">Same day and next day skip delivery across Long Eaton and surrounding areas. We work around your schedule, not ours.</p>
                <div className="mt-auto flex items-center gap-3 flex-wrap">
                  {['Same Day', 'Next Day', 'Flexible Times'].map((tag) => (
                    <span key={tag} className="text-xs font-medium bg-white/5 px-3 py-1.5 rounded-full text-gray-300 border border-white/5">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Small card - Licensed */}
            <div className="md:col-span-2 glass hover-lift rounded-3xl p-8 group cursor-default">
              <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fully Licensed</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Registered waste carrier with the Environment Agency. Full compliance guaranteed.</p>
            </div>

            {/* Small card - Eco */}
            <div className="md:col-span-2 glass hover-lift rounded-3xl p-8 group cursor-default">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Eco Friendly</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Up to 90% of waste recycled. Minimising landfill, maximising responsibility.</p>
            </div>

            {/* Large card - Prices */}
            <div className="md:col-span-4 glass hover-lift rounded-3xl p-8 group cursor-default relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative flex flex-col h-full">
                <div className="w-14 h-14 bg-brand-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <PoundSterling className="w-7 h-7 text-brand-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Transparent Pricing</h3>
                <p className="text-gray-400 leading-relaxed max-w-md">Competitive rates with absolutely no hidden fees. What we quote is what you pay. Free, no-obligation quotes every time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skip Sizes */}
      <section id="skip-sizes" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="reveal text-center mb-16">
            <span className="inline-block text-sm font-semibold text-brand-400 tracking-widest uppercase mb-4">Our Range</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Find your <span className="gradient-text">perfect skip</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">From small clearouts to major construction projects</p>
          </div>

          <div className="stagger-children grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {skipSizes.map((skip) => (
              <div
                key={skip.name}
                className={`relative glass hover-lift rounded-3xl p-6 group cursor-default ${
                  skip.popular ? 'ring-2 ring-brand-400/50 glow-amber' : ''
                }`}
              >
                {skip.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-400 to-brand-600 text-surface-950 text-xs font-bold px-4 py-1 rounded-full tracking-wide">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-center mb-5">
                  <div className="text-4xl mb-3">{skip.icon}</div>
                  <h3 className="text-lg font-bold">{skip.name}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{skip.description}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-5">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Holds approx. <strong className="text-gray-300">{skip.capacity}</strong></span>
                </div>
                <div className="hr-gradient mb-5" />
                <p className="text-2xl font-black gradient-text text-center mb-4">{skip.price}</p>
                <a
                  href="tel:01159999999"
                  className={`block w-full py-3 rounded-xl font-bold text-sm text-center transition-all ${
                    skip.popular
                      ? 'btn-gradient text-surface-950'
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  Book This Skip
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Prices are indicative and may vary. Call us for an accurate quote.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-20">
            <span className="inline-block text-sm font-semibold text-brand-400 tracking-widest uppercase mb-4">Simple Process</span>
            <h2 className="text-3xl md:text-5xl font-black">
              Three steps. <span className="gradient-text">That's it.</span>
            </h2>
          </div>

          <div className="stagger-children relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />

            <div className="grid md:grid-cols-3 gap-12">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.num} className="relative text-center group">
                    <div className="relative inline-flex mb-8">
                      <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform rotate-3 group-hover:rotate-0">
                        <Icon className="w-8 h-8 text-brand-400" />
                      </div>
                      <span className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-brand-400 to-brand-600 rounded-lg flex items-center justify-center text-xs font-black text-surface-950">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="reveal text-center mb-16">
            <span className="inline-block text-sm font-semibold text-brand-400 tracking-widest uppercase mb-4">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-black">
              Trusted by <span className="gradient-text">locals</span>
            </h2>
          </div>

          <div className="stagger-children grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="glass hover-lift rounded-3xl p-8 relative">
                {/* Large decorative quote */}
                <div className="absolute top-4 right-6 text-7xl font-black text-brand-500/5 leading-none select-none">"</div>
                <div className="flex items-center space-x-0.5 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-400 text-brand-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed relative z-10">"{testimonial.text}"</p>
                <div className="hr-gradient mb-5" />
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full flex items-center justify-center text-sm font-bold text-surface-950">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas - Marquee style */}
      <section id="areas" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="inline-block text-sm font-semibold text-brand-400 tracking-widest uppercase mb-4">Coverage</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Areas we <span className="gradient-text">cover</span>
            </h2>
            <p className="text-gray-400 text-lg">Serving Long Eaton and the surrounding Derbyshire & Nottinghamshire areas</p>
          </div>

          {/* Scrolling marquee */}
          <div className="marquee-container mb-6">
            <div className="flex animate-marquee space-x-4">
              {[...areas, ...areas].map((area, i) => (
                <span
                  key={`${area}-${i}`}
                  className="inline-flex items-center space-x-2 glass px-5 py-3 rounded-xl whitespace-nowrap hover:bg-white/10 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-brand-400" />
                  <span className="text-sm font-medium text-gray-300">{area}</span>
                </span>
              ))}
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Don't see your area? Give us a call — we may still be able to help!
          </p>
        </div>
      </section>

      {/* About - Split with stats */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <span className="inline-block text-sm font-semibold text-brand-400 tracking-widest uppercase mb-4">About Us</span>
              <h2 className="text-3xl md:text-5xl font-black mb-8">
                Family-run. <span className="gradient-text">Community-driven.</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Long Eaton Skips is a family-run skip hire company proudly serving Long Eaton and the surrounding areas. We provide affordable, reliable skip hire for both domestic and commercial customers.
                </p>
                <p>
                  As a fully licensed waste carrier, we take our environmental responsibilities seriously. We recycle up to 90% of all waste we collect, ensuring minimal impact on landfill sites.
                </p>
                <p>
                  Whether you're clearing out a garage, renovating your home, or managing a construction site, we have the right skip at the right price.
                </p>
              </div>
            </div>

            {/* Stats bento grid */}
            <div className="stagger-children grid grid-cols-2 gap-4">
              <div className="glass hover-lift rounded-3xl p-8 text-center col-span-2">
                <p className="text-5xl font-black gradient-text mb-2">90%</p>
                <p className="text-gray-400 text-sm">Of all waste responsibly recycled</p>
              </div>
              <div className="glass hover-lift rounded-3xl p-8 text-center">
                <p className="text-4xl font-black gradient-text mb-2">4–40</p>
                <p className="text-gray-400 text-sm">Yard skip range</p>
              </div>
              <div className="glass hover-lift rounded-3xl p-8 text-center">
                <p className="text-4xl font-black gradient-text mb-2">24hr</p>
                <p className="text-gray-400 text-sm">Turnaround available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-brand-600/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl animate-pulse-glow" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="reveal">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Ready to <span className="gradient-text">get started?</span>
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-lg mx-auto">
              Get a free, no-obligation quote today. Same day and next day delivery available.
            </p>
            <a
              href="tel:01159999999"
              className="group btn-gradient shimmer inline-flex items-center space-x-3 px-10 py-5 rounded-2xl font-bold text-lg text-surface-950"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Call 0115 999 9999</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="inline-block text-sm font-semibold text-brand-400 tracking-widest uppercase mb-4">Contact</span>
            <h2 className="text-3xl md:text-5xl font-black">
              Get in <span className="gradient-text">touch</span>
            </h2>
          </div>
          <div className="stagger-children grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Phone, title: 'Phone', value: '0115 999 9999', href: 'tel:01159999999' },
              { icon: Mail, title: 'Email', value: 'info@longeatonskips.co.uk', href: 'mailto:info@longeatonskips.co.uk' },
              { icon: MapPin, title: 'Location', value: 'Long Eaton, Nottinghamshire', href: null },
            ].map(({ icon: Icon, title, value, href }) => (
              <div key={title} className="glass hover-lift rounded-3xl p-8 text-center group">
                <div className="w-14 h-14 bg-brand-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-brand-400" />
                </div>
                <h3 className="font-bold mb-2 text-sm uppercase tracking-wide text-gray-300">{title}</h3>
                {href ? (
                  <a href={href} className="text-gray-400 hover:text-brand-400 transition-colors text-sm">{value}</a>
                ) : (
                  <p className="text-gray-400 text-sm">{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center">
                  <Truck className="w-5 h-5 text-surface-950" />
                </div>
                <span className="text-lg font-bold">Long Eaton <span className="gradient-text">Skips</span></span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">Affordable, reliable skip hire serving Long Eaton and the surrounding areas.</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-300 mb-5">Services</h4>
              <ul className="space-y-3 text-sm">
                {['Domestic Skip Hire', 'Commercial Skip Hire', 'Waste Removal', 'Recycling Services'].map((s) => (
                  <li key={s}><a href="#skip-sizes" className="text-gray-500 hover:text-brand-400 transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-300 mb-5">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                {[['About Us', '#about'], ['Areas Covered', '#areas'], ['Contact Us', '#contact']].map(([label, href]) => (
                  <li key={label}><a href={href} className="text-gray-500 hover:text-brand-400 transition-colors">{label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-300 mb-5">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-brand-400" />
                  <a href="tel:01159999999" className="text-gray-500 hover:text-brand-400 transition-colors">0115 999 9999</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-brand-400" />
                  <a href="mailto:info@longeatonskips.co.uk" className="text-gray-500 hover:text-brand-400 transition-colors">info@longeatonskips.co.uk</a>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-brand-400" />
                  <span className="text-gray-500">Long Eaton, Nottinghamshire</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="hr-gradient mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Long Eaton Skips. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Proudly serving the East Midlands</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
