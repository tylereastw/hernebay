import { Phone, Truck, Clock, Shield, ChevronRight, MapPin, Star, Recycle, Mail, PhoneCall } from 'lucide-react';

const skipSizes = [
  {
    name: '4 Yard Mini Skip',
    description: 'Perfect for small household clearouts, bathroom refits, and garden waste.',
    capacity: '30-40 bin bags',
    price: 'From £150',
    popular: false,
  },
  {
    name: '6 Yard Midi Skip',
    description: 'Ideal for kitchen or bathroom renovations, medium garden clearances.',
    capacity: '50-60 bin bags',
    price: 'From £200',
    popular: true,
  },
  {
    name: '8 Yard Builder\'s Skip',
    description: 'Great for larger renovations, house clearances, and construction projects.',
    capacity: '70-80 bin bags',
    price: 'From £250',
    popular: false,
  },
  {
    name: '12 Yard Maxi Skip',
    description: 'Best for commercial waste, large construction jobs, and major clearouts.',
    capacity: '100-120 bin bags',
    price: 'From £350',
    popular: false,
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

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Truck className="w-8 h-8 text-yellow-500" />
              <span className="text-xl font-bold text-gray-900">Long Eaton <span className="text-yellow-500">Skips</span></span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#skip-sizes" className="text-gray-600 hover:text-gray-900 transition-colors">Skip Sizes</a>
              <a href="#areas" className="text-gray-600 hover:text-gray-900 transition-colors">Areas Covered</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              <a
                href="tel:01159999999"
                className="px-6 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors font-bold flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>0115 999 9999</span>
              </a>
            </div>
            <a
              href="tel:01159999999"
              className="md:hidden px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg font-bold flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full mb-6 border border-yellow-500/20">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Same Day & Next Day Delivery Available</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Affordable <span className="text-yellow-400">Skip Hire</span> in Long Eaton
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Whether it's a home clearout, garden project, or building work, we've got the right skip for you. Fast delivery, competitive prices, and friendly local service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:01159999999"
                  className="group px-8 py-4 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-all font-bold text-lg flex items-center justify-center space-x-2"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>Get a Free Quote</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#skip-sizes"
                  className="px-8 py-4 border-2 border-gray-600 text-white rounded-lg hover:border-yellow-500 hover:text-yellow-400 transition-colors font-medium text-lg text-center"
                >
                  View Skip Sizes
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300 text-sm">Same Day Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300 text-sm">Fully Licensed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Recycle className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300 text-sm">Responsible Recycling</span>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="aspect-square bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center">
                <Truck className="w-48 h-48 text-gray-900/20" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Rated 5/5</p>
                    <p className="text-xs text-gray-500">by our customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Long Eaton Skips?</h2>
            <p className="text-lg text-gray-600">Local, reliable, and always competitively priced</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Same day and next day skip delivery across Long Eaton and surrounding areas.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fully Licensed</h3>
              <p className="text-gray-600 text-sm">We are a fully licensed waste carrier registered with the Environment Agency.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Eco Friendly</h3>
              <p className="text-gray-600 text-sm">We recycle up to 90% of all waste collected, minimising landfill impact.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Great Prices</h3>
              <p className="text-gray-600 text-sm">Competitive, transparent pricing with no hidden fees. Get a free quote today.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skip Sizes */}
      <section id="skip-sizes" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Skip Sizes</h2>
            <p className="text-lg text-gray-600">From small clearouts to major construction projects, we have the right skip for you</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skipSizes.map((skip) => (
              <div
                key={skip.name}
                className={`relative bg-white rounded-2xl border-2 p-6 hover:shadow-lg transition-shadow ${
                  skip.popular ? 'border-yellow-500 shadow-md' : 'border-gray-200'
                }`}
              >
                {skip.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-center mb-4">
                  <div className="w-20 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{skip.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{skip.description}</p>
                <p className="text-sm text-gray-500 mb-4">Holds approx. <strong>{skip.capacity}</strong></p>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-4">{skip.price}</p>
                  <a
                    href="tel:01159999999"
                    className="block w-full py-3 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors font-bold text-sm"
                  >
                    Book This Skip
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Prices are indicative and may vary depending on location, waste type, and hire duration. Call us for an accurate quote.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Hiring a skip is quick and easy</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get a Quote</h3>
              <p className="text-gray-600">
                Call us or fill in our contact form. Tell us what size skip you need and when you'd like it delivered.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">We Deliver</h3>
              <p className="text-gray-600">
                We'll drop your skip off at your chosen location, on your driveway or on the road with a permit.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">We Collect</h3>
              <p className="text-gray-600">
                Once you've filled it, give us a call and we'll come and collect it. We responsibly recycle the waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Don't just take our word for it</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section id="areas" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Areas We Cover</h2>
            <p className="text-lg text-gray-600">Serving Long Eaton and the surrounding Derbyshire & Nottinghamshire areas</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center space-x-1 bg-white px-4 py-2 rounded-full border border-gray-200 text-gray-700 text-sm hover:border-yellow-500 hover:text-gray-900 transition-colors"
              >
                <MapPin className="w-3 h-3 text-yellow-500" />
                <span>{area}</span>
              </span>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Don't see your area? Give us a call — we may still be able to help!
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Long Eaton Skips</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Long Eaton Skips is a family-run skip hire company proudly serving Long Eaton and the surrounding areas. We provide affordable, reliable skip hire for both domestic and commercial customers.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                As a fully licensed waste carrier, we take our environmental responsibilities seriously. We recycle up to 90% of all waste we collect, ensuring minimal impact on landfill sites.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you're clearing out a garage, renovating your home, or managing a construction site, we have the right skip at the right price. Our friendly team is always happy to help you choose the best option for your needs.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="text-2xl font-bold text-yellow-500">90%</p>
                  <p className="text-xs text-gray-600">Waste Recycled</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="text-2xl font-bold text-yellow-500">4-40</p>
                  <p className="text-xs text-gray-600">Yard Skips</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="text-2xl font-bold text-yellow-500">Same Day</p>
                  <p className="text-xs text-gray-600">Delivery</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-12 flex items-center justify-center">
              <div className="text-center text-gray-900">
                <Truck className="w-24 h-24 mx-auto mb-6 opacity-30" />
                <h3 className="text-2xl font-bold mb-2">Local & Trusted</h3>
                <p className="text-gray-800">Family-run business serving our community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Skip in Long Eaton?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get a free, no-obligation quote today. Same day and next day delivery available across Long Eaton and surrounding areas.
          </p>
          <a
            href="tel:01159999999"
            className="group inline-flex items-center space-x-2 px-10 py-4 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-all font-bold text-lg"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Call 0115 999 9999</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">We'd love to hear from you</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
              <a href="tel:01159999999" className="text-gray-600 hover:text-yellow-600 transition-colors">0115 999 9999</a>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:info@longeatonskips.co.uk" className="text-gray-600 hover:text-yellow-600 transition-colors">info@longeatonskips.co.uk</a>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Long Eaton,<br />Nottinghamshire</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Truck className="w-6 h-6 text-yellow-500" />
                <span className="text-lg font-bold text-white">Long Eaton Skips</span>
              </div>
              <p className="text-sm">Affordable, reliable skip hire serving Long Eaton and the surrounding areas.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#skip-sizes" className="hover:text-white transition-colors">Domestic Skip Hire</a></li>
                <li><a href="#skip-sizes" className="hover:text-white transition-colors">Commercial Skip Hire</a></li>
                <li><a href="#skip-sizes" className="hover:text-white transition-colors">Waste Removal</a></li>
                <li><a href="#skip-sizes" className="hover:text-white transition-colors">Recycling Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#areas" className="hover:text-white transition-colors">Areas Covered</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-yellow-500" />
                  <a href="tel:01159999999" className="hover:text-white transition-colors">0115 999 9999</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-yellow-500" />
                  <a href="mailto:info@longeatonskips.co.uk" className="hover:text-white transition-colors">info@longeatonskips.co.uk</a>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-yellow-500" />
                  <span>Long Eaton, Nottinghamshire</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Long Eaton Skips. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
