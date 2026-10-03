export interface PackageCategory {
  title: string;
  items: string[];
}

export interface Package {
  id: string;
  name: string;
  pricePerSqft: number | null;
  priceNote: string;
  categories: PackageCategory[];
}

export const packages: Package[] = [
  {
    id: "basic",
    name: "Basic",
    pricePerSqft: 2090,
    priceNote: "incl. GST",
    categories: [
      {
        title: "Structure",
        items: [
          "Steel: Vizag | JSW Neo",
          "Cement: Ultratech | Ramco Supercrete of 43 or 53 grade",
          "Aggregates: 20mm & 40mm",
          "Blocks: Standard Red Bricks (9 inch & 4 inch)",
          "RCC Design Mix: M20 / M25 (or per structural designer recommendation)",
          "Ceiling Height: 10 feet (Finished Floor Level to Finished Floor Level)"
        ]
      },
      {
        title: "Kitchen",
        items: [
          "Ceramic Wall Dado: Up to ₹50 / sq.ft.",
          "Main Sink Faucet: Up to ₹1,500",
          "Faucets & Accessories: Parryware | Hindware | Jaquar",
          "Kitchen Sink: Stainless Steel worth ₹3,500"
        ]
      },
      {
        title: "Bathroom",
        items: [
          "Ceramic Wall Dado: Up to 7' height (Up to ₹50 / sq.ft.)",
          "Sanitaryware & CP Fittings: Up to ₹30,000 per 1,000 sq.ft. (Cera / Parryware)",
          "CPVC Pipes: Apollo | Astral",
          "Bathroom Doors: Waterproof flush doors or WPC"
        ]
      },
      {
        title: "Doors & Windows",
        items: [
          "Windows: Aluminum Windows with glass shutters (2 track)",
          "Main Door: Teak Door with Teak frame (5\" x 3.5\"), worth ₹25,000 including fixtures",
          "Internal Doors: Membrane doors / Flush Door with Laminates up to ₹8,000 including fixtures (Sal Wood frame 4\" x 3\")"
        ]
      },
      {
        title: "Painting",
        items: [
          "Interior: JK Putty + Tractor Emulsion",
          "Exterior: Asian Primer + Ace Exterior Emulsion Paint"
        ]
      },
      {
        title: "Flooring",
        items: [
          "Living & Dining: Tiles / Granite up to ₹70 / sq.ft.",
          "Rooms & Kitchen: Tiles / Granite up to ₹60 / sq.ft.",
          "Balcony & Open Areas: Anti-skid tiles up to ₹40 / sq.ft.",
          "Staircase: Sadarahalli Granite up to ₹90 / sq.ft.",
          "Parking: Anti-skid tiles up to ₹50 / sq.ft."
        ]
      },
      {
        title: "Electrical",
        items: [
          "Wires: Fire-proof wires (Finolex | Anchor | Havells)",
          "Switches & Sockets: Legrand Allzy | GM(G9) | HI-FI | Great White"
        ]
      },
      {
        title: "Miscellaneous",
        items: [
          "Overhead Tank: Double-layered 1,000 Ltrs (Duratank)",
          "Underground Sump: 4,000 Ltrs",
          "Staircase Railing: MS Railing",
          "Window Grills: Basic MS Grill with enamel paint at ₹180 / sq.ft."
        ]
      }
    ]
  },
  {
    id: "value-added",
    name: "Value Added",
    pricePerSqft: 2290,
    priceNote: "incl. GST",
    categories: [
      {
        title: "Structure",
        items: [
          "Steel: Vizag | JSW Neo",
          "Cement: Ultratech | Ramco Supercrete of 43 or 53 grade",
          "Aggregates: 20mm & 40mm",
          "Blocks: Standard Red Bricks (9 inch & 4 inch)",
          "RCC Design Mix: M20 / M25 (or per structural designer recommendation)",
          "Ceiling Height: 10 feet (Finished Floor Level to Finished Floor Level)"
        ]
      },
      {
        title: "Kitchen",
        items: [
          "Ceramic Wall Dado: Up to ₹65 / sq.ft.",
          "Main Sink Faucet: Up to ₹2,200",
          "Faucets & Accessories: Parryware | Hindware | Jaquar",
          "Kitchen Sink: Stainless Steel worth ₹5,000 (Nirali, Futura)"
        ]
      },
      {
        title: "Bathroom",
        items: [
          "Ceramic Wall Dado: Up to 7' height (Up to ₹65 / sq.ft.)",
          "Sanitaryware & CP Fittings: Up to ₹50,000 per 1,000 sq.ft. (Kohler / Jaquar / Cera)",
          "CPVC Pipes: Apollo | Astral",
          "Bathroom Doors: Waterproof flush doors or WPC",
          "Accessories: Mirror, Soap Dish, Towel Rail worth ₹5,000 till 1,000 sq.ft. construction"
        ]
      },
      {
        title: "Doors & Windows",
        items: [
          "Windows: UPVC Windows with glass & mesh shutters (2.5 track with 1 mesh: NCL Veka | Prominance | V-tech)",
          "Main Door: Teak Door with Teak frame (5\" x 3.5\"), worth ₹32,000 including fixtures",
          "Internal Doors: Membrane / Flush Door with Laminates up to ₹10,000 (Sal Wood frame 4\" x 3\")",
          "Pooja Room Door: 1 Burma Teak door with Teak frame (5\" x 2.5\"), worth ₹27,000 per 2,000 sq.ft."
        ]
      },
      {
        title: "Painting",
        items: [
          "Interior: JK Putty + Premium Emulsion",
          "Exterior: Asian Primer + Apex Exterior Emulsion Paint"
        ]
      },
      {
        title: "Flooring",
        items: [
          "Living & Dining: Tiles / Granite up to ₹100 / sq.ft.",
          "Rooms & Kitchen: Tiles / Granite up to ₹90 / sq.ft.",
          "Balcony & Open Areas: Anti-skid tiles up to ₹60 / sq.ft.",
          "Staircase: Sadarahalli Granite up to ₹100 / sq.ft.",
          "Parking: Anti-skid tiles up to ₹60 / sq.ft."
        ]
      },
      {
        title: "Electrical",
        items: [
          "Wires: Fire-proof wires (Finolex | Anchor | Havells)",
          "Switches & Sockets: Legrand Allzy | GM(G9) | HI-FI | Great White"
        ]
      },
      {
        title: "Miscellaneous",
        items: [
          "Overhead Tank: Double-layered 1,500 Ltrs (Duratank)",
          "Underground Sump: 6,000 Ltrs",
          "Staircase Railing: MS Railing",
          "Window Grills: Basic MS Grill with enamel paint at ₹180 / sq.ft."
        ]
      }
    ]
  },
  {
    id: "premium",
    name: "Premium",
    pricePerSqft: 2700,
    priceNote: "incl. GST",
    categories: [
      {
        title: "Structure",
        items: [
          "Steel: Vizag | JSW Neo",
          "Cement: Ultratech | Ramco Supercrete of 43 or 53 grade",
          "Aggregates: 20mm & 40mm",
          "Blocks: Standard Red Bricks (9 inch & 4 inch)",
          "RCC Design Mix: M20 / M25 (or per structural designer recommendation)",
          "Ceiling Height: 10 feet (Finished Floor Level to Finished Floor Level)"
        ]
      },
      {
        title: "Kitchen",
        items: [
          "Ceramic Wall Dado: Up to ₹80 / sq.ft.",
          "Main Sink Faucet: Up to ₹2,800",
          "Faucets & Accessories: Parryware | Hindware | Jaquar",
          "Kitchen Sink: Stainless Steel or Granite Finish worth ₹6,500 (Futura, Carysil)"
        ]
      },
      {
        title: "Bathroom",
        items: [
          "Ceramic Wall Dado: Up to 7' height (Up to ₹80 / sq.ft.)",
          "Sanitaryware & CP Fittings: Up to ₹70,000 per 1,000 sq.ft. (Jaquar)",
          "CPVC Pipes: Apollo | Astral",
          "Bathroom Doors: Waterproof flush doors or WPC",
          "Accessories: Mirror, Soap Dish, Towel Rail worth ₹7,000 till 1,000 sq.ft. construction",
          "Solar Water Heater: Provision included"
        ]
      },
      {
        title: "Doors & Windows",
        items: [
          "Windows: UPVC Windows with glass & mesh shutters (3 track with 1 mesh: NCL Veka | Prominance | V-tech)",
          "Main Door: Teak Door with Teak frame (5\" x 3.5\"), worth ₹40,000 including fixtures",
          "Internal Doors: Membrane / Flush Door with Laminates up to ₹12,000 (Sal Wood frame 4\" x 3\")",
          "Pooja Room Door: 1 Burma Teak door with Teak frame (5\" x 2.5\"), worth ₹31,000 per 2,000 sq.ft."
        ]
      },
      {
        title: "Painting",
        items: [
          "Interior: JK Putty + Apcolite Premium Emulsion",
          "Exterior: Asian Primer + Apex Exterior Emulsion Paint"
        ]
      },
      {
        title: "Flooring",
        items: [
          "Living & Dining: Tiles / Granite up to ₹140 / sq.ft.",
          "Rooms & Kitchen: Tiles / Granite up to ₹120 / sq.ft.",
          "Balcony & Open Areas: Anti-skid tiles up to ₹80 / sq.ft.",
          "Staircase: Sadarahalli Granite up to ₹110 / sq.ft.",
          "Parking: Anti-skid tiles up to ₹70 / sq.ft."
        ]
      },
      {
        title: "Electrical",
        items: [
          "Wires: Fire-proof wires (Finolex | Anchor | Havells)",
          "Switches & Sockets: Legrand Mylinc | Havells Coral | Roma",
          "UPS: Wiring provision included"
        ]
      },
      {
        title: "Miscellaneous",
        items: [
          "Overhead Tank: Sintex / Apollo Double-layered 2,000 Ltrs (Additional capacity @ ₹9/L)",
          "Underground Sump: 7,000 Ltrs",
          "Staircase Railing: Stainless Steel (SS 304 grade profiles)",
          "Window Grills: Basic MS Grill with enamel paint at ₹180 / sq.ft."
        ]
      }
    ]
  },
  {
    id: "elite",
    name: "Elite",
    pricePerSqft: null, // TODO — Elite price not yet provided by the owner
    priceNote: "incl. GST",
    categories: [
      {
        title: "Structure",
        items: [
          "Steel: Vizag | JSW Neo",
          "Cement: Ultratech | Ramco Supercrete of 43 or 53 grade",
          "Aggregates: 20mm & 40mm",
          "Blocks: Standard Red Bricks (9 inch & 4 inch)",
          "RCC Design Mix: M20 / M25 (or per structural designer recommendation)",
          "Ceiling Height: 10 feet (Finished Floor Level to Finished Floor Level)"
        ]
      },
      {
        title: "Kitchen",
        items: [
          "Ceramic Wall Dado: Up to ₹90 / sq.ft.",
          "Main Sink Faucet: Up to ₹3,500",
          "Faucets & Accessories: Parryware | Hindware | Jaquar",
          "Kitchen Sink: Stainless Steel or Granite Finish worth ₹8,000 (Futura, Carysil)"
        ]
      },
      {
        title: "Bathroom",
        items: [
          "Ceramic Wall Dado: Up to 7' height (Up to ₹90 / sq.ft.)",
          "Sanitaryware & CP Fittings: Up to ₹80,000 per 1,000 sq.ft. (Kohler)",
          "CPVC Pipes: Apollo | Astral",
          "Bathroom Doors: Waterproof flush doors or WPC",
          "Accessories: Mirror, Soap Dish, Towel Rail worth ₹9,000 till 1,000 sq.ft. construction",
          "Solar Water Heater: Provision included"
        ]
      },
      {
        title: "Doors & Windows",
        items: [
          "Windows: UPVC Windows with glass & mesh shutters (3 track with 1 mesh: NCL Veka | Wintech | Karthik UPVC | Simta Astrix)",
          "Main Door: Teak Door with Teak frame (5\" x 3.5\"), worth ₹50,000 including fixtures",
          "Internal Doors: Membrane / Flush Door with Laminates up to ₹13,000 (Sal Wood frame 4\" x 3\")",
          "Pooja Room Door: 1 Burma Teak door with Teak frame (5\" x 2.5\"), worth ₹35,000 per 2,000 sq.ft."
        ]
      },
      {
        title: "Painting",
        items: [
          "Interior: JK Putty + Royale Luxury Emulsion",
          "Exterior: Asian Primer + Apex Ultima Exterior Emulsion Paint"
        ]
      },
      {
        title: "Flooring",
        items: [
          "Living & Dining: Tiles / Granite up to ₹160 / sq.ft.",
          "Rooms & Kitchen: Tiles / Granite up to ₹140 / sq.ft.",
          "Balcony & Open Areas: Anti-skid tiles up to ₹90 / sq.ft.",
          "Staircase: Sadarahalli Granite up to ₹140 / sq.ft.",
          "Parking: Anti-skid tiles up to ₹70 / sq.ft."
        ]
      },
      {
        title: "Electrical",
        items: [
          "Wires: Fire-proof wires (Finolex | Anchor | Havells)",
          "Switches & Sockets: Schneider Unica Pure | Legrand Myrius | Jaquar",
          "UPS: Wiring provision included",
          "EV Charger: 1 EV Charging Point at Ground Floor"
        ]
      },
      {
        title: "Miscellaneous",
        items: [
          "Overhead Tank: Sintex / Apollo Double-layered 2,000 Ltrs (Additional capacity @ ₹9/L)",
          "Underground Sump: 8,000 Ltrs",
          "Staircase Railing: Stainless Steel Glass Railing (SS 304 grade profiles)",
          "Window Grills: Basic MS Grill with enamel paint at ₹180 / sq.ft.",
          "Gas Connection: 1 Copper gas connection per dwelling unit (1,500 sq.ft. package area)"
        ]
      }
    ]
  }
];
