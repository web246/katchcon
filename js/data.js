// data.js — shared content used across pages
const IMG_BASE = "https://media.base44.com/images/public/6a4498cb9123b20110361f7c/";

const SERVICES = [
  {
    slug: "solar-power",
    number: "01",
    title: "Solar Power Generation",
    icon: "sun",
    image: IMG_BASE + "d4a37b3f8_generated_09668dba.png",
    preview: "Solar park siting, energy resource assessment, yield calculation, detailed feasibility studies, and construction supervision.",
    short: "Our solar power consultancy covers the full lifecycle of photovoltaic projects — from initial site assessment through to long-term asset performance management. We bring decades of combined experience to every solar engagement.",
    overview: "KATCHCON's solar energy team delivers end-to-end engineering consultancy for utility-scale and commercial solar photovoltaic projects. Our expertise spans the entire project lifecycle, ensuring optimal energy yield, grid compliance, and long-term asset performance.",
    highlights: [
      "Delivered solar projects across 8+ African countries",
      "Combined team experience of 100+ years in renewable energy",
      "Partnerships with leading international solar technology firms"
    ],
    capabilities: [
      "Solar Park Siting & Design","Energy Resource Assessment","Energy Yield Calculation",
      "Detailed Feasibility Studies","Grid Connection Studies","Construction Supervision",
      "Tests & Commissioning","Asset Performance Management"
    ],
    ctaHeading: "Ready to Develop Your Solar Project?",
    ctaDescription: "From site selection through asset performance management, we provide comprehensive solar consultancy. Get in touch to discuss your utility-scale or commercial PV project."
  },
  {
    slug: "wind-power",
    number: "02",
    title: "Wind Power Generation",
    icon: "wind",
    image: IMG_BASE + "7ec83d310_generated_da5f3c57.png",
    preview: "Wind measurements, energy resource assessment, wind park design, grid connection studies, and commissioning.",
    short: "Expert wind energy consultancy services from initial measurements through to full commissioning. We deliver comprehensive wind resource analysis and park design solutions.",
    overview: "Our wind energy division provides thorough consultancy services for onshore wind power projects. From wind measurement campaigns and resource assessment to detailed park design and grid integration, we ensure every wind project achieves maximum energy capture.",
    highlights: [
      "Extensive wind measurement campaign experience",
      "Advanced computational fluid dynamics modeling",
      "Grid integration expertise for variable renewable energy"
    ],
    capabilities: [
      "Wind Measurements & Campaigns","Energy Resource Assessment","Energy Yield Calculation",
      "Wind Park Design","Detailed Feasibility Studies","Grid Connection Studies",
      "Construction Supervision","Tests & Commissioning"
    ],
    ctaHeading: "Ready to Harness Wind Power?",
    ctaDescription: "Our wind team specializes in resource assessment, park design, and grid integration. Reach out to discuss your wind energy project from measurements through commissioning."
  },
  {
    slug: "hydroelectric",
    number: "03",
    title: "Hydroelectric Power Generation",
    icon: "droplets",
    image: IMG_BASE + "d70536437_generated_ffc3ef7c.png",
    preview: "Detailed feasibility studies, grid connection studies, construction supervision including tests and commissioning.",
    short: "Comprehensive hydroelectric power consultancy for dam and run-of-river projects, from feasibility through commissioning.",
    overview: "KATCHCON provides comprehensive consultancy for hydroelectric power projects including large dam, small hydro, and run-of-river schemes. Our team conducts thorough hydrological assessments, feasibility studies, and provides full construction supervision to deliver reliable baseload power generation.",
    highlights: [
      "Experience with both large-scale and micro-hydro projects",
      "Expertise in environmental and social impact assessments",
      "Track record in East African hydropower development"
    ],
    capabilities: [
      "Detailed Feasibility Studies","Hydrological Assessment","Grid Connection Studies",
      "Environmental Impact Analysis","Dam Safety Assessment","Construction Supervision",
      "Tests & Commissioning"
    ],
    ctaHeading: "Ready to Unlock Hydroelectric Potential?",
    ctaDescription: "From hydrological assessment to commissioning, we guide hydroelectric projects of all scales. Contact us to explore your dam, run-of-river, or micro-hydro opportunity."
  },
  {
    slug: "transmission",
    number: "04",
    title: "Power Transmission & Distribution",
    icon: "cable",
    image: IMG_BASE + "d83329bb3_generated_63a793bb.png",
    preview: "Power system analysis, distribution line and substation design, engineering reviews, and construction supervision.",
    short: "End-to-end consultancy for power T&D infrastructure including system analysis, substation design, and engineering reviews.",
    overview: "Our transmission and distribution team provides critical engineering consultancy for the backbone of power delivery systems. From high-voltage transmission line design to distribution network planning and substation engineering, we ensure reliable, efficient power delivery.",
    highlights: [
      "Designed transmission infrastructure up to 400kV",
      "Distribution network planning for rural electrification programs",
      "Expertise in SCADA and protection system design"
    ],
    capabilities: [
      "Power System Analysis","Transmission Line Design","Distribution Network Planning",
      "Substation Design","Detailed Engineering Reviews","Protection & Control Design",
      "Construction Supervision","Tests & Commissioning"
    ],
    ctaHeading: "Ready to Strengthen Your T&D Network?",
    ctaDescription: "Our expertise spans transmission line design, substation engineering, and distribution network planning. Let us help you build reliable and efficient power delivery infrastructure."
  },
  {
    slug: "energy-efficiency",
    number: "05",
    title: "Energy Efficiency",
    icon: "gauge",
    image: IMG_BASE + "d2e6eae6e_generated_d76d0dca.png",
    preview: "Power and energy condition monitoring, energy audits, feasibility studies, and verification of energy savings.",
    short: "Enhancing sustainability through energy monitoring, auditing, and efficiency optimization solutions.",
    overview: "Our energy efficiency team assists clients in enhancing sustainability by deploying advanced energy monitoring solutions and improving the efficiency of available energy resources. We conduct thorough energy audits and implement verified savings programs.",
    highlights: [
      "Certified energy auditors on staff",
      "Measurable and verified energy savings delivered",
      "Expertise in industrial and commercial energy optimization"
    ],
    capabilities: [
      "Power & Energy Condition Monitoring","Energy Audits","Efficiency Project Feasibility Studies",
      "Demand Side Management","Construction Supervision","Testing & Commissioning",
      "Verification of Energy Savings"
    ],
    ctaHeading: "Ready to Cut Energy Costs?",
    ctaDescription: "Our certified auditors deliver measurable energy savings through monitoring, auditing, and optimization. Contact us to start reducing your energy footprint and costs."
  },
  {
    slug: "energy-storage",
    number: "06",
    title: "Energy Storage",
    icon: "battery",
    image: IMG_BASE + "367742b2c_generated_582930e1.png",
    preview: "Power demand assessment, optimal battery sizing, type selection, BESS feasibility studies, and commissioning.",
    short: "Expert BESS consultancy from demand assessment and optimal sizing to feasibility studies and commissioning.",
    overview: "KATCHCON's energy storage team provides specialized consultancy for battery energy storage systems (BESS). We help clients assess demand, optimize sizing, select the right technology, and oversee construction to deliver reliable energy storage solutions.",
    highlights: [
      "Expertise in lithium-ion, flow battery, and hybrid storage systems",
      "Grid-scale and behind-the-meter BESS experience",
      "Integration with renewable energy generation projects"
    ],
    capabilities: [
      "Power & Energy Demand Assessment","Optimal BESS Sizing","Battery Type Selection",
      "Use Case Analysis","Feasibility Studies","Construction Supervision","Testing & Commissioning"
    ],
    ctaHeading: "Ready to Deploy Energy Storage?",
    ctaDescription: "We design and deliver grid-scale and behind-the-meter BESS solutions tailored to your needs. Let's discuss how energy storage can enhance your power system resilience."
  }
];

const PROJECTS = [
  { title: "50MW Solar PV Plant — Garissa", category: "Solar Power", location: "Kenya", capacity: "50 MW", year: "2019", image: IMG_BASE + "d4a37b3f8_generated_09668dba.png" },
  { title: "132kV Substation Upgrade", category: "Transmission", location: "Tanzania", capacity: "132 kV", year: "2020", image: IMG_BASE + "970204ae5_generated_f0fd13a5.png" },
  { title: "Lake Turkana Wind Assessment", category: "Wind Power", location: "Kenya", capacity: "310 MW", year: "2018", image: IMG_BASE + "7ec83d310_generated_da5f3c57.png" },
  { title: "Rural Electrification Phase III", category: "Distribution", location: "Uganda", capacity: "33 kV", year: "2021", image: IMG_BASE + "aa9e21a8c_generated_d5f78eeb.png" },
  { title: "Small Hydro — Tana River", category: "Hydroelectric", location: "Kenya", capacity: "5 MW", year: "2022", image: IMG_BASE + "d70536437_generated_ffc3ef7c.png" },
  { title: "Industrial Energy Audit — Mombasa", category: "Energy Efficiency", location: "Kenya", capacity: "15 GWh", year: "2023", image: IMG_BASE + "d2e6eae6e_generated_d76d0dca.png" },
  { title: "BESS Grid Stabilization", category: "Energy Storage", location: "Rwanda", capacity: "10 MWh", year: "2023", image: IMG_BASE + "367742b2c_generated_582930e1.png" },
  { title: "220kV Transmission Line", category: "Transmission", location: "Ethiopia", capacity: "220 kV", year: "2020", image: IMG_BASE + "d83329bb3_generated_63a793bb.png" },
  { title: "SCADA Control Center", category: "Transmission", location: "Kenya", capacity: "—", year: "2022", image: IMG_BASE + "e5f0abab4_generated_138702e0.png" }
];
