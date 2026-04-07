import { useEffect } from 'react';

interface SEOProps {
  lang: 'es' | 'en';
  title: string;
  description: string;
  path?: string;
}

const BASE_URL = 'https://rociogutierrez.com';
const OG_IMAGE = `${BASE_URL}/og-image.jpg`;

export default function SEO({ lang, title, description, path = '' }: SEOProps) {
  const url = `${BASE_URL}${path}`;

  useEffect(() => {
    // Language
    document.documentElement.lang = lang;

    // Title
    document.title = title;

    // Meta description
    setMeta('name', 'description', description);

    // Canonical
    setLink('canonical', url);

    // Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', OG_IMAGE);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:locale', lang === 'es' ? 'es_AR' : 'en_US');
    setMeta('property', 'og:locale:alternate', lang === 'es' ? 'en_US' : 'es_AR');
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'Rocío Gutiérrez');

    // Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', OG_IMAGE);

    // Schema.org
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          '@id': `${BASE_URL}/#person`,
          name: 'Rocío Gutiérrez',
          url: BASE_URL,
          jobTitle: lang === 'es'
            ? 'Consultora en Arquitectura de Procesos IT & LegalOps'
            : 'IT Process Architecture & LegalOps Consultant',
          description: description,
          image: OG_IMAGE,
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'AR',
            addressLocality: 'Argentina',
          },
          sameAs: [
            'https://www.linkedin.com/in/gutierrezrocioa',
          ],
        },
        {
          '@type': 'ProfessionalService',
          '@id': `${BASE_URL}/#service`,
          name: 'Rocío Gutiérrez Consultoría',
          url: BASE_URL,
          provider: { '@id': `${BASE_URL}/#person` },
          areaServed: ['AR', 'CL', 'UY', 'ES'],
          serviceType: lang === 'es'
            ? ['Consultoría IT', 'Legal Operations', 'Arquitectura de Procesos', 'Project Management']
            : ['IT Consulting', 'Legal Operations', 'Process Architecture', 'Project Management'],
        },
        {
          '@type': 'WebSite',
          '@id': `${BASE_URL}/#website`,
          url: BASE_URL,
          name: 'Rocío Gutiérrez',
          inLanguage: [lang === 'es' ? 'es-AR' : 'en-US'],
        },
      ],
    };

    let schemaTag = document.getElementById('schema-org') as HTMLScriptElement | null;
    if (!schemaTag) {
      schemaTag = document.createElement('script');
      schemaTag.id = 'schema-org';
      schemaTag.type = 'application/ld+json';
      document.head.appendChild(schemaTag);
    }
    schemaTag.textContent = JSON.stringify(schema);
  }, [lang, title, description, url]);

  return null;
}

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}
