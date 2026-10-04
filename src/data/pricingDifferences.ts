export interface PricingDifference {
  category: string;
  line: string;
  basic: string;
  valueAdded: string;
  premium: string;
  elite: string;
}

export const pricingDifferences: PricingDifference[] = [
  {
    "category": "Structure",
    "line": "Steel",
    "basic": "Shree | Radha",
    "valueAdded": "Vizag | JSW Neo",
    "premium": "Vizag | JSW Neo",
    "elite": "Vizag | JSW Neo"
  },
  {
    "category": "Structure",
    "line": "Cement",
    "basic": "Zuari | Maha of 43 or 53 grade",
    "valueAdded": "Zuari | Maha of 43 or 53 grade",
    "premium": "Ultratech | Ramco Supercrete of 43 or 53 grade",
    "elite": "Ultratech | Ramco Supercrete of 43 or 53 grade"
  },
  {
    "category": "Structure",
    "line": "Aggregates",
    "basic": "20mm & 40mm",
    "valueAdded": "20mm & 40mm",
    "premium": "20mm & 40mm",
    "elite": "20mm & 40mm"
  },
  {
    "category": "Structure",
    "line": "Blocks",
    "basic": "Standard Red Bricks. 9 inch & 4 inch",
    "valueAdded": "Standard Red Bricks. 9 inch & 4 inch",
    "premium": "Standard Red Bricks. 9 inch & 4 inch",
    "elite": "Standard Red Bricks. 9 inch & 4 inch"
  },
  {
    "category": "Structure",
    "line": "RCC Design Mix",
    "basic": "M20 / M25 or As per the structural designer recommendation",
    "valueAdded": "M20 / M25 or As per the structural designer recommendation",
    "premium": "ACC or Ultratech M20 / M25 or As per the structural designer recommendation",
    "elite": "ACC or Ultratech M20 / M25 or As per the structural designer recommendation"
  },
  {
    "category": "Structure",
    "line": "Ceiling Height",
    "basic": "10 feet (Finished Floor level to Finished Floor level)",
    "valueAdded": "10 feet (Finished Floor level to Finished Floor level)",
    "premium": "10 feet (Finished Floor level to Finished Floor level)",
    "elite": "10 feet (Finished Floor level to Finished Floor level)"
  },
  {
    "category": "Kitchen",
    "line": "Ceramic Wall Dado",
    "basic": "Upto Rs.40 per Sqft",
    "valueAdded": "Upto Rs.60 per Sqft",
    "premium": "Upto Rs.80 per Sqft",
    "elite": "Upto Rs.90 per Sqft"
  },
  {
    "category": "Kitchen",
    "line": "Main Sink Faucet",
    "basic": "Upto Rs.1300",
    "valueAdded": "Upto Rs.2000",
    "premium": "Upto Rs.3500",
    "elite": "Upto Rs.3500"
  },
  {
    "category": "Kitchen",
    "line": "Any other Faucet or Accessories",
    "basic": "ISI Marked",
    "valueAdded": "ISI Marked",
    "premium": "Parryware / Hindware / Jaquar",
    "elite": "Parryware / Hindware / Jaquar"
  },
  {
    "category": "Kitchen",
    "line": "Kitchen Sink",
    "basic": "Stainless Steel of Single Sink make worth Rs. 3,000",
    "valueAdded": "Stainless Steel of Single Sink make worth Rs. 6,000",
    "premium": "—",
    "elite": "—"
  },
  {
    "category": "Bathroom",
    "line": "Ceramic Wall Dado upto 7' height",
    "basic": "Upto Rs.40 per Sqft",
    "valueAdded": "Upto Rs.60 per Sqft",
    "premium": "Upto Rs.80 per Sqft",
    "elite": "Upto Rs.90 per Sqft"
  },
  {
    "category": "Bathroom",
    "line": "Sanitarywares & CP fittings upto Rs. 30,000 per 1000 Sqft of Hindware make",
    "basic": "Yes",
    "valueAdded": "—",
    "premium": "—",
    "elite": "—"
  },
  {
    "category": "Bathroom",
    "line": "CPVC Pipe",
    "basic": "Apollo | Astral",
    "valueAdded": "Apollo | Astral",
    "premium": "Apollo | Astral",
    "elite": "Apollo | Astral"
  },
  {
    "category": "Bathroom",
    "line": "Bathroom doors",
    "basic": "Waterproof flush doors or WPC",
    "valueAdded": "Waterproof flush doors or WPC",
    "premium": "Waterproof flush doors or WPC",
    "elite": "Waterproof flush doors or WPC"
  },
  {
    "category": "Doors & Windows",
    "line": "Windows",
    "basic": "Aluminium Windows with glass shutters and mesh shutters (3 track with 1 mesh) of Jindal Profiles",
    "valueAdded": "UPVC Windows with glass and mesh shutters (3 track with 1 mesh) of Atlas | Green fourtune | Greentech",
    "premium": "UPVC Windows with glass and mesh shutters (3 track with 1 mesh) of NCL Veka | Prominance | V-tech",
    "elite": "UPVC Windows with glass and mesh shutters (3 track with 1 mesh) of NCL Veka | Wintech | Karthik UPVC | Simta Astrix"
  },
  {
    "category": "Doors & Windows",
    "line": "Main Door",
    "basic": "Flush Door with Veneer. Sal wood frame of 5 inch by 3 inch, worth Rs.20,000 including fixtures.",
    "valueAdded": "Teak Door With Teak frame of 5 inch by 3 inch, worth Rs.30,000 including fixtures.",
    "premium": "Teak Door With Teak frame of 5 inch by 3.5 inch, worth Rs.40,000 including fixtures.",
    "elite": "Teak Door With Teak frame of 5 inch by 3.5 inch, worth Rs.50,000 including fixtures."
  },
  {
    "category": "Doors & Windows",
    "line": "Internal Doors",
    "basic": "Membrane doors / Flush Door with Laminates upto Rs.9,000 including fixtures. Door Frames of Sal Wood 4 inch by 2.5 inch.",
    "valueAdded": "Membrane doors / Flush Door with Laminates upto Rs.9,000 including fixtures. Door Frames of Sal Wood 4 inch by 2.5 inch.",
    "premium": "Membrane doors / Flush Door with Laminates upto upto Rs.12,000 including fixtures. Door Frames of Sal Wood 4 inch by 3 inch.",
    "elite": "Membrane doors / Flush Door with Laminates upto Rs.13,000 including fixtures. Door Frames of Sal Wood 4 inch by 3 inch."
  },
  {
    "category": "Painting",
    "line": "Interior Painting",
    "basic": "JK Putty + Tractor Emulsion or equivalent",
    "valueAdded": "JK Putty + Tractor Shyne Emulsion",
    "premium": "JK Putty + Apcolite Premium Emulsion",
    "elite": "JK Putty + Royale Luxury Emulsion"
  },
  {
    "category": "Painting",
    "line": "Exterior Painting",
    "basic": "Asian Primer + Ace Exterior emulsion Paint or equivalent",
    "valueAdded": "Asian Primer + Apex Exterior Emulsion Paint",
    "premium": "Asian Primer + Apex Exterior Emulsion Paint",
    "elite": "Asian Primer + Apex Ultima Exterior Emulsion Paint"
  },
  {
    "category": "Flooring",
    "line": "Living & Dining Flooring",
    "basic": "Tiles of value upto Rs.50 per sqft",
    "valueAdded": "Tiles or Granite of value upto Rs.100 per sqft",
    "premium": "Tiles or Granite of value upto Rs.140 per sqft",
    "elite": "Tiles or Granite of value upto Rs.160 per sqft"
  },
  {
    "category": "Flooring",
    "line": "Rooms & Kitchen Flooring",
    "basic": "Tiles of value upto Rs.50 per sqft",
    "valueAdded": "Tiles of value upto Rs.80 per sqft",
    "premium": "Tiles or Granite  of value upto Rs.120 per sqft",
    "elite": "Tiles or Granite of value upto Rs.140 per sqft"
  },
  {
    "category": "Flooring",
    "line": "Balcony and Open Areas Flooring",
    "basic": "Anti-skid tiles of value upto Rs.40 per sqft",
    "valueAdded": "Anti-skid tiles of value upto Rs.60 per sqft",
    "premium": "Anti-skid tiles of value upto Rs.80 per sqft",
    "elite": "Anti-skid tiles of value upto Rs.90 per sqft"
  },
  {
    "category": "Flooring",
    "line": "Staircase Flooring",
    "basic": "Sadarahalli Granite of value upto ₹ 70 per sqft",
    "valueAdded": "Sadarahalli Granite of value upto ₹ 80 per sqft",
    "premium": "Sadarahalli Granite of value upto ₹ 110 per sqft",
    "elite": "Sadarahalli Granite of value upto ₹ 140 per sqft"
  },
  {
    "category": "Flooring",
    "line": "Parking Tiles",
    "basic": "Anti-skid tiles of value upto ₹ 40 per sqft",
    "valueAdded": "Anti-skid tiles of value upto ₹ 50 per sqft",
    "premium": "Anti-skid tiles of value upto ₹ 70 per sqft",
    "elite": "Anti-skid tiles of value upto ₹ 70 per sqft"
  },
  {
    "category": "Electrical",
    "line": "All wiring shall be done with fire proof wires of Finolex | Anchor | Havells",
    "basic": "Yes",
    "valueAdded": "Yes",
    "premium": "Yes",
    "elite": "Yes"
  },
  {
    "category": "Electrical",
    "line": "Switches & Sockets",
    "basic": "Legrand Allzy | GM(G9) | HI-FI | Great white",
    "valueAdded": "Roma | Lisha | Legrand lyncus | Havells Fabio",
    "premium": "Legrand mylinc | Havells Coral | Roma",
    "elite": "Schneider unica pure | legrand myrius | Jaquar"
  },
  {
    "category": "Miscellaneous",
    "line": "Overhead Tank",
    "basic": "Double Layered tank of 1000 Ltrs of Duratank make",
    "valueAdded": "Double Layered tank of 1500 Ltrs of Duratank make",
    "premium": "—",
    "elite": "—"
  },
  {
    "category": "Miscellaneous",
    "line": "Underground Sump",
    "basic": "4000 Ltrs",
    "valueAdded": "6000 Ltrs",
    "premium": "7000 Ltrs",
    "elite": "8000 Ltrs"
  },
  {
    "category": "Miscellaneous",
    "line": "Staircase Railing",
    "basic": "MS Railing",
    "valueAdded": "MS Railing",
    "premium": "SS (Stainless) Railing of SS 304 grade profiles",
    "elite": "SS (Stainless) Glass Railing of SS 304 grade profiles"
  },
  {
    "category": "Miscellaneous",
    "line": "Window Grills",
    "basic": "Basic MS Grill with enamel Paint at Rs. 180 per Sqft",
    "valueAdded": "Basic MS Grill with enamel Paint at Rs. 180 per Sqft",
    "premium": "Basic MS Grill with enamel Paint at Rs. 180 per Sqft",
    "elite": "Basic MS Grill with enamel Paint at Rs. 180 per Sqft"
  },
  {
    "category": "Bathroom",
    "line": "Sanitarywares & CP fittings upto Rs. 50,000 per 1000 Sqft of Parryware make",
    "basic": "—",
    "valueAdded": "Yes",
    "premium": "—",
    "elite": "—"
  },
  {
    "category": "Electrical",
    "line": "UPS Wiring Provision",
    "basic": "—",
    "valueAdded": "Yes",
    "premium": "Yes",
    "elite": "Yes"
  },
  {
    "category": "Kitchen",
    "line": "Kitchen Sink of Stainless Steel or granite Finish worth Rs. 8,000 (Futura, Carysil)",
    "basic": "—",
    "valueAdded": "—",
    "premium": "Yes",
    "elite": "Yes"
  },
  {
    "category": "Bathroom",
    "line": "Sanitarywares & CP fittings upto Rs. 70,000 per 1000 Sqft of Jaquar make",
    "basic": "—",
    "valueAdded": "—",
    "premium": "Yes",
    "elite": "—"
  },
  {
    "category": "Bathroom",
    "line": "Mirror, Soap Dish, Towel Rail",
    "basic": "—",
    "valueAdded": "—",
    "premium": "Worth Rs. 7,000 till 1000 ft of Construction",
    "elite": "Worth Rs. 9,000 till 1000 ft of Construction"
  },
  {
    "category": "Bathroom",
    "line": "Solar water heater provision",
    "basic": "—",
    "valueAdded": "—",
    "premium": "Yes",
    "elite": "Yes"
  },
  {
    "category": "Doors & Windows",
    "line": "1 Pooja Room Door",
    "basic": "—",
    "valueAdded": "—",
    "premium": "Burma Teak along with Teak frame of 5inch by 2.5 inch, worth Rs. 31,000 for every 2,000 sft package area",
    "elite": "Burma Teak along with Teak frame of 5inch by 2.5 inch, worth Rs. 35,000 for every 2,000 sft package area"
  },
  {
    "category": "Miscellaneous",
    "line": "A Sintex /Apollo Double layered overhead tank of",
    "basic": "—",
    "valueAdded": "—",
    "premium": "2000L shall be provided. Any Additional capacity shall be chargeable at INR 9 per L. Platform for the OHT shall be charged additional based on the design and specifications",
    "elite": "2000L shall be provided. Any Additional capacity shall be chargeable at INR 9 per L. Platform for the OHT shall be charged additional based on the design and specifications"
  },
  {
    "category": "Bathroom",
    "line": "Sanitarywares & CP fittings upto Rs. 80,000 per 1000 Sqft of Kohler make",
    "basic": "—",
    "valueAdded": "—",
    "premium": "—",
    "elite": "Yes"
  },
  {
    "category": "Electrical",
    "line": "1 EV Charging Point at Ground floor",
    "basic": "—",
    "valueAdded": "—",
    "premium": "—",
    "elite": "Yes"
  },
  {
    "category": "Miscellaneous",
    "line": "1 Copper gas connection for every dwelling unit of 1,500 sft package area",
    "basic": "—",
    "valueAdded": "—",
    "premium": "—",
    "elite": "Yes"
  }
];
