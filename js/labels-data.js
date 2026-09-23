// Labels Data - eco-label reference data as JS objects
// Factually accurate certifications. No invented labels.

const ecoLabels = [
    {
        id: 'energy-star',
        name: 'ENERGY STAR',
        organization: 'U.S. EPA & DOE',
        category: 'energy',
        icon: '⚡',
        description: 'Voluntary program certifying energy-efficient appliances, buildings and electronics. Products must be 10-50% more efficient than non-certified equivalents.',
        scope: 'USA, Canada, International via partnerships',
        founded: '1992',
        trust: 'high',
        verifyUrl: 'https://www.energystar.gov/productfinder/'
    },
    {
        id: 'eu-ecolabel',
        name: 'EU Ecolabel',
        organization: 'European Commission',
        category: 'multi',
        icon: '🌼',
        description: 'Flower logo certifying reduced environmental impact across lifecycle - from raw material to disposal. Covers 24 product groups including textiles, hard coverings and tourist accommodation.',
        scope: 'European Union',
        founded: '1992',
        trust: 'high',
        verifyUrl: 'https://environment.ec.europa.eu/topics/circular-economy/eu-ecolabel-home_en'
    },
    {
        id: 'fairtrade',
        name: 'Fairtrade International',
        organization: 'Fairtrade International (Bonn)',
        category: 'social',
        icon: '⚖️',
        description: 'Ensures fair wages, safe conditions and community investment for farmers and workers. Minimum price + Fairtrade Premium fund. Common on coffee, cocoa, bananas and cotton.',
        scope: 'Global - 1.9M farmers in 70 countries',
        founded: '1997',
        trust: 'high',
        verifyUrl: 'https://www.fairtrade.net/'
    },
    {
        id: 'usda-organic',
        name: 'USDA Organic',
        organization: 'USDA Agricultural Marketing Service',
        category: 'food',
        icon: '🌱',
        description: 'Fed by at least 95% organic ingredients with no synthetic pesticides, artificial fertilizers or GMOs. Three-year transition period required for farmland.',
        scope: 'United States',
        founded: '2002',
        trust: 'high',
        verifyUrl: 'https://www.ams.usda.gov/services/organic-certification/organic-integrity-database'
    },
    {
        id: 'fsc',
        name: 'FSC',
        organization: 'Forest Stewardship Council',
        category: 'forest',
        icon: '🌲',
        description: 'Forest Stewardship Council ensures forests are managed to sustain biodiversity, productivity and ecological processes. Look for FSC 100%, FSC Mix or FSC Recycled.',
        scope: 'Global - 230M hectares certified',
        founded: '1993',
        trust: 'high',
        verifyUrl: 'https://connect.fsc.org/'
    },
    {
        id: 'msc',
        name: 'MSC Certified Sustainable Seafood',
        organization: 'Marine Stewardship Council',
        category: 'marine',
        icon: '🐟',
        description: 'Blue fish tick certifies wild-capture fisheries against three principles: sustainable stocks, minimal environmental impact and effective management.',
        scope: 'Global - 19% of marine wild catch',
        founded: '1997',
        trust: 'high',
        verifyUrl: 'https://fisheries.msc.org/'
    },
    {
        id: 'rainforest-alliance',
        name: 'Rainforest Alliance Certified',
        organization: 'Rainforest Alliance',
        category: 'agriculture',
        icon: '🐸',
        description: 'Green frog seal for farms and forests meeting standards for biodiversity, climate, livelihoods and human rights. Merger with UTZ in 2018 expanded cocoa/coffee coverage.',
        scope: 'Global - 6M hectares',
        founded: '1987',
        trust: 'high',
        verifyUrl: 'https://www.rainforest-alliance.org/'
    },
    {
        id: 'epeat',
        name: 'EPEAT',
        organization: 'Global Electronics Council',
        category: 'electronics',
        icon: '💻',
        description: 'Electronic Product Environmental Assessment Tool rates computers, displays and imaging equipment on 4 tiers (Bronze to Climate+). Required for U.S. federal procurement.',
        scope: 'Global - 43 countries',
        founded: '2006',
        trust: 'high',
        verifyUrl: 'https://epeat.net/'
    },
    {
        id: 'cradle-to-cradle',
        name: 'Cradle to Cradle Certified',
        organization: 'Cradle to Cradle Products Innovation Institute',
        category: 'multi',
        icon: '♻️',
        description: 'Assesses material health, reuse, renewable energy, water and social fairness across five levels (Basic to Platinum). True circularity - waste equals food.',
        scope: 'Global',
        founded: '2010',
        trust: 'high',
        verifyUrl: 'https://www.c2ccertified.org/'
    },
    {
        id: 'blue-angel',
        name: 'Blue Angel (Der Blaue Engel)',
        organization: 'German Federal Ministry for Environment',
        category: 'multi',
        icon: '🔵',
        description: 'World oldest ecolabel (1978) - certifies 12,000 products in ~120 categories focusing on climate, health, water and resources. Stringent, government-backed.',
        scope: 'Germany / International',
        founded: '1978',
        trust: 'high',
        verifyUrl: 'https://www.blauer-engel.de/en'
    },
    {
        id: 'leaping-bunny',
        name: 'Leaping Bunny',
        organization: 'Cruelty Free International + CCIC',
        category: 'cosmetics',
        icon: '🐰',
        description: 'Only internationally recognized certification guaranteeing no animal testing at any stage of product development, including ingredient suppliers.',
        scope: 'Global',
        founded: '1996',
        trust: 'high',
        verifyUrl: 'https://www.leapingbunny.org/shopping-guide'
    },
    {
        id: 'b-corp',
        name: 'Certified B Corporation',
        organization: 'B Lab',
        category: 'social',
        icon: 'Ⓑ',
        description: 'Certifies entire companies (not products) balancing profit and purpose. Assesses governance, workers, community, environment and customers. 80+ points required.',
        scope: 'Global - 9,000+ companies in 96 countries',
        founded: '2006',
        trust: 'medium',
        verifyUrl: 'https://www.bcorporation.net/'
    }
];

// Categories for filter pills
const labelCategories = [
    { id: 'all', label: 'All Labels' },
    { id: 'energy', label: 'Energy' },
    { id: 'food', label: 'Food & Agriculture' },
    { id: 'forest', label: 'Forest' },
    { id: 'marine', label: 'Marine' },
    { id: 'multi', label: 'Multi-sector' },
    { id: 'social', label: 'Social & Fair Trade' }
];

// Misleading / unverified claims for educational comparison
const misleadingClaims = [
    {
        claim: '"100% Natural"',
        issue: 'Unregulated term - no legal definition or third-party verification. "Natural" does not mean sustainable, organic or safe.'
    },
    {
        claim: '"Eco-Friendly" without proof',
        issue: 'Vague, generic wording prohibited by EU Green Claims Directive and FTC Green Guides unless substantiated by lifecycle evidence.'
    },
    {
        claim: 'Self-declared leaf logos',
        issue: 'Generic green leaves or globes designed to mimic certified labels but issued by the manufacturer itself with no audit.'
    },
    {
        claim: '"Biodegradable" plastic',
        issue: 'Often oxo-degradable - fragments into microplastics. True biodegradation requires specific industrial composting conditions.'
    }
];
