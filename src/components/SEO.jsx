import { useEffect } from 'react';

const SITE_NAME = 'Vindhya Healthcare';

export default function SEO({
  title,
  description,
  canonical,
  keywords = [],
  image = 'https://www.vindhyahealthcare.in/android-chrome-512x512.png',
  type = 'website',
  structuredData,
}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const descriptionText = description || '';
    const keywordContent = Array.isArray(keywords) ? keywords.filter(Boolean).join(', ') : keywords;
    const canonicalUrl = canonical || window.location.href;

    const setMetaTag = (selector, value, attribute = 'content') => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.includes('property=')) {
          element.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] || '');
        } else if (selector.includes('name=')) {
          element.setAttribute('name', selector.match(/name="([^"]+)"/)?.[1] || '');
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    document.title = fullTitle;

    setMetaTag('meta[name="description"]', descriptionText);
    setMetaTag('meta[name="keywords"]', keywordContent);
    setMetaTag('meta[property="og:title"]', fullTitle);
    setMetaTag('meta[property="og:description"]', descriptionText);
    setMetaTag('meta[property="og:type"]', type);
    setMetaTag('meta[property="og:url"]', canonicalUrl);
    setMetaTag('meta[property="og:image"]', image);
    setMetaTag('meta[name="twitter:title"]', fullTitle);
    setMetaTag('meta[name="twitter:description"]', descriptionText);
    setMetaTag('meta[name="twitter:image"]', image);

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    let script = document.head.querySelector('script[data-seo-structured-data="true"]');
    if (script) {
      script.remove();
    }

    if (structuredData) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-structured-data', 'true');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      if (script) {
        script.remove();
      }
    };
  }, [title, description, canonical, keywords, image, type, structuredData]);

  return null;
}