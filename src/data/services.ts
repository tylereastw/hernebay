export interface ServiceData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTag: string;
  heroHeading: string;
  heroHighlight: string;
  heroDescription: string;
  heroImage: string;
  benefits: { icon: string; title: string; description: string }[];
  details: { heading: string; description: string; stats: { value: string; label: string }[] };
  faqs: { q: string; a: string }[];
}

export const services: Record<string, ServiceData> = {
  'grab-hire': {
    slug: 'grab-hire',
    title: 'Grab Hire',
    metaTitle: 'Grab Hire Herne Bay | Grab Lorry Service | No VAT',
    metaDescription: 'Grab hire in Herne Bay — no skip needed. Our grab lorry collects soil, rubble & green waste directly from your site. No permit required, no VAT. Call today.',
    heroTag: 'Grab Lorry Service',
    heroHeading: 'Grab Hire.',
    heroHighlight: 'No Skips Needed.',
    heroDescription: 'Our grab lorry collects loose waste directly from your site. Ideal for soil, rubble, concrete, and green waste. No skip permit required — we load and go.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWGWn0xyMgjqkU48PhZzgTg2IkngjQMk1b0BEDne-2coDX8X5PLAPwHjCY_OO4Osa4hEpGF_YF9KCjCj2dVkXOuFLirzY7OBNaoaDVnYvt0ujT9uDV8jmzM38rq5pu1alWTPy6E5lGm9SFg51WKcHhdrOlIzvDapdL3lEYfLycALL0l-IJUnGvLM05Kwl83A0eLp2Wk49VBRkdyyUUtqymwynerjI5BwppwMO2_Re95iFhkKitsA_h0u_ycNO1k0R21eEni90iUas',
    benefits: [
      { icon: 'front_loader', title: 'No Skip Required', description: 'Our grab lorry reaches over walls and fences to collect waste directly — no need to hire a skip or get a permit.' },
      { icon: 'speed', title: 'Fast Turnaround', description: 'Most grab hire jobs are completed within a single visit. We arrive, load up, and leave your site clear.' },
      { icon: 'savings', title: 'Cost Effective', description: 'Grab hire is often cheaper than skip hire for large volumes of loose material like soil, rubble, or green waste.' },
    ],
    details: {
      heading: 'How Grab Hire Works',
      description: 'Our grab lorry uses a hydraulic arm to reach up to 6 metres, collecting loose waste from hard-to-access areas. No manual loading needed — we do the heavy lifting.',
      stats: [{ value: '6m', label: 'Reach Distance' }, { value: '16t', label: 'Load Capacity' }],
    },
    faqs: [
      { q: 'What is grab hire?', a: 'Grab hire uses a lorry fitted with a hydraulic grab arm to collect loose waste materials directly from your property. No skip is left on site — we load and remove waste in a single visit.' },
      { q: 'What materials can you collect?', a: 'We can collect soil, rubble, concrete, bricks, green waste, mixed waste, and hardcore. We cannot collect hazardous materials such as asbestos or chemicals.' },
      { q: 'Do I need a permit for grab hire?', a: 'No. Because no skip is placed on the road, no council permit is required. The grab lorry parks briefly while we load your waste.' },
      { q: 'How much waste can a grab lorry carry?', a: 'Our grab lorry can carry up to 16 tonnes per load, equivalent to roughly 8-10 cubic yards of material.' },
    ],
  },
  'wait-and-load-skip-hire': {
    slug: 'wait-and-load-skip-hire',
    title: 'Wait & Load Skip Hire',
    metaTitle: 'Wait and Load Skip Hire Herne Bay | No Permit Needed | No VAT',
    metaDescription: 'Wait and load skip hire in Herne Bay. We bring the skip, wait while you load, and take it away — no permit needed. No VAT on domestic hires. Book today.',
    heroTag: 'Wait & Load Service',
    heroHeading: 'Wait & Load.',
    heroHighlight: 'No Permit. No Fuss.',
    heroDescription: 'We bring the skip, wait while you load it, and take it away immediately. No permit needed because the skip never touches the ground. Perfect for quick clearances.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATTMAKflCsRpoM_J33CgziooulSi78L0Go8ZP9APr180iKyJtCYNyaOQwX6X6vceCGY7aOUtxHEUt7s6koE4QSr8CuAjPgOar6VJIWSlB5796hR2ELtDtQCMgr-BrTne0RE2Bqfl8umS-PGZXa7VPrw6kCVYyECzxSoskpqheAeaCR3bLZPG1MXjAq24HBytj1PSxkzXcZXqW_snstG1iXSiBQTsVEnRY8qSD758ws_l28J9qMOgTYRRwCkEw4DaFj8ZTS34U_-Js',
    benefits: [
      { icon: 'timer', title: 'We Wait For You', description: 'Our driver stays on site while you fill the skip at your own pace. Typically 30-60 minutes depending on the job.' },
      { icon: 'block', title: 'No Permit Needed', description: 'Because the skip stays on the lorry and never touches the road, no council permit is required. Zero paperwork.' },
      { icon: 'bolt', title: 'Same-Visit Removal', description: 'Everything is done in one visit — delivery, loading, and removal. Your waste is gone the same day, guaranteed.' },
    ],
    details: {
      heading: 'Why Choose Wait & Load?',
      description: "Wait and load is the perfect solution when you can't leave a skip on site, have restricted access, or simply want waste gone immediately without the hassle of permits.",
      stats: [{ value: '0', label: 'Permits Needed' }, { value: '1hr', label: 'Typical Visit' }],
    },
    faqs: [
      { q: 'How long will the driver wait?', a: 'Our standard wait time is up to 1 hour. If you need longer, let us know when booking and we can accommodate most requests.' },
      { q: 'What size skip do you bring?', a: 'We typically use 8-yard or 12-yard skips for wait and load services. Let us know your requirements and we can advise the best size.' },
      { q: 'Is wait and load more expensive than regular skip hire?', a: 'It can be slightly more due to the driver waiting on site, but you save on permit costs and get immediate removal. For many customers, the convenience is well worth it.' },
      { q: 'Can I use wait and load for heavy materials?', a: 'Yes, wait and load is suitable for all standard waste types including rubble, soil, and construction waste. The same weight restrictions apply as regular skip hire.' },
    ],
  },
  'commercial-skip-hire': {
    slug: 'commercial-skip-hire',
    title: 'Commercial Skip Hire',
    metaTitle: 'Commercial Skip Hire Herne Bay | Trade & Business Waste | No VAT',
    metaDescription: 'Commercial skip hire for builders, contractors & businesses in Herne Bay. Trade accounts, regular collections, all sizes available. No VAT on domestic hires.',
    heroTag: 'Trade & Business Waste',
    heroHeading: 'Commercial Skip Hire.',
    heroHighlight: 'Built for Business.',
    heroDescription: 'Reliable waste management for construction sites, trade projects, and commercial premises across Herne Bay and surrounding areas. Regular collections available.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEPpL8--7fPSknz5h_sV7Slg4CppjWvWfnPSNJrBaVdQvfj5TKEpCmiHIPRJJSmVegnYF38wAEBg3fPNZjgCmv4o1GtXTt7j3wQgiY1_v9Dw7ReNHsGB4Ws6B7A-tmiV7h3lytuL3dBJ6hlyjnLifVbY0Lvgs2Ywlx7cnPGyGRf2u5li8SpLaGPoEakLy4bv2UiuqZlRQwOhz5DIC8hcm1xr5SQHutI5PgSXlUarovZJR5xy1u241gS5i23PlBzkXCPIPFUK2s2t0',
    benefits: [
      { icon: 'business', title: 'Trade Accounts', description: 'Set up a trade account for regular collections with simplified invoicing. Ideal for builders and contractors working across multiple sites.' },
      { icon: 'autorenew', title: 'Regular Collections', description: 'Schedule recurring skip deliveries and collections to keep your site compliant and clutter-free throughout your project.' },
      { icon: 'straighten', title: 'All Sizes Available', description: 'From 5-yard skips for medium jobs to 12-yard large skips for major construction projects. We have every size covered.' },
    ],
    details: {
      heading: 'Waste Management for Professionals',
      description: 'We understand the demands of commercial waste. Our fleet is equipped to handle construction debris, office clearances, and industrial waste with the reliability your business needs.',
      stats: [{ value: '2-12', label: 'Yard Range' }, { value: '24h', label: 'Rapid Response' }],
    },
    faqs: [
      { q: 'Do you offer trade accounts?', a: 'Yes. We offer trade accounts for regular customers with monthly invoicing, priority booking, and competitive rates. Call us to set one up.' },
      { q: 'Can you handle construction waste?', a: 'Absolutely. Our skips are suitable for all standard construction materials including timber, plasterboard, bricks, concrete, metal, and mixed demolition waste.' },
      { q: 'Do you provide waste transfer notes?', a: 'Yes. As a licensed waste carrier, we provide full waste transfer documentation for every collection, ensuring your business stays compliant.' },
      { q: 'Can you place skips on construction sites?', a: "Yes, we regularly deliver to construction sites. We just need to ensure safe access for our vehicles. We'll discuss positioning when you book." },
    ],
  },
  'rubbish-clearance': {
    slug: 'rubbish-clearance',
    title: 'Rubbish Clearance',
    metaTitle: 'Rubbish Clearance Herne Bay | House & Garden Clearance | No VAT',
    metaDescription: 'Professional rubbish clearance in Herne Bay. We handle house clearances, garden clearances & general waste removal. Full labour included, no VAT. Get a free quote.',
    heroTag: 'Full Clearance Service',
    heroHeading: 'Rubbish Clearance.',
    heroHighlight: 'We Do The Lifting.',
    heroDescription: "Don't want to load a skip yourself? Our rubbish clearance team handles everything. We come to your property, clear the waste, and leave your space spotless.",
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQCLcrkNNtkzgqleorBi23CRQOTEyFSPjX6YR8j654aMFJXjO_-wpjIZwdltI_mW7sjNUl-cwaYQa9sodVUr_ku-NeT8OgKlyx-yXm41vLpN3-T8x7x-UnLQFNhn_XLZs68CAgNA-mWNwWg7H66k1JjhoHpnwD71Cb_ZsmtKCCoF-hy1iR7N847v_HFZboqwn_iRa28okIYnE0nGNjfbKgOsvxnZhaDNjScdCIVWvZuJCIqCrHNjTReuBT_IgDywryY4Hq5C7U2Y0',
    benefits: [
      { icon: 'group', title: 'Full Labour Included', description: "Our team does all the heavy lifting. You don't need to touch a thing — just point us to the rubbish and we handle the rest." },
      { icon: 'home', title: 'House Clearances', description: 'Moving home, dealing with a probate, or just decluttering? We clear entire houses, garages, lofts, and sheds efficiently.' },
      { icon: 'yard', title: 'Garden Clearances', description: 'Overgrown gardens, old sheds, fencing, and green waste. We clear it all and leave your outdoor space ready for its next chapter.' },
    ],
    details: {
      heading: 'Complete Clearance, Zero Hassle',
      description: "From single rooms to entire properties, our clearance team works quickly and respectfully. We sort, load, and dispose of everything responsibly so you don't have to.",
      stats: [{ value: '0', label: 'Lifting By You' }, { value: '20%', label: 'VAT Savings' }],
    },
    faqs: [
      { q: 'What do you clear?', a: 'We clear household furniture, appliances, garden waste, shed contents, garage clearances, loft clearances, and general rubbish. We cannot clear hazardous waste or asbestos.' },
      { q: 'How much does rubbish clearance cost?', a: 'Pricing depends on the volume and type of waste. We offer free, no-obligation quotes — just call or WhatsApp us with some photos and we will give you an accurate price.' },
      { q: 'Do I need to be present?', a: "Ideally yes, at least at the start to show us what needs clearing. However, we can arrange key collection or access if you can't be there." },
      { q: 'How quickly can you come?', a: 'We aim to schedule clearances within a few days of booking. For urgent jobs, contact us and we will do our best to accommodate your timeline.' },
    ],
  },
};
