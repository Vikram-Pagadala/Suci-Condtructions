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
    "id": "basic",
    "name": "Basic",
    "pricePerSqft": 2090,
    "priceNote": "incl. GST",
    "categories": [
      {
        "title": "Structure",
        "items": [
          "Steel - Shree | Radha",
          "Cement - Zuari | Maha of 43 or 53 grade",
          "Aggregates - 20mm & 40mm",
          "Blocks - Standard Red Bricks. 9 inch & 4 inch",
          "RCC Design Mix - M20 / M25 or As per the structural designer recommendation",
          "Ceiling Height - 10 feet (Finished Floor level to Finished Floor level)"
        ]
      },
      {
        "title": "Kitchen",
        "items": [
          "Ceramic Wall Dado - Upto Rs.40 per Sqft",
          "Main Sink Faucet - Upto Rs.1300",
          "Any other Faucet or Accessories - ISI Marked",
          "Kitchen Sink - Stainless Steel of Single Sink make worth Rs. 3,000"
        ]
      },
      {
        "title": "Bathroom",
        "items": [
          "Ceramic Wall Dado upto 7' height - Upto Rs.40 per Sqft",
          "Sanitarywares & CP fittings upto Rs. 30,000 per 1000 Sqft of Hindware make",
          "CPVC Pipe - Apollo | Astral",
          "Bathroom doors - Waterproof flush doors or WPC"
        ]
      },
      {
        "title": "Doors & Windows",
        "items": [
          "Windows - Aluminium Windows with glass shutters and mesh shutters (3 track with 1 mesh) of Jindal Profiles",
          "Main Door - Flush Door with Veneer. Sal wood frame of 5 inch by 3 inch, worth Rs.20,000 including fixtures.",
          "Internal Doors - Membrane doors / Flush Door with Laminates upto Rs.9,000 including fixtures. Door Frames of Sal Wood 4 inch by 2.5 inch."
        ]
      },
      {
        "title": "Painting",
        "items": [
          "Interior Painting - JK Putty + Tractor Emulsion or equivalent",
          "Exterior Painting - Asian Primer + Ace Exterior emulsion Paint or equivalent"
        ]
      },
      {
        "title": "Flooring",
        "items": [
          "Living & Dining Flooring - Tiles of value upto Rs.50 per sqft",
          "Rooms & Kitchen Flooring - Tiles of value upto Rs.50 per sqft",
          "Balcony and Open Areas Flooring - Anti-skid tiles of value upto Rs.40 per sqft",
          "Staircase Flooring - Sadarahalli Granite of value upto ₹ 70 per sqft",
          "Parking Tiles - Anti-skid tiles of value upto ₹ 40 per sqft"
        ]
      },
      {
        "title": "Electrical",
        "items": [
          "All wiring shall be done with fire proof wires of Finolex | Anchor | Havells",
          "Switches & Sockets - Legrand Allzy | GM(G9) | HI-FI | Great white"
        ]
      },
      {
        "title": "Miscellaneous",
        "items": [
          "Overhead Tank - Double Layered tank of 1000 Ltrs of Duratank make",
          "Underground Sump - 4000 Ltrs",
          "Staircase Railing - MS Railing",
          "Window Grills - Basic MS Grill with enamel Paint at Rs. 180 per Sqft"
        ]
      }
    ]
  },
  {
    "id": "value-added",
    "name": "Value Added",
    "pricePerSqft": 2290,
    "priceNote": "incl. GST",
    "categories": [
      {
        "title": "Structure",
        "items": [
          "Steel -Vizag | JSW Neo",
          "Cement -Zuari | Maha of 43 or 53 grade",
          "Aggregates - 20mm & 40mm",
          "Blocks - Standard Red Bricks. 9 inch & 4 inch",
          "RCC Design Mix - M20 / M25 or As per the structural designer recommendation",
          "Ceiling Height - 10 feet (Finished Floor level to Finished Floor level)"
        ]
      },
      {
        "title": "Kitchen",
        "items": [
          "Ceramic Wall Dado - Upto Rs.60 per Sqft",
          "Main Sink Faucet - Upto Rs.2000",
          "Any other Faucet or Accessories - ISI Marked",
          "Kitchen Sink - Stainless Steel of Single Sink make worth Rs. 6,000"
        ]
      },
      {
        "title": "Bathroom",
        "items": [
          "Ceramic Wall Dado upto 7' height - Upto Rs.60 per Sqft",
          "Sanitarywares & CP fittings upto Rs. 50,000 per 1000 Sqft of Parryware make",
          "CPVC Pipe - Apollo | Astral",
          "Bathroom doors - Waterproof flush doors or WPC"
        ]
      },
      {
        "title": "Doors & Windows",
        "items": [
          "Windows - UPVC Windows with glass and mesh shutters (3 track with 1 mesh) of Atlas | Green fourtune | Greentech",
          "Main Door - Teak Door With Teak frame of 5 inch by 3 inch, worth Rs.30,000 including fixtures.",
          "Internal Doors - Membrane doors / Flush Door with Laminates upto Rs.9,000 including fixtures. Door Frames of Sal Wood 4 inch by 2.5 inch."
        ]
      },
      {
        "title": "Painting",
        "items": [
          "Interior Painting - JK Putty + Tractor Shyne Emulsion",
          "Exterior Painting - Asian Primer + Apex Exterior Emulsion Paint"
        ]
      },
      {
        "title": "Flooring",
        "items": [
          "Living & Dining Flooring - Tiles or Granite of value upto Rs.100 per sqft",
          "Rooms & Kitchen Flooring - Tiles of value upto Rs.80 per sqft",
          "Balcony and Open Areas Flooring - Anti-skid tiles of value upto Rs.60 per sqft",
          "Staircase Flooring - Sadarahalli Granite of value upto ₹ 80 per sqft",
          "Parking Tiles - Anti-skid tiles of value upto ₹ 50 per sqft"
        ]
      },
      {
        "title": "Electrical",
        "items": [
          "All wiring shall be done with fire proof wires of Finolex | Anchor | Havells",
          "Switches & Sockets - Roma | Lisha | Legrand lyncus | Havells Fabio",
          "UPS Wiring Provision"
        ]
      },
      {
        "title": "Miscellaneous",
        "items": [
          "Overhead Tank - Double Layered tank of 1500 Ltrs of Duratank make",
          "Underground Sump - 6000 Ltrs",
          "Staircase Railing - MS Railing",
          "Window Grills - Basic MS Grill with enamel Paint at Rs. 180 per Sqft"
        ]
      }
    ]
  },
  {
    "id": "premium",
    "name": "Premium",
    "pricePerSqft": 2700,
    "priceNote": "incl. GST",
    "categories": [
      {
        "title": "Structure",
        "items": [
          "Steel - Vizag | JSW Neo",
          "Cement - Ultratech | Ramco Supercrete of 43 or 53 grade",
          "Aggregates - 20mm & 40mm",
          "Blocks - Standard Red Bricks. 9 inch & 4 inch",
          "RCC Design Mix - ACC or Ultratech M20 / M25 or As per the structural designer recommendation",
          "Ceiling Height - 10 feet (Finished Floor level to Finished Floor level)"
        ]
      },
      {
        "title": "Kitchen",
        "items": [
          "Ceramic Wall Dado - Upto Rs.80 per Sqft",
          "Main Sink Faucet - Upto Rs.3500",
          "Any other Faucet or Accessories - Parryware / Hindware / Jaquar",
          "Kitchen Sink of Stainless Steel or granite Finish worth Rs. 8,000 (Futura, Carysil)"
        ]
      },
      {
        "title": "Bathroom",
        "items": [
          "Ceramic Wall Dado upto 7' height - Upto Rs.80 per Sqft",
          "Sanitarywares & CP fittings upto Rs. 70,000 per 1000 Sqft of Jaquar make",
          "CPVC Pipe - Apollo | Astral",
          "Bathroom doors - Waterproof flush doors or WPC",
          "Mirror, Soap Dish, Towel Rail - Worth Rs. 7,000 till 1000 ft of Construction",
          "Solar water heater provision"
        ]
      },
      {
        "title": "Doors & Windows",
        "items": [
          "Windows - UPVC Windows with glass and mesh shutters (3 track with 1 mesh) of NCL Veka | Prominance | V-tech",
          "Main Door - Teak Door With Teak frame of 5 inch by 3.5 inch, worth Rs.40,000 including fixtures.",
          "Internal Doors - Membrane doors / Flush Door with Laminates upto upto Rs.12,000 including fixtures. Door Frames of Sal Wood 4 inch by 3 inch.",
          "1 Pooja Room Door - Burma Teak along with Teak frame of 5inch by 2.5 inch, worth Rs. 31,000 for every 2,000 sft package area"
        ]
      },
      {
        "title": "Painting",
        "items": [
          "Interior Painting - JK Putty + Apcolite Premium Emulsion",
          "Exterior Painting - Asian Primer + Apex Exterior Emulsion Paint"
        ]
      },
      {
        "title": "Flooring",
        "items": [
          "Living & Dining Flooring - Tiles or Granite of value upto Rs.140 per sqft",
          "Rooms & Kitchen Flooring -Tiles or Granite  of value upto Rs.120 per sqft",
          "Balcony and Open Areas Flooring - Anti-skid tiles of value upto Rs.80 per sqft",
          "Staircase Flooring - Sadarahalli Granite of value upto ₹ 110 per sqft",
          "Parking Tiles - Anti-skid tiles of value upto ₹ 70 per sqft"
        ]
      },
      {
        "title": "Electrical",
        "items": [
          "All wiring shall be done with fire proof wires of Finolex | Anchor | Havells",
          "Switches & Sockets - Legrand mylinc | Havells Coral | Roma",
          "UPS Wiring Provision"
        ]
      },
      {
        "title": "Miscellaneous",
        "items": [
          "A Sintex /Apollo Double layered overhead tank of - 2000L shall be provided. Any Additional capacity shall be chargeable at INR 9 per L. Platform for the OHT shall be charged additional based on the design and specifications",
          "Underground Sump - 7000 Ltrs",
          "Staircase Railing - SS (Stainless) Railing of SS 304 grade profiles",
          "Window Grills - Basic MS Grill with enamel Paint at Rs. 180 per Sqft"
        ]
      }
    ]
  },
  {
    "id": "elite",
    "name": "Elite",
    "pricePerSqft": 2950,
    "priceNote": "incl. GST",
    "categories": [
      {
        "title": "Structure",
        "items": [
          "Steel - Vizag | JSW Neo",
          "Cement - Ultratech | Ramco Supercrete of 43 or 53 grade",
          "Aggregates - 20mm & 40mm",
          "Blocks - Standard Red Bricks. 9 inch & 4 inch",
          "RCC Design Mix - ACC or Ultratech M20 / M25 or As per the structural designer recommendation",
          "Ceiling Height - 10 feet (Finished Floor level to Finished Floor level)"
        ]
      },
      {
        "title": "Kitchen",
        "items": [
          "Ceramic Wall Dado - Upto Rs.90 per Sqft",
          "Main Sink Faucet - Upto Rs.3500",
          "Any other Faucet or Accessories - Parryware / Hindware / Jaquar",
          "Kitchen Sink of Stainless Steel or granite Finish worth Rs. 8,000 (Futura, Carysil)"
        ]
      },
      {
        "title": "Bathroom",
        "items": [
          "Ceramic Wall Dado upto 7' height - Upto Rs.90 per Sqft",
          "Sanitarywares & CP fittings upto Rs. 80,000 per 1000 Sqft of Kohler make",
          "CPVC Pipe - Apollo | Astral",
          "Bathroom doors - Waterproof flush doors or WPC",
          "Mirror, Soap Dish, Towel Rail - Worth Rs. 9,000 till 1000 ft of Construction",
          "Solar water heater provision"
        ]
      },
      {
        "title": "Doors & Windows",
        "items": [
          "Windows - UPVC Windows with glass and mesh shutters (3 track with 1 mesh) of NCL Veka | Wintech | Karthik UPVC | Simta Astrix",
          "Main Door - Teak Door With Teak frame of 5 inch by 3.5 inch, worth Rs.50,000 including fixtures.",
          "Internal Doors - Membrane doors / Flush Door with Laminates upto Rs.13,000 including fixtures. Door Frames of Sal Wood 4 inch by 3 inch.",
          "1 Pooja Room Door - Burma Teak along with Teak frame of 5inch by 2.5 inch, worth Rs. 35,000 for every 2,000 sft package area"
        ]
      },
      {
        "title": "Painting",
        "items": [
          "Interior Painting - JK Putty + Royale Luxury Emulsion",
          "Exterior Painting - Asian Primer + Apex Ultima Exterior Emulsion Paint"
        ]
      },
      {
        "title": "Flooring",
        "items": [
          "Living & Dining Flooring - Tiles or Granite of value upto Rs.160 per sqft",
          "Rooms & Kitchen Flooring -Tiles or Granite of value upto Rs.140 per sqft",
          "Balcony and Open Areas Flooring - Anti-skid tiles of value upto Rs.90 per sqft",
          "Staircase Flooring - Sadarahalli Granite of value upto ₹ 140 per sqft",
          "Parking Tiles - Anti-skid tiles of value upto ₹ 70 per sqft"
        ]
      },
      {
        "title": "Electrical",
        "items": [
          "All wiring shall be done with fire proof wires of Finolex | Anchor | Havells",
          "Switches & Sockets - Schneider unica pure | legrand myrius | Jaquar",
          "UPS Wiring Provision",
          "1 EV Charging Point at Ground floor"
        ]
      },
      {
        "title": "Miscellaneous",
        "items": [
          "A Sintex /Apollo Double layered overhead tank of - 2000L shall be provided. Any Additional capacity shall be chargeable at INR 9 per L. Platform for the OHT shall be charged additional based on the design and specifications",
          "Underground Sump - 8000 Ltrs",
          "Staircase Railing - SS (Stainless) Glass Railing of SS 304 grade profiles",
          "Window Grills - Basic MS Grill with enamel Paint at Rs. 180 per Sqft",
          "1 Copper gas connection for every dwelling unit of 1,500 sft package area"
        ]
      }
    ]
  }
];
