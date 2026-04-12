import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon';

const skipSizes = [
  {
    name: '2 Yard Mini Skip',
    description: 'Ideal for 25-35 black bags. Perfect for garden waste and small home tasks.',
    price: '£95.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJObV-YAuw3Inp_uJ0AOh_eViakQ_G2e5vxZpSiy2P_SyiPFo9lV_dnX9626Jm0qh1_gDd77xQslf_2kIr2Xn8KQ3YwLcCP-OLR8RwIB7ij22TbS_u3n-ZDOiwCIUSbK7H_9oIZoAH6UdM0LS6kFWQTyN75U56VvSt3MVPbkCrUnIbAQwT0CnyXYX_ooxYjK5KYvgkQQYIcdDNJKEu26x3wpnfT1KOcQSZp4bvRNg0UhV2sdwlfvwsQAN2E3Ze4OIu0oGOzFFd5NU',
    popular: false,
  },
  {
    name: '4 Yard Midi Skip',
    description: 'Holds roughly 45-55 black bags. Great for bathroom or kitchen refits.',
    price: '£145.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkGslMFdmXWbKpbeFdBCUuroft6cee1TMZCXOb88ltS4m-mZADosNZnDLIWKfTDr6ed23CJs47_orDw8BgsDBj7zlRzf1maqnR7QFG7Pli_a3PUbesbbpaR7p-SW_-_SRsReyyGb58PUsVTNdm2PivLh1h4cT7zPhdpfzmoPCwmFdOHLWnmQ7Sik9nMBRQtB4U0We9ETZqDBUr3_pK5cy-DntdT5Qc1DDDu06rOqJduRctJdTk-lKGRQ4UlkjyLapUsf3v8EM1Zdc',
    popular: true,
  },
  {
    name: '8 Yard Builders Skip',
    description: 'Holds about 80-90 black bags. The heavy-duty choice for construction.',
    price: '£220.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtRFoDR0mNogxg7U5c-nU6jKzE74sgrf6MEopvFx2QtXgSFysyKYoErtAxCLYlLqWbyPJfNv3JoY3ntgex8NofGVfPkDCS2ylr2xs0_E0ty4FBVptRr63yCTXtpp_avJOv5lJChjEZH0ksO-TbfIBKLdF3PjbL1fzLZ_tZPe8T5yEOMibqNGsLDkVrsmfPB3-lf7XS5xn071ruB8eKh1_gLRIrRC6vxJ9UxjKBmdOSbi4IPxcvPvtOCfAxFIpuKj7lnbvrqDcBuwU',
    popular: false,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-container/10 text-primary font-bold rounded-full text-xs mb-6">
              <Icon name="verified" className="text-sm" />
              THE MODERN NEIGHBOR SERVICE
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-6 leading-[1.1]">
              Affordable Skip Hire in{' '}
              <span className="text-primary">Long Eaton</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg">
              Professional, reliable, and{' '}
              <span className="font-bold text-primary">NO VAT</span> on all
              domestic skips. Local service with digital prestige.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/skips"
                className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-bold text-lg shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                Book Online
                <Icon name="arrow_forward" />
              </Link>
              <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-bold text-lg active:scale-95 transition-all flex items-center justify-center gap-2">
                <Icon name="call" />
                Call Now
              </button>
              <button className="bg-tertiary-container text-tertiary-fixed px-8 py-4 rounded-full font-bold text-lg active:scale-95 transition-all flex items-center justify-center gap-2">
                <Icon name="chat" />
                WhatsApp
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-fixed/30 rounded-full blur-3xl -z-10" />
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                alt="Commercial skip on a clean driveway"
                className="w-full h-[500px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIXa0r3K3Bd5OEN3zP-GWtVTffiINcGYv8SzJWEF1SRrOwJVprrKOKa9ShC946beUFIT3GMTiJS6BzeV9r5J4PtsISK_WoihUz3M8wohkuaTcNc_EW5uXoPDyj3SxAOH2H5kLoYjAvxRIQrOu4cKLe13m8RArNusoVs1zFn1QBWsvA-57XqZOvtapuEVztpA_Zmr8vVj5Y3Jmckifdy38-VonTQr03kEUq2nEbu1aCWUI3hVdJaKJKc6uhfyiw1Otr54pyf3cxo3M"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary text-on-secondary p-8 rounded-xl shadow-xl transform -rotate-3">
              <div className="text-4xl font-black tracking-tighter">NO VAT</div>
              <div className="text-xs font-bold tracking-widest uppercase opacity-80 mt-1">
                Domestic Savings
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Benefits Bento Grid */}
      <section className="py-24 bg-surface-container-low px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">
                Why Neighbors Trust Us
              </h2>
              <p className="text-on-surface-variant">
                The local standard for waste management
              </p>
            </div>
            <div className="h-1 w-24 bg-primary rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/10 flex flex-col gap-6">
              <div className="w-14 h-14 bg-primary-fixed flex items-center justify-center rounded-lg">
                <Icon name="electric_bolt" className="text-primary text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Same Day Delivery</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Book before 10am and we'll have your skip delivered by the
                  afternoon. Speed without the stress.
                </p>
              </div>
            </div>
            <div className="bg-primary text-on-primary p-8 rounded-lg shadow-sm flex flex-col gap-6 transform md:-translate-y-4">
              <div className="w-14 h-14 bg-primary-container flex items-center justify-center rounded-lg">
                <Icon name="eco" className="text-on-primary-container text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-on-primary">
                  Eco-Friendly Disposal
                </h3>
                <p className="text-on-primary/80 leading-relaxed">
                  We recycle up to 95% of all waste collected. Sustainable
                  service that cares for Long Eaton's future.
                </p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/10 flex flex-col gap-6">
              <div className="w-14 h-14 bg-secondary-fixed flex items-center justify-center rounded-lg">
                <Icon name="savings" className="text-secondary text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Zero VAT Added</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  The price you see is the price you pay. No hidden taxes or
                  surcharges for any domestic skip hire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skip Sizes */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            Our Inventory
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-2 mb-6">
            Choose Your Size
          </h2>
          <p className="max-w-2xl mx-auto text-on-surface-variant text-lg">
            From garden clear-outs to major renovations, we have the perfect
            capacity for your project.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skipSizes.map((skip) => (
            <div key={skip.name} className="group">
              <div className="relative bg-surface-container rounded-xl overflow-hidden mb-6 aspect-square flex items-center justify-center p-8">
                <img
                  alt={skip.name}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  src={skip.image}
                />
                <div className="absolute top-4 right-4 bg-secondary text-on-secondary px-4 py-1 rounded-full text-xs font-black">
                  NO VAT
                </div>
                {skip.popular && (
                  <div className="absolute top-4 left-4 bg-primary text-on-primary px-4 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-2">{skip.name}</h3>
              <p className="text-on-surface-variant mb-4">{skip.description}</p>
              <div className="text-3xl font-black text-primary">
                {skip.price}{' '}
                <span className="text-sm font-normal text-on-surface-variant">
                  flat rate
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
