import { Icon } from '../components/Icon';

const skips = [
  {
    name: 'Mini Skip',
    yards: '2-3 Cubic Yards',
    description: 'Perfect for garden waste and small household decluttering projects. Fits comfortably on most driveways.',
    capacity: '~25-35 Black Bags',
    dimensions: '5ft L x 4ft W x 3ft H',
    price: '£145',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ0PZi7hcgq6po8uxFRgxHVgHG_JJdDMMUKtUx0jryI1IkNF2NI0VxVJ7mmlZ9OMDuRFsod7XCt4f1HFBjxs4kyXY80z1dJ4lVZkhXX_JLVg4HLu-WerbRkJzv5XD010_aR0M6GzBm84ctpE_hR0puGlcd-Bwlsf6kKST_N_2RGbeH89KJDCMrS1q5A2WyRxfiXHMnbjUeerBnGXA06emHdc3aHQIlkrdUgQ7pm4EEZ8L7N2r4Os65dsoBd357eK0HjxFfuiYtfLQ',
    popular: false,
  },
  {
    name: 'Midi Skip',
    yards: '4-5 Cubic Yards',
    description: 'The ideal choice for kitchen or bathroom refits. High capacity while remaining compact.',
    capacity: '~45-55 Black Bags',
    dimensions: '7ft L x 5ft W x 3ft H',
    price: '£195',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4eh94HVC30pV1iB49awJlvIZzpxiMCFY4172TZ2bHfsmnrTyyUIeZW1X70yC-L_rwfpj8sqPHXvDKzSAY8vYKMiCQlusJ_cjCd3CT6hutOKjUSVRnfnm1831nPskzjNVyGsTZeh46s_aNArWBrmsfJhEHgGBf3JwI3ZXZAsy14C1qF_yC_h3HqXK3j0TNOTM4gu4PYaa-GFShjyCmme0ix-D7li9G6rE7fuCmfurGSz6x12hDy0PNhLkKe3B5aZbqObEIbPpfHZM',
    popular: true,
  },
  {
    name: 'Builders Skip',
    yards: '8 Cubic Yards',
    description: "The heavy-duty standard. Perfect for construction waste, large clear-outs, and heavy soil or rubble.",
    capacity: '~80-90 Black Bags',
    dimensions: '12ft L x 6ft W x 4ft H',
    price: '£275',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiD_j9hPsv_rIns34RqjgzGq_PiR5Z0Ml6EicUN8on1GKJ6Vnz9sncuiyHpBC4FJo1dxEx_CncmmaAhkZaYXMeJV3B54nQiRcish5ESw1xa_czCj4sOTAvkNVGJ-No-uu1rbfx-Ymk3oEW4NO0c_wB-oKqlHh1HF9Q3eAKatBCVTlD9fQSyKwAQA4tDlXwIUbhp5-IqDJWfgN7uJHiTib8nhu1b9B5WwN6GAbcg8w-8LC0NH1wCJJq5uWoTiQ1jAEw58wOm9a9_L0',
    popular: false,
  },
];

export default function SkipSizes() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="mb-20 text-center md:text-left md:flex items-center justify-between gap-12">
        <div className="md:w-1/2">
          <span className="inline-block bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full font-bold text-[11px] uppercase tracking-widest mb-6">
            Local Service Specialists
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-primary leading-[0.9] mb-8">
            Choose the <span className="text-secondary">Right Fit</span> for
            your project.
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg">
            Whether it's a garden clear-out or a major renovation, we provide
            premium waste solutions with zero hidden costs. No VAT on all
            domestic skip hires.
          </p>
        </div>
        <div className="hidden md:block md:w-1/2 relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
          <img
            alt="Skip on residential driveway"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB97FB-gE0_Wt4hlma8m38N0h7fCcUDTu73s3JTOybB0nFcpBJiTxydv1qvbPgNp3uoPjNOG8KJ05zDwl6e9Kxun5iap31c8O_bNmkpiJLZPJImCo7rd68B8paMsOe-DNNR0yLMiv4pt8X2P-cVE3pFXbMFyF2eWRRBAiXe7pSSgYPsvA774PJZfT76ngdh1eVu09TwpZ0tiqBDkTemZ95FR7MvgwCHZgNW3_0PQS2d2zmpQxRinwiElGi5H5KXJUKLcDuFUcf8mk8"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
        </div>
      </section>

      {/* Skip Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skips.map((skip) => (
          <div
            key={skip.name}
            className={`bg-surface-container-lowest rounded-xl p-8 flex flex-col transition-all hover:translate-y-[-8px] hover:shadow-[0_20px_40px_rgba(21,66,18,0.06)] group relative overflow-hidden ${
              skip.popular ? 'border-4 border-primary-fixed hover:shadow-[0_20px_40px_rgba(21,66,18,0.1)]' : ''
            }`}
          >
            <div className="absolute top-0 right-0 bg-secondary px-6 py-2 rounded-bl-lg text-on-secondary font-bold text-xs">
              NO VAT
            </div>
            <div className="mb-6 h-48 rounded-lg overflow-hidden bg-surface-container">
              <img
                alt={skip.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={skip.image}
              />
            </div>
            {skip.popular && (
              <div className="mb-2">
                <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Most Popular
                </span>
              </div>
            )}
            <h3 className="text-3xl font-extrabold tracking-tight text-primary mb-2">
              {skip.name}
            </h3>
            <p className="text-secondary font-semibold mb-6">{skip.yards}</p>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              {skip.description}
            </p>
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-center gap-3 text-on-surface">
                <Icon name="shopping_bag" className="text-primary" />
                <span className="font-medium">Capacity: {skip.capacity}</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface">
                <Icon name="straighten" className="text-primary" />
                <span className="font-medium">Dimensions: {skip.dimensions}</span>
              </div>
            </div>
            <div className="pt-6 border-t border-surface-container-high">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-primary">{skip.price}</span>
                <span className="text-on-surface-variant font-bold text-sm">TOTAL</span>
              </div>
              <a
                href="http://zipskips.co.uk/?location=long-eaton"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-4 rounded-full font-bold text-sm tracking-wide active:scale-95 transition-all text-center ${
                  skip.popular
                    ? 'bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-lg'
                    : 'bg-primary text-on-primary'
                }`}
              >
                Select Size
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Help Section */}
      <section className="mt-32 p-12 bg-surface-container rounded-xl flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 text-center md:text-left">
          <Icon name="question_mark" className="text-6xl text-primary mb-4" />
          <h2 className="text-3xl font-extrabold text-primary tracking-tight">
            Unsure what you need?
          </h2>
        </div>
        <div className="md:w-2/3">
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
            Choosing the right skip size can save you time and money. If you're
            filling it with heavy materials like soil or concrete, we recommend
            the 8-yard Builders Skip for its structural integrity.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:07782222906" className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-transform active:scale-90">
              <Icon name="call" />
              Speak to an Expert
            </a>
            <a href="https://wa.me/447858797922" className="bg-tertiary-container text-tertiary-fixed px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-transform active:scale-90">
              <Icon name="chat" />
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
