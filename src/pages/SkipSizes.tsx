import { Icon } from '../components/Icon';

const skips = [
  {
    spec: '02-YARD',
    label: 'MINI SKIP',
    yards: 2,
    price: '£120.00',
    barWidth: 'w-1/4',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1bYOUd23_ZATSCKpBBS6y8aD6s-gGORk3iv20zvcDwpvLM39XQCllk4m2sqG3BxNMK50f3q5S67riKW-3v5kygnWWRRO_7Ur5tyverIElj8WAob0t0Z_CYxpHs2_WQnaMZpPO18vnmTMKGHGQ16aHiQ2b0jlVdFpATcEHQJut4aD9ioKpOtHOq6z_UbC1fPI_fs8ZSaZ36kjT__AAfLHD68_-pjJjkGXiTJNd9_Xnob-6D-q2xvcJ0iTi0MqbA9naD1781wkdQQY',
    features: [
      { icon: 'inventory_2', text: 'Holds 20-30 Black Bags' },
      { icon: 'drive_eta', text: 'Fits on most driveways' },
      { icon: 'square_foot', text: 'L: 1.2m | W: 0.9m | H: 0.9m', muted: true },
    ],
    popular: false,
  },
  {
    spec: '04-YARD',
    label: 'MIDI SKIP',
    yards: 4,
    price: '£180.00',
    barWidth: 'w-2/4',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCbaBdag-hmiQ-Xd-7GkFcvxJBUV34JpJmvrunK_JbZxUAAkoRXvGUWKR4SeX0GXhtFKmN26yA_bZzR6DuON7b8Re0Y8AEXi7d9kirlCV26buhY80Xpk0Yzh2cVhtpwS_3FbOJnGRaERBbrgVbXxYModBpm1c0TYB0VYAWr4YhS9pyv-ty_mw2j6qlHUHVq6Tx7_nriU7Z5PZuuVMNsN_B_OHrB-xKo5O8qgx0oG4Gv_ciswxDsWDUyrxN9YXV_ZRM7IgoileyLqd0',
    features: [
      { icon: 'inventory_2', text: 'Holds 30-40 Black Bags' },
      { icon: 'home_work', text: 'Ideal for Bathroom refits' },
      { icon: 'square_foot', text: 'L: 1.8m | W: 1.2m | H: 1.0m', muted: true },
    ],
    popular: true,
  },
  {
    spec: '08-YARD',
    label: 'BUILDERS SKIP',
    yards: 8,
    price: '£260.00',
    barWidth: 'w-full',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB0zfO1WSFRE3wfqiZEYD8ZqLk016QyeZUcaszkFZHJrik4ZvjLsK4q97HbamwQp2NWAucK5pifcqp39HRBT1QtJqaxB-U-4hV9gEhSm0GbWjZEbREvSYAC4jpLPvNNVqzwpqBpvCgCKDUOOBDN9lqm5w3ABj9PeVajtkBjpaGUyLWvjcq1w5ue1q4F2N3fa8jTWfsB1onK90npQfHPJOVn14lRNw-G0EZwx5CtTlQcGbKnrT3zb2304nd-h5fJiYfMG4senR87QbM',
    features: [
      { icon: 'inventory_2', text: 'Holds 60-80 Black Bags' },
      { icon: 'construction', text: 'Heavy inert waste / Soil' },
      { icon: 'square_foot', text: 'L: 3.6m | W: 1.7m | H: 1.2m', muted: true },
    ],
    popular: false,
  },
];

export default function SkipSizes() {
  return (
    <main className="pt-24 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen relative">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 blueprint-grid-dot pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 mb-12 border-l-4 border-primary pl-6">
        <p className="font-label text-surface-tint font-bold tracking-widest text-xs mb-2">
          PROJECT PARAMETERS
        </p>
        <h1 className="font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter text-primary">
          Select Your Project Scale.
        </h1>
        <p className="font-body text-on-surface-variant max-w-2xl mt-4 text-lg">
          Technical specifications for residential and commercial waste
          management. No hidden fees. No VAT added at checkout.
        </p>
      </div>

      {/* Skip Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mb-12">
        {skips.map((skip) => (
          <div
            key={skip.spec}
            className="bg-surface-container-lowest border-2 border-primary flex flex-col group relative"
          >
            {skip.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-surface-tint text-on-primary px-4 py-1 text-[10px] font-label font-bold tracking-widest uppercase z-20">
                MOST POPULAR
              </div>
            )}

            {/* Price Header */}
            <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
              <span className="font-label font-bold text-sm tracking-widest uppercase">
                SPEC: {skip.spec}
              </span>
              <span className="text-surface-tint font-black font-headline text-xl">
                {skip.price}
              </span>
            </div>

            {/* Image */}
            <div className="relative aspect-video overflow-hidden border-b border-primary">
              <img
                alt={skip.label}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                src={skip.image}
              />
              <div className="absolute bottom-2 left-2 bg-primary text-white text-[10px] px-2 py-1 font-label uppercase tracking-widest">
                {skip.label}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow">
              {/* Capacity Bar */}
              <div className="mb-6">
                <div className="flex items-end gap-2 mb-1">
                  <span className="font-headline font-black text-3xl">
                    {skip.yards}
                  </span>
                  <span className="font-label text-sm text-on-surface-variant mb-1 uppercase tracking-tighter">
                    Cubic Yards
                  </span>
                </div>
                <div className="w-full h-1.5 bg-surface-container-high relative overflow-hidden">
                  <div
                    className={`absolute left-0 top-0 h-full bg-primary ${skip.barWidth}`}
                  />
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {skip.features.map((feat) => (
                  <li
                    key={feat.icon + feat.text}
                    className="flex items-center gap-3 border-b border-outline-variant pb-2"
                  >
                    <Icon name={feat.icon} className="text-xs" />
                    <span
                      className={`font-label text-xs uppercase font-bold ${
                        feat.muted ? 'text-on-surface-variant' : ''
                      }`}
                    >
                      {feat.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Actions */}
              <div className="flex flex-col gap-2">
                <button className="w-full py-3 bg-primary text-on-primary font-label font-bold uppercase tracking-widest hover:bg-surface-tint transition-colors border border-primary">
                  Book Online
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button className="py-2 border border-primary flex items-center justify-center gap-2 font-label text-xs font-bold uppercase hover:bg-surface-container-high transition-colors">
                    <Icon name="chat" className="text-sm" /> WhatsApp
                  </button>
                  <button className="py-2 border border-primary flex items-center justify-center gap-2 font-label text-xs font-bold uppercase hover:bg-surface-container-high transition-colors">
                    <Icon name="call" className="text-sm" /> Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Technical Footer Note */}
      <div className="border-t-2 border-primary pt-8 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="max-w-md">
          <h3 className="font-headline font-bold text-lg uppercase tracking-tighter mb-2">
            Permit Requirements
          </h3>
          <p className="font-body text-sm text-on-surface-variant">
            If your skip is to be placed on a public highway, a permit from the
            local council is required. We handle all paperwork for a flat fee.
            Private driveways do not require permits.
          </p>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <span className="font-label text-[10px] uppercase font-black text-outline">
            System Status: Active
          </span>
          <span className="font-label text-[10px] uppercase font-black text-surface-tint">
            Pricing Model: NO VAT APPLIED
          </span>
        </div>
      </div>
    </main>
  );
}
