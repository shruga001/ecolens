// Quiz - 100-question pool, randomized selection (5-10 per load)
// Fact-checked across Green Consumerism, Eco-Labels, Life-Cycle Thinking

const quizPool = [
    {
        question: 'Which label certifies that a wild-capture fishery is sustainable?',
        options: ['USDA Organic', 'MSC Certified Sustainable Seafood — blue fish tick', 'FSC Certified', 'ENERGY STAR'],
        correct: 1,
        explanation: 'MSC blue fish tick certifies wild fisheries against sustainable stocks, ecosystem impact and management. It covers ~19% of global marine catch.'
    },
    {
        question: 'What does "95% organic ingredients" mean under USDA Organic rules?',
        options: ['The farm uses fewer pesticides', 'Product meets minimum to bear the USDA Organic seal', 'Only packaging is organic', 'Identical to "made with organic ingredients"'],
        correct: 1,
        explanation: 'USDA Organic seal requires at least 95% certified organic ingredients. "Made with organic ingredients" requires 70%.'
    },
    {
        question: 'Spot the greenwashing: "Our bottle is 100% eco-friendly!"',
        options: ['Credible — eco-friendly is regulated', 'Vague greenwashing — no legal definition or proof', 'Means home-compostable', 'Guarantees carbon neutrality'],
        correct: 1,
        explanation: 'Vague "eco-friendly" without lifecycle proof violates FTC Green Guides and EU Green Claims Directive.'
    },
    {
        question: 'Which is cradle-to-cradle thinking?',
        options: ['Design for landfill', 'Carpet tile materials become nutrients for new tiles', 'Burn waste without recovery', 'Downcycle plastic once'],
        correct: 1,
        explanation: 'Cradle-to-cradle designs waste = food. Technical nutrients cycle endlessly; biological nutrients return safely to biosphere.'
    },
    {
        question: 'Most credible way to verify an ecolabel in a shop?',
        options: ['Assume any green leaf is certified', 'Search official public database (EPEAT, FSC Connect, MSC)', 'Check brand Instagram', 'Trust "biodegradable" text'],
        correct: 1,
        explanation: 'Credible labels maintain public databases: FSC Connect, MSC fisheries, ENERGY STAR Product Finder, EU Ecolabel catalogue.'
    },
    {
        question: 'Which ISO standard defines Type I ecolabels?',
        options: ['ISO 14021', 'ISO 14024', 'ISO 14025', 'ISO 14040'],
        correct: 1,
        explanation: 'ISO 14024 covers Type I — third-party, multi-criteria, lifecycle-based. Type II is self-declared (14021), Type III is EPD (14025).'
    },
    {
        question: 'EU Ecolabel flower covers how many product groups?',
        options: ['5', '24', '100', '2'],
        correct: 1,
        explanation: 'EU Ecolabel covers 24 groups including textiles, hard coverings, tourist accommodation and cleaning products.'
    },
    {
        question: 'ENERGY STAR is run by:',
        options: ['EU Commission', 'U.S. EPA & DOE', 'FSC', 'B Lab'],
        correct: 1,
        explanation: 'ENERGY STAR (1992) is a joint program of the U.S. Environmental Protection Agency and Department of Energy.'
    },
    {
        question: 'FSC Mix means:',
        options: ['100% recycled', 'Mix of certified, controlled and reclaimed material', 'Plantation only', 'Not FSC'],
        correct: 1,
        explanation: 'FSC Mix combines FSC-certified forests, controlled sources and reclaimed material. FSC 100% is fully certified, FSC Recycled is post-consumer.'
    },
    {
        question: 'Which claim is legally banned from generic use under proposed EU Green Claims Directive without proof?',
        options: ['Recyclable where facilities exist', 'Carbon neutral', 'Energy efficient (measured)', 'Compostable per EN 13432'],
        correct: 1,
        explanation: 'Generic "carbon neutral" without lifecycle data will be banned; substantiated, third-party verified claims remain allowed.'
    },
    {
        question: 'Blue Angel (Der Blaue Engel) was founded in:',
        options: ['2006', '1978', '1992', '2010'],
        correct: 1,
        explanation: 'Blue Angel (Germany, 1978) is the world oldest ecolabel, now >12,000 products in ~120 categories.'
    },
    {
        question: 'Rainforest Alliance frog seal merged with which label in 2018?',
        options: ['UTZ', 'Fairtrade', 'MSC', 'FSC'],
        correct: 0,
        explanation: 'Rainforest Alliance merged with UTZ in 2018, expanding cocoa/coffee certification.'
    },
    {
        question: 'Fairtrade Premium is:',
        options: ['Profit for retailers', 'Extra sum for farmer cooperatives to invest', 'Government tax', 'Carbon offset'],
        correct: 1,
        explanation: 'Beyond minimum price, Fairtrade Premium goes to cooperatives for community investment — schools, clinics, infrastructure.'
    },
    {
        question: 'Leaping Bunny guarantees:',
        options: ['Vegan ingredients', 'No animal testing at any stage including suppliers', 'Cruelty-free final product only', 'Organic'],
        correct: 1,
        explanation: 'Leaping Bunny audits entire supply chain for no animal testing, including ingredient suppliers — internationally recognized.'
    },
    {
        question: 'B Corp certification assesses:',
        options: ['Product recyclability only', 'Whole company across governance, workers, community, environment, customers', 'Energy use only', 'Packaging only'],
        correct: 1,
        explanation: 'Certified B Corporation (B Lab) certifies companies, not products, requiring 80+ points across five impact areas.'
    },
    {
        question: 'EPEAT rating for electronics includes tier:',
        options: ['Bronze, Silver, Gold, Climate+', 'A, B, C, D', '1-5 stars', 'Red/Green'],
        correct: 0,
        explanation: 'EPEAT uses Bronze, Silver, Gold and Climate+ — required for U.S. federal procurement, now in 43 countries.'
    },
    {
        question: 'Cradle to Cradle Certified levels are:',
        options: ['Basic, Bronze, Silver, Gold, Platinum', 'I, II, III', 'A-E', 'Pass/Fail'],
        correct: 0,
        explanation: 'C2C Certified v4 assesses material health, circularity, energy, water and social fairness across Basic to Platinum.'
    },
    {
        question: 'Oxo-degradable plastic is problematic because:',
        options: ['Too expensive', 'Fragments into microplastics, not biodegraded', 'Only black plastic', 'Requires freezer'],
        correct: 1,
        explanation: 'Oxo-degradable fragments; EU restricted marketing as biodegradable since 2021 — true biodegradation needs industrial composting per EN 13432.'
    },
    {
        question: 'TerraChoice "7 Sins" — "Hidden trade-off" example:',
        options: ['Energy-efficient device but highly polluting production', 'Accurate recycling claim', 'Certified paper', 'EPD disclosure'],
        correct: 0,
        explanation: 'Hidden trade-off highlights one green attribute while ignoring larger harm — e.g., recycled packaging on a polluting product.'
    },
    {
        question: 'French law now mandates for electronics:',
        options: ['Repairability score at point of sale', 'Free extra phone', 'Plastic-free only', 'Solar charging'],
        correct: 0,
        explanation: 'France (2021) requires repairability index for phones, laptops, appliances — EU Ecodesign expands this EU-wide.'
    },
    {
        question: 'Cotton t-shirt LCA: ~2,700 L water mostly from:',
        options: ['Transport', 'Cotton farming (irrigation)', 'Retail lighting', 'Consumer ironing'],
        correct: 1,
        explanation: 'Farming dominates water; dyeing/finishing dominates CO₂. Transport is often only ~5% of carbon.'
    },
    {
        question: 'WRAP UK: extending garment life by 9 months cuts carbon/water/waste by:',
        options: ['1-2%', '20-30%', '80%', '0%'],
        correct: 1,
        explanation: 'WRAP: +9 months wear cuts impacts 20-30%. Washing cold and line-drying also cuts use-phase energy by ~2/3.'
    },
    {
        question: 'Which stage is often overestimated in footprint?',
        options: ['Raw material', 'Manufacturing', 'Transport', 'Dyeing'],
        correct: 2,
        explanation: 'Transport is visible but typically 5-10% of product carbon; production and use dominate for food, clothing, electronics.'
    },
    {
        question: 'IS0 14040/14044 defines:',
        options: ['Organic farming', 'Life Cycle Assessment principles and framework', 'Energy labeling', 'Forest management'],
        correct: 1,
        explanation: 'ISO 14040/14044 standardizes LCA — goal/scope, inventory, impact assessment, interpretation.'
    },
    {
        question: 'Patagonia Worn Wear is:',
        options: ['New collection', 'Trade-in, repair and resale platform', 'Carbon offset', 'Recycling bin'],
        correct: 1,
        explanation: 'Worn Wear extends garment life via repair and used marketplace; Patagonia also publishes Footprint Chronicles.'
    },
    {
        question: 'IKEA Buy Back is:',
        options: ['Free gift', 'Resells used IKEA furniture via Circular Hub', 'Loan program', 'Charity only'],
        correct: 1,
        explanation: 'Buy Back + Circular Hub resell used furniture; IKEA uses FSC-certified wood and IWAY standards.'
    },
    {
        question: '"CFC-free" today is an example of:',
        options: ['Relevant claim', 'Irrelevant claim — CFCs banned since 1987', 'Type I label', 'Carbon neutral'],
        correct: 1,
        explanation: 'Irrelevance sin: claiming absence of banned substance — no environmental benefit.'
    },
    {
        question: 'Which label certifies sustainable forest management?',
        options: ['MSC', 'FSC', 'ENERGY STAR', 'Leaping Bunny'],
        correct: 1,
        explanation: 'Forest Stewardship Council (FSC) certifies forests for biodiversity, ecological processes and community rights — 230M ha globally.'
    },
    {
        question: 'Fairtrade minimum price protects farmers when:',
        options: ['Market price is high', 'Market price falls below sustainable cost', 'Only organic', 'Only cocoa'],
        correct: 1,
        explanation: 'Fairtrade sets a floor; when market dips below, cooperatives still receive minimum + Premium.'
    },
    {
        question: 'USDA Organic farmland requires transition period of:',
        options: ['1 month', '3 years without prohibited substances', '10 years', 'No period'],
        correct: 1,
        explanation: 'Land must be free of synthetic pesticides/fertilizers for 36 months before harvest can be certified organic.'
    },
    {
        question: 'GOTS certifies:',
        options: ['Only cotton fiber', 'Fiber + processing (dyeing, labor, chemicals)', 'Only shop', 'Only carbon'],
        correct: 1,
        explanation: 'Global Organic Textile Standard audits fiber through to finished textile — chemicals, water, social criteria.'
    },
    {
        question: 'Ellen MacArthur Foundation champions:',
        options: ['Linear economy', 'Circular economy', 'De-growth only', 'Fossil expansion'],
        correct: 1,
        explanation: 'Ellen MacArthur Foundation popularized circular economy — keep products in use, design out waste.'
    },
    {
        question: 'A credible label license code looks like:',
        options: ['Eco-friendly!', 'FSC-C123456 or EU Ecolabel FR/011/001', 'Green leaf icon', 'High quality'],
        correct: 1,
        explanation: 'Traceable code searchable in public registry is the hallmark of third-party certification.'
    },
    {
        question: 'H&M Higg score removal in 2022 was due to:',
        options: ['Too accurate', 'Norwegian Authority ruled claims insufficient', 'Sold out', 'Rebrand'],
        correct: 1,
        explanation: 'Norwegian Consumer Authority found Higg-based sustainability claims lacked substantiation; H&M removed scorecards.'
    },
    {
        question: 'UN Global E-waste Monitor 2024: formally recycled e-waste is about:',
        options: ['90%', '17%', '50%', '2%'],
        correct: 1,
        explanation: 'Only ~17% of global e-waste is formally collected/recycled — recovery is critical for rare earths.'
    },
    {
        question: 'Use-phase dominates footprint for:',
        options: ['Cotton farming', 'Energy-using appliances/electronics during operation', 'Mining', 'Packaging'],
        correct: 1,
        explanation: 'For washing machines, fridges, phones, use-phase electricity is ~30-70% of lifecycle carbon.'
    },
    {
        question: 'Cradle-to-cradle technical nutrient example:',
        options: ['Compostable food scraps', 'Aluminum that cycles endlessly without quality loss', 'Single-use plastic to landfill', 'Food waste to sewer'],
        correct: 1,
        explanation: 'Technical nutrients (metals, polymers designed for loop) vs biological nutrients (compostable organics).'
    },
    {
        question: 'Which is Type III label?',
        options: ['EU Ecolabel', 'Environmental Product Declaration (EPD)', 'Self-declared recyclable', 'Eco-friendly stamp'],
        correct: 1,
        explanation: 'Type III (ISO 14025) quantifies LCA data as EPD — third-party verified, not a pass/fail seal.'
    },
    {
        question: 'Green consumerism focuses on high-impact categories:',
        options: ['Phone cases only', 'Energy, transport, food, clothing', 'Stickers', 'Pens'],
        correct: 1,
        explanation: 'Systemic impacts dwarf single swaps; focus on energy, mobility, diet and apparel yields most reduction.'
    },
    {
        question: 'Repairability is central to:',
        options: ['EU Ecodesign Regulation 2024', 'Only fashion', 'CFC ban', 'Organic'],
        correct: 0,
        explanation: 'Ecodesign mandates repairability, spare parts and durability for phones, appliances, batteries.'
    },
    {
        question: 'MSC blue tick requires all three principles. Which is NOT one?',
        options: ['Sustainable fish stocks', 'Minimal ecosystem impact', 'Effective management', 'Lowest price'],
        correct: 3,
        explanation: 'MSC principles: sustainable stocks, environmental impact, management — price is not a criterion.'
    },
    {
        question: 'Which claim is honest scope language?',
        options: ['100% recyclable everywhere', 'Recyclable where facilities exist — check locally', 'Infinite reuse', 'Zero impact'],
        correct: 1,
        explanation: '"Where facilities exist" acknowledges infrastructure limits — required for FTC honesty.'
    },
    {
        question: 'FTC Green Guides require:',
        options: ['No evidence', 'Substantiation and qualified claims', 'Vague language', 'Leaf logo'],
        correct: 1,
        explanation: 'FTC §260 demands competent and reliable evidence, specificity, and prohibition of deceptive generic terms.'
    },
    {
        question: 'EU Ecolabel catalogue lists products. Approx count:',
        options: ['100', '90,000+', '500,000', '10'],
        correct: 1,
        explanation: 'EU catalogue exceeds 90,000 products/services — searchable by license number.'
    },
    {
        question: 'Self-declared Type II label example:',
        options: ['Blue Angel', 'Recyclable (self-claimed)', 'FSC 100%', 'C2C Platinum'],
        correct: 1,
        explanation: 'Type II (ISO 14021) is manufacturer-declared, single-attribute, no independent lifecycle audit.'
    },
    {
        question: 'Which helps verify ENERGY STAR product?',
        options: ['Instagram', 'ENERGY STAR Product Finder', 'Word of mouth', 'Leaf icon'],
        correct: 1,
        explanation: 'ENERGY STAR Product Finder and certified product list are the official registries.'
    },
    {
        question: 'C2C material health rates:',
        options: ['Only color', 'Chemical safety for human/environmental health', 'Only price', 'Only weight'],
        correct: 1,
        explanation: 'C2C material health inventories chemicals to avoid carcinogens, endocrine disruptors, etc.'
    },
    {
        question: 'Which is biological nutrient?',
        options: ['Aluminum frame', 'Compostable organic textile fiber', 'PVC pipe', 'Concrete'],
        correct: 1,
        explanation: 'Biological nutrients safely return to biosphere via composting.'
    },
    {
        question: 'Life-cycle stage that includes detergent and water:',
        options: ['Raw material', 'Manufacturing', 'Use', 'Distribution'],
        correct: 2,
        explanation: 'Use phase covers consumer washing, energy, detergent — major hotspot for apparel.'
    },
    {
        question: 'Framework laptops highlight:',
        options: ['Glue-only design', 'User-replaceable modules and repairability', 'Disposable battery', 'No spare parts'],
        correct: 1,
        explanation: 'Framework sells modular laptops with replaceable RAM, battery, ports and published repair guides.'
    },
    {
        question: 'Fairphone addresses footprint hotspot of:',
        options: ['Transport', 'Mining (cobalt, rare earths) via responsible sourcing', 'Retail', 'Advertising'],
        correct: 1,
        explanation: 'Fairphone maps minerals, uses Fairtrade gold, avoids conflict minerals, extends life.'
    },
    {
        question: 'Single life-cycle hotspot for smartphone carbon is:',
        options: ['Packaging only', 'Mining + assembly (~30%) + use electricity (~30%) split', 'Phone case', 'Screen protector'],
        correct: 1,
        explanation: 'Smartphone LCA ~ 60-80 kg CO₂e: manufacturing 50-70%, use 20-30%, transport small.'
    },
    {
        question: 'Which is NOT a greenwashing sin?',
        options: ['Hidden trade-off', 'No proof', 'Third-party certified Type I label', 'Vagueness'],
        correct: 2,
        explanation: 'Credible Type I certification is the antidote to sins — not a sin.'
    },
    {
        question: 'EU Green Claims Directive 2024 targets:',
        options: ['Banning all labels', 'Requiring substantiation + independent verification for green claims', 'Only color', 'Voluntary leaf logos'],
        correct: 1,
        explanation: 'Directive mandates evidence in line with Product Environmental Footprint and verification by independent party.'
    },
    {
        question: 'UNEP Sustainable Consumption goal:',
        options: ['Buy more', 'Meet needs while minimizing resource use so future generations can meet theirs', 'Only luxury', 'No regulation'],
        correct: 1,
        explanation: 'UNEP definition ties consumption to intergenerational equity and resource efficiency.'
    },
    {
        question: '6R hierarchy — most effective R is:',
        options: ['Recycle', 'Refuse / Reduce', 'Rot', 'Recover'],
        correct: 1,
        explanation: 'Refuse and Reduce avoid impacts; Recycle/Rot manage them after — prefer earlier Rs.'
    },
    {
        question: 'Which label is company-level, not product-level?',
        options: ['FSC', 'B Corp', 'MSC', 'USDA Organic'],
        correct: 1,
        explanation: 'B Corp certifies governance and operations of whole company, not individual product.'
    },
    {
        question: 'ENERGY STAR products are typically:',
        options: ['10-50% more efficient than non-certified', 'Same efficiency', 'Less efficient', 'Not tested'],
        correct: 0,
        explanation: 'ENERGY STAR threshold 10-50% above federal minimum depending on category.'
    },
    {
        question: 'Forest area certified by FSC is about:',
        options: ['1,000 ha', '230 million ha', '10 ha', 'Zero'],
        correct: 1,
        explanation: 'FSC reports ~230M hectares certified globally.'
    },
    {
        question: 'MSC certified share of global marine wild catch:',
        options: ['1%', '19%', '80%', '0%'],
        correct: 1,
        explanation: 'MSC ~19% of marine wild catch by volume.'
    },
    {
        question: 'Rainforest Alliance certified area:',
        options: ['6 million ha', '100 ha', '1 billion ha', 'Zero'],
        correct: 0,
        explanation: 'Rainforest Alliance reports ~6M ha certified farms/forests.'
    },
    {
        question: 'EPEAT countries:',
        options: ['2', '43', '100', '1'],
        correct: 1,
        explanation: 'EPEAT operates in 43 countries.'
    },
    {
        question: 'B Corp community size:',
        options: ['10 companies', '9,000+ in 96 countries', '100', 'Zero'],
        correct: 1,
        explanation: 'B Lab reports >9,000 B Corps across 96 countries.'
    },
    {
        question: 'Carbon footprint of cotton tee range per WRAP:',
        options: ['4-8 kg CO₂e', '100 kg', '0.1 kg', '500 kg'],
        correct: 0,
        explanation: 'WRAP/Bio Intelligence estimate 4-8 kg CO₂e for standard cotton tee; our 7 kg is mid-range.'
    },
    {
        question: 'Which slows loop but does not close it?',
        options: ['Longer use / repair (slows)', 'Cradle-to-cradle cycling (closes)', 'Composting (closes bio loop)', 'Reuse via resale (keeps in use)'],
        correct: 0,
        explanation: 'Slowing loop = extend life; closing loop = material returns as input. Both needed, distinct.'
    },
    {
        question: 'Which demonstrates greenwashing by "lesser of two evils"?',
        options: ['Organic apple', 'Green cigarettes / eco-methanol cigarettes', 'FSC paper', 'EPD disclosed cement'],
        correct: 1,
        explanation: 'Promoting inherently harmful product as green because one attribute slightly better.'
    },
    {
        question: 'Most effective consumer action for apparel footprint after buying certified:',
        options: ['Wash hot daily', 'Wash cold, less often, line-dry, repair', 'Throw after one wear', 'Iron every time'],
        correct: 1,
        explanation: 'Use-phase dominates consumer-controllable share; cold wash + less + repair cuts deeply.'
    },
    {
        question: 'Which database verifies FSC license?',
        options: ['FSC Connect', 'Instagram', 'Yelp', 'Maps'],
        correct: 0,
        explanation: 'search.fsc.org / connect.fsc.org searches codes, species, certificates.'
    },
    {
        question: 'Which checks MSC fishery status?',
        options: ['fisheries.msc.org track-a-fishery', 'Price tag', 'Blog', 'Flyer'],
        correct: 0,
        explanation: 'MSC track-a-fishery portal shows certified fisheries and reassessment status.'
    },
    {
        question: 'What to do if "recyclable" but no local collection?',
        options: ['Wishcycle', 'Do not recycle via curbside; seek take-back or avoid', 'Burn at home', 'Landfill deliberately'],
        correct: 1,
        explanation: 'Check local rules; not all resins collected curbside. Take-back or material choice matters.'
    },
    {
        question: 'EN 13432 defines:',
        options: ['Energy use', 'Industrial compostability', 'Forest', 'Organic food'],
        correct: 1,
        explanation: 'EN 13432 = packaging recoverable via composting and biodegradation under industrial conditions.'
    },
    {
        question: 'Which is honest use-phase energy claim?',
        options: ['Uses zero energy', '4 kWh/year per IEC 62552 test', 'Eco-power!', 'Green energy!'],
        correct: 1,
        explanation: 'Specific measured data per standard is honest; vague "eco-power" is not.'
    },
    {
        question: 'Library of Things supports which R?',
        options: ['Refuse / Reduce via borrowing', 'Rot', 'Landfill', 'Burn'],
        correct: 0,
        explanation: 'Sharing economy avoids purchase — access over ownership.'
    },
    {
        question: 'Delay 48 hours rule helps with:',
        options: ['Greenwashing', 'Impulse buying', 'Certification', 'LCA'],
        correct: 1,
        explanation: 'Pausing 48h for non-essentials reduces impulse purchases — most fade.'
    },
    {
        question: 'Which is third-party multi-criteria label?',
        options: ['Blue Angel', 'Self-declared "natural"', 'Custom leaf stamp', 'Generic eco-friendly'],
        correct: 0,
        explanation: 'Blue Angel Type I audits climate, health, water, resources — lifecycle-based.'
    },
    {
        question: 'Primary hotspot for food footprint is typically:',
        options: ['Transport', 'Production (land, methane, fertilizer)', 'Sticker', 'Shopping bag'],
        correct: 1,
        explanation: 'For food, farming (land use change, methane, inputs) dominates transport ("food miles" smaller).'
    },
    {
        question: 'Best way to question "biodegradable plastic" bag?',
        options: ['Assume home compostable', 'Ask: which standard, conditions, time, and facility?', 'Trust front', 'Smell test'],
        correct: 1,
        explanation: 'Ask for standard (EN 13432), conditions (industrial), timeframe and where facilities exist.'
    },
    {
        question: 'Which label rates electronic product environmental impact for procurement?',
        options: ['FSC', 'EPEAT', 'MSC', 'Fairtrade'],
        correct: 1,
        explanation: 'EPEAT is required/referenced in U.S. federal sustainable procurement for electronics.'
    },
    {
        question: 'Life Cycle Assessment interpretation phase does:',
        options: ['Draw conclusions, identify hotspots, recommend', 'Sell product', 'Make leaf logo', 'Burn waste'],
        correct: 0,
        explanation: 'LCA steps: goal/scope → inventory → impact assessment → interpretation (conclusions, limits, recommendations).'
    },
    {
        question: 'Which helps apparel certification for chemicals?',
        options: ['EU Ecolabel restricts hazardous dyes per REACH', 'No standard', 'Any dye allowed', 'Color only'],
        correct: 0,
        explanation: 'EU Ecolabel textiles limit formaldehyde, AZO dyes, heavy metals etc.'
    },
    {
        question: 'One Planet Network is:',
        options: ['UN platform for sustainable consumption/production', 'Shopping mall', 'Single brand', 'No such'],
        correct: 0,
        explanation: 'One Planet (10YFP) hosts tools, country reporting, consumer info workstreams.'
    },
    {
        question: 'REACH regulates:',
        options: ['Traffic', 'Hazardous chemicals in EU', 'Energy labels', 'Fishing'],
        correct: 1,
        explanation: 'REACH = Registration, Evaluation, Authorisation, Restriction of Chemicals.'
    },
    {
        question: 'Which action best exemplifies sufficiency?',
        options: ['Buy extra backup', 'Use longer, share, need-based buying', 'Hoarding', 'Impulse'],
        correct: 1,
        explanation: 'Sufficiency = meeting needs with less throughput; questions need before desire.'
    },
    {
        question: 'Which certification audits material reuse and renewable energy together?',
        options: ['Cradle to Cradle Certified', 'Generic leaf', 'Type II', 'No proof'],
        correct: 0,
        explanation: 'C2C audits material health, reuse, renewable energy, water, social fairness.'
    },
    {
        question: 'If packaging says "compostable" without standard, it likely needs:',
        options: ['Home bin at 20°C', 'Industrial facility ~58°C', 'Ocean', 'Desert'],
        correct: 1,
        explanation: 'Many compostable needs industrial conditions; home compostable must say "OK compost HOME" or similar.'
    },
    {
        question: 'How many product groups does Blue Angel cover?',
        options: ['5', '~120 categories', '2', '1000'],
        correct: 1,
        explanation: 'Blue Angel ~120 categories — paper, paints, appliances, construction.'
    },
    {
        question: 'Which is NOT a lifecycle stage?',
        options: ['Raw material extraction', 'Manufacturing', 'Use', 'Instagram likes'],
        correct: 3,
        explanation: 'LCA stages: raw, manufacture, distribution, use, end-of-life — not social media.'
    },
    {
        question: 'Design to disassemble helps which stage?',
        options: ['Raw', 'End of life (disassembly for reuse/recycle)', 'Transport', 'Use'],
        correct: 1,
        explanation: 'Fasteners, mono-materials allow recovery; glues/composites block it.'
    },
    {
        question: 'Which buying rule reduces footprint most reliably?',
        options: ['Buy cheapest', 'Buy durable + repairable', 'Buy newest trend', 'Buy disposable'],
        correct: 1,
        explanation: 'Durable prolongs life, repairable avoids replacement — both cut lifecycle impacts.'
    },
    {
        question: 'EPD stands for:',
        options: ['Eco Paper Document', 'Environmental Product Declaration', 'Energy Product Data', 'Everyday Purchase'],
        correct: 1,
        explanation: 'EPD = quantified LCA data per ISO 14025, verified by independent program operator.'
    },
    {
        question: 'Washing apparel in cold water vs 60°C saves about:',
        options: ['0%', 'Up to 60% energy per load', '200%', '5%'],
        correct: 1,
        explanation: 'Most wash energy heats water — 30°C/cold saves majority.'
    },
    {
        question: 'Which is honest "recycled" claim?',
        options: ['100% recycled everywhere forever', '50% post-consumer recycled, FSC Recycled C012345', 'Recycled vibes', 'Probably recycled'],
        correct: 1,
        explanation: 'Specific % + post/pre-consumer + code is verifiable.'
    },
    {
        question: 'FSC controlled wood means:',
        options: ['Uncontrolled illegal', 'Mitigates risk of unacceptable sources (mix)', '100% virgin', 'No forest'],
        correct: 1,
        explanation: 'Controlled Wood avoids illegal, rights-violating, high conservation value threatened, GMO, conversion.'
    },
    {
        question: 'Which impacts life-cycle thinking for smart choice?',
        options: ['Only price', 'Price + footprint across lifecycle', 'Only color', 'Only brand hype'],
        correct: 1,
        explanation: 'Life-cycle thinking balances cost, performance and footprint across stages.'
    },
    {
        question: 'Which is example of burden-shifting?',
        options: ['Saving transport CO₂ but increasing chemical pollution', 'Reducing all impacts together', 'C2C cycling', 'No impact'],
        correct: 0,
        explanation: 'Burden-shifting optimizes one stage/metric while worsening another hidden one.'
    },
    {
        question: 'Best question to ask if "natural" claims sustainability:',
        options: ['Does natural mean sustainable, certified or low impact?', 'Natural always good', 'Ignore', 'Buy because botanical'],
        correct: 0,
        explanation: 'Arsenic, oil are natural — natural ≠ sustainable without LCA and certification.'
    },
    {
        question: 'Zalando overhaul in 2023 was due to:',
        options: ['New logo', 'EU push on generic claims required filter overhaul', 'Sold out', 'Merger'],
        correct: 1,
        explanation: 'Green Claims pressure led Zalando to revamp sustainability filters and remove misleading "sustainable" tags.'
    },
    {
        question: 'Which certification would suit "take-back enabled modular sofa"?',
        options: ['ENERGY STAR', 'Cradle to Cradle Certified', 'MSC', 'Leaping Bunny'],
        correct: 1,
        explanation: 'Modular, recoverable furniture aligns with C2C circularity and material health.'
    },
    {
        question: 'What does "chlorine-free paper" honestly need to claim low impact?',
        options: ['Totally chlorine free (TCF) vs elemental chlorine free (ECF) + certified forest', 'Any paper', 'No claim needed', 'Just color white'],
        correct: 0,
        explanation: 'TCF/ECF plus FSC/Blue Angel clarifies bleaching chemistry and fiber source — vague "chlorine-free" is insufficient.'
    },
    {
        question: 'Which consumer habit most reduces food footprint?',
        options: ['More imported air-freight', 'Less red meat and dairy, less waste', 'More bottled water', 'Single-use cutlery'],
        correct: 1,
        explanation: 'Diet shift and waste reduction dominate food LCA; air-freight is small share of most diets.'
    }
];

// Utility - Fisher-Yates shuffle, return new array
function shuffleArray(array) {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a;
}

// State for active randomized quiz
let activeQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

/**
 * Pick random subset 5-10 questions
 * @returns {Array}
 */
function getRandomQuizSet() {
    const count = Math.floor(Math.random() * 6) + 5; // 5 to 10 inclusive
    return shuffleArray(quizPool).slice(0, count);
}

// Keep legacy name for any external refs
const quizQuestions = quizPool;

/**
 * Initialize quiz inside container with given id
 * @param {string} containerId
 */
function initQuiz(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    activeQuestions = getRandomQuizSet();
    currentQuestionIndex = 0;
    score = 0;
    renderQuiz(container);
}

/**
 * Render current quiz state
 * @param {HTMLElement} container
 */
function renderQuiz(container) {
    const total = activeQuestions.length;
    const q = activeQuestions[currentQuestionIndex];
    const progress = total ? ((currentQuestionIndex) / total) * 100 : 0;

    // Quiz complete screen
    if (currentQuestionIndex >= total) {
        const pct = total ? Math.round((score / total) * 100) : 0;
        let message = '';
        if (pct === 100) message = 'Outstanding — you read labels like a pro! ♻️';
        else if (pct >= 80) message = 'Excellent — near-expert label literacy.';
        else if (pct >= 60) message = 'Solid work — a few more label checks and you\'ll be an expert.';
        else message = 'Good start — revisit the Eco-Labels directory to sharpen your eye.';

        container.innerHTML = `
            <div class="quiz-complete" style="text-align:center; padding: 16px 0;">
                <div style="font-size:48px; margin-bottom:12px;">${pct >= 60 ? '🌿' : '🌱'}</div>
                <h3 style="font-family:var(--font-body); font-weight:600; font-size:22px; color:var(--color-ink); margin-bottom:8px;">You scored ${score} / ${total} — ${pct}%</h3>
                <p style="color:var(--color-muted); margin-bottom:6px;">${message}</p>
                <p style="color:var(--color-muted-soft); font-size:13px; margin-bottom:16px;">Questions are randomized from a pool of ${quizPool.length} — reload or retake for a new set.</p>
                <button class="btn btn-primary" data-quiz-restart>Retake Quiz</button>
                <a href="eco-labels.html" class="btn btn-outline" style="margin-left:8px;">Browse Label Directory</a>
            </div>
        `;
        const restart = container.querySelector('[data-quiz-restart]');
        if (restart) {
            restart.addEventListener('click', function () {
                activeQuestions = getRandomQuizSet();
                currentQuestionIndex = 0;
                score = 0;
                renderQuiz(container);
            });
        }
        return;
    }

    let optionsHtml = '';
    q.options.forEach(function (opt, idx) {
        optionsHtml += `<button class="quiz-option" data-quiz-option="${idx}">${opt}</button>`;
    });

    container.innerHTML = `
        <div class="quiz-progress" aria-hidden="true">
            <div class="quiz-progress-bar" style="width:${progress}%"></div>
        </div>
        <p class="caption-uppercase" style="margin-bottom:8px;">Question ${currentQuestionIndex + 1} of ${total} · Pool ${quizPool.length}</p>
        <h3 class="quiz-question">${q.question}</h3>
        <div class="quiz-options">
            ${optionsHtml}
        </div>
        <div class="quiz-feedback" style="display:none;" aria-live="polite"></div>
        <div style="margin-top:16px; display:flex; gap:8px; justify-content:space-between; align-items:center;">
            <span style="font-size:14px; color:var(--color-muted);">Score: ${score} / ${total}</span>
            <button class="btn btn-primary btn-sm" data-quiz-next style="display:none;">Next →</button>
        </div>
    `;

    answered = false;
    const options = container.querySelectorAll('[data-quiz-option]');
    const feedback = container.querySelector('.quiz-feedback');
    const nextBtn = container.querySelector('[data-quiz-next]');

    options.forEach(function (btn) {
        btn.addEventListener('click', function () {
            if (answered) return;
            answered = true;
            const chosen = parseInt(btn.getAttribute('data-quiz-option'), 10);
            const isCorrect = chosen === q.correct;

            if (isCorrect) {
                score += 1;
                btn.classList.add('is-correct');
                feedback.className = 'quiz-feedback success';
                feedback.textContent = '✓ Correct — ' + q.explanation;
            } else {
                btn.classList.add('is-incorrect');
                const correctBtn = container.querySelector('[data-quiz-option="' + q.correct + '"]');
                if (correctBtn) correctBtn.classList.add('is-correct');
                feedback.className = 'quiz-feedback error';
                feedback.textContent = '✗ Not quite — ' + q.explanation;
            }
            feedback.style.display = 'block';
            nextBtn.style.display = 'inline-flex';
            options.forEach(function (o) { o.disabled = true; });
        });
    });

    nextBtn.addEventListener('click', function () {
        currentQuestionIndex += 1;
        renderQuiz(container);
    });
}

// Auto-init if quiz container exists on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('eco-quiz')) {
        initQuiz('eco-quiz');
    }
    if (document.getElementById('eco-quiz-home')) {
        initQuiz('eco-quiz-home');
    }
});
