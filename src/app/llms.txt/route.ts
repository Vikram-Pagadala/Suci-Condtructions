import { site } from '@/lib/site';

export async function GET() {
  const content = `# SUCI Constructions

> Engineer-led construction company based in New Nagole, Hyderabad. Founded by structural engineers. Builds independent houses, villas, commercial buildings and PEB structures across Telangana and Andhra Pradesh.

## Key facts
- Packages per sq ft including GST: Basic ₹2,090, Value Added ₹2,290, Premium ₹2,700, Elite ₹2,950
- Office: ${site.address}
- Phone: ${site.phone}
- Hours: ${site.hours}

## Pages
- [Services](${site.url}/services)
- [Pricing and packages](${site.url}/pricing)
- [Projects](${site.url}/projects)
- [About and leadership](${site.url}/about)
- [Contact](${site.url}/contact)
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
