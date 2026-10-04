export interface PricingDifference {
  category: string;
  line: string;
  basic: string;
  valueAdded: string;
  premium: string;
  elite: string;
  thumbs?: {
    basic?: string;
    valueAdded?: string;
    premium?: string;
    elite?: string;
  };
}

export const pricingDifferences: PricingDifference[] = [
  { category: "Structure", line: "Steel", basic: "Vizag / JSW Neo", valueAdded: "Vizag / JSW Neo", premium: "Vizag / JSW Neo", elite: "Vizag / JSW Neo" },
  { category: "Structure", line: "Cement", basic: "Ultratech / Ramco", valueAdded: "Ultratech / Ramco", premium: "Ultratech / Ramco", elite: "Ultratech / Ramco" },
  { category: "Structure", line: "RCC design mix", basic: "M20 / M25", valueAdded: "M20 / M25", premium: "M20 / M25", elite: "M20 / M25" },
  { category: "Structure", line: "Ceiling height", basic: "10 ft", valueAdded: "10 ft", premium: "10 ft", elite: "10 ft" },
  { category: "Kitchen", line: "Kitchen wall dado (per sq ft)", basic: "₹50", valueAdded: "₹65", premium: "₹80", elite: "₹90" },
  { category: "Kitchen", line: "Main sink faucet", basic: "₹1,500", valueAdded: "₹2,200", premium: "₹2,800", elite: "₹3,500" },
  { category: "Kitchen", line: "Kitchen sink", basic: "SS ₹3,500", valueAdded: "SS ₹5,000", premium: "SS/Granite ₹6,500", elite: "SS/Granite ₹8,000" },
  { category: "Bathroom", line: "Bathroom wall dado (per sq ft)", basic: "₹50", valueAdded: "₹65", premium: "₹80", elite: "₹90" },
  { category: "Bathroom", line: "Sanitaryware & CP per 1,000 sq ft", basic: "₹30,000", valueAdded: "₹50,000", premium: "₹70,000", elite: "₹80,000", thumbs: { basic: "bath-1.svg", premium: "bath-2.svg" } },
  { category: "Bathroom", line: "Bathroom accessories", basic: "—", valueAdded: "₹5,000", premium: "₹7,000", elite: "₹9,000" },
  { category: "Bathroom", line: "Solar water heater provision", basic: "—", valueAdded: "—", premium: "Yes", elite: "Yes", thumbs: { premium: "solar-provision.svg" } },
  { category: "Doors & Windows", line: "Windows", basic: "Aluminium 2 track", valueAdded: "UPVC + mesh 2.5 track", premium: "UPVC + mesh 3 track", elite: "UPVC + mesh 3 track", thumbs: { basic: "windows-al.svg", valueAdded: "windows-upvc.svg" } },
  { category: "Doors & Windows", line: "Main teak door", basic: "₹25,000", valueAdded: "₹32,000", premium: "₹40,000", elite: "₹50,000" },
  { category: "Doors & Windows", line: "Internal doors", basic: "₹8,000", valueAdded: "₹10,000", premium: "₹12,000", elite: "₹13,000" },
  { category: "Doors & Windows", line: "Pooja room door", basic: "—", valueAdded: "₹27,000", premium: "₹31,000", elite: "₹35,000" },
  { category: "Painting", line: "Interior paint", basic: "Tractor Emulsion", valueAdded: "Premium Emulsion", premium: "Apcolite Premium", elite: "Royale Luxury", thumbs: { basic: "paint-1.svg", valueAdded: "paint-2.svg", premium: "paint-3.svg", elite: "paint-4.svg" } },
  { category: "Painting", line: "Exterior paint", basic: "Ace", valueAdded: "Apex", premium: "Apex", elite: "Apex Ultima" },
  { category: "Flooring", line: "Flooring: living & dining (per sq ft)", basic: "₹70", valueAdded: "₹100", premium: "₹140", elite: "₹160", thumbs: { basic: "floor-1.svg", valueAdded: "floor-2.svg", premium: "floor-3.svg", elite: "floor-4.svg" } },
  { category: "Flooring", line: "Flooring: rooms & kitchen", basic: "₹60", valueAdded: "₹90", premium: "₹120", elite: "₹140" },
  { category: "Flooring", line: "Flooring: balcony & open areas", basic: "₹40", valueAdded: "₹60", premium: "₹80", elite: "₹90" },
  { category: "Flooring", line: "Flooring: staircase granite", basic: "₹90", valueAdded: "₹100", premium: "₹110", elite: "₹140" },
  { category: "Flooring", line: "Flooring: parking", basic: "₹50", valueAdded: "₹60", premium: "₹70", elite: "₹70" },
  { category: "Electrical", line: "Switches & sockets", basic: "Legrand Allzy range", valueAdded: "Legrand Allzy range", premium: "Legrand Mylinc range", elite: "Schneider Unica Pure range" },
  { category: "Electrical", line: "UPS wiring provision", basic: "—", valueAdded: "—", premium: "Yes", elite: "Yes" },
  { category: "Electrical", line: "EV charging point", basic: "—", valueAdded: "—", premium: "—", elite: "Yes", thumbs: { elite: "ev-charger.svg" } },
  { category: "Miscellaneous", line: "Overhead tank", basic: "1,000 L", valueAdded: "1,500 L", premium: "2,000 L", elite: "2,000 L" },
  { category: "Miscellaneous", line: "Underground sump", basic: "4,000 L", valueAdded: "6,000 L", premium: "7,000 L", elite: "8,000 L" },
  { category: "Miscellaneous", line: "Staircase railing", basic: "MS", valueAdded: "MS", premium: "Stainless steel", elite: "Stainless steel + glass", thumbs: { basic: "railing-ms.svg", premium: "railing-ss.svg", elite: "railing-glass.svg" } },
  { category: "Miscellaneous", line: "Copper gas connection", basic: "—", valueAdded: "—", premium: "—", elite: "Yes", thumbs: { elite: "gas-line.svg" } }
];
