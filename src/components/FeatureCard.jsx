import React from 'react';
import Link from '@docusaurus/Link';

export default function FeatureCard({ icon, title, description, href }) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <div
        style={{
          padding: '1.5rem',
          borderRadius: '8px',
          border: '1px solid var(--ifm-color-emphasis-200)',
          height: '100%',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--ifm-color-primary)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-200)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div style={{ fontSize: '2rem' }}>{icon}</div>
        <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>{title}</h3>
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)' }}>
          {description}
        </p>
      </div>
    </Link>
  );
}
