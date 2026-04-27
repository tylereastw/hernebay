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
  'herne-bay': {
    slug: 'herne-bay',
    name: 'Herne Bay',
    metaTitle: 'Skip Hire Herne Bay | From £326 | No VAT | Local Delivery',
    metaDescription: 'Local skip hire in Herne Bay from £326 inc. delivery. No VAT — save 20%. 5, 8 & 12 yard skips for domestic & commercial projects. Covering CT6, Beltinge, Greenhill & Reculver.',
    heroDescription: 'Family-run skip hire serving Herne Bay and surrounding areas. Competitive prices with no VAT on domestic hires. 5-yard, 8-yard, and 12-yard skips available for your project.',
    areas: ['Beltinge', 'Greenhill', 'Studd Hill', 'Hampton', 'Reculver', 'Broomfield', 'Bishopstone', 'Eddington'],
    postcodes: ['CT6'],
    faqs: [
      { q: 'How much is skip hire in Herne Bay?', a: 'Our skip hire prices in Herne Bay start from £326 for a 5-yard skip including delivery. As a no-VAT business, you save 20% compared to VAT-registered competitors. Call us for an exact quote.' },
      { q: 'Do you deliver skips to all parts of Herne Bay?', a: 'Yes, we cover the entire Herne Bay area including Beltinge, Greenhill, Hampton, Studd Hill, and Reculver. We also deliver to surrounding CT6 postcodes.' },
      { q: 'Can I get a skip on my driveway in Herne Bay?', a: 'Yes. Most of our deliveries are to private driveways. If you need the skip on the road, we can arrange a Canterbury City Council permit for you.' },
      { q: 'What skip sizes are available in Herne Bay?', a: 'We offer 5-yard skips, 8-yard builders skips, and 12-yard large skips. We also offer grab hire, wait and load, and rubbish clearance services.' },
    ],
  },
  'whitstable': {
    slug: 'whitstable',
    name: 'Whitstable',
    metaTitle: 'Skip Hire Whitstable | From £326 | No VAT | Reliable Service',
    metaDescription: 'Skip hire in Whitstable from £326 inc. delivery. No VAT on domestic hires — save 20%. Covering Tankerton, Chestfield, Swalecliffe, Seasalter & all CT5 postcodes.',
    heroDescription: 'Affordable skip hire across Whitstable and surrounding areas. No VAT on all domestic hires means you save 20% instantly. Professional, reliable service from a trusted local company.',
    areas: ['Tankerton', 'Chestfield', 'Swalecliffe', 'Seasalter', 'Yorkletts', 'South Street'],
    postcodes: ['CT5'],
    faqs: [
      { q: 'How much is skip hire in Whitstable?', a: 'Skip hire in Whitstable starts from £326 for a 5-yard skip including delivery. We do not charge VAT, saving you 20% compared to most competitors in the Whitstable area.' },
      { q: 'Which areas of Whitstable do you cover?', a: 'We cover the whole of Whitstable including Tankerton, Chestfield, Swalecliffe, Seasalter, and Yorkletts. Contact us to confirm delivery to your specific postcode.' },
      { q: 'Do I need a permit for a skip in Whitstable?', a: 'Only if the skip is placed on a public road. If it goes on your private driveway, no permit is needed. We can arrange Canterbury City Council permits if required.' },
      { q: 'Can you deliver to Whitstable harbour and town centre?', a: 'Yes, we deliver to all areas of Whitstable including the harbour and high street. For town centre locations, we may need to discuss access and any parking restrictions.' },
    ],
  },
  'canterbury': {
    slug: 'canterbury',
    name: 'Canterbury',
    metaTitle: 'Skip Hire Canterbury | From £326 | No VAT | Fast Delivery',
    metaDescription: 'Skip hire in Canterbury from £326 inc. delivery. No VAT — save 20% on domestic hires. Covering Sturry, Fordwich, Blean, Wincheap & all CT1–CT4 postcodes.',
    heroDescription: 'Quality skip hire in Canterbury with no VAT on domestic hires. Save 20% on every booking. Local, reliable service with flexible scheduling to suit your project needs.',
    areas: ['Sturry', 'Fordwich', 'Tyler Hill', 'Blean', 'Rough Common', 'Wincheap'],
    postcodes: ['CT1', 'CT2', 'CT3', 'CT4'],
    faqs: [
      { q: 'How much is skip hire in Canterbury?', a: 'Our skip hire prices in Canterbury start from £326 for a 5-yard skip including delivery, with no VAT added. This saves you 20% compared to VAT-registered skip hire companies in the Canterbury area.' },
      { q: 'Which parts of Canterbury do you serve?', a: 'We deliver skips across Canterbury including Sturry, Fordwich, Tyler Hill, Blean, Rough Common, and Wincheap. We also cover surrounding CT postcodes.' },
      { q: 'Do you need a permit for a skip in Canterbury?', a: 'A permit is only required if the skip is placed on a public highway. Driveways do not need a permit. We can handle Canterbury City Council permit applications for you.' },
      { q: 'What waste can I put in a skip in Canterbury?', a: 'Standard household, garden, and construction waste is accepted. We cannot accept hazardous materials including asbestos, batteries, gas cylinders, paint, or tyres.' },
    ],
  },
};
