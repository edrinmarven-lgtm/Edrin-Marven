import heroLivingImg from '../assets/images/hero_living_room_1795113749076.jpg';
import serviceResidentialImg from '../assets/images/service_residential_1795113756670.jpg';
import serviceCommercialImg from '../assets/images/service_commercial_1795113756932.jpg';
import serviceKitchenImg from '../assets/images/service_kitchen_1795113757053.jpg';
import serviceSpacePlanningImg from '../assets/images/service_space_planning_1795113756249.jpg';
import projectLindenImg from '../assets/images/project_linden_residence_1795113756832.jpg';
import projectOakFormImg from '../assets/images/project_oak_form_workspace_1795113756333.jpg';
import projectQuietHouseImg from '../assets/images/project_quiet_house_1795113756758.jpg';
import studioMaterialTableImg from '../assets/images/studio_material_table_1795113756921.jpg';
import materialsDetailImg from '../assets/images/materials_detail_spread_1795113757139.jpg';
import ctaInteriorImg from '../assets/images/cta_luxury_interior_1795113789926.jpg';
import journalMaterialsImg from '../assets/images/journal_natural_materials_1795113756737.jpg';
import journalBedroomImg from '../assets/images/journal_calm_bedroom_1795113756983.jpg';
import journalDetailsImg from '../assets/images/journal_small_details_1795113756437.jpg';

export const HERO_MEDIA = {
  src: heroLivingImg,
  alt: 'Contemporary luxury living room with cream bouclé modular sofa, natural walnut paneling, travertine coffee table, and soft daylight',
  caption: '01 — THE ART OF LIVING',
};

export const STUDIO_MEDIA = {
  src: studioMaterialTableImg,
  alt: 'Interior architect material selection table with travertine stone samples, walnut veneer blocks, linen swatches, and floor plan sketches',
};

export const MATERIALS_MEDIA = {
  src: materialsDetailImg,
  alt: 'Close-up composition of porous honed travertine, natural white oak grain, oatmeal linen, brushed bronze, and handmade stoneware',
};

export const CTA_MEDIA = {
  src: ctaInteriorImg,
  alt: 'Warm dusk architectural view of a luxury living space with travertine hearth, cove lighting, and neutral bouclé seating',
};

export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  iconKey: 'home' | 'building' | 'utensils' | 'compass';
  projectTypeOption: string;
  overview: string;
  deliverables: string[];
  typicalTimeline: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential-interiors',
    category: 'RESIDENTIAL',
    title: 'Residential Interiors',
    description:
      'Warm, timeless interiors designed to make everyday living feel extraordinary.',
    image: serviceResidentialImg,
    imageAlt:
      'Sunlit residential living room with limewash walls, tailored linen armchairs, white oak floors, and travertine side table',
    iconKey: 'home',
    projectTypeOption: 'Residential Interior',
    overview:
      'We craft serene private residences shaped around daily rituals, natural daylight, and enduring materials. From single-room transformations to multi-level homes, every finish and proportion is composed for quiet comfort.',
    deliverables: [
      'Architectural interior concept & spatial mood boards',
      'Custom millwork, wall finish & stone specifications',
      'Bespoke furniture, drapery, and lighting curation',
      'Procurement coordination & final installation styling',
    ],
    typicalTimeline: '12 – 24 Weeks',
  },
  {
    id: 'commercial-design',
    category: 'COMMERCIAL',
    title: 'Commercial Design',
    description:
      'Purposeful environments that express your brand and welcome your customers.',
    image: serviceCommercialImg,
    imageAlt:
      'Boutique commercial studio office featuring walnut millwork shelving, monolithic oak conference table, and recessed linear lighting',
    iconKey: 'building',
    projectTypeOption: 'Commercial Design',
    overview:
      'We partner with hospitality venues, boutique studios, galleries, and executive workspaces to translate brand identity into tactile architectural environments that support focus, warmth, and memorable guest experiences.',
    deliverables: [
      'Brand-aligned spatial zoning & circulation study',
      'Acoustic, lighting & commercial-grade finish schedules',
      'Custom reception, display & banquette joinery drawings',
      'Contractor collaboration & site walkthrough reviews',
    ],
    typicalTimeline: '14 – 28 Weeks',
  },
  {
    id: 'kitchen-design',
    category: 'CULINARY SPACES',
    title: 'Kitchen Design',
    description:
      'Beautifully considered kitchens that bring functionality and refined materials together.',
    image: serviceKitchenImg,
    imageAlt:
      'Modern architectural kitchen with fluted oak cabinetry, honed travertine waterfall island, brushed bronze fixtures, and alabaster pendant',
    iconKey: 'utensils',
    projectTypeOption: 'Kitchen Design',
    overview:
      'Designed as the architectural anchor of the home, our kitchens pair concealed utility and intuitive workflow with honed stone slabs, fluted timber joinery, and tactile bronze hardware.',
    deliverables: [
      'Ergonomic work-triangle & island proportion drawings',
      'Detailed cabinetry elevations & millwork joinery',
      'Natural stone slab selection, edge profiles & backsplash',
      'Integrated appliance & architectural task lighting plan',
    ],
    typicalTimeline: '10 – 18 Weeks',
  },
  {
    id: 'space-planning',
    category: 'ARCHITECTURE & FLOW',
    title: 'Space Planning',
    description:
      'Smart layouts that make every corner feel intentional and effortless.',
    image: serviceSpacePlanningImg,
    imageAlt:
      'Harmoniously proportioned suite with low-profile linen bed, custom oak wardrobe wall, and soft natural courtyard light',
    iconKey: 'compass',
    projectTypeOption: 'Space Planning',
    overview:
      'Before selecting a single piece of furniture, we resolve sightlines, natural light paths, storage architecture, and circulation. Thoughtful planning makes modest footprints feel expansive and large residences feel intimate.',
    deliverables: [
      'Measured floor plans & scaled furniture placement options',
      'Sightline, daylighting & architectural focal analysis',
      'Built-in storage & wardrobe optimization drawings',
      'Reflected ceiling & layered lighting placement plans',
    ],
    typicalTimeline: '4 – 8 Weeks',
  },
];

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  filterGroup: 'Residential' | 'Commercial' | 'Full Home';
  year: string;
  location: string;
  area: string;
  image: string;
  imageAlt: string;
  summary: string;
  materials: string[];
  featured: boolean;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'linden-residence',
    name: 'The Linden Residence',
    category: 'RESIDENTIAL · 2026',
    filterGroup: 'Residential',
    year: '2026',
    location: 'Greenwich, Connecticut',
    area: '4,200 sq ft',
    image: projectLindenImg,
    imageAlt:
      'The Linden Residence living pavilion with curved cream linen sofa, wide-plank oak floor, carved limestone hearth, and steel-framed garden doors',
    summary:
      'A sunlit woodland residence reimagined around a carved limestone hearth, curved Belgian linen seating, and expansive steel-framed garden views. Warm white oak beams anchor the double-height volume with quiet restraint.',
    materials: ['Carved Limestone', 'European White Oak', 'Belgian Linen', 'Handwoven Wool'],
    featured: true,
  },
  {
    id: 'oak-form-workspace',
    name: 'Oak & Form Workspace',
    category: 'COMMERCIAL · 2026',
    filterGroup: 'Commercial',
    year: '2026',
    location: 'Boston, Massachusetts',
    area: '2,850 sq ft',
    image: projectOakFormImg,
    imageAlt:
      'Oak and Form Workspace meeting room with smoked oak cabinetry, monolithic travertine table, bouclé chairs, and brass wall sconce',
    summary:
      'An advisory and design studio conceived as an intimate residential salon rather than a conventional office. Smoked oak archival shelving and a monolithic travertine meeting table foster calm, unhurried collaboration.',
    materials: ['Smoked Oak Veneer', 'Honed Travertine', 'Cream Bouclé', 'Patinated Brass'],
    featured: true,
  },
  {
    id: 'quiet-house',
    name: 'The Quiet House',
    category: 'FULL HOME DESIGN · 2026',
    filterGroup: 'Full Home',
    year: '2026',
    location: 'Santa Barbara, California',
    area: '3,600 sq ft',
    image: projectQuietHouseImg,
    imageAlt:
      'The Quiet House open-plan dining room with sandy limewash walls, solid oak dining table, sculpted chairs, and handmade ceramic pendant',
    summary:
      'A full-home architectural interior renovation celebrating raw mineral plaster walls, custom solid oak dining furniture, and courtyard daylight. Every threshold flows seamlessly from kitchen to terrace without visual noise.',
    materials: ['Mineral Limewash', 'Solid White Oak', 'Stoneware Ceramic', 'Brushed Bronze'],
    featured: true,
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'DISCOVER',
    description:
      'We begin by understanding your needs, lifestyle, vision, and the way you want your space to feel.',
  },
  {
    number: '02',
    title: 'CONCEPT',
    description:
      'We develop a thoughtful design direction, combining inspiration, materials, layouts, and visual ideas.',
  },
  {
    number: '03',
    title: 'REFINE',
    description:
      'Every detail is carefully developed, from finishes and furniture to lighting and spatial flow.',
  },
  {
    number: '04',
    title: 'COMPLETE',
    description:
      'We bring the vision together with a considered final design and a clear path to implementation.',
  },
];

export const MATERIAL_PILLARS = [
  {
    name: 'Honed Travertine',
    origin: 'Tivoli Quarry Finish',
    note: 'Open-pore warmth that softens architectural light across hearths, islands, and plinths.',
  },
  {
    name: 'European White Oak',
    origin: 'Matte Hardwax Oil',
    note: 'Quarter-sawn grain selected for calm tonal continuity across floors and fluted joinery.',
  },
  {
    name: 'Unbleached Belgian Linen',
    origin: 'Heavyweight Loom',
    note: 'Breathable tactile upholstery and sheer window drapery that filters afternoon sun.',
  },
  {
    name: 'Living Brushed Bronze',
    origin: 'Hand-Waxed Patina',
    note: 'Quiet hardware and linear lighting accents engineered to deepen gracefully over time.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'We wanted a home that felt calm but still had personality. Every detail feels considered, and the space works beautifully for our everyday life.',
    name: 'Emily R.',
    project: 'Residential Interior',
  },
  {
    quote:
      'The process was thoughtful from start to finish. Our workspace now feels more welcoming, more functional, and much more aligned with our brand.',
    name: 'Daniel M.',
    project: 'Commercial Design',
  },
  {
    quote:
      'The design brought everything together in a way we couldn’t have imagined ourselves. The balance of materials, lighting, and layout is exceptional.',
    name: 'Sarah L.',
    project: 'Full Home Design',
  },
];

export interface JournalArticle {
  id: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  paragraphs: string[];
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'beauty-of-natural-materials',
    category: 'MATERIALS',
    title: 'The Beauty of Natural Materials',
    date: 'October 14, 2026',
    readTime: '4 min read',
    image: journalMaterialsImg,
    imageAlt:
      'Natural porous travertine stone slab, folded oatmeal linen textile, and European oak timber sample in morning window light',
    excerpt:
      'Why honed stone, unlacquered timber, and raw textiles age with a quiet grace synthetic surfaces cannot replicate.',
    paragraphs: [
      'When stepping into a room built around honest materials, the response is immediate yet subtle. Your eye registers the muted reflection off honed travertine rather than a harsh polished glare; your hand recognizes the open grain of oiled white oak.',
      'In our studio, material selection begins under natural daylight at multiple hours of the day. A limestone sample that reads crisp at noon often reveals warm ochre undertones by late afternoon. Pairing stone with unbleached Belgian linen and hand-waxed bronze allows a room to breathe and evolve gracefully alongside its inhabitants.',
      'Rather than striving for perfection that resists wear, we favor surfaces that record life gently—patinating with time, touch, and shifting seasons.',
    ],
  },
  {
    id: 'designing-home-feels-calm',
    category: 'INTERIOR LIVING',
    title: 'Designing a Home That Feels Calm',
    date: 'September 28, 2026',
    readTime: '5 min read',
    image: journalBedroomImg,
    imageAlt:
      'Peaceful minimalist bedroom with layered ivory linen bedding, taupe limewash walls, floating walnut bedside table, and sheer curtains',
    excerpt:
      'How proportion, concealed storage, and softened acoustic textures reduce visual noise in everyday spaces.',
    paragraphs: [
      'Calmness in architecture is rarely achieved by removing everything from a room. Too often, stark minimalism feels cold because it overlooks warmth, acoustics, and human proportion.',
      'True spatial serenity comes from resolving clutter at the architectural level—integrating flush oak cabinetry, aligning door heights, and grounding seating zones with heavy woven wool rugs that absorb ambient sound.',
      'When circulation flows effortlessly and lighting shifts smoothly from bright morning clarity to warm evening pools, a home stops demanding attention and begins restoring it.',
    ],
  },
  {
    id: 'small-details-lasting-impact',
    category: 'DESIGN NOTES',
    title: 'Small Details, Lasting Impact',
    date: 'September 09, 2026',
    readTime: '3 min read',
    image: journalDetailsImg,
    imageAlt:
      'Brushed brass architectural sconce washing warm light over textured limewash plaster above a travertine console and ceramic vessel',
    excerpt:
      'From shadow reveals and wall-wash sconces to tactile hardware, the quiet gestures that define craftsmanship.',
    paragraphs: [
      'In well-resolved interiors, the most memorable moments are often encountered at close range: the weight of a solid bronze lever, a crisp shadow reveal where plaster meets oak trim, or the soft wash of an architectural wall sconce.',
      'Lighting placed at eye level and along textured wall planes transforms flat surfaces into quiet focal compositions after dusk. Paired with a single wheel-thrown stoneware vessel on a honed stone console, restraint gives every object room to resonate.',
      'Craftsmanship lives in these margins—the millimeters where one material meets another cleanly, intentionally, and without ornament.',
    ],
  },
];
