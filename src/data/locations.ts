export interface LocationData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  areas: string[];
  postcodes: string[];
  faqs: { q: string; a: string }[];
}

export const locations: Record<string, LocationData> = {
  'long-eaton': {
    slug: 'long-eaton',
    name: 'Long Eaton',
    metaTitle: 'Skip Hire Long Eaton | From £326 | No VAT | Local Delivery',
    metaDescription: 'Local skip hire in Long Eaton from £326 inc. delivery. No VAT — save 20%. 5, 8 & 12 yard skips for domestic & commercial projects. Covering NG10, Sawley, Sandiacre & Breaston.',
    heroDescription: 'Family-run skip hire serving Long Eaton and surrounding areas. Competitive prices with no VAT on domestic hires. 5-yard, 8-yard, and 12-yard skips available for your project.',
    areas: ['Sawley', 'Sandiacre', 'Breaston', 'Toton', 'Chilwell', 'Attenborough'],
    postcodes: ['NG10', 'NG9'],
    faqs: [
      { q: 'How much is skip hire in Long Eaton?', a: 'Our skip hire prices in Long Eaton start from £326 for a 5-yard skip including delivery. As a no-VAT business, you save 20% compared to VAT-registered competitors. Call us for an exact quote.' },
      { q: 'Do you deliver skips to all parts of Long Eaton?', a: 'Yes, we cover the entire Long Eaton area including Sawley, Sandiacre, and Breaston. We also deliver to surrounding NG10 and NG9 postcodes.' },
      { q: 'Can I get a skip on my driveway in Long Eaton?', a: 'Yes. Most of our deliveries are to private driveways. If you need the skip on the road, we can arrange a council permit for you.' },
      { q: 'What skip sizes are available in Long Eaton?', a: 'We offer 5-yard skips, 8-yard builders skips, and 12-yard large skips. We also offer grab hire, wait and load, and rubbish clearance services.' },
    ],
  },
  'nottingham': {
    slug: 'nottingham',
    name: 'Nottingham',
    metaTitle: 'Skip Hire Nottingham | From £326 | No VAT | Reliable Service',
    metaDescription: 'Skip hire in Nottingham from £326 inc. delivery. No VAT on domestic hires — save 20%. Covering Beeston, West Bridgford, Arnold, Carlton & all NG postcodes.',
    heroDescription: 'Affordable skip hire across Nottingham and surrounding areas. No VAT on all domestic hires means you save 20% instantly. Professional, reliable service from a trusted local company.',
    areas: ['Beeston', 'West Bridgford', 'Arnold', 'Carlton', 'Bulwell', 'Gedling'],
    postcodes: ['NG1', 'NG2', 'NG3', 'NG5', 'NG7', 'NG9'],
    faqs: [
      { q: 'How much is skip hire in Nottingham?', a: 'Skip hire in Nottingham starts from £326 for a 5-yard skip including delivery. We do not charge VAT, saving you 20% compared to most competitors in the Nottingham area.' },
      { q: 'Which areas of Nottingham do you cover?', a: 'We cover the whole of Nottingham including Beeston, West Bridgford, Arnold, Carlton, Bulwell, and Gedling. Contact us to confirm delivery to your specific postcode.' },
      { q: 'Do I need a permit for a skip in Nottingham?', a: 'Only if the skip is placed on a public road. If it goes on your private driveway, no permit is needed. We can arrange Nottingham City Council permits if required.' },
      { q: 'Can you deliver to Nottingham city centre?', a: 'Yes, we deliver to all areas of Nottingham including the city centre. For city centre locations, we may need to discuss access and any parking restrictions.' },
    ],
  },
  'derby': {
    slug: 'derby',
    name: 'Derby',
    metaTitle: 'Skip Hire Derby | From £326 | No VAT | Fast Delivery',
    metaDescription: 'Skip hire in Derby from £326 inc. delivery. No VAT — save 20% on domestic hires. Covering Spondon, Chellaston, Allestree, Mickleover & all DE postcodes.',
    heroDescription: 'Quality skip hire in Derby with no VAT on domestic hires. Save 20% on every booking. Local, reliable service with flexible scheduling to suit your project needs.',
    areas: ['Spondon', 'Chaddesden', 'Chellaston', 'Allestree', 'Mickleover', 'Littleover'],
    postcodes: ['DE1', 'DE21', 'DE22', 'DE23', 'DE24', 'DE72'],
    faqs: [
      { q: 'How much is skip hire in Derby?', a: 'Our skip hire prices in Derby start from £326 for a 5-yard skip including delivery, with no VAT added. This saves you 20% compared to VAT-registered skip hire companies in the Derby area.' },
      { q: 'Which parts of Derby do you serve?', a: 'We deliver skips across Derby including Spondon, Chaddesden, Chellaston, Allestree, Mickleover, and Littleover. We also cover surrounding DE postcodes.' },
      { q: 'Do you need a permit for a skip in Derby?', a: 'A permit is only required if the skip is placed on a public highway. Driveways do not need a permit. We can handle Derby City Council permit applications for you.' },
      { q: 'What waste can I put in a skip in Derby?', a: 'Standard household, garden, and construction waste is accepted. We cannot accept hazardous materials including asbestos, batteries, gas cylinders, paint, or tyres.' },
    ],
  },
};
