export interface ContactPerson {
  number: string;
  display: string;
  role: 'Main Contact' | 'Assistant Contact';
  label: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  summary: string;
  productKey: string;
}

export interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  specLine: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Gates' | 'Windows' | 'Beds & Deckers' | 'Doors' | 'Welding & Projects';
  caption: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  project: string;
  quote: string;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  'Hello MAMBA METAL FABRICATION, I am interested in your metal fabrication services. I would like to make an inquiry.';

export function formatWhatsAppUrl(localNumber: string, customMessage?: string): string {
  const digits = localNumber.replace(/\D/g, '');
  const intl = digits.startsWith('0') ? `256${digits.slice(1)}` : digits;
  const text = encodeURIComponent(customMessage || WHATSAPP_DEFAULT_MESSAGE);
  return `https://wa.me/${intl}?text=${text}`;
}

export function formatTelUrl(localNumber: string): string {
  return `tel:${localNumber.replace(/\s+/g, '')}`;
}

export const MAIN_CONTACTS: ContactPerson[] = [
  {
    number: '0701816867',
    display: '0701 816 867',
    role: 'Main Contact',
    label: 'Primary Workshop Desk',
  },
  {
    number: '0783816867',
    display: '0783 816 867',
    role: 'Main Contact',
    label: 'Fabrication & Quotes Line',
  },
];

export const ASSISTANT_CONTACTS: ContactPerson[] = [
  {
    number: '0791960089',
    display: '0791 960 089',
    role: 'Assistant Contact',
    label: 'Site Measurement & Orders',
  },
  {
    number: '0747128222',
    display: '0747 128 222',
    role: 'Assistant Contact',
    label: 'Repairs & Dispatch Support',
  },
];

export const ALL_CONTACTS: ContactPerson[] = [...MAIN_CONTACTS, ...ASSISTANT_CONTACTS];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Metal Windows',
    summary:
      'Burglar-proof casement and sliding steel window frames precision-welded for ventilation, security, and clean architectural lines.',
    productKey: 'Metal Windows',
  },
  {
    number: '02',
    title: 'Modern Metal Gates',
    summary:
      'Heavy-duty sliding and swing driveway gates combining reinforced square hollow sections with modern geometric and laser-cut panels.',
    productKey: 'Metal Gates',
  },
  {
    number: '03',
    title: 'Metal Deckers',
    summary:
      'Space-saving double and triple metal bunk beds engineered with thick-walled steel posts, welded guardrails, and sturdy ladders.',
    productKey: 'Metal Deckers',
  },
  {
    number: '04',
    title: 'Metal Beds',
    summary:
      'Stylish single, double, queen, and king steel bed frames built for zero-creak stability, clean headboards, and long-term durability.',
    productKey: 'Metal Beds',
  },
  {
    number: '05',
    title: 'Metal Doors',
    summary:
      'Reinforced residential and commercial security doors fitted with heavy hinges, tamper-resistant lockboxes, and modern trim.',
    productKey: 'Metal Doors',
  },
  {
    number: '06',
    title: 'General Welding and Metal Fabrication',
    summary:
      'Structural trusses, balcony railings, staircases, window grilles, and shopfronts fabricated to exact structural measurements.',
    productKey: 'Custom Welding',
  },
  {
    number: '07',
    title: 'Custom Metal Designs and Repairs',
    summary:
      'Bespoke steel furniture, gate track refurbishments, hinge replacements, and on-site welding repairs delivered promptly.',
    productKey: 'Custom Welding',
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'metal-windows',
    title: 'Metal Windows',
    subtitle: 'Casement & Security Grilles',
    description: 'Strong, secure and beautifully designed metal windows.',
    image: '/src/assets/images/product_metal_windows_1794943528343.jpg',
    specLine: 'Heavy-Gauge Steel · Anti-Rust Primer',
  },
  {
    id: 'metal-gates',
    title: 'Metal Gates',
    subtitle: 'Sliding & Swing Driveway Gates',
    description: 'Modern, decorative, durable and secure gates.',
    image: '/src/assets/images/product_metal_gates_1794943529576.jpg',
    specLine: 'Reinforced Frame · Custom Patterns',
  },
  {
    id: 'metal-deckers',
    title: 'Metal Deckers',
    subtitle: 'Home, School & Hostel Bunks',
    description: 'Quality metal deckers with strong construction.',
    image: '/src/assets/images/product_metal_deckers_1794943529196.jpg',
    specLine: 'Thick Square Tube · Safety Rails',
  },
  {
    id: 'metal-beds',
    title: 'Metal Beds',
    subtitle: 'Modern Steel Bed Frames',
    description: 'Stylish, comfortable and durable metal beds.',
    image: '/src/assets/images/product_metal_beds_1794943529786.jpg',
    specLine: 'All Standard Sizes · Smooth Finish',
  },
  {
    id: 'metal-doors',
    title: 'Metal Doors',
    subtitle: 'Reinforced Security Entrances',
    description: 'Strong security doors with modern designs.',
    image: '/src/assets/images/product_metal_doors_1794943530049.jpg',
    specLine: 'Heavy Plate Steel · Secure Locking',
  },
  {
    id: 'custom-welding',
    title: 'Custom Welding',
    subtitle: 'Fabrication, Railings & Repairs',
    description: 'Professional welding, repairs and custom fabrication.',
    image: '/src/assets/images/product_custom_welding_1794943530605.jpg',
    specLine: 'Workshop & On-Site · Tailored Specs',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-gates-1',
    title: 'Modern Sliding Driveway Gate',
    category: 'Gates',
    caption: 'Heavy-gauge horizontal slat gate with geometric laser-cut accent panel and track roller assembly.',
    image: '/src/assets/images/product_metal_gates_1794943529576.jpg',
  },
  {
    id: 'gal-windows-1',
    title: 'Powder-Coated Steel Casement Windows',
    category: 'Windows',
    caption: 'Full-height architectural steel windows with integrated security bars and smooth casement hinges.',
    image: '/src/assets/images/product_metal_windows_1794943528343.jpg',
  },
  {
    id: 'gal-doors-1',
    title: 'Reinforced Steel Security Door',
    category: 'Doors',
    caption: 'Matte navy-charcoal steel entry door with stainless horizontal ribs and frosted glass security insert.',
    image: '/src/assets/images/product_metal_doors_1794943530049.jpg',
  },
  {
    id: 'gal-beds-1',
    title: 'Geometric Steel Queen Bed Frame',
    category: 'Beds & Deckers',
    caption: 'Minimalist welded steel headboard and rigid cross-braced platform built for residential bedrooms.',
    image: '/src/assets/images/product_metal_beds_1794943529786.jpg',
  },
  {
    id: 'gal-deckers-1',
    title: 'Heavy-Duty Double Metal Decker',
    category: 'Beds & Deckers',
    caption: 'Square-tube steel bunk frame with welded side ladder and full-length upper safety guardrails.',
    image: '/src/assets/images/product_metal_deckers_1794943529196.jpg',
  },
  {
    id: 'gal-welding-1',
    title: 'Precision Staircase Railing Welding',
    category: 'Welding & Projects',
    caption: 'Custom wrought and tubular steel staircase balustrade welded cleanly on our main jig table.',
    image: '/src/assets/images/product_custom_welding_1794943530605.jpg',
  },
  {
    id: 'gal-project-1',
    title: 'Completed Gate Batch & Workshop Floor',
    category: 'Welding & Projects',
    caption: 'Multiple custom gates and structural frames fabricated, ground smooth, and staged for client delivery.',
    image: '/src/assets/images/about_workshop_team_1794943529945.jpg',
  },
  {
    id: 'gal-welding-2',
    title: 'Structural Steel Gate Frame Welding',
    category: 'Welding & Projects',
    caption: 'Heavy-duty diagonal bracing and deep-penetration welds for maximum gate rigidity.',
    image: '/src/assets/images/hero_welding_fabrication_1794943527422.jpg',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Samuel Ssemakula',
    role: 'Residential Homeowner',
    project: '14ft Sliding Gate & 12 Security Windows',
    quote:
      'Mamba Metal Fabrication took exact site measurements on Monday and delivered a rock-solid sliding gate and matching windows within ten days. Every weld is ground clean and the paint finish still looks brand new.',
  },
  {
    id: 'test-2',
    name: 'Grace Namukasa',
    role: 'Hostel Administrator',
    project: '24 Heavy-Duty Metal Deckers',
    quote:
      'Previous bunk beds kept loosening at the joints after one semester. Their heavy square-tube metal deckers have lasted three full academic terms without a single rattle or bent rail.',
  },
  {
    id: 'test-3',
    name: 'Ronald Kato',
    role: 'Building Contractor',
    project: 'Security Doors & Staircase Railings',
    quote:
      'Reliable pricing and serious workmanship. Whenever our sites need reinforced front doors or custom balcony railings on schedule, their team delivers straight to spec.',
  },
];

export interface MyWorkItem {
  id: string;
  title: string;
  category: 'Gates' | 'Windows' | 'Doors' | 'Railings & Structures';
  caption: string;
  image: string;
}

export const MY_WORK_ITEMS: MyWorkItem[] = [
  {
    id: 'work-1',
    title: 'Grey Scrollwork Casement Window',
    category: 'Windows',
    caption: 'Heavy-duty grey steel window frame with decorative wrought-iron scrolls and louvered ventilation top.',
    image: '/assets/aistudio/job1_c06730d9.jpg',
  },
  {
    id: 'work-2',
    title: 'Modern Diagonal-Bar Steel Window',
    category: 'Windows',
    caption: 'Custom grey casement window with angled security bars and double louvered top vents.',
    image: '/assets/aistudio/job2_774a633d.jpg',
  },
  {
    id: 'work-3',
    title: 'Arched Estate Gate Installation',
    category: 'Gates',
    caption: 'Large arched red-oxide primed driveway gate fitted between masonry pillars on site.',
    image: '/assets/aistudio/job3_05f10723.jpg',
  },
  {
    id: 'work-4',
    title: 'Installed Security Window & Frame',
    category: 'Windows',
    caption: 'Double burglar-proof grey steel frame with scroll accents and louvered vents set into brickwork.',
    image: '/assets/aistudio/job4_c31d05a4.jpg',
  },
  {
    id: 'work-5',
    title: 'Ornate Black Wrought-Iron Door',
    category: 'Doors',
    caption: 'Custom black security door featuring full-height hand-bent scrollwork in a brick entrance.',
    image: '/assets/aistudio/job5_687e17aa.jpg',
  },
  {
    id: 'work-6',
    title: 'Modern White Geometric Steel Door',
    category: 'Doors',
    caption: 'Clean white powder-coated steel security door with vertical slot and square window cutouts.',
    image: '/assets/aistudio/job6_a0a7a0c6.jpg',
  },
  {
    id: 'work-7',
    title: 'Red-Oxide Primed Scroll Window',
    category: 'Windows',
    caption: 'Workshop-finished steel window frame primed against rust with top louvers and ornamental scrolls.',
    image: '/assets/aistudio/job7_e8e5110a.jpg',
  },
  {
    id: 'work-8',
    title: 'Heavy-Duty Arched Driveway Gate',
    category: 'Gates',
    caption: 'Team fitting a tall arched ornamental steel gate with pedestrian side door on site.',
    image: '/assets/aistudio/job8_8fa26e1e.jpg',
  },
  {
    id: 'work-9',
    title: 'Arched Sun-Ray Steel Gate Assembly',
    category: 'Gates',
    caption: 'Large maroon steel entrance gate with custom sun-ray side grilles and overhead arch.',
    image: '/assets/aistudio/job9_a61061e1.jpg',
  },
  {
    id: 'work-10',
    title: 'White Grid Security Steel Window',
    category: 'Windows',
    caption: 'Crisp white painted casement window frame with welded square-bar grid and top vents.',
    image: '/assets/aistudio/job10_aaa1d6e2.jpg',
  },
  {
    id: 'work-11',
    title: 'Classic Grey Burglar-Proof Window',
    category: 'Windows',
    caption: 'Double-bay grey metal window with top/bottom scroll details and central ball pickets.',
    image: '/assets/aistudio/job11_97e2480a.jpg',
  },
  {
    id: 'work-12',
    title: 'Galvanized Street-Light Poles Batch',
    category: 'Railings & Structures',
    caption: 'Tubular galvanized steel lighting poles and mounting brackets fabricated at our yard.',
    image: '/assets/aistudio/job12_6b8f5f8a.jpg',
  },
  {
    id: 'work-13',
    title: 'Elevated Steel Water Tank Tower',
    category: 'Railings & Structures',
    caption: 'Cross-braced structural steel water tank stand with integrated vertical access ladder.',
    image: '/assets/aistudio/job13_7b2e006a.jpg',
  },
  {
    id: 'work-14',
    title: 'Matte Black Diagonal-Slat Gate',
    category: 'Gates',
    caption: 'Modern full-privacy matte black double gate installed beneath a lit stone-pillar canopy.',
    image: '/assets/aistudio/job14_5de52698.jpg',
  },
  {
    id: 'work-15',
    title: 'Multi-Story Balcony Railings & Windows',
    category: 'Railings & Structures',
    caption: 'Wrought-iron apartment balcony balustrades and window frames supplied for a 5-level block.',
    image: '/assets/aistudio/job15_fb9a3918.jpg',
  },
  {
    id: 'work-16',
    title: 'White Ornamental Grille Panels',
    category: 'Railings & Structures',
    caption: 'Custom white scroll-patterned security panels spray-finished and staged for site fitting.',
    image: '/assets/aistudio/job16_20b02fa3.jpg',
  },
  {
    id: 'work-17',
    title: 'White Modern Sliding Steel Gate',
    category: 'Gates',
    caption: 'Wide white sliding gate combining horizontal slats, vented panels, and corner scroll details.',
    image: '/assets/aistudio/job17_5d43acbf.jpg',
  },
  {
    id: 'work-18',
    title: 'Slate-Blue Laser-Cut Floral Gate',
    category: 'Gates',
    caption: 'Modern double pedestrian/driveway gate in slate blue with white laser-cut botanical panels.',
    image: '/assets/aistudio/job18_23f1dabe.jpg',
  },
  {
    id: 'work-19',
    title: 'Black & Gold Rosette Gate Pair',
    category: 'Gates',
    caption: 'Two heavy ornamental black steel gates accented with gold studs and woven border frames.',
    image: '/assets/aistudio/job19_b52ab735.jpg',
  },
  {
    id: 'work-20',
    title: 'Black Sunburst Laser-Cut Sliding Gate',
    category: 'Gates',
    caption: 'Matte black sliding gate featuring radiating sunburst laser-cut openings and arched spear rail.',
    image: '/assets/aistudio/job20_db6f7633.jpg',
  },
  {
    id: 'work-21',
    title: 'Woven-Steel Circular Motif Gate',
    category: 'Gates',
    caption: 'Matte black steel driveway gate with woven side panels and central circular frame during setup.',
    image: '/assets/aistudio/job21_153e8976.jpg',
  },
  {
    id: 'work-22',
    title: 'Workshop Batch Spray-Priming',
    category: 'Windows',
    caption: 'Multiple custom steel window and door frames undergoing workshop spray-coat finishing.',
    image: '/assets/aistudio/job22_867f9b28.jpg',
  },
  {
    id: 'work-23',
    title: 'Embossed Heavy-Duty Security Door',
    category: 'Doors',
    caption: 'Grey diamond-embossed steel plate door with top louvered air vent and heavy padlock latch.',
    image: '/assets/aistudio/job23_9d393d78.jpg',
  },
  {
    id: 'work-24',
    title: 'Structural Poles & Frames Fabrication',
    category: 'Railings & Structures',
    caption: 'Fabrication crew assembling curved galvanized steel poles and heavy window frames at the yard.',
    image: '/assets/aistudio/job24_ff905f07.jpg',
  },
  {
    id: 'work-25',
    title: 'Horizontal-Bar Sliding Steel Window',
    category: 'Windows',
    caption: 'Clean grey primed sliding steel window frame with full-width horizontal security bars.',
    image: '/assets/aistudio/job25_cd16b4fc.jpg',
  },
  {
    id: 'work-26',
    title: 'Upper-Floor Ornate Grille Hoisting',
    category: 'Railings & Structures',
    caption: 'Crane-assisted installation of a wide 4-bay white wrought-iron security grille.',
    image: '/assets/aistudio/job26_7fbc60a2.jpg',
  },
  {
    id: 'work-27',
    title: 'Four-Panel Scrollwork Security Frame',
    category: 'Windows',
    caption: 'Large white 4-panel ornamental wrought-iron window/veranda grille ready for mounting.',
    image: '/assets/aistudio/job27_6843877e.jpg',
  },
  {
    id: 'work-28',
    title: 'Gloss Black & Gold Mansion Gate',
    category: 'Gates',
    caption: 'Installed gloss-black double driveway gate with gold studs, center scrollwork, and spear spikes.',
    image: '/assets/aistudio/job30_bc805f62.jpg',
  },
  {
    id: 'work-29',
    title: 'White Veranda Scrollwork Railing',
    category: 'Railings & Structures',
    caption: 'Installed white wrought-iron balcony/veranda balustrade with symmetrical scroll panels.',
    image: '/assets/aistudio/job31_d9bf0ab8.jpg',
  },
  {
    id: 'work-30',
    title: 'Grand White Crowned Wrought-Iron Gate',
    category: 'Gates',
    caption: 'Full-width white ornamental estate gate with dense scrollwork and arched spear-point crest.',
    image: '/assets/aistudio/job32_f1ce058e.jpg',
  },
  {
    id: 'work-31',
    title: 'White Casement Window With Inner Grille',
    category: 'Windows',
    caption: 'Tall single-bay white steel casement window showing geometric inner burglar bars and top louvers.',
    image: '/assets/aistudio/job33_cb3c2844.jpg',
  },
  {
    id: 'work-32',
    title: 'Curved Galvanized Lamp Posts',
    category: 'Railings & Structures',
    caption: 'Heavy tubular galvanized street-light posts with welded mounting loops ready for delivery.',
    image: '/assets/aistudio/job34_a765da2e.jpg',
  },
];
