export type PortfolioAsset = {
  src: string;
  alt: string;
  source: "aaron" | "concept-ai";
  projectId?: string;
  credit?: string;
  caption?: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  client?: string;
  typology: "commercial" | "residential" | "hospitality" | "fit-out" | "concept";
  typologyLabel: string;
  location: string;
  year: string;
  featured: boolean;
  coverImage: PortfolioAsset;
  gallery: PortfolioAsset[];
  summary: string;
  challenge: string;
  resolution: string;
  quotes?: string[];
  materials: string[];
  disciplines: string[];
  stats?: { label: string; value: string }[];
};

export const PROJECTS: Project[] = [
  {
    id: "skinnovia",
    slug: "skinnovia",
    title: "Skinnovia Dermatology • Laser",
    client: "Skinnovia Dermatology • Laser",
    typology: "commercial",
    typologyLabel: "Commercial Clinic",
    location: "Metro Manila, Philippines",
    year: "2026",
    featured: true,
    coverImage: {
      src: "/images/projects/skinnovia/hero.jpg",
      alt: "Skinnovia Dermatology reception area featuring curved warm timber wall, integrated cove lighting, and welcoming client seating",
      source: "aaron",
      projectId: "skinnovia",
      credit: "Aaron Parnala Projects",
      caption: "Clean, welcoming reception with curved architectural partition and diffused warm lighting"
    },
    gallery: [
      {
        src: "/images/projects/skinnovia/hero.jpg",
        alt: "Skinnovia reception desk and consultation waiting area",
        source: "aaron",
        projectId: "skinnovia",
        credit: "Aaron Parnala Projects",
        caption: "Aesthetics meet purpose: curved partition wall and warm wood finish creating calm authority"
      },
      {
        src: "/images/projects/skinnovia/corridor.jpg",
        alt: "Clinical treatment corridor with arched portal, warm indirect ceiling cove lighting, and seamless floor transitions",
        source: "aaron",
        projectId: "skinnovia",
        credit: "Aaron Parnala Projects",
        caption: "Calm, continuous corridor flow designed for uninterrupted patient movement and practitioner efficiency"
      }
    ],
    summary:
      "A specialized medical dermatology and laser facility where every line, curve, and surface was resolved long before construction to build immediate patient trust, clinical flow, and quiet confidence.",
    challenge:
      "Commercial clinical spaces often default to sterile, clinical coldness. The objective was to create an environment that satisfies stringent clinical durability and hygiene while welcoming clients into an atmosphere of quiet serenity and warmth.",
    resolution:
      "Clarity leads. Movement feels natural and transitions between the reception and private treatment rooms are uninterrupted. Curved architectural partitions soften sightlines, while high-durability surfaces, controlled warm palettes, and indirect low-glare cove lighting foster an atmosphere of effortless care.",
    quotes: [
      "Commercial projects aren’t just about making a space look good—they’re about making it work, effortlessly.",
      "In spaces like this, design isn’t meant to call attention to itself. It’s meant to build trust, comfort, and quiet confidence the moment you walk in."
    ],
    materials: [
      "Curved warm wood acoustic wall paneling",
      "High-durability matte clinical surfacing",
      "Low-glare recessed 3000K warm LED cove lighting",
      "Neutral monolithic flooring with seamless thresholds"
    ],
    disciplines: [
      "Commercial Space Planning",
      "Lighting & Acoustic Strategy",
      "Custom Architectural Millwork",
      "Turnkey Fit-Out Supervision"
    ],
    stats: [
      { label: "Typology", value: "Medical & Aesthetic Clinic" },
      { label: "Scope", value: "Turnkey Design & Execution" },
      { label: "Status", value: "Completed Commission" }
    ]
  },
  {
    id: "bgc-condo",
    slug: "bgc-condo",
    title: "Urban Condominium Residence",
    typology: "residential",
    typologyLabel: "Urban Residential",
    location: "Bonifacio Global City (BGC), Philippines",
    year: "2024–2026",
    featured: true,
    coverImage: {
      src: "/images/projects/bgc-condo/hero.jpg",
      alt: "Compact urban condominium living space with multi-zone built-ins, warm wood finishes, and integrated study nook",
      source: "aaron",
      projectId: "bgc-condo",
      credit: "Aaron Parnala Projects",
      caption: "Small space, thoughtfully resolved: integrated study, custom built-ins, and layered illumination"
    },
    gallery: [
      {
        src: "/images/projects/bgc-condo/hero.jpg",
        alt: "Compact living and study suite",
        source: "aaron",
        projectId: "bgc-condo",
        credit: "Aaron Parnala Projects",
        caption: "Every square meter engineered to work harder without feeling crowded"
      },
      {
        src: "/images/projects/bgc-condo/living.jpg",
        alt: "BGC condominium living area with warm architectural lighting and tailored furniture",
        source: "aaron",
        projectId: "bgc-condo",
        credit: "Aaron Parnala Projects",
        caption: "Living room detailing in Bonifacio Global City"
      },
      {
        src: "/images/projects/bgc-condo/detail.jpg",
        alt: "Detail of custom millwork and accent styling",
        source: "aaron",
        projectId: "bgc-condo",
        credit: "Aaron Parnala Projects",
        caption: "Tailored built-ins and calibrated soft furnishings"
      }
    ],
    summary:
      "A tailored high-density condominium fit-out engineered to maximize compact metropolitan square footage through clean built-ins, warm wood tones, soft sage accents, and multi-scene lighting.",
    challenge:
      "Urban high-rise units often suffer from cramped circulation, awkward structural columns, and a lack of dedicated storage, leaving residents with compromised living areas.",
    resolution:
      "Every square meter was made to work harder without feeling crowded. Integrated millwork consolidates sleeping, deep concealed storage, and a dedicated workspace. The combination of warm natural wood and muted sage tones grounds the space in organic tranquility.",
    quotes: [
      "Small space, thoughtfully resolved. Condo Living shall mean living no less.",
      "Good design is a process. Best achieved together."
    ],
    materials: [
      "Warm oak custom veneer cabinetry",
      "Soft sage matte lacquer accents",
      "Concealed flush-pull hardware",
      "Integrated architectural reading and task spots"
    ],
    disciplines: [
      "Compact Space Planning",
      "Custom Millwork Design",
      "Furniture & Lighting Sourcing",
      "Interior Styling"
    ],
    stats: [
      { label: "Location", value: "BGC, Metro Manila" },
      { label: "Focus", value: "Space Optimization" },
      { label: "Execution", value: "Full Bespoke Fit-Out" }
    ]
  },
  {
    id: "kape-light",
    slug: "kape-light",
    title: "Kape Light & Hospitality Spaces",
    client: "Kape Light / Lago Cafe",
    typology: "hospitality",
    typologyLabel: "Hospitality & Cafe",
    location: "Manila, Philippines",
    year: "2023–2024",
    featured: true,
    coverImage: {
      src: "/images/projects/kape-light/hero.jpg",
      alt: "Craft coffee counter and warm social seating at Kape Light",
      source: "aaron",
      projectId: "kape-light",
      credit: "Aaron Parnala Projects / Photo: @ai.chasinglightstill & @ianemuel",
      caption: "Craft coffee bar ambiance balancing intimate evening lighting with tactile natural surfaces"
    },
    gallery: [
      {
        src: "/images/projects/kape-light/hero.jpg",
        alt: "Kape Light service counter and feature ceiling",
        source: "aaron",
        projectId: "kape-light",
        credit: "Aaron Parnala Projects / Photo: @ai.chasinglightstill",
        caption: "Tactile counter surfaces and focused bar lighting"
      },
      {
        src: "/images/projects/kape-light/bar.jpg",
        alt: "Espresso workstation and barista interaction line",
        source: "aaron",
        projectId: "kape-light",
        credit: "Aaron Parnala Projects / Photo: @ianemuel",
        caption: "Ergonomic barista bar flow designed for high efficiency during peak hours"
      },
      {
        src: "/images/projects/kape-light/seating.jpg",
        alt: "Intimate guest seating and conversation zone",
        source: "aaron",
        projectId: "kape-light",
        credit: "Aaron Parnala Projects",
        caption: "Atmospheric evening dining and conversation nook"
      }
    ],
    summary:
      "Bespoke cafe and craft bar interiors crafted for community conversation, tactile comfort, and efficient service ergonomics.",
    challenge:
      "Hospitality environments require an intricate balance between high-volume operational efficiency behind the counter and an unhurried, warm atmosphere for patrons.",
    resolution:
      "Carefully calibrated sightlines, low warm pendant lighting, acoustic ceiling textures, and hard-wearing natural counter surfaces turn a neighborhood cafe into a beloved ritual destination.",
    quotes: [
      "You can see yourself in this bar—a regular in this bar. Capping the night, chit-chat and what-nots with good fellows."
    ],
    materials: [
      "Natural stone service counters",
      "Textured acoustic timber ceiling baffles",
      "Patinated brass pendant fixtures",
      "Custom steel and oak bar seating"
    ],
    disciplines: [
      "Hospitality Bar Design",
      "Operational Flow Architecture",
      "Custom Furniture Fabrication",
      "Material Calibration"
    ],
    stats: [
      { label: "Type", value: "Craft Cafe & Bar" },
      { label: "Photography", value: "@ai.chasinglightstill" },
      { label: "Scope", value: "Concept to Turnkey Build" }
    ]
  },
  {
    id: "fit-out-craft",
    slug: "fit-out-craft",
    title: "Turnkey Fit-Out & On-Site Precision",
    typology: "fit-out",
    typologyLabel: "Site Execution",
    location: "Las Piñas & Metro Manila, Philippines",
    year: "2024–2026",
    featured: true,
    coverImage: {
      src: "/images/projects/fit-out-craft/hero.jpg",
      alt: "On-site fit-out execution showing precision panel alignment and structural integrity",
      source: "aaron",
      projectId: "fit-out-craft",
      credit: "Aaron Parnala Projects",
      caption: "We don't separate design from execution: building with intention, detail by detail"
    },
    gallery: [
      {
        src: "/images/projects/fit-out-craft/hero.jpg",
        alt: "Architectural alignment during active fit-out installation",
        source: "aaron",
        projectId: "fit-out-craft",
        credit: "Aaron Parnala Projects",
        caption: "Where design is tested: every joint and alignment resolved on-site"
      },
      {
        src: "/images/projects/fit-out-craft/site.jpg",
        alt: "Active on-site progress in Las Piñas City",
        source: "aaron",
        projectId: "fit-out-craft",
        credit: "Aaron Parnala Projects",
        caption: "On-site in Las Piñas City: surface preparation, electrical layouts, and structural framing"
      },
      {
        src: "/images/projects/fit-out-craft/measurement.jpg",
        alt: "Site measurements and spatial verification",
        source: "aaron",
        projectId: "fit-out-craft",
        credit: "Aaron Parnala Projects",
        caption: "Measure twice. Build once. Sleep better."
      },
      {
        src: "/images/projects/fit-out-craft/lighting.jpg",
        alt: "Architectural lighting testing on raw site walls",
        source: "aaron",
        projectId: "fit-out-craft",
        credit: "Aaron Parnala Projects",
        caption: "Lighting is never an afterthought: testing light movement and fixture warmth before final finishes"
      },
      {
        src: "/images/projects/fit-out-craft/sourcing.jpg",
        alt: "Showroom furniture calibration and fabric testing",
        source: "aaron",
        projectId: "fit-out-craft",
        credit: "Aaron Parnala Projects",
        caption: "Furniture sourcing is a process of calibration: scale, proportions, and materials felt under real light"
      }
    ],
    summary:
      "A visual chronicle of Aaron's hands-on approach to on-site project delivery—proving that the quality of finished interiors depends on disciplined execution at every joint, drywall seam, and electrical box.",
    challenge:
      "The common industry divide between conceptual designers and site contractors regularly leads to misinterpreted drawings, compromised finishes, and project delays.",
    resolution:
      "Aaron takes measurements himself, walks the space during construction, and reviews decisions directly with tradespeople. This hands-on accountability ensures that concepts translate into reality without awkward compromises.",
    quotes: [
      "Fit-outs are often seen as the 'execution phase'... But in reality, this is where design is tested.",
      "The least photogenic part of the job is usually the most important. Measure twice. Build once. Sleep better.",
      "I make it a point to be on-site even during trying seasons. What works on a plan doesn’t always translate the same in real life."
    ],
    materials: [
      "Precision metal drywall framing",
      "Concealed electrical conduit layouts",
      "Hand-finished surface plaster",
      "Calibrated solid wood joinery"
    ],
    disciplines: [
      "Turnkey Project Management",
      "On-Site Quality Supervision",
      "Contractor Coordination",
      "Field Measuring & Calibration"
    ],
    stats: [
      { label: "Philosophy", value: "Design + Build Integrity" },
      { label: "Supervision", value: "Direct Designer On-Site" },
      { label: "Delivery", value: "Seamless Turnkey" }
    ]
  },
  {
    id: "penthouse-concept",
    slug: "penthouse-concept",
    title: "Sky Residence Living Suite (Concept Study)",
    typology: "concept",
    typologyLabel: "Concept Exploration",
    location: "Metro Manila (Visualization)",
    year: "2026",
    featured: false,
    coverImage: {
      src: "/images/concepts/penthouse.jpg",
      alt: "Concept visualization of a warm minimalist luxury penthouse living room with fluted oak slats and travertine flooring",
      source: "concept-ai",
      projectId: "penthouse-concept",
      credit: "AI Concept Visualization for Layout Study",
      caption: "Concept study exploring vertical fluted wood screening, travertine flooring, and panoramic urban glazing"
    },
    gallery: [
      {
        src: "/images/concepts/penthouse.jpg",
        alt: "Concept penthouse living area with architectural cove lighting",
        source: "concept-ai",
        projectId: "penthouse-concept",
        credit: "AI Concept Visualization for Layout Study",
        caption: "Layout exploration illustrating future prospective residential commissions"
      }
    ],
    summary:
      "An exploratory concept layout demonstrating how Aaron's signature warm-minimalist millwork, fluted screening, and architectural cove illumination translate to large-format metropolitan penthouses.",
    challenge:
      "Demonstrating potential spatial scale and material compositions for upcoming multi-level residential commissions.",
    resolution:
      "Full-height vertical fluted oak screening articulates circulation, while natural travertine, low-slung linen seating, and double-cove lighting establish a quiet residential sanctuary.",
    quotes: [
      "Prototype visual exploration — illustrates layout and atmospheric potential for prospective commissions."
    ],
    materials: [
      "Fluted natural oak architectural screening",
      "Honed travertine slab flooring",
      "Textured linen upholstery",
      "Dual-recessed perimeter warm lighting"
    ],
    disciplines: [
      "Volumetric Space Planning",
      "Material Composition Study",
      "Architectural Lighting Simulation"
    ],
    stats: [
      { label: "Classification", value: "Concept Study (AI)" },
      { label: "Purpose", value: "Layout Visualization" }
    ]
  },
  {
    id: "wellness-concept",
    slug: "wellness-concept",
    title: "Sculptural Wellness Lounge (Concept Study)",
    typology: "concept",
    typologyLabel: "Concept Exploration",
    location: "Metro Manila (Visualization)",
    year: "2026",
    featured: false,
    coverImage: {
      src: "/images/concepts/wellness.jpg",
      alt: "Concept visualization of a boutique wellness reception lounge with curved Venetian plaster walls and soft illumination",
      source: "concept-ai",
      projectId: "wellness-concept",
      credit: "AI Concept Visualization for Layout Study",
      caption: "Concept study illustrating curved microcement geometry, brass details, and indirect perimeter illumination"
    },
    gallery: [
      {
        src: "/images/concepts/wellness.jpg",
        alt: "Concept reception desk with curved fluted front and warm cove halo",
        source: "concept-ai",
        projectId: "wellness-concept",
        credit: "AI Concept Visualization for Layout Study",
        caption: "Exploratory study for future commercial wellness and boutique clinical entries"
      }
    ],
    summary:
      "A design study exploring organic curved Venetian plaster, integrated wall washes, and fluted reception counters for boutique aesthetic and wellness practices.",
    challenge:
      "Exploring alternative sculptural geometries for high-end boutique hospitality and clinical intake spaces.",
    resolution:
      "Monolithic curved plaster surfaces guide movement naturally into serene treatment suites, illuminated by low-voltage architectural wall grazers.",
    quotes: [
      "Concept layout visualization designed to demonstrate prospective commercial hospitality and clinic formats."
    ],
    materials: [
      "Venetian warm plaster",
      "Brushed satin brass cap detailing",
      "Terrazzo composite flooring",
      "Concealed architectural cove grazers"
    ],
    disciplines: [
      "Biophilic & Organic Flow Design",
      "Acoustic Plaster Detailing",
      "Sculptural Reception Millwork"
    ],
    stats: [
      { label: "Classification", value: "Concept Study (AI)" },
      { label: "Purpose", value: "Layout Visualization" }
    ]
  }
];

export const PRACTICE_PILLARS = [
  {
    number: "01",
    title: "Commercial & Clinical Interiors",
    description:
      "Specialized flow, high-trust client reception, durable hygienic finishes, and acoustic privacy engineered for medical practices, clinics, and boutique workplaces.",
    highlight: "Featured proof: Skinnovia Dermatology • Laser"
  },
  {
    number: "02",
    title: "Urban Condominium Living",
    description:
      "High-density space optimization, custom built-in millwork, integrated study nooks, and multi-scene lighting designed to make compact square footage live generously.",
    highlight: "Featured proof: BGC & Student Apartment fit-outs"
  },
  {
    number: "03",
    title: "Hospitality & Social Spaces",
    description:
      "Atmospheric cafes, intimate bars, and gathering counters balancing barista and staff ergonomics with inviting evening warmth for guests.",
    highlight: "Featured proof: Kape Light & Lago Cafe"
  },
  {
    number: "04",
    title: "Turnkey Fit-Out & On-Site Execution",
    description:
      "Hands-on designer supervision directly on the job site. We measure, test lighting, and calibrate materials in person so drawings become reality without compromise.",
    highlight: "Featured proof: Las Piñas & Manila site operations"
  }
];

export const WORKING_PROCESS = [
  {
    step: "01",
    title: "Walkthrough & Spatial Diagnosis",
    description:
      "We walk the bare space together. Aaron takes direct field measurements, evaluates natural light movement, identifies architectural constraints, and understands how you actually live or operate."
  },
  {
    step: "02",
    title: "Layout Resolution & Lighting Geometry",
    description:
      "Circulation, millwork, and lighting are planned simultaneously. We resolve storage, flow, and multi-layered illumination before touching a single wall."
  },
  {
    step: "03",
    title: "Material Sourcing & Physical Calibration",
    description:
      "Furniture and materials aren't chosen from catalogs alone. We visit showrooms, test comfort, inspect grain and texture under real lighting, and calibrate every piece to your exact proportions."
  },
  {
    step: "04",
    title: "Turnkey Fit-Out & On-Site Delivery",
    description:
      "Active on-site presence during construction. Aaron works directly alongside contractors, ensuring precise drywall joints, electrical alignment, and seamless finishing."
  }
];
