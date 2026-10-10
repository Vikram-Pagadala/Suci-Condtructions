import React from 'react';
import Link from 'next/link';
import JsonLd from './JsonLd/JsonLd';
import { site } from '@/lib/site';

interface BreadcrumbItem {
  label: string;
  path: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": site.url
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `${site.url}${item.path}`
      }))
    ]
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <nav aria-label="Breadcrumb" style={{ padding: 'var(--space-16) 0', fontSize: '14px', color: 'var(--color-deccan-slate)' }}>
        <div className="container">
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
              <Link href={item.path} aria-current={index === items.length - 1 ? 'page' : undefined} style={{ color: index === items.length - 1 ? 'var(--color-obsidian)' : 'inherit', textDecoration: 'none', fontWeight: index === items.length - 1 ? '600' : 'normal' }}>
                {item.label}
              </Link>
            </React.Fragment>
          ))}
        </div>
      </nav>
    </>
  );
}
