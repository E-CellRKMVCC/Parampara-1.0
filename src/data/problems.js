import psAfr01 from '../assets/images/ps-afr-01.png';
import psAfr02 from '../assets/images/ps-afr-02.png';
import psAfr03 from '../assets/images/ps-afr-03.png';
import psCgt01 from '../assets/images/ps-cgt-01.png';
import psTr01 from '../assets/images/ps-tr-01.png';
import psBc01 from '../assets/images/ps-bc-01.png';
import psBc02 from '../assets/images/ps-bc-02.png';
import psEd01 from '../assets/images/ps-ed-01.png';
import psEd02 from '../assets/images/ps-ed-02.png';
import psDm01 from '../assets/images/ps-dm-01.png';
import psMbh01 from '../assets/images/ps-mbh-01.png';
import psMbh02 from '../assets/images/ps-mbh-02.png';
import psMbh03 from '../assets/images/ps-mbh-03.png';
import psMs01 from '../assets/images/Misc.png';

export const submissionDetails = {
  format: "Solution Presentation Deck (PPT / PDF ONLY)",
  deadline: "August 21",
  pitchDay: "August 27",
  organizer: "E-Cell RKMVCC — PARAMPARA 1.0"
};

export const problems = [
  {
    id: 1,
    category: "AGRICULTURE",
    psCode: "PS-AFR-01",
    track: "Software Track (Geospatial AI / Machine Learning Engine & Dashboard)",
    title: "AI-Driven Multi-Modal Satellite Analytics for Crop Mapping, Moisture Stress, and Irrigation Advisories",
    description: "Agricultural monitoring is impeded during monsoons. Need integrated, all-weather satellite analytics to prevent irrigation losses and delayed drought detection.",
    fullDescription: "Agricultural monitoring across large command areas is heavily impeded during cloud-heavy monsoon seasons, making traditional single-source optical satellite data unreliable. Furthermore, existing systems treat crop classification and moisture stress as isolated metrics without accounting for stage-wise crop phenology or translating water deficits into actionable field-level irrigation guidance. The lack of integrated, all-weather, near-real-time satellite analytics leads to avoidable irrigation losses, delayed drought detection, and unverified crop damage assessments in government schemes.",
    docPath: "/docs/problem_statements/PS-AFR-01.md",
    image: psAfr01
  },
  {
    id: 2,
    category: "AGRICULTURE",
    psCode: "PS-AFR-02",
    track: "Hardware Edition Track (IoT Sensors + Embedded Firmware + Cloud Dashboard)",
    title: "Micro-Cold Storage Monitoring & IoT-Based Post-Harvest Logistics Network",
    description: "Monitor temperature/humidity and logistics for micro-cold rooms to prevent post-harvest losses in fruits, vegetables, and dairy during first-mile transit.",
    fullDescription: "India experiences significant post-harvest losses in fruits, vegetables, and dairy due to an inadequate cold chain infrastructure during the 'first mile' transit from farm gates to regional markets. Small farmers cannot afford large scale refrigeration, while existing micro-cold rooms and solar-powered cooling units often suffer from unmonitored temperature/humidity fluctuations, power cutouts, and inefficient logistics scheduling, leading to premature food spoilage.",
    docPath: "/docs/problem_statements/PS-AFR-02.md",
    image: psAfr02
  },
  {
    id: 3,
    category: "AGRICULTURE",
    psCode: "PS-AFR-03",
    track: "Software Track (Geospatial AI / Machine Learning Engine & Dashboard)",
    title: "Optimizing Urban Heat Mitigation and cooling strategies via Artificial Intelligence and Machine Learning (AIML)",
    description: "Develop a geospatial AI/ML system to identify urban heat hotspots and generate scenario-based cooling interventions.",
    fullDescription: "Develop a geospatial AI/ML-based system, backed with physics informed decision making to identify urban heat stress hotspots, quantify key drivers of urban heating, and generate optimized, scenario-based cooling interventions for mitigating urban heat impacts.",
    docPath: "/docs/problem_statements/PS-AFR-03.md",
    image: psAfr03
  },
  {
    id: 4,
    category: "CLEAN TECH",
    psCode: "PS-CGT-01",
    track: "Software Track (Data Analytics / IoT Integration / Web Dashboard)",
    title: "AI-Driven Building Energy & Carbon Audit Engine for Educational Campuses",
    description: "Provide granular visibility into institutional building power consumption to spot energy leaks and track carbon footprints.",
    fullDescription: "Educational institutions and commercial facilities consume massive amounts of energy through inefficient HVAC systems, unmonitored lighting, and idle electronic equipment left running after hours. Institutional managers lack granular visibility into building-by-building or floor-by-floor power consumption, making it difficult to spot energy leaks, track carbon footprints, or meet government sustainability compliance benchmarks.",
    docPath: "/docs/problem_statements/PS-CGT-01.md",
    image: psCgt01
  },
  {
    id: 5,
    category: "TOURISM",
    psCode: "PS-TR-01",
    track: "Software Track",
    title: "Authentic Tribal Homestay Aggregator & Cultural Eco-Tourism Marketplace",
    description: "Create an eco-tourism marketplace bridging the digital gap for rural indigenous communities and homestay hosts.",
    fullDescription: "While North East India possesses immense potential for eco-tourism and cultural immersion (e.g., ethnic village homestays, indigenous handicraft workshops, local tribal festivals), mainstream commercial OTA (Online Travel Agency) platforms fail to reach rural home-hosts due to digital literacy gaps, language barriers, and formal banking requirements. Consequently, major tourist spending remains concentrated among urban operators, while local indigenous communities miss out on economic opportunities.",
    targetAudience: "Rural Indigenous Communities, Tribal Homestay Hosts, Local Artisans, and Eco-Conscious Tourists",
    docPath: "/docs/problem_statements/PS-TR-01.md",
    image: psTr01
  },
  {
    id: 6,
    category: "CYBERSECURITY",
    psCode: "PS-BC-01",
    track: "Software Track (Android/iOS Mobile Client + Encrypted Server Backend)",
    title: "Secure Encrypted Closed-Group Communication Platform for Defence Personnel over Public Mobile Networks",
    description: "Secure, encrypted closed-group communication platform over public mobile networks to prevent OPSEC risks.",
    fullDescription: "Military personnel and their families routinely communicate using commercial messaging platforms over public cellular and Wi-Fi networks. Commercial communication channels pose severe operational security (OPSEC) risks due to data harvesting, server vulnerabilities, location tracking, and lack of sovereign cryptographic control. Commercial platforms are prone to interception or targeted exploitation by adversary signal intelligence agencies.",
    docPath: "/docs/problem_statements/PS-BC-01.md",
    image: psBc01
  },
  {
    id: 7,
    category: "CYBERSECURITY",
    psCode: "PS-BC-02",
    track: "Hybrid (Blockchain Distributed Ledger + Smart Contracts + Serialization Hardware)",
    title: "Blockchain-Based Immutable Provenance & Tracking System for Ordnance Ammunition & Military Supply Chains",
    description: "Immutable tracking system for military supply chains to prevent tampering and counterfeit components.",
    fullDescription: "Managing military logistics—specifically ammunition, missile components, weapons, and sensitive spare parts—requires absolute transparency, tamper-proof audit trails, and strict origin verification. Traditional centralized inventory databases in defence supply chains are susceptible to unauthorized database tampering, unauthorized batch swaps, counterfeit component insertion, and poor visibility during inter-depot transit in remote border sectors.",
    docPath: "/docs/problem_statements/PS-BC-02.md",
    image: psBc02
  },
  {
    id: 8,
    category: "EDUCATION",
    psCode: "PS-ED-01",
    track: "Hybrid (Hardware + Software) or Software-Only",
    title: "Secure & Tamper-Proof Question Paper Leakage Prevention System",
    description: "End-to-end cryptographic protection and dynamic access controls to prevent paper leaks before or during examinations.",
    fullDescription: "Question paper leaks before or during high-stakes competitive and university examinations undermine educational integrity, cause massive financial losses, and distress millions of students. Traditional distribution models rely heavily on physical logistics, manual handling, and static storage, creating multiple vulnerable attack vectors at printing presses, transit hubs, and institutional vaults. Existing digital methods often lack end-to-end cryptographic protection or dynamic access controls right up to the minute the exam begins.",
    docPath: "/docs/problem_statements/PS-ED-01.md",
    image: psEd01
  },
  {
    id: 9,
    category: "EDUCATION",
    psCode: "PS-ED-02",
    track: "Software Track (Web / Mobile Application)",
    title: "Algorithmic Skill-Matching & Team Formation Platform for Students",
    description: "Platform for students to form balanced, multidisciplinary teams for hackathons and projects.",
    fullDescription: "In higher education institutions, students frequently struggle to form balanced, multidisciplinary teams for hackathons, research initiatives, and technical projects. Isolated developers, designers, and domain strategists often lack visibility into the broader campus talent pool. Relying on informal word-of-mouth or unorganized messaging channels results in skill mismatches, incomplete project rosters, and underutilized student potential.",
    docPath: "/docs/problem_statements/PS-ED-02.md",
    image: psEd02
  },
  {
    id: 10,
    category: "DISASTER MGMT",
    psCode: "PS-DM-01",
    track: "Software Track (AI/ML Models + High-Performance Computing Pipeline + Geospatial Visualization Dashboard)",
    title: "AI-Powered Digital Twin of India’s Climate using India’s National Data",
    description: "High-fidelity virtual replica integrating indigenous satellite data to simulate and adapt to local climate variations.",
    fullDescription: "Traditional climate models in India often lack the spatial and temporal resolution required for effective localized adaptation strategies against climate change. Furthermore, these conventional models are computationally intensive, hindering near-real-time simulations. There is a critical national need for a high-fidelity, dynamic virtual replica (Digital Twin) of India’s climate system that continuously evolves. This twin must integrate diverse, indigenous observations (from Indian satellites like INSAT/Oceansat and ground-based IMD networks) and leverage advanced AI to simulate atmospheric, oceanic, and land-surface processes at high resolution. Such a system is essential to accurately capture complex local phenomena like monsoon variability, extreme precipitation events, and drought evolution with greater accuracy than current standard models.",
    docPath: "/docs/problem_statements/PS-DM-01.md",
    image: psDm01
  },
  {
    id: 11,
    category: "MEDTECH",
    psCode: "PS-MBH-01",
    track: "Software Track (Web Application / Database Management System)",
    title: "Digital Traceability & Botanical Authentication Platform for Ayurvedic Medicinal Herbs",
    description: "Digital traceability for raw herbal supply chains to prevent misidentification of Ayurvedic medicinal herbs.",
    fullDescription: "Adulteration and accidental misidentification of medicinal plants (e.g., substituting Bacopa monnieri with look-alike species) pose severe risks to herbal drug efficacy and consumer safety. Raw herbal supply chains in India are fragmented, making it difficult for pharmaceutical buyers to verify whether harvested plants possess the correct phytochemical composition, geographic origin, or morphological characteristics required for official Ayurvedic pharmacopoeias.",
    docPath: "/docs/problem_statements/PS-MBH-01.md",
    image: psMbh01
  },
  {
    id: 12,
    category: "MEDTECH",
    psCode: "PS-MBH-02",
    track: "Software Track (Web Dashboard / Machine Learning Analytics Engine)",
    title: "AI-Powered Antimicrobial Resistance (AMR) Tracker & Microbial Susceptibility Predictor",
    description: "AI analytics engine to analyze local MIC trends and guide targeted antibiotic stewardship, combating Antimicrobial Resistance.",
    fullDescription: "Antimicrobial Resistance (AMR) is a growing global health crisis. In clinical settings, waiting for traditional disk-diffusion culture results (24–48 hours) often forces doctors to prescribe broad-spectrum antibiotics empirically, accelerating bacterial resistance. Furthermore, diagnostic laboratories lack unified software tools to analyze local minimum inhibitory concentration (MIC) trends across bacterial strains (E. coli, S. aureus, K. pneumoniae) to guide targeted antibiotic stewardship.",
    docPath: "/docs/problem_statements/PS-MBH-02.md",
    image: psMbh02
  },
  {
    id: 13,
    category: "MEDTECH",
    psCode: "PS-MBH-03",
    track: "Software Track (GIS Mapping / Predictive Analytics Web Portal)",
    title: "Digital Vector Ecology & Zoonotic Disease Early-Warning Dashboard",
    description: "Predictive analytics dashboard integrating vector biology, hosts, and weather to predict zoonotic disease outbreaks.",
    fullDescription: "Outbreaks of vector-borne and zoonotic diseases (e.g., Dengue, Malaria, Chikungunya, Scrub Typhus, and Leptospirosis) are closely tied to the biological life cycles of vectors like Aedes/Anopheles mosquitoes, ticks, and rodent hosts. Current municipal control measures are largely reactive—spraying insecticides only after human infection clusters are reported. There is a lack of predictive software integrating vector breeding biology, larval density metrics, host mammal populations, and ambient weather parameters to intervene before outbreaks occur.",
    docPath: "/docs/problem_statements/PS-MBH-03.md",
    image: psMbh03
  },
  {
    id: 14,
    category: "MISC",
    psCode: "PS-MS-01",
    track: "Open Innovation Track",
    title: "Open Societal Innovation Challenge",
    description: "Define your own problem statement addressing a pressing real-world issue in campus life, civic administration, or local community.",
    fullDescription: "Teams may define their own problem statement addressing a pressing real-world issue in campus life, civic administration, or local community, provided it does not strictly fit the above 7 themes.",
    docPath: "/docs/problem_statements/PS-MS-01.md",
    image: psMs01
  }
];

