// ============================================================
// Going Medieval — Comprehensive Game Data
// ============================================================

export interface Building {
  name: string;
  category: string;
  materials: string;
  description: string;
}

export interface Crop {
  name: string;
  season: string;
  growTime: string;
  yield: string;
  use: string;
}

export interface Animal {
  name: string;
  type: string;
  products: string;
  tamable: boolean;
  danger: string;
}

export interface Research {
  name: string;
  tier: number;
  requires: string;
  unlocks: string;
  description: string;
}

export interface SettlerSkill {
  name: string;
  category: string;
  description: string;
}

export interface Biome {
  name: string;
  temperature: string;
  resources: string;
  difficulty: string;
}

export interface Season {
  name: string;
  temperature: string;
  crops: string;
  threats: string;
  tips: string;
}

export interface DefenseTip {
  title: string;
  category: string;
  description: string;
}

export interface TradeData {
  merchant: string;
  buys: string;
  sells: string;
  notes: string;
}

export interface UndergroundData {
  topic: string;
  category: string;
  description: string;
}

// ============================================================
// BUILDINGS (18 entries)
// ============================================================
export const buildings: Building[] = [
  {
    name: "Wooden Wall",
    category: "Structures",
    materials: "Wood x5",
    description:
      "Basic defensive wall made of wood. Low hit points and vulnerable to fire, but cheap and quick to build. Essential for early-game shelter and perimeter defense.",
  },
  {
    name: "Stone Wall",
    category: "Structures",
    materials: "Stone Block x5",
    description:
      "Sturdy stone wall with high hit points. Resistant to fire and siege damage. Requires Stonecutting research. The backbone of mid-to-late game fortifications.",
  },
  {
    name: "Wooden Floor",
    category: "Floors",
    materials: "Wood x3",
    description:
      "Basic flooring that provides a movement speed bonus and improves room quality. Prevents dirt and filth accumulation. Can be upgraded to stone or fine floors later.",
  },
  {
    name: "Thatched Roof",
    category: "Roofs",
    materials: "Hay x4",
    description:
      "The simplest roof type. Provides basic shelter from rain and snow. Flammable, so keep away from campfires and lightning rods. Quick and cheap to build.",
  },
  {
    name: "Wooden Door",
    category: "Doors",
    materials: "Wood x8",
    description:
      "Standard wooden door that can be opened and closed by settlers. Provides a small thermal insulation bonus. Can be locked to restrict access. Upgradable to stone doors.",
  },
  {
    name: "Research Table",
    category: "Production",
    materials: "Wood x15, Metal Scrap x5",
    description:
      "Where settlers conduct research to unlock new technologies. Requires a settler with high Intellectual skill. The speed of research is directly tied to the Intellectual skill level.",
  },
  {
    name: "Campfire",
    category: "Production",
    materials: "Wood x10",
    description:
      "Basic cooking station that produces simple meals from raw ingredients. Also provides warmth and a mood bonus to nearby settlers. Can be upgraded to a proper Cooking Station.",
  },
  {
    name: "Butcher Table",
    category: "Production",
    materials: "Wood x12",
    description:
      "Used to process animal corpses into meat and leather. Essential for converting hunting spoils into usable resources. Works faster with higher Cooking skill.",
  },
  {
    name: "Tailor Workshop",
    category: "Production",
    materials: "Wood x20, Metal Scrap x5",
    description:
      "Produces clothing and armor from leather, wool, and cloth. Requires Tailoring research. Can craft winter coats, armor, hats, and other apparel to improve settler protection and comfort.",
  },
  {
    name: "Smithy",
    category: "Production",
    materials: "Stone Block x10, Wood x15, Metal Scrap x10",
    description:
      "A forge for smelting metal and crafting tools and weapons. Requires Smithing research. Produces swords, pickaxes, axes, and other metal equipment from iron ingots.",
  },
  {
    name: "Armorer",
    category: "Production",
    materials: "Stone Block x10, Wood x15, Metal Scrap x15",
    description:
      "Specialized workshop for crafting metal armor including plate armor, helmets, and shields. Requires Armor Crafting research. Significantly boosts settler survivability in combat.",
  },
  {
    name: "Brewing Station",
    category: "Production",
    materials: "Wood x15, Metal Scrap x3",
    description:
      "Produces alcoholic beverages such as ale and mead from barley and herbs. Requires Brewing research. Provides mood bonuses and can be traded for high value.",
  },
  {
    name: "Carpenter Bench",
    category: "Production",
    materials: "Wood x20, Metal Scrap x5",
    description:
      "Advanced woodworking station for crafting furniture, wooden weapons, and complex wooden items. Requires Carpentry research. Can make beds, chairs, tables, and wooden bows.",
  },
  {
    name: "Cooking Station",
    category: "Production",
    materials: "Stone Block x5, Wood x10, Metal Scrap x3",
    description:
      "Upgraded cooking facility that can prepare advanced meals, stews, and preserved foods. Requires Advanced Cooking research. Produces higher quality meals that give better mood bonuses.",
  },
  {
    name: "Alchemy Lab",
    category: "Production",
    materials: "Stone Block x10, Wood x10, Metal Scrap x8",
    description:
      "Facility for creating potions, medicine, and experimental compounds. Requires Alchemy research. Can produce healing salves, antidotes, and possibly explosive compounds.",
  },
  {
    name: "Library",
    category: "Recreation",
    materials: "Wood x20, Metal Scrap x5",
    description:
      "A room filled with bookshelves that provides recreation and research speed bonuses. Improves settler mood and Intellectual skill gain. Requires sufficient room quality to count as a proper library.",
  },
  {
    name: "Great Hall",
    category: "Recreation",
    materials: "Wood x30, Stone Block x15, Metal Scrap x5",
    description:
      "A grand communal space that provides massive mood and recreation bonuses when properly furnished with tables, chairs, and decorations. Essential for maintaining settler morale in large colonies.",
  },
  {
    name: "Stone Keep",
    category: "Defense",
    materials: "Stone Block x50, Wood x20, Metal Scrap x15",
    description:
      "A heavily fortified central structure. Provides excellent protection during raids. Can serve as a last-resort defensive position. Requires Masonry and Fortifications research.",
  },
];

// ============================================================
// CROPS (11 entries)
// ============================================================
export const crops: Crop[] = [
  {
    name: "Cabbage",
    season: "Spring, Autumn",
    growTime: "4 days",
    yield: "Medium",
    use: "Staple food crop. Can be eaten raw or cooked into meals. Low nutritional value but fast-growing and reliable.",
  },
  {
    name: "Beet",
    season: "Spring, Summer",
    growTime: "5 days",
    yield: "Medium",
    use: "Versatile vegetable used in cooking recipes. Can be turned into sugar for brewing and preserves. Provides decent nutrition.",
  },
  {
    name: "Barley",
    season: "Spring, Summer",
    growTime: "6 days",
    yield: "High",
    use: "Primary grain crop. Can be milled into flour for bread or used directly in brewing ale. One of the most important crops for food sustainability.",
  },
  {
    name: "Herbs",
    season: "Spring, Summer, Autumn",
    growTime: "4 days",
    yield: "Low",
    use: "Used in medicine crafting at the Alchemy Lab and for flavoring advanced meals. Essential for creating healing items. Slow-growing but multi-season.",
  },
  {
    name: "Redcurrant",
    season: "Spring",
    growTime: "7 days",
    yield: "Medium",
    use: "Berry bush that produces fruits used in brewing and cooking. Provides a mood bonus when eaten fresh. Can be turned into wine or preserves.",
  },
  {
    name: "Apple Tree",
    season: "All (takes 2 seasons to mature)",
    growTime: "14 days (tree maturation)",
    yield: "High (once mature)",
    use: "Long-term food investment. Produces apples that can be eaten raw, cooked, or brewed into cider. Trees are permanent and produce every season once mature.",
  },
  {
    name: "Hay",
    season: "Autumn",
    growTime: "3 days",
    yield: "Very High",
    use: "Animal feed for tamed livestock. Also used for thatched roofing and as a basic crafting material. Essential for maintaining animal populations through winter.",
  },
  {
    name: "Flax",
    season: "Spring",
    growTime: "5 days",
    yield: "Medium",
    use: "Processed into cloth at the Tailor Workshop. Used for making clothing, bandages, and decorative items. One of the only sources of cloth fiber.",
  },
  {
    name: "Mushrooms",
    season: "Autumn (underground preferred)",
    growTime: "5 days",
    yield: "Medium",
    use: "Can only be grown underground in cellars or caves. Used in cooking and alchemy. Grows year-round if planted in subterranean farms with proper temperature.",
  },
  {
    name: "Turnips",
    season: "Autumn, Winter",
    growTime: "5 days",
    yield: "Medium",
    use: "One of the few crops that can survive cold temperatures. A critical winter food source when other crops won't grow. Can be stored for long periods.",
  },
  {
    name: "Carrot",
    season: "Spring, Summer, Autumn",
    growTime: "4 days",
    yield: "Medium",
    use: "Fast-growing vegetable with a long growing season. Excellent for maintaining food variety. Can be used in stews and advanced meals.",
  },
];

// ============================================================
// ANIMALS (13 entries)
// ============================================================
export const animals: Animal[] = [
  {
    name: "Deer",
    type: "Passive",
    products: "Leather, Meat",
    tamable: false,
    danger: "None — flees when approached",
  },
  {
    name: "Boar",
    type: "Aggressive",
    products: "Leather, Meat",
    tamable: false,
    danger: "Medium — will fight back if attacked or cornered",
  },
  {
    name: "Rabbit",
    type: "Passive",
    products: "Leather, Meat (small amount)",
    tamable: false,
    danger: "None — fast and hard to catch",
  },
  {
    name: "Fox",
    type: "Passive",
    products: "Leather",
    tamable: false,
    danger: "Low — may hunt small livestock like chickens if hungry",
  },
  {
    name: "Rat",
    type: "Passive",
    products: "Meat (small amount)",
    tamable: false,
    danger: "None — but can eat stored food if they get into your stockpile",
  },
  {
    name: "Wolf",
    type: "Aggressive",
    products: "Leather, Meat",
    tamable: false,
    danger: "High — hunts in packs and attacks settlers and livestock",
  },
  {
    name: "Bear",
    type: "Very Aggressive",
    products: "Leather (large amount), Meat (large amount)",
    tamable: false,
    danger: "Very High — extremely dangerous, can kill settlers quickly",
  },
  {
    name: "Cow",
    type: "Tamable",
    products: "Milk, Leather",
    tamable: true,
    danger: "None — passive livestock that provides renewable milk",
  },
  {
    name: "Chicken",
    type: "Tamable",
    products: "Eggs, Meat",
    tamable: true,
    danger: "None — produces eggs daily, a reliable food source",
  },
  {
    name: "Goat",
    type: "Tamable",
    products: "Milk, Leather",
    tamable: true,
    danger: "None — hardy animal that produces milk with minimal feed",
  },
  {
    name: "Sheep",
    type: "Tamable",
    products: "Wool, Leather, Meat",
    tamable: true,
    danger: "None — renewable source of wool for tailoring",
  },
  {
    name: "Dog",
    type: "Tamable",
    products: "Companion/Guard",
    tamable: true,
    danger: "None to enemies — assists in combat and hunting, provides mood bonus to bonded settlers",
  },
  {
    name: "Cat",
    type: "Tamable",
    products: "Pest Control",
    tamable: true,
    danger: "None — hunts rats and vermin to protect food stockpiles",
  },
];

// ============================================================
// RESEARCH (20 entries across 3 tiers)
// ============================================================
export const research: Research[] = [
  // Tier 1
  {
    name: "Carpentry",
    tier: 1,
    requires: "None",
    unlocks: "Carpenter Bench, Wooden Furniture, Wooden Weapons (Bows)",
    description:
      "Unlocks advanced woodworking. Your settlers can craft furniture, storage containers, and basic wooden ranged weapons like shortbows. A foundational technology for colony development.",
  },
  {
    name: "Stonecutting",
    tier: 1,
    requires: "None",
    unlocks: "Stone Wall, Stone Floor, Stone Block crafting",
    description:
      "Teaches settlers how to cut and shape stone into building blocks. Enables the construction of sturdy stone walls and floors, a significant upgrade from wood for defense and insulation.",
  },
  {
    name: "Tailoring",
    tier: 1,
    requires: "None",
    unlocks: "Tailor Workshop, Basic Clothing, Winter Coats, Leather Armor",
    description:
      "Unlocks clothing and basic armor production. Essential for surviving winter and protecting settlers from environmental effects. Allows crafting of warm winter gear and light leather armor.",
  },
  {
    name: "Brewing",
    tier: 1,
    requires: "None",
    unlocks: "Brewing Station, Ale, Mead",
    description:
      "Unlocks the production of alcoholic beverages. Brewed drinks provide mood bonuses and have high trade value. Essential for settler morale and economic development through trade.",
  },
  {
    name: "Herbalism",
    tier: 1,
    requires: "None",
    unlocks: "Herb Farming, Basic Medicine, Herbal Remedies",
    description:
      "Unlocks the ability to plant and harvest medicinal herbs. Enables the crafting of basic healing items to treat wounds and illnesses. Critical for settler health and survival.",
  },
  {
    name: "Agriculture",
    tier: 1,
    requires: "None",
    unlocks: "Advanced Crop Plots, Crop Rotation, Higher Yields",
    description:
      "Improves farming efficiency and unlocks larger crop plots. Increases harvest yields and reduces crop failure chance. The backbone of food security for growing colonies.",
  },
  // Tier 2
  {
    name: "Smithing",
    tier: 2,
    requires: "Carpentry",
    unlocks: "Smithy, Metal Tools (Pickaxes, Axes), Iron Weapons (Swords)",
    description:
      "Introduces metalworking. Settlers can smelt iron ore into ingots and forge tools and weapons. Metal tools work faster, and iron weapons deal significantly more damage than wood.",
  },
  {
    name: "Armor Crafting",
    tier: 2,
    requires: "Smithing",
    unlocks: "Armorer Workshop, Plate Armor, Helmets, Shields",
    description:
      "Unlocks heavy metal armor production. Plate armor and helmets dramatically increase settler survivability in combat. Paired with shields, your defenders become formidable against raiders.",
  },
  {
    name: "Advanced Cooking",
    tier: 2,
    requires: "Agriculture",
    unlocks: "Cooking Station, Stews, Preserved Food, Gourmet Meals",
    description:
      "Expands culinary options beyond basic campfire meals. Advanced meals provide better nutrition and mood bonuses. Preserved food lasts longer in storage, reducing winter food spoilage.",
  },
  {
    name: "Animal Taming",
    tier: 2,
    requires: "Agriculture",
    unlocks: "Animal Pen, Tame Livestock, Milk/Eggs/Wool Production",
    description:
      "Allows settlers to tame wild animals for domestication. Tamed animals provide renewable resources like milk, eggs, and wool. Essential for sustainable food and material production.",
  },
  {
    name: "Masonry",
    tier: 2,
    requires: "Stonecutting",
    unlocks: "Stone Keep, Reinforced Walls, Stone Floors, Fortifications",
    description:
      "Advances stone construction techniques. Enables the building of keeps, reinforced defensive walls, and more elaborate stone structures. Improves structural integrity against siege damage.",
  },
  {
    name: "Fortifications",
    tier: 2,
    requires: "Masonry",
    unlocks: "Merlons, Battlements, Fortified Gates, Archer Towers",
    description:
      "Unlocks dedicated defensive structures. Merlons provide cover for archers, fortified gates resist battering, and archer towers give height advantage. Transforms your colony into a proper castle.",
  },
  // Tier 3
  {
    name: "Alchemy",
    tier: 3,
    requires: "Herbalism, Advanced Cooking",
    unlocks: "Alchemy Lab, Potions, Antidotes, Explosive Compounds",
    description:
      "Introduces chemical experimentation. Settlers can brew healing potions, craft antidotes for poisons, and experiment with explosive compounds for demolition and combat.",
  },
  {
    name: "Engineering",
    tier: 3,
    requires: "Smithing, Carpentry",
    unlocks: "Ballista, Catapult, Mechanical Traps, Advanced Machinery",
    description:
      "Unlocks siege weapons and advanced mechanical devices. Ballistae and catapults provide heavy ranged firepower against raiders. Mechanical traps can be set at chokepoints for automated defense.",
  },
  {
    name: "Master Crafting",
    tier: 3,
    requires: "Armor Crafting, Advanced Cooking",
    unlocks: "Masterwork Items, Legendary Quality, Decorative Furniture",
    description:
      "Refines crafting to the highest level. Settlers can create legendary quality weapons, armor, and decorative items. Masterwork items have superior stats and massive trade value.",
  },
  {
    name: "Siege Engineering",
    tier: 3,
    requires: "Engineering, Fortifications",
    unlocks: "Trebuchets, Battering Rams, Siege Defenses, Counter-Siege",
    description:
      "The pinnacle of medieval warfare technology. Build trebuchets for long-range siege warfare and defensive countermeasures. Essential for end-game raider attacks and large-scale battles.",
  },
];

// ============================================================
// SETTLER SKILLS (12 entries)
// ============================================================
export const settlerSkills: SettlerSkill[] = [
  {
    name: "Construction",
    category: "Crafting",
    description:
      "Determines build speed and structure quality. Higher skill means faster construction and stronger walls. Affects room quality calculations for Great Halls and Libraries.",
  },
  {
    name: "Mining",
    category: "Labor",
    description:
      "Affects mining speed and resource yield from digging. Higher skill yields more stone, iron, coal, and clay per tile. Essential for resource gathering and underground expansion.",
  },
  {
    name: "Cooking",
    category: "Crafting",
    description:
      "Determines meal quality and food preparation speed. Higher skill produces better meals that give stronger mood bonuses. Also affects butchering efficiency and preserves shelf life.",
  },
  {
    name: "Tailoring",
    category: "Crafting",
    description:
      "Affects clothing and armor crafting quality. Higher skill produces gear with better insulation, protection, and durability. Essential for preparing winter clothing before cold seasons.",
  },
  {
    name: "Smithing",
    category: "Crafting",
    description:
      "Determines metalworking speed and item quality. Higher skill crafts sharper weapons and more durable tools. Directly affects combat effectiveness of forged weapons.",
  },
  {
    name: "Intellectual",
    category: "Research",
    description:
      "The most important skill for progression. Determines research speed at the Research Table. Higher Intellectual skill unlocks technologies exponentially faster. Difficulty scales with research tier.",
  },
  {
    name: "Farming",
    category: "Labor",
    description:
      "Affects planting, harvesting speed and crop yield. Higher skill increases harvest quantity and reduces the chance of crop failure. Essential for maintaining food security.",
  },
  {
    name: "Animal Handling",
    category: "Labor",
    description:
      "Determines taming success rate and animal care quality. Higher skill tames animals faster and improves livestock production rates. Affected animals include cows, sheep, goats, and chickens.",
  },
  {
    name: "Medicine",
    category: "Support",
    description:
      "Affects wound treatment and healing speed. Higher skill heals injuries faster and with fewer complications. Critical for recovering from raid injuries and treating diseases.",
  },
  {
    name: "Marksman",
    category: "Combat",
    description:
      "Determines ranged combat accuracy and damage with bows, crossbows, and ballistae. Higher skill hits more consistently and deals more damage. Essential for defense strategy with archers.",
  },
  {
    name: "Melee",
    category: "Combat",
    description:
      "Determines close-quarters combat effectiveness with swords, axes, and maces. Higher skill blocks, parries, and deals more melee damage. Front-line defenders need high Melee skill.",
  },
  {
    name: "Speechcraft",
    category: "Social",
    description:
      "Affects trade prices with merchants and social interactions between settlers. Higher skill gets better deals when buying and selling, and helps resolve settler conflicts faster.",
  },
];

// ============================================================
// BIOMES (4 entries)
// ============================================================
export const biomes: Biome[] = [
  {
    name: "Mountain",
    temperature: "Cold year-round",
    resources: "Rich in Stone, Iron Ore, Coal. Scarce Wood and Clay.",
    difficulty: "Hard — harsh climate, limited farmland, abundant predators",
  },
  {
    name: "Valley",
    temperature: "Temperate, distinct seasons",
    resources: "Balanced — Wood, Stone, Clay, Iron, and fertile soil",
    difficulty: "Easy — ideal for beginners, plenty of everything needed",
  },
  {
    name: "Hillside",
    temperature: "Mild, with cold winters",
    resources: "Rich in Wood and Clay. Moderate Stone and Iron.",
    difficulty: "Medium — good starting biome with emphasis on wood-based building",
  },
  {
    name: "Marsh",
    temperature: "Warm, humid",
    resources: "Rich in Herbs, Peat, and Clay. Scarce Stone and Iron.",
    difficulty: "Medium — abundant plant resources but limited building stone",
  },
];

// ============================================================
// SEASONS (4 entries)
// ============================================================
export const seasons: Season[] = [
  {
    name: "Spring",
    temperature: "Mild — 5°C to 18°C",
    crops: "Cabbage, Beet, Barley, Herbs, Redcurrant, Flax, Carrot",
    threats: "Rain storms, occasional flooding",
    tips: "Start planting crops immediately. Gather wild berries while they last. Spring is the best time to expand your colony and prepare for summer growth.",
  },
  {
    name: "Summer",
    temperature: "Hot — 18°C to 32°C",
    crops: "Beet, Barley, Herbs, Carrot",
    threats: "Heat waves, crop withering, increased raider activity",
    tips: "Keep settlers cool with shade and water. Ensure food stockpiles are growing. Summer is prime raiding season, so reinforce defenses before the heat peaks.",
  },
  {
    name: "Autumn",
    temperature: "Mild then cooling — 5°C to 18°C",
    crops: "Cabbage, Herbs, Hay, Mushrooms (underground), Turnips, Carrot",
    threats: "Cold snaps, early frost, food preservation urgency",
    tips: "Harvest everything before the first frost. Plant winter-hardy crops like Turnips. Build underground cellars for food storage. Stockpile hay for livestock.",
  },
  {
    name: "Winter",
    temperature: "Freezing — -15°C to 5°C",
    crops: "Turnips (outdoor), Mushrooms (underground cellar only)",
    threats: "Blizzards, hypothermia, starvation, food spoilage slowing",
    tips: "Ensure settlers have winter clothing or stay near heat sources. Underground farming is critical. Limit outdoor work to essentials. Use stored preserves and cellar food.",
  },
];

// ============================================================
// DEFENSE TIPS (8 entries)
// ============================================================
export const defenseTips: DefenseTip[] = [
  {
    title: "Perimeter Walls",
    category: "Base Design",
    description:
      "Build double-layer stone walls around your colony. Leave a 3-tile gap between layers so defenders can move freely between them. Stone walls are fire-resistant and withstand siege attacks better than wood. Add a roof over wall walkways so archers aren't exposed to enemy fire from above.",
  },
  {
    title: "Archer Towers",
    category: "Structures",
    description:
      "Place archer towers at corners and along long wall sections. Towers give archers height advantage for 25% damage bonus. Equip marksmen with longbows for maximum range. Build towers 2-3 levels high with merlons for cover. Station at least 2 archers per tower facing expected attack directions.",
  },
  {
    title: "Traps and Chokepoints",
    category: "Active Defense",
    description:
      "Create a single narrow entrance to your base lined with spike traps and deadfall traps. Traps deal passive damage as enemies approach. Pair traps with a zigzag corridor design to slow raiders. Place your best melee fighters behind the chokepoint to engage enemies one at a time.",
  },
  {
    title: "Killbox Design",
    category: "Advanced",
    description:
      "A killbox is a deliberately designed area where enemies are funneled. Create a wide open space surrounded by archer positions with clear lines of sight. Add obstacles like stone pillars for cover. The killbox concentrates all your firepower on enemies as they enter, maximizing damage output.",
  },
  {
    title: "Archer Placement",
    category: "Tactics",
    description:
      "Position archers on elevated platforms with merlon cover. A single archer on a tower is worth three on the ground. Prioritize Marksman-skill settlers for ranged defense. Create fallback positions so archers can retreat to secondary towers if the front line is breached.",
  },
  {
    title: "Supply Stockpiles",
    category: "Preparation",
    description:
      "Keep weapon and armor stockpiles near defensive positions. Store food, medicine, and extra ammunition close to combat zones. Build a field hospital with beds and medicine within quick reach. Well-supplied defenders fight longer and recover faster.",
  },
  {
    title: "Fire Safety",
    category: "Preparation",
    description:
      "Raiders may set wooden structures on fire. Replace wooden walls with stone as soon as possible. Keep firebreaks between buildings. Store valuable items away from outer walls. Build a water source near defensive positions for emergency firefighting.",
  },
  {
    title: "Underground Safe Room",
    category: "Advanced",
    description:
      "Dig an underground bunker with food, beds, and medical supplies as a last resort. Access it via a single narrow corridor that can be trapped. If your defenses are overrun, settlers can retreat underground and wait out the raid or mount a counter-attack.",
  },
];

// ============================================================
// TRADE DATA (6 entries)
// ============================================================
export const tradeData: TradeData[] = [
  {
    merchant: "General Merchant",
    buys: "Food, Alcohol, Clothing, Crafted Goods",
    sells: "Raw Materials, Seeds, Basic Tools, Medicine",
    notes: "Arrives every 8-12 days. Best for selling surplus food and buying emergency supplies. Prices fluctuate based on colony wealth and Speechcraft skill.",
  },
  {
    merchant: "Weaponsmith",
    buys: "Metal Ingots, Leather, Weapons",
    sells: "High-Quality Weapons, Shields, Combat Tools",
    notes: "Rare merchant, arrives every 20-25 days. Sells exceptional weapons that can be better than what you can craft. Buy iron ingots when cheap and sell crafted weapons at a profit.",
  },
  {
    merchant: "Armorer",
    buys: "Metal Ingots, Leather, Cloth, Armor",
    sells: "Plate Armor, Helmets, Chainmail, Armor Pieces",
    notes: "Arrives every 15-20 days. Good source of armor before you unlock Armor Crafting research. Sells specialized armor pieces that may not be craftable early-game.",
  },
  {
    merchant: "Farmer",
    buys: "Tools, Weapons, Clothing",
    sells: "Seeds, Livestock, Animal Feed, Food Supplies",
    notes: "Arrives every 7-10 days. The best source for new crop seeds and tame animals. Trade excess tools and weapons for livestock that provide renewable resources.",
  },
  {
    merchant: "Trader Caravan",
    buys: "Everything at lower prices",
    sells: "Everything at higher prices",
    notes: "Large trading party that arrives every 12-15 days. Carries diverse goods but offers worse exchange rates. Good for bulk trading when you need to move large quantities.",
  },
  {
    merchant: "Alchemist",
    buys: "Herbs, Mushrooms, Rare Plants",
    sells: "Potions, Medicine, Antidotes, Rare Ingredients",
    notes: "Rare specialist merchant. Sells advanced medical supplies and potions that are hard to craft. Buy healing items before major battles. Arrives every 18-22 days.",
  },
];

// ============================================================
// UNDERGROUND DATA (6 entries)
// ============================================================
export const undergroundData: UndergroundData[] = [
  {
    topic: "Root Cellar",
    category: "Food Storage",
    description:
      "Underground cellars maintain a constant cool temperature, dramatically slowing food spoilage. Dig at least 3 levels underground and build a dedicated storage room. Store raw food, meals, and preserves here. A well-built cellar can keep food fresh through the entire winter with minimal spoilage.",
  },
  {
    topic: "Cold Storage Optimization",
    category: "Food Storage",
    description:
      "Cellar temperature drops the deeper you go. At 4+ levels underground, temperatures stay near freezing year-round. Use clay or stone floors for insulation. Keep cellars away from heat sources like campfires. Build an airlock with double doors at the entrance to maintain temperature.",
  },
  {
    topic: "Iron Mining",
    category: "Mining",
    description:
      "Iron ore veins are found underground, typically 3-7 levels below the surface. Use settlers with high Mining skill to extract maximum iron per tile. Iron is essential for smithing weapons, tools, and armor. Larger iron deposits are more common in Mountain and Hillside biomes.",
  },
  {
    topic: "Coal Mining",
    category: "Mining",
    description:
      "Coal deposits appear alongside iron at similar depths. Coal fuels forges and provides high-temperature fuel that burns longer than wood. Essential for smelting iron ore into ingots. Stockpile coal for winter when wood is scarce and for powering Smithing stations efficiently.",
  },
  {
    topic: "Underground Farming",
    category: "Farming",
    description:
      "Mushrooms are the only crop that thrives entirely underground. Build a farming room 3+ levels down with clay flooring and you can grow food year-round regardless of surface season. Combine with a root cellar setup for a self-contained food production system immune to weather.",
  },
  {
    topic: "Subterranean Base",
    category: "Base Design",
    description:
      "An entirely underground colony is possible but challenging. Advantages include natural temperature regulation, perfect defense (enemies can't dig), and immunity to weather. Disadvantages include limited space, food restrictions, and settler mood penalties from lack of sunlight. Build skylight shafts if possible.",
  },
];
